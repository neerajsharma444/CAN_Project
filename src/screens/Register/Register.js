import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import styles from './Register.Styles';
import {useDispatch, useSelector} from 'react-redux';
import {Dropdown} from 'react-native-element-dropdown';
import {Formik} from 'formik';
import {registerSchema} from '@components/common/Form/Validations';
import {
  useSignUpMutation,
  useLazyFetchStatesQuery,
} from '@redux/services/authService';
import {fetchStatesSuccess} from '@redux/slices/authSlice';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(false);

  const [data] = useLazyFetchStatesQuery();

  const fetchStateList = async () => {
    try {
      const response = await data().unwrap();
      if (response && response.result && Array.isArray(response.result)) {
        dispatch(fetchStatesSuccess(response));
      } else {
        console.error('Invalid state data format:', data);
      }
    } catch (error) {
      console.error('Error fetching state data:', error);
    }
  };

  const allState = useSelector(state => state.auth.allStates?.result ?? []);

  useEffect(() => {
    fetchStateList();
  }, []);

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };

  const [signUpMutation] = useSignUpMutation();

  const handleRegister = async values => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('password', values.password);
    formData.append('phone', values.phone);
    formData.append('organization', values.organization);
    formData.append('state', values.state);
    formData.append('city', values.city);

    console.log('FORM DATA ===>', formData);

    try {
      const result = await signUpMutation(formData).unwrap();
      console.log('Response===>', result);
      if (result.status) {
        setModalVisible(true);
      } else {
        setModalVisible(false);
      }
    } catch (error) {
      console.log('Error during registration:', error);
      setModalVisible(false);
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    navigation.navigate('Login');
  };

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.registerContainer}>
          <Text style={styles.title}>Become an Investor</Text>
          <View>
            <Formik
              initialValues={{
                name: '',
                email: '',
                password: '',
                phone: '',
                organization: '',
                state: '',
                city: '',
              }}
              onSubmit={handleRegister}
              validationSchema={registerSchema}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <Text style={styles.text}>Name</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Name"
                    onChangeText={handleChange('name')}
                    onBlur={handleBlur('name')}
                    value={values.name}
                  />
                  {touched.name && errors.name && (
                    <Text style={styles.errorText}>{errors.name}</Text>
                  )}
                  <Text style={styles.text}>Email</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  <Text style={styles.text}>Password</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <Text style={styles.text}>Phone</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Phone"
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                  />
                  {touched.phone && errors.phone && (
                    <Text style={styles.errorText}>{errors.phone}</Text>
                  )}
                  <Text style={styles.text}>Organization</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter Organization"
                    onChangeText={handleChange('organization')}
                    onBlur={handleBlur('organization')}
                    value={values.organization}
                  />
                  {touched.organization && errors.organization && (
                    <Text style={styles.errorText}>{errors.organization}</Text>
                  )}
                  <Text style={styles.text}>State</Text>
                  <Dropdown
                    data={allState}
                    labelField="state"
                    valueField="_id"
                    onChange={item => handleChange('state')(item.state)}
                    placeholder="Select State"
                    style={styles.dropDown}
                    value={values.state}
                  />
                  {touched.state && errors.state && (
                    <Text style={styles.errorText}>{errors.state}</Text>
                  )}
                  <Text style={styles.text}>City</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Enter City"
                    onChangeText={handleChange('city')}
                    onBlur={handleBlur('city')}
                    value={values.city}
                  />
                  {touched.city && errors.city && (
                    <Text style={styles.errorText}>{errors.city}</Text>
                  )}
                  <Button buttonName="Register" onPress={handleSubmit} />
                  <TouchableOpacity onPress={handleLoginLinkPress}>
                    <Text style={styles.acct}>Already have an account?</Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </View>
      <CustomPopUp
        noTitle={title}
        visible={modalVisible}
        onPress={handleCloseModal}
        buttonText="Continue"
        text="Thanks for sharing your interest to become an investor with CAN.
              We'll reach out to you within next 24-72 hours to assess whether
              you meet our criteria to become an investor."
      />
    </ScrollView>
  );
};

export default Register;
