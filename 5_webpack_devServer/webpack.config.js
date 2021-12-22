/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 10:44:24
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 11:26:28
 * @FilePath: \notejse:\Demo\webpack-study\5_webpack_devServer\webpack.config.js
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
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    mode: "development",

    // 开发服务器：（热重载）
    // 特点：只会在内存中编译打包，不会有任何输出
    // w5 启动derServer指令为：npx webpack serve

    target: "web",
    devServer: {
        // 这里监听到了js文件以及css文件的改动兵自动刷新了浏览器，但是改变index.html文件浏览器没有自动刷新
        // 可以通过watchFiles监听，但是watchFiles是有保存操作就会更新，无论保存的结果与上一次结果是不是一样
        static: resolve(__dirname, 'build'),
        compress: true,//启动gzip
        port: 8088,
        open: true,//自动打开浏览器
        // watchFiles: ['src/index.html'],
        // scripts: {
        //     "serve": "webpack serve"
        // }
    }
}