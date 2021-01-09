import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase';


import authReducer from '../reducers/authReducer';
import cityCandidatesReducer from '../reducers/cityCandidatesReducer';
import mayorCandidatesReducer from '../reducers/mayorCandidatesReducer';
import presidentCandidatesReducer from '../reducers/presidentCanidadatesReducer';
import radaCanidadatesReducer from '../reducers/radaCanidadatesReducer';
import resultsElectionsReducer from '../reducers/resultsReducer';

const rootReducers = combineReducers({
  auth:authReducer,
  firebase:firebaseReducer,
  cities:cityCandidatesReducer,
  mayor:mayorCandidatesReducer,
  president:presidentCandidatesReducer,
  rada:radaCanidadatesReducer,
  result:resultsElectionsReducer
})

export default rootReducers;