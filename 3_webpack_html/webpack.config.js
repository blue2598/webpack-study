/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-02 17:14:19
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 09:40:50
 * @FilePath: \notejse:\Demo\webpack-study\3_webpack_html\webpack.config.js
 */

/*plugins插件需要 下载->引入->使用  */
const { resolve } = require("path")

const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
        ]
    },
    plugins: [
        // 会将打包后生成的js css自动引入
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development"
}