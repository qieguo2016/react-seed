/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */


'use strict';

// import {combineReducers } from 'redux';
// import MdCount from './md';
// import MyCount from './my';
//
// const Reducers = combineReducers({MdCount,MyCount});

// Reducer
function Reducers(state = { count: 0 }, action) {
	const count = state.count
	switch (action.type) {
		case 'increase':
			return { count: count + 1 };
		default:
			return state;
	}
}
export default Reducers;