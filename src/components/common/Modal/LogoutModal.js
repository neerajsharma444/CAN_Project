import React from 'react';
import {Modal, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {verticalScale, moderateScale} from '@utils/Metrics';

const LogoutModal = ({visible, onCancel, onLogOut}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onCancel}>
      <View style={styles.mainContainer}>
        <View style={styles.modalView}>
          <Text style={styles.modalTxt}>Are you sure you want to Logout?</Text>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onCancel} style={styles.cancelBtn}>
              <Text style={styles.btnTxt}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogOut} style={styles.okBtn}>
              <Text style={styles.btnTxt}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  modalView: {
    marginHorizontal: moderateScale(20),
    backgroundColor: 'white',
    borderRadius: moderateScale(20),
    padding: moderateScale(35),
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: verticalScale(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: verticalScale(4),
    elevation: 5,
  },
  modalTxt: {
    fontSize: moderateScale(18),
    color: '#000000',
    marginBottom: verticalScale(20),
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
  btnContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelBtn: {
    width: '40%',
    marginTop: verticalScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    backgroundColor: '#00000040',
  },
  okBtn: {
    width: '40%',
    marginTop: verticalScale(20),
    borderRadius: moderateScale(8),
    paddingVertical: verticalScale(10),
    backgroundColor: '#FFBD59',
  },
  btnTxt: {
    fontSize: moderateScale(14),
    color: '#000000',
    textAlign: 'center',
    fontFamily: 'Nunito-SemiBold',
  },
});
