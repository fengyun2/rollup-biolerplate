/*
* @Author: baby
* @Date:   2016-08-19 23:38:15
* @Last Modified by:   baby
* @Last Modified time: 2016-08-19 23:45:40
*/

'use strict';

var rollup = require('rollup');
var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

// rollup 方法返回的是 `bundle` 的 `Promise` 方法
rollup.rollup({
    entry: 'src/index.js',
    external: ['moment'],
    plugins: [
        npm({ jsnext: true, main: true }),
        commonjs(),
        // uglify(),
        babel({
            exclude: 'node_modules/**',
            presets: [ "es2015-rollup" ]
        })
    ]
}).then(function(bundle) {
    bundle.write({

        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        format: 'amd',
        moduleName: 'yyLibrary',
        globals: {
            moment: 'moment'
        },
        // sourceMap: true,
        dest: 'dist/index_amd.js'
    });
    bundle.write({
        format: 'cjs',
        globals: {
            moment: 'moment'
        },
        dest: 'dist/index_cmd.js'
    });
    bundle.write({
        format: 'es6',
        globals: {
            moment: 'moment'
        },
        dest: 'dist/index_es6.js'
    });

    bundle.write({
        // output format - 'amd', 'cjs', 'es6', 'iife', 'umd'
        format: 'umd',
        moduleName: 'DatePick',
        globals: {
            moment: 'moment'
        },
        sourceMap: true,
        dest: 'index.js'
    });
}).catch(function(err){
    console.log(err);
});
