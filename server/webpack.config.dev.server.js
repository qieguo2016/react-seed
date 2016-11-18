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
const autoprefixer = require('autoprefixer');

const config = require('../config');
const isDev = config.isDev || ('production' !== process.env.NODE_ENV);
const HOST = config.host || 'localhost';
const PORT = config.devPort || 8081;

module.exports = {


	// 项目入口，默认为目录下的index.js；vendor为第三方库，可以分开打包。
	entry  : [
		'webpack-hot-middleware/client',
		path.join(__dirname, '../src/entry.js')
	],

	// 输出的文件名 合并以后的js会命名为[name].js
	output : {
		path      : path.join(__dirname, '/dist/'),
		filename  : '[name].[hash].js',
		chunkFilename: '[name].[chunkhash:5].chunk.js',   // chunkFilename，name在代码中指定，若无则为id
		publicPath: '/'   // CDN目录路径，插入html中的src
	},

	// 开发工具，源码映射
	devtool: 'eval-source-map',

	// 各种加载器的配置
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
	},

	// css后处理，自动添加各浏览器前缀
	postcss: [autoprefixer],

	plugins: [

		// 自动生成HTML入口文件，index.html为模板文件
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject  : 'body',
			filename: 'index.html'
		}),

		new webpack.optimize.OccurenceOrderPlugin(),

		new webpack.HotModuleReplacementPlugin(),

		new webpack.NoErrorsPlugin(),

		// 定义环境变量
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),

		// 提取公共引用脚本并独立打包，避免重复打包
		//new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js'),

		// webpack默认将css以style标签打入head中，可用插件将其输出到css文件中。
		new ExtractTextPlugin('css/[name].min.css'),

		// 自动打开浏览器窗口
		new OpenBrowserPlugin({url: `http://${HOST}:${PORT}`})
	],
};