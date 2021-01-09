import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {compose} from 'redux';
import withAuthRedirect from '../../../HOC/withAuthRedirect';
import Results from './Results';
import {getResultsElections} from '../../../redux/reducers/resultsReducer';


function ResultContainer(props) {

  useEffect(()=>{

    props.getResultsElections();

  },[]);

  return (
    <Results {...props}/>
    
  )
}

const mapStateToProps = (state) => {
  
  return{
    CityResult:state.result.resultsCandidates.CityResult,
    PresidentResult:state.result.resultsCandidates.PresidentResult,
    VerResult:state.result.resultsCandidates.VerResult,
    mayorResult:state.result.resultsCandidates.mayorResult,
  }
}

export default compose(
  connect(mapStateToProps,{getResultsElections}),
  withAuthRedirect
  )(ResultContainer);
