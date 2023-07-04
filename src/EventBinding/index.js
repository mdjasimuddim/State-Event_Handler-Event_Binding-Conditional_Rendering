import React, { Component } from 'react'

export default class EventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    handleBinding = () => {
        this.setState({
            count:this.state.count + 1
        })
    }

  render() {
    return (
      <div>
        <h3>Count:{this.state.count}</h3>
        <button onClick={this.handleBinding.bind(this)}>+</button>
      </div>
    )
  }
}
