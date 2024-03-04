import {moderateScale, verticalScale} from '../../../utils/Metrics';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalSubContainer: {
    backgroundColor: '#FFFFFF',
    width: '90%',
    padding: moderateScale(31),
    borderRadius: moderateScale(10),
    elevation: moderateScale(20),
  },
  modalText: {
    fontFamily: 'Nunito-Medium',
    fontSize: moderateScale(19),
    color: '#000000A8',
    paddingTop: verticalScale(10),
  },
  resetHeading: {
    fontSize: moderateScale(30),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000',
  },
});

export default styles;
