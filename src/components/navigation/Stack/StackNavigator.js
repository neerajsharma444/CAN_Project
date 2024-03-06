import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import ResetPassword from '@screens/ResetPassword/ResetPassword';
import Category from '@screens/Forum/Categories/Category';
import Profile from '@screens/Profile/Profile';
import Referral from '@screens/Referral/Referral';
import Schedule from '@screens/Calendar/Schedule';
import Details from '@screens/Forum/Details/Details';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import Questions from '@screens/Forum/Questions/Questions';
import Answers from '@screens/Forum/Answers/Answers';
import Slider from '../../../screens/IntroSlider/Slider';
import LogoutConfirmation from '../../../screens/Logout/Logout';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Slider1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Slider" component={Slider} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="Answers" component={Answers} />
      <Stack.Screen name="Home" component={DrawerNavigator} />
      {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
    </Stack.Navigator>
  );
};

export default StackNavigator;
