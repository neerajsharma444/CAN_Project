import React, {useState} from 'react';
import {FlatList, Image, Text, TextInput, View} from 'react-native';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import styles from './Referral.Styles';
import IMAGES from '@assets/images';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';

const Referral = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(false);

  const handleSubmitPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const referrals = [
    {
      name: 'Rajesh T',
      email: 'rajesh@gmail.com',
      date: '12/10/22',
      contact: '9876543210',
    },
    {
      name: 'Mahesh K',
      email: 'mahesh@gmail.com',
      date: '07/10/22',
      contact: '9876543210',
    },
    {
      name: 'Rajan K',
      email: 'rajan@gmail.com',
      date: '24/09/22',
      contact: '9876543210',
    },
    {
      name: 'Murthy S',
      email: 'murthy@gmail.com',
      date: '20/09/22',
      contact: '9876543210',
    },
  ];

  const renderReferralItem = ({item}) => (
    <View style={styles.referralContainer}>
      <View style={styles.referralRow}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.iconRow}>
          <Image source={IMAGES.calendar} />
          <Text style={styles.referralData}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.referralRow}>
        <View style={styles.iconRow}>
          <Image source={IMAGES.email} />
          <Text style={styles.referralData}>{item.email}</Text>
        </View>
        <View style={styles.iconRow}>
          <Image source={IMAGES.call} />
          <Text style={styles.referralData}>{item.contact}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header drawer={false} back={true} />
      <FlatList
        data={referrals}
        renderItem={renderReferralItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={
          <View style={styles.formContainer}>
            <Text style={styles.heading}>
              Refer someone whom you think can be part of CAN
            </Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Name"
                placeholderTextColor="#000000"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Email"
                placeholderTextColor="#000000"
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter Phone"
                placeholderTextColor="#000000"
              />
            </View>
            <Button buttonName="Submit" onPress={handleSubmitPress} />
            <CustomPopUp
              noTitle={title}
              visible={modalVisible}
              onPress={handleCloseModal}
              buttonText="Continue"
              text="Thanks for taking interest in participating in our referral program. We would love to help you:)"
            />
          </View>
        }
      />
    </View>
  );
};

export default Referral;
