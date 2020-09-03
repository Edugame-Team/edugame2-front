/* eslint-disable no-alert */
import { Platform, Alert } from 'react-native';
import Strings from '../contants/Strings';

const phone = (title, question, callback) => {
  Alert.alert(
    title,
    question,
    [
      {
        text: Strings.alert.cancel,
        style: 'cancel',
      },
      {
        text: Strings.alert.ok,
        onPress: () => callback(),
      },
    ],
    { cancelable: false },
  );
};

const web = (title, question, callback) => {
  const res = window.confirm(`${title}\n${question}`);
  if (res) callback();
};

export default (title, question, callback) => {
  const AlertOk = Platform.select({
    android: () => phone(title, question, callback),
    ios: () => phone(title, question, callback),
    web: () => web(title, question, callback),
  });
  AlertOk();
};
