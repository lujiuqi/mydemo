import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import {movieDetail} from "../../utils/request"

export default class MovieDetail extends Component {

  constructor(){
    super()
    this.state={
      info:{}
    }
  }

  componentDidMount(){
    console.log(this.props.match.params.movieId);
    // 接下来根据movieId请求数据
    movieDetail(this.props.match.params.movieId).then(res=>{
      this.setState({
        info:res.data.detail
      })
    })
  }



  render() {
    let {info} = this.state
    return (
      <div>
        <GoBack title="电影详情"></GoBack>
        <p>名称：{info.name}</p>
        <p>价格：{info.price}</p>
        <p>时间：{info.time}</p>
        <img src={info.img} alt=""/>
      </div>
    )
  }
}
