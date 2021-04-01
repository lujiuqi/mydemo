import React, { Component } from 'react'
import axios from "axios"
import "./Home.css"

export default class Home extends Component {

  constructor(){
    super()
    // 用来渲染列表数据的
    this.state = {
      arr:[]
    }
    // n用来表示到底的次数
    this.n = 0
    // 开关，控制是否允许请求
    this.isTrue = true
  }
  componentDidMount(){
    axios({
      url:"/api/4/stories/latest"
    }).then(res=>{
      // 1、取
      let list = this.state.arr
      // 2、改
      list.push({
        title:"今日新闻",
        list:res.data.stories
      })
      console.log(list);
      // 3、放
      this.setState({
        arr:list
      })
    })

    window.onscroll = ()=>{
      // 窗口高度
      let wh = document.documentElement.clientHeight
      // 卷去高度
      let st = document.documentElement.scrollTop || document.body.scrollTop
      // 实际高度
      let dh = document.documentElement.offsetHeight
      
      if(wh+st+30 >= dh && this.isTrue){
        console.log("请求新数据");
        this.n++
        // 关闭开关
        this.isTrue = false
        let time = this.fn(this.n)
        axios({
          url:"/api/4/stories/before/"+time.reqTime
        }).then(res=>{
          // 第一种方法
          // let list2 = this.state.arr
          // list2.push({
          //   title:time.showTime,
          //   list:res.data.stories
          // })
          // this.setState({
          //   arr:list2
          // })

          // 第二种方法
          this.setState({
            arr:[
              ...this.state.arr,
              {
                title:time.showTime,
                list:res.data.stories
              }
            ]
          },()=>{
            // 设置值了之后，再次打开开关
            this.isTrue = true
          })
        })
      }
    }
  }
  /* 
    n=0     今天的数据02/25
    n=1     展示给用户02/24       后端02/25
    n=2     展示给用户02/23       后端02/24
    展示给用户的格式2021年02月24日        给后端的格式20210225      
  */
  // fn方法是用来初始时间格式的。我的已知条件只有n
  fn(n){
    // 今天的时间戳
    let now = new Date().getTime()

    // 处理后端时间格式
    let reqDate = new Date(now-(n-1)*24*60*60*1000)
    let reqY = reqDate.getFullYear()
    let reqM = (reqDate.getMonth()+1+"").padStart(2,"0")
    let reqD = (reqDate.getDate()+"").padStart(2,"0")
    let reqTime = reqY+reqM+reqD
    /* 
      假设 n = 1   表示要请求昨天的数据     昨天是0224   给后端0225
      假设 n = 2   表示要请求前天的数据     前天是0223   给后端0224
      假设 n = 3   表示要请求大前天的数据    大前天是0222   给后端0223
    */

    // 处理展示给用户的时间格式
    let showDate = new Date(now-n*24*60*60*1000)
    let showY = showDate.getFullYear()
    let showM = (showDate.getMonth()+1+"").padStart(2,"0")
    let showD = (showDate.getDate()+"").padStart(2,"0")
    let showTime = `${showY}年${showM}月${showD}日`
    return{
      reqTime:reqTime,
      showTime:showTime
    }
  }
  // 当组件销毁的时候，把window.onScroll事件清空
  componentWillUnmount(){
    window.onscroll = null
  }



  render() {
    let {arr} = this.state
    return (
      <div>
        <div className="header"></div>
        <div className="banner"></div>
        <div>
          {/* 渲染每一大块（就是所谓的每一天） */}
          {
            arr.map((item,index)=>{
              return(
                <div key={index}>
                  <p className="home-oP">{item.title}</p>
                  <ul>
                    {
                      item.list.map(i=>{
                        return(
                          <li key={i.id} className="home-item">
                            <span>{i.title}</span>
                            <img src={i.images[0]} alt=""/>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}
