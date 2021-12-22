/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 10:17:15
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 13:46:28
 * @FilePath: \notejse:\Demo\webpack-study\10_webpack_hot\src\index.js
 */

import './index.css';

import show from './show';
console.log(show())();
console.log("index.js被加载了");


if (module.hot) {
    // 开启了hmr功能-》让HMR代码生效
    module.hot.accept('./show.js', function () {
        // 监听show.js变化，发生变化后重新执行回调
        show();
    })
}