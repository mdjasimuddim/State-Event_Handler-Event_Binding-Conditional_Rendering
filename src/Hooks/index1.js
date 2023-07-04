import React, { Component } from 'react'

export default class ReactHooks1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increasingHandle = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
  render() {
      const {count} = this.state;
    return (
      <div>
        <h1>Count : {count}</h1>
        <button onClick={this.increasingHandle}>Increase</button>
      </div>
    )
  }
}
