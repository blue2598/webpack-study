/*
 * @Descripttion:
 * @version:
 * @Author: Young
 * @Date: 2021-12-02 14:42:29
 * @LastEditors: Do not Edit
 * @LastEditTime: 2021-12-02 15:29:57
 * @FilePath: \notejse:\Demo\webpack-study\webpack1\src\index.js
 */

/**
 * webpack 5版本
 * webpack 可以处理js文件和json文件
 npm init 生成一个package.json文件
 npm i webpack  webpack-cli
 npm i webpack webpack-cli -D  (-D是将webpack添加到开发环境中的依赖)
 新建src文件、src下新建入口文件 index.js
 新建build文件  打包后输出文件
 */

/* index.js入口文件
    一、运行指令：1、开发环境：通过命令webpack ./src/index.js -o ./build --mode=development
                2、生产环境：通过命令webpack ./src/index.js -o ./build --mode=production (会将代码进行压缩)
                如果报错webpack : 无法加载文件 D:\nodejs\node_global\webpack.ps1，因为在此系统上禁止运行脚本。
                    解决方案：1、以管理员身份运行vscode
                    2、执行：get-ExecutionPolicy，显示Restricted，表示状态是禁止的
                    3、执行：set-ExecutionPolicy RemoteSigned
                    4、这时再执行get-ExecutionPolicy，就显示RemoteSigned
                可以通过在控制台直接通过node ./build/main.js 直接看到结果
                也可以直接新建index.html在html中引入
    二、结论：1、webpack 可以处理js文件和json文件，不能处理css、img等其他资源
             2、生产环境和开发环境能将ES6 模块化编译成浏览器能识别的模块化
             3、生产环境比开发环境多一个压缩的js代码
*/


// 处理json文件
import data from "./data/data.json";
console.log(data, "***data***");
function add(x, y) {
    return x + y
}
console.log(add(2, 8), "***js函数运行结果***");


// import "./css/index.css";//处理不了css文件，文件是空的可以打包成功，里面