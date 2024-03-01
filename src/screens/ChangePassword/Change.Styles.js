import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    padding: moderateScale(20),
  },
  title: {
    fontSize: moderateScale(22),
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
  },
  inputContainer: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  label: {
    fontSize: moderateScale(18),
    marginTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  input: {
    width: '100%',
    marginTop: moderateScale(10),
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(0.2),
  },
});

export default styles;
