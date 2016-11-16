/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 定义路由配置
 */

'use strict';

import React, {Component} from 'react';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Home from '../pages/home';
import Root from '../components/Root';

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Root}>
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