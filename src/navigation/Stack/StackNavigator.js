import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Login from '@screens/Login/Login';
import Register from '@screens/Register/Register';
import ResetPassword from '@screens/ResetPassword/ResetPassword';
import Category from '@screens/Forum/Categories/Category';
import Details from '@screens/Forum/Details/Details';
import Questions from '@screens/Forum/Questions/Questions';
import Answers from '@screens/Forum/Answers/Answers';
import Slider from '@screens/IntroSlider/Slider';
import DrawerNavigator from '../Drawer/DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const userState = useSelector(state => state.user);

  return (
    <Stack.Navigator
      initialRouteName={userState ? 'Home' : 'Slider'}
      screenOptions={{headerShown: false}}>
      {userState ? (
        <>
          <Stack.Screen name="Home" component={DrawerNavigator} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="Questions" component={Questions} />
          <Stack.Screen name="Answers" component={Answers} />
          <Stack.Screen name="Login" component={Login} />
        </>
      ) : (
        <>
          <Stack.Screen name="Slider" component={Slider} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen name="Category" component={Category} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigator;
