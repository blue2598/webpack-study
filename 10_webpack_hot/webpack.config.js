/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 10:18:57
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 14:04:29
 * @FilePath: \notejse:\Demo\webpack-study\10_webpack_hot\webpack.config.js
 */

/* 
    样式文件：w5默认使用HMR功能，
    js文件：默认不能使用，解决：在js文件中添加代码(只能处理非入口文件的其他文件)
    html文件：默认不能使用HMR功能，同时不有个问题，html文件不能热更新，
    解决：修改entry为数组，将html文件引入(一般不需要解决)entry:["./src/index.html",'./src/index.html']
*/

const { resolve } = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//提取css文件到.css文件


module.exports = {
    // entry: "./src/index.js",
    entry: "./src/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./src/index.html" }),
        new MiniCssExtractPlugin({ filename: "built.css" })
    ],
    target: "web",
    mode: "development",
    devServer: {
        static: resolve(__dirname, 'build'),
        port: 8088,
        compress: true,
        open: true,
        // hot: true,//可以使在更新css文件的时候不重新加载js文件(这里w5默认开启)
    },
    // 一种提供源代码到构建后代码映射技术
    /* 
    内联:内联的在文件内部，构建速度更快，外部的会单独生成map文件
        [inline-|hidden-|eval-][nosources-][cheap-[modules-]]source-map
        inline-source-map:内联 提供错误信息到源代码位置
        hidden-source-map:外部   只能提示代码错误原因，不能提示到源代码，只能提示到构建后代码的位置
        eval-source-map:提供错误信息到源代码位置（多了个hash值）
        nosources-source-map：能提供错误信息，但是没有任何源代码信息
        cheap-source-map：错误代码和准确信息和源代码位置  只能精确到行
        cheap-modules-source-map：错误代码和准确信息

        开发环境：速度快调试更友好
        速度：(eval>inline>cheap)  eval-cheap-source-map>eval-source-map
        调试友好：(source-map>cheap-module-source-map>cheap-source-map)

        ---->eval-source-map / eval-cheap-module-source-map

        生产环境：隐藏源代码？调试要不要友好？内联会让代码体积变大，所以生产环境不用内联
        nosources-source-map
        hidden-source-map

        ---->source-map / cheap-module-source-map
    */
    devtool: 'cheap-source-map',
}
