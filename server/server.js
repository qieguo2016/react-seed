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
// const compress = require('compression');

const config = require('../config');
const webpackConf = require('../webpack.config.dev');
const compiler = webpack(webpackConf);
const app = express();

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const dev = config.isDev || ('production' !== process.env.NODE_ENV);
if (dev) {
	// 开发环境使用webpack编译的内存数据
	app.use(webpackDevMiddleware(compiler, {
		contentBase: webpackConf.output.path,
		publicPath : webpackConf.output.publicPath,
		noInfo     : false,
		stats      : {
			cached: false,
			colors: true
		}
	}));
	app.use(webpackHotMiddleware(compiler));
} else {
	// 生产环境测试，使用dist目录下已经编译好的文件
	// app.use(compress());    // gzip compress
	app.use(express.static(path.join(__dirname, 'dist')));
}

// router entry
const routes = require('./routes');
app.use('/', routes);

const http = require('http');
const server = http.createServer(app);
server.listen(config.devPort, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listening at http://localhost:${config.devPort}`);
});
