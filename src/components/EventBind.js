import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       message: "Hello"
    }
  }
  ClickHandler = () => {
    this.setState({
      message: "Goodbye!"
    })
  }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.ClickHandler}>Clicker</button>
      </div>
    )
  }
}

export default EventBind
