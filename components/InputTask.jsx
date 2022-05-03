import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export default function InputTask(props) {
    const [task, setTask] = useState("")

    const handleAdd = () => {
        props.handleAdd(task)
        setTask("")
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
            <TouchableOpacity onPress={() => handleAdd()}>
                <View style={styles.button}>
                    <Text style={{color: "#FFF"}}>ADD</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
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
