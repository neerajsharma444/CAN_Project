import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {View} from 'react-native';
import CustomDrawer from './CustomDrawer';
import Profile from '@screens/Profile/Profile';
import Referral from '@screens/Referral/Referral';
import ChangePassword from '@screens/ChangePassword/ChangePassword';
import LogoutConfirmation from '@screens/Logout/Logout';
import TabNavigator from '../Tab/TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={({navigation}) => (
          <CustomDrawer navigation={navigation} />
        )}>
        <Drawer.Screen name="TabNavigator" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Referral" component={Referral} />
        <Drawer.Screen name="ChangePassword" component={ChangePassword} />
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNavigator;
