import React, { useState } from 'react';

import { StyleSheet, TextInput } from 'react-native';

import Strings from '@constants/Strings';

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
  const [borderWidth, setBorderWidth] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('white');

  const onFocus = () => {
    setBorderWidth(2);
    setBackgroundColor('#D2F2EE');
  };

  const onBlur = () => {
    setBorderWidth(0);
    setBackgroundColor('white');
  };

  return (
    <TextInput
      style={[styles.input, style, { borderWidth, backgroundColor }]}
      value={value}
      onChangeText={onChangeText}
      onFocus={() => onFocus()}
      onBlur={() => onBlur()}
      ref={input}
      underlineColorAndroid="transparent"
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
    height: 55,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    borderRadius: 15,
    borderColor: '#53DECE',
  },
});
