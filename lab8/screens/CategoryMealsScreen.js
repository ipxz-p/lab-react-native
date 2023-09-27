import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Platform,
  FlatList,
} from "react-native";
import MealItem from "../components/MealItem";
import { useSelector } from "react-redux";

const CategoryMealsScreen = ({route, navigation}) => {
  const renderMealItem = (itemData) => {
    return (
      <>
        <MealItem
          title={itemData.item.title}
          duration={itemData.item.duration}
          complexity={itemData.item.complexity}
          affordability={itemData.item.affordability}
          image={itemData.item.imageUrl}
          onSelectMeal={() => {
            // เขียนโค้ดเพิ่ม
            navigation.navigate("MealDetail", {title: itemData.item.title, 
              steps: itemData.item.steps, 
              categoryId: itemData.item.id, 
              img: itemData.item.imageUrl,
              duration: itemData.item.duration,
              complexity: itemData.item.complexity,
              affordability: itemData.item.affordability,
              ingredients: itemData.item.ingredients
            })
          }}
        />
        
      </>

      // ส่วนนี้ <View>...</View> ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <MealItem> ข้างบนแทน
      // <View style={{ height: 50, width: "40%" }}>
      //   <Text>{itemData.item.title}</Text>
      // </View>
    );
  };

  // const catId = ...รับข้อมูล id ของประเภทอาหาร...
  const {categoryId, categoryTitle} = route.params
  const availableMeals = useSelector(state => state.meals.filteredMeals)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        style={{ width: "100%" }}
        data={displayedMeals}
        renderItem={renderMealItem}
      />
    </View>

    // ส่วนนี้ <View>...</View>ใช้เพื่อการทดลอง และให้คอมเมนต์โค้ดส่วนนี้และเรียกใช้ <FlatList> ข้างบนแทน
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;
