/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 13:37:10
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 16:20:21
 * @FilePath: \notejse:\Demo\webpack-study\7_webpack_css2file2\webpack.config.js
 */
/* style-loader是创建style标签，将样式放入标签中
    css-loader是将css代码整合到街上文件中
    因此要想提取css文件，不能使用style-loader，使用mini-css-extract-plugin插件
    使用link标签引入  避免CSS样式都放在js代码中通过style标签引入  有闪屏现象
*/
process.env.NODE_ENV = "development";
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');//提取CSS样式成.css文件
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");//压缩css
module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,//用这个代替style-loader,提取css样式为单独的文件
                    /* css兼容性处理：使用postcss-loader postcss-preset-env */
                    'css-loader',
                    {
                        // 修改配置使用对象形式
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    require('postcss-preset-env')(),
                                    // 这个插件是帮助postcss找到package.json里面的browserslist，通过配置加载指定样式的css兼容性样式
                                    // 这里默认是使用生产环境的browserslist，生产环境可以通过设置node环境变量process.env.NODE_ENV = development
                                    /**
                                     * "browserslist":{
                                            "development":[
                                                // 开发环境下兼容最新版本浏览器
                                                "last 1 chrome version",
                                                "last 1 firefox version",
                                                "last 1 safari version"
                                            ],
                                            "production":[
                                                // 生产环境
                                                ">0.2%",//
                                                "not dead",
                                                "not op_mini all"
                                            ]
                                        }
                                    }
                                     * 
                                     */
                                ]
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件重命名
            filename: "../css/built.css"
        }),
        new CssMinimizerWebpackPlugin()
    ],
    mode: "development"
}