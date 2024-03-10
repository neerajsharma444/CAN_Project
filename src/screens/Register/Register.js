import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from '@components/Login/Header';
import Button from '@components/common/Button/Button';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import styles from './Register.Styles';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, fetchStateList} from '@utils/services/api';
import {Dropdown} from 'react-native-element-dropdown';
import {Formik} from 'formik';
import {validationSchema} from '@components/common/Form/Validations';

const Register = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchStateList());
  }, [dispatch]);

  const allState = useSelector(state => state.auth.allStates?.result ?? []);

  const [modalVisible, setModalVisible] = useState(false);

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };
  const handleRegister = values => {
    console.log('Form Values:', values);
    setModalVisible(true);
    addUser(values);
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
                organization: '',
                state: '',
                city: '',
              }}
              onSubmit={handleRegister}
              validationSchema={validationSchema}>
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
                    // onBlur={handleBlur('state')}
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
