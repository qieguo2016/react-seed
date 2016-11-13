/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 应用入口，主要是引入了数据store
 */


"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from './store';
import App from './App';

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('container'));

