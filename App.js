import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import PrincipalStack from './navigation/Principal';
import AddStack from './navigation/Add';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Principal') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Add') {
            iconName = focused
              ? 'paw'
              : 'paw-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
        <Tab.Screen name="Mis Frutas" component={PrincipalStack} options={{headerTitleAlign:'center'}}/>
        <Tab.Screen name="Añadir" component={AddStack} options={{headerTitleAlign:'center'}}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}