import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, Alert, StyleSheet } from 'react-native';

function SignUp({navigation}) {
    const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");


    const [fullname, setFullname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [username, setUsername] = useState("");
    const [newPassword, setNewPassword] = useState("");
  
    const onPressSignUp = () => {
      const userDetails = {
        Fullname: fullname,
        Age: age,
        Gender: gender,
        DOB: dob,
        Height: height,
        Weight: weight,
        Email: newEmail,
        PhoneNumber: phoneNumber,
        Username: username,
        Password: newPassword,
      };
      Alert.alert("Sign Up", JSON.stringify(userDetails, null, 2));
      navigation.navigate('SignUp');
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Sign Up</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Fullname"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setFullname(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Age"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setAge(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Gender"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setGender(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Date of Birth"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setDOB(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Height"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setHeight(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Weight"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setWeight(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setNewEmail(text)}
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Phone Number"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setPhoneNumber(text)}
            keyboardType="phone-pad"
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={() => setUsername(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text) => setNewPassword(text)}
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
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      },
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
      marginTop: 10,
      backgroundColor: "#FF1493",
    },
    loginText: {
      color: "white",
    },
  });

  export default SignUp;
