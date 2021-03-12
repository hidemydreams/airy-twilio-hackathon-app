import React, { useState, useEffect } from 'react'
import AirInfo from './AirInfo/AirInfo'
import MapSearch from './MapSearch/MapSearch'

export default function CheckPage() {
  const [value, setValue] = useState("");
  const [cityInfo, setCityInfo] = useState({});
  const [coordinates, setCoordinates] = useState({ latitude: '', longitude: '' });
  const [airInfo, setAirInfo] = useState({})

  useEffect(() => {
    fetch(`http://api.positionstack.com/v1/forward?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${value}`)
      .then(response => response.json())
      .then(info => setCityInfo(info))
  }, [value])

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=b2d2d94ac963070d2157287802797e13`)
      .then(data => data.json())
      .then(info => setAirInfo(info))
  }, [coordinates])


  const check = () => {
    if (cityInfo.data[0]) {
      setCoordinates({ latitude: cityInfo.data[0].latitude, longitude: cityInfo.data[0].longitude })
    }
  }

  const searchChangeHandler = (e) => {
    setValue(e.target.value)
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.trim()) {
      check(value);
    }
    setValue("");
  }
  return (
    <div className="check-page">
      <MapSearch submitHandler={submitHandler} check={check} value={value} searchChangeHandler={searchChangeHandler} />
      <AirInfo airInfo={airInfo} />
    </div>
  )
}
