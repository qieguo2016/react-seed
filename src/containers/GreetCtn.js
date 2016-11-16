/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description : redux容器组件。
 * 				  注意state的结构，要获取相应reducer中的数据
 * 				  注意派发Action要区分 Action Creator函数或者 纯Action
 */

'use strict';

import {connect} from 'react-redux';
import Greet from '../components/greet/Greet';
import {greetAsync} from '../actions/actions';

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		words: state.greetReducer.words  //这里需要注意state的结构，要获取相应reducer中的数据
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onGreetClick: () => dispatch(greetAsync('+ an async greet'))	// 注意派发Action要区分 Action Creator函数或者 纯Action
	}
}

// Connected Component
const GreetCtn = connect(
	mapStateToProps,
	mapDispatchToProps
)(Greet);

export default GreetCtn;