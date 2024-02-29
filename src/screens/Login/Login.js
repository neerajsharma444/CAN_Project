// Login.js
import React from 'react';
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

const Login = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header height={300} />
        <View style={styles.loginContainer}>
          <Text style={styles.title}>Login</Text>
          <View>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Email" />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Password"
              />
              <Image style={styles.eyeIcon} source={IMAGES.eye} />
            </View>
          </View>
          <View style={styles.resetContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.signupLink}>Become an Investor</Text>
            </TouchableOpacity>
          </View>
          <Button buttonName="Login" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
