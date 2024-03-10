import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import styles from './Login.Styles';
import IMAGES from '@assets/images';
import {useDispatch} from 'react-redux';
import {loginUser} from '@utils/services/api';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpLinkClick = () => {
    navigation.navigate('Register');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };

  const handleLogin = async () => {
    const {success, error} = await dispatch(loginUser(email, password));
    if (success) {
      navigation.navigate('Home');
    } else {
      console.error('Login failed:', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header height={300} />
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Password"
                value={password}
                onChangeText={text => setPassword(text)}
              />
              <TouchableOpacity>
                <Image style={styles.eyeIcon} source={IMAGES.eye} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.resetContainer}>
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSignUpLinkClick}>
              <Text style={styles.signupLink}>Become an Investor</Text>
            </TouchableOpacity>
          </View>
          <Button buttonName="Login" onPress={handleLogin} />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
