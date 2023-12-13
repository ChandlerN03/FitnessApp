    import React, { useState, useEffect } from 'react';
    import { View, Text, StyleSheet } from 'react-native';
    import axios from 'axios';

    const WorkoutLog = ({ route }) => {
        const { username } = route.params;
        const [workoutLogs, setWorkoutLogs] = useState([]);
      
        useEffect(() => {
          // Fetch workout logs when the component mounts
          axios.get(`http://localhost:3000/workout_logs/${username}`)
            .then(response => {
              setWorkoutLogs(response.data.workoutLogs);
            })
            .catch(error => {
              console.error('Error fetching workout logs:', error);
            });
        }, [username]); // Empty dependency array to run the effect only once on mount

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Workout Log</Text>
        {workoutLogs.map(log => (
            <View key={log.Log_ID}>
            <Text>Date Performed: {log.date_performed}</Text>
            <Text>Exercise: {log.Exercise_name}</Text>
            <Text>Equipment: {log.Equipment}</Text>
            <Text>Reps: {log.Reps}</Text>
            <Text>Sets: {log.Sets}</Text>
            {/* Add other fields as needed */}
            <View style={styles.separator} />
            </View>
        ))}
        </View>
    );
    };

    const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',
        marginVertical: 10,
    },
    });

    export default WorkoutLog;