/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-03 15:09:39
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 15:15:10
 * @FilePath: \notejse:\Demo\webpack-study\12_webpack_treeShaking\src\js\index.js
 */
import '../css/index.css';

import { mul } from './test';

console.log(mul(4, 5));

function add(a, b) {
  return a + b;
}
// eslint-disabled-next-line
console.log(add(4, 5));
