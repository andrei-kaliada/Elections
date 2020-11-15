import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import authReducer from './reducers/authReducer';
import fbConfig from '../config/fbConfig';



let rootReducers = combineReducers({
    auth:authReducer,
})

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(redusers, 
//     compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig)
//     )
// );

export default rootReducers;