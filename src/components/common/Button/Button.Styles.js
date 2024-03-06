import {StyleSheet} from 'react-native';
import {verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  registerButton: {
    marginTop: verticalScale(20),
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(8),
    paddingVertical: verticalScale(12),
  },
  registerText: {
    color: '#000000',
    fontSize: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
  cancelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  resetButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    width: '45%',
  },
  cancelButton: {
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(8),
    paddingVertical: verticalScale(10),
    marginTop: verticalScale(20),
    width: '45%',
  },
  resetText: {
    color: '#000000',
    fontSize: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
