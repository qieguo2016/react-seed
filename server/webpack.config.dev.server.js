/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 本地开发环境配置
 */

'use strict';

'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = require('./../config');
const isDev = config.isDev || ('production' !== process.env.NODE_ENV);
const host = config.host || 'localhost';
const PORT = config.devPort || 8081;

module.exports = {
	devtool: 'eval-source-map',
	entry  : [
		'webpack-hot-middleware/client?reload=true',
		path.join(__dirname, 'src/entry.js')
	],
	output : {
		path      : path.join(__dirname, '/dist/'),
		filename  : '[name].js',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject  : 'body',
			filename: 'index.html'
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),

		// webpack默认将css以style标签打入head中，可用插件将其输出到css文件中。
		new ExtractTextPlugin('css/[name].min.css'),

		// 自动打开浏览器窗口
		new OpenBrowserPlugin({url: `http://localhost:${PORT}`})
	],
	module : {
		loaders: [
			{
				test   : /\.jsx?$/,
				loader : 'babel',
				exclude: /node_modules/
			}, {
				test  : /\.css$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap', 'postcss')
			}, {
				test  : /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css?sourceMap', 'postcss', 'sass?sourceMap')
			}, {
				test  : /\.(png|jpg|woff|svg|ttf|eot)$/,
				loader: 'url-loader?limit=8192&name=images/[name].[hash:8].[ext]' // 小图片转换成base64编码
			}
		]
	}
};