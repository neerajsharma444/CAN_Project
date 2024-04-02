import {StyleSheet} from 'react-native';
import {verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    padding: moderateScale(15),
  },
  questionText: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  helpButton: {
    fontSize: moderateScale(20),
    marginTop: moderateScale(10),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
    textTransform: 'capitalize',
  },
  inputContainer: {
    marginTop: moderateScale(10),
  },
  inputTextContainer: {
    marginBottom: moderateScale(10),
  },
  inputLabelText: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  textInput: {
    width: '100%',
    height: verticalScale(110),
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(1),
    textAlignVertical: 'top',
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
  cancelButtonStyle: {
    width: '45%',
    marginTop: moderateScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: moderateScale(10),
    backgroundColor: '#00000040',
  },
  postButtonStyle: {
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
