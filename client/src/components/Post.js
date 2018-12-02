import React, { Component } from 'react'
import { request_data } from '../redux/actions/actions'
import { connect } from 'react-redux'

const mapStateToProps = state => {
	return {
		posts: state.get_data.posts
	}
}

export default connect(mapStateToProps, null)(class Post extends Component {

	state ={
		comment: ''
	}

	componentDidMount() {
		this.props.dispatch(request_data())
	}

	onHandleChange = (e) => {
		this.setState({ comment: e.target.value })
	}

	addComment = () => {
		//dispatch action
	}

	render() {
		const { posts } = this.props
		console.log(this.state.comment)
		return (
			<div>
				{
					posts.length ? posts.map((post, index) => {
						return (
							<div key={post.id}>
								<h1>{post.title}</h1>
								<h3>{post.body}</h3>
								<textarea name="comment" id="" cols="30" rows="10" onChange={this.onHandleChange}></textarea>
								<button onClick={this.addComment}>Add comment</button>
								{
									post.comments.map((comment) => {
										return (
												<span key={comment.id}>{comment.body}</span>
										)
									})
								}
							</div>
						)
					})
						:
						<p>Loading....</p>
				}
			</div>
		)
	}
})
