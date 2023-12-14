// App.js 
import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity,  
    StyleSheet, ScrollView, Picker } from 'react-native'; 
  
const BMIpage = () => { 
    const [age, setAge] = useState(''); 
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState(''); 
    const [gender, setGender] = useState(''); 
    const [bmiResult, setBmiResult] = useState(null); 
    const [fitnessLevel, setFitnessLevel] = useState('Choose Level')// default value
  
    const validateForm = () => { 
        if (!age || !height || !weight || !gender) { 
            alert('All fields are required!'); 
        } else { 
            countBmi(); 
        } 
    }; 
  
    const countBmi = () => { 
        const bmi = (parseFloat(weight) /  
            ((parseFloat(height) / 100) ** 2)).toFixed(2); 
  
        let result = ''; 
        if (bmi < 18.5) { 
            result = 'Underweight'; 
        } else if (bmi >= 18.5 && bmi <= 24.9) { 
            result = 'Healthy'; 
        } else if (bmi >= 25 && bmi <= 29.9) { 
            result = 'Overweight'; 
        } else if (bmi >= 30 && bmi <= 34.9) { 
            result = 'Obese'; 
        } else if (bmi >= 35) { 
            result = 'Extremely obese'; 
        } 
  
        // Set the BMI result 
        setBmiResult({ bmi, result }); 
  
        // Reset the form 
        setAge(''); 
        setHeight(''); 
        setWeight(''); 
        setGender(''); 
        setFitnessLevel('Choose Level');
    }; 
  
    
    return ( 
        <ScrollView>
        <View style={styles.container}> 
            <Text style={styles.header}> 
                BMI Calculator 
            </Text> 
            <View style={styles.form}> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Age 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your age"
                        onChangeText={setAge} 
                        value={age} 
                        keyboardType="numeric"
                        name="age"
                    /> 
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Height (cm) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your height"
                        onChangeText={setHeight}
                        input type="number" 
                        value={height} 
                        keyboardType="numeric"
                        maxlength="2"
                    /> 
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Weight (kg) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter your weight"
                        onChangeText={setWeight} 
                        value={weight} 
                        keyboardType="numeric"
                    /> 
                </View> 
                <View style={styles.genderRow}> 
                    <TouchableOpacity 
                        style={[ 
                            styles.genderButton, 
                            gender === 'male' && styles.selectedGender, 
                        ]} 
                        onPress={() => setGender('male')} 
                    > 
                        <Text style={styles.genderText}> 
                            Male 
                        </Text> 
                    </TouchableOpacity> 
                    <TouchableOpacity 
                        style={[ 
                            styles.genderButton, 
                            gender === 'female' && styles.selectedGender, 
                        ]} 
                        onPress={() => setGender('female')} 
                    > 
                        <Text style={styles.genderText}>Female</Text> 
                    </TouchableOpacity> 
                </View> 
                
                <TouchableOpacity 
                    style={styles.submitButton} 
                    onPress={validateForm} 
                > 
                    <Text style={styles.submitButtonText}> 
                        Calculate BMI 
                    </Text> 
                </TouchableOpacity> 
                {bmiResult && ( 
                    <View style={styles.resultContainer}> 
                        <Text style={styles.resultLabel}> 
                            BMI: 
                        </Text> 
                        <Text style={styles.resultText}> 
                            {bmiResult.bmi} 
                        </Text> 
                        <Text style={styles.resultLabel}> 
                            Result: 
                        </Text> 
                        <Text style={styles.resultText}> 
                            {bmiResult.result} 
                        </Text> 
                    </View> 
                )} 
            </View> 
        </View> 

        <View style={styles.container}> 
            <Text style={styles.header}> 
                Profile Information 
            </Text> 
            <View style={styles.form}> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Fitness level
                    </Text> 
                    <Picker 
                      style={styles.picker}
                      selectedValue={fitnessLevel}
                      onValueChange={(itemValue) => setFitnessLevel(itemValue)}
                    >
                      <Picker.Item label="Choose Level" value="Choose Level" />
                      <Picker.Item label="Beginner" value="Beginner" />
                      <Picker.Item label="Intermediate" value="Intermediate" />
                      <Picker.Item label="Advanced" value="Advanced" />
                    </Picker>
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Height (cm) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput1} 
                        placeholder="Enter your height"
                        onChangeText={setHeight}
                        input type="number" 
                        value={height} 
                        keyboardType="numeric"
                        maxlength="2"
                    /> 
                </View> 
                <View style={styles.inputRow}> 
                    <Text style={styles.label}> 
                        Weight (kg) 
                    </Text> 
                    <TextInput 
                        style={styles.textInput1} 
                        placeholder="Enter your weight"
                        onChangeText={setWeight} 
                        value={weight} 
                        keyboardType="numeric"
                    /> 
                </View> 
                
            
            </View> 
        </View> 



        </ScrollView>
    ); 
}; 
  

const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        backgroundColor: '#eef2f3', 
        alignItems: 'center', 
        justifyContent: 'center', 
    }, 
    header: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        color: '#2596be', 
        marginBottom: 20, 
    }, 
    form: { 
        backgroundColor: '#fff', 
        borderRadius: 40, 
        padding: 40, 
        width: '90%', 
        elevation: 5,
        marginBottom: 20, 
    }, 
    inputRow: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        marginBottom: 20, 
        width: '100',
    }, 
    label: { 
        flex: 1, 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginRight: 10, 
    }, 
    textInput: { 
        flex: 2, 
        height: 40, 
        borderWidth: 1, 
        borderColor: '#ddd', 
        borderRadius: 10, 
        paddingLeft: 10, 
        fontSize: 16, 
    }, 
    genderRow: { 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 20, 
    }, 
    genderButton: { 
        flex: 1, 
        height: 40, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#dbeffe', 
        padding: 10, 
        margin: 10, 
    }, 
    selectedGender: { 
        backgroundColor: '#2596be', 
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
    }, 
    resultContainer: { 
        marginTop: 20, 
    }, 
    resultLabel: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        marginBottom: 5, 
    }, 
    resultText: { 
        fontSize: 16,
    }, 
    textInput1: { 
        flex: 2, 
        height: 40,
        width: 40, 
        borderWidth: 1, 
        borderColor: '#ddd', 
        borderRadius: 10, 
        paddingLeft: 10, 
        fontSize: 16, 
        flexDirection: 'row', 
        alignItems: 'center'
    }, 
    picker: {
      height: 40,
      width: 400,
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 10,
      paddingLeft: 10,
      flexDirection: 'row', 
      alignItems: 'center', 
      flexwrap: 'wrap',
      justifyContent: 'space-between', 
       
    },
}); 
  
export default BMIpage;

