import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LoginScreen, OnboardingScreen} from '../screens';
import {AuthNavigationParamsList} from './type';
import Register from '../screens/auth/register';

const AuthNavigator = () => {
  const Stack = createNativeStackNavigator<AuthNavigationParamsList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={Register} />
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
