import * as React from 'react';

import Toast from 'react-native-toast-message';

import Strings from 'EGStrings';

export default ({
  text1, text2 = '', type = 'success', position = 'bottom'
}) => {
  const string1 = Strings.toast[type][text1];
  let string2 = Strings.toast[type][text2];

  console.log(string2);
  if (string2 === undefined) string2 = '';
  Toast.show({
    type,
    position,
    string1,
    string2
    // visibilityTime: 4000,
    // autoHide: true,
    // topOffset: 30,
    // bottomOffset: 40,
    // onShow: () => {},
    // onHide: () => {},
    // onPress: () => {}
  });
};
