import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import ResetPassword from '@screens/ResetPassword/ResetPassword';
import Home from '@screens/Home/Home';
import Category from '@screens/Forum/Categories/Category';
import TabNavigator from '../Tab/TabNavigator';
import Profile from '@screens/Profile/Profile';
import Referral from '@screens/Referral/Referral';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Referral" component={Referral} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
