import React, { useState, useEffect } from 'react'
import AirInfo from './AirInfo/AirInfo'
import MapSearch from './MapSearch/MapSearch'
import Geolocation from "../GeoLocation/GeoLocation"
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


  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0])
    setCoords(latLng);
    setAddress(value);
  }

  const getAirInfo = () => {
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${coords.lat}&lon=${coords.lng}&appid=b2d2d94ac963070d2157287802797e13`)
      .then(data => data.json())
      .then(info => setAirInfo(info))
    setMap(true)
  }

  const setUserLocation = (value) => {
    setAddress(value)

  }

  return (
    <div className="container">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="check-page">
        <MapSearch setAddress={setAddress} getAirInfo={getAirInfo} map={map} handleSelect={handleSelect} address={address} latitude={coords.lat} longitude={coords.lng} />
        <Geolocation setUserLocation={setUserLocation} />
        <AirInfo airInfo={airInfo} />
      </motion.div>
    </div>
  )
}
