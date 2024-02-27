import React, {useState} from 'react';
import {
  Image,
  Text,
  Modal,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import styles from './Styles';

const ResetPassword = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleResetPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={require('../../assets/images/logo-header.png')}
          resizeMode="contain"
        />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={handleResetPress} style={styles.reset_btn}>
            <Text style={styles.txt}>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.cancel_btn}>
            <Text style={styles.txt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.title}>Reset Password</Text>
            <Text style={styles.modalText}>
              If that email address is in our database, we will send you an
              email to reset your password.
            </Text>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleCloseModal}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ResetPassword;
