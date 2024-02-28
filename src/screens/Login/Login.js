import {
  Image,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './Styles';
import Button from '../../components/common/Button/Button';
import Header from '../../components/common/Login/Header';

const Login = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header height={300} />
        <View style={styles.loginContainer}>
          <Text style={styles.titleLogin}>Login</Text>
          <View>
            <Text style={styles.inputHeading}>Email</Text>
            <TextInput style={styles.textInput} placeholder="Enter Email" />
          </View>
          <View>
            <Text style={styles.inputHeading}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.inputPassword}
                placeholder="Enter Password"
              />
              <Image
                style={styles.eyeLogo}
                source={require('../../assets/images/visibility_off.png')}
              />
            </View>
          </View>
          <View style={styles.resetContainer}>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.forgotPassword}>Become an Investor</Text>
            </TouchableOpacity>
          </View>
          <Button buttonName="Login" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
