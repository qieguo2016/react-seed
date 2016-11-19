/**
 * @authors     : qieguo
 * @date        : 2016/11/17
 * @version     : 1.0
 * @description : 开发服务器
 *                配合webpack，提供本地mock数据
 */

'use strict';

const path = require('path');
const http = require('http');
const fs = require('fs');
const url = require('url');
const config = require('../config');
const MOCKPATH = path.join(__dirname, '../mock');

const PORT = config.devPort;
const errorMsg = {
	"returnCode": "0001",
	"returnMsg" : "请求失败，请检查参数是否合法",
	"returnData": ""
}

http.createServer((req, res) => {

	const reqUrl = url.parse(req.url);
	const pathname = reqUrl.pathname;
	const realPathName = path.join(MOCKPATH, pathname + '.json');

	console.log(">>>>  Got Request: " + pathname + ' || Params: ' + reqUrl.search);

	fs.readFile(realPathName, "utf8", function (err, data) {
		if (err) {
			console.log(err);
			res.writeHead(404, {'Content-Type': 'application/json;charset=utf-8'});
			res.write(JSON.stringify(errorMsg));
		} else {
			res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
			res.write(data);
		}
		res.end();
	});

}).listen(PORT);

console.log(`ev Server running at http://localhost:${PORT}/`);
