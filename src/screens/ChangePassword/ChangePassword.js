import React, {useState} from 'react';
import {Text, View, TextInput} from 'react-native';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import styles from './Change.Styles';
import {useSelector} from 'react-redux';
import {useChangePasswordMutation} from '@redux/services/authService';

const ChangePassword = ({navigation}) => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const userId = useSelector(state => state.auth.user?.result?._id);
  console.log('USERID====>', userId);

  const params = {
    _id: userId,
    current_password: currentPassword,
    new_password: newPassword,
  };

  const [changePassword] = useChangePasswordMutation();

  const handleUpdate = async () => {
    console.log('DATA', params);
    try {
      const response = await changePassword(params).unwrap();
      console.log('RESPONSE===>', response);
      if (response.status) {
        console.log('Password Changed Successfully===>', response.message);
        setCurrentPassword('');
        setNewPassword('');
        navigation.navigate('Login');
      } else {
        console.log('Error', response.message);
      }
    } catch (error) {
      console.error('Error changing password:', error);
      console.log('Error', 'Failed to change the password');
    }
  };

  return (
    <View style={styles.container}>
      <Header drawer={false} back={true} />
      <View style={styles.passwordContainer}>
        <Text style={styles.title}>Change Password</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Current Password</Text>
          <TextInput
            placeholder="Enter your current password"
            style={styles.input}
            value={currentPassword}
            onChangeText={text => setCurrentPassword(text)}
          />
          <Text style={styles.label}>Confirm Current Password</Text>
          <TextInput
            placeholder="Enter current password again"
            style={styles.input}
            value={currentPassword}
            onChangeText={text => setCurrentPassword(text)}
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput
            placeholder="Enter new password"
            style={styles.input}
            value={newPassword}
            onChangeText={text => setNewPassword(text)}
          />
        </View>
        <Button buttonName="Update" onPress={handleUpdate} />
      </View>
    </View>
  );
};

export default ChangePassword;
