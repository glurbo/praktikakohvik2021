import React from "react"

export default class IndexPage extends React.Component {
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

  handleSubmit = event => {
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="POST" action="https://getform.io/f/e92cda47-d128-4f1c-b7f0-a69e09fadd73">
        <label>
          Eesnimi
          <br/><input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Perenimi
          <br/><input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <label>
          Email
          <br/><input
            type="text"
            name="emailAddress"
            value={this.state.emailAddress}
            onChange={this.handleInputChange}
          />
        </label><br/>
        <button type="submit">Submit</button>
      </form>
    )
  }
}