import axios from "axios"
import qs from "qs"

// 请求拦截
axios.interceptors.request.use(config=>{

  return config
})

// 响应拦截
axios.interceptors.response.use(res=>{
  console.log("本次请求的路径是："+res.config.url);

  return res
})

// 登录
export const login = (form)=>{
  return axios({
    url: "/login",
    method:"post",
    data:qs.stringify(form)
  })
}

// 外卖列表
export const foodList = ()=>{
  return axios({
    url:"/foodList",
    method:"get"
  })
}

// 外卖详情
export const foodDetail = (foodId)=>{
  return axios({
    url:"/getFoodDetail",
    method:"get",
    params:{
      foodId:foodId
    }
  })
}

// 电影列表
export const movieList = ()=>{
  return axios({
    url:"/movie",
    method:"get"
  })
}

// 电影详情
export const movieDetail = (id)=>{
  return axios({
    url:"/getMovieDetail",
    method:"get",
    params:{
      id:id
    }
  })
}