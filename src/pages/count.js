/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : count页面。
 * 				  页面组件主要是作为【redux容器组件（内含UI组件）或者纯UI组件】的容器。
 * 				  注意在jsx中引入图片应该使用require语法
 */

import React, {Component} from 'react';
import CouterCtn from '../containers/CouterCtn'

class Count extends Component {
	render() {
		return (
			<div className="count">
				<p>This is count page with counter</p>
				<CouterCtn/>
			</div>
		);
	}
}

export default Count;