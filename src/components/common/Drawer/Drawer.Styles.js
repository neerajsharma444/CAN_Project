import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../../utils/Metrics';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // width: width,
    // height: height,
    // marginTop: 40,
  },
  closeIcon: {
    position: 'absolute',
    top: moderateScale(20),
    right: moderateScale(20),
    zIndex: 1,
  },
  closeText: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#333',
  },
  drawerContent: {
    marginTop: moderateScale(50),
    alignItems: 'center',
  },
  drawerItem: {
    width: '100%',
    height: moderateScale(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0', // Background color of drawer item
    borderRadius: moderateScale(8),
    marginBottom: moderateScale(10),
  },
  drawerItemText: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#333', // Text color of drawer item
  },
});

export default styles;
