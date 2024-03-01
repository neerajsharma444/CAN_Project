import React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import IMAGES from '@assets/images';
import {verticalScale, moderateScale} from '@utils/Metrics';
import styles from './Home.Styles';

const Home = ({navigation}) => {
  const data = [
    {
      name: 'Jerry Imfotech',
      description: 'On demand food delivery startup',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
    {
      name: 'Chaiwala',
      description: 'Authentic Indian Tea',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
    {
      name: 'Jerry Imfotech',
      description: 'On demand food delivery startup',
      MRP: 'INR 1.50 Lakhs',
      Round_Size: 'INR 50 Lakhs',
      Valuation: 'INR 3.6 cr',
      Commitment: 'INR 20 Lakhs',
      image: require('../../assets/images/card_image.png'),
      type: 'card',
    },
    {
      date: '02',
      month: 'NOV',
      event: 'Startup World Cup 2022',
      about: 'Lorem Ipsum is simply dummy',
      time: '4 pm',
      location: 'Virtual',
      type: 'calendar',
    },
    {
      date: '12',
      month: 'NOV',
      event: 'Web Summit PITCH 2022',
      about: 'Lorem Ipsum is simply dummy',
      time: '6 pm',
      location: 'Virtual',
      type: 'calendar',
    },
    {
      date: '18',
      month: 'NOV',
      event: 'Next Founders Event',
      about: 'Lorem Ipsum is simply dummy',
      time: '8 pm',
      location: 'The Lalit, Chd',
      type: 'calendar',
    },
  ];

  const renderCardItem = (item, index) => (
    <Card
      key={index}
      name={item.name}
      description={item.description}
      MRP={item.MRP}
      Round_Size={item.Round_Size}
      Valuation={item.Valuation}
      Commitment={item.Commitment}
      image={item.image}
    />
  );

  const renderCalendarItem = (item, index) => (
    <View key={index} style={styles.calendarItem}>
      <View style={styles.calendarDateContainer}>
        <Text style={styles.calendarDate}>{item.date}</Text>
        <Text style={styles.calendarMonth}>{item.month}</Text>
      </View>
      <View style={styles.calendarInfoContainer}>
        <Text style={styles.calendarEvent}>{item.event}</Text>
        <Text style={styles.calendarAbout}>{item.about}</Text>
        <View style={styles.calendarTimeContainer}>
          <Image style={styles.calendarIcon} source={IMAGES.date} />
          <Text style={styles.calendarTime}>{item.time}</Text>
          <View style={styles.calendarLocationContainer}>
            <Image
              style={[styles.calendarIcon, styles.calendarLocationIcon]}
              source={IMAGES.map}
            />
            <Text style={styles.calendarLocation}>{item.location}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header height={verticalScale(250)} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Active Mendate</Text>
          {data.map((item, index) =>
            item.type === 'card' ? renderCardItem(item, index) : null,
          )}
          <Text style={styles.calendarTitle}>Calendar</Text>
          {data.map((item, index) =>
            item.type === 'calendar' ? renderCalendarItem(item, index) : null,
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
