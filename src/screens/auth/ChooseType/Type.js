import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, ImageBackground, View,
} from 'react-native';
import Colors from '../../../contants/Colors';

/* eslint-disable global-require */
const backgroundImages = [
  require('../../../../assets/img/type/eleve.jpg'),
  require('../../../../assets/img/type/parent.jpg'),
  require('../../../../assets/img/type/prof.jpg'),
];
/* eslint-enable global-require */

const Type = ({ user, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    activeOpacity={0.6}
    onPress={() => navigation.navigate('Login')}
  >
    <ImageBackground source={backgroundImages[user.id - 1]} style={styles.image}>
      <View style={styles.filter}>
        <Text style={styles.text}>{user.choose_type}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);
export default Type;

const styles = StyleSheet.create({
  item: {
    flexDirection: 'column',
    width: '33%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    color: Colors.white,
    marginBottom: 25,
    marginLeft: 5,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  filter: {
    height: '100%',
    backgroundColor: Colors.filter,
    justifyContent: 'flex-end',
  },
});
