import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const handleSignUpPress = () => {
    //fix
  };

  return (
    <View>
      <Text>Home Page</Text>

      {/* Add any content or features specific to your home page here */}

      {/* Example button to navigate to SignUp page */}
      
    </View>
  );
};

export default Home;