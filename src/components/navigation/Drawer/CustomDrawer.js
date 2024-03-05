import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from '../Drawer/Drawer.Styles';
import IMAGES from '@assets/images';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomDrawer = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const drawerItems = [
    {screen: 'Profile', label: 'My Profile', icon: IMAGES.person},
    {screen: 'Referral', label: 'Referral', icon: IMAGES.referral},
    {screen: 'Logout', label: 'Logout', icon: IMAGES.logout},
  ];

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={IMAGES.logo} resizeMode="cover" style={styles.canLogo} />
        <TouchableOpacity onPress={closeDrawer} style={styles.closeIcon}>
          <FontAwesome
            style={styles.close}
            name="close"
            size={22}
            color="#fff"
          />
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
