import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import "./GoogleMap.scss";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {

    state = {
        center: {
            lat: 0,
            lng: 0
        },
        zoom: 9
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.latitude !== this.props.latitude) {
            console.log("123")
            this.setState({ center: { lat: this.props.latitude, lng: this.props.longitude } })
        }
    }

    render() {

        console.log(this.state)
        return (
            // Important! Always set the container height explicitly
            <div className="googleMap">
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCTU2quk0FQWK8wWLbSEwJJV-Gt3OhTsvI" }}
                    center={this.state.center}
                    defaultZoom={this.state.zoom}
                >
                    {/* <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    /> */}
                </GoogleMapReact>
            </div>
        );
    }
}

export default SimpleMap;

// state = {
//     center: {
//         lat: 53,
//         lng: 27
//     },
//     zoom: 11
// };

