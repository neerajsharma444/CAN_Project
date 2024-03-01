import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import CustomDrawer from '../../common/Drawer/CustomDrawer';
import Profile from '@screens/Profile/Profile';
import Referral from '@screens/Referral/Referral';
import Logout from '@screens/Logout/Logout';
import Home from '../../../screens/Home/Home';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <SafeAreaProvider>
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={({navigation}) => (
          <CustomDrawer navigation={navigation} />
        )}>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Referral" component={Referral} />
        <Drawer.Screen name="Logout" component={Logout} />
      </Drawer.Navigator>
    </SafeAreaProvider>
  );
};

export default DrawerNavigator;
