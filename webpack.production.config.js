/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */

var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// 定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {

    // 项目入口，默认为目录下的index.js；vendor为第三方库，可以分开打包。
    entry: {
        app: SRC_PATH,
        vendor: ['react', 'react-router', 'react-dom']
    },

    // 输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: DIST_PATH,
        filename: '[name].[hash].js'
    },

    // 各种加载器的配置
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {presets: ['es2015']}
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss')
            }, {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style', 'css', 'postcss', 'sass')
            }, {
                test: /\.(png|jpg|woff|svg|ttf|eot)$/,
                loader: 'url-loader?limit=10000'     //限制大小小于10k则转换成base64编码
            }
        ]
    },

    // css后处理，自动添加各浏览器前缀
    postcss: [autoprefixer],

    // 添加各种插件
    plugins: [

        // 设置全局变量，不用重复引入jQuery
        // new webpack.ProvidePlugin({
        //     $: "jquery",
        //     jQuery: "jquery",
        //     "window.jQuery": "jquery"
        // }),

        // webpack默认将css以style标签打入head中，可用插件将其输出到css文件中。
        new ExtractTextPlugin('[name].min.css'),

        // 提取公共引用脚本并独立打包，避免重复打包
        new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

        // 压缩混淆文件
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false},
            sourceMap: false,
            mangle: true
        }),

        // 自动生成HTML入口文件，index.html为模板文件
        new HtmlWebpackPlugin({
            template: path.join(SRC_PATH, 'index.html')
        })

    ]
};