import React from 'react'
import { Feed } from 'semantic-ui-react'
import RestaurantItem from '../components/RestaurantItem'

class RestaurantsTable extends React.Component {

  render() {
    const restaurants = this.props.restaurants.map( (r, i)=> <RestaurantItem key={i} index={i} restaurant={r} openInfoWindow={this.props.openInfoWindow}/>)
    return(
      <div>
        {this.props.restaurants.length > 0 ? <Feed id="restaurant-feed"> {restaurants} </Feed>  :
          <div id="restaurant-feed"><p>You have not entered in a zipcode</p></div>}
      </div>
    )
  }
}

export default RestaurantsTable;
