import React, { useState } from "react";
import Svg, { Circle } from 'react-native-svg';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [imageSource, setImageSource] = useState(
    require('./assets/EmptyWater.png')
  );
  const [EmptyWater, setEmptyWater] = useState(true);
  const [food, setFood] = useState("");
  const [foodIntake, setFoodIntake] = useState([]);
  const [images, setImages] = useState([]);
  const [caloriesConsumed, setCaloriesConsumed] = useState(1500);
  const [caloriesGoal, setCaloriesGoal] = useState(2000);
  const [newConsumed, setNewConsumed] = useState('');
  const [newGoal, setNewGoal] = useState('');
  const [journalEntry, setJournalEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);

  // Calculate percentage of calories consumed
  const percentage = (caloriesConsumed / caloriesGoal) * 100;

  const handleSetConsumed = () => {
    if (newConsumed !== "") {
      setCaloriesConsumed(parseInt(newConsumed));
      setNewConsumed('');
    }
  };

  const handleSetGoal = () => {
    if (newGoal !== "") {
      setCaloriesGoal(parseInt(newGoal));
      setNewGoal('');
    }
  };

  const switchImage = () => {
    if (EmptyWater) {
      setImageSource(require('./assets/EmptyWater.png'));
    } else {
      setImageSource(require('./assets/FullWater.png'));
    }
    setEmptyWater(!EmptyWater);
  };

  const addImage = () => {
    setImages([...images, {}]);
  };

  const deleteImage = (index) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
  };

  const RenderImage = ({ index }) => {
    return (
      <View style={styles.imageWrapper}>
        <TouchableOpacity onPress={switchImage}>
          <Image source={imageSource} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteImage(index)}
        >
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const handleAddTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updatedTasks = [...tasks];
        updatedTasks[editIndex] = task;
        setTasks(updatedTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleAddFood = () => {
    if (food) {
      setFoodIntake([...foodIntake, food]);
      setFood("");
    }
  };

  const handleEditFood = (index) => {
    const foodToEdit = foodIntake[index];
    setFood(foodToEdit);
    setEditIndex(index);
  };

  const handleDeleteFood = (index) => {
    const updatedFoodIntake = [...foodIntake];
    updatedFoodIntake.splice(index, 1);
    setFoodIntake(updatedFoodIntake);
  };

  const RenderFood = ({ item, index }) => {
    return (
      <View style={styles.foodItem}>
        <Text style={styles.foodText}>{item}</Text>
        <View style={styles.foodButtons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEditFood(index)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteFood(index)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteFood(index)}
        >
          <Text style={styles.minus}>-</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>
      <Text style={styles.itemList}>{item}</Text>
      <View style={styles.taskButtons}>
        <TouchableOpacity onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleAddJournalEntry = () => {
    if (journalEntry) {
      setJournalEntries([...journalEntries, journalEntry]);
      setJournalEntry("");
    }
  };

  const handleEditJournalEntry = (index) => {
    const entryToEdit = journalEntries[index];
    setJournalEntry(entryToEdit);
    setEditIndex(index);
  };

  const handleDeleteJournalEntry = (index) => {
    const updatedEntries = [...journalEntries];
    updatedEntries.splice(index, 1);
    setJournalEntries(updatedEntries);
  };

  const RenderJournalEntry = ({ item, index }) => {
    return (
      <View style={styles.entry}>
        <Text style={styles.entryText}>{item}</Text>
        <View style={styles.entryButtons}>
          <TouchableOpacity
            style={styles.editButton}
            onPress={() => handleEditJournalEntry(index)}
          >
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteJournalEntry(index)}
          >
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Monday</Text>

        <Text style={styles.heading}>Calorie Counter</Text>
        <View style={styles.form}>
          <View style={styles.Cal}>
            <Text>Consumed: {caloriesConsumed} kcal</Text>
            <TextInput
              style={styles.CalInput}
              placeholder="Enter new consumed calories"
              keyboardType="numeric"
              value={newConsumed}
              onChangeText={(text) => setNewConsumed(text)}
            />

            <TouchableOpacity
              style={styles.addButton}
              onPress={handleSetConsumed}
            >
              <Text>Set Consumed </Text>
            </TouchableOpacity>

            <Text>Goal: {caloriesGoal} kcal</Text>
            <TextInput
              style={styles.CalInput}
              placeholder="Enter new goal calories"
              keyboardType="numeric"
              value={newGoal}
              onChangeText={(text) => setNewGoal(text)}
            />
            <TouchableOpacity
              style={styles.button}
              onPress={handleSetGoal}
            >
              <Text style={styles.addButton}>Set Goal</Text>
            </TouchableOpacity>
          </View>

          <Svg height="200" width="200">
            <Circle
              cx="100"
              cy="100"
              r="60"
              stroke="#f2f2f2"
              strokeWidth="18"
              fill="transparent"
            />
            <Circle
              cx="100"
              cy="100"
              r="60"
              stroke="#ff6f61"
              strokeWidth="18"
              fill="transparent"
              strokeDasharray={`${percentage}, 100`}
            />
          </Svg>

          <View>
            <Text style={styles.percentage}>{percentage.toFixed(2)}%</Text>
          </View>
        </View>

        <Text style={styles.heading}>Water Intake</Text>
        <View style={styles.form}>
          <TouchableOpacity onPress={switchImage}>
            <Image source={imageSource} style={styles.image} />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            {images.map((_, index) => (
              <RenderImage key={index} index={index} />
            ))}
          </View>
          <TouchableOpacity onPress={addImage} style={styles.addButton}>
            <Text style={styles.plus}>+</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.heading}>Food Intake</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Enter Food Item"
            value={food}
            onChangeText={(text) => setFood(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddFood}
          >
            <Text style={styles.addButtonText}>Add Food</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={foodIntake}
          renderItem={RenderFood}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.heading}>Set List</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Workout"
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddTask}
        >
          <Text style={styles.addButtonText}>
            {editIndex !== -1 ? "Update Task" : "Add Task"}
          </Text>
        </TouchableOpacity>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
        />

        <Text style={styles.heading}>Journal</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Write your Journal Entry"
            multiline
            value={journalEntry}
            onChangeText={(text) => setJournalEntry(text)}
          />
          <TouchableOpacity
            style={styles.addButton}
            onPress={handleAddJournalEntry}
          >
            <Text style={styles.addButtonText}>Add Entry</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={journalEntries}
          renderItem={RenderJournalEntry}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 0,
    marginBottom: 50,
  },

  form: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    elevation: 15,
    marginBottom: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  minus: {
    color: "black",
    marginBottom: -800,
  },

  plus: {
    color: "red",
  },

  imageContainer: {
    flexDirection: "row",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },

  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 7,
    color: "#F2856D",
  },

  input: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    width: "90%",
    elevation: 15,
    marginBottom: 20,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  CalInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 5,
    padding: 4,
    width: 80,
    height: 40,
    marginBottom: 10,
    borderRadius: 5,
    fontSize: 12,
  },

  addButton: {
    backgroundColor: "#F2856D",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },

  addButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },

  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    width: "90%",
    elevation: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  itemList: {
    fontSize: 19,
  },

  taskButtons: {
    flexDirection: "row",
  },

  editButton: {
    marginRight: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  deleteButton: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain', // Choose the appropriate resizeMode
  },

  percentage: {
    fontSize: 24,
    color: '#ff6f61',
  },

  foodItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,   
    width: "90%",
    elevation: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  foodText: {
    fontSize: 19,
  },
  foodButtons: {
    flexDirection: "row",
  },

  editButtonText: {
    marginRight: 10,
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
  },

  deleteButtonText: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    marginRight: 10,
  },

  entry: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    width: "90%",
    elevation: 15,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  entryText: {
    fontSize: 19,
  },

  entryButtons: {
    flexDirection: "row",
  },
});

export default App;
