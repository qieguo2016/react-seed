/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */


"use strict";

import React, {Component} from 'react';
import GreetCtn from '../containers/GreetCtn'

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<p>This is Home page with Greet</p>
				<GreetCtn/>
			</div>
		);
	}
}

export default Home;

