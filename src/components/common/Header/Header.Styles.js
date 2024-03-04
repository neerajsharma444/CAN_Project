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
  backIcon: {
    marginTop: verticalScale(30),
    height: horizontalScale(18),
    width: horizontalScale(30),
    marginLeft: verticalScale(20),
  },
  logoContainer: {
    flex: 1,
    right: 20,
    alignItems: 'center',
  },
  canLogo: {
    height: verticalScale(80),
    width: horizontalScale(170),
  },
  headerText: {
    color: '#FFFFFF',
    fontFamily: 'Nunito-Medium',
    fontSize: verticalScale(20),
    alignSelf: 'center',
    marginLeft: verticalScale(20),
  },
});
