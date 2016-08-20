(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (factory());
}(this, (function () { 'use strict';

function cube(x) {
    return x * x * x;
}

// 通过 rollup.js 编译， maths.js 中未调用的方法 square() 并未打包到新的js中。

console.log(cube(5)); // 125

})));
//# sourceMappingURL=index.js.map
