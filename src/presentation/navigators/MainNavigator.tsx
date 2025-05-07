import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {TodoScreen} from '../screens';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Todo">
      <Stack.Screen name="Todo" component={TodoScreen} />
      <Stack.Screen name="Main" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
