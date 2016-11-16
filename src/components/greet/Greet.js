/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description :
 */

'use strict';

import React, {Component, PropTypes} from 'react';

class Greet extends Component {
	render() {
		const {words, onGreetClick} = this.props
		return (
			<div>
				<p>word: {words}</p>
				<button onClick={onGreetClick}>say something</button>
			</div>
		)
	}
}

Greet.propTypes = {
	words       : PropTypes.string.isRequired,
	onGreetClick: PropTypes.func.isRequired
}

export default Greet;