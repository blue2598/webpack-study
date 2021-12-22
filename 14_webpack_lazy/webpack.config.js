const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 16:22:11
 * @FilePath: \notejse:\Demo\webpack-study\14_webpack_lazy\webpack.config.js
 */
/* 
   懒加载
   
    */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",//单入口
    // entry: {
    //     // 多入口
    //     main: "./src/js/index.js",
    //     test: "./src/js/test.js"
    // },
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, 'built')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
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