import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#00000040',
    borderRadius: 10,
    padding: 8,
    marginTop: 20,
  },
  cardContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  titleContainer: {
    marginLeft: 10,
  },
  cardTitle: {
    color: '#0A4975',
    fontSize: 20,
  },
  cardText: {
    marginBottom: 5,
    fontFamily: 'Nunito-SemiBold',
    color: '#000000A8',
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetails: {
    fontFamily: 'Nunito-Bold',
    color: '#000000A8',
    fontSize: 14,
    marginBottom: 3,
  },
  text: {
    fontFamily: 'Nunito-Regular',
    color: '#000000A8',
    fontSize: 14,
  },
});

export default styles;
