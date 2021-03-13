import React from "react";
import { geolocated } from "react-geolocated";

class GeoLocation extends React.Component {

  state = {
    coordinates: {}
  }

  componentDidMount() {
    if (this.props.coords?.latitude) {
      fetch(`http://api.positionstack.com/v1/reverse?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${this.props.coords.latitude},${this.props.coords.longitude}`)
        .then(data => data.json())
        .then(info => console.log(info))



    }

  }
  render() {
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