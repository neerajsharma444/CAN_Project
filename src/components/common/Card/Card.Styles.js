import {StyleSheet} from 'react-native';
import {verticalScale, horizontalScale, moderateScale} from '@utils/Metrics';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: verticalScale(10),
    padding: verticalScale(8),
    marginTop: verticalScale(20),
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(8),
    width: '75%',
  },
  image: {
    height: verticalScale(75),
    width: horizontalScale(120),
    borderRadius: moderateScale(5),
  },
  titleContainer: {
    marginLeft: verticalScale(10),
  },
  cardTitle: {
    color: '#0A4975',
    fontSize: verticalScale(20),
  },
  cardText: {
    marginBottom: verticalScale(5),
    fontFamily: 'Nunito-SemiBold',
    color: '#000000A8',
    fontSize: verticalScale(15),
    maxWidth: '98%',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetails: {
    fontFamily: 'Nunito-Bold',
    color: '#000000A8',
    fontSize: verticalScale(14),
    marginBottom: verticalScale(3),
  },
  text: {
    fontFamily: 'Nunito-Regular',
    color: '#000000A8',
    fontSize: verticalScale(14),
  },
});

export default styles;
