import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgContainer: {
    height: 340,
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    marginTop: -45,
    margin: 20,
    padding: 20,
    height: 361,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    shadowColor: '#00000040',
    elevation: 20,
    shadowRadius: 3,
  },
  titleLogin: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputText: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#000000A8',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
  },
  passwordContainer: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inputPassword: {
    paddingLeft: 10,
  },
  eyeLogo: {
    margin: 15,
    marginRight: 15,
  },
  resetContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  forgotPassword: {
    fontSize: 14,
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
  loginButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    marginTop: 5,
  },
  loginText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
