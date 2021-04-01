import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import Strings from 'EGStrings';
import AppContext from 'EGComponents/AppContext';

import Type from './Type';

const getTypeStyle = (isLargeScreen, size) => ({
  width: isLargeScreen ? `${100 / size}%` : '100%',
  height: !isLargeScreen ? `${100 / size}%` : '100%',
});

const getContainerStyle = (isLargeScreen) => ({
  flexDirection: isLargeScreen ? 'row' : 'column',
});

const ChooseType = ({ navigation }) => {
  const myContext = useContext(AppContext);

  const listType = Strings.screens.choose_type;
  const listTypeKeys = Object.keys(listType);

  return (
    <View
      style={[styles.itemContainer, getContainerStyle(myContext.isLargeScreen)]}
    >
      {listTypeKeys.map((key) => (
        <Type
          key={listType[key].id}
          navigation={navigation}
          user={listType[key]}
          typeStyle={[getTypeStyle(myContext.isLargeScreen, listTypeKeys.length)]}
        />
      ))}
    </View>
  );
};
export default ChooseType;

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    height: '100%',
  },
});
