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
import Details from '@screens/Forum/Details/Details';
import Answers from './src/screens/Forum/Answers/Answers';
import Questions from './src/screens/Forum/Questions/Questions';
import Category from './src/screens/Forum/Categories/Category';
import Referral from './src/screens/Referral/Referral';
import ResetPassword from './src/screens/ResetPassword/ResetPassword';
import Portfolio from './src/screens/Portfolio/Portfolio';
import Schedule from './src/screens/Calendar/Schedule';
import RootNavigator from './src/components/navigation/Root/RootNavigator';

const App = () => {
  return <RootNavigator />;
};

export default App;
