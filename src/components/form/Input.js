import * as React from 'react';
import { StyleSheet, TextInput } from 'react-native';

import Strings from '../../contants/Strings';

export default ({
  style,
  value,
  onChangeText,
  screen,
  placeholder,
  placeholderTextColor,
  errorColor,
  errorMessage,
  secureTextEntry,
}) => {
  const input = React.createRef();

  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      ref={input}
      placeholder={Strings.screens[screen].input[placeholder]}
      placeholderTextColor={placeholderTextColor}
      errorStyle={{ color: errorColor !== undefined ? errorColor : 'red' }}
      errorMessage={Strings.screens[screen].input[errorMessage]}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#D2F2EE',
    borderRadius: 10,
  },
});
