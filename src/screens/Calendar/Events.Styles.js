import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    paddingTop: verticalScale(20),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  heading: {
    fontSize: moderateScale(22),
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
  },
  selectDateContainer: {
    marginTop: verticalScale(10),
  },
  selectDateText: {
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    color: '#666',
  },
  itemContainer: {
    marginVertical: verticalScale(10),
    borderBottomWidth: moderateScale(0.2),
    backgroundColor: '#fff',
    padding: moderateScale(15),
  },
  topicText: {
    fontSize: moderateScale(16),
    marginBottom: verticalScale(5),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'capitalize',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  typeText: {
    fontSize: moderateScale(16),
    color: '#000',
    fontFamily: 'Nunito-Medium',
    textTransform: 'capitalize',
  },
  eventText: {
    fontSize: moderateScale(16),
    color: '#000000A8',
    fontFamily: 'Nunito-Medium',
    textTransform: 'capitalize',
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoText: {
    fontSize: moderateScale(14),
    marginLeft: moderateScale(6),
    color: '#666',
    fontFamily: 'Nunito-Regular',
    flexWrap: 'wrap',
    maxWidth: '85%',
  },
  agendaText: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(5),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    textTransform: 'capitalize',
    marginBottom: verticalScale(5),
  },
  meetingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  meetingText: {
    fontSize: moderateScale(14),
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
  },
  meetingUrl: {
    fontSize: moderateScale(16),
    color: '#06F',
    fontFamily: 'Nunito-SemiBold',
  },
  pitchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pitchText: {
    color: '#000',
    marginTop: verticalScale(10),
  },
  pdfText: {
    fontSize: moderateScale(14),
    marginTop: verticalScale(10),
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Nunito-Medium',
  },
});

export default styles;
