import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import CityNewYork from './CityNewYork';
import firebase from 'firebase';

import {getCitiesAction} from '../../../../redux/reducers/mayorCandidatesReducer';
import {setVoteToUser} from '../../../../redux/actions/mayorVoteActions';

const CityNewYorkContainer = (props) => {

  useEffect(()=>{

    props.getCitiesAction();

  },[]);

  return(
    <CityNewYork {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    cities:state.mayor.cities["new york"],
    votedCity:state.auth.userData,
    cityUser:state.auth.userData
  }
}

export default compose(
  connect(mapStateToProps,{getCitiesAction,setVoteToUser}),
  )(CityNewYorkContainer);
