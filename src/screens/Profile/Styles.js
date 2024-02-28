import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  profileContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 22,
    color: '#000000',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 20,
  },
  text: {
    color: '#000000A8',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 10,
  },
  dateContainer: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  inputDate: {
    paddingLeft: 10,
  },
  dateIcon: {
    margin: 15,
    marginRight: 15,
  },
});

export default styles;
