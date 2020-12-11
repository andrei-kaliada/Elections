import React from 'react';
import firebase from 'firebase';

const ADD_CITIES = "ADD_SITIES";

const initialState = {
  cities:{},
};

export default function cityCandidatesReducer(state = initialState, {type,payload}) {
    
    switch(type){
        case ADD_CITIES:
            return{
                ...state,
                cities:payload
            }

        default:return state;
    }
}


export const addCityAction = (cities) => {
  console.log(cities);
  return{
    type:ADD_CITIES,
    payload:cities
  }
}

export const getCitiesAction = () => (dispatch) => {
  firebase.database().ref('/CityCandidates').on('value', (snap) => {
    console.log(snap.val());
    dispatch(addCityAction(snap.val()));
  })
}