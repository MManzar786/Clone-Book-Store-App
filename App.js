import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { BookDetails } from "./src/screens/";
import Tabs from "./navigation/tabs";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={"Home"}
      >
        {/* tabs */}
        <Stack.Screen name="Home" component={Tabs} />
        {/* screens */}
        <Stack.Screen
          name="BookDetails"
          options={{ headerShown: false }}
          component={BookDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
