import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modal';

const LogModal = ({ visible, setModal, children }) => {
  return (
    <View>
      <Modal
        isVisible={visible}
        onBackdropPress={() => setModal(false)}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        style={{
          backgroundColor: '#445566',
          maxHeight: 300,
          marginTop: 250,
          borderRadius: 8,
          padding: 20,
        }}
      >
        <View style={{ flex: 1 }}>{children}</View>
      </Modal>
    </View>
  );
};

export default LogModal;

const styles = StyleSheet.create({});
