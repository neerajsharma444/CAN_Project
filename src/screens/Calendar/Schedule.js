import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
} from 'react-native';
import Header from '@components/common/Header/Header';
import {Calendar} from 'react-native-calendars';
import IMAGES from '@assets/images';
import styles from './Schedule.Styles';
import {useSelector} from 'react-redux';
import {fetchEvents} from '@utils/services/api';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [events, setEvents] = useState([]);
  const token = useSelector(state => state.user?.token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Token:', token.trim());
        if (token.trim()) {
          const eventsData = await fetchEvents(token);
          console.log('Evnets dtaa...', eventsData);
          setEvents(eventsData);
        }
      } catch (error) {
        console.log('Error.........', error);
        console.error(error.message);
        Alert.alert('Error', error.message);
      }
    };
    fetchData();
  }, [token]);

  return (
    <ScrollView>
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

          {events.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.topicText}>{item.title}</Text>
              <View style={styles.item}>
                <Text style={styles.typeText}>Type: {item.event_type}</Text>
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
                <TouchableOpacity>
                  <Text style={styles.meetingUrl}> {item.meeting_url}</Text>
                </TouchableOpacity>
              </View>
              {item.file.map((fileUrl, i) => (
                <Text key={i} style={styles.pdfText}>{`File ${
                  i + 1
                }: ${fileUrl}`}</Text>
              ))}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Schedule;
