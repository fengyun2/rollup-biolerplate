/*
 * @Author: baby
 * @Date:   2016-08-19 23:37:39
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-20 10:33:46
 */

'use strict';

/*var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
// var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

export default {
    entry: 'src/index.js',
    external: ['moment'],
    format: 'umd',
    moduleName: 'DatePick',
    sourceMap: true,
    dest: 'dist/index_es6.js',
    plugins: [
        // npm({ jsnext: true, main: true }),
        commonjs(),
        uglify(),
        babel()
    ]
};


// import riot from 'rollup-plugin-riot'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'

export default {
    entry: 'src/index.js',
    dest: 'dist/bundle.js',
    plugins: [
        // riot(),
        nodeResolve({
            jsnext: true, // if provided in ES6
            main: true, // if provided in CommonJS
            browser: true // if provided for browsers
        }),
        commonjs(),
        babel()
    ]
}
*/

// import riot from 'rollup-plugin-riot'
/*import rollup from 'rollup'
import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'*/

const rollup = require('rollup')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify')
const nodeResolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')

// rollup 方法返回的是 `bundle` 的 `Promise` 方法
rollup.rollup({
    entry: 'src/index.js',
    external: ['moment'],
    plugins: [
        // riot(),
        nodeResolve({
            jsnext: true, // if provided in ES6
            main: true, // if provided in CommonJS
            browser: true // if provided for browsers
        }),
        commonjs(),
        // uglify(),
        babel()
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
        format: 'es',
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
}).catch(function(err) {
    console.log(err);
});
