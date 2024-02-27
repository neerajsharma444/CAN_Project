import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import styles from './Styles';

const Register = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegisterPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.logo}
            source={require('../../assets/images/logo-header.png')}
          />
        </View>
        <View style={styles.registerContainer}>
          <Text style={styles.title}>Become an Investor</Text>
          <View>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter Name" />
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Email" />
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.input} placeholder="Enter Password" />
            <Text style={styles.text}>Organization</Text>
            <TextInput style={styles.input} placeholder="Enter Organization" />
            <Text style={styles.text}>State</Text>
            <TextInput style={styles.input} placeholder="Enter State" />
            <Text style={styles.text}>City</Text>
            <TextInput style={styles.input} placeholder="Enter City" />
          </View>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={handleRegisterPress}>
            <Text style={styles.registerText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.acct}>Already have an account?</Text>
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
            <Text style={styles.modalText}>
              Thanks for sharing your interest to become an investor with CAN.
              We'll reach out to you within next 24-72 hours to assess whether
              you meet our criteria to become an investor.
            </Text>
            <TouchableOpacity
              style={styles.continueButton}
              onPress={handleCloseModal}>
              <Text style={styles.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Register;
