import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Styles';

const Header = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/tab_icon.png')}
          resizeMode="contain"
        />
        <Image
          style={styles.img}
          source={require('../../assets/images/logo-header.png')}
          resizeMode="contain"
        />
      </View>
      <Text>Hello</Text>
    </View>
  );
};

export default Header;
