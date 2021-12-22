/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 09:46:16
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 10:25:58
 * @FilePath: \notejse:\Demo\webpack-study\4_webpack_img\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            // webpack5 不使用url-loader
            // {
            //     test: /\.(jpg|png|gif|jpeg)$/,
            //     // 使用一个loader可以直接写字符串,
            //     loader: 'url-loader',
            //     options: {
            //         // 图片大小小于8kb,就会被base64处理
            //         // 优点：减少请求数量
            //         // 缺点：图片体积会更大(文件请求速度更慢)
            //         limit: 8 * 1024,
            //     }
            // }
            // 这里使用html-loader处理html文件中引入的图片资源打包
            {
                test: /\.html$/,
                loader: "html-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",
}