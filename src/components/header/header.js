/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 纯UI组件（要点：纯函数）
 */

import './header.scss';

'use strict';

import React, { Component, PropTypes } from 'react';

class Header extends Component {
	render() {
		const {value, onIncreaseClick} = this.props
		return (
			<div>
				<span>{value}</span>
				<button onClick={onIncreaseClick}>Increase</button>
			</div>
		)
	}
}

Header.propTypes = {
	value          : PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired
}

export default Header;