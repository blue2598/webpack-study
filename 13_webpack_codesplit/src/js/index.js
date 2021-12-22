/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 16:23:07
 * @FilePath: \notejse:\Demo\webpack-study\13_webpack_codesplit\src\js\index.js
 */
import $ from 'jquery';
// eslint-disable-next-line
console.log($);


//前面的注释是指定打包名称，否则是名称是打包后生成的id
// 这里和eslint同时使用打包时有错误，暂时将eslint检测移除了
import(/*webpackChunkName:'test' */'./test')
  .then(({ mul }) => { console.log(mul(4, 5)); })
  .catch(err => { console.log("文件加载失败", err) })

function add(a, b) {
  return a + b;
}
// eslint-disable-next-line
console.log(add(4, 5));
