import React from 'react';
const GET_USER = "GET_USER";
const SIGN_OUT_USER = "SIGN_OUT_USER";

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
        case SIGN_OUT_USER:
            return{
                ...state,
                isAuth:false
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

export const handleSignOutUser = () => {
    return{
        type:SIGN_OUT_USER
    }
}
