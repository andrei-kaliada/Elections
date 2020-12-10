import React from 'react'
import { connect } from 'react-redux';
import {handleSignOutUser} from '../../redux/reducers/authReducer';
import Nav from './Nav';

function NavContainer({handleSignOutUser}) {
  return (
    <Nav handleSignOutUser={handleSignOutUser}/>
  )
}

export default connect(null,{handleSignOutUser})(NavContainer);
