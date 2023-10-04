import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebase";
import { Button, Input, Image } from "react-native-elements";
import { SafeAreaView } from 'react-native-safe-area-context';
const AddStudent = ({navigation}) => {
    const studentjCollection = firebase.firestore().collection("student");
    const [state, setState] = useState({
        id: "",
        name: "",
        gpa: "",
    });

    const inputValueUpdate = (val, prop) => {
        setState({ ...state, [prop]: val });
    };

    const storeStudent = () => {
        studentjCollection
            .add({
                id: state.id,
                name: state.name,
                gpa: state.gpa,
            })
            .then((res) => {
                setState({
                    id: "",
                    name: "",
                    gpa: "",
                });
                navigation.navigate("ViewStudents")
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../assets/IT_Logo.png")}
                style={{ width: 120, height: 100 }}
                containerStyle={{ marginLeft: "auto", marginRight: "auto" }}
            />
            <Input
                placeholder={"Student ID"}
                value={state.id}
                onChangeText={(val) => inputValueUpdate(val, "id")}
            />
            <Input
                placeholder={"Student Name"}
                value={state.name}
                onChangeText={(val) => inputValueUpdate(val, "name")}
            />
            <Input
                placeholder={"GPA"}
                value={state.gpa}
                onChangeText={(val) => inputValueUpdate(val, "gpa")}
            />
            <Button title="Add Student" onPress={storeStudent} />
            <View style={{marginBottom: 5}} />
            <Button  title="View Student" onPress={()=>navigation.navigate("ViewStudents")} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
});

export default AddStudent;