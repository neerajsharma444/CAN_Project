import React from 'react';
import {View} from 'react-native';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import {useNavigation} from '@react-navigation/native';

const LogoutConfirmation = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <View>
      <CustomPopUp
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        onPress={handleLogout}
        doubleButton={true}
        visible={true}
        handleCancelPress={handleCancel}
      />
    </View>
  );
};

export default LogoutConfirmation;
