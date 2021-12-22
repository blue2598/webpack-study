/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-02 15:37:00
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-02 16:57:32
 * @FilePath: \notejse:\Demo\webpack-study\webpack2\src\index.js
 */
/* 使用webpack打包css文件
 一、新建webpack.config.json文件配置基本配置，以及使用style-loader和css-loader
 二、安装webpack和webpack-cli(这里根据webpack的特性，本级目录找不到，就找父级有没有依赖包，因此这里把
    npm i webpack webpack-cli -D 放在最外层目录执行，避免重复安装)
三、安装style-loader和css-loader

*/
import "./main.css";
import "./index.less"