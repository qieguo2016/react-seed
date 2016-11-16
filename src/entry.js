/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 应用入口，引入数据store和APP骨架
 */


"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';
import App from './containers/App';
import './styles/main.css';

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('container'));

