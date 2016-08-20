# rollup-biolerplate

## Start

```bash
npm install
```
### 方案一:(暂时配置项太少功能)

```bash
npm run build
npm run watch
```
### 方案二: (推荐)

```bash
node rollup.config.js
```

### 方案三:

```bash
gulp
```

## Plugin

* `rollup-plugin-babel`: outputs ES5
* ~~`rollup-plugin-npm`: loads modules in node_modules~~
* `rollup-plugin-commonjs`: converts CommonJS to ES6

## Bug

* `Rollup.js` 中可以 `catch` 下 `error` 方便调试错误
* `UMD/IIFE` 模式中需要 `moduleName`
* `Rollup` 的模块引用只支持 `ES6 Module`，其他的需要采用 `npm` 和 `commonjs` 的插件去解决
* `rollup-plugin-npm` 被废弃了, 改为 `rollup-plugin-node-resolve`
