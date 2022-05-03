import { StatusBar } from 'expo-status-bar';
import {Button, TextInput, TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {
  const [task, setTask] = useState("")
  const [taskList, setTaskList] = useState([
    "Faire les courses",
    "Aller à la salle de sport 3 fois par semaine",
    "Monter à plus de 5000m d altitude",
    "Acheter mon premier appartement",
    "Perdre 5 kgs",
    "Gagner en productivité",
    "Apprendre un nouveau langage",
    "Faire une mission en freelance",
    "Organiser un meetup autour de la tech",
    "Faire un triathlon",
  ]);

  const deleteItem = function (index) {
    let array = [...taskList]
    array.splice(index, 1)
    setTaskList(array)
  }

  const handleAddTask = function (value) {
    taskList.push(value)
    setTaskList(taskList)
    setTask("")
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Max to-do</Text>

      {
        taskList.map((task, index) => {
          return (
              <View style={styles.customContainer} key={index}>
                <View style={styles.taskContainer}>
                  <Text style={styles.task}>{task}</Text>
                  <Button color='#c0392b' title="X" onPress={() => deleteItem(index)}/>
                </View>
              </View>
          )
        })
      }

      <View style={styles.inputContainer}>
        <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
        <TouchableOpacity onPress={() => handleAddTask(task)}>
          <View style={styles.button}>
            <Text style={{color: "#FFF"}}>ADD</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
  },
  heading: {
    fontSize: 30,
    color: "#FFF",
    marginTop: 50,
    marginBottom: 15,
  },
  customContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginLeft: 10,
    marginVertical: 2
  },
  taskContainer: {
    backgroundColor: '#3E3364',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    minHeight: 50,
  },
  task: {
    color: '#fff',
    width: '99%',
    fontSize: 16,
  },
  delete: {
    marginLeft: 10,
  },
  inputContainer: {
    backgroundColor: '#3E3364',
    marginHorizontal: 10,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    position: 'absolute',
    bottom: 20,
  },
  inputField: {
    color: '#fff',
    height: 50,
    flex: 1,
  },
  button: {
    height: 30,
    width: 50,
    borderRadius: 5,
    backgroundColor: '#c0392b',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
