import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


// reducers
import authReducer from './reducers/auth';

const initialState = {}
const middleware = [thunk]

export const store = createStore(
    authReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

