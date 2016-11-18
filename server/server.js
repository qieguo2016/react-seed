/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description : 开发服务器，本地、测试、生产环境分别
 *                提供本地mock数据，转发测试环境、生产环境请求
 */

'use strict';

const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackConfig = require('./webpack.config.dev.server');
const config = require('../config');

const isDev = config.isDev || ('production' !== process.env.NODE_ENV);
const HOST = config.host || 'localhost';
const PORT = config.devPort || 8081;
const app = express();

const serverConfig = {
	publicPath : webpackConfig.output.publicPath,
	contentBase: 'src',
	quiet      : false,
	noInfo     : false,
	hot        : true,
	inline     : true,
	lazy       : false,
	headers    : {'Access-Control-Allow-Origin': '*'},
	stats      : {
		colors      : true,
		hash        : true,
		timings     : true,
		chunks      : true,
		chunkModules: true,
		modules     : true
	}
};

if (isDev) {
	const compiler = webpack(webpackConfig);
	app.use(webpackMiddleware(compiler, serverConfig));
	app.use(webpackHotMiddleware(compiler));
} else {
	app.use(express.static(__dirname + '/dist'));
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(PORT, function (err) {
	if (err) {
		return console.log(err);
	}
	console.info(`==>  Listening on http://${HOST}:${PORT}.`);
});