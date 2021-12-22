const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 15:17:32
 * @FilePath: \notejse:\Demo\webpack-study\12_webpack_treeShaking\webpack.config.js
 */
/* 
   tree shaking:去除没使用到的代码
   条件：1、使用es6模块化；2、mode:"production"  w5直接输出代码结果


*/
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.[contenthash:10].js",
        path: resolve(__dirname, 'built')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ['@babel/preset-env',
                                // 使用corejs添加配置
                                {
                                    useBuiltIns: 'usage',
                                    corejs: {
                                        version: 3
                                    },
                                    // targets: "defaults"//使用corejs更改成
                                    targets: { chrome: '60', firefox: '60', ie: '9' }//版本号
                                }
                            ]
                        ],
                        // cacheDirectory: true,//第二次构建时才会读取之前的缓存
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new ESLintPlugin({
            exclude: 'node_modules',
            extensions: "js",
            fix: true,
            context: resolve('src')
        }),
        new MiniCssExtractPlugin({
            filename: "css/built.[contenthash:10].css"
        })
    ],
    mode: "production",
}