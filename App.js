import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenOne from "./components/ScreenOne";
import ScreenTwo from "./components/ScreenTwo";
import { useState, useEffect } from "react";
import ScreenThree from "./components/ScreenThree";

const Stack = createNativeStackNavigator();

function App() {
  const [showScreenOne, setShowScreenOne] = useState(true);
  const [showScreenTwo, setShowScreenTwo] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowScreenOne(false);
    }, 3000);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setShowScreenTwo(false);
    }, 20000);
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {showScreenOne ? (
          <Stack.Screen
            name="ScreenOne"
            component={ScreenOne}
            options={{ headerShown: false }}
          />
        ) : null}
        {showScreenTwo ? (
          <Stack.Screen
            name="ScreenTwo"
            component={ScreenTwo}
            options={{ headerShown: false }}
          />
        ) : null}
        <Stack.Screen name="ScreenThree" component={ScreenThree} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
