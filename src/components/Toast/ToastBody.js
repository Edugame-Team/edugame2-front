import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Strings from 'EGStrings';

const ToastBody = ({ toast }) => (
  <View style={styles.toast}>
    <View style={[styles.leftBlock, styles[toast.type]]} />
    <Text style={[styles.text]}>
      {Strings.toast[toast.text][toast.type]}
    </Text>
  </View>
);
export default ToastBody;

const styles = StyleSheet.create({
  toast: {
    height: 30,
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18
  },
  leftBlock: {
    width: 5,
    height: '100%',
    marginRight: 10,
    borderRadius: 2
  },
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  }
});
