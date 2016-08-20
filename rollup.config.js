/*
 * @Author: baby
 * @Date:   2016-08-19 23:37:39
 * @Last Modified by:   fengyun2
 * @Last Modified time: 2016-08-20 09:51:10
 */

'use strict';

/*var babel = require('rollup-plugin-babel');
var uglify = require('rollup-plugin-uglify');
var npm = require('rollup-plugin-npm');
var commonjs = require('rollup-plugin-commonjs');

export default {
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
            presets: ["es2015-rollup"]
        })
    ]
};
*/

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
