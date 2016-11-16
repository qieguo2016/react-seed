/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : reducer入口，引入各种reducer并合并成一个大reducer
 */

'use strict';

import {combineReducers} from 'redux';
import counterReducer from './counter';
import greetReducer from './greet';

const reducers = combineReducers({
	counterReducer,
	greetReducer
});

export default reducers;

// Reducer
// import * as types from '../actions/ActionTypes';
// function reducers(state = {count: 0}, action) {
// 	const count = state.count;
// 	switch (action.type) {
// 		case types.INCREASE:
// 			return {count: count + 1};
// 		default:
// 			return state;
// 	}
// }
//
// export default reducers;