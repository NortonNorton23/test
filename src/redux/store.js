import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const reducers = combineReducers({
	reducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
