import React from "react";
import { geolocated } from "react-geolocated";

class GeoLocation extends React.Component {

  state = {
    countryCity: ``
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.coords !== this.props.coords) {
      const response = await fetch(`http://api.positionstack.com/v1/reverse?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${this.props.coords.latitude},${this.props.coords.longitude}`);
      const data = await response.json()

      this.setState({ countryCity: `${data.data[0].country}, ${data.data[0].locality}` })
    }

  }
  render() {
    const { setUserLocation } = this.props
    return !this.props.isGeolocationAvailable ? (
      <div>Your browser does not support Geolocation</div>
    ) : !this.props.isGeolocationEnabled ? (
      <div>Geolocation is not enabled</div>
    ) : this.props.coords ? (
      <table>
        <tbody>
          <tr>
            <td>latitude</td>
            <td>{this.props.coords.latitude}</td>
          </tr>
          <tr>
            <td>longitude</td>
            <td>{this.props.coords.longitude}</td>
          </tr>
          <tr>
            <td>altitude</td>
            <td>{this.props.coords.altitude}</td>
          </tr>
          <tr>
            <td>heading</td>
            <td>{this.props.coords.heading}</td>
          </tr>
          <tr>
            <td>speed</td>
            <td>{this.props.coords.speed}</td>
          </tr>
        </tbody>
        <button onClick={() => setUserLocation(this.state.countryCity)}></button>
      </table>
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