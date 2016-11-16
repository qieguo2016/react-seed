/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description :
 */

'use strict';

import {connect} from 'react-redux';
import Greet from '../components/greet/Greet';
import {greetAsync} from '../actions/actions';

// Map Redux state to component props
function mapStateToProps(state) {
	return {
		words: state.greetReducer.words
	}
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
	return {
		onGreetClick: () => dispatch(greetAsync('+ an async greet'))
	}
}

// Connected Component
const GreetCtn = connect(
	mapStateToProps,
	mapDispatchToProps
)(Greet);

export default GreetCtn;