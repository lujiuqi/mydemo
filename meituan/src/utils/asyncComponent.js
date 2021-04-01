import React, { Component } from 'react'
// 这个文件就是用来处理懒加载的
export const asyncComponent = (fn)=>{
  // fn = ()=>import("./page/index/Index")
  return class myComponent extends Component{

    constructor(){
      super()
      this.state = {
        // 未来的作用：C就是将来要渲染的那个组件
        C:null
      }
    }

    componentDidMount(){
      fn().then(mod=>{
        this.setState({
          // mod.default可以获取到你要 渲染的那个组件的详情信息
          C:mod.default
        })
      })
    }

    render(){
      let {C} = this.state
      return(
        <div>
          {C?<C {...this.props}></C>:null}
        </div>
      )
    }



  }
}
