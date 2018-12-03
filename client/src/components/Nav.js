import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {

	render() {
		return (
			<div>
				<ul>
					<li>
						<NavLink exact activeClassName='active' to='/'>Home</NavLink>
					</li>
					<li>
						<NavLink exact activeClassName='active' to='/latestposts'>Posts</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}
