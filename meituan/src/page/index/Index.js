import React, { Component } from 'react'
import "./Index.css"
import {Switch,Route,Redirect,Link,NavLink} from "react-router-dom"
import Home from "./components/Home"
import Order from "./components/Order"
import Mine from "./components/Mine"

export default class Index extends Component {
  render() {
    return (
      <div>
        {/* 二级路由出口 */}
        <Switch>
          {/* 二级路由规则 */}
          <Route path="/index/home" component={Home}></Route>
          <Route path="/index/order" component={Order}></Route>
          <Route path="/index/mine" component={Mine}></Route>
          {/* 重定向 */}
          <Redirect to="/index/home"></Redirect>
        </Switch>

        {/* <div className="index-footer">
          <Link to="/index/home">首页</Link>
          <Link to="/index/order">订单</Link>
          <Link to="/index/mine">我的</Link>
        </div> */}
        <div className="index-footer">
          <NavLink to="/index/home" activeClassName="active">首页</NavLink>
          <NavLink to="/index/order" activeClassName="active">订单</NavLink>
          <NavLink to="/index/mine" activeClassName="active">我的</NavLink>
        </div>
      </div>
    )
  }
}
