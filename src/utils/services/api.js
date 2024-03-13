import {API_BASE_URL, API_ENDPOINTS} from './apiConfig';
import {fetchStatesSuccess, loginSuccess} from '@redux/reducers/authSlice';
import {Alert} from 'react-native';

const handleResponse = async response => {
  const data = await response.json();
  if (response.ok) {
    if (data.status === false) {
      Alert.alert('Oops something went wrong..', data.message);
      return false;
    } else {
      return true;
    }
  } else {
    console.error('Request failed:', data);
    return false;
  }
};

export const addUser = async params => {
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.REGISTER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    });
    console.log('POST request completed.');
    return await handleResponse(response);
  } catch (error) {
    console.error('Error during registration:', error);
    return false;
  }
};

export const fetchStateList = () => async dispatch => {
  try {
    const response = await fetch(
      `${API_BASE_URL}${API_ENDPOINTS.GET_ALL_STATES}`,
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
  try {
    const response = await fetch(`${API_BASE_URL}${API_ENDPOINTS.LOGIN}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });
    const data = await response.json();
    console.log('Response from login:', data);

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
