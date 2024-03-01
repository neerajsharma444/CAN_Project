import React from 'react';
import {Image, View} from 'react-native';
import styles from './Header.Styles';
import IMAGES from '@assets/images';

const Header = ({height = 250}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.imgContainer, {height}]}>
        <Image style={styles.logo} source={IMAGES.logo} />
      </View>
    </View>
  );
};

export default Header;
