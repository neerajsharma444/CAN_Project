import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, ActivityIndicator} from 'react-native';
import Header from '@components/common/Header/Header';
import Card from '@components/common/Card/Card';
import styles from './Home.Styles';
import IMAGES from '@assets/images';
import {useFetchMendateListMutation} from '@redux/services/mendateService';
import {useGetCalendarEventsMutation} from '@redux/services/eventService';

const Home = ({navigation}) => {
  const [mandateList, setMandateList] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [startDate, setStartDate] = useState('3/04/2024');
  const [endDate, setEndDate] = useState('4/04/2024');

  const [fetchMendateData] = useFetchMendateListMutation();
  const [fetchCalendarEvents] = useGetCalendarEventsMutation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [mandateResponse, calendarResponse] = await Promise.all([
          fetchMendateData().unwrap(),
          fetchCalendarEvents({
            start_date: startDate,
            end_date: endDate,
          }),
        ]);
        setMandateList(mandateResponse?.result);
        setCalendarEvents(calendarResponse?.data?.result);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };
    fetchData();
  }, [fetchMendateData, fetchCalendarEvents]);

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
          {loading ? (
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          ) : (
            <>
              <Text style={styles.title}>Active Mandate</Text>
              {mandateList.map((mandate, index) => (
                <Card
                  key={index}
                  name={mandate.company_name}
                  description={mandate.description}
                  logo={mandate.logo}
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
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
