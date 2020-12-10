import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase';
import { Redirect } from "react-router-dom";

const ListRight = styled.ul`

display: flex;
justify-content: center;
align-items: center;
    list-style-type:none;
    li{
        
        margin:0 20px;
        a{
            text-decoration:none;
            color:white;
            transition:0.3s;
            font-weight:bold;
            color:#fff;
            font-size:16px;

            &:hover{
                transition:0.3s;
                color:#000;
            }
        }
    }

`;

const SginOutBtn = styled.button`
border: 0;
background: none;
cursor: pointer;
font-weight: bold;
color: #fff;
font-family: "Roboto";
font-size: 16px;

&:hover{
    color:#000;
    transition:0.3s;
}

&:focus {outline:0;}

`;

export default function SignedLinks({isAuth, handleSignOutUser}) {

    const handleSignOut = () => {
        debugger
        firebase
        .auth()
        .signOut()
        .then( res => {
            console.log(res);
            
        })
        console.log('Work')
        handleSignOutUser();
    }

    

    return (
        <ListRight>
            <li><NavLink to="/form">LogIn</NavLink></li>
           { isAuth && <li><SginOutBtn onClick={handleSignOut}>Sign Out</SginOutBtn></li>}
        </ListRight>
    )
}
