import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainContainer: {
    marginTop: -8,
    height: horizontalScale(100),
    justifyContent: 'center',
    backgroundColor: '#0A4975',
  },
  canLogo: {
    marginTop: verticalScale(15),
    height: verticalScale(80),
    width: horizontalScale(200),
    marginHorizontal: horizontalScale(30),
  },
  closeIcon: {
    position: 'absolute',
    top: moderateScale(20),
    right: moderateScale(20),
    zIndex: 1,
  },
  drawerContent: {
    marginTop: moderateScale(20),
  },
  drawerItem: {
    marginHorizontal: horizontalScale(5),
    height: moderateScale(40),
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
  },
  imgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: horizontalScale(20),
    paddingHorizontal: horizontalScale(10),
  },
  drawerItemText: {
    fontSize: moderateScale(18),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    marginLeft: moderateScale(10),
  },
});

export default styles;
