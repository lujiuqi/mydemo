import React, { Component } from 'react'
import store from "../store/index"

export default class C extends Component {

  componentDidMount(){
    store.state.on("change",()=>{
      this.setState({})
    })
  }

  render() {
    return (
      <div className="box">
        <h4>this is C</h4>
        <p>name：{store.state.name}</p>
        <p>age:{store.state.age}</p>
      </div>
    )
  }
}
