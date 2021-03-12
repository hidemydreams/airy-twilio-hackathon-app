import React from 'react';



export default function MapSearch({ submitHandler, value, searchChangeHandler }) {
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input value={value} onChange={(e) => searchChangeHandler(e)} placeholder="Enter your location" ></input>
        <div><button>Check</button></div>
      </form>
    </div>
  )
}
