import React from 'react';

const initialState = {

};

export default function usersReducer(state = initialState, action) {
    
    switch(action.type){
        case 'ADD_USER':
            return{
                ...state
            }

        default:return state;
    }
}