import { enableScreens } from 'react-native-screens';
enableScreens();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator }
  from '@react-navigation/native-stack';
import { RootStackParamList } from './src/types/navigation';

import LoginScreen      from './src/screens/LoginScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import UserTypeScreen   from './src/screens/UserTypeScreen';
import SignUpScreen     from './src/screens/SignUpScreen';
import HomeScreen       from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login"      component={LoginScreen} />
        <Stack.Screen name="GetStarted" component={GetStartedScreen} />
        <Stack.Screen name="UserType"   component={UserTypeScreen} />
        <Stack.Screen name="SignUp"     component={SignUpScreen} />
        <Stack.Screen name="Home"       component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}