import React, {useState, useEffect} from 'react';
import {ScrollView, Image, Text, TextInput, View} from 'react-native';
import Header from '@components/common/Header/Header';
import Button from '@components/common/Button/Button';
import styles from './Referral.Styles';
import IMAGES from '@assets/images';
import CustomPopUp from '@components/common/PopUp/CustomPopUp';
import {
  useLazyReferralListQuery,
  useAddReferralMutation,
} from '@redux/services/referralService';
import {useSelector} from 'react-redux';

const Referral = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState(false);
  const [referrals, setReferrals] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [renderReferral, setRenderReferral] = useState(false);

  const id = useSelector(state => state.auth.user?.result?._id);
  // console.log('ID===>', id);

  const [addReferralMutation] = useAddReferralMutation();
  const [data] = useLazyReferralListQuery();

  const params = {
    user_mandate: id,
    name,
    email,
    phone,
  };

  const fetchReferral = async () => {
    try {
      const res = await data(id);
      const response = res.data.result;
      console.log('RESPONSE====>', response);
      setReferrals(response);
      console.log('DATA', response);
    } catch (err) {
      console.log('Error==>', err);
    }
  };

  useEffect(() => {
    fetchReferral();
  }, [renderReferral]);

  const handleSubmitPress = async () => {
    console.log('params==>', params);
    try {
      const data = addReferralMutation(params);
      setRenderReferral(!renderReferral);
      setName('');
    } catch (err) {
      console.log('Error==>', err);
    }
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const formatDate = dateString => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  return (
    <View style={styles.container}>
      <Header drawer={false} back={true} />
      <ScrollView>
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
              onChangeText={text => setName(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Email"
              placeholderTextColor="#000000"
              onChangeText={text => setEmail(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Phone</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter Phone"
              placeholderTextColor="#000000"
              onChangeText={text => setPhone(text)}
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
          <Text style={styles.referralText}> My Referrals</Text>
          <View style={styles.referralContainer}>
            {referrals.map((item, index) => (
              <View key={index} style={styles.referralItem}>
                <View style={styles.referralRow}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.iconRow}>
                    <Image source={IMAGES.calendar} />
                    <Text style={styles.referralData}>
                      {formatDate(item.updatedAt)}
                    </Text>
                  </View>
                </View>
                <View style={styles.referralRow}>
                  <View style={styles.iconRow}>
                    <Image source={IMAGES.email} />
                    <Text style={styles.referralData}>{item.email}</Text>
                  </View>
                  <View style={styles.iconRow}>
                    <Image source={IMAGES.call} />
                    <Text style={styles.referralData}>{item.phone}</Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Referral;
