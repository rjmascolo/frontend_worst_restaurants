import React from 'react'
import {Button, Form, Message} from 'semantic-ui-react'
import {NYCzipcodes} from '../data'

class ZipcodeForm extends React.Component {
  state = {
      zipcode: "",
      error: false
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let {zipcode} = this.state
    if(NYCzipcodes.includes(parseInt(zipcode, 10))) {
      this.props.enterZipcode(this.state.zipcode)
      this.setState({zipcode: "", error: false} )

    } else {
      this.setState({error: true})
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <div className="flex">
          <Form.Field>
            <input
              id="form-field"
              placeholder="Enter NYC Zipcode"
              name="zipcode"
              value={this.state.zipcode}
              onChange={this.handleChange}
            />

          </Form.Field>
          <Button type="submit">Submit</Button>
          </div>
        </Form>
        {this.state.error ? <Message negative id="margin"><p>That is not a NYC Zipcode</p></Message>:null}
      </div>
    )
  }
}

export default ZipcodeForm
