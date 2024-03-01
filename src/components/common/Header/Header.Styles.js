import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '@utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {
    height: horizontalScale(70),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: horizontalScale(30),
    borderBottomRightRadius: horizontalScale(30),
    flexDirection: 'row',
  },
  drawerIcon: {
    marginTop: verticalScale(30),
    marginLeft: verticalScale(20),
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  canLogo: {
    height: verticalScale(80),
    width: horizontalScale(170),
  },
});
