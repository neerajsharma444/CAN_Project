import {View, Text, Modal} from 'react-native';
import React from 'react';
import Button from '../Button/Button';
import styles from './PopUp.Styles';

const CustomPopUp = ({
  title,
  visible,
  onPress,
  text,
  buttonText,
  doubleButton,
  handleCancelPress,
  handleLogout,
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
            cancelPress={handleCancelPress}
            handleLogout={handleLogout}
          />
        </View>
      </View>
    </Modal>
  );
};

export default CustomPopUp;
