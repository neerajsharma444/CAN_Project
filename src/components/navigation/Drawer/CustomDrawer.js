import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from '../Drawer/Drawer.Styles';
import IMAGES from '@assets/images';

const CustomDrawer = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const drawerItems = [
    {screen: 'Profile', label: 'My Profile', icon: IMAGES.person},
    {screen: 'Referral', label: 'Referral', icon: IMAGES.referral},
    {screen: 'ResetPassword', label: 'Reset Password', icon: IMAGES.settings},
    {screen: 'Logout', label: 'Logout', icon: IMAGES.logout},
  ];

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={IMAGES.logo} resizeMode="cover" style={styles.canLogo} />
        <TouchableOpacity onPress={closeDrawer} style={styles.closeIcon}>
          <Image style={styles.close} source={IMAGES.close} />
        </TouchableOpacity>
      </View>
      <View style={styles.drawerContent}>
        {drawerItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.drawerItem}
            onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.imgContainer}>
              <Image source={item.icon} />
              <Text style={styles.drawerItemText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
