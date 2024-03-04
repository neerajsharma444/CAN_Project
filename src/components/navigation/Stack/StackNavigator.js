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
import Schedule from '@screens/Calendar/Schedule';
import Details from '@screens/Forum/Details/Details';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Questions from '@screens/Forum/Questions/Questions';
import Answers from '@screens/Forum/Answers/Answers';

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
      <Stack.Screen name="Schedule" component={Schedule} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Referral" component={Referral} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Answers" component={Answers} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
