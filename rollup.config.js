/*
* @Author: baby
* @Date:   2016-08-19 23:37:39
* @Last Modified by:   baby
* @Last Modified time: 2016-08-19 23:55:04
*/

'use strict';

var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

export default{
    entry: 'src/index.js',
    external: ['moment'],
    format: 'umd',
    moduleName: 'DatePick',
    sourceMap: true,
    dest: 'dist/index_es6.js',
    plugins: [
        npm({ jsnext: true, main: true }),
        commonjs(),
        uglify(),
        babel({
            exclude: 'node_modules/**',
            presets: [ "es2015-rollup" ]
        })
    ]
};
