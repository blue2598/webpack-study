const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-07 15:18:16
 * @FilePath: \notejse:\Demo\webpack-study\17_webpack_resolve\webpack.config.js
 */
/*
   resolve配置
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
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
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
    // 会自动分析多入口chunk中，有没有公共的文件，如果有打包成单独的一个chunk(不会重复打包)
    optimization: {
        splitChunks: {
            chunks: "all",
        }
    },
    mode: "production",
    resolve: {
        // 配置解析 模块路径别名
        // 可以在css文件下
        alias: {
            $css: resolve(__dirname, 'src/css')
        },
        // 配置省略文件路径的后缀名
        extensions: ['.js', '.json', '.jsx'],
        // 直接配置webpack解析模块依赖是哪个目录，不配置的话是一级一级往上找
        modules: [resolve(__dirname, '../node_modules'), 'node_modules']
    }
}