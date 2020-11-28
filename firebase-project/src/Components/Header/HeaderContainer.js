import React from 'react'
import Header from './Header';
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  
  return{
    user:state.auth.userData
  }
}

export default connect(mapStateToProps,null)(Header);