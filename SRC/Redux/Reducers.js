import { combineReducers } from "redux"

var bottleList = () => {
  return [
    require("../../assets/cork.png"),
    require("../../assets/champagne.png"),
    require("../../assets/poision.png"),
    require("../../assets/grape.png"),
    require("../../assets/vodka.png"),
    require("../../assets/nipple.png"),
    require("../../assets/can.png"),
    require("../../assets/testtube.png"),
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
