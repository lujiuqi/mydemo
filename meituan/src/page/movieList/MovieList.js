import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import {movieList} from "../../utils/request"
import {filterPrice,filterTime} from "../../filters/index"

export default class MovieList extends Component {

  constructor(){
    super()
    this.state = {
      arr:[]
    }
  }

  componentDidMount(){
    movieList().then(res=>{
      this.setState({
        arr:res.data.data
      })
    })
  }

  goMovieDetail(id){
    this.props.history.push("/movieDetail/"+id)
  }

  render() {
    return (
      <div>
        <GoBack title="电影列表"></GoBack>
        <ul>
          {
            this.state.arr.map(item=>{
              return(
                <li key={item.id} onClick={ ()=>this.goMovieDetail(item.id) }>
                  <p>名称：{item.name}</p>
                  {item.price?<p>价格：{filterPrice(item.price)}</p>:null}
                  {item.time?<p>时间：{filterTime(item.time)}</p>:null}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
