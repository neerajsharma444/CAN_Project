import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  Linking,
} from 'react-native';
import Header from '@components/common/Header/Header';
import {Calendar} from 'react-native-calendars';
import IMAGES from '@assets/images';
import styles from './Events.Styles';
import {useSelector} from 'react-redux';
import {useLazyFetchEventsQuery} from '@redux/services/eventService';

const Events = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const token = useSelector(state => state.auth.user?.Token);

  const isValidUrl = url => {
    const urlPattern = /\.(com|org|net|gov|edu)$/i;
    return urlPattern.test(url);
  };
  const handleLinkClick = async url => {
    try {
      let fullUrl =
        url.startsWith('http://') || url.startsWith('https://')
          ? url
          : 'https://' + url;
      console.log('Attempting to open URL:', fullUrl);
      Linking.openURL(fullUrl);
    } catch (error) {
      console.error('Error opening URL: ', error);
      Alert.alert('Error', 'Unable to open URL');
    }
  };

  const [data] = useLazyFetchEventsQuery();

  const fetchData = async () => {
    try {
      console.log('My Token===>', token);
      const eventsData = await data();
      console.log('EVeNTS DATA===>', eventsData);
      const events = eventsData.data.result.map(event => ({
        ...event,
        date: event.date.split('T')[0], // Convert date to YYYY-MM-DD format
      }));
      setEvents(events);
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filteredEvents =
    selectedDate && events.filter(item => item.date === selectedDate);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text style={styles.heading}>Calendar</Text>
          <Calendar
            onDayPress={day => {
              console.log('Date: ', day);
              setSelectedDate(day.dateString);
            }}
            markedDates={{
              [selectedDate]: {
                selected: true,
                selectedColor: '#FFBD59',
                disabledTouchEvent: true,
              },
            }}
            hideExtraDays={true}
          />
          <View style={styles.selectDateContainer}>
            <Text style={styles.selectDateText}>
              {selectedDate ? selectedDate : 'No date selected'}
            </Text>
          </View>
          {filteredEvents?.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.topicText}>{item.title}</Text>
              <View style={styles.item}>
                <Text style={styles.typeText}>Type: </Text>
                <Text style={styles.eventText}>{item.event_type} </Text>
                <View style={styles.itemInfo}>
                  <Image source={IMAGES.date} />
                  <Text style={styles.infoText}>{item.time}</Text>
                </View>
                <View style={styles.itemInfo}>
                  <Image source={IMAGES.map} />
                  <Text style={styles.infoText}>{item.location}</Text>
                </View>
              </View>
              <Text style={styles.agendaText}>{item.description}</Text>
              <View style={styles.meetingContainer}>
                <Text style={styles.meetingText}>Meeting URL:</Text>
                {isValidUrl(item.meeting_url) ? (
                  <TouchableOpacity
                    onPress={() => handleLinkClick(item.meeting_url)}>
                    <Text style={styles.meetingUrl}> {item.meeting_url}</Text>
                  </TouchableOpacity>
                ) : (
                  <Text style={styles.meetingText}> None</Text>
                )}
              </View>
              <View style={styles.pitchContainer}>
                <Text style={styles.pitchText}>Pitch Deck: </Text>
                {item.file.map((fileUrl, i) => (
                  <Text key={i} style={styles.pdfText}>
                    <TouchableOpacity onPress={() => handleLinkClick(fileUrl)}>
                      <Image source={IMAGES.pdf} />
                    </TouchableOpacity>
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Events;
