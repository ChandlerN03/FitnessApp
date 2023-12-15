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
    const [highlightedButton, setHighlightedButton] = useState(null);
    const [quote, setQuote] = useState('Loading...');
    const [isHovered, setIsHovered] = useState(false);

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


    const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const buttonStyles = [
    styles.button,
    Platform.OS === 'web' && (isHovered ? styles.highlighted : null),
  ];


  const quotesList = [
    "I hated every minute of training, but I said, ‘Don’t quit. Suffer now and live the rest of your life as a champion. – Muhammad Ali",
"We are what we repeatedly do. Excellence then is not an act but a habit. –Aristotele",
"The body achieves what the mind believes. – Napoleon Hill",
"The hard days are the best because that’s when champions are made, so if you push through, you can push through anything. – Dana Vollmer",
"If you don’t find the time, if you don’t do the work, you don’t get the results. – Arnold Schwarzenegger",
"Dead last finish is greater than did not finish, which trumps did not start. — Unknown",
"Push harder than yesterday if you want a different tomorrow. – Vincent Williams Sr.",
"The real workout starts when you want to stop. – Ronnie Coleman",
"Take care of your body. It’s the only place you have to live. — Jim Rohn",
"I’ve failed over and over again in my life and that is why I succeed. – Michael Jordan",
"Once you are exercising regularly, the hardest thing is to stop it. – Erin Gray",
"The secret of getting ahead is getting started.” — Mark Twain",
"Exercise should be regarded as tribute to the heart” – Gene Tunney",
"You’re going to have to let it hurt. Let it suck. The harder you work, the better you will look. Your appearance isn’t parallel to how heavy you lift, it’s parallel to how hard you work.” –Joe Mangianello",
"Most people fail, not because of lack of desire, but, because of lack of commitment.” –Vince Lombardi",
"You miss one hundred percent of the shots you don’t take.” – Wayne Gretzky",
"If something stands between you and your success, move it. Never be denied.” – Dwayne “The Rock” Johnson",
"All progress takes place outside the comfort zone.”– Michael John Bobak",
"Just believe in yourself. Even if you don’t, just pretend that you do and at some point, you will.” – Venus Williams",
  ];
  

  const handleButtonPress = (buttonNumber) => {
    setHighlightedButton(buttonNumber);

  };


  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotesList.length);
      setQuote(quotesList[randomIndex]);
    }, 1000); // in milliseconds

    return () => clearInterval(interval);
  }, []);

        

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

        <View style={styles.form}>
        <Text style={styles.quoteText}>{quote}</Text>
        </View>


         <View style={styles.container1}>    
        <TouchableOpacity
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPress={goToBMIpage}
        >
            <Text style={styles.buttonText}>BMI Calculator</Text>
        </TouchableOpacity>

        <TouchableOpacity 
                onPress={goToWorkoutLog} 
                style={buttonStyles}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
            <Text style={styles.buttonText}>WorkoutLog</Text>
        </TouchableOpacity>
        </View>
                    
        <View style={styles.container1}>
        <TouchableOpacity
            style={buttonStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onPress={goToWorkoutPage}
        >
            <Text style={styles.buttonText}>Workout Page</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={buttonStyles}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onPress={goToWeeklyAgenda}>
        <Text style={styles.buttonText}>Weekly Agenda</Text>
      </TouchableOpacity>
    </View>
      

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
      container1: {
    flexDirection: 'row',
    marginVertical: 20,
  },

  button: {
    backgroundColor: '#143549',
    width: 200,
    height: 200,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    marginHorizontal: 70,

  },
    buttonText: {
        color: "#fff",
        fontSize: 24,
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

    buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 60,
  },

  quoteText: {
    fontSize: 24,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingHorizontal: 20,
    marginBottom: 30,
  },

  highlighted: {
    backgroundColor: '#4cb8c4', 
  },
  form: { 
    backgroundColor: '#fff', 
    borderRadius: 40, 
    padding: 40, 
    paddingTop: 50,
    width: '90%', 
    elevation: 5,
    marginBottom: 20, 
}, 

    });


    export default Home;
