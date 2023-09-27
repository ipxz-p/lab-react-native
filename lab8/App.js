import React from "react";
import { StyleSheet } from "react-native";
import MyNavigator from "./navigation/MyNavigator";
import { combineReducers, createStore } from "redux";
import mealsReducer from "./store/reducers/mealsReducer";
import { Provider } from "react-redux";
// import คอมโพเนนต์ที่จำเป็น
const rootReducer = combineReducers({
  meals: mealsReducer,
 });
 const store = createStore(rootReducer);
export default function App() {
  return (
    <Provider store={store}> 
      <MyNavigator /> 
    </Provider>
  )
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
