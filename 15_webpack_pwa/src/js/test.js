/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 15:13:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 16:19:40
 * @FilePath: \notejse:\Demo\webpack-study\14_webpack_lazy\src\js\test.js
 */
console.log("test.js文件被加载了");
export function mul(x, y) {
  return x * y;
}
export function sub(x) {
  return new Promise((resolve) => {
    resolve(x);
  });
}
