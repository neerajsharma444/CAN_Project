import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  homeContainer: {
    marginHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
  },
  title: {
    fontSize: 25,
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 10,
  },
  calendarTitle: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    marginTop: 20,
  },
  calendarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#00000021',
  },
  calendarDate: {
    fontSize: 18,
    fontFamily: 'Nunito-SemiBold',
    color: '#0A4975',
  },
  calendarEvent: {
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
  calendarAbout: {
    fontSize: 16,
    fontFamily: 'Nunito-Regular',
    color: '#000000A8',
  },
  calendarTime: {
    fontSize: 14,
    fontFamily: 'Nunito-SemiBold',
  },
  calendarLocation: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: 14,
  },
});

export default styles;
