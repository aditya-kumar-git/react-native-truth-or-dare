import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { Provider } from "react-redux"
import myStore from "./SRC/Redux/Store"
import MenuScreen from "./SRC/Screens/MenuScreen"
import GameScreen from "./SRC/Screens/GameScreen"
import BottleScreen from "./SRC/Screens/BottleScreen"
import InfoScreen from "./SRC/Screens/InfoScreen"

export default function App() {
  var Stack = createStackNavigator()
  return (
    <Provider store={myStore}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Menu"
            component={MenuScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Game"
            component={GameScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Bottles"
            component={BottleScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Info"
            component={InfoScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
