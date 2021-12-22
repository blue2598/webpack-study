/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 13:37:10
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 16:20:32
 * @FilePath: \notejse:\Demo\webpack-study\6_webpack_css2file\webpack.config.js
 */
/* style-loader是创建style标签，将样式放入标签中
    css-loader是将css代码整合到街上文件中
    因此要想提取css文件，不能使用style-loader，使用mini-css-extract-plugin插件
    使用link标签引入  避免CSS样式都放在js代码中通过style标签引入  有闪屏现象
*/
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
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
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new MiniCssExtractPlugin({
            // 对输出的css文件重命名
            filename: "../css/built.css"
        })
    ],
    mode: "development"
}