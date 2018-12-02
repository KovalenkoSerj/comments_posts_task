import {
	USER_DATA_REQUEST, USER_DATA_SUCCESS, USER_DATA_FAILURE, USER_ADD_COMMENT_REQUEST, USER_ADD_COMMENT_SUCCESS,USER_ADD_COMMENT_FAILURE
} from '../constants/constants'

export const request_data = () => {
	return {
		type: USER_DATA_REQUEST
	}
}

export const success_data = payload => {
	return {
		type: USER_DATA_SUCCESS,
		payload
	}
}

export const error_data = error => {
	return {
		type: USER_DATA_FAILURE,
		error
	}
}

export const add_comment_request = comment => {
	return {
		type: USER_ADD_COMMENT_REQUEST,
		comment
	}
}

export const add_comment_succes = payload => {
	return {
		type: USER_ADD_COMMENT_SUCCESS,
		payload
	}
}

export const add_comment_failure = error => {
	return {
		type: USER_ADD_COMMENT_FAILURE,
		error
	}
}