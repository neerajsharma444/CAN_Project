import React, {useState} from 'react';
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
import {useSelector} from 'react-redux';
import {useUpdateProfileMutation} from '@redux/services/authService';

const Profile = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const [updateProfile] = useUpdateProfileMutation();

  const user_data = useSelector(state => state.auth.user?.result);
  console.log('user_data===>', user_data);

  const [name, setName] = useState(user_data?.name);
  const [email, setEmail] = useState(user_data?.email);
  const [organization, setOrganization] = useState(user_data?.organization);
  const [state, setState] = useState(user_data?.state);
  const [city, setCity] = useState(user_data?.city);

  const params = {
    id: user_data?._id,
    name,
    email,
    organization,
    state,
    city,
  };

  const handleUpdateProfile = async () => {
    console.log('DATA', params);
    try {
      const response = await updateProfile(params).unwrap();
      console.log('RESPONSE===>', response);
      if (response.status) {
        console.log('Profile Updated Successfully===>', response.message);
        setName('');
        setEmail('');
        setOrganization('');
        setState('');
        setCity('');
        navigation.navigate('Login');
      } else {
        console.log('Error', response.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      console.log('Error', 'Failed to update profile');
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
                  style={styles.inputDate}
                  value={date.toLocaleDateString()}
                  editable={false}
                  placeholder="Enter Date"
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
            <TextInput style={styles.input} placeholder="Enter Phone" />
            <Text style={styles.label}>Organization</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Organization"
              value={organization}
              onChangeText={text => setOrganization(text)}
            />
            <Text style={styles.label}>State</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter State"
              value={state}
              onChangeText={text => setState(text)}
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
