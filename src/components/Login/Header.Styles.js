import {StyleSheet} from 'react-native';
import {verticalScale} from '../../utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgContainer: {
    height: verticalScale(750),
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
