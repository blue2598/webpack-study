const { mode } = require("../7_webpack_css2file2/webpack.config");

/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:20
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 16:20:08
 * @FilePath: \notejse:\Demo\webpack-study\8_webpack_eslint\webpack.config.js
 */
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');
module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "js/built.js",
        path: resolve(__dirname, 'built')
    },
    module: {
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        /*
        为了测试eslint检查我在setting.json文件里把editor.formatOnSave设置成了false    
              这里使用了eslint-webpack-plugin   依赖eslint  ：
               npm i eslint-webpack-plugin eslint -D
               只检查自己写的js代码，不检查第三方库，因此这里做个排除//该插件默认抛出node_modules
               */
        // 设置检查规则，在package.json中设置eslintConfig
        /* 使用airbnb风格之南 需要 eslint-config-airbnb-base eslint-plugin-import */
        new ESLintPlugin({
            exclude: 'node_modules',
            extensions: "js",
            fix: true,
            context: resolve('src')
        })
    ],
    mode: "development",
}