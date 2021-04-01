import React, { Component } from 'react'
import "./GoBack.css"
import {withRouter} from "react-router-dom"

class GoBack extends Component {

  back(){
    this.props.history.goBack()
  }
  
  render() {
    return (
      <div>
        <div className="header">
          {/* 第一种思路 */}
          {/* {this.props.title=="登录"?null:<button onClick={ ()=>this.back() }>返回</button>} */}
          {/* 第二种思路 */}
          {this.props.isTrue?null:<button onClick={ ()=>this.back() }>返回</button>}
          
          <h4>{this.props.title}</h4>
        </div>
      </div>
    )
  }
}
export default withRouter(GoBack)
