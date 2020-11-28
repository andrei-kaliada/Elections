import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import Profile from './Profile';

export default compose(
  connect(null,null),
  withAuthRedirect
)(Profile);
