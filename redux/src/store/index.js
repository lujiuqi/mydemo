import {createStore} from "redux"

// 3、定义初始数据
let initState = {
  name:"妲己",
  age:18
}

// 2、定义函数，注册动作，触发动作
// state：上一次的数据，对于第一次来说没有初始数据
// action：{type:"changeName",name:"王昭君"}
function fn(state = initState,action){
  switch(action.type){
    case "changeName":
      state.name = action.name
      return state
     case "changeAge":
       state.age = action.age
       return state
     default:
       return state
  }
}

// 1、创建仓库
let store = new createStore(fn)

// 4、导出仓库
export default store