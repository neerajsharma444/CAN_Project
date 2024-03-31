import {StyleSheet} from 'react-native';
import {moderateScale, verticalScale} from '@utils/Metrics';
import {horizontalScale} from '../../../utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    padding: moderateScale(15),
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: moderateScale(22),
    color: '#000000',
    marginBottom: verticalScale(10),
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'capitalize',
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
  addAnswer: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#0A4975',
    paddingHorizontal: horizontalScale(7),
    borderRadius: moderateScale(8),
    paddingBottom: verticalScale(8),
    marginTop: verticalScale(4),
    alignSelf: 'flex-start',
    fontFamily: 'Nunito-Regular',
  },
  queryContainer: {
    marginTop: verticalScale(20),
  },
  queryText: {
    fontSize: moderateScale(16),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
