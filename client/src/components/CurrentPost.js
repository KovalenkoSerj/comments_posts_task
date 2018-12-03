import React, { Component } from 'react'

export default class Child extends Component {
	render() {
		const { title, body } = this.props.location.state
		return (
			<div>
				<h1>{title}</h1>
				<p>{body}</p>
				<h3>Comments: </h3>
				<span>{this.props.location.state.comment.map((comment)=> <p key={comment.id}>{comment.body}</p>)}</span>
			</div>
		)
	}
}

