import * as React from 'react';
import {
  FlatList, StyleSheet, ScrollView,
} from 'react-native';
import ItemList from 'EGComponents/ItemList';
import User from './User';

const Home = () => {
  const data = [
    {
      id: 1,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 2,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 3,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 4,
      name: 'toto',
      level: 9,
      purcentage: 40,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 5,
      name: 'toto',
      level: 9,
      purcentage: 80,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 6,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 7,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
    },
    {
      id: 8,
      name: 'toto',
      level: 9,
      purcentage: 20,
      avatar: 'https://cdn.onlinewebfonts.com/svg/img_568656.png',
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
    <ItemList
      data={data}
      renderItem={(item) => <User user={item} />}
    />
  );
};

export default Home;
