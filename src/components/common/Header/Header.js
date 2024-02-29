import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Header.Styles';
import IMAGES from '@assets/images';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity>
        <Image
          source={IMAGES.drawer}
          resizeMode="cover"
          style={styles.drawerIcon}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image source={IMAGES.logo} resizeMode="cover" style={styles.canLogo} />
      </View>
    </View>
  );
};

export default Header;
