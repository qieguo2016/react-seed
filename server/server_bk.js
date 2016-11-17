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

const app = express();

const webpackConf = require('./webpack.config.dev.server.js');
const compiler = webpack(webpackConf);


const config = require('./../config');
const dev = config.isDev || ('production' !== process.env.NODE_ENV);
const host = config.host || 'localhost';
const port = config.devPort || 8081;

var serverOptions = {
	contentBase: 'http://' + host + ':' + port,
	quiet      : true,
	noInfo     : true,
	hot        : true,
	inline     : true,
	lazy       : false,
	publicPath : webpackConf.output.publicPath,
	headers    : {'Access-Control-Allow-Origin': '*'},
	stats      : {colors: true}
};

if (dev) {
	// 开发环境使用webpack编译的内存数据
	app.use(require('webpack-dev-middleware')(compiler, serverOptions));
	app.use(require('webpack-hot-middleware')(compiler));
} else {
	// 生产环境测试，使用dist目录下已经编译好的文件
	// app.use(compress());    // gzip compress
	app.use(express.static(path.join(__dirname, 'dist')));
}

// router entry
// const routes = require('./routes');
// app.use('/', routes);

// const http = require('http');
// const server = http.createServer(app);
app.listen(port, function (err) {
	if (err) {
		return console.error(err);
	}
	console.log(`Listening at http://localhost:${port}`);
});