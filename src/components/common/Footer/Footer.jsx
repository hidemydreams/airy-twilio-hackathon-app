import React from 'react'
import { NavLink } from "react-router-dom";
import './Footer.scss';
import Logo from '../../../images/Logo.svg';

export default function Header() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__nav">
            <img className="Logo" src={Logo} alt="logo" />
            <ul className="footer__list">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/check">Check Air</NavLink></li>
              <li><NavLink to="/articles">Pollution Articles</NavLink></li>
            </ul>
          </div>
          <div className="createdBy">
            <p> Created by Wild Code School Students</p>
            <div className="students">
              <p className="students__item">
                <p>Nazar</p>
                <div className="links">
                  <a href="https://github.com/hidemydreams">GitHub</a> <a href="https://www.linkedin.com/in/nazar-archakov/">LinkedIn</a>
                </div>
              </p>
              <p className="students__item">
                <p>Arseniy</p>
                <div className="links">
                  <a href="https://github.com/Maslovars">GitHub</a> <a href="https://www.linkedin.com/in/arseniy-maslov/">LinkedIn</a>
                </div>
              </p>
              <p className="students__item">
                <p>Tatsiana</p>
                <div className="links">
                  <a href="https://github.com/gortatka">GitHub</a> <a href="https://www.linkedin.com/in/tatsiana-horbatsevich/">LinkedIn</a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
