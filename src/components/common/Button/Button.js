import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './Button.Styles';

const Button = ({onPress, buttonName, doubleButton, cancelPress}) => {
  const [doubleButtonVisible, setDoubleButtonVisible] = useState(doubleButton);
  return doubleButtonVisible ? (
    <View style={styles.cancelContainer}>
      <TouchableOpacity onPress={onPress} style={styles.resetButton}>
        <Text style={styles.resetText}>{buttonName}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={cancelPress} style={styles.cancelButton}>
        <Text style={styles.resetText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity style={styles.registerButton} onPress={onPress}>
      <Text style={styles.registerText}>{buttonName}</Text>
    </TouchableOpacity>
  );
};

export default Button;
