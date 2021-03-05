import * as React from 'react';
import {
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import ImageBackground from 'react-native-web/dist/exports/ImageBackground';
import View from 'react-native-web/dist/exports/View';
import Colors from '@constants/Colors';

// const imgType = [
//  require('@assets/static/type/student.jpg'),
//  require('@assets/static/type/prof.jpg'),
//  require('@assets/static/type/parent.jpg'),
// ];

const Type = ({ user, navigation }) => (
  <TouchableOpacity
    style={styles.item}
    activeOpacity={0.6}
    onPress={() => navigation.navigate('Login')}
  >
    <ImageBackground
      // source={{ uri: `assets:img/type/${user.img}` }}
      // source={require('@expo/snack-static/react-native-logo.png')}
      source={require('../../../../assets/static/type/student.jpg')}
      style={styles.image}
    >
      <View style={styles.filter}>
        <Text style={styles.text}>{user.img}</Text>
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
    backgroundSize: 'cover',
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'stretch',
    position: 'absolute',
  },
  text: {
    textAlign: 'center',
    fontSize: 32,
    paddingVertical: '40',
    color: Colors.white,
    marginBottom: 25,
    marginLeft: 5,
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  filter: {
    height: '100%',
    backgroundColor: Colors.filter,
    justifyContent: 'flex-end',
  },
});
