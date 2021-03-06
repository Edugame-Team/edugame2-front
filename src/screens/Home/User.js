import * as React from 'react';
import {
  Platform, StyleSheet, Text, View,
} from 'react-native';
import { Card, Image } from 'react-native-elements';
import TextString from '../../components/form/TextString';

const User = ({ user }) => (
  <Card style={styles.card}>
    <View style={styles.levelBar}>
      <View
        style={[styles.levelBarPurcentage, { width: `${user.purcentage}%` }]}
      />
    </View>

    <Image
      style={styles.image}
      resizeMode="cover"
      source={{ uri: user.avatar }}
    />

    <View style={styles.cardText}>
      <Text style={styles.name}>{user.name}</Text>
      <TextString style={styles.levelText} screen="home" text="level" />
      <Text>
        {' '}
        {user.level}
      </Text>
    </View>
  </Card>
);

let styles = StyleSheet.create({
  levelBarPurcentage: {
    height: Platform.select({
      ios: 6,
      android: 6,
      web: 5,
    }),
    backgroundColor: 'red',
  },
  levelBar: {
    height: 10,
    borderColor: 'gray',
    borderWidth: 2,
    marginBottom: 5,
  },
  cardText: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  levelText: {
    marginLeft: 'auto',
  },
  card: {},
  image: {
    height: 115,
    width: 115,
  },
});

export default User;
