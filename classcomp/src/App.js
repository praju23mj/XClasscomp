
import './App.css';


import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={count: 0}
  }

  plus=()=>{
    this.setState((state)=>{
      return {count: state.count+1}
    })
  }

  minus=()=>{
    this.setState((state)=>{
      return {count: state.count-1}
    })
  }





  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.plus}>Increment</button>
        <button onClick={this.minus}>Decrement</button>
      </div>
    )
  }
}

