import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import MealNavigation from './MealNavigation';
import TabNavigation from './TabNavigation';
import Filter from './Filter';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
        <Drawer.Screen
            name='MealDraw'
            component={TabNavigation}
            options={{
                title: 'Meals',
            }}
        />
        <Drawer.Screen
            name='Filter'
            component={Filter}
        />
    </Drawer.Navigator>
  )
}

export default DrawerNavigation