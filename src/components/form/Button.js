import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, ActivityIndicator,
} from 'react-native';

import Colors from '../../contants/Colors';
import Strings from '../../contants/Strings';

export default ({
  textStyle, style, screen, title, onPress, textButton, loading = false,
}) => {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.mainColor,
      shadowColor: 'black',
      shadowOpacity: 0.9,
      elevation: 10,
    },
    textButton: {
      borderRadius: 25,
      height: 50,
      textDecorationLine: 'underline',
    },
    text: {
      color: Colors.mainTextcolor,
      fontWeight: 'bold',
    },
    textParam: textStyle,
  });

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[textButton ? styles.textButton : styles.button, style]}
    >
      { loading
        ? <ActivityIndicator color={Colors.mainTextcolor} size="large" />
        : (
          <Text style={[styles.text, styles.textParam]}>
            {Strings.screens[screen].button[title]}
          </Text>
        )}
    </TouchableOpacity>
  );
};
