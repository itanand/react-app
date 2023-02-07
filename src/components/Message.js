import React, { Component } from 'react'

class Message extends Component {

    constructor(){
        super()
            this.satate={
                message: 'Welcome Visitor'
            }
        }

  render() {
    return (
      <h1>Hi, {this.state.message}</h1>
    )
  }
}

export default Message