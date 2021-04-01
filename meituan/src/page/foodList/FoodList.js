import React, { Component } from 'react'
import GoBack from "../../components/GoBack"
import {foodList} from "../../utils/request"
import {filterPrice} from "../../filters/index"

export default class FoodList extends Component {

  constructor(){
    super()
    this.state = {
      arr:[]
    }
  }
  componentDidMount(){
    foodList().then(res=>{
      this.setState({
        arr:res.data.data
      })
    })
  }



  goFoodDetail(foodId){
    this.props.history.push("/foodDetail?foodId="+foodId)
  }



  render() {
    return (
      <div>
        <GoBack title="外卖列表"></GoBack>
        <ul>
          {
            this.state.arr.map(item=>{
              return(
                <li key={item.foodId} onClick={ ()=>this.goFoodDetail(item.foodId) }>
                  <p>名称：{item.name}</p>
                  <p>价格：{filterPrice(item.price)}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
