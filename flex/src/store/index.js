import {Dispatcher} from "flux"
import Event from "events"

// Event中有emit，现在State类继承Event，State类中也有emit
class State extends Event{
  constructor(){
    super()
    this.name="妲己"
    this.age = 18
  }
}
// 有emit/on    name age
let state = new State()

// Dispatcher 派发器，作用就是派发动作
// 创建派发器
let dispatcher = new Dispatcher()
// 派发具体的动作
// action   {type:changeName,name:'王昭君'}
// action   {type:changeAge,age:50}
dispatcher.register((action)=>{
  switch(action.type){
    case "changeName":
      state.name = action.name
      state.emit("change")
      break
    case "changeAge":
      state.age = action.age
      state.emit("change")
      break
    default:
      return
  }
})


export default {
  state:state,
  dispatcher:dispatcher
}