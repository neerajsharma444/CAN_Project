import React, {useState} from 'react';
import {
  Image,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import styles from './Register.Styles';

const Register = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(false);

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
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
          <TouchableOpacity onPress={handleLoginLinkPress}>
            <Text style={styles.acct}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomPopUp
        noTitle={title}
        visible={modalVisible}
        onPress={handleCloseModal}
        buttonText="Continue"
        text="Thanks for sharing your interest to become an investor with CAN.
              We’ll reach out to you within next 24-72 hours to assess whether
              you meet our criteria to become an investor."
      />
    </ScrollView>
  );
};

export default Register;
