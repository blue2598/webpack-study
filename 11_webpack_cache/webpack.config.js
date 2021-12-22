const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 15:07:34
 * @FilePath: \notejse:\Demo\webpack-study\11_webpack_cache\webpack.config.js
 */
/* 
    babel缓存  cacheDirectory:true，--->让第二次打包构建速度更快
    文件资源缓存：--->让代码上线运行缓存更好使用
        filename: "js/built.[hash:10].js",
        hash:给文件加hash值:每次webpack构建时生成唯一的hash值;
            问题：js和css同时使用一个hash值，如果重新打包，会导致所有缓存失效;
        chunkhash:根据chunk生成的hash值。如果打包来源于同一个chunk，
            问题：hash值一样，因为css是在js中引入的  属于同一个chunk
        contenthash：根据文件内容生成不同的hash。不同文件的hash值一定不一样


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
    mode: "development",
}