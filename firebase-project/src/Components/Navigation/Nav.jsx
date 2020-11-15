import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className="navigation">
      <div className="navigation__main-list">
        <ul>
          <li className="navigation__title">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navigation__title">
            <NavLink to="/election">Election</NavLink>
          </li>
          <li className="navigation__title">
            <NavLink to="/local">Local</NavLink>
          </li>
          <li className="navigation__title">
            <NavLink to="/referendum">Referendum</NavLink>
          </li>
        </ul>
      </div>
      <div className="navigation__profile-list">
        <ul>
          <li className="navigation__title">
            <NavLink to="/chat">Chat</NavLink>
          </li>
          <li className="navigation__title">
            <NavLink to="">LogOut</NavLink>
          </li>
          <li className="navigation__title">
            <NavLink to="/profile">Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
