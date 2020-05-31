import React, { Component } from "react"
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import {
  FontAwesome,
  MaterialCommunityIcons,
  Foundation,
} from "@expo/vector-icons"

export class MenuScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <StatusBar barStyle="dark-content" />

        <SafeAreaView
          style={{
            flex: 1,
            // justifyContent: "center",
            backgroundColor: "#DEE8FD",
          }}
        >
          {/*//! TITLE */}
          <View style={{ marginTop: 50 }}>
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
          {/*//!LOGO */}
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              alignItems: "center",
              marginVertical: 10,
            }}
          >
            <MaterialCommunityIcons
              name="bottle-wine"
              style={{
                fontSize: 64,
                color: "#042241",
                transform: [
                  { rotate: "30deg" },
                  { translateX: 10 },
                  { translateY: -5 },
                ],
              }}
            />
            <FontAwesome
              name="glass"
              style={{
                fontSize: 30,
                color: "#042241",
              }}
            />
            <MaterialCommunityIcons
              name="bottle-wine"
              style={{
                fontSize: 64,
                color: "#042241",
                transform: [
                  { rotate: "-30deg" },
                  { translateX: -10 },
                  { translateY: -5 },
                ],
              }}
            />
          </View>
          {/*//! START GAME */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("Game")
            }}
            style={menuStyle.menuBtns}
          >
            <FontAwesome name="play" style={menuStyle.menuTxtIcons} />
            <Text style={menuStyle.menuBtnTxt}>Start Game</Text>
          </TouchableOpacity>
          {/*//! BOTTLES */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("Bottles")
            }}
            style={menuStyle.menuBtns}
          >
            <MaterialCommunityIcons
              name="bottle-wine"
              style={[menuStyle.menuTxtIcons, { fontSize: 35 }]}
            />
            <Text style={menuStyle.menuBtnTxt}>Bottles</Text>
          </TouchableOpacity>
          {/* //! INFO */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              this.props.navigation.navigate("Info")
            }}
            style={menuStyle.menuBtns}
          >
            <Foundation
              name="info"
              style={[menuStyle.menuTxtIcons, { fontSize: 30 }]}
            />
            <Text style={menuStyle.menuBtnTxt}>Info</Text>
          </TouchableOpacity>
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
  menuBtns: {
    backgroundColor: "white",
    height: 80,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    alignSelf: "center",
    flexDirection: "row",
    marginVertical: 20,
  },
  menuBtnTxt: {
    color: "#042241",
    fontWeight: "bold",
    fontSize: 30,
  },
  menuTxtIcons: {
    fontSize: 24,
    color: "#042241",
    marginRight: 40,
    position: "absolute",
    transform: [{ translateX: -110 }],
  },
})

export default MenuScreen
