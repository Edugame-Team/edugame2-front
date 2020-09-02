import * as React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import Strings from '../../contants/Strings';

const styles = StyleSheet.create({
  input: {
    width: '100%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
  },
});

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
  // console.log(input);
  //
  // if(props.focus)
  //  input.focus();

  return (
    <View style={[styles.input, style]}>
      <TextInput
        style={styles.inputText}
        value={value}
        onChangeText={onChangeText}
        ref={input}
        placeholder={Strings.screens[screen].input[placeholder]}
        placeholderTextColor={placeholderTextColor}
        errorStyle={{ color: errorColor !== undefined ? errorColor : 'red' }}
        errorMessage={Strings.screens[screen].input[errorMessage]}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};
