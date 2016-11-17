/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 本地开发环境配置
 */

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = require('./config');
const SRC_PATH = path.resolve(process.cwd(), '../src');
const DIST_PATH = path.resolve(process.cwd(), '../dist');
const PORT = config.devPort;
const PUBLIC_PATH = `/`;

module.exports = {

	// 项目入口，默认为目录下的index.js；vendor为第三方库，可以分开打包。
	entry  : {
		app   : ['webpack-hot-middleware/client', path.join(SRC_PATH, 'entry.js')],
		vendor: ['webpack-hot-middleware/client', 'react', 'react-dom', 'react-router', 'react-redux', 'redux']
	},

	// 输出的文件名 合并以后的js会命名为bundle.js
	output : {
		path         : '/',
		filename     : '[name].[hash].js',
		// chunkFilename，name在代码中指定，若无则为id
		chunkFilename: '[name].[chunkhash:5].chunk.js',
		// CDN目录路径，插入html中的src
		publicPath   : '/'
	},

	// 各种加载器的配置
	module: {
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
				loader: 'url-loader?limit=8192&name=[name].[hash:8].[ext]' // 小图片转换成base64编码
			}
		]
	},

	// css后处理，自动添加各浏览器前缀
	postcss: [autoprefixer],

	// 添加各种插件
	plugins: [

		// 是否启用调试模式，输出调试信息
		new webpack.DefinePlugin({
			DEBUG: true
		}),

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

		// 自动生成HTML入口文件，index.html为模板文件
		new HtmlWebpackPlugin({
			template: path.join(SRC_PATH, 'index.html')
		}),

		new webpack.HotModuleReplacementPlugin(),

		// 自动打开浏览器窗口
		new OpenBrowserPlugin({url: `http://localhost:${PORT}`})

	],

	// 本地开发用的简易服务器
	devServer: {
		noInfo    : false,
		inline    : true,
		publicPath: PUBLIC_PATH,
		stats     : {
			cached: false,
			colors: true
		}
	},

	// 开发工具,出错之后可以快速定位出错代码位置
	devtool: 'eval-source-map',
}
;


module.exports = config;