import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss';
import Logo from '../../../images/Logo.svg';

export default function Header() {
  return (
    <div className="footer">
      <div className="footer__nav">
        <img className="Logo" src={Logo} alt="logo" />
        <ul className="footer__list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/check">Check Air</NavLink></li>
          <li><NavLink to="/articles">Pollution Articles</NavLink></li>
        </ul>
      </div>
      <div className="createdBy">
        <p> Created by</p>
        <p> Wild Code School Students</p>
      </div>
    </div>
  )
}
