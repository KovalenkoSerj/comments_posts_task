import { USER_DATA_SUCCESS } from './constants/constants'

export const transform_dataMiddleware = store => next => action => {

	if (action.type === USER_DATA_SUCCESS) {
		for (let i = 0; i < action.payload.posts.length; i++) {
			action.payload.posts[i].comments = []
			for (let j = 0; j < action.payload.comments.length; j += 1) {
				if (action.payload.posts[i].id === action.payload.comments[j].postId) {
					action.payload.posts[i].comments.push(action.payload.comments[j])
				}
			}
		}
		action.payload.posts = action.payload.posts
	}
	return next(action);
};