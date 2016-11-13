/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 数据store，目前未应用中间件
 */

'use strict';

import { createStore} from 'redux';
import Reducers from './reducers/index'; 	//Reducers

let store = createStore(Reducers);
export default store;