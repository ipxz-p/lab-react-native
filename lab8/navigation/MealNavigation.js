import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton.js";
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/mealsAction'

const MealNavigation = () => {
    const Stack = createNativeStackNavigator()
    const dispatch = useDispatch()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    headerStyle: { backgroundColor: "#4a148c" },
                    headerTintColor: "white",
                }}
            />
            <Stack.Screen
                name="CategoryMeals"
                component={CategoryMealsScreen}
                options={({ route }) => ({
                    title: `${route.params.categoryTitle}`,
                    headerStyle: { backgroundColor: "#4a148c" },
                    headerTintColor: "white",
                })}
            />
            <Stack.Screen
                name="MealDetail"
                component={MealDetailScreen}
                options={({ route }) => ({
                    title: `${route.params.title}`,
                    headerStyle: { backgroundColor: "#4a148c" },
                    headerTintColor: "white",
                    headerTitle: route.params.mealTitle,
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                        <Item title="Tab_1" iconName="ios-star" onPress={() => dispatch(toggleFavorite(route.params.categoryId))} />
                        </HeaderButtons> ),
                })}
            />
        </Stack.Navigator>
    )
}

export default MealNavigation