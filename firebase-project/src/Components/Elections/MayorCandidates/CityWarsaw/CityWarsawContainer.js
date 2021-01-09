import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import CityWarsaw from './CityWarsaw';
import firebase from 'firebase';

import {getCitiesAction} from '../../../../redux/reducers/mayorCandidatesReducer';
import {setVoteToUser} from '../../../../redux/actions/mayorVoteActions';

const CityWarsawContainer = (props) => {

  useEffect(()=>{

    props.getCitiesAction();

  },[]);

  return(
    <CityWarsaw {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    cities:state.mayor.cities.Warsaw,
    votedCity:state.auth.userData,
    cityUser:state.auth.userData
  }
}

export default compose(
  connect(mapStateToProps,{getCitiesAction,setVoteToUser}),
  )(CityWarsawContainer);
