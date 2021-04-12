import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

import Strings from 'EGStrings';

const ToastBody = ({ toast }) => {
  const [show, setShow] = useState(true);

  const text = Strings.toast[toast.text] === undefined
    ? toast.text : Strings.toast[toast.text][toast.type];

  return show && (
  <View style={styles.toast}>
    <View style={[styles.leftBlock, styles[toast.type]]} />
    <Text style={[styles.text]}>
      {text}
    </Text>
    <Icon
      style={styles.hideIcon}
      name="close"
      size={20}
      onPress={() => setShow(false)}
    />
  </View>
  );
};
export default ToastBody;

const styles = StyleSheet.create({
  hideIcon: {
    margin: 'auto',
    marginRight: 10,
  },
  toast: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 1,
    marginTop: 4,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    padding: 15,
    paddingLeft: 5,
    marginRight: 'auto',
  },
  leftBlock: {
    width: 10,
    marginRight: 10,
    borderBottomLeftRadius: 2,
    borderTopLeftRadius: 2
  },
  success: {
    backgroundColor: 'green',
  },
  error: {
    backgroundColor: 'red',
  }
});
