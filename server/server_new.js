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
const webpackConfig = require('./webpack.config.dev.server.js');

const app = express();

const config = require('./../config');
const isDev = config.isDev || ('production' !== process.env.NODE_ENV);
const host = config.host || 'localhost';
const port = config.devPort || 8081;

if (isDev) {
	const compiler = webpack(webpackConfig);
	const middleware = webpackMiddleware(compiler, {
		publicPath : webpackConfig.output.publicPath,
		contentBase: 'src',
		stats      : {
			colors      : true,
			hash        : false,
			timings     : true,
			chunks      : false,
			chunkModules: false,
			modules     : false
		}
	});

	app.use(middleware);
	app.use(webpackHotMiddleware(compiler));
	app.get('*', function response(req, res) {
		res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
		res.end();
	});
} else {
	app.use(express.static(__dirname + '/dist'));
	app.get('*', function response(req, res) {
		res.sendFile(path.join(__dirname, 'dist/index.html'));
	});
}

app.listen(port, host, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listening at http://localhost:${port}`);
});