import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Image } from 'react-native-elements';

const Item = ({ item, style }) => (
  <View style={style}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: item.img }}
    >
      <Text style={[styles.text, { color: item.color }]}>
        {item.text}
      </Text>
    </Image>
  </View>
);

let styles = StyleSheet.create({
  image: {
    height: 115,
  },
  text: {
    textAlign: 'center',
    marginTop: 'auto',
  },
});

export default Item;
