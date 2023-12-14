import React, { useState } from 'react';
import { SafeAreaView,View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import BouncyCheckbox from "react-native-bouncy-checkbox";

/*
<BouncyCheckbox
              size={20}
              fillColor="green"
              unfillColor="white"
              iconStyle={{ borderColor: 'green' }}
              isChecked={exercise.selected}
              onPress={() => toggleVariable(exercise.id)}
            />
*/
const ExerciseList = ({ exercises, toggleVariable }) => {
  return (
    <View>
      {exercises.map((exercise) => (
        <View key={exercise.id} style={[styles.exerciseItem, { backgroundColor: exercise.selected ? '#a64f3c' : '#F2C49B' }]}>
          <TouchableOpacity onPress={() => toggleVariable(exercise.id)}>
            <Text style={{ fontWeight: 'bold',
                            paddingBottom: 3,
    
                            color: '#F2856D',
                            fontSize: 18,
                            fontWeight: 'bold',
                            textShadowColor: 'black',
                            textShadowOffset: { width: 1, height: 1 },
                            textShadowRadius: 2,
                         }}>{exercise.name}</Text>  
            <Text>{exercise.description}</Text>
            <Text>{`${exercise.sets} sets of ${exercise.reps} reps`}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};
  

const WorkoutPage = () => {
  const initalExercises = [
  /*{ name: 'One-arm dumbbell row', description: "pulling a dumbbell towards your hip while supporting yourself on a bench, targeting the upper back and engaging the core.",
    muscle: "Back", equip: "Dumbbells", reps: 10, sets: 3, id: 1 },*/
  { name: "Goblet Squat", description: "The goblet squat is a lower body exercise in which you hold a single dumbbell or kettlebell close to your chest, perform a squat by lowering your body, and then return to the starting position, effectively targeting the muscles of the legs, particularly the quads, hamstrings, and glutes.",
    muscle: "Legs", equip: "Dumbbells", reps: 14, sets: 3, id: 2, selected: false},
  { name: "Renegade Row", description: "The renegade row is a challenging exercise involving a plank position while alternating rows with dumbbells, effectively engaging the core and working the muscles of the upper back and arms.",
    muscle: "Back", equip: "Dumbbells", reps: 3, sets: 8, id: 1 , selected: false},
  { name: "Dumbbell Pullover", description: "is a strength-training exercise where you lie on a bench, holding a dumbbell with both hands above your chest, and then lower the weight backward in a controlled motion, primarily targeting the muscles of the upper back, chest, and lats.",
    muscle: "Back", equip: "Dumbbells",reps: 10,sets: 3 ,id:3, selected: false}  ,
  { name:"Band Bent-Over Row",description: "a resistance band exercise where you pull the band towards your lower chest while maintaining a bent-over position, effectively targeting the upper back muscles.",
    muscle: "Back", equip: "Resistance Bands",reps: 14,sets: 3 ,id:4, selected: false}  ,
  { name: "One-arm dumbbell row", description: "pulling a dumbbell towards your hip while supporting yourself on a bench, targeting the upper back and engaging the core."
  ,muscle: "Back", equip: "Dumbbells",reps: 10, sets: 3,id: 5,selected: false},
  {name:"Hip Thrust",description: "The dumbbell hip thrust is a lower body exercise where you sit on the ground with your upper back against a bench, place a dumbbell over your hips, and then lift your hips toward the ceiling, targeting and strengthening the glutes and hamstrings",
  muscle: "glutes",equip: "dumbbell",reps: 11,sets:3, id: 6,selected: false}, 
{name: "Dumbbell Bench Press",description: "The dumbbell bench press is a compound exercise that targets the chest, shoulders, and triceps. It is performed by pressing dumbbells from shoulder level to a position straight above the chest.",
    muscle: "Chest", equip: "Dumbbells", reps: 12, sets: 4,id: 7, selected: false},
    { name: "Reverse Lunge", description: "The reverse lunge is a lower body exercise that targets the quadriceps, hamstrings, and glutes. It involves stepping backward with one leg, lowering the body into a lunge position, and then returning to the starting position.", 
    muscle: "Legs", equip: "None", reps: 12, sets: 3, id: 8, selected: false },
    {name: "Squat", description: "The squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and lower back. It involves lowering the body into a sitting position and then standing back up.", 
    muscle: "Legs", equip: "None", reps: 15, sets: 4, id: 9, selected: false }  
  ];
  const [exercises, setExercises] = useState([
    /*{ name: 'One-arm dumbbell row', description: "pulling a dumbbell towards your hip while supporting yourself on a bench, targeting the upper back and engaging the core.",
      muscle: "Back", equip: "Dumbbells", reps: 10, sets: 3, id: 1 ,selected: false},*/
    { name: "Goblet Squat", description: "The goblet squat is a lower body exercise in which you hold a single dumbbell or kettlebell close to your chest, perform a squat by lowering your body, and then return to the starting position, effectively targeting the muscles of the legs, particularly the quads, hamstrings, and glutes.",
      muscle: "Legs", equip: "Dumbbells", reps: 14, sets: 3, id: 2 , selected: false},
    { name: "Renegade Row", description: "The renegade row is a challenging exercise involving a plank position while alternating rows with dumbbells, effectively engaging the core and working the muscles of the upper back and arms.",
      muscle: "Back", equip: "Dumbbells", reps: 3, sets: 8, id: 1 , selected: false},
    { name: "Dumbbell Pullover", description: "is a strength-training exercise where you lie on a bench, holding a dumbbell with both hands above your chest, and then lower the weight backward in a controlled motion, primarily targeting the muscles of the upper back, chest, and lats.",
      muscle: "Back", equip: "Dumbbells",reps: 10,sets: 3 , id: 3,selected: false},    
    {name:"Band Bent-Over Row",description: "a resistance band exercise where you pull the band towards your lower chest while maintaining a bent-over position, effectively targeting the upper back muscles.",
    muscle: "Back", equip: "Resistance Bands",reps: 14,sets: 3 , id: 4,selected: false},  
    {name:"Hip Thrust",description: "The dumbbell hip thrust is a lower body exercise where you sit on the ground with your upper back against a bench, place a dumbbell over your hips, and then lift your hips toward the ceiling, targeting and strengthening the glutes and hamstrings",
      muscle: "Glutes",equip: "Dumbbells",reps: 11,sets:3, id: 6,selected: false}, 
    {name: "Dumbbell Bench Press",description: "The dumbbell bench press is a compound exercise that targets the chest, shoulders, and triceps. It is performed by pressing dumbbells from shoulder level to a position straight above the chest.",
        muscle: "Chest", equip: "Dumbbells", reps: 12, sets: 4,id: 7, selected: false},
        { name: "Reverse Lunge", description: "The reverse lunge is a lower body exercise that targets the quadriceps, hamstrings, and glutes. It involves stepping backward with one leg, lowering the body into a lunge position, and then returning to the starting position.", 
        muscle: "Legs", equip: "None", reps: 12, sets: 3, id: 8, selected: false },
        {name: "Squat", description: "The squat is a fundamental lower body exercise that targets the quadriceps, hamstrings, glutes, and lower back. It involves lowering the body into a sitting position and then standing back up.", 
        muscle: "Legs", equip: "None", reps: 15, sets: 4, id: 9, selected: false },
  ]);
  const [selectedMuscle, setSelectedMuscle] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('');
  const [date,setDate] = useState('');

  const resetExercises = () => {
    setExercises(initalExercises);

    setSelectedMuscle(null);
    setSelectedEquipment(null);
  }
  const toggleVariable = (exerciseId) => {
    setExercises((prevExercises) =>
      prevExercises.map((exercise) =>
        exercise.id === exerciseId ? { ...exercise, selected: !exercise.selected } : exercise
      )
    );
  };

  const [backgroundColor,setBackgroundColor] = useState('white');
  const[toggle,setToggle] = useState(false);

  const filterExercises = (muscle, equipment) => {
    const filteredExercises = exercises.filter((exercise) => (
      (!muscle || exercise.muscle === muscle) &&
      (!equipment || exercise.equip ===equipment)
    ));
    return filteredExercises;
  };

  const userRequestedExercises = [];
  //it searches the exercise objects to see the selected ones and add it to an array
  //array is called unserRequestedExercies
  //i forgot the date
  function isNumber(value) {
    return typeof value === 'number';
  }
  
  const validateDate = () =>{
    let lastNum = 0;
      if(isNumber(parseInt(date.slice(0,2)))){
        let month = parseInt(date.slice(0,2));
        if(month > 12 || month < 1){
          alert("Input a proper Month from 1-12");
          return;
        }
        if(date.slice(2,3) != '/'){
          alert("missing / after the month \n"+"enter in the format mm/dd/yyyy");
          return;
        }
        lastNum = 3;
      }
      else{
        alert("Input a proper Month from 1-12 in the format mm/dd/yyyy");
        return;
      }

      if(isNumber(parseInt(date.slice(lastNum,lastNum+2)))){
        let day = parseInt(date.slice(lastNum,lastNum+2));
        if(day > 31 || day < 1){
          alert("Input a proper day from 1-31 \nIn the format: mm/dd/yyyy");
          return;
        }
        if(date.slice(lastNum+2,lastNum+3) != '/'){
          alert("missing / after the date \n"+"enter in the format mm/dd/yyyy");
          return;
        }
        lastNum = lastNum + 3;
      }
      else{
        alert("Input a proper day in the range 1-31 in the format mm/dd/yyyy");
        return;
      }
      if(isNumber(parseInt(date.slice(lastNum,lastNum+4)))){
        let year = parseInt(date.slice(lastNum,lastNum+4));
        if(year > 2025 || year < 1920){
          alert("Input a proper year from 1920-2025");
          return;
        }
      }
      else{
        alert("Input a proper year in the format mm/dd/yyyy");
        return;
      }
      alert("success");
      return true;

  }

  const addExercise = () =>{ 
    if(date === ''){//catches error that they didnt enter a date
      alert("Please enter a date");
      return;
    }
    if(!validateDate()){
      return;
    }
    for(let i = 0; i < exercises.length;i++){
    
      if(exercises[i].selected === true){
        exercises[i].date = date;
        userRequestedExercises[userRequestedExercises.length] = exercises[i];
      }
    }
  }


  const filteredExercises = filterExercises(selectedMuscle, selectedEquipment);

  return (
    <ScrollView styles={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Workout Directory</Text>
      </View>
      <View style={styles.content}>

        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>SmartFit</Text>
          <Image 
            source={require('./assets/logo.png')}
            style={styles.logoImage}
            />

        </View>
       
        <Text style={styles.label}>
            Select Muscle Focus:
        </Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedMuscle(value)}
          items={[
            { label: 'Back', value: 'Back' },
            { label: 'Legs', value: 'Legs' },
            { label: 'Glutes', value: 'Glutes' },
            // Add more muscle groups as needed
          ]}

          style={{
            inputIOS: styles.RNPickerSelect,
            inputAndroid:styles.RNPickerSelect,
            inputAndroidContainer:styles.RNPickerSelectContainer,
            inputIOSContainer:styles.RNPickerSelectContainer,

          }}
        />
      </View>

      <View style={styles.pickerContainer}>
      <Text style={styles.label}>
            Select Muscle Focus:
        </Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedEquipment(value)}
          items={[
            { label: 'Dumbbells', value: 'Dumbbells' },
            { label: 'No Equipment', value: 'None' },
            // Add more equipment options as needed
          ]}
        />
      </View>
      <Text style={styles.label}>
            Exercises:
        </Text>
      
      <ExerciseList exercises={filteredExercises} toggleVariable={toggleVariable}/>
      <TextInput
            style={styles.TextInput}
            placeholder="Day of Exercise"
            placeholderTextColor="#003f5c"
            onChangeText={(text) => setDOB(text)}
          />
      <TouchableOpacity style={styles.resetButton} onPress={addExercise}>
        <Text>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.resetButton} onPress={resetExercises}>
        <Text>Reset Exercises</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>

      
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#F2856D',
  },
  header: {
    marginBottom: 20
  },
  headerText: {
    paddingBottom: 3,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  content: {
    flex: 1
  },
  logoContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    paddingBottom: 3,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
    align: 'center',
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

  resetButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4EA4D9',
    borderRadius: 10,
    borderWidth: 3,
    alignItems: 'center',
    borderColor: 'black',
  },
  pickerContainer: {
    
    marginBottom: 20,

  },
  exerciseItem: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 10,
    borderRadius: 15,
    marginVertical: 5,
  },

  exerciseName: {
    paddingBottom: 3,
    paddingLeft: 15,
    color: '#F2C49B',
    fontSize: 18,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,

  },

  TextInput:{
    paddingBottom: 3,
    paddingLeft: 15,
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },

});

export default WorkoutPage;