import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Styles';

const ChangePassword = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <Text style={styles.title}>Change Password</Text>
    </View>
  );
};

export default ChangePassword;
