import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imgContainer: {
    height: 250,
    backgroundColor: '#0A4975',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    marginTop: -55,
    margin: 20,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontFamily: 'Nunito-SemiBold',
    marginBottom: 20,
  },
  text: {
    color: '#000000A8',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0A49755E',
    borderRadius: 8,
    paddingLeft: 10,
    marginTop: 5,
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
  },
  registerText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
  acct: {
    marginTop: 10,
    color: '#0A4975',
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    marginTop: '20%',
    backgroundColor: '#FFFFFF',
    height: 250,
    width: '90%',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    color: '#000000A8',
    marginBottom: 20,
    fontSize: 19,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#FFBD59',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    width: '60%',
  },
  continueButtonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Nunito-SemiBold',
  },
});

export default styles;
