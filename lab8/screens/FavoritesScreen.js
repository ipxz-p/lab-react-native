import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
const FavoritesScreen = ({route, navigation}) => {
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
  const Meals = useSelector(state => state.meals.meals);
  const availableMeals = useSelector(state => state.meals.favoriteMeals);

  const favMeals = Meals.filter(meal =>
    availableMeals.includes(meal.id)
  );
  return (
    <View style={styles.screen}>
      
      <FlatList
        style={{ width: "100%" }}
        data={favMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default FavoritesScreen;
