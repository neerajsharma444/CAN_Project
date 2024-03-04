import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from '../Drawer/Drawer.Styles';
import IMAGES from '@assets/images';

const CustomDrawer = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.mainContainer}>
        <Image source={IMAGES.logo} resizeMode="cover" style={styles.canLogo} />
        <TouchableOpacity onPress={closeDrawer} style={styles.closeIcon}>
          <Text style={styles.closeText}>X</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.drawerContent}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TabNavigator')
          }></TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Profile')}>
          <View style={styles.imgContainer}>
            <Image source={IMAGES.person} />
            <Text style={styles.drawerItemText}>Profile</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Referral')}>
          <View style={styles.imgContainer}>
            <Image source={IMAGES.referral} />
            <Text style={styles.drawerItemText}>Referral</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Logout')}>
          <View style={styles.imgContainer}>
            <Image source={IMAGES.logout} />
            <Text style={styles.drawerItemText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
