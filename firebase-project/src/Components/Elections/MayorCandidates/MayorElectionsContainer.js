import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import {getCitiesAction} from "../../../redux/reducers/mayorCandidatesReducer";
import MayorElections from './MayorElections';
import firebase from 'firebase';

const MayorElectionsContainer = (props) => {

    useEffect(()=>{
      props.getCitiesAction();
    },[])

  return(
    <MayorElections {...props}/>
  );
}

const mapStateToProps = (state) => {
  return{
    goverments:state.cities.cities
  }
}



export default compose(
  connect(mapStateToProps,{getCitiesAction}),
  )(MayorElectionsContainer);
