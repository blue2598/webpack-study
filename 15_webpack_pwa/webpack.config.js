const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 17:15:03
 * @FilePath: \notejse:\Demo\webpack-study\15_webpack_pwa\webpack.config.js
 */
/* 
PWA  Progressive Web App
 渐进式网络开发应用程序(无网络可访问)
 workbox --->workbox-webpack-plugin
   
    */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
/* 下载插件->引入->使用->在入口文件中注册 */
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
module.exports = {
    entry: "./src/js/index.js",//单入口
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, 'built')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new WorkboxWebpackPlugin.GenerateSW({
            /* 1、帮助serviceworker快速启动 2、删除旧的serviceworker*/
            // 在入口文件中需要注册
            clientsClaim: true,
            skipWaiting: true,
        })
    ],
    // 可以将node_modules中代码单独打包一个chunk最终输出
    // 自动分析多入口chunk中，有没有公共的文件，如果有打包成单独的一个chunk(不会重复打包)
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    mode: "production",
}