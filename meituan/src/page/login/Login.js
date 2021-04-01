import React, { Component } from 'react'
import {Link} from "react-router-dom"
import GoBack from "../../components/GoBack"
import {login} from "../../utils/request"
export default class Login extends Component {

  constructor(){
    super()
    this.state={
      user:{
        name:"",
        pass:""
      }
    }
  }
  changeUser(e,key){
    this.setState({
      user:{
        ...this.state.user,
        [key]:e.target.value
      }
    })
  }

  submit(){
    login(this.state.user).then(res=>{
      if(res.data.isok){
        // 存登录的状态
        sessionStorage.setItem("token",1)
        this.props.history.push("/index/home")
      }else{
        alert(res.data.info)
      }
    })
  }

  render() {
    let {user} = this.state
    return (
      <div>
        <GoBack title="登录" isTrue></GoBack>
        <div>
          账号：<input type="text" value={user.name} onChange={ (e)=>this.changeUser(e,'name') }/>
        </div>
        <div>
          密码：<input type="text" value={user.pass} onChange={ (e)=>this.changeUser(e,'pass') }/>
        </div>
        <div>
          <button onClick={ ()=>this.submit() }>登录</button>
        </div>
      </div>
    )
  }
}
