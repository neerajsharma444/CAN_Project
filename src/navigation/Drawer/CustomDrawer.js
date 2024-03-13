import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import styles from '../Drawer/Drawer.Styles';
import IMAGES from '@assets/images';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import {useDispatch} from 'react-redux';
import {logoutUser} from '@redux/reducers/authSlice';

const CustomDrawer = ({navigation}) => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = () => {
    console.log('Logged out....');
    setShowLogoutModal(false);
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    setShowLogoutModal(false);
  };

  const closeDrawer = () => {
    navigation.closeDrawer();
  };

  const handleLogoutPress = () => {
    setShowLogoutModal(true);
    closeDrawer();
  };

  const drawerItems = [
    {screen: 'Profile', label: 'My Profile', icon: IMAGES.person},
    {screen: 'Referral', label: 'Referral', icon: IMAGES.referral},
    {screen: 'ChangePassword', label: 'Change Password', icon: IMAGES.settings},
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
            onPress={() => {
              if (item.label === 'Logout') {
                handleLogoutPress();
              } else {
                navigation.navigate(item.screen);
              }
            }}>
            <View style={styles.imgContainer}>
              <Image source={item.icon} />
              <Text style={styles.drawerItemText}>{item.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <CustomPopUp
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        onPress={handleLogout}
        doubleButton={true}
        visible={showLogoutModal}
        handleCancelPress={handleCancel}
      />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
