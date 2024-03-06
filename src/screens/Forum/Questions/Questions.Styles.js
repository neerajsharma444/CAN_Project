import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    padding: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputContainer: {
    marginTop: moderateScale(10),
  },
  textInputContainer: {
    marginBottom: moderateScale(10),
  },
  inputLabel: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  dropdown: {
    width: '100%',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },
  textInput: {
    width: '100%',
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },
  helpText: {
    fontSize: moderateScale(16),
    color: '#00000073',
    fontFamily: 'Nunito-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    backgroundColor: '#00000040',
  },
  postButton: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    backgroundColor: '#FFBD59',
  },
  buttonText: {
    fontSize: moderateScale(16),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
