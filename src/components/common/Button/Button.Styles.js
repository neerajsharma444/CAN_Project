import {StyleSheet} from 'react-native';
import {verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  registerButton: {
    marginTop: verticalScale(20),
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(8),
    paddingVertical: verticalScale(10),
  },
  registerText: {
    color: '#000000',
    fontSize: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
