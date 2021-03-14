import React from 'react';
import SimpleMap from './GoogleMap/GoogleMap';
import "./MapSearch.scss";
import PlacesAutocomplete from 'react-places-autocomplete';
import Loader from '../../common/Loader/Loader';
import Geolocation from "../../GeoLocation/GeoLocation"


export default function MapSearch({ map, address, handleSelect, latitude, longitude, getAirInfo, setAddress, setUserLocation, warning }) {
  return (
    <div className="mapSearch">
      <div className={map ? "mapSearch__map-off" : null}>
        <div className="mapSearch__text">
          <h1>Check quality of the  air in your city in just 2 clicks!</h1>
          <p>Enter your city or country to get information about the air you are breathing!</p>
        </div>
      </div>
      <div className={map ? "mapSearch__map-on" : "mapSearch__map-off"}>
        <SimpleMap latitude={latitude} longitude={longitude} />
      </div>
      <div className="row">
        <div className={warning ? "warning__text" : "warning"} >Please select a place from the dropdown list!</div>
        <div className="row-inner">
          <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}  >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
              return (
                <div>
                  <input className="search-input" {...getInputProps({ placeholder: "Enter your location" })} />
                  <div className="suggestions-box">
                    {loading ? <div><Loader /></div> : null}
                    {suggestions.map((suggestion) => {
                      const style = {
                        backgroundColor: suggestion.active ? "#8691b9" : "#fff",
                        padding: "10px"
                      }
                      return <div className="suggestion" key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                    })}
                  </div>
                </div>
              )
            }}
          </PlacesAutocomplete>
          <div><button onClick={() => getAirInfo()}> Check</button></div>
        </div>
        <Geolocation setUserLocation={setUserLocation} />
      </div>
    </div>
  )
}
