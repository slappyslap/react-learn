import { StatusBar } from 'expo-status-bar';
import {
  Button,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  FlatList
} from 'react-native';
import {useState} from "react";
import TaskItem from "./components/TaskItem";
import InputTask from "./components/InputTask";
import image from "react-native-web/dist/exports/Image";

export default function App() {

  const backgroundImg = { uri: "https://1.bp.blogspot.com/-pJUPYTSH8L0/YCW5iehHL8I/AAAAAAAAfHc/lchmdokr7JkTph1_DPFLMkh4BevHtz5tACLcBGAsYHQ/s600-rw/02112021-MINIMALIST-JAPANESE-MOBILE-HD.png" }

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
      <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>

      <Text style={styles.heading}>Max to-do</Text>

        <FlatList style={styles.list} data={taskList} keyExtractor={(item, index) => index.toString()} renderItem={({item, index}) => {
          return(<TaskItem key={index} task={item} delete={deleteItem} index={index}/>)
        }}/>

      <InputTask handleAdd={handleAddTask}/>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  list: {
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
