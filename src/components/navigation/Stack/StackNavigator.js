import React from 'react';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import {createStackNavigator} from '@react-navigation/stack';
import ResetPassword from '../../../screens/ResetPassword/ResetPassword';
import Home from '@screens/Home/Home';
import Category from '@screens/Forum/Categories/Category';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
