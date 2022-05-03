import {Button, StyleSheet, Text, View} from "react-native";

export default function TaskItem(props) {

    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.task}>{props.task}</Text>
                <Button color='#c0392b' title="X" onPress={() => props.delete(props.index)}/>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
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
});