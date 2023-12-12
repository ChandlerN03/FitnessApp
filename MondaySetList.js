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
  
const App = () => { 
    const [task, setTask] = useState(""); 
    const [tasks, setTasks] = useState([]); 
    const [editIndex, setEditIndex] = useState(-1); 
    const [imageSource, setImageSource] = useState(require('/Users/sarahall/SmartFit/assets/images/EmptyWater.png'));
    const [EmptyWater, setEmptyWater] = useState(true);
    //const [showImage, setShowImage] = useState(false);
    const [images, setImages] = useState([]);
    const [caloriesConsumed, setCaloriesConsumed] = useState("");
    const [caloriesConsumeds, setCaloriesConsumeds] = useState([]);
    const [caloriesGoal, setCaloriesGoal] = useState("");
    const [caloriesGoals, setCaloriesGoals] = useState([]);
  
    // Calculate percentage of calories consumed
    const percentage = (caloriesConsumed / caloriesGoal) * 100;
  

  
    const switchImage = () => {
        if (EmptyWater) {
          setImageSource(require('/Users/sarahall/SmartFit/assets/images/EmptyWater.png')); // Change to the second image
        } else {
          setImageSource(require('/Users/sarahall/SmartFit/assets/images/FullWater.png')); // Change back to the first image
        }
        setEmptyWater(!EmptyWater); // Toggle between images
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
              <Text style={styles.minus}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        );
      };


    const handleAddTask = () => { 
        if (task) { 
            if (editIndex !== -1) { 
                // Edit existing task 
                const updatedTasks = [...tasks]; 
                updatedTasks[editIndex] = task; 
                setTasks(updatedTasks); 
                setEditIndex(-1); 
            } else { 
                // Add new task 
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
  
  
    const renderItem = ({ item, index }) => ( 
        <View style={styles.task}> 
            <Text 
                style={styles.itemList}>{item}</Text> 
            <View 
                style={styles.taskButtons}> 
                <TouchableOpacity 
                    onPress={() => handleEditTask(index)}> 
                    <Text 
                        style={styles.editButton}>Edit</Text> 
                </TouchableOpacity> 
                <TouchableOpacity 
                    onPress={() => handleDeleteTask(index)}> 
                    <Text 
                        style={styles.deleteButton}>Delete</Text> 
                </TouchableOpacity> 
            </View> 
        </View> 
    ); 

      
    
    return ( 
        
        <View style={styles.container}> 

        <Text style={styles.title}>Monday</Text> 



        <Text style={styles.heading}>Caliorie Counter</Text> 
            <View style={styles.form}>
            <Text>Consumed: {caloriesConsumed} kcal</Text>
      <Text>Goal: {caloriesGoal} kcal</Text>

      <Svg height="200" width="200">
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#f2f2f2"
          strokeWidth="20"
          fill="transparent"
        />
        <Circle
          cx="100"
          cy="100"
          r="80"
          stroke="#ff6f61"
          strokeWidth="20"
          fill="transparent"
          strokeDasharray={`${percentage}, 100`}
        />
      </Svg>

      <Text style={styles.percentage}>{percentage.toFixed(2)}%</Text>
            </View>



        <Text style={styles.heading}>Water In-take</Text> 
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
        
        <Text style={styles.plus}>
            +
        </Text>
          
      </TouchableOpacity>
        </View>

            <Text style={styles.heading}>Set List</Text> 
            <TextInput 
                style={styles.input} 
                placeholder="Enter work out"
                value={task} 
                name = "mon"
                onChangeText={(text) => setTask(text)} 
            /> 
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={handleAddTask}> 
                <Text style={styles.addButtonText}> 
                    {editIndex !== -1 ? "Update Task" : "Add Task"} 
                </Text> 
            </TouchableOpacity>
            <FlatList 
                data={tasks} 
                renderItem={renderItem} 
                keyExtractor={(item, index) => index.toString()} 
            />  
        </View> 
    ); 
}; 
  
const styles = StyleSheet.create({ 
    container: { 
        flex: 1, 
        padding: 20, 
        marginTop: 20,
    }, 

    form: { 
        alignItems: "center", 
        backgroundColor: '#fff', 
        borderRadius: 20, 
        padding: 35, 
        width: '90%', 
        elevation: 15,
        marginBottom: 20, 
        flexDirection: 'row',
    },
    minus:{
        color: "black",
        marginBottom: -800, 
    },

    plus:{
        color: "red",
    },

    imageContainer:{
        flexDirection: 'row',
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
        borderWidth: 3, 
        borderColor: "#ccc", 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 10, 
        fontSize: 18, 
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
        width:  50,
        height: 50,
        resizeMode: 'contain', // Choose the appropriate resizeMode
      },
}); 
  
export default App;
