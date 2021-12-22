/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _data_data_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/data.json */ \"./src/data/data.json\");\n/*\r\n * @Descripttion:\r\n * @version:\r\n * @Author: Young\r\n * @Date: 2021-12-02 14:42:29\r\n * @LastEditors: Do not Edit\r\n * @LastEditTime: 2021-12-02 15:29:57\r\n * @FilePath: \\notejse:\\Demo\\webpack-study\\webpack1\\src\\index.js\r\n */\r\n\r\n/**\r\n * webpack 5版本\r\n * webpack 可以处理js文件和json文件\r\n npm init 生成一个package.json文件\r\n npm i webpack  webpack-cli\r\n npm i webpack webpack-cli -D  (-D是将webpack添加到开发环境中的依赖)\r\n 新建src文件、src下新建入口文件 index.js\r\n 新建build文件  打包后输出文件\r\n */\r\n\r\n/* index.js入口文件\r\n    一、运行指令：1、开发环境：通过命令webpack ./src/index.js -o ./build --mode=development\r\n                2、生产环境：通过命令webpack ./src/index.js -o ./build --mode=production (会将代码进行压缩)\r\n                如果报错webpack : 无法加载文件 D:\\nodejs\\node_global\\webpack.ps1，因为在此系统上禁止运行脚本。\r\n                    解决方案：1、以管理员身份运行vscode\r\n                    2、执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的\r\n                    3、执行：set-ExecutionPolicy RemoteSigned\r\n                    4、这时再执行get-ExecutionPolicy，就显示RemoteSigned\r\n                可以通过在控制台直接通过node ./build/main.js 直接看到结果\r\n                也可以直接新建index.html在html中引入\r\n    二、结论：1、webpack 可以处理js文件和json文件，不能处理css、img等其他资源\r\n             2、生产环境和开发环境能将ES6 模块化编译成浏览器能识别的模块化\r\n             3、生产环境比开发环境多一个压缩的js代码\r\n*/\r\n\r\n\r\n// 处理json文件\r\n\r\nconsole.log(_data_data_json__WEBPACK_IMPORTED_MODULE_0__, \"***data***\");\r\nfunction add(x, y) {\r\n    return x + y\r\n}\r\nconsole.log(add(2, 8), \"***js函数运行结果***\");\r\n\r\n\r\n// import \"./css/index.css\";//处理不了css文件，文件是空的可以打包成功，里面\n\n//# sourceURL=webpack://webpack-study/./src/index.js?");

/***/ }),

/***/ "./src/data/data.json":
/*!****************************!*\
  !*** ./src/data/data.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"name\":\"ysl\",\"age\":18}');\n\n//# sourceURL=webpack://webpack-study/./src/data/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;