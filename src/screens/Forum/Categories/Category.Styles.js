import {StyleSheet} from 'react-native';
import {moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  subContainer: {
    flex: 1,
    padding: moderateScale(15),
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    textTransform: 'capitalize',
  },
  forumItemText: {
    fontSize: moderateScale(16),
    paddingTop: moderateScale(10),
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
