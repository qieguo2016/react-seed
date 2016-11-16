/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
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