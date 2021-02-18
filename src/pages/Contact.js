import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Contact extends Component {
    static defaultProps = {
        center: {
            lat: -33.88,
            lng: 151.20
        },
        zoom: 11
    };
    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <h1>Contact page</h1>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyBiH4WwrTPC15iEOFzw0aMYD_oHWg6JD8A' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <AnyReactComponent
                        lat={-33.870453}
                        lng={151.208755}
                        text="Your location"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default Contact
