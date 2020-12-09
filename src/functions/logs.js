import Toast from 'react-native-toast-message';

export const errorlog = (error) => {
  Toast.show({
    text1: 'Error',
    text2: error,
    type: 'error',
    position: 'bottom',
  });
};

export const infolog = (msg) => {
  Toast.show({
    text1: msg,
    type: 'info',
    position: 'bottom',
  });
};
