  import React, { useState } from 'react';
  import { SafeAreaView,View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native';
  import RNPickerSelect from 'react-native-picker-select';
  import axios from 'axios';
  import { useNavigation } from "@react-navigation/native";


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
  const ExerciseList = ({ exercises, toggleVariable}) => {

    return (
      <View>
        {exercises.map((exercise) => (
          <View key={exercise.id} style={[styles.exerciseItem, { backgroundColor: exercise.selected ? 'green' : 'white' }]}>
            <TouchableOpacity onPress={() => toggleVariable(exercise.id)}>
              <Text style={{ fontWeight: 'bold' }}>{exercise.name}</Text>  
              <Text>{exercise.description}</Text>
              <Text>{`${exercise.sets} sets of ${exercise.reps} reps`}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    );
  };
    

  const WorkoutPage = ({ route }) => {
    const { username } = route.params;
    const initalExercises = [
    /*{ name: 'One-arm dumbbell row', description: "pulling a dumbbell towards your hip while supporting yourself on a bench, targeting the upper back and engaging the core.",
      muscle: "Back", equip: "Dumbbells", reps: 10, sets: 3, id: 1 },*/
    { name: "Goblet Squat", description: "The goblet squat is a lower body exercise in which you hold a single dumbbell or kettlebell close to your chest, perform a squat by lowering your body, and then return to the starting position, effectively targeting the muscles of the legs, particularly the quads, hamstrings, and glutes.",
      muscle: "Legs", equip: "Dumbbells", reps: 14, sets: 3, id: 2, selected: false,},
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
    const [date,setdate] = useState('');

    const resetExercises = () => {
      setExercises(initalExercises);

      setSelectedMuscle(null);
      setSelectedEquipment(null);
      setdate(null);
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
    const[exercisename, equipment, sets, reps, date_performed] = useState(''); //temporary variable

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
        return true;

    }

    const addExercise = async () => {

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

      for (let i = 0; i < userRequestedExercises.length; i++) {
        const exercises = userRequestedExercises[i];

        // Make an API call to add the exercise to the SQL table
        try {
          const response = await axios.post('http://localhost:3000/addExerciseToSQL', {
            username, 
            Exercise_name: exercises.name,
            Equipment: exercises.equip,
            Reps: exercises.reps,
            Sets: exercises.sets,
            date_performed: exercises.date,
          });
          
          console.log('Exercise added to SQL:', response.data);
        } catch (error) {
          console.error('Error adding exercise to SQL:', error);
          // Handle the error as needed
        }
      }
      alert('Success', 'Exercises added successfully!', [
        { text: 'OK', onPress: () => navigation.navigate('Home') },
      ]);
    };

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

          </View>
        
          <Text>Select Muscle:</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedMuscle(value)}
            items={[
              { label: 'Back', value: 'Back' },
              { label: 'Legs', value: 'Legs' },
              { label: 'Glutes', value: 'Glutes' },
              // Add more muscle groups as needed
            ]}
          />
        </View>

        <View style={styles.pickerContainer}>
          <Text>Select Equipment:</Text>
          <RNPickerSelect
            onValueChange={(value) => setSelectedEquipment(value)}
            items={[
              { label: 'Dumbbells', value: 'Dumbbells' },
              { label: 'No Equipment', value: 'None' },
              // Add more equipment options as needed
            ]}
          />
        </View>
        <Text>Exercises</Text>
        <ExerciseList exercises={filteredExercises} toggleVariable={toggleVariable}/>
        <TextInput
              style={styles.TextInput}
              placeholder="Date of Exercise: 12/20/23"
              placeholderTextColor="#D3D3D3"
              onChangeText={(text) => setdate(text)}
              keyboardType="numeric"
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
    },
    header: {
      marginBottom: 20
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff'
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

    resetButton: {
      marginTop: 20,
      padding: 10,
      backgroundColor: 'gray',
      borderRadius: 5,
      alignItems: 'center',
    },
    pickerContainer: {
      marginBottom: 20,
    },
    exerciseItem: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
    },
  });

  export default WorkoutPage;

  /*for (let i=0; i<userRequestedExercises.length; i++){
        exercisename = userRequestedExercises[i].name;
        equipment = userRequestedExercises[i].equipment;
        sets = userRequestedExercises[i].sets;
        reps = userRequestedExercises[i].reps;
        date_performed = userRequestedExercises[i].date;
      }*/
