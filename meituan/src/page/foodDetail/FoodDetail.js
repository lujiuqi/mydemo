import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import querystring from "querystring"
import {foodDetail} from "../../utils/request"

export default class FoodDetail extends Component {

  constructor(){
    super()
    this.state={
      info:{}
    }
  }

  componentDidMount(){
    // 第一种方法
    // //给我们的数据?foodId=2&aaa=10&bbb=20     希望：{foodId:2,aaa:10,bbb:20}
    // console.log(this.props.location.search);    //?foodId=2&aaa=10&bbb=20
    // let str = this.props.location.search.slice(1)
    // console.log(str); //foodId=2&aaa=10&bbb=20
    // let arr = str.split("&")
    // console.log(arr); //["foodId=2", "aaa=10", "bbb=20"]
    // let obj = {}
    // arr.forEach(item=>{
    //   // itemArr是我们每一项拆分后的结果
    //   let itemArr = item.split("=")
    //   console.log(itemArr);
    //   obj[itemArr[0]] = itemArr[1]
    // })
    // // foodId=2     按照=拆分     拆分后的结果  [foodId,2]      obj.foodId = 2
    // // aaa=10       按照=拆分     拆分后的结果  [aaa,10]        obj.aaa = 10
    // // bbb=20       按照=拆分     拆分后的结果  [bbb,20]        obj.bbb = 20
    // console.log(obj);

    // 第二种方法
    let str = this.props.location.search.slice(1)
    let obj = querystring.parse(str)
    console.log(obj.foodId);
    // 根据foodId请求数据
    foodDetail(obj.foodId).then(res=>{
      this.setState({
        info:res.data.detail
      })
    })
  }

  render() {
    let {info} = this.state
    return (
      <div>
        <GoBack title="外卖详情"></GoBack>
        <p>名称：{info.name}</p>
        <p>价格：{info.price}</p>
      </div>
    )
  }
}
