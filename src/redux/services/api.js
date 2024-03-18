import {API_URL, API_ENDPOINTS} from '../apiEndpoints/endPoints';
import {fetchStatesSuccess, loginSuccess} from '../slices/authSlice';
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
    const response = await fetch(`${API_URL}${API_ENDPOINTS.REGISTER}`, {
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
    const response = await fetch(`${API_URL}${API_ENDPOINTS.GET_ALL_STATES}`);
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
    const response = await fetch(`${API_URL}${API_ENDPOINTS.LOGIN}`, {
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
export const fetchEvents = async token => {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.CALENDAR}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log('Events API Response:', data);
    if (response.ok) {
      return data.result;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching events:', error);
    throw new Error('Failed to fetch events: ' + error.message);
  }
};
export const fetchForumCategories = async token => {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.FORUM_CATEGORY}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log('Forum Categories API Response:', data);
    if (response.ok) {
      return data.result;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching forum categories:', error);
    throw new Error('Failed to fetch forum categories: ' + error.message);
  }
};
export const fetchQuestionsByCategory = async (categoryId, token) => {
  try {
    const url = `${API_URL}${API_ENDPOINTS.FORUM_CATEGORY_QUESTION}${categoryId}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log('Questions API Response:', data);
    if (response.ok) {
      return data.result;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw new Error('Failed to fetch questions: ' + error.message);
  }
};
export const fetchMandateList = async token => {
  try {
    const response = await fetch(`${API_URL}${API_ENDPOINTS.HOME}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await response.json();
    console.log('Mandate List API Response:', data);
    if (response.ok) {
      return data;
    } else {
      throw new Error(data.message);
    }
  } catch (error) {
    console.error('Error fetching mandate list:', error);
    throw new Error('Failed to fetch mandate list: ' + error.message);
  }
};
