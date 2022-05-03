import {Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";

export default function InputTask(props) {
    const [task, setTask] = useState("")
    const [modalVisible, setModalVisible] = useState(false);

    const handleAdd = () => {
        props.handleAdd(task)
        setModalVisible(!modalVisible);
        setTask("")
    }

    return (
        <>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput style={styles.inputField} value={task} onChangeText={text => setTask(text)} placeholder={'Write a task'} placeholderTextColor={'#fff'}/>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                                <View style={styles.button}>
                                    <Text style={{color: "#FFF"}}>CLOSE</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => handleAdd()}>
                                <View style={styles.button}>
                                    <Text style={{color: "#FFF"}}>ADD</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Pressable
                style={styles.modalOpen}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{color: "#FFF"}}>ADD</Text>
            </Pressable>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: '#000000C0',
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    inputField: {
        backgroundColor: '#3E3364C0',
        borderRadius: 12,
        color: '#fff',
        height: 50,
        width: 300,
        padding: 10
    },
    button: {
        height: 30,
        width: 50,
        borderRadius: 5,
        backgroundColor: '#c0392b',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        marginVertical: 10,
        width: 300,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    modalOpen: {
        height: 50,
        backgroundColor: '#c0392b',
        alignItems: 'center',
        justifyContent: 'center'
    }
});
