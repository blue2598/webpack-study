/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-02 15:31:48
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-08 14:12:19
 * @FilePath: \notejse:\Demo\webpack-study\2_webpack_css&less\webpack.config.js
 */

/* 
   webpack5的entry、output都有默认配置值可以不用配置
   webpack配置文件(指示webpack干那些活：当运行webpack指令时，会加载里面的配置)
   所有构建工具都是基于nodejs平台运行的  模块化默认采用commonjs

*/
// nodejs 里用来拼接绝对路径的方法
const { resolve } = require('path')

// commonjs 语法
module.exports = {
    entry: './src/index.js',
    output: {
        filename: "main.js",
        // __dirname是nodejs的变量，代表当前文件的目录的绝对路径
        path: resolve(__dirname, 'build')
    },

    // loader的配置
    module: {
        rules: [
            {
                // 匹配哪些文件(!!!!!正则不要加引号)
                test: /\.css$/i,
                // 使用什么loader处理
                use: [
                    //创建style标签 将js中的样式资源插入，添加到head里面
                    'style-loader',
                    // 将css文件变成commonjs模块加在js中，里面是样式字符串
                    'css-loader'
                ]
            },
            {
                // 匹配哪些文件(!!!!!正则不要加引号)
                test: /\.less$/i,
                // 使用什么loader处理
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    },
    // plugins配置
    plugins: [

    ],
    // 模式  默认值是production
    mode: "development"
}