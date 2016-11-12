/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */

'use strict';

import React, {Component} from 'react';
import {Router, Route, IndexRoute, Link, IndexLink, Redirect, hashHistory} from 'react-router';

import Home from './pages/home';
import Login from './pages/login';
import Center from './pages/center';

class Root extends Component {
	render() {
		return (
			<div>
				<h1>This is common area</h1>
				<ul>
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/login"  activeClassName="active">Login</Link></li>
					<li><Link to="/center"  activeClassName="active">Center</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

class App extends Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={Root}>
					<IndexRoute component={Home}/>
					<Route path="/center" component={Center}/>
					<Route path="/login" component={Login}/>
				</Route>
			</Router>
		);
	}
}
;

export default App;