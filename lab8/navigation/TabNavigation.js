import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import MealNavigation from './MealNavigation'

import FavoritesScreen from '../screens/FavoritesScreen'
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import FavNavigator from './FavNavigator'

const TabNavigation = () => {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='Meal'
                options={{
                    headerShown: false,
                    tabBarActiveTintColor: "orange",
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialCommunityIcons name="food-fork-drink" size={size} color={color} />;
                    },
                }}
                component={MealNavigation}
            />
            <Tab.Screen
                name='Fav'
                options={{
                    headerStyle: { backgroundColor: "#4a148c" },
                    headerTitle: 'Your Favorites',
                    headerTintColor: "white",
                    tabBarActiveTintColor: "orange",
                    tabBarIcon: ({ color, size }) => {
                        return <Entypo name="star" size={size} color={color} />;
                    },
                }}
                component={FavNavigator}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation