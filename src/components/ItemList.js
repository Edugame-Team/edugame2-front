import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

const ItemList = ({ children, data }) => {
  const renderItem = (users) => (
    <View style={styles.container}>
      {users.map((user) => (
        <User style={styles.user} user={user} />
      ))}
    </View>
  );

  const newData = (toto) => {
    let tmp = [];
    const arr = [];

    toto.forEach((val, index) => {
      if (index % 3 === 0 && index !== 0) {
        arr.push(tmp);
        tmp = [];
      }
      tmp.push(val);
    });
    arr.push(tmp);
    return arr;
  };

  return (
    <FlatList
      data={newData(data)}
      renderItem={(item) => renderItem(item)}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: 10,
  },
});

export default ItemList;
