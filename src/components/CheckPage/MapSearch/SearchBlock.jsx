import React, { useState } from 'react';
import "./SearchBlock.scss";
import PlacesAutocomplete from 'react-places-autocomplete';
import Loader from '../../common/Loader/Loader';
import Geolocation from "../../GeoLocation/GeoLocation"
import AirInfo from '../AirInfo/AirInfo';


export default function SearchBlock({ map, address, handleSelect, latitude, longitude, getAirInfo, setAddress, setUserLocation, airInfo }) {


  const [isPressed, setIsPressed] = useState(false)
  return (
    <div className="search-block">
      {isPressed ? <AirInfo airInfo={airInfo} /> : (<div className="search-block__row">
        <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}  >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
            return (
              <div className="search-block__box input-box">
                <input value={address} className="input-box__input" {...getInputProps()} />
                <div className="input-box__suggestions">
                  {loading ? <div><Loader /></div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#8691b9" : "#fff",
                      padding: "10px"
                    }
                    return <div className="input-box__suggestion" key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                  })}
                </div>
              </div>
            )
          }}
        </PlacesAutocomplete>
        <div className="search-block__buttons">
          <button className="search-block__btn" onClick={() => {
            getAirInfo();
            setIsPressed(!isPressed)
          }}> Check</button>
          <Geolocation setUserLocation={setUserLocation} />
        </div>
      </div>)}
    </div>
  )
}
