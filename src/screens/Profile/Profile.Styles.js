import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: horizontalScale(20),
    paddingTop: verticalScale(20),
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: verticalScale(20),
  },
  imageContainer: {
    marginBottom: verticalScale(20),
  },
  profileImage: {
    backgroundColor: '#D9D9D9',
    borderRadius: moderateScale(100),
    height: verticalScale(90),
    width: verticalScale(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    marginBottom: verticalScale(20),
  },
  label: {
    fontSize: moderateScale(18),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
    marginTop: verticalScale(20),
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: horizontalScale(10),
    marginTop: verticalScale(10),
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    height: verticalScale(50),
  },
  dateContainer: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    height: verticalScale(50),
    marginTop: verticalScale(5),
  },
  inputDate: {
    paddingLeft: horizontalScale(10),
    color: '#000000A8',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-Regular',
    flex: 1,
  },
  dateIcon: {
    margin: moderateScale(15),
    marginRight: moderateScale(15),
  },
});

export default styles;
