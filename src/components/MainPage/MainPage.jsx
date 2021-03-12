import React from 'react';
import "./MainPage.scss";
import IMAGE from '../../images/IMAGE.svg';

export default function MainPage() {
  return (
    <div className="main-page">
      <div className="Title">
        <h1>Know, what you breath</h1>
        <p>A small app which is built to help you getting some information on air pollution.</p>
        <button>Check my place</button>
      </div>
      <img className="Image" src={IMAGE} alt="air" />
    </div>
  )
}
