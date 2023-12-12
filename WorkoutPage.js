import React, { useState } from 'react';
import { View, Text, Picker, Image, Button } from 'react-native';
import WorkoutPage from './SignUp';

const WorkoutPage = () => {
  const [muscleFocus, setMuscleFocus] = useState('');
  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState('');

  const handleSubmission = () => {
    // You can customize this function to handle the submission of selected values
    // For now, we'll just display an alert with the selected values
    Alert.alert(
      'Selected Values',
      `Muscle Focus: ${muscleFocus}\nLocation: ${location}\nEquipment: ${equipment}`
    );
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#F2856D" }}>
       
       <View style={{ flexDirection: 'coloumn', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ 
        textAlign: "center" ,
        fontSize: 24,
        fontWeight: 'bold', 
        textShadowColor:'#F2C49B', 
        textShadowOffset:{width: 1, height: 1}, 
        textShadowRadius: 2, 
        // fontFamily: 'SpaceGrotesk'
        }}>SmartFit</Text>
        
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 200, height: 200, borderRadius: 15 }}
        />
      </View>
      <Text style={{paddingBottom: 3, 
        paddingLeft: 15, 
        color: '#F2C49B', 
        fontSize: 18,
        fontWeight: 'bold', 
        textShadowColor:'black', 
        textShadowOffset:{width: 1, height: 1}, 
        textShadowRadius: 2
        }}>Select Muscle Focus:</Text>
      <Picker
      
        selectedValue={muscleFocus}
        onValueChange={(itemValue) => setMuscleFocus(itemValue)}
        style={{paddingLeft: 15 ,borderRadius: 25, padding: 10, marginBottom: 20 ,backgroundColor: "#F2C49B"}}

      >
        <Picker.Item label="Choose One" value="Choose One"/>
        <Picker.Item label="Chest" value="Chest" />
        <Picker.Item label="Back" value="Back" />
        <Picker.Item label="Legs" value="Legs" />
        {/* Add more muscle focus options as needed */}
      </Picker>

      <Text style={{paddingBottom: 3, 
        paddingLeft: 15, 
        color: '#F2C49B', 
        fontSize: 18,
        fontWeight: 'bold',
        textShadowColor:'black', 
        textShadowOffset:{width: 1, height: 1}, 
        textShadowRadius: 2
        }}>Select Location:</Text>
      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
        style={{paddingLeft: 15 ,borderRadius: 25, padding: 10, marginBottom: 20 ,backgroundColor: "#F2C49B"}}

      >
        <Picker.Item label="Choose One" value="Choose One"/>        
        <Picker.Item label="Gym" value="Gym" />
        <Picker.Item label="Home" value="Home" />
      </Picker>

      <Text style={{paddingBottom: 3, 
        paddingLeft: 15, 
        color: '#F2C49B', 
        fontSize: 18,
        fontWeight: 'bold', 
        textShadowColor:'black', 
        textShadowOffset:{width: 1, height: 1}, 
        textShadowRadius: 2
        }}>Select Equipment:</Text>
      <Picker
        selectedValue={equipment}
        onValueChange={(itemValue) => setEquipment(itemValue)}
        style={{paddingLeft: 15 ,borderRadius: 25, padding: 10, marginBottom: 20 ,backgroundColor: "#F2C49B"}}
      >
        <Picker.Item label="Choose One" value="Choose One"/>
        <Picker.Item label="Dumbbells" value="Dumbbells" />
        <Picker.Item label="Barbell" value="Barbell" />
        <Picker.Item label="Resistance Bands" value="Resistance Bands" />
        {/* Add more equipment options as needed */}
      </Picker>
      <Button
        title="Submit"
        onPress={handleSubmission}
        style={{paddingVertical: 50, backgroundColor: '#4EA4D9' }}
      />
    </View>
  );
};

export default WorkoutPage;
