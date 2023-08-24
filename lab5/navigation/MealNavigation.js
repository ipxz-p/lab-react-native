import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

const MealNavigation = () => {
    const Stack = createNativeStackNavigator()
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
                })}
            />
        </Stack.Navigator>
    )
}

export default MealNavigation