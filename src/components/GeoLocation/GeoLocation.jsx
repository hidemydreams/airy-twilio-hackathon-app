import React from "react";
import { geolocated } from "react-geolocated";
import Loader from "../common/Loader/Loader";
import "./GeoLocation.scss";

class GeoLocation extends React.Component {

  state = {
    countryCity: ``,
    isPressed: false
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.coords !== this.props.coords) {
      const response = await fetch(`https://api.positionstack.com/v1/reverse?access_key=5bf71cd20c0cb84d02789c1031d43a14&query=${this.props.coords.latitude},${this.props.coords.longitude}`);
      const data = await response.json()
      this.setState({ countryCity: data })
    }

  }
  render() {
    const { setUserLocation } = this.props
    return (
      <div className="location-label">
        {this.props.coords ? (
          <div className={this.state.isPressed ? "hide-btn" : null}>
            <button onClick={() => {
              setUserLocation(this.state.countryCity);
              this.setState({ isPressed: true })
            }}>Get My Location</button>
          </div>
        ) : (
          <div><Loader /></div>
        )}
      </div>
    )
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(GeoLocation);