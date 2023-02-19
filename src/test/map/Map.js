
import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'

import './map.css'

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon Icon icon="material-symbols:person-pin-circle" className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  
  <div className="map">
    <h2 className="map-h2">Event Location</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyAI8rU9OZRoOxSJUV4Y12OAHRWDfCryogU', 
          language: 'en'
        }}
        defaultCenter={location}
        // defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
      </GoogleMapReact>
    </div>
  </div>
  
)

export default Map


// CALENDAR ICON
// <iconify-icon icon="material-symbols:calendar-today-rounded"></iconify-icon>
