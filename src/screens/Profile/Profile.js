import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Profile.Styles';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import IMAGES from '@assets/images';
import DateTimePicker from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';
import {useUpdateProfileMutation} from '@redux/services/authService';
import {Dropdown} from 'react-native-element-dropdown';
import {useLazyFetchStatesQuery} from '@redux/services/authService';
import {fetchStatesSuccess} from '@redux/slices/authSlice';

const Profile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const dispatch = useDispatch();

  const [data] = useLazyFetchStatesQuery();

  const fetchStateList = async () => {
    try {
      const response = await data().unwrap();
      console.log('RESPONSE===>>>>', response);
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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
    setDob(formatDate(currentDate));
  };

  const [updateProfile] = useUpdateProfileMutation();

  const user_data = useSelector(state => state.auth.user?.result);
  console.log('user_data===>', user_data);

  const [name, setName] = useState(user_data?.name);
  const [email, setEmail] = useState(user_data?.email);
  const [dob, setDob] = useState(user_data?.dob);
  const [phone, setPhone] = useState(String(user_data?.phone));
  const [organization, setOrganization] = useState(user_data?.organization);
  const [state, setState] = useState(user_data?.state);
  const [city, setCity] = useState(user_data?.city);

  const formatDate = date => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    setDob(`${month}/${day}/${year}`);
    return `${month}/${day}/${year}`;
  };

  const handleUpdateProfile = async () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('dob', dob);
    formData.append('phone', phone);
    formData.append('organization', organization);
    formData.append('state', state);
    formData.append('city', city);

    // console.log('FORM DATA ===>', formData);

    try {
      const result = await updateProfile(formData).unwrap();
      console.log('Response===>', result);
      navigation.goBack();
    } catch (error) {
      console.log('Error :', error);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header drawer={false} back={true} />
        <View style={styles.content}>
          <Text style={styles.title}>My Profile</Text>
          <View style={styles.imageContainer}>
            <View style={styles.profileImage}>
              <TouchableOpacity>
                <Image source={IMAGES.camera} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Name"
              value={name}
              onChangeText={text => setName(text)}
            />
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              value={email}
              editable={false}
            />
            <Text style={styles.label}>Date of Birth</Text>
            <TouchableOpacity onPress={() => setShowDatePicker(true)}>
              <View style={styles.dateContainer}>
                <TextInput
                  editable={false}
                  style={styles.inputDate}
                  value={dob}
                  placeholder="Enter DOB"
                  onChangeText={text => setDob(text)}
                />
                <Image style={styles.dateIcon} source={IMAGES.calendar} />
              </View>
            </TouchableOpacity>
            {showDatePicker && (
              <DateTimePicker
                value={date}
                mode="date"
                display="default"
                onChange={handleDateChange}
              />
            )}
            <Text style={styles.label}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone"
              value={phone}
              onChangeText={text => setPhone(text)}
            />
            <Text style={styles.label}>Organization</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Organization"
              value={organization}
              onChangeText={text => setOrganization(text)}
            />
            <Text style={styles.label}>State</Text>
            <Dropdown
              data={allState}
              placeholder={state}
              labelField="state"
              valueField="_id"
              onChange={item => setState(item.state)}
              style={styles.dropDown}
              value={state}
            />
            <Text style={styles.label}>City</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter City"
              value={city}
              onChangeText={text => setCity(text)}
            />
            <Button buttonName="Update" onPress={handleUpdateProfile} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
