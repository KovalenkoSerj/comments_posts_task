import React, { Component } from 'react';
import { request_data } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const mapStateToProps = state => {
	return {
		posts: state.get_data.posts
	}
}

export default connect(mapStateToProps, null)(class Post extends Component {

	state = {
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
		return (
			<div>
				{
					posts.length ? posts.map((post) => {
						return (
							<div key={post.id}>
								<h1>{post.title}</h1>
								<p>{post.body}</p>
								{
									post.comments.map((comment) => {
										return (
											<span key={comment.id}>{comment.body}</span>
										)
									})
								}
								<br /><Link className="btn"
									to={{
										pathname: `/viewpost/post/postId:${post.id}`,
										state: { title: post.title, body: post.body, comment: post.comments }
									}}>
									Details
								</Link><br /><br />
								<textarea name="comment" id="" cols="50" rows="" onChange={this.onHandleChange}></textarea><br />
								<button onClick={this.addComment}>Add comment</button><br />
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
