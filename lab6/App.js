
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Spring from "./screen/Spring";
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import Sequence from "./screen/Sequence";
import Parallel from "./screen/Parallel";

export default function App() {
  const Tab = createBottomTabNavigator()
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="spring" component={Spring} options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome name="expand" size={size} color={color} />;
          },
        }} />
        <Tab.Screen name="sequence" component={Sequence} options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarIcon: ({ color, size }) => {
            return <MaterialCommunityIcons name="view-sequential" size={size} color={color} />;
          },
        }} />
        <Tab.Screen name="parallel" component={Parallel} options={{
          headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="flow-parallel" size={size} color={color} />;
          },
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

