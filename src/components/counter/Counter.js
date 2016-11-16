/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */

'use strict';

import React, { Component, PropTypes } from 'react';

class Counter extends Component {
	render() {
		const {value, onIncreaseClick} = this.props
		return (
			<div>
				<p>value: {value}</p>
				<button onClick={onIncreaseClick}>Increase</button>
			</div>
		)
	}
}

Counter.propTypes = {
	value          : PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired
}

export default Counter;