import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    padding: moderateScale(15),
  },
  headingText: {
    fontSize: moderateScale(22),
    color: '#000000',
    marginBottom: moderateScale(10),
    fontFamily: 'Nunito-SemiBold',
  },
  forumItemContainer: {
    padding: moderateScale(15),
    elevation: moderateScale(5),
    shadowRadius: 0,
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
    borderWidth: moderateScale(0.4),
    shadowColor: 'black',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: moderateScale(2)},
    borderColor: 'rgba(0, 0, 0, 0.25)',
  },
  forumItemTitle: {
    fontSize: moderateScale(20),
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },
  forumItemText: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
