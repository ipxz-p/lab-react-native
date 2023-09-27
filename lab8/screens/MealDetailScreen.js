import React from "react";
import { View, Text, Button, StyleSheet, Image, SafeAreaView } from "react-native";
import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  // เขียนโค้ดเพิ่ม เพื่อดึงข้อมูลเกี่ยวกับเมนูอาหารที่ผู้ใช้เลือกเอาไว้
  const { title, steps, img, duration, complexity, affordability, ingredients } = route.params
  console.log(ingredients);
  return (
    <View style={styles.screen}>
      <Image source={{ uri: img }} style={{ height: 250, width: "100%" }} />
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: "100%", height: 70, alignItems: 'center' }}>
        <Text>{duration}m</Text>
        <Text>{complexity}</Text>
        <Text>{affordability}</Text>
      </View>
      <Text style={{ fontWeight: '700' }}>Ingredients</Text>
      <View style={{textAlign: 'left', width: "90%"}}>
      {
        ingredients.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))
      }
      </View>
      <Text style={{ fontWeight: '700' }}>Step</Text>
      <View style={{textAlign: 'left', width: "90%"}}>
      {
        steps.map((step, index) => (
          <Text key={index}>{step}</Text>
        ))
      }
      </View>
      <Button
        title="Go Back to Categories"
        onPress={() => {
          // เขียนโค้ดเพิ่ม
          navigation.navigate("Categories")
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
  },
});

export default MealDetailScreen;
