/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : reducer入口，引入各种reducer并合并成一个大reducer
 */

'use strict';
import * as types from '../actions/ActionTypes';
// import {combineReducers } from 'redux';
// import MdCount from './md';
// import MyCount from './my';
//
// const Reducers = combineReducers({MdCount,MyCount});

// Reducer
function Reducers(state = {count: 0}, action) {
	const count = state.count
	switch (action.type) {
		case types.INCREASE:
			return {count: count + 1};
		default:
			return state;
	}
}
export default Reducers;