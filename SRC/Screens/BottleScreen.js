import React, { Component } from "react"
import { View, Text, StatusBar, SafeAreaView } from "react-native"
import { connect } from "react-redux"
import { LinearGradient } from "expo-linear-gradient"
import { FlatList, TouchableOpacity } from "react-native-gesture-handler"
import BottleBox from "../Components/BottleBox"
import { AntDesign } from "@expo/vector-icons"

export class BottleScreen extends Component {
  render() {
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

          {/*//! TITLE */}

          <Text
            style={{
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
            }}
          >
            Select your bottle
          </Text>

          {/*//! BOTTLES */}

          <View
            style={{
              flex: 1,
            }}
          >
            <FlatList
              data={this.props.bottleList}
              keyExtractor={(x, y) => {
                return "Bottle-Key-" + y
              }}
              renderItem={({ item, index }) => {
                return <BottleBox allData={item} index={index} />
              }}
              numColumns={2}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </SafeAreaView>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(BottleScreen)
