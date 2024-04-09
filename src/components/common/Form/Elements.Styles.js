import {moderateScale, verticalScale} from '@utils/Metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
