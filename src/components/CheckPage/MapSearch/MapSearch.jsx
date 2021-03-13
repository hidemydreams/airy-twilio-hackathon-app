import React, { useState } from 'react';
import SimpleMap from './GoogleMap/GoogleMap';
import "./MapSearch.scss";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';


export default function MapSearch({ map, address, handleSelect, latitude, longitude, getAirInfo, setAddress }) {


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
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}  >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => {
          return (
            <div>
              <input className="search-input" {...getInputProps({ placeholder: "Enter your location" })} />
              <div>
                {loading ? <div>loading</div> : null}
                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#273893" : "#fff",
                    padding: "10px"
                  }
                  return <div key={suggestion.description} {...getSuggestionItemProps(suggestion, { style })}>{suggestion.description}</div>
                })}
              </div>
            </div>
          )
        }}
      </PlacesAutocomplete>
      <div><button onClick={() => getAirInfo()}> Check</button></div>
    </div>
  )
}
