// 这是一个拦截器的组件，功能就是先验证是否存在token，如果存在token再跳转
import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"

export default class MyRouter extends Component {


  render() {
    let token = sessionStorage.getItem("token")
    return (
      // 在App.js中调用了我这个组件，同时给我传值了，分别是path和component
      <div>
        {/* 判断token，如果为null说明没有登录，如果不为null说明已经登录过了 */}
        {token?<Route path={this.props.path} component={this.props.component}></Route>:<Redirect to="/login"></Redirect>}
      </div>
    )
  }
}
