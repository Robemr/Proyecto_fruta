import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from '../container/Add';

const Stack = createStackNavigator();

export default function AddStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Añadir" component={AddScreen} />
      </Stack.Navigator>
    );
}