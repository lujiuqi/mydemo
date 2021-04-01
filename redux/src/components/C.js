import React, { Component } from 'react'
import store from "../store/index"

export default class C extends Component {

  componentDidMount(){
    store.subscribe(()=>{
      this.setState({})
    })
  }

  render() {
    let {name,age} = store.getState()
    return (
      <div className="box">
        <h4>this is C</h4>
        <p>name：{name}</p>
        <p>age:{age}</p>
      </div>
    )
  }
}
