import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity,  
    StyleSheet, ScrollView } from 'react-native'; 
  
const App = () => { 
    const [age, setAge] = useState(''); 
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState(''); 
    const [gender, setGender] = useState(''); 
    const [bmiResult, setBmiResult] = useState(null); 
  
    const validateForm = () => { 
        if (!age || !height || !weight || !gender) { 
            alert('All fields are required!'); 
        } else { 
            countBmi(); 
        } 
    }; 
  
  
    
    return ( 
        <ScrollView>
        <View style={styles.container}> 
            <View style={styles.circles}>
                <Text>M</Text>
            </View>
            <View style={styles.circles}>
                <Text>T</Text>
            </View>
            <View style={styles.circles}>
                <Text>W</Text>
            </View>
            <View style={styles.circles}>
                <Text>T</Text>
            </View>
            <View style={styles.circles}>
                <Text>F</Text>
            </View>
            <View style={styles.circles}>
                <Text>S</Text>
            </View>
            <View style={styles.circles}>
                <Text>S</Text>
            </View>
        </View> 
        </ScrollView>
    ); 
}; 
  

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        borderRadius: 10, 
        backgroundColor: '#eef2f3', 
        //alignItems: 'center', 
        justifyContent: 'right', 
    }, 

    circles: { 
        flex: 1, 
        height: 40, 
        borderRadius: 100, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#dbeffe', 
        padding: 10, 
        margin: 10, 
    }, 

    genderText: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#333', 
    }, 
    submitButton: { 
        backgroundColor: '#2596be', 
        borderRadius: 10, 
        height: 50, 
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    submitButtonText: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#fff', 
    }
}); 
  
export default App;