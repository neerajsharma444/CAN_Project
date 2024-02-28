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
import Header from '../../components/common/Login/Header';
import Button from '../../components/common/Button/Button';
import CustomModal from '../../components/common/Modal/CustomModal';

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
        <Header height={250} />
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
          <Button buttonName="Register" onPress={handleRegisterPress} />
          <TouchableOpacity>
            <Text style={styles.acct}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Displaying the CustomModal component */}
      <CustomModal visible={modalVisible} onClose={handleCloseModal} />
    </ScrollView>
  );
};

export default Register;
