import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ApartmentIcon from '@material-ui/icons/Apartment';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import PersonIcon from '@material-ui/icons/Person';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import SettingsIcon from '@material-ui/icons/Settings';

const Navigation = styled.div`

  ul{
    list-style-type:none;
    padding:0;

    a{
      text-decoration:none;
      li{
        display:flex;
        align-items:center;
        width:100%;
       
        transition:0.3s;
        color:#000;
        font-weight:bold;
        padding-left:20px;
        &:hover{
          background-color:#e3e3e3;
        }

        p{
          padding-left:15px;
        }
        
      }
    }

  }
`;

const SectionsTitle = styled.p`

color:grey;
font-size:14px;
border-top:1px solid #e3e3e3;
padding:15px 0 0 20px;
font-weight:500;
`;
export default function Nav() {
  return (
    <Navigation>
      <div className="navigation__main-list">
        <ul>
        <NavLink to="/">
          
            <li className="navigation__title">
            <HomeIcon/>
            <p>Home</p>
            </li>
          </NavLink>
          <NavLink to="/election">
            
          <li className="navigation__title">
          <EqualizerIcon />
            <p>Election</p>
          </li>
          </NavLink>
          
        </ul>
      </div>
      <div className="navigation__profile-list">
        <SectionsTitle>Profile</SectionsTitle>
        <ul>
        <NavLink to="/form">
        <li className="navigation__title">
          <ArrowBackIcon />
          <p>LogOut</p>
          </li>
        </NavLink>
        <NavLink to="/profile">
        <li className="navigation__title">
          <PersonIcon />
         <p> Profile</p>
          </li>
        </NavLink>
          
        </ul>
      </div>
      <div className="navigation__profile-list">
        <SectionsTitle>Support</SectionsTitle>
        <ul>
        <NavLink to="/form">
        <li className="navigation__title">
          <CallIcon />
          <p>Call Us</p>
          </li>
        </NavLink>
        <NavLink to="/profile">
        <li className="navigation__title">
          <EmailIcon />
         <p> Email Us</p>
          </li>
        </NavLink>
          
        </ul>
      </div>
      <div className="navigation__profile-list">
        <SectionsTitle>Settings</SectionsTitle>
        <ul>
        <NavLink to="/form">
        <li className="navigation__title">
          <SettingsIcon />
          <p>Call Us</p>
          </li>
        </NavLink>

          
        </ul>
      </div>
    </Navigation>
  );
}
