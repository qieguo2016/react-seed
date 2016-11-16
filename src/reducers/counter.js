/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description :
 */

'use strict';

import {INCREASE, DECREASE} from '../actions/ActionTypes';

const initState = {count: 0};

function counterReducer(state = initState, action) {
	const count = state.count;
	switch (action.type) {
		case INCREASE:
			return {count: count + 1};
		case DECREASE:
			return {count: count - 1};
		default:
			return state;
	}
}
export default counterReducer;