/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : redux容器组件。
 * 				  注意state的结构，要获取相应reducer中的数据
 * 				  注意派发Action要区分 Action Creator函数或者 纯Action
 */

'use strict';

import {connect} from 'react-redux';
import Counter from '../components/counter/Counter';
import {increaseAction} from '../actions/actions';

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		value: state.counterReducer.count
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
