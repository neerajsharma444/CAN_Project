import {View, Text} from 'react-native';
import React from 'react';
import Login from './src/screens/Login/Login';
import Register from './src/screens/Register/Register';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Header from './src/components/Header/Header';

const App = () => {
  return (
    <View>
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <ResetPassword /> */}
      <Header />
    </View>
  );
};

export default App;
