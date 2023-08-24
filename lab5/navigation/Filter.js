import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import FiltersScreen from '../screens/FiltersScreen'
const Filter = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='filter' component={FiltersScreen} />
    </Stack.Navigator>
  )
}

export default Filter