import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {reduxFirestore, getFirestore} from 'redux-firestore';
import {reactReduxFirebase, getFirebase} from 'react-redux-firebase';
import rootReducers from './reducers/rootRedusers';
import fbConfig from '../config/fbConfig';



// const rrfConfig = {
//   userProfile:'users',
//   useFirestoreForProfile:true
// };

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(
//     rootReducers, 
//     composeEnhancers(
//         reactReduxFirebase(fbConfig, rrfConfig),
//         reduxFirestore(fbConfig), 
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    
     
//     )
// );

// export default store;