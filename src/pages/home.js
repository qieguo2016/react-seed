/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */


"use strict";

import React, {Component} from 'react';
import CouterCtn from '../containers/CouterCtn'

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<p>This is Home page with counter</p>
				<CouterCtn/>
			</div>
		);
	}
}

export default Home;

