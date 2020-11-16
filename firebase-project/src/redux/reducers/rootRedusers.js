import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';

import authReducer from '../reducers/authReducer';

const rootReducers = combineReducers({
  auth:authReducer,
  firebase:firebaseReducer,
})

export default rootReducers;