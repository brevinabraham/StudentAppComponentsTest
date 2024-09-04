import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screens from './Screen/index';     

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer initialRouteName='LoginPage'>
      <Stack.Navigator>
        <Stack.Screen
            name='LoginPage'
            component={screens.LoginPage}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='SignUpPage'
            component={screens.SignUpPage}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='Dashboard'
            component={screens.Dashboard}
            options={{headerShown: false}}/>
        <Stack.Screen
            name='AddQuestion'
            component={screens.AddQuestion}
            options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

