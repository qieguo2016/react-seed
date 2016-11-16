/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */


'use strict';

import React, {Component} from 'react';

export default class Center extends Component {
	render() {
		return (
			<div className="Center">
				<p>This is Center page</p>
				<img src={require("../images/img.jpg")}/>
			</div>
		);
	}
};