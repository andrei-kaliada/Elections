import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import CityKiev from './CityKiev';
import firebase from 'firebase';

const CityKievContainer = (props) => {


  return(
    <CityKiev {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    cities:state.cities.cities.Kiev,
    votedCity:state.auth.userData[0].votedCity
  }
}

export default compose(
  connect(mapStateToProps,null),
  )(CityKievContainer);
