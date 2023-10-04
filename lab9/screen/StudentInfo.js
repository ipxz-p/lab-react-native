import React, { useEffect, useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import firebase from "../database/firebase";
import { Button, Input, Image } from "react-native-elements";

const StudentInfo = ({ route, navigation }) => {
    const [studentData, setStudentData] = useState({
        key: "",
        id: "",
        name: "",
        gpa: "",
    });

    useEffect(() => {
        const fetchstudentData = async () => {
            try {
                const subjDoc = await firebase
                    .firestore()
                    .collection("student")
                    .doc(route.params.doc)
                    .get();

                if (subjDoc.exists) {
                    const subj = subjDoc.data();
                    setStudentData({
                        key: subjDoc.id,
                        id: subj.id,
                        name: subj.name,
                        gpa: subj.gpa,
                    });
                } else {
                    console.log("Document does not exist!!");
                }
            } catch (error) {
                console.error("Error fetching student data: ", error);
            }
        };

        fetchstudentData();
    }, []);

    const inputValueUpdate = (val, prop) => {
        setStudentData({
            ...studentData,
            [prop]: val,
        });
    };

    const updatestudent = () => {
        const updateSubjDoc = firebase.firestore().collection("student").doc(studentData.key);
        updateSubjDoc
            .set({
                id: studentData.id,
                name: studentData.name,
                gpa: studentData.gpa,
            })
            .then(() => {
                navigation.navigate("ViewStudents")
            })
            .catch((error) => {
                console.error("Error updating student: ", error);
            });
    };
    const deletestudent = () => {
        const delStudent = firebase.firestore().collection("student").doc(studentData.key);
        delStudent
            .delete()
            .then(() => {
                navigation.navigate("ViewStudents")
            })
            .catch((error) => {
                console.error("Error updating student: ", error);
            });
    };
    return (
        <View style={styles.container}>
            <Input
                placeholder={"student ID"}
                value={studentData.id}
                onChangeText={(val) => inputValueUpdate(val, "id")}
            />
            <Input
                placeholder={"student Name"}
                value={studentData.name}
                onChangeText={(val) => inputValueUpdate(val, "name")}
            />
            <Input
                placeholder={"GPA"}
                value={studentData.gpa}
                onChangeText={(val) => inputValueUpdate(val, "gpa")}
            />
            <Button title="Update student" onPress={updatestudent} />
            <View style={{ marginBottom: 5 }} />
            <Button title="Delete student" onPress={deletestudent} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35,
    },
});

export default StudentInfo;