/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 16:27:02
 * @FilePath: \notejse:\Demo\webpack-study\14_webpack_lazy\src\js\index.js
 */

document.querySelector("#btn").onclick = function () {
  /* 
   懒加载：当文件需要时才加载
   预加载：prefetch：会在使用前提前加载，等其他资源加载完毕，浏览器再加载(但是此方法兼容性差)
   正常加载是并行加载
  */
  import(/*webpackChunkName:'test',webpackPrefetch:true*/'./test')
    .then(({ mul }) => { console.log(mul(4, 5)); })
    .catch(err => { console.log("文件加载失败", err) })
}
function add(a, b) {
  return a + b;
}
// eslint-disable-next-line
console.log(add(4, 5));
