import React, { useState, useEffect } from 'react'
import AirInfo from './AirInfo/AirInfo'
import MapSearch from './MapSearch/MapSearch'
import Geolocation from "../GeoLocation/GeoLocation"
import "./CheckPage.scss";
import { motion } from "framer-motion"

export default function CheckPage() {
  const [value, setValue] = useState("");
  const [cityInfo, setCityInfo] = useState(null);
  const [airInfo, setAirInfo] = useState(null);
  const [map, setMap] = useState(false)

  const getLongitudeLatitudeFromInput = () => {
    return fetch(`http://api.positionstack.com/v1/forward?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${value}`)
      .then(response => response.json())
      .then(info => setCityInfo(info.data[0]))
  }

  useEffect(() => {
    if (cityInfo) {
      fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${cityInfo.latitude}&lon=${cityInfo.longitude}&appid=b2d2d94ac963070d2157287802797e13`)
        .then(data => data.json())
        .then(info => setAirInfo(info))

      setMap(true)
    }
  }, [cityInfo])

  const searchChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const geolocationHandler = (value) => {
    setValue(value)
  }

  return (
    <div className="container">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="check-page">
        <MapSearch map={map} getLongitudeLatitudeFromInput={getLongitudeLatitudeFromInput} value={value} searchChangeHandler={searchChangeHandler} latitude={cityInfo?.latitude} longitude={cityInfo?.longitude} />
        <Geolocation geolocationHandler={geolocationHandler} />
        <AirInfo airInfo={airInfo} />
      </motion.div>
    </div>
  )
}
