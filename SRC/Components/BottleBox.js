import React, { Component } from "react"
import { View, Text, Image, Dimensions, Animated } from "react-native"
import { connect } from "react-redux"
import { setBottle } from "../Redux/Action"
import { TouchableOpacity } from "react-native-gesture-handler"

export class BottleBox extends Component {
  state = {
    summonBottle: new Animated.Value(0),
  }
  componentDidMount() {
    Animated.timing(this.state.summonBottle, {
      toValue: 1,
      duration: 500,
      delay: this.props.index * 100,
      useNativeDriver: true,
    }).start()
  }

  render() {
    var { allData, selectedBottle, index } = this.props
    var { height, width } = Dimensions.get("screen")

    return (
      <Animated.View
        style={{
          opacity: this.state.summonBottle,
          transform: [{ scale: this.state.summonBottle }],
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.props.setBottle(index)
          }}
          style={{
            height: width / 2,
            padding: 20,
            width: width / 2,
            borderWidth: selectedBottle == index ? 3 : 0,
            borderColor: "#042241",
            shadowColor: "#042241",
            shadowOpacity: 0.5,
            shadowOffset: { width: 2, height: 2 },
            // shadowOffset:
          }}
        >
          <Image
            source={allData}
            style={{
              flex: 1,
              alignSelf: "center",
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </Animated.View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = { setBottle: setBottle }

export default connect(mapStateToProps, mapDispatchToProps)(BottleBox)
