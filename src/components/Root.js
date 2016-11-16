/**
 * @authors     : qieguo
 * @date        : 2016/11/14
 * @version     : 1.0
 * @description : 应用骨架、导航等公共部分
 */

'use strict';
import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

class Root extends Component {
	render() {
		return (
			<div>
				<h1>This is common area</h1>
				<ul>
					<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
					<li><Link to="/counter" activeClassName="active">Counter</Link></li>
					<li><Link to="/center" activeClassName="active">Center</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default Root;