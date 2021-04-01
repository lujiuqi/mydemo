import React, { Component } from 'react'
import store from "../store/index"

export default class A extends Component {

  changeName(name){
    store.dispatcher.dispatch({
      type:"changeName",
      name:name
    })
    this.setState({})
  }
  changeAge(age){
    store.dispatcher.dispatch({
      type:"changeAge",
      age:age
    })
    this.setState({})
  }


  render() {
    return (
      <div className="box">
        <h4>this is A</h4>
        <p>name：{store.state.name}</p>
        <p>age:{store.state.age}</p>

        <button onClick={ ()=>this.changeName('王昭君') }>王昭君</button>
        <button onClick={ ()=>this.changeAge(50) }>50</button>
      </div>
    )
  }
}
