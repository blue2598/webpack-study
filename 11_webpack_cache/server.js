/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 14:41:06
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 14:56:45
 * @FilePath: \notejse:\Demo\webpack-study\11_webpack_cache\server.js
 */
/* 服务器代码 */

const express = require('express');
const app = express();
app.use(express.static('built', { maxAge: 1000 * 3600 }));//缓存1小时
app.listen(3000)