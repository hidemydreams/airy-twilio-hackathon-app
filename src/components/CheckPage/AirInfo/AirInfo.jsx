import React from 'react'

export default function AirInfo({ airInfo }) {


  // console.log(airInfo.list[0].components)
  return (
    <div className="card">
      {airInfo.list ? (<ul>
        <li>{airInfo.list[0].components.co}</li>
        <li>{airInfo.list[0].components.no}</li>
        <li>{airInfo.list[0].components.no2}</li>
        <li>{airInfo.list[0].components.o3}</li>
        <li>{airInfo.list[0].components.so2}</li>
        <li>{airInfo.list[0].components.pm2_5}</li>
        <li>{airInfo.list[0].components.nh3}</li>
        <li>{airInfo.list[0].components.pm10}</li>
      </ul>) : <p>Loading</p>}
    </div>
  )
}
