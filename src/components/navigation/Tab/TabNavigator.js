import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IMAGES from '@assets/images';
import Schedule from '@screens/Calendar/Schedule';
import Details from '@screens/Forum/Details/Details';
import Home from '@screens/Home/Home';
import Portfolio from '@screens/Portfolio/Portfolio';
import Chat from '../../../screens/Chat/Chat';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.schedule} />,
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.forum} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.home} />,
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.chat} />,
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          headerShown: false,
          tabBarIcon: () => <Image source={IMAGES.profile} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;
