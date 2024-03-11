import {
  fetchStatesSuccess,
  loginSuccess,
} from '@components/redux/reducers/authSlice';
import {Alert} from 'react-native';

export const addUser = async params => {
  console.log('params........', params);
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    console.log('POST request completed.');

    const data = await response.json();

    if (response.ok) {
      if (data.status === false) {
        Alert.alert('Oops something went wrong..', data.message);
        return false;
      } else {
        return true;
      }
    } else {
      console.error('Registration failed:', data);
      return false;
    }
  } catch (error) {
    console.error('Error during registration:', error);
    return false;
  }
};

export const fetchStateList = () => async dispatch => {
  try {
    const response = await fetch(
      'http://54.190.192.105:9185/angel/get_all_state',
    );
    const data = await response.json();
    if (data && data.result && Array.isArray(data.result)) {
      dispatch(fetchStatesSuccess(data));
    } else {
      console.error('Invalid state data format:', data);
    }
  } catch (error) {
    console.error('Error fetching state data:', error);
  }
};

export const loginUser = async (values, dispatch, navigation) => {
  console.log('Params...', values);
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log('Response from login:', data);
    console.log(data.status);

    if (response.ok) {
      if (data.status) {
        dispatch(loginSuccess(data));
        console.log('Login successful, response:', data);
        navigation.navigate('Home');
        return {success: true};
      } else {
        Alert.alert(data.message);
        return {success: false, error: data.message};
      }
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {success: false, error: 'An error occurred during login'};
  }
};
