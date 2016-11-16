/**
 * @authors     : qieguo
 * @date        : 2016/11/11
 * @version     : 1.0
 * @description : 应用入口，引入数据store和APP自身
 */


"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store';	// 在应用外包一层，应用就可以拿到store对象了。
import App from './containers/App'; // 应用本身

import './styles/main.css';		// 基础样式

ReactDOM.render((
	<Provider store={store}>
		<App />
	</Provider>
), document.getElementById('container'));

