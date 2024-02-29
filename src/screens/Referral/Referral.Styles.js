import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  formContainer: {
    padding: 15,
  },
  heading: {
    fontSize: 20,
    color: '#000000',
    fontFamily: 'Nunito-Regular',
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 10,
    color: '#000000A8',
    fontFamily: 'Nunito-Regular',
  },
  input: {
    borderRadius: 8,
    paddingLeft: 10,
    borderWidth: 0.2,
    color: '#00000045',
  },
  referralListContainer: {
    padding: 15,
  },
  referralHeading: {
    fontSize: 20,
    color: '#000000',
    marginBottom: 10,
    fontFamily: 'Nunito-Regular',
  },
  referralContainer: {
    padding: 10,
    elevation: 5,
    shadowRadius: 2,
    borderRadius: 10,
    marginBottom: 10,
    shadowOpacity: 0.8,
    shadowColor: '#00000040',
    backgroundColor: '#ffffff',
    shadowOffset: {width: 0, height: 2},
  },
  referralRow: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    color: '#0A4975',
    fontFamily: 'Nunito-SemiBold',
  },
  referralData: {
    fontSize: 16,
    marginLeft: 10,
    color: '#00000080',
    fontFamily: 'Nunito-Regular',
  },
});

export default styles;
