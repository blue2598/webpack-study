const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-07 14:49:34
 * @FilePath: \notejse:\Demo\webpack-study\16_webpack_thread&externals\webpack.config.js
 */
/* 
    thread-loader,多进程打包插件:一般给babel-loader使用
    优点：
    缺点：进程启动需要时间，进程启动大约需要600ms，进程通信也有开销
    只有工作时间消耗时间比较长，才需要多进程打包

     externals配置：排除文件

     dll：配置
   
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: "./src/js/index.js",//单入口
    output: {
        filename: "js/[name].[contenthash:10].js",
        path: resolve(__dirname, 'built')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'thread-loader',
                    {
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
                ]
            }
        ]
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
    externals: {
        // 需求：有些库需要通过cdn形式引入
        // 拒绝将JQuery打包进来->需要在html文件中引入
        jquery: 'jQuery',
    }
}