import {StyleSheet} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  slideBackground: {
    flex: 1,
    justifyContent: 'space-between',
  },
  contentContainer: {
    flex: 0.98,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    marginTop: '10%',
  },
  text: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-SemiBold',
    textAlign: 'center',
    fontSize: 24,
  },
  rightContainer: {
    alignSelf: 'flex-end',
  },
  rightArrow: {
    marginBottom: verticalScale(20),
    marginRight: verticalScale(20),
  },
  activeDot: {
    backgroundColor: 'white',
  },
});

export default styles;
