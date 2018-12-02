import { call, put, takeEvery } from 'redux-saga/effects';
import { USER_DATA_REQUEST } from '../constants/constants';
import { request_data } from '../../api/data_request';
import { success_data, error_data } from '../actions/actions';

function* get_data_request() {
	const data_params = yield call(request_data);

		if(data_params){
			yield put(success_data(data_params))
		}else{
			yield put(error_data("Error"))
		}
}

export default function* data_saga() {
	yield takeEvery(USER_DATA_REQUEST, get_data_request)
}
