import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase';

const ListRight = styled.ul`

    display:flex;
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
                opacity:0.8;
            }
        }
    }

`;

export default function SignedLinks() {

    const handleSignOut = () => {
     
        firebase
        .auth()
        .signOut()
        .then( res => {
            console.log(res);
        })
    }

    return (
        <ListRight>
            <li><NavLink to="/form">LogIn</NavLink></li>
            <li><button onClick={handleSignOut}>Sign Out</button></li>
        </ListRight>
    )
}
