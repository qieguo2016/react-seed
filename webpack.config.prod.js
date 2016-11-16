/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 本地开发环境配置
 */

const webpack = require('webpack');

const config = require('./webpack.config.base');

config.plugins.push(

	// 是否启用调试模式，输出调试信息
	new webpack.DefinePlugin({
		DEBUG: false
	}),

	// 压缩混淆文件
	new webpack.optimize.UglifyJsPlugin({
		compress: {warnings: false},
		sourceMap: false,
		mangle: true
	})
);

module.exports = config;