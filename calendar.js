import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { createStackNavigator } from '@react-navigation/stack';

// Assume you have an EventPage component in your project
import EventPage from '/Users/sarahall/SmartFit/app/(tabs)/MondaySetList.js'; // Update the path according to your folder structure

const WeeklyAgenda = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('');
  const [eventText, setEventText] = useState('');
  const [data, setData] = useState({
    '2024-01-01': [{ text: 'Log 1' }],
    '2024-01-03': [{ text: 'Log 2' }],
    '2024-01-05': [{ text: 'Log 3' }],
    '2024-01-06': [{ text: 'Log 4' }],
    // Add your initial data here...
  });

  const renderItem = (item) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Log Page', { eventData: item })}>
        <View style={styles.item}>
          <Text>{item.text}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const addEvent = () => {
    if (selectedDay && eventText) {
      const newData = { ...data };
      if (newData[selectedDay]) {
        newData[selectedDay].push({ text: eventText });
      } else {
        newData[selectedDay] = [{ text: eventText }];
      }
      setData(newData);
      setModalVisible(false);
      setEventText('');
    }
  };

  return (
    <View style={styles.container}>
      <Agenda
        items={data}
        renderItem={(item) => renderItem(item)}
        onDayPress={(day) => {
          setSelectedDay(day.dateString);
          setModalVisible(true);
        }}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text>Add Event</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Log</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Log description"
              value={eventText}
              onChangeText={(text) => setEventText(text)}
            />
            <TouchableOpacity style={styles.addButton} onPress={addEvent}>
              <Text>Add Log</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
      backgroundColor: '#f9c2ff',
      marginVertical: 8,
      padding: 20,
      borderRadius: 5,
    },
    modal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 5,
      width: '100%',
      padding: 8,
      marginBottom: 10,
    },
    addButton: {
      backgroundColor: '#ff6f61',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      width: '100%',
      marginBottom: 10,
    },
    closeButton: {
      backgroundColor: '#ccc',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      width: '100%',
    },
  });

// Create a Stack Navigator
const Stack = createStackNavigator();

const WeeklyAgendaScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Weekly Logs" component={WeeklyAgenda} />
      <Stack.Screen name="Log Page" component={EventPage} />
    </Stack.Navigator>
  );
};

export default WeeklyAgendaScreen;
