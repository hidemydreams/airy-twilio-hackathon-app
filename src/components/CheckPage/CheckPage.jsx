import React, { useState, useEffect } from 'react'
import AirInfo from './AirInfo/AirInfo'
import SearchBlock from './MapSearch/SearchBlock'
import "./CheckPage.scss";
import { motion } from "framer-motion"
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

export default function CheckPage() {
  const [airInfo, setAirInfo] = useState(null);
  const [map, setMap] = useState(false);
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [warning, setWarning] = useState(false)

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setCoords(latLng);
    setAddress(value);
    setWarning(false)
  }

  const getAirInfo = (lat = coords.lat, lng = coords.lng) => {
    if (address === Number || address === '' || lat == null) {
      setWarning(!warning)
    } else {
      fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lng}&appid=b2d2d94ac963070d2157287802797e13`)
        .then(data => data.json())
        .then(info => setAirInfo(info))
      setMap(true)
      setAddress('')
    }
  }

  const setUserLocation = (somedata) => {
    const address = somedata.plus_code.compound_code
    setAddress(`${address.substr(address.indexOf(' ') + 1)}`);
    setCoords({ lat: somedata.results[0].geometry.location.lat, lng: somedata.results[0].geometry.location.lng });
  }

  return (
    <div className="container">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="check-page">
        <SearchBlock setUserLocation={setUserLocation} setAddress={setAddress} getAirInfo={getAirInfo} map={map} handleSelect={handleSelect} address={address} latitude={coords.lat} longitude={coords.lng} airInfo={airInfo} />
      </motion.div>
    </div>
  )
}
