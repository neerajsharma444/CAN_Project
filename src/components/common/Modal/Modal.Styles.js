import {StyleSheet} from 'react-native';
import {verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: verticalScale(20),
    backgroundColor: '#FFFFFF',
    height: verticalScale(250),
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: '#000000A8',
    marginBottom: verticalScale(20),
    fontSize: verticalScale(19),
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: verticalScale(10),
    width: '60%',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: verticalScale(16),
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
