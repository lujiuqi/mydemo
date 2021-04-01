import React from "react"
import "./assets/css/reset.css"
import {Switch,Route,Redirect} from "react-router-dom"
import MyRouter from "./page/MyRouter"
import {asyncComponent} from "./utils/asyncComponent"

const Login = asyncComponent( ()=>import("./page/login/Login") )
const Index = asyncComponent( ()=>import("./page/index/Index") )
const FoodList = asyncComponent( ()=>import("./page/foodList/FoodList") )
const FoodDetail = asyncComponent( ()=>import("./page/foodDetail/FoodDetail") )
const MovieList = asyncComponent( ()=>import("./page/movieList/MovieList") )
const MovieDetail = asyncComponent( ()=>import("./page/movieDetail/MovieDetail") )


function App() {

  return (
    <div>
      {/* 路由出口 */}
      <Switch>
        {/* 路由规则 */}
        <Route path="/login" component={Login}></Route>
        <MyRouter path="/index" component={Index}></MyRouter>
        <MyRouter path="/foodList" component={FoodList}></MyRouter>
        <MyRouter path="/foodDetail" component={FoodDetail}></MyRouter>
        <MyRouter path="/movieList" component={MovieList}></MyRouter>
        <MyRouter path="/movieDetail/:movieId" component={MovieDetail}></MyRouter>
        {/* 重定向 */}
        <Redirect to="/login"></Redirect>
      </Switch>
    </div>
  );
}

export default App;
