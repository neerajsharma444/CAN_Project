import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Formik} from 'formik';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import styles from './Login.Styles';
import IMAGES from '@assets/images';
import {loginUser} from '@utils/services/api';
import {loginSchema} from '@components/common/Form/Validations';
import {useDispatch, useSelector} from 'react-redux';

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
  const handleLogin = async values => {
    console.log('object', values);
    loginUser(values, dispatch, navigation);
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
