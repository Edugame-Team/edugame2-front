import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import Strings from '../../../contants/Strings';

import Type from './Type';

const ChooseType = ({ navigation }) => {
  const listType = Strings.screens.choose_type;

  const el = Object.keys(listType).map((key) => (
    <Type key={listType[key].id} navigation={navigation} user={listType[key]} />
  ));

  return (<View style={styles.itemContainer}>{el}</View>);
};
export default ChooseType;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
