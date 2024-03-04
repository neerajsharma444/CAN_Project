import React, {useState} from 'react';
import {Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Header from '@components/common/Header/Header';
import {Calendar} from 'react-native-calendars';
import IMAGES from '@assets/images';
import styles from './Schedule.Styles';

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const events = [
    {
      topic: 'Pitch Session 1: Jasper Infotech',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda:
        'Pitch Session for 3 startups: Jasper Infotech, My Home, XYZ housing',
      meeting: ' https://zoom.us/meeting_id/32432',
      document: 'PDF',
    },
    {
      topic: 'Pitch Session 2: My Home',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda: 'Pitch Session for My Home',
      meeting: ' https://zoom.us/meeting_id/32432',
      document: 'PDF',
    },
    {
      topic: 'Pitch Session 3: My Home',
      type: 'Pitch Session',
      time: '4 PM',
      location: 'Virtual',
      agenda: 'Pitch Session for My Home',
      meeting: ' https://zoom.us/meeting_id/32432',
      document: 'PDF',
    },
  ];

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
              <Text style={styles.topicText}>{item.topic}</Text>
              <View style={styles.item}>
                <Text style={styles.typeText}>Type: {item.type}</Text>
                <View style={styles.itemInfo}>
                  <Image source={IMAGES.date} />
                  <Text style={styles.infoText}>{item.time}</Text>
                </View>
                <View style={styles.itemInfo}>
                  <Image source={IMAGES.map} />
                  <Text style={styles.infoText}>{item.location}</Text>
                </View>
              </View>
              <Text style={styles.agendaText}>{item.agenda}</Text>
              <View style={styles.meetingContainer}>
                <Text style={styles.meetingText}>Meeting URL:</Text>
                <TouchableOpacity>
                  <Text style={styles.meetingUrl}>{item.meeting}</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.pdfText}>Pitch Deck: {item.document}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Schedule;
