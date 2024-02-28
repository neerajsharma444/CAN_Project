import React, {useState} from 'react';
import {Image, View} from 'react-native';
import styles from './Styles';

const Header = ({height}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={[styles.imgContainer, {height}]}>
        <Image
          style={styles.logo}
          source={require('../../../assets/images/logo-header.png')}
        />
      </View>
    </View>
  );
};

export default Header;
