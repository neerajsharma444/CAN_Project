import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import styles from './Login.Styles';
import IMAGES from '@assets/images';
import {loginUser} from '@redux/services/api';
import {loginSchema} from '@components/common/Form/Validations';
import {useDispatch, useSelector} from 'react-redux';
import {useLoginMutation} from '@redux/services/authService';
import {loginSuccess} from '@redux/slices/authSlice';

const Login = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const params = {email: email, password: password};

  const handleSignUpLinkClick = () => {
    navigation.navigate('Register');
  };
  const handleForgotPassword = () => {
    navigation.navigate('ResetPassword');
  };
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loginMutation] = useLoginMutation();

  const handleLogin = async values => {
    const data = await loginMutation(values).unwrap();
    console.log('Response from login:', data);

    try {
      if (data.status) {
        dispatch(loginSuccess(data));
        console.log('Login successful, response:', data);
        navigation.navigate('Home');
        return {success: true};
      } else {
        Alert.alert(data.message);
        return {success: false, error: data.message};
      }
    } catch (error) {
      console.error('Error during login:', error);
      return {success: false, error: 'An error occurred during login'};
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header height={300} />
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={handleLogin}
          validationSchema={loginSchema}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <View style={styles.loginContainer}>
              <Text style={styles.title}>Login</Text>
              <View>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                {touched.email && errors.email && (
                  <Text style={styles.errorText}>{errors.email}</Text>
                )}
              </View>
              <View>
                <Text style={styles.inputLabel}>Password</Text>
                <View style={styles.passwordContainer}>
                  <TextInput
                    style={styles.passwordInput}
                    placeholder="Enter Password"
                    value={values.password}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    secureTextEntry={!showPassword}
                  />
                  <TouchableOpacity onPress={handleTogglePasswordVisibility}>
                    <Image
                      style={styles.eyeIcon}
                      source={showPassword ? IMAGES.eye : IMAGES.eye}
                    />
                  </TouchableOpacity>
                </View>
                {touched.password && errors.password && (
                  <Text style={styles.errorText}>{errors.password}</Text>
                )}
              </View>
              <View style={styles.resetContainer}>
                <TouchableOpacity onPress={handleForgotPassword}>
                  <Text style={styles.forgotPassword}>Forgot Password?</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleSignUpLinkClick}>
                  <Text style={styles.signupLink}>Become an Investor</Text>
                </TouchableOpacity>
              </View>
              <Button buttonName="Login" onPress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </ScrollView>
  );
};

export default Login;
