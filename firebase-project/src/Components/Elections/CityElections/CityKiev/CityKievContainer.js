import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import CityKiev from './CityKiev';
import firebase from 'firebase';

import {getCitiesAction} from '../../../../redux/reducers/cityCandidatesReducer';
import {setVoteToUser} from '../../../../redux/actions/voteActions';

const CityKievContainer = (props) => {

  useEffect(()=>{

    props.getCitiesAction();

  },[]);

  return(
    <CityKiev {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    cities:state.cities.cities.Kiev,
    votedCity:state.auth.userData
  }
}

export default compose(
  connect(mapStateToProps,{getCitiesAction,setVoteToUser}),
  )(CityKievContainer);
