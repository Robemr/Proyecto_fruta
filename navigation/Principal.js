import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PrincipalScreen from '../container/Principal';

const Stack = createStackNavigator();

export default function PrincipalStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Mis Frutas" component={PrincipalScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    );
}