import * as React from 'react';
import {
  View, StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import Colors from '../../../contants/Colors';

const Type = ({ user, navigation }) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity
      activeOpacity={0.6}
      style={styles.item}
      onPress={() => navigation.navigate('Login')}
    >
      <Text style={styles.title}>{user.choose_type}</Text>
    </TouchableOpacity>
  </View>
);
export default Type;

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.mainColor,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    padding: 20,
    flex: 1,
  },
  title: {
    color: Colors.mainTextcolor,
    fontSize: 32,
  },
});
