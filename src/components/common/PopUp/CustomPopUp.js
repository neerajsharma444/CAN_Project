import {View, Text, Modal} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import styles from './Styles.PopUp';

const CustomPopUp = ({
  title,
  visible,
  onPress,
  text,
  buttonText,
  doubleButton,
}) => {
  return (
    <Modal
      transparent={true}
      animationType="fade"
      visible={visible}
      onRequestClose={() => {}}>
      <View style={styles.modalContainer}>
        <View style={styles.modalSubContainer}>
          {title && <Text style={styles.resetHeading}>{title}</Text>}
          <Text style={styles.modalText}>{text}</Text>
          <Button
            buttonName={buttonText}
            onPress={onPress}
            doubleButton={doubleButton}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopUp;
