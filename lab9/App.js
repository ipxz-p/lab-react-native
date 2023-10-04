import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AddStudent from './screen/AddStudent';
import ViewStudents from './screen/ViewStudents';
import StudentInfo from './screen/StudentInfo';
export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: { 
          backgroundColor: "dodgerblue",
        },
      }} initialRouteName='AddStudent'>
        <Stack.Screen
          name="AddStudent"
          component={AddStudent}
          options={({ route }) => ({
            
          })}
        />
        <Stack.Screen
          name="ViewStudents"
          component={ViewStudents}
          options={({ route }) => ({
            title: "Student List"
          })}
        />
        <Stack.Screen
          name="StudentInfo"
          component={StudentInfo}
          options={({ route }) => ({
            title: "Student Info"
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});