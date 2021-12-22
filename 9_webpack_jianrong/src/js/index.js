/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-03 16:49:34
 * @FilePath: \notejse:\Demo\webpack-study\8_webpack_jianrong\src\js\index.js
 */
// 此处写法在IE浏览器会报错：语法错误
const add = (a, b) => a + b;
console.log(add(4, 5));
// 使用babel-loader打包后变成了  var add。。。
const p = new Promise((resolve) => {
  setTimeout(() => {
    console.log('延时');
    resolve('成功');
  });
});
console.log(p);
