import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, ImageBackground, View,
} from 'react-native';
import Colors from 'EGColors';

const Type = ({ user, navigation, typeStyle }) => (
  <TouchableOpacity
    activeOpacity={0.6}
    style={[typeStyle]}
    onPress={() => navigation.navigate('Login')}
  >
    <ImageBackground source={user.img} style={styles.image}>
      <View style={styles.filter}>
        <Text style={styles.text}>{user.choose_type}</Text>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);
export default Type;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
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
