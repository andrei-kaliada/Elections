import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

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
    return (
        <ListRight>
            <li><NavLink to="/form">LogIn</NavLink></li>
            
        </ListRight>
    )
}
