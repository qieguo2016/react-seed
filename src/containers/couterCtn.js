/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */

'use strict';

import {connect} from 'react-redux';
import Counter from '../components/counter/Counter';
import {increaseAction} from '../actions/actions';

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		value: state.count
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => dispatch(increaseAction) 
	}
}

// Connected Component
const CouterCtn = connect(
	mapStateToProps,
	mapDispatchToProps
)(Counter)

export default CouterCtn;
