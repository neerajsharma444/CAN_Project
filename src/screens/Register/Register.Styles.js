import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  registerContainer: {
    marginTop: moderateScale(-55),
    margin: moderateScale(20),
    padding: moderateScale(20),
    backgroundColor: '#FFFFFF',
    borderRadius: moderateScale(20),
    justifyContent: 'space-between',
    elevation: moderateScale(5),
  },
  title: {
    fontSize: moderateScale(30),
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: moderateScale(20),
  },
  text: {
    color: '#000000A8',
    fontSize: moderateScale(18),
    fontFamily: 'Nunito-Regular',
    marginTop: moderateScale(10),
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  registerButton: {
    marginTop: moderateScale(20),
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
  },
  registerText: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  acct: {
    marginTop: moderateScale(10),
    color: '#0A4975',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: moderateScale('20%'),
    backgroundColor: '#FFFFFF',
    height: moderateScale(250),
    width: '90%',
    borderRadius: moderateScale(20),
    padding: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: '#000000A8',
    marginBottom: moderateScale(20),
    fontSize: moderateScale(19),
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    width: '60%',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
