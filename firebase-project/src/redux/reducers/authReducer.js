import React from 'react';
const GET_USER = "GET_USER";

const initialState = {
    userData:[],
    isAuth:false
};

export default function authReducer(state = initialState, action) {
    
    switch(action.type){
        
        case GET_USER:
          
            return{
                ...state,
                userData:[...action.dataUser],
                isAuth:true,
            }

        default:return state;
    }
}

export const setCurrentUser = (dataUser) => {
   
    return{
        type:GET_USER,
        dataUser
    }
}
