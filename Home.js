    import React, { useState, useEffect } from "react";
    import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
    import { useNavigation, useRoute } from "@react-navigation/native";
    import axios from "axios";
    import {Video as ExpoVideo}from "expo-av";
    import { StatusBar } from "expo-status-bar";


    function Home() {
    const navigation = useNavigation();
    const route = useRoute();
    const [memberInfo, setMemberInfo] = useState(null);
    const {username} = route.params;
    const videoRef = React.useRef(null)


    useEffect(() => {
        axios.get(`http://localhost:3000/member/${username}`)
        .then(response => {
            console.log("Member Info:", response.data.memberInfo);
            setMemberInfo(response.data.memberInfo);
        })
        .catch(error => {
            console.error("Error fetching member info:", error);
        });
    }, [username]);

    const goToBMIpage = () => {
        navigation.navigate("BMIpage");
    };

    const goToWorkoutLog = () => {
        navigation.navigate('WorkoutLog', { username: username })    
    };

    const goToWorkoutPage = () => {
        navigation.navigate('WorkoutPage', {username: username });
      };
    

    const goToWeeklyAgenda = () => {
        navigation.navigate("Calendar"); // Use the correct screen name here
    };


    const [status, setStatus] = React.useState({})

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
            <Text style={styles.cardText}>Phone Number: {memberInfo.Phone_number}</Text>
            </View>
        )}
        <TouchableOpacity
            style={styles.button}
            onPress={goToBMIpage}
        >
            <Text style={styles.buttonText}>Go to BMI Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToWorkoutLog} style={styles.button1}>
            <Text style={styles.buttonText}>Go to WorkoutLog</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={styles.button2}
            onPress={goToWorkoutPage}
        >
            <Text style={styles.buttonText}>Go to WorkoutPage</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button3} onPress={goToWeeklyAgenda}>
        <Text style={styles.buttonText}>Go to Weekly Agenda</Text>
      </TouchableOpacity>

      

        <ExpoVideo
      ref={videoRef}
      style = {styles.video}
      source={require("./assets/M.mp4")}
      useNativeControls
      resizeMode = "contain"
      isLooping
      onPlaybackStatusUpdate = {setStatus}
      //Added Video code to see if it fits container
    />

        </View>
    );
    }

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F2856D",
        padding: 20,
        position: "relative",
    },
    welcomeText: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
    },
    profileCard: {
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        borderRadius: 70,
        padding: 30,
        position: "absolute",
        top: 20,
        left: 60,
        width: 300,
    },
    cardText: {
        fontSize: 18,
        marginBottom: 6,
    },
    button: {
        backgroundColor: "#2596be",
        padding: 15,
        borderRadius: 5,
        alignSelf: "center",
        position: "absolute",
        bottom: '35%',
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },
    button1: {
        backgroundColor: "#2596be",
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    position: "absolute",
    bottom: "25%",  // AdjusAdjust the left position based on your layout
    },

    button2: {
        backgroundColor: "#2596be",
    padding: 15,
    borderRadius: 5,
    alignSelf: "center",
    position: "absolute",
    bottom: "15%",  // Ad/ Adjust the left position based on your layout
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
    },

    button3: {
        backgroundColor: "#2596be",
        padding: 15,
        borderRadius: 5,
        alignSelf: "center",
        position: "absolute",
        bottom: "5%",
      },

    video: {
        flex: 1,
        position: "absolute",
        top: '40%',  // Adjust the top position based on your layout
        right: '20%', // Adjust the right position based on your layout
        left: '20%',  // Adjust the left position based on your layout
        bottom: '45%', // Adjust the bottom position based on your layout
        alignSelf: "center",
      },

    });


    export default Home;
