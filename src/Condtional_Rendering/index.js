import React, { Component } from 'react'
import HomePage from './homePage'
import LogInPage from './logInPage'

export default class Index extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }
  render() {
    //if else statement
    // if(this.state.isLoggedIn){
    //     return <HomePage />
    // }
    // else{
    //     return <LogInPage />
    // }

    const {isLoggedIn} = this.state;
    //if else statement
    // let element;
    // if(isLoggedIn){
    //     element = <HomePage />
    // }else{
    //     element = <LogInPage />
    // }
    // return(
    //     <div>{element}</div>
    // )
    //ternary operator
    let element;
    element = (isLoggedIn) ? <HomePage /> : <LogInPage />;
    return(
        <div>
            {element}
        </div>
    )
  }
}
