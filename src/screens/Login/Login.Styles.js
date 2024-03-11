import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    marginTop: -moderateScale(45),
    margin: moderateScale(20),
    padding: moderateScale(20),
    height: moderateScale(361),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    justifyContent: 'space-between',
    elevation: moderateScale(5),
    shadowRadius: moderateScale(3),
  },
  title: {
    fontSize: moderateScale(30),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: moderateScale(18),
    color: '#000000A8',
    borderColor: '#0A49755E',
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  passwordContainer: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateScale(5),
  },
  passwordInput: {
    paddingLeft: moderateScale(10),
  },
  eyeIcon: {
    margin: moderateScale(15),
    marginRight: moderateScale(15),
  },
  errorText: {
    color: 'red',
    fontSize: 13,
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
  signupLink: {
    fontSize: moderateScale(14),
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
