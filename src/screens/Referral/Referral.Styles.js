import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    padding: moderateScale(15),
  },
  heading: {
    fontSize: moderateScale(20),
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },
  inputContainer: {
    marginTop: moderateScale(20),
  },
  inputLabel: {
    fontSize: moderateScale(18),
    marginBottom: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  input: {
    borderRadius: moderateScale(8),
    paddingLeft: moderateScale(10),
    borderWidth: moderateScale(0.2),
    color: '#00000045',
  },
  referralContainer: {
    padding: moderateScale(10),
    elevation: moderateScale(5),
    shadowRadius: moderateScale(2),
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: moderateScale(2)},
  },
  referralRow: {
    marginBottom: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: moderateScale(18),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },
  referralData: {
    fontSize: moderateScale(16),
    marginLeft: moderateScale(10),
    color: '#00000080',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
