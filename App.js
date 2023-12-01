import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { Image,Button } from 'react-native';
import React, { useState, useId } from 'react';


export default function App() {
  const [inputText, setInputText] = useState('');
  //const ageInputId = useId();
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/testicon.jpeg')} // Adjust the path based on your project structure
        style={styles.logo}
      />

      <Text style={styles.title}>SmartFit - Stay Fit Always</Text>

          <View style={{ height: 20 }} //to add white space
          /> 
        
        <View style={styles.rowContainer}>
          <Text style = {{marginRight:10}}>
             Name:
          </Text>

          <TextInput
            placeholder="Enter your text here"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
            style={styles.input}
            />
        </View>

        <View style={styles.rowContainer}>
          <Text style = {{marginRight:29}}>
             Password:
          </Text>

          <TextInput
            placeholder="Enter your texter here"
            onChangeText1={(text) => setInputText(text)}
            value1={inputText}//changed variable name
            style={styles.input}/>
        </View>

        <Button title="LOGIN" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#3498db', // Change the background color to a different color code
    alignItems: 'center',
    justifyContent: 'center',
  },

  rowContainer: {
    flexDirection: 'row', // Arrange children in a row
    alignItems: 'center', // Align items vertically within the row
    marginBottom: 5, // Add margin for separation
  },

  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#3498db',
  },

  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },


  leftAlign: {
    textAlign: 'left', // Add this style to left-align text
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },

  text1: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3498db',
  },
});


