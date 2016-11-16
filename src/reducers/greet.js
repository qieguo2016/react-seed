/**
 * @authors     : qieguo
 * @date        : 2016/11/16
 * @version     : 1.0
 * @description :
 */

'use strict';

import {GREET} from '../actions/ActionTypes';

const initState = {words: 'start'};

function greetReducer(state = initState, action) {
	const words = state.words;
	switch (action.type) {
		case GREET:
			return {words: words + action.payload};
		default:
			return state;
	}
}
export default greetReducer;