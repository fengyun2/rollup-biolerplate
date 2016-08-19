# rollup-biolerplate

## Start

* npm install
* npm run build
* npm run watch
* node rollup.js
## Plugin

* `rollup-plugin-babel`: outputs ES5
* `rollup-plugin-npm`: loads modules in node_modules
* `rollup-plugin-commonjs`: converts CommonJS to ES6

## Bug

* `Rollup.js` 中可以 `catch` 下 `error` 方便调试错误
* `UMD/IIFE` 模式中需要 `moduleName`
* `Rollup` 的模块引用只支持 `ES6 Module`，其他的需要采用 `npm` 和 `commonjs` 的插件去解决
