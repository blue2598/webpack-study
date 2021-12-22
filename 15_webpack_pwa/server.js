/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-06 16:56:34
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-06 16:58:03
 * @FilePath: \notejse:\Demo\webpack-study\15_webpack_pwa\server.js
 */
const express = require('express');
const app = express();
app.use(express.static('built'));
app.listen(3000)