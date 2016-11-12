/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description :
 */

'use strict';

import { createStore} from 'redux';
import Reducers from './reducers/index'; 	//Reducers

let store = createStore(Reducers);
export default store;