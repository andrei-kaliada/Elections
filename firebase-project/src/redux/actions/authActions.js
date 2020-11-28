import React from "react";
import {getUserAction} from '../reducers/authReducer';
import firebase from 'firebase';

import {setCurrentUser} from '../reducers/authReducer';

export const signUp = (data) => async (dispatch,getState) => {

  try {
    const db = await firebase.database();
    firebase  
    .auth()
    .createUserWithEmailAndPassword(data.email, data.password)
      .then( response => {
        db.ref('Users').push({
          password:data.password,
          email:data.email
        });
        console.log(`Response: ${response}`);
        console.log(`Successful!!!`);
      })


  } catch (error) {
    console.log("Error:"+error);
  }
};

export const signIn = (data) => async (dispatch,getState) => {
 
  try {
    const db = await firebase.database();
    firebase  
    .auth()
    .signInWithEmailAndPassword(data.email, data.password)
      .then( response => {
        console.log(response);
        
        firebase.database().ref('Users').on('value',(snap)=>{
          console.log(snap.val());
          console.log(response.user.providerData[0].email);
          const userEmail = response.user.providerData[0].email;
          const dataUsers = snap.val();
          Object.keys(dataUsers).map( (el) => dataUsers[el].email.toLowerCase() === userEmail ? dispatch(setCurrentUser([dataUsers[el]])) : console.log("Wrong user"));
        });

      })


  } catch (error) {
    console.log("Error:"+error);
  }
    
  
};
