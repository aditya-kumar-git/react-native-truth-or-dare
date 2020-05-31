import { combineReducers } from "redux"

var bottleList = () => {
  return [
    "https://cdn.pixabay.com/photo/2015/01/19/22/31/champagne-604968_960_720.png",
    "https://storage.needpix.com/rsynced_images/cork-149625_1280.png",

    "https://i.dlpng.com/static/png/16603_preview.png",
    "https://cdn.pixabay.com/photo/2016/03/31/23/19/baby-1297536_960_720.png",
    "https://storage.needpix.com/rsynced_images/bottle-1708751_1280.png",
    "https://cdn.pixabay.com/photo/2018/08/01/22/45/graphic-3578420_960_720.png",
    "https://lh3.googleusercontent.com/proxy/vpwy-Gv93RV32phb_wt4JESc-lt_gXm5Xde8QYbCt2tKRUYs7lRUJGL_DaP6n_PT3cY-CEkjCuT1JYgv4XwvQtnLHhgTyNycsv6a8NOvt3OGlYx7Qg9SJKbqXg6S3tBSSvgPg9xUqcBwGNaUSq5l1LN5",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Spray_can_green.svg/512px-Spray_can_green.svg.png",
  ]
}

var selectedBottle = (iniState = 0, action) => {
  switch (action.type) {
    case "SELECT":
      return action.payload

    default:
      return iniState
  }
}

var allReducers = combineReducers({
  bottleList: bottleList,
  selectedBottle: selectedBottle,
})

export default allReducers
