import React, { Component } from 'react'
import GoBack from "../../../components/GoBack"

export default class Home extends Component {

  goFood1(){
    this.props.history.push("/foodList")
  }
  goMovie1(){
    this.props.history.push("/movieList")
  }

  goFood2(){
    this.props.history.replace("/foodList")
  }
  goMovie2(){
    this.props.history.replace("/movieList")
  }

  goBack(){
    // this.props.history.go(-1)
    this.props.history.goBack()
  }


  render() {
    return (
      <div>
        <GoBack title="首页"></GoBack>
        <div>
          <button onClick={ ()=>this.goBack() }>返回</button>
        </div>
        <div>
          <h5>===push===</h5>
          <button onClick={ ()=>this.goFood1() }>外卖</button>
          <button onClick={ ()=>this.goMovie1() }>电影</button>
        </div>
        <div>
          <h5>===reaplace===</h5>
          <button onClick={ ()=>this.goFood2() }>外卖</button>
          <button onClick={ ()=>this.goMovie2() }>电影</button>
        </div>
      </div>
    )
  }
}
