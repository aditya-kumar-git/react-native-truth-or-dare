import React, { Component } from "react"
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
  StatusBar,
} from "react-native"
import { connect } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"
import { AntDesign } from "@expo/vector-icons"

export class GameScreen extends Component {
  //! STATE

  state = {
    summonPage: new Animated.Value(0),
    imageRotation: new Animated.Value(0),
    rotateThisMuch: 0,
    randomRotationNumber: 0,
    roationTime: 3,
    touchTheBottleOrNot: 1,
  }

  //! COMPONENT DID MOUNT

  componentDidMount() {
    Animated.timing(this.state.summonPage, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start()

    if (this.state.roationTime === 3) {
      this.setState({
        roationTime: Math.floor(Math.random() * 3 + 3),
      })
    }

    if (this.state.randomRotationNumber === 0) {
      this.setState({
        randomRotationNumber: Math.floor(Math.random() * 18 + 1) * 20,
      })
    }
  }
  render() {
    var {
      rotateThisMuch,
      randomRotationNumber,
      roationTime,
      touchTheBottleOrNot,
    } = this.state

    var { selectedBottle } = this.props

    //! RESET VALUES AFTER ROTATION

    var resetValues = () => {
      this.setState(
        {
          rotateThisMuch: randomRotationNumber,
        },
        () => {
          this.setState({
            randomRotationNumber: Math.floor(Math.random() * 18 + 1) * 20,
            roationTime: Math.floor(Math.random() * 3 + 3),
            touchTheBottleOrNot: 1,
          })
        }
      )
      this.state.imageRotation.setValue(0)
    }

    //! ROTATING THE BOTTLE

    var rotateTheBottle = () => {
      this.setState({
        touchTheBottleOrNot: 0,
      })
      Animated.timing(this.state.imageRotation, {
        toValue: 1,
        duration: roationTime * 1000,
        easing: Easing.out(Easing.ease),
        useNativeDriver: true,
      }).start(resetValues)
    }

    //! INTERPOLATION

    var rotateBottle = this.state.imageRotation.interpolate({
      inputRange: [0, 1],
      outputRange: [
        `${rotateThisMuch}deg`,
        `${3600 + randomRotationNumber}deg`,
      ],
    })
    var summonOpacity = this.state.summonPage.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    })
    var summonMoveDown = this.state.summonPage.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 0],
    })

    //! RETURN
    return (
      <View style={{ flex: 1, backgroundColor: "#DEE8FD" }}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={{ flex: 1 }}>
          {/*//! BACK BUTTON */}

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <AntDesign
              name="leftcircle"
              style={{
                fontSize: 30,
                color: "#042241",
                marginTop: 10,
                marginLeft: 10,
              }}
            />
          </TouchableOpacity>

          {/*//! HEADER */}

          <Text style={bottleStyles.headerText}>spin the bottle</Text>

          {/*//! BOTTLE */}

          <Animated.View
            style={{
              flex: 1,
              justifyContent: "center",

              opacity: summonOpacity,
              transform: [{ translateY: summonMoveDown }],
            }}
            pointerEvents={touchTheBottleOrNot == 1 ? "auto" : "none"}
          >
            <TouchableOpacity activeOpacity={0.9} onPress={rotateTheBottle}>
              <Animated.Image
                source={this.props.bottleList[this.props.selectedBottle]}
                style={{
                  transform: [{ rotate: rotateBottle }],
                  height: Dimensions.get("screen").width,
                  alignSelf: "center",
                }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </View>
    )
  }
}

var bottleStyles = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    fontWeight: "bold",
    color: "#042241",
    alignSelf: "center",
    fontSize: 36,
    letterSpacing: 20,
    textTransform: "uppercase",
    textAlign: "center",
    transform: [{ translateX: 10 }],
    marginVertical: 10,
  },
})

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(GameScreen)
