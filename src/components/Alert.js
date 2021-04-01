/* eslint-disable no-alert */
import { Platform, Alert } from 'react-native';
import Strings from '../contants/Strings';

export const AlertOkCancel = (title, question, callback) => {
  const phone = () => {
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

  const web = () => {
    const res = window.confirm(`${title}\n${question}`);
    if (res) callback();
  };

  const AlertOkCancelPlatform = Platform.select({
    android: () => phone(),
    ios: () => phone(),
    web: () => web(),
  });

  AlertOkCancelPlatform();
};

export const AlertOk = (title) => {
  const phone = () => Alert.alert(title, '', {
    text: Strings.alert.ok,
    style: 'cancel',
  });

  const AlertOkPlatform = Platform.select({
    android: () => phone(),
    ios: () => phone(),
    web: () => window.alert(title),
  });

  AlertOkPlatform();
};
