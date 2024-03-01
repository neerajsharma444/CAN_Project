import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgContainer: {
    height: moderateScale(350),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: moderateScale(30),
    borderBottomRightRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
  },
  resetContainer: {
    marginTop: moderateScale(-45),
    margin: moderateScale(20),
    padding: moderateScale(20),
    height: moderateScale(250),
    backgroundColor: '#fff',
    borderRadius: moderateScale(20),
    justifyContent: 'space-between',
    shadowColor: '#000000',
    elevation: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(30),
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: moderateScale(20),
  },
  text: {
    color: '#000000A8',
    fontSize: moderateScale(16),
    fontFamily: 'Nunito-SemiBold',
    marginTop: moderateScale(10),
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#0A49755E',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    marginTop: moderateScale(5),
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: moderateScale(20),
  },
  resetButton: {
    backgroundColor: '#FFBD59',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#0000001A',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    width: '45%',
  },
  buttonText: {
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: '20%',
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
