const path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
var glob = require('glob')
var webpack = require('webpack');

var fs = require('fs')
const EntryExtractPlugin = require('./entry-extract-plugin');
const ABSOLUTE_PATH = process.cwd();
console.log('---------',path.resolve(ABSOLUTE_PATH, 'src'))
module.exports = {
    context: path.resolve(ABSOLUTE_PATH, 'src'),
    entry: {
        'app': './app.js'
    },
    output: {
        path: path.resolve(ABSOLUTE_PATH, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        globalObject: 'global'
    },
    resolve: {
        extensions: ['.js', '.json'],// 自动解析确定的拓展名,使导入模块时不带拓展名
        alias: {// 创建import或require的别名
            '@': path.join(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                }
            },
            {
                test: /\.less$/,
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                },'px2rpx-loader?rpxUnit=1',{
                    loader: "less-loader"
                }]
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {
                from: '**/*.wxml',
                toType: 'dir',
            },
            {
                from: '**/*.wxss',
                toType: 'dir',
            },
            {
                from: '**/*.json',
                toType: 'dir',
            },
            {
                from: 'assets',
                toType: 'dir',
                to: path.resolve(__dirname, 'dist/assets'),
            },
            // {
            //     from: path.resolve(__dirname, 'assets'),
            //     to: path.resolve(__dirname, 'dist'),
            //     ignore: ['.*']
            // },
        ]),
        new EntryExtractPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].wxss',
            chunkFilename: '[id].wxss',
        }),
        new webpack.BannerPlugin({
            banner: 'const commons = require("./commons");\nconst manifest = require("./manifest");',
            raw: true,
            include: 'app.js',
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    chunks: 'initial',
                    name: 'commons',
                    minSize: 0,
                    maxSize: 0,
                    minChunks: 2,
                },
            },
        },
        runtimeChunk: {
            name: 'manifest',
        },
    },
};