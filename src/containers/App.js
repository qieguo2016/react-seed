/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 定义路由配置
 */

'use strict';

import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router';

import Home from '../pages/home';
import Login from '../pages/login';
import Root from '../components/root/Root';

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
					<Route path="/login" component={Login}/>
				</Route>
			</Router>
		);
	}
}

export default App;