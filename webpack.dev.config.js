/**
 * Created by admin on 2017/8/30.
 */
/**
 * Created by admin on 2017/8/17.
 */

var webpack = require('webpack');
var baseWebpackConfig = require('./webpack.config.js');
var merge = require('webpack-merge');


module.exports = merge(baseWebpackConfig,{
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify("development")
        }),
    ],
})


