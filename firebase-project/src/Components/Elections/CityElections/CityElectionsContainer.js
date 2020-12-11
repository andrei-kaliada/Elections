import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {getCitiesAction} from "../../../redux/reducers/cityCandidatesReducer";
import CityElections from './CityElections';
import firebase from 'firebase';

const CityElectionsContainer = (props) => {

    useEffect(()=>{
      props.getCitiesAction();
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



export default compose(
  connect(mapStateToProps,{getCitiesAction}),
  )(CityElectionsContainer);
