import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import modalStyles from './Modal.Styles';

const CustomModal = ({visible, onClose}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}>
      <View style={modalStyles.modalContainer}>
        <View style={modalStyles.modalContent}>
          <Text style={modalStyles.modalText}>
            Thanks for sharing your interest to become an investor with CAN.
            We'll reach out to you within next 24-72 hours to assess whether you
            meet our criteria to become an investor.
          </Text>
          <TouchableOpacity
            style={modalStyles.continueButton}
            onPress={onClose}>
            <Text style={modalStyles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
