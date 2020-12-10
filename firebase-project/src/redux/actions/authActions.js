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
        console.log(response);
        db.ref('Users/'+response.user.uid).set({
          name:data.name,
          lastName:data.lastname,
          city:data.city,
          email:data.email,
          passport:data.passport,
          password:data.password,
          phone:data.phone,
          votedCity:"no",
          votedMayor:"no",
          votedPresident:"no",
          votedVer:"no",
          
        });

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
        console.log(response.user.providerData[0].email);
        console.log(snap.val());
          const userEmail = response.user.providerData[0].email;
          const dataUsers = snap.val();
          Object.keys(dataUsers).map( (el) => dataUsers[el].email.toLowerCase() === userEmail ? dispatch(setCurrentUser([dataUsers[el]])) : console.log("Wrong user"));
        });

      }).catch(err => {
        alert(err.message);
      })


  } catch (error) {
    console.log("Error:"+error);
  }
    
  
};
