import React, {useEffect} from 'react'
import VerkhovnaRadaElections from './VerkhovnaRadaElections';
import { connect } from 'react-redux';
import { compose } from 'redux';

import {getRadaAction} from "../../../redux/reducers/radaCanidadatesReducer";
import {setVoteToUser} from '../../../redux/actions/presidentVoteActions';

 function VerkhovnaRadaElectionsContainer(props) {

  useEffect(()=>{

    props.getRadaAction();

  },[]);

  return (
    <VerkhovnaRadaElections {...props}/>
    
  )
}

const mapStateToProps = (state) => {
  return{
    rada:state.rada.radaCandidates,
    cityUser:state.auth.userData
  }
}


export default compose(
  connect(mapStateToProps,{getRadaAction,setVoteToUser})
)(VerkhovnaRadaElectionsContainer);

