import React, {useState, useEffect} from 'react';
import {
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
import {db, createTable, handleCreateUser} from '@utils/SqliteDB/Database';

const Register = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    organization: '',
    state: '',
    city: '',
  });

  useEffect(() => {
    createTable();
  }, []);

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    handleCreateUser(formData);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  const handleInputChange = (key, value) => {
    setFormData({...formData, [key]: value});
  };
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.registerContainer}>
          <Text style={styles.title}>Become an Investor</Text>
          <View>
            <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter Name"
              value={formData.name}
              onChangeText={text => handleInputChange('name', text)}
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter Email"
              value={formData.email}
              onChangeText={text => handleInputChange('email', text)}
            />
            <Text style={styles.text}>Password</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter Password"
              value={formData.password}
              onChangeText={text => handleInputChange('password', text)}
            />
            <Text style={styles.text}>Organization</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter Organization"
              value={formData.organization}
              onChangeText={text => handleInputChange('organization', text)}
            />
            <Text style={styles.text}>State</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter State"
              value={formData.state}
              onChangeText={text => handleInputChange('state', text)}
            />
            <Text style={styles.text}>City</Text>
            <TextInput
              style={styles.input}
              autoFocus={false}
              placeholder="Enter City"
              value={formData.city}
              onChangeText={text => handleInputChange('city', text)}
            />
          </View>
          <Button buttonName="Register" onPress={handleRegisterPress} />
          <TouchableOpacity onPress={handleLoginLinkPress}>
            <Text style={styles.acct}>Already have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CustomPopUp
        noTitle={true}
        visible={modalVisible}
        onPress={handleCloseModal}
        buttonText="Continue"
        text="Thanks for sharing your interest to become an investor with CAN. We’ll reach out to you within next 24-72 hours to assess whether you meet our criteria to become an investor."
      />
    </ScrollView>
  );
};

export default Register;
