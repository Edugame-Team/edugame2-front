import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native-elements';
import Toast from 'EGComponents/Toast/';

const Item = ({ item, style }) => (
  <View style={style}>
    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: item.img }}
      onPress={() => {
        Toast.show({
          text: 'connection',
        });
      }}
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
