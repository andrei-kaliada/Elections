import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import rootReducer from './redux/reducers/rootRedusers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createFirestoreInstance, getFirestore, reduxFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider,reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig';
import firebase from 'firebase/app';
import history from './history/history';


// import store from './redux/store';

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

const rrfConfig = {
  userProfile:'users',
  useFirestoreForProfile:true
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    
      applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
      reduxFirestore(firebase, fbConfig)
  )
);

window.state = store;

const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

{/* <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider> */}

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
    <ReactReduxFirebaseProvider {...rrfProps}>
          <App />
      </ReactReduxFirebaseProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
