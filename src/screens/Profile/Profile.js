import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from '../../components/Header/Header';
import styles from './Styles';
import Button from '../../components/common/Button/Button';

const Profile = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Header />
        <View style={styles.profileContainer}>
          <Text style={styles.title}>My Profile</Text>
          <View
            style={{
              backgroundColor: '#D9D9D9',
              borderRadius: 100,
              height: 90,
              width: 90,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity>
              <Image source={require('../../assets/images/camera_icon.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.text}>Name</Text>
            <TextInput style={styles.input} placeholder="Enter Name" />
            <Text style={styles.text}>Email</Text>
            <TextInput style={styles.input} placeholder="Enter Email" />
            <Text style={styles.text}>Date of Birth</Text>
            <View style={styles.dateContainer}>
              <TextInput style={styles.inputDate} placeholder="Enter Date" />
              <Image
                style={styles.dateIcon}
                source={require('../../assets/images/calendar_icon.png')}
              />
            </View>
            <Text style={styles.text}>Phone</Text>
            <TextInput style={styles.input} placeholder="Enter Phone" />
            <Text style={styles.text}>Organization</Text>
            <TextInput style={styles.input} placeholder="Enter Organization" />
            <Text style={styles.text}>State</Text>
            <TextInput style={styles.input} placeholder="Enter State" />
            <Text style={styles.text}>City</Text>
            <TextInput style={styles.input} placeholder="Enter City" />
            <Button buttonName="Update" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
