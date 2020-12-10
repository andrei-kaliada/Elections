import React,{ useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase';

import Profile from './Profile';

const ProfileContainer = (props) => {


  useEffect(()=>{
    
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
      
    console.log(user);
      
      } else {
        console.log("No user!")
      }
    });
  },[props.isAuth,props.userData])
  console.log(props.isAuth)
  if (!props.isAuth) {
    return <Redirect to="/form" />;
  }

  return <Profile {...props}/>
}

const mapStateToProps = (state) => {
  return{
    userData:state.auth.userData,
    isAuth:state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps,null),
  withAuthRedirect
)(ProfileContainer);
