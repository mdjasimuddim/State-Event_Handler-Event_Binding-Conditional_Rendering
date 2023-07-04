import React, { Component } from 'react'

export default class EventHandler extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         changedValue:''
      }
    }
    handleClick = () => {
        console.log('i haved clicked here')
    }
    handleChange = (e) =>{
        this.setState({
            changedValue:e.target.value,
        }, () => {
            console.log(this.state.changedValue);
        })
        // console.log(this.state.changedValue);
    }
  render() {
    return (
      <div>
        {/* <button onClick={this.handleClick}>click here</button> */}
        <input type='text' onChange={this.handleChange}/>
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
