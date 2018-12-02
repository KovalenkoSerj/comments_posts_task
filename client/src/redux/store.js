import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import  rootSaga  from './sagas/rootSaga'
import {transform_dataMiddleware} from './customMiddleware'

const loggerMiddleware = createLogger({ collapsed: true }),
			sagaMiddleware = createSagaMiddleware(),
			createStoreWithMiddleware = applyMiddleware(sagaMiddleware, loggerMiddleware, transform_dataMiddleware),
			store = createStore(rootReducer, compose(createStoreWithMiddleware));

sagaMiddleware.run(rootSaga)

export default store