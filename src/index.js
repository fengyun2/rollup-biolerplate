/*
 * @Author: baby
 * @Date:   2016-08-19 23:50:53
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-20 10:19:19
 */

'use strict';

// 通过 rollup.js 编译， maths.js 中未调用的方法 square() 并未打包到新的js中。
import { cube } from './math.js';
console.log(cube(5)); // 125
