import {
  fetchStatesSuccess,
  loginSuccess,
} from '@components/redux/reducers/authSlice';
import CustomPopUp from '../../components/common/PopUp/CustomPopUp';
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
      console.log('Response:', data);
    } else {
      console.error('Registration failed:', data);
    }
  } catch (error) {
    console.error('Error during registration:', error);
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

export const loginUser = (email, password) => async dispatch => {
  try {
    const response = await fetch('http://54.190.192.105:9185/angel/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });
    const data = await response.json();
    console.log('Response from login:', data);
    if (response.ok) {
      if (data.status) {
        dispatch(loginSuccess(data.user));
        console.log('Login successful, response:', data);
        return {success: true};
      } else {
        console.error('Login failed:', data.message);
        return {success: false, error: data.message};
      }
    } else {
      console.error('Login failed:', data.message);
      return {success: false, error: data.message};
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {success: false, error: 'An error occurred during login'};
  }
};

export const checkEmailExistence = async email => {
  try {
    const response = await loginUser(email, ''); // Attempt login with empty password
    if (!response.success && response.emailExists) {
      return true; // Email exists
    } else {
      return false; // Email does not exist or there was an error
    }
  } catch (error) {
    console.error('Error checking email existence:', error);
    return false; // Error occurred during the process
  }
};
