import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import {  Router, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import  store  from './redux/store';
import { history } from './utils/history';
import Post from './components/Post';
import { Home } from './components/Home';
import  CurrentPost  from './components/CurrentPost';


ReactDOM.render(
	<Provider store={ store }>
        <Router history={ history }>
            <>
                <Nav />
                    <Switch>
                        <Route exact path='/' component={ Home } />
												<Route path='/latestposts' component={ Post }/>
												<Route path='/viewpost/post/:postId' component={ CurrentPost }/>
                        <Route render={function () {
                            return <h1>Page Not Found</h1>
                        }} />
                    </Switch>
            </>
        </Router>	
	</Provider>, 
	document.getElementById('root')
);


