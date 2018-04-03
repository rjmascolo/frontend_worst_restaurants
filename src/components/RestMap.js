import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const { compose, withProps, withStateHandlers } = require("recompose");

const RestMap = compose(
  withStateHandlers(() => ({
    isOpen: {},
  }), {
    onToggleOpen: ({isOpen}) => {

    }
  }),
  withScriptjs,
  withGoogleMap
)(props =>
  <div>
    <GoogleMap
      defaultZoom={12}
      center={props.currentZipcode}
    >
      {
        props.restaurants.length > 0 ? props.restaurants.map( (res,i) => {
        return <Marker
          position={{lat: parseFloat(res.lat), lng: parseFloat(res.long)}}
          title={res.name}
          key={i}
          onClick={() => props.openInfoWindow(i)}
        >
        { props.infoWindowOpen === i && <InfoWindow onCloseClick={() => props.openInfoWindow("")}>
        <div>
          <strong><p>{res.name}</p></strong>
          <p>{`${res.building} ${res.street} ${res.boro}, NY`}</p>
        </div>
      </InfoWindow>}
    </Marker>
      }) : null}
    </GoogleMap>
  </div>
)

export default RestMap;
