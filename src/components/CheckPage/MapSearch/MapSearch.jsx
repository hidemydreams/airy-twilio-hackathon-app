import React, { useState } from 'react';
import "./MapSearch.scss"

export default function MapSearch({ submitHandler, value, searchChangeHandler }) {
  const [map, setMap] = useState(false)
  return (
    <div className="mapSearch">
      <div className={map ? "mapSearch__map-off" : null}>
        <div className="mapSearch__text">
          <h1>Check air in your city in just 2 clicks!</h1>
          <p>Enter your city or country to get information about the air you are breathing!</p>
        </div>
      </div>
      <div className={map ? "mapSearch__map-on" : "mapSearch__map-off"}>map</div>
      <form className="searchForm" onSubmit={submitHandler}>
        <input value={value} onChange={(e) => searchChangeHandler(e)} placeholder="Enter your location" ></input>
        <div><button onClick={() => setMap(true)} >Check</button></div>
      </form>
    </div>
  )
}
