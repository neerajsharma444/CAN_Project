import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import styles from './Modal.Styles';

const CustomModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalText}>
            Thanks for sharing your interest to become an investor with CAN.
            We'll reach out to you within next 24-72 hours to assess whether you
            meet our criteria to become an investor.
          </Text>
          <TouchableOpacity style={styles.continueButton} onPress={onClose}>
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
