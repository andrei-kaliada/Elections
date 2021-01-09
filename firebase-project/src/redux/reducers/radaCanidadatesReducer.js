import React from 'react';
import firebase from 'firebase';

const ADD_CITIES = "ADD_SITIES";

const initialState = {
  radaCandidates:[],
};

export default function radaCanidadatesReducer(state = initialState, {type,payload}) {
    
    switch(type){
        case ADD_CITIES:
            return{
                ...state,
                radaCandidates:payload
            }

        default:return state;
    }
}


export const addRadaAction = (cities) => {
  console.log(cities);
  return{
    type:ADD_CITIES,
    payload:cities
  }
}

export const getRadaAction = () => (dispatch) => {
  firebase.database().ref('/VerkhovnaRadaParties').on('value', (snap) => {
    console.log(snap.val());
    dispatch(addRadaAction(snap.val()));
  })
}