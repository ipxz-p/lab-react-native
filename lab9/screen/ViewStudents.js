import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import firebase from "../database/firebase";
import { ListItem } from "react-native-elements";
const ViewStudents = ({navigation}) => {
    const studentjCollection = firebase.firestore().collection("student");

    const [studentList, setStudentList] = useState([]);

    const getCollection = (querySnapshot) => {
        const allData = [];
        querySnapshot.forEach((res) => {
            const { id, name, gpa } = res.data();
            allData.push({
                key: res.id,
                id,
                name,
                gpa,
            });
        });
        setStudentList(allData);
    };

    useEffect(() => {
        const unsubscribe = studentjCollection.onSnapshot(getCollection);
        return () => {
            unsubscribe();
        };
    }, []);
    return (
        <ScrollView>
            {studentList.map((item, i) => {
                return (
                    <ListItem key={i} bottomDivider onPress={()=>{
                        navigation.navigate("StudentInfo",  { doc: item.key })
                    }}>
                        <ListItem.Content>
                            <ListItem.Title>{item.id}</ListItem.Title>
                            <ListItem.Subtitle>{item.name}</ListItem.Subtitle>
                            <ListItem.Subtitle>{item.gpa}</ListItem.Subtitle>
                        </ListItem.Content>
                        <ListItem.Chevron />
                    </ListItem>
                );
            })}
        </ScrollView>
    );
}

export default ViewStudents;
