import React from 'react';

const initialState = {

};

export default function usersReducer(state = initialState, action) {
    
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state
            }
        case 'ADD_USER_ERROR':
            console.log(action.err);
            return state;

        default:return state;
    }
}