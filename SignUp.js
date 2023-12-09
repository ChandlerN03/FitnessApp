
// SignUp.js
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function SignUp({ navigation }) {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const onPressSignUp = () => {
    // Implement your actual sign-up logic here
    // For example, you can show an alert with the entered email and password
    Alert.alert("Sign Up", `Email: ${newEmail}\nPassword: ${newPassword}`);
    navigation.navigate('App');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Sign Up</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setNewEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="New Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setNewPassword(password)}
        />
      </View>
      <TouchableOpacity onPress={onPressSignUp} style={styles.signupBtn}>
        <Text style={styles.signupText}>SIGN UP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.loginBtn}>
        <Text style={styles.loginText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  // ... existing styles
  signupBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#4CAF50",
  },
  signupText: {
    color: "white",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    backgroundColor: "#FF1493",
  },
  loginText: {
    color: "white",
  },
});
