import React, { useState, useEffect } from 'react'
import SearchBlock from './MapSearch/SearchBlock'
import "./CheckPage.scss";
import { motion } from "framer-motion"
import {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { geolocated } from "react-geolocated";



function CheckPage(props) {
  const [airInfo, setAirInfo] = useState(null);
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState({ lat: null, lng: null });
  const [warning, setWarning] = useState(false);
  const [userLocationFromCoordinates, setUserLocationFromCoordinates] = useState(null)

  const lat = props.coords?.latitude;
  const lng = props.coords?.longitude;

  useEffect(() => {
    setCoords({
      lat: lat,
      lng: lng
    })
  }, [lat, lng])

  useEffect(() => {
    setUserLocation(userLocationFromCoordinates);
  }, [userLocationFromCoordinates])

  useEffect(() => {
    let isCancelled = false;
    if (coords.lat && !isCancelled) {
      getLocationFromUserCoordinates()
    }
    return () => {
      isCancelled = true;
    }
  }, [coords])

  const getLocationFromUserCoordinates = async () => {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coords?.lat},${coords?.lng}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    const data = await response.json();
    setUserLocationFromCoordinates(data);
  }

  const setUserLocation = (somedata) => {
    const address = somedata?.plus_code.compound_code
    if (somedata) {
      setAddress(`${address?.substr(address.indexOf(' ') + 1)}`);
    } else {
      setAddress(`Loading your location`);
    }
  }

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
      setAddress('')
    }
  }

  return (
    <div className="container">
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} className="check-page">
        <SearchBlock setUserLocation={setUserLocation} setAddress={setAddress} getAirInfo={getAirInfo} handleSelect={handleSelect} address={address} latitude={coords.lat} longitude={coords.lng} airInfo={airInfo} />
      </motion.div>
    </div>
  )
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(CheckPage);