// LoginStyles.js
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginContainer: {
    marginTop: -45,
    margin: 20,
    padding: 20,
    height: 361,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
    elevation: 5,
    shadowRadius: 3,
  },
  title: {
    fontSize: 30,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputLabel: {
    fontFamily: 'Nunito-Regular',
    fontSize: 18,
    color: '#000000A8',
  },
  input: {
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
  passwordInput: {
    paddingLeft: 10,
  },
  eyeIcon: {
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
  signupLink: {
    fontSize: 14,
    color: '#0A4975',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
