import React, { Component } from "react"
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native"
import { LinearGradient } from "expo-linear-gradient"
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
          backgroundColor: "#4b35b3",
          flex: 1,
        }}
      >
        <StatusBar barStyle="light-content" />

        <LinearGradient
          colors={["#F07539", "#F05A39"]}
          style={{ flex: 1 }}
          //   start={{ x: 0, y: 0 }}
          //   end={{ x: 1, y: 1 }}
        >
          <SafeAreaView style={{ flex: 1 }}>
            {/*//! TITLE */}

            <View style={{ marginTop: 10 }}>
              <Text style={menuStyle.headerText}>Truth</Text>
              <Text
                style={[
                  menuStyle.headerText,
                  {
                    marginVertical: 0,
                    fontSize: 20,
                    letterSpacing: 2,
                    fontWeight: "normal",
                    transform: [{ translateX: 0 }],
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
                  color: "white",
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
                  color: "white",
                }}
              />
              <MaterialCommunityIcons
                name="bottle-wine"
                style={{
                  fontSize: 64,
                  color: "white",
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
                console.log("START")
              }}
              style={menuStyle.menuBtns}
            >
              <FontAwesome name="play" style={menuStyle.menuTxtIcons} />
              <Text style={menuStyle.menuBtnTxt}>Start Game</Text>
            </TouchableOpacity>

            {/*//! INFO */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                console.log("INFO")
              }}
              style={menuStyle.menuBtns}
            >
              <Foundation
                name="info"
                style={[menuStyle.menuTxtIcons, { fontSize: 30 }]}
              />
              <Text style={menuStyle.menuBtnTxt}>Info</Text>
            </TouchableOpacity>

            {/*//! SETTINGS */}

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => {
                console.log("SETTING")
              }}
              style={menuStyle.menuBtns}
            >
              <MaterialCommunityIcons
                name="settings"
                style={[menuStyle.menuTxtIcons, { fontSize: 30 }]}
              />
              <Text style={menuStyle.menuBtnTxt}>Settings</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </LinearGradient>
      </View>
    )
  }
}

var menuStyle = StyleSheet.create({
  headerText: {
    fontWeight: "bold",
    color: "white",
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
    color: "black",
    fontWeight: "bold",
    fontSize: 30,
  },
  menuTxtIcons: {
    fontSize: 24,
    color: "black",
    marginRight: 40,
    position: "absolute",
    transform: [{ translateX: -110 }],
  },
})

export default MenuScreen
