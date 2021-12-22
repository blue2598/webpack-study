/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 17:01:50
 * @FilePath: \notejse:\Demo\webpack-study\15_webpack_pwa\src\js\index.js
 */

function add(a, b) {
  return a + b;
}
// eslint-disable-next-line
console.log(add(4, 5));


// 注册serviceWorker
// 处理兼容性问题
console.log(navigator);
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    /* 1、这里如果与eslint配合  eslint不认识window、navigator等全局变量
          解决：package.json中 eslintConfig:{"env":{"browser":true}}
        2、serviceWorker必须运行在服务器上
    */
    navigator.serviceWorker.register('/service-worker.js')
      .then(res => {
        console.log("serviceWorker运行成功了");
      }).catch(_ => {
        console.log("serviceWorker运行失败");
      })
  })
}