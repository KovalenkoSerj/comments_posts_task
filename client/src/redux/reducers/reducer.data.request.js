import { USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILURE } from '../constants/constants'

const initialState = {
	loading: false,
	comments: [],
	posts: [],
	error: null
}

export const get_data = (state = initialState, action) => {
	switch (action.type) {
			case USER_DATA_REQUEST:
					return {
						...state,
							loading: true,
					};
			case USER_DATA_SUCCESS:
					return {
						...state, 
							comments: action.payload.comments,
							posts: action.payload.posts,
							loading: false
					};
			case USER_DATA_FAILURE:
					return {
						...state,
							error: action.error
					};
			default:
					return state;
	}
}

