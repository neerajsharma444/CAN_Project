import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IMAGES from '@assets/images';
import Schedule from '@screens/Calendar/Schedule';
import Home from '@screens/Home/Home';
import Portfolio from '@screens/Portfolio/Portfolio';
import Chat from '../../../screens/Chat/Chat';
import Category from '@screens/Forum/Categories/Category';
import {moderateScale} from '../../../utils/Metrics';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: false,
      }}>
      <Tab.Screen
        name="Schedule"
        component={Schedule}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.schedule} />
            ) : (
              <View style={styles.isFocused}>
                <Image source={IMAGES.scheduleWhite} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={Category}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.forum} />
            ) : (
              <View style={styles.isFocused}>
                <Image source={IMAGES.forumWhite} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.home} />
            ) : (
              <View style={styles.isFocused}>
                <Image source={IMAGES.homeWhite} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.chat} />
            ) : (
              <View style={styles.isFocused}>
                <Image source={IMAGES.chatWhite} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) =>
            !focused ? (
              <Image source={IMAGES.portfolio} />
            ) : (
              <View style={styles.isFocused}>
                <Image source={IMAGES.portfolioWhite} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};
export default TabNavigator;

const styles = StyleSheet.create({
  isFocused: {
    backgroundColor: '#0a4975',
    height: moderateScale(46),
    width: moderateScale(46),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(30),
  },
});
