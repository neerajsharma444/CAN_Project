import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale, horizontalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    paddingHorizontal: moderateScale(20),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: verticalScale(10),
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
    marginTop: verticalScale(5),
    paddingRight: horizontalScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: '#00000021',
    paddingVertical: 10,
  },
  calendarDateContainer: {
    backgroundColor: '#fff',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    padding: horizontalScale(14),
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
    textTransform: 'capitalize',
    maxWidth: '99%',
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
  calendarLocation: {
    fontFamily: 'Nunito-SemiBold',
    fontSize: moderateScale(14),
  },
});

export default styles;
