import React from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../HOC/withAuthRedirect';
import Elections from './Elections';

export default compose(
  connect(null,null),
  withAuthRedirect
  )(Elections);
