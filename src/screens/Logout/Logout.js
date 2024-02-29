import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import LogoutModal from '@components/common/Modal/LogoutModal';

const Logout = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.mainContainer}>
      <LogoutModal
        isVisible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onLogout={handleLogout}
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
