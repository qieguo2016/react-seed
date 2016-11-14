/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 本地开发环境配置
 */

const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

const config = require('./webpack.config.base');
const PORT = '8081';

// 开发工具,出错之后可以快速定位出错代码位置
config.devtool = 'eval-source-map';

// 本地开发用的简易服务器
config.devServer = {
	historyApiFallback: true,
	hot               : true,
	inline            : true,
	progress          : true,
	clientLogLevel    : "info",
	port              : PORT,
	proxy             : {
		"/api": {
			"target"    : {
				"host"    : "192.168.101.101",
				"protocol": 'http:',
				"port"    : 6080
			},
			ignorePath  : true,
			changeOrigin: true,
			secure      : false
		}
	},
};

config.plugins.push(
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
	new OpenBrowserPlugin({url: `http://localhost:${PORT}`})
);

module.exports = config;