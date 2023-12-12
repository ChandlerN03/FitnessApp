import React, { useState } from 'react';
import { View, Text, Picker, Image, Button } from 'react-native';

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
    <View style={{ flex: 1, padding: 20 }}>
       
       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#D3D3D3' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SmartFit</Text>
        
        <Image
          source={require('./assets/logo.png')}
          style={{ width: 200, height: 200, borderRadius: 15 }}
        />
      </View>
      <Text>Select Muscle Focus:</Text>
      <Picker
      
        selectedValue={muscleFocus}
        onValueChange={(itemValue) => setMuscleFocus(itemValue)}
        style={{padding: 10, marginBottom: 20}}

      >
        <Picker.Item label="Choose One" value="Choose One"/>
        <Picker.Item label="Chest" value="Chest" />
        <Picker.Item label="Back" value="Back" />
        <Picker.Item label="Legs" value="Legs" />
        {/* Add more muscle focus options as needed */}
      </Picker>

      <Text>Select Location:</Text>
      <Picker
        selectedValue={location}
        onValueChange={(itemValue) => setLocation(itemValue)}
        style={{padding: 10, marginBottom: 20}}

      >
        <Picker.Item label="Choose One" value="Choose One"/>        
        <Picker.Item label="Gym" value="Gym" />
        <Picker.Item label="Home" value="Home" />
      </Picker>

      <Text>Select Equipment:</Text>
      <Picker
        selectedValue={equipment}
        onValueChange={(itemValue) => setEquipment(itemValue)}
        style={{padding: 10, marginBottom: 20}}
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
        style={{paddingVertical: 50 }}
      />
    </View>
  );
};

export default WorkoutPage;
