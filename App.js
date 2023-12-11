// App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Button, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Login from "./Login";
import SignUp from "./SignUp";
import Home from "./Home";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: "Login", // Set the header title for the Login screen
            headerRight: () => (
              <View style={{ flexDirection: "row", marginRight: 10 }}>
                {/* Button to navigate to SignUp page */}
                <SignUpButton />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ title: "Sign Up" }} // Set the header title for the SignUp screen
        />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const SignUpButton = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return <Button title="Sign Up" onPress={handleSignUpPress} />;
};

export default App;
