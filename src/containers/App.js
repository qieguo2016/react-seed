/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 引入页面布局、定义路由配置。
 * 				  路由可以做成按需加载和普通加载，按需加载的模块如果使用ES6，则需要加default，也就是要获得模块输出对象。
 */

'use strict';

import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from '../pages/home';
import Layout from '../components/layout/layout';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Layout}>
					<IndexRoute component={Home}/>
					<Route path="/center" getComponent={(location, cb) => {
						require.ensure([], require => {
							cb(null, require('../pages/center').default)
						}, "center");
					}}/>
					<Route path="/counter" getComponent={(location, cb) => {
						require.ensure([], require => {
							cb(null, require('../pages/count').default)
						}, "count");
					}}/>
				</Route>
			</Router>
		);
	}
}

export default App;