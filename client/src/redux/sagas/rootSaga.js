import { all } from 'redux-saga/effects'
import data_saga from './saga'

export default function* rootSaga() {
	yield all([
		data_saga()
	])
}