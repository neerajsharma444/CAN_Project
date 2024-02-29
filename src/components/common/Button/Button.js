import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Button.Styles';

const Button = ({onPress, buttonName}) => {
  return (
    <View>
      <TouchableOpacity style={styles.registerButton} onPress={onPress}>
        <Text style={styles.registerText}>{buttonName}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
