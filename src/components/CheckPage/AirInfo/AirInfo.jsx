import React, { useEffect, useState } from 'react'
import BeforeStart from '../BeforeStart/BeforeStart'

export default function AirInfo({ airInfo }) {
  const [info, setInfo] = useState(null)

  useEffect(() => {
    setInfo(airInfo)
  }, [airInfo])


  return (
    <div className="info-section">
      {airInfo.list ? (<ul>
        <h1>{airInfo?.list[0].main.aqi}</h1>
        <li><span>CO</span>: {airInfo.list[0].components.co}, μg/m<sup>3</sup></li>
        <li><span>NO</span>:{airInfo.list[0].components.no}, μg/m<sup>3</sup></li>
        <li><span>NO<sub>2</sub></span>:{airInfo.list[0].components.no2}, μg/m<sup>3</sup></li>
        <li><span>O<sub>3</sub></span>:{airInfo.list[0].components.o3}, μg/m<sup>3</sup></li>
        <li><span>SO<sub>2</sub></span>:{airInfo.list[0].components.so2}, μg/m<sup>3</sup></li>
        <li><span>PM<sub>2.5</sub></span>:{airInfo.list[0].components.pm2_5}, μg/m<sup>3</sup></li>
        <li><span>PM<sub>10</sub></span>:{airInfo.list[0].components.nh3}, μg/m<sup>3</sup></li>
        <li><span>NH<sub>3</sub></span>:{airInfo.list[0].components.pm10}, μg/m<sup>3</sup></li>
      </ul>) : <BeforeStart />}
    </div>
  )
}
