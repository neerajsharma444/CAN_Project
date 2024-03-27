import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import styles from './Home.Styles';
import {useGetCalendarEventsMutation} from '@redux/services/authService';
import IMAGES from '@assets/images';
import {useFetchMendateListMutation} from '@redux/services/authService';

const Home = ({navigation}) => {
  const [mandateList, setMandateList] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);

  const [data] = useFetchMendateListMutation();

  const fetchMendateList = async () => {
    try {
      const response = await data().unwrap();
      const res = response.result;
      setMandateList(res);
      console.log('RESPONSE===>', res);
    } catch (err) {
      console.log('Error fetching mendate list:', err);
    }
  };

  useEffect(() => {
    fetchMendateList();
  }, []);

  const [getCalendarEvents] = useGetCalendarEventsMutation();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await getCalendarEvents({
          start_date: '3/04/2024',
          end_date: '4/04/2024',
        });
        setCalendarEvents(response.data?.result || []);
      } catch (error) {
        console.error('Error fetching calendar events:', error);
      }
    };
    fetchEvents();
  }, [getCalendarEvents]);

  const renderCalendarItem = (item, index) => {
    const eventDate = new Date(item.date);

    const day = eventDate.getDate();
    const month = eventDate.toLocaleString('default', {month: 'short'});

    return (
      <View key={index} style={styles.calendarItem}>
        <View style={styles.calendarDateContainer}>
          <Text style={styles.calendarDate}>{day}</Text>
          <Text style={styles.calendarMonth}>{month}</Text>
        </View>
        <View style={styles.calendarInfoContainer}>
          <Text style={styles.calendarEvent}>{item.title}</Text>
          <Text style={styles.calendarAbout}>{item.description}</Text>
          <View style={styles.calendarTimeContainer}>
            <Image style={styles.calendarIcon} source={IMAGES.date} />
            <Text style={styles.calendarTime}>{item.time}</Text>
            <View style={styles.calendarLocationContainer}>
              <Image style={styles.calendarIcon} source={IMAGES.map} />
              <Text style={styles.calendarLocation}>{item.location}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.content}>
          <Text style={styles.title}>Active Mandate</Text>
          {mandateList?.map((mandate, index) => (
            <Card
              key={index}
              name={mandate.company_name}
              description={mandate.description}
              amountLabel="MRP: "
              amount={`${mandate.mrr.mrr_amount} ${mandate.mrr.mrr_amount_in}`}
              roundSizeLabel="Round Size: "
              roundSize={`${mandate.round_size.round_size_amount} ${mandate.round_size.round_size_amount_in}`}
              valuationLabel="Valuation: "
              valuation={`${mandate.valuation.valuation_amount} ${mandate.valuation.valuation_amount_in}`}
              investmentLabel="Commitment: "
              investment={`${mandate.commitment.commitment_amount} ${mandate.commitment.commitment_amount_in}`}
            />
          ))}
          <Text style={styles.title}>Calendar Events</Text>
          {calendarEvents.map((event, index) =>
            renderCalendarItem(event, index),
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
