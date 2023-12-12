// Login.js
import React, { useState } from "react";
import { View, Image, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Axios from 'axios';

function Login({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    })
      .then((response) => {
        if (response.data.length > 0) {
          // Successful login
          alert("Login Success");
          navigation.navigate('Home', { username: username }); // Pass the username to Home
          //navigation.navigate('BMIpage');
          console.log("Login successful");
        } else {
          // Failed login
          alert("Login failed");
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error :", error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('./assets/FitnessIcon.png')} />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Username..."
          onChangeText={(text) => setUsername(text)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password..."
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true} 
        />
      </View>

      <TouchableOpacity style={styles.loginBtn} onPress={login}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width: 200,
    height: 200,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  loginText: {
    color: 'white',
  },
});

export default Login;
