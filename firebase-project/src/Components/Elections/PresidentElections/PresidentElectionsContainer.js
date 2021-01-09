import React, {useEffect} from 'react'
import PresidentElections from './PresidentElections';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {getPresidentAction} from "../../../redux/reducers/presidentCanidadatesReducer";
import {setVoteToUser} from '../../../redux/actions/presidentVoteActions';

 function PresidentElectionsContainer(props) {

  useEffect(()=>{

    props.getPresidentAction();

  },[]);

  return (
    <PresidentElections {...props}/>
    
  )
}

const mapStateToProps = (state) => {
  return{
    candidates:state.president.presidentCandidates,
    cityUser:state.auth.userData
  }
}


export default compose(
  connect(mapStateToProps,{getPresidentAction,setVoteToUser})
)(PresidentElectionsContainer);

