import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton.js";
import { useDispatch } from 'react-redux'
import { toggleFavorite } from '../store/actions/mealsAction'
import FavoritesScreen from '../screens/FavoritesScreen'

const FavNavigator = () => {
    const Stack = createNativeStackNavigator()
    const dispatch = useDispatch()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="CategoryMeals"
                component={FavoritesScreen}
                options={({ route }) => ({
                    headerShown: false
                })}
            />
            
        </Stack.Navigator>
    )
}

export default FavNavigator