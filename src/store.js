/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 数据store，目前未应用中间件
 */

'use strict';

// 不使用中间件
// import { createStore} from 'redux';
// import reducers from './reducers/index'; 	//Reducers
//
// export let store = createStore(reducers);

// 使用中间件
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index';

const store = createStore(
	reducers,
	applyMiddleware(thunk)
);

export default store;