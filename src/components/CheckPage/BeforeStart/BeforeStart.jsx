import React from 'react';
import "./BeforeStart.scss";

export default function BeforeStart() {
  return (
    <div className="before-start">
      <p>Basically there is something called AQI (Air Quality Index), when you will press the result you will get on of the 5 levels based on AQI</p>
      <ul>
        <li>Clean air</li>
        <li>Moderate</li>
        <li>Unhealthy</li>
        <li>Very Unhealthy</li>
        <li>Hazardous</li>
      </ul>
    </div>
  )
}
