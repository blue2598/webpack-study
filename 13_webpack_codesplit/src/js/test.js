/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 15:13:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 15:17:53
 * @FilePath: \notejse:\Demo\webpack-study\12_webpack_treeShaking\src\js\test.js
 */
export function mul(x, y) {
  return x * y;
}
export function sub(x) {
  return new Promise((resolve) => {
    resolve(x);
  });
}
