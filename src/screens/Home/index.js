import * as React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import User from './User';

const Home = () => {
  const data = [
    {
      id: 1,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 2,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 3,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 4,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 5,
      name: 'toto',
      level: 9,
      purcentage: 80,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 6,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 7,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 8,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
    {
      id: 9,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    },
  ];

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.containerTop}>
        <View style={styles.container}>
          {data.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
