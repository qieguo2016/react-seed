/**
 * @authors     : qieguo
 * @date        : 2016/11/17
 * @version     : 1.0
 * @description :
 */

'use strict';
const path = require('path');
const express = require('express');

const router = express.Router();

const config = require('../config');
const dev = config.isDev || ('production' !== process.env.NODE_ENV);

if (dev) {

	router.get('*', function (req, res) {
		console.log('req', req);
	});

} else {
	// 生产环境测试
	router.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../dist/index.html'));
	});
}


module.exports = router;