import React from 'react';
import { NavLink } from "react-router-dom";
import './Header.scss';
import Logo from '../../../images/Logo.svg';

export default function Header() {
  return (
    <div className="header">
      <div className="nav">

        <NavLink to="/"><img className="Logo" src={Logo} alt="logo" /></NavLink>

        <ul className="nav__list">
          <li><NavLink exact={true} to="/">Home</NavLink></li>
          <li><NavLink to="/check">Check Air</NavLink></li>
          <li><NavLink to="/articles">Pollution Articles</NavLink></li>
        </ul>
      </div>
    </div>
  )
}
