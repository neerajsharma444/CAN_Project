import React from 'react';
import {View, Text, FlatList, Image} from 'react-native';
import styles from './Home.Styles';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import IMAGES from '@assets/images';

const Home = () => {
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
    {
      date: '12',
      month: 'NOV',
      event: 'Web Summit PITCH 2022',
      about: 'Lorem Ipsum is simply dummy',
      time: '6 pm',
      location: 'Virtual',
      type: 'calendar',
    },
  ];

  const renderCardItem = ({item}) => (
    <Card
      name={item.name}
      description={item.description}
      MRP={item.MRP}
      Round_Size={item.Round_Size}
      Valuation={item.Valuation}
      Commitment={item.Commitment}
      image={item.image}
    />
  );

  const renderCalendarItem = ({item}) => (
    <View style={styles.calendarItem}>
      <View
        style={{
          backgroundColor: '#fff',
          borderWidth: 1,
          borderRadius: 10,
          padding: 10,
          alignItems: 'center',
          borderColor: '#0A4975',
        }}>
        <Text style={styles.calendarDate}>{item.date}</Text>
        <Text style={styles.calendarDate}>{item.month}</Text>
      </View>
      <View style={{marginHorizontal: 8, gap: 4}}>
        <Text style={styles.calendarEvent}>{item.event}</Text>
        <Text style={styles.calendarAbout}>{item.about}</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image style={{marginRight: 3}} source={IMAGES.date} />
          <Text style={styles.calendarTime}>{item.time}</Text>
          <Image style={{marginLeft: '13%'}} source={IMAGES.map} />
          <Text style={styles.calendarLocation}> {item.location}</Text>
        </View>
      </View>
    </View>
  );

  const renderListItem = ({item}) => {
    if (item.type === 'card') {
      return renderCardItem({item});
    } else {
      return renderCalendarItem({item});
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Header />
      <View style={styles.homeContainer}>
        <Text style={styles.title}>Active Mendate</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderListItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.homeContainer}
      />
      <Text style={styles.calendarTitle}>Calendar</Text>
    </View>
  );
};

export default Home;
