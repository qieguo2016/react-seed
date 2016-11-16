/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : reducer入口。
 * 				  引入各种reducer并合并成一个大reducer，注意state的结构也会随之而变，可log出来看
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