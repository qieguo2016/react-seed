/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : home页面。
 * 				  页面组件主要是作为【redux容器组件（内含UI组件）或者纯UI组件】的容器。
 * 				  注意在jsx中引入图片应该使用require语法
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

