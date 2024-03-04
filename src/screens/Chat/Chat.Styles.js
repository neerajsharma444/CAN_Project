import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../utils/Metrics';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },

  subContainer: {
    padding: horizontalScale(15), // Use scaling for padding
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  txtInput: {
    flex: 1,
    paddingLeft: horizontalScale(10), // Use scaling for padding
    borderWidth: moderateScale(1), // Use scaling for borderWidth
    borderRadius: moderateScale(10), // Use scaling for borderRadius
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },

  sendBtn: {
    position: 'absolute',
    right: horizontalScale(15), // Use scaling for positioning
  },

  chatsContainer: {
    // backgroundColor: 'red',
  },

  myMsgContainer: {
    marginBottom: verticalScale(10), // Use scaling for margin
    alignItems: 'flex-end',
  },

  otherMsgContainer: {
    padding: moderateScale(10), // Use scaling for padding
    marginBottom: verticalScale(5), // Use scaling for margin
    borderRadius: moderateScale(10), // Use scaling for borderRadius
    alignItems: 'flex-start',
  },

  myTxtContainer: {
    padding: moderateScale(10), // Use scaling for padding
    marginBottom: verticalScale(5), // Use scaling for margin
    borderRadius: moderateScale(10), // Use scaling for borderRadius
    backgroundColor: 'rgba(10, 73, 117, 0.1)',
  },

  otherTxtContainer: {
    padding: moderateScale(10), // Use scaling for padding
    marginBottom: verticalScale(5), // Use scaling for margin
    borderRadius: moderateScale(10), // Use scaling for borderRadius
    backgroundColor: 'rgba(218, 218, 218, 0.38)',
  },

  message: {
    fontSize: moderateScale(18), // Use scaling for fontSize
    color: 'rgba(0,0,0,1)',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
