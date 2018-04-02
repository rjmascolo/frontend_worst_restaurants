import React from 'react'
import { Feed } from 'semantic-ui-react'


class RestaurantItem extends React.Component {
  render() {
  const {name, building, street, score} = this.props.restaurant

  return (
    <Feed.Event
      id="notification-item"
      onMouseEnter={() => this.props.openInfoWindow(this.props.index)}
      >
      <Feed.Label icon='food'>
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>{score} score</Feed.Date>
        <Feed.Summary id="notification-text" >
          {name}
        </Feed.Summary>
        <Feed.Extra text>
          {`${building} ${street}`}
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
    )
  }
}

export default RestaurantItem
