import React, { Component } from 'react'
import store from "../store/index"

export default class B extends Component {
  
  componentDidMount(){
    store.subscribe(()=>{
      // 只要走了这个函数就说明状态层发生变化了
      this.setState({})
    })
  }

  render() {
    let {name,age} = store.getState()
    return (
      <div className="box">
        <h4>this is B</h4>
        <p>name：{name}</p>
        <p>age:{age}</p>
      </div>
    )
  }
}
