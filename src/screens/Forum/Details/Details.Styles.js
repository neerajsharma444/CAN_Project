import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    padding: moderateScale(15),
  },
  heading: {
    fontSize: moderateScale(22),
    color: '#000000',
    marginBottom: moderateScale(10),
    fontFamily: 'Nunito-SemiBold',
  },
  container: {
    padding: moderateScale(15),
    elevation: moderateScale(5),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.4),
    shadowColor: 'black',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: verticalScale(2)},
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  question: {
    fontSize: moderateScale(20),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },
  answer: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  queryContainer: {
    marginTop: verticalScale(30),
  },
  queryText: {
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
  detailList: {
    marginBottom: moderateScale(10),
  },
});

export default styles;
