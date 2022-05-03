import { StatusBar } from 'expo-status-bar';
import {Button, TextInput, TouchableOpacity, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useState} from "react";
import TaskItem from "./components/TaskItem";
import InputTask from "./components/InputTask";

export default function App() {
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
    setTaskList([...taskList, value])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.heading}>Max to-do</Text>

      <ScrollView style={styles.scrollView}>
        {
          taskList.map((task, index) => {
            return (
                <TaskItem key={index} task={task} delete={deleteItem} index={index}/>
            )
          })
        }
      </ScrollView>

      <InputTask handleAdd={handleAddTask}/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
  },
  scrollView: {
    marginBottom: 75,
  },
  heading: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
});
