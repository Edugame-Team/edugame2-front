import React from 'react';
import { StyleSheet, View } from 'react-native';

import ToastBody from './ToastBody';

const defaultToastValues = {
  type: 'success',
  timeoutHide: 3000,
  onHide: () => {}
};

const setListToast = (action) => {
  const list = Toast.ref.state.listToast;
  action(list);
  Toast.ref.setState(list);
};

class Toast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { listToast: [] };
  }

  render() {
    const { listToast } = this.state;

    return (
      <View style={styles.container}>
        {listToast.map((toast) => (
          <ToastBody toast={toast} />
        ))}
      </View>
    );
  }
}

Toast.setRef = (ref) => {
  Toast.ref = ref;
};

Toast.show = (props) => {
  const toast = { ...defaultToastValues, ...props };
  setListToast((list) => list.push(toast));

  setTimeout(() => {
    setListToast((list) => {
      const index = list.findIndex((elem) => elem === toast);
      delete list[index];
    });
    toast.onHide();
  }, toast.timeoutHide);
};
export default Toast;

const styles = StyleSheet.create({
  container: {
    padding: 4,
    width: '100%',
    maxWidth: 450,
    bottom: 0,
    position: 'absolute',
    fontWeight: 'bold',
    right: 1
  },
});
