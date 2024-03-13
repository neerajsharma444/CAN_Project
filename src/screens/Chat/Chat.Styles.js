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
  },

  txtInput: {
    flex: 1,
    marginHorizontal: horizontalScale(15),
    paddingLeft: horizontalScale(10),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(10),
    borderColor: 'rgba(10, 73, 117, 0.37)',
  },
  wrapperStyle: {
    left: {backgroundColor: '#F0F0F0'},
    right: {backgroundColor: '#5555FF'},
  },
  sendBtn: {
    position: 'absolute',
    right: horizontalScale(30),
    bottom: verticalScale(12),
  },
});

export default styles;
