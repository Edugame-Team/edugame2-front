import * as React from 'react';

import { StyleSheet } from 'react-native';
import ItemList from 'EGComponents/ItemList';
import Cours from './Cours';

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
      img: 'https://cdnWarning: Failed prop type: Invalid prop `style` of type `number` supplied to `Grid`,-az.allevents.in/banners/135c2b7fc8e9f0c2fc83404da4e94472',
      color: '',
    },
  ];

  return (
    <ItemList
      data={data}
      renderItem={(item) => <Cours style={styles.item} item={item} />}
    />
  );
};
const styles = StyleSheet.create({
  item: {
    width: 400,
    padding: 10,
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
