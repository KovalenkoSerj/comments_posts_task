import axios from 'axios';

const rootUrl = 'http://localhost:3001/db/';

export const request_data = () => {
	return axios({
		method: 'get',
		url: rootUrl
	}).then(response => response.data)
	.catch(error => error)
}