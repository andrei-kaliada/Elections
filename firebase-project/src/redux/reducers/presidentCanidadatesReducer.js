import React from 'react';
import firebase from 'firebase';

const ADD_CITIES = "ADD_SITIES";

const initialState = {
  presidentCandidates:[],
};

export default function presidentCandidatesReducer(state = initialState, {type,payload}) {
    
    switch(type){
        case ADD_CITIES:
            return{
                ...state,
                presidentCandidates:payload
            }

        default:return state;
    }
}


export const addPresidentAction = (cities) => {
  console.log(cities);
  return{
    type:ADD_CITIES,
    payload:cities
  }
}

export const getPresidentAction = () => (dispatch) => {
  firebase.database().ref('/PresidentCandidates').on('value', (snap) => {
    console.log(snap.val());
    dispatch(addPresidentAction(snap.val()));
  })
}