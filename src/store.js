import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {brandDetailsReducer} from './reducers/brandReducers'

const reducer = combineReducers({
    brandDetails: brandDetailsReducer,
});

const initialState = {
    userLogin: {userInfo: ''},
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store
