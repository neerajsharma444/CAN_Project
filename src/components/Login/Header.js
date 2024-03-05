import React from 'react';
import {Image, View} from 'react-native';
import styles from './Header.Styles';
import IMAGES from '@assets/images';

const Header = ({height = 250, backgroundColor = '#0A4975'}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.imgContainer, {height}, {backgroundColor}]}>
        <Image style={styles.logo} source={IMAGES.logo} />
      </View>
    </View>
  );
};

export default Header;
