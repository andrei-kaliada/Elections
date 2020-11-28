import React from 'react';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';

const WrapperContainer = styled.div`
  padding-top:150px;
  padding-bottom:300px;
  text-align:center;
  background-image:url("../../assets/images/bgFlag.jpg");

  h1{
    color:#fff;
    font-size:48px;
    text-shadow: 1px 1px 2px black, 0 0 1em black;
  }
  
  h2{
    color:#fff;
    text-shadow: 1px 1px 2px black, 0 0 1em black;
  }

  a{
    text-decoration:none;
  }

  .MuiIcon-root{
    height:35px;
  }
`;

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function MainPage() {

  const classes = useStyles();
  
  return (
    <WrapperContainer>
      <h1>Election Of The Head Of Our State</h1>    
      <h2>In protocolary terms, the head of a sovereign, independent state is usually<br/> identified as the individual who, according to that state's constitution, is the reigning<br/> king, when it comes to a monarchy,<br/> or the president, in the case of a republic.</h2>  
      <NavLink to="/election">
      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<Icon>&#9658;</Icon>}
      >
        Go to election
      </Button>
      </NavLink>
    </WrapperContainer>
  )
}
