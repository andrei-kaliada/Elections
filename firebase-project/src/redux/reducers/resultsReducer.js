import React from 'react';
import firebase from 'firebase';

const ADD_CITIES = "ADD_SITIES";

const initialState = {
  resultsCandidates:[],
};

export default function resultsElectionsReducer(state = initialState, {type,payload}) {
    
    switch(type){
        case ADD_CITIES:
            return{
                ...state,
                resultsCandidates:payload
            }

        default:return state;
    }
}


export const addResultsElections = (result) => {
  console.log(result);
  return{
    type:ADD_CITIES,
    payload:result
  }
}

export const getResultsElections = () => (dispatch) => {
  firebase.database().ref('/result').on('value', (snap) => {
    console.log(snap.val());
    dispatch(addResultsElections(snap.val()));
  })
}