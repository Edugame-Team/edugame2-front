import React, {
  useEffect,
} from 'react';
import { StyleSheet, View } from 'react-native';
import Grid from 'react-native-grid-component';
import ItemList from 'EGComponents/ItemList';
import Item from './Item';

const Library = () => {
  const data = [
    {
      img: 'https://www.supremecourt.gov/about/images/CourtBuilding.jpg',
      text: 'Finance',
      color: 'red',
    },
    {
      text: 'Sport',
      img: 'https://pixfeeds.com/images/basketball/1280-538482034-wooden-basketball-court.jpg',
      color: 'red',
    },
    {
      text: '',
      img: 'https://cdn-az.allevents.in/banners/135c2b7fc8e9f0c2fc83404da4e94472',
      color: '',
    },
  ];

  useEffect(() => {
    console.log('couocu');
  }, []);

  return (
    <Grid
      style={styles.list}
      renderItem={(item) => (
        <Item style={[styles.item, { width: `${100 / 2}%` }]} item={item} />
      )}
      data={data}
      numColumns={2}
      keyExtractor={(item, n) => n.toString()}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    width: '100%',
    padding: 10,
  },
  list: {
    width: '100%',
  },
});

export default Library;
// <ItemList
//   renderItem={({ item }) => renderItem(item)}
// >
//   {data.map((item) => (
//     <Item item={item} key={item.id} />
//   ))}
// </ItemList>
