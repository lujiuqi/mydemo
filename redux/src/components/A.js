import React, { Component } from 'react'
import store from "../store/index"

export default class A extends Component {

  componentDidMount(){
    console.log(store);
    // 通过store.getState()可以获取到仓库的数据
    console.log(store.getState());

    // 作用，和刚才的on是一样的，用来监听状态层是否发生变化。只要状态层的数据发生变化了，就一定会走store.subscribe()
    store.subscribe(()=>{
      console.log("我变化了");
      this.setState({})
    })
  }

  changeName(){
    store.dispatch({
      type:"changeName",
      name:"王昭君"
    })
  }
  changeAge(){
    store.dispatch({
      type:"changeAge",
      age:50
    })
  }

  render() {
    let {name,age} = store.getState()
    return (
      <div className="box">
        <h4>this is A</h4>
        <p>name：{name}</p>
        <p>age:{age}</p>
        <button onClick={ ()=>this.changeName() }>王昭君</button>
        <button onClick={ ()=>this.changeAge() }>50</button>
      </div>
    )
  }
}
