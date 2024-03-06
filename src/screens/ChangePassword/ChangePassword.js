import React from 'react';
import {Text, View, TextInput} from 'react-native';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import styles from './Change.Styles';

const ChangePassword = ({navigation}) => {
  const handleUpdate = () => {
    navigation.navigate('Login');
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
          />
          <Text style={styles.label}>Confirm Current Password</Text>
          <TextInput
            placeholder="Enter current password again"
            style={styles.input}
          />
          <Text style={styles.label}>New Password</Text>
          <TextInput placeholder="Enter new password" style={styles.input} />
        </View>
        <Button buttonName="Update" onPress={handleUpdate} />
      </View>
    </View>
  );
};

export default ChangePassword;
