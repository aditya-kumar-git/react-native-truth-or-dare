import React, { Component } from "react"
import {
  Text,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Easing,
  StyleSheet,
} from "react-native"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons"

export class InfoScreen extends Component {
  state = {
    rotateBottle: new Animated.Value(0),
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.rotateBottle, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start()
  }

  render() {
    var rotateThisMuch = this.state.rotateBottle.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "360deg"],
    })
    return (
      <View style={{ flex: 1, backgroundColor: "#DEE8FD" }}>
        <StatusBar barStyle="dark-content" />

        <SafeAreaView style={{ flex: 1 }}>
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
          <Animated.View style={{ transform: [{ rotate: rotateThisMuch }] }}>
            <MaterialCommunityIcons
              name="bottle-wine"
              style={{
                fontSize: 164,
                color: "#042241",
                alignSelf: "center",
              }}
            />
          </Animated.View>
          <View style={{ marginTop: 20 }}>
            <Text style={menuStyle.headerText}>Truth</Text>
            <Text
              style={[
                menuStyle.headerText,
                {
                  marginVertical: 0,
                  fontSize: 20,
                  letterSpacing: 2,
                  transform: [{ translateX: 0 }],
                  fontWeight: "300",
                },
              ]}
            >
              Or
            </Text>
            <Text style={menuStyle.headerText}>Dare</Text>
          </View>
          <Text
            style={{
              fontWeight: "bold",
              color: "#042241",
              marginTop: 20,
              width: "80%",
              alignSelf: "center",
              textAlign: "center",
            }}
          >
            Get to know your friends for real by playing the classic game of
            Truth Or Dare!
          </Text>
        </SafeAreaView>
      </View>
    )
  }
}
var menuStyle = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    color: "#042241",
    alignSelf: "center",
    fontSize: 36,
    marginVertical: 0,
    letterSpacing: 20,
    textTransform: "uppercase",
    textAlign: "center",
    transform: [{ translateX: 10 }],
  },
})
export default InfoScreen
