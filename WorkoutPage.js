
import React, { useState } from 'react';
import { View, ScrollView, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const WorkoutPage = () => {
  const [muscleFocus, setMuscleFocus] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleSubmission = () => {
    // You can customize this function to handle the submission of selected values
    // For now, we'll just display an alert with the selected values
    console.log("Hi");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Workout Directory</Text>
        </View>
  
        <View style={styles.content}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoText}>SmartFit</Text>
            <Image
              source={require('./assets/FitnessIcon.png')}
              style={styles.logoImage}
            />
          </View>
  
          <Text style={styles.label}>Select Muscle Focus:</Text>
          <Picker
            selectedValue={muscleFocus}
            onValueChange={(itemValue) => setMuscleFocus(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose One" value="Choose One"/>
            <Picker.Item label="Chest" value="Chest" />
            <Picker.Item label="Back" value="Back" />
            <Picker.Item label="Legs" value="Legs" />
        {/* Add more muscle focus options as needed */}
          </Picker>
  
          <Text style={styles.label}>Select Location:</Text>
          <Picker
            selectedValue={location}
            onValueChange={(itemValue) => setLocation(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose One" value="Choose One"/>        
            <Picker.Item label="Gym" value="Gym" />
            <Picker.Item label="Home" value="Home" />
          </Picker>
  
          <Text style={styles.label}>Select Equipment:</Text>
          <Picker
            selectedValue={equipment}
            onValueChange={(itemValue) => setEquipment(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Choose One" value="Choose One"/>
            <Picker.Item label="Dumbbells" value="Dumbbells" />
            <Picker.Item label="Barbell" value="Barbell" />
            <Picker.Item label="Resistance Bands" value="Resistance Bands" />    
          </Picker>
  
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmission}
          >
            <Text style={styles.submitButtonText}>SUBMIT</Text>
          </TouchableOpacity>
          <Text style={styles.excerciseText}>Excercises</Text>
        </View>
      </View>
    </ScrollView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      backgroundColor: "#F2856D",
    },
    header: {
      marginBottom: 20,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
    content: {
      flex: 1,
    },
    logoContainer: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoText: {
      textAlign: "center",
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      textShadowColor: '#F2C49B',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
      //fontFamily: 'SpaceGrotesk',
    },
    logoImage: {
      width: 200,
      height: 200,
      borderRadius: 15,
    },
    label: {
      paddingBottom: 3,
      paddingLeft: 15,
      color: '#F2C49B',
      fontSize: 18,
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    picker: {
      paddingLeft: 15,
      borderRadius: 25,
      padding: 10,
      marginBottom: 20,
      backgroundColor: "#F2C49B",
    },
    submitButton: {
      width: "50%",
      backgroundColor: "#72CEF2",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
      borderWidth: 2,
      borderColor: "#3999d4",
      alignSelf: 'center'
    },
    submitButtonText: {
      textAlign: "center",
      fontSize: 20,
      paddingVertical: 5,
      borderRadius: 25,
      paddingBottom: 3,
      paddingLeft: 15,
      color: '#F2C49B',
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
    exercisesText:{
      fontSize: 20,
      paddingVertical: 5,
      borderRadius: 25,
      paddingBottom: 3,
      paddingLeft: 15,
      color: '#F2C49B',
      fontWeight: 'bold',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
  });
  
  export default WorkoutPage;
