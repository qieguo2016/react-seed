/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 定义各种action并输出
 */

'use strict';

import * as types from './ActionTypes';

export const increaseAction = {type: types.INCREASE};

export function increaseAsync() {
	return dispatch => {
		setTimeout(() => dispatch(increaseAction), 2000)
	}
}

export const decreaseAction = {
	type   : types.DECREASE,
	payload: {
		num: 10
	}
};

export function greet(words) {
	return {
		type   : types.GREET,
		payload: words
	};
}

export function order(params) {
	return {
		type   : types.ORDER,
		payload: params
	}
}

export function greetAsync(params) {
	return dispatch => {

		setTimeout(() => dispatch(greet(params)), 2000);
	}
}
