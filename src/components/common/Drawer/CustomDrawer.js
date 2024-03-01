import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from './Drawer.Styles';

const CustomDrawer = ({navigation}) => {
  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  return (
    <DrawerContentScrollView style={styles.container}>
      <TouchableOpacity onPress={closeDrawer} style={styles.closeIcon}>
        <Text style={styles.closeText}>X</Text>
      </TouchableOpacity>
      <View style={styles.drawerContent}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.drawerItemText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Referral')}>
          <Text style={styles.drawerItemText}>Referral</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => navigation.navigate('Logout')}>
          <Text style={styles.drawerItemText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
