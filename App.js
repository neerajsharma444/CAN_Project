import {View, Text} from 'react-native';
import React from 'react';
import Register from './src/screens/Register/Register';
import Login from '@screens/Login/Login';
import CustomModal from './src/components/common/Modal/CustomModal';
import Home from '@screens/Home/Home';

import Header from './src/components/common/Header/Header';
import Profile from '@screens/Profile/Profile';
import ChangePassword from './src/screens/ChangePassword/ChangePassword';
import Logout from '@screens/Logout/Logout';

const App = () => {
  return <Register />;
};

export default App;
