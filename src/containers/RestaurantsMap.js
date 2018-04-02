import React from 'react'
import RestMap from '../components/RestMap'

class RestaurantsMap extends React.Component {

  render() {
    return(
      <div id="deliverable-container-outer">
        <RestMap
          isMarkerShown
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          restaurants= {this.props.restaurants}
          infoWindowOpen= {this.props.infoWindowOpen}
          openInfoWindow= {this.props.openInfoWindow}
        />
      </div>
    )
  }
}

export default RestaurantsMap;
