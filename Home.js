import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";

function Home() {
  const navigation = useNavigation();
  const route = useRoute();
  const [memberInfo, setMemberInfo] = useState(null);
  const { username } = route.params;

  useEffect(() => {
    axios.get(`http://localhost:3000/member/${username}`)
      .then(response => {
        setMemberInfo(response.data.memberInfo);
      })
      .catch(error => {
        console.error("Error fetching member info:", error);
      });
  }, [username]);

  const goToBMIpage = () => {
    navigation.navigate("BMIpage");
  };

  return (
    <View style={styles.container}>
      {memberInfo && (
        <View style={styles.profileCard}>
          <Text style={styles.welcomeText}>Welcome, {memberInfo.Full_name}</Text>
          <Text style={styles.cardText}>Full Name: {memberInfo.Full_name}</Text>
          <Text style={styles.cardText}>Age: {memberInfo.age}</Text>
          <Text style={styles.cardText}>Gender: {memberInfo.gender}</Text>
          <Text style={styles.cardText}>DOB: {memberInfo.DOB}</Text>
          <Text style={styles.cardText}>Email: {memberInfo.email}</Text>
          <Text style={styles.cardText}>Phone Number: {memberInfo.phone_number}</Text>
        </View>
      )}
      <TouchableOpacity
        style={styles.button}
        onPress={goToBMIpage}
      >
        <Text style={styles.buttonText}>Go to BMI Calculator</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f3",
    padding: 20,
    position: "relative",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent white background
    borderRadius: 20, // Adjust the border radius for a bigger card
    padding: 30, // Adjust the padding for a bigger card
    elevation: 5,
    position: "absolute",
    top: 20,
    left: 20,
  },
  cardText: {
    fontSize: 18, // Increase the font size for better readability
    marginBottom: 15, // Adjust the margin for better spacing
  },
  button: {
    backgroundColor: "#2596be",
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Home;
