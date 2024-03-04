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
  title: {
    fontSize: moderateScale(25),
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
  },
  listContent: {
    paddingTop: verticalScale(10),
  },
  calendarTitle: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    marginTop: verticalScale(20),
    paddingHorizontal: moderateScale(10),
  },
  calendarItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#00000021',
  },
  calendarDateContainer: {
    backgroundColor: '#fff',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    alignItems: 'center',
    borderColor: '#0A4975',
  },
  calendarDate: {
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-SemiBold',
    color: '#0A4975',
  },
  calendarMonth: {
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-Regular',
    color: '#0A4975',
  },
  calendarInfoContainer: {
    marginHorizontal: moderateScale(8),
  },
  calendarEvent: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
    textDecorationLine: 'underline',
    color: '#000000',
  },
  calendarAbout: {
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    color: '#000000A8',
  },
  calendarTimeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(4),
  },
  calendarLocationContainer: {
    flexDirection: 'row',
    marginHorizontal: moderateScale(20),
  },
  calendarIcon: {
    marginRight: moderateScale(4),
  },
  calendarTime: {
    fontSize: moderateScale(14),
    fontFamily: 'Nunito-SemiBold',
  },
  calendarLocationIcon: {
    // marginRight: moderateScale(20),
  },
  calendarLocation: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(14),
  },
});

export default styles;
