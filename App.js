// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>

      {/* Container for buttons arranged vertically */}
      <View style={{ flexDirection: "column", margin: 20 }}>
        {/* Button to navigate to SignUp page */}
        <SignUpButton />
      </View>
    </NavigationContainer>
  );
}

const SignUpButton = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return <Button title="Go to Sign Up" onPress={handleSignUpPress} />;
};

export default App;
