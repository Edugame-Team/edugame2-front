import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import Strings from '../../contants/Strings';

/* <Button
      style={style}
      title={Strings.screens[screen].button[title]}
      onPress={() => onPress()}
    />
    */

export default ({
  textStyle, style, screen, title, onPress,
}) => {
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      borderRadius: 25,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#53DECE',
    },
    text: textStyle,
  });

  return (
    <TouchableOpacity onPress={() => onPress()} style={[styles.button, style]}>
      <Text style={styles.text}>{Strings.screens[screen].button[title]}</Text>
    </TouchableOpacity>
  );
};
