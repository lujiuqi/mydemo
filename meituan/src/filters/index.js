export const filterPrice = (price)=>{
  return  price.toFixed(2)
}

export const filterTime = (time)=>{

  let date = new Date(time)
  let y = date.getFullYear()
  let m = (date.getMonth()+1+"").padStart(2,"0")
  let d = (date.getDate()+"").padStart(2,"0")
  return `${y}-${m}-${d}`
}