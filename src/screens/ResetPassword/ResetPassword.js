import React, {useState} from 'react';
import {Image, Text, TextInput, View} from 'react-native';
import styles from './Reset.Styles';
import IMAGES from '@assets/images';
import Button from '@components/common/Button/Button';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';

const ResetPassword = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [doubleButton, setdoubleButton] = useState(true);

  const handleResetPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  const handleCancel = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imgContainer}>
        <Image style={styles.img} source={IMAGES.logo} resizeMode="contain" />
      </View>
      <View style={styles.resetContainer}>
        <Text style={styles.title}>Reset Password</Text>
        <View>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.input} placeholder="Enter Email" />
        </View>
        <Button
          buttonName="Reset"
          doubleButton={doubleButton}
          onPress={handleResetPress}
          cancelPress={handleCancel}
        />
      </View>
      <CustomPopUp
        noTitle={doubleButton}
        visible={modalVisible}
        title="Reset Password"
        text="If that email address is in our database, we will send you an email to reset your password."
        buttonText="Continue"
        onPress={handleCloseModal}
      />
    </View>
  );
};

export default ResetPassword;
