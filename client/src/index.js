import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import {  Router, Route } from 'react-router-dom'
import  store  from './redux/store'
import { history } from './utils/history'


ReactDOM.render(
	<Provider store={ store }>
		<Router history={ history }>
			<Route exact path='/' component={App} />
		</Router>		
	</Provider>, 
	document.getElementById('root')
);


