import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


// reducers
import authReducer from './reducers/auth';
import toggleMenuDots from './reducers/menuDots';
import alertReducer from './reducers/alert';
import profileNavbar from './reducers/profileNavbar';

const initialState = {}
const middleware = [thunk]

// root reducers
const rootReducer = combineReducers({
    auth: authReducer,
    menuDots: toggleMenuDots,
    alerts: alertReducer,
    profileNavOption: profileNavbar,
})

export const store = createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

