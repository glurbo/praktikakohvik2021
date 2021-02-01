import * as React from "react"
import Layout from "../components/common/layout/layout"
import Form from "../components/sections/form"

import React from "react"

export default class FormPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    emailAddress: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <form>
        <label>
          Eesnimi
          <input 
            type="text" 
            name="firstName" 
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Perenimi
          <input 
            type="text" 
            name="lastName" 
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Email
          <input 
            type="text" 
            name="emailAddress" 
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    )
  }
}