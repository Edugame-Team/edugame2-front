import * as React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet, Text } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { AlertOkCancel } from '../../components/Alert';

import Strings from '../../contants/Strings';

const CustomDrawerContent = (props) => {
  const popupPressed = () => {
    props.navigation.replace(Strings.navigation.chooseType.title);
  };

  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.top} />
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.disconnect}
        label={Strings.navigation.menu.child.disconnect}
        icon={({ color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() => AlertOkCancel(
          Strings.alert.disconnect.title,
          Strings.alert.disconnect.question,
          popupPressed,
        )}
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  top: {
    marginTop: -0,
  },
  disconnect: {
    marginTop: 'auto',
  },
});

export default CustomDrawerContent;
