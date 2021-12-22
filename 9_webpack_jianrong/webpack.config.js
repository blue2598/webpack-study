const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 17:03:35
 * @FilePath: \notejse:\Demo\webpack-study\8_webpack_jianrong\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'built')
    },
    module: {
        rules: [
            /* 
            1、基本兼容性处理：只能处理转换基本语法，如promise不能转换
                js兼容性处理：babel-loader @babel/core @babel/preset-env =》需要配置
            2、全部兼容性处理：@babel/polyfill :所有兼容性代码都引入，增大代码体积=》下载后直接在js文件中引入
            3、按需处理兼容性问题 ：core-js=》在1的基础上增加配置
             */
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
                        ]
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
        })
    ],
    mode: "development",
}