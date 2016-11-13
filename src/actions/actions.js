/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 定义各种action并输出
 */

'use strict';

import * as types from './ActionTypes';

const increaseAction = {type: types.INCREASE};
const decreaseAction = {type: types.DECREASE};

export {
	increaseAction,
	decreaseAction
};