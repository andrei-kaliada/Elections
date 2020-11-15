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
        }
    }

`;

export default function SignedLinks() {
    return (
        <ListRight>
            <li><NavLink to="/">LogOut</NavLink></li>
            <li><NavLink to="/profile">NN</NavLink></li>
        </ListRight>
    )
}
