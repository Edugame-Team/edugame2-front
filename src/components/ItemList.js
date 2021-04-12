import * as React from 'react';
import { FlatList, ScrollView } from 'react-native';

const ItemList = ({ data, renderItem }) => (
  <ScrollView>
    <FlatList
      columnWrapperStyle={{
        justifyContent: 'center', flexWrap: 'wrap', flex: 1, marginBottom: 10
      }}
      data={data}
      horizontal={false}
      renderItem={({ item }) => renderItem(item)}
      numColumns={10000}
      keyExtractor={({ index }) => index}
    />
  </ScrollView>
);

export default ItemList;
