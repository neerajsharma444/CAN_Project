import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomDrawer from './CustomDrawer';
import Profile from '@screens/Profile/Profile';
import Referral from '@screens/Referral/Referral';
import Logout from '@screens/Logout/Logout';
import TabNavigator from '../Tab/TabNavigator';
import ResetPassword from '@screens/ResetPassword/ResetPassword';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={({navigation}) => (
        <CustomDrawer navigation={navigation} />
      )}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Referral" component={Referral} />
      <Drawer.Screen name="ResetPassword" component={ResetPassword} />
      <Drawer.Screen name="Logout" component={Logout} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
