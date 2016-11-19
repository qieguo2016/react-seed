/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 本地开发环境配置
 */

	// "dev": "webpack-dev-server --hot --inline --progress --colors --config webpack.config.dev.js",

const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const webpackConfig = require('./webpack.config.base');
const config = require('./config');
const frontPORT = config.frontPort;
const devPORT = config.devPort;

// 开发工具,出错之后可以快速定位出错代码位置
webpackConfig.devtool = 'eval-source-map';

// 本地开发用的简易服务器
webpackConfig.devServer = {
	historyApiFallback: true,
	hot               : true,
	inline            : true,
	progress          : true,
	colors            : true,
	clientLogLevel    : "info",
	port              : frontPORT,
	proxy             : {
		"/api": {
			"target"    : {
				"host"    : "localhost",
				"protocol": 'http:',
				"port"    : devPORT
			},
			ignorePath  : true,
			changeOrigin: true,
			secure      : false
		}
	},
};

webpackConfig.plugins.push(
	// 是否启用调试模式，输出调试信息
	new webpack.DefinePlugin({
		DEBUG: true
	}),

	// 压缩混淆文件
	// new webpack.optimize.UglifyJsPlugin({
	// 	sourceMap: false,
	// 	mangle   : false
	// }),

	// 自动打开浏览器窗口
	new OpenBrowserPlugin({url: `http://localhost:${frontPORT}`})
);

module.exports = webpackConfig;