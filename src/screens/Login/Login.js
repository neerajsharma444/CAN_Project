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
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import styles from './Login.Styles';
import IMAGES from '@assets/images';
import {useLoginMutation} from '@redux/services/authService';
import {loginSuccess} from '@redux/slices/authSlice';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();

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

  const param = {
    email,
    password,
  };

  const handleLogin = async () => {
    try {
      const response = await loginMutation(param).unwrap();
      console.log('Email ', email, password);
      console.log('Response from login:', response);

      if (response.status) {
        dispatch(loginSuccess(response));
        console.log('Login successful, response:', response.message, response);
        navigation.navigate('Home');
      } else {
        Alert.alert(response.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('An error occurred during login');
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
              onChangeText={setEmail}
            />
          </View>
          <View>
            <Text style={styles.inputLabel}>Password</Text>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.passwordInput}
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={handleTogglePasswordVisibility}>
                <Image
                  style={styles.eyeIcon}
                  source={showPassword ? IMAGES.eye : IMAGES.eye}
                />
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

// import React, {useState} from 'react';
// import {ScrollView, Text, View, TouchableOpacity, Alert} from 'react-native';
// import Header from '@components/Login/Header';
// import Button from '@components/common/Button/Button';
// import Elements from '@components/common/Form/Elements';
// import styles from './Login.Styles';
// import {useLoginMutation} from '@redux/services/authService';
// import {loginSuccess} from '@redux/slices/authSlice';
// import {useDispatch} from 'react-redux';

// const Login = ({navigation}) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const dispatch = useDispatch();

//   const handleSignUpLinkClick = () => {
//     navigation.navigate('Register');
//   };

//   const handleForgotPassword = () => {
//     navigation.navigate('ResetPassword');
//   };

//   const handleTogglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const [loginMutation] = useLoginMutation();

//   const param = {
//     email,
//     password,
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await loginMutation(param).unwrap();
//       console.log('PARAM===>', param);
//       console.log('Response from login:', response);

//       if (response.status) {
//         dispatch(loginSuccess(response));
//         console.log('Login successful, response:', response.message, response);
//         navigation.navigate('Home');
//       } else {
//         Alert.alert(response.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       Alert.alert('An error occurred during login');
//     }
//   };

//   const fields = [
//     {name: 'email', label: 'Email', placeholder: 'Enter Email'},
//     {name: 'password', label: 'Password', placeholder: 'Enter Password'},
//   ];

//   const handleChange = (name, value) => {
//     setFormData({...formData, [name]: value});
//   };

//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <Header height={300} />
//         <View style={styles.loginContainer}>
//           <Text style={styles.title}>Login</Text>
//           <Elements fields={fields} handleChange={handleChange} />
//           <View style={styles.resetContainer}>
//             <TouchableOpacity onPress={handleForgotPassword}>
//               <Text style={styles.forgotPassword}>Forgot Password?</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleSignUpLinkClick}>
//               <Text style={styles.signupLink}>Become an Investor</Text>
//             </TouchableOpacity>
//           </View>
//           <Button buttonName="Login" onPress={handleLogin} />
//         </View>
//       </View>
//     </ScrollView>
//   );
// };

// export default Login;
