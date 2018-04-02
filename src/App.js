import React, { Component } from 'react';
import './App.css';
import ZipcodeForm from './forms/ZipcodeForm'
import RestaurantsTable from './containers/RestaurantsTable'
import RestaurantsMap from './containers/RestaurantsMap'

class App extends Component {

  state = {
    restaurants: [],
    infoWindowOpen: ''
  }

  enterZipcode = (zipcode) => {
    const URL = `https://backend-worst-restaurants.herokuapp.com/worst-restaurants?zipcode=${zipcode}`
    // const URL = `http://localhost:3000/worst-restaurants?zipcode=${zipcode}`
    fetch(URL).then(res => res.json()).then(inspections => {
      const newRestaurants = inspections.map( i => {
        return Object.assign(i.restaurant, {score: i.score})
      })

      this.setState({restaurants: newRestaurants})
    })
  }

  openInfoWindow = (data) => {
    this.setState({infoWindowOpen:data})
  }

  render() {
    return (
      <div className="App">
        <h1>Worst Restaurants In Your Neighborhood</h1>
        <p className="header-detail">Based on the restaurants with the highest health inspection score (high scores are bad)</p>
        <div>
          <div className="main-grid">
            <div>
              <ZipcodeForm enterZipcode={this.enterZipcode} />
              <RestaurantsTable restaurants={this.state.restaurants} openInfoWindow={this.openInfoWindow} />
            </div>
            <RestaurantsMap
              restaurants={this.state.restaurants}
              infoWindowOpen = {this.state.infoWindowOpen}
              openInfoWindow= {this.openInfoWindow}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
