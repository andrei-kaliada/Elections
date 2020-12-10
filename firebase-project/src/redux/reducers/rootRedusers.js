import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';


import authReducer from '../reducers/authReducer';
import cityCandidatesReducer from '../reducers/cityCandidatesReducer';

const rootReducers = combineReducers({
  auth:authReducer,
  firebase:firebaseReducer,
  cities:cityCandidatesReducer,
})

export default rootReducers;