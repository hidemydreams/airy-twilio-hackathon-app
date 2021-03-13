import React from "react";
import { geolocated } from "react-geolocated";
import "./GeoLocation.scss";

class GeoLocation extends React.Component {

  state = {
    countryCity: ``
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.coords !== this.props.coords) {
      const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${this.props.coords.latitude},${this.props.coords.longitude}`);
      const data = await response.json()

      this.setState({ countryCity: data })
      console.log(data)
    }

  }
  render() {
    const { setUserLocation } = this.props
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <div className="location-label">
        <button onClick={() => setUserLocation(this.state.countryCity)}>Get My Location</button>
      </div>
    ) : (
      <div>Getting the location data&hellip; </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation);