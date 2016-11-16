/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description :
 */

'use strict';

var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	}
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/wm_static', express.static('lib'));
app.use('/wm_static/css', express.static('css'));
app.use('/wm_static/images', express.static('images'));
app.use('/wm_static', express.static('wm_static'));


app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});
/*app.get('*', function (req, res, next) {
 res.render('index.html');
 });*/
app.listen(3002, function(err) {
	if (err) {
		console.log(err);
		return;
	}

	console.log('Listening at http://localhost:3002');
});
