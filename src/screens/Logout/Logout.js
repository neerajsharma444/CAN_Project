import {StyleSheet, View} from 'react-native';
import React from 'react';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';

const Logout = ({navigation}) => {
  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <CustomPopUp
        title="Logout"
        text="Are you sure you want to Logout?"
        buttonText="Logout"
        onPress={handleLogout}
        doubleButton={true}
        visible={true}
      />
    </View>
  );
};

export default Logout;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
