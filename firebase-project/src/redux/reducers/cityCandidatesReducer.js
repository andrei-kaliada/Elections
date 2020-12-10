import React from 'react';
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