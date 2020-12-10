import React from 'react'
import Header from './Header';
import { connect } from "react-redux";
import { handleSignOutUser } from '../../redux/reducers/authReducer';


const mapStateToProps = (state) => {
  
  return{
    user:state.auth.userData,
    isAuth:state.auth.isAuth
  }
}

export default connect(mapStateToProps,{handleSignOutUser})(Header);