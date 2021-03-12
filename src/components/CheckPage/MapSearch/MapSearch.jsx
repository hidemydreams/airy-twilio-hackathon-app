import React from 'react';
import "./MapSearch.scss"

export default function MapSearch({ submitHandler, value, searchChangeHandler }) {
  return (
    <div className="mapSearch">
      <div className="mapSearch__text">
        <h1>Check air in your city in just 2 clicks!</h1>
        <p>Enter your city or country to get information about the air you are breathing!</p>
      </div>
      <form onSubmit={submitHandler}>
        <input value={value} onChange={(e) => searchChangeHandler(e)} placeholder="Enter your location" ></input>
        <div><button>Check</button></div>
      </form>
    </div>
  )
}
