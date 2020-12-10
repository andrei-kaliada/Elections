import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {addCityAction} from "../../../redux/reducers/cityCandidatesReducer";
import CityElections from './CityElections';
import firebase from 'firebase';

const CityElectionsContainer = (props) => {

    useEffect(()=>{
      firebase.database().ref('/CityCandidates').on('value', (snap) => {
        console.log(snap.val());
        props.getCities(snap.val());
      })
    },[])

  return(
    <CityElections {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    goverments:state.cities.cities
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    getCities: (cities) => {
      dispatch(addCityAction(cities))
    }
  }
}

export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  )(CityElectionsContainer);
