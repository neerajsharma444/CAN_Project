import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from '../Drawer/DrawerNavigator';
import StackNavigator from '../Stack/StackNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      {/* <DrawerNavigator /> */}
      <StackNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
