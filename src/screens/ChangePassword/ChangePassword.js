import React, {useState} from 'react';
import {Text, View, TextInput, KeyboardAvoidingView} from 'react-native';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import styles from './Change.Styles';
import {useSelector} from 'react-redux';
import {useUpdatePasswordMutation} from '@redux/services/authService';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';

const ChangePassword = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const userId = useSelector(state => state.auth.user?.result);
  const [changePasswordMutation] = useUpdatePasswordMutation();

  const handleUpdatePassword = async () => {
    const params = {
      _id: userId._id,
      current_password: currentPassword,
      new_password: newPassword,
    };
    console.log('PARAMS', params);
    try {
      const data = await changePasswordMutation(params);
      console.log('RESPONSE!@#$%==>', data);
      setIsVisible(true);
    } catch (err) {
      console.log('ERROR', err);
    }
  };

  const closeModal = () => {
    setIsVisible(false);
    navigation.navigate('Login');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <Header drawer={false} back={true} />
      <View style={styles.passwordContainer}>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            placeholder="Enter your current password"
            style={styles.input}
            onChangeText={text => setCurrentPassword(text)}
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            placeholder="Enter new password"
            style={styles.input}
            onChangeText={text => setNewPassword(text)}
          />
        </View>
        <Button buttonName="Update" onPress={handleUpdatePassword} />
      </View>
      <CustomPopUp
        visible={isVisible}
        onPress={closeModal}
        buttonText="Continue"
        text="Your password has been updated. You will now be redirected to the login screen"
      />
    </KeyboardAvoidingView>
  );
};

export default ChangePassword;
