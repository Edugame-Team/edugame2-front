import * as React from 'react';
import { Icon } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Alert from '../../compontents/AlertOk';

import Strings from '../../contants/Strings';

const CustomDrawerContent = (props) => {
  const popupPressed = () => {
    props.navigation.replace(Strings.navigation.chooseType.title);
  };

  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        style={styles.disconnect}
        label={Strings.navigation.menu.child.disconnect}
        icon={({ color, size }) => (
          <Icon name="exit-to-app" color={color} size={size} />
        )}
        onPress={() =>
          Alert(
            Strings.alert.disconnect.title,
            Strings.alert.disconnect.question,
            popupPressed,
          )
        }
      />
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '90%',
  },
  disconnect: {
    marginTop: 'auto',
  },
});

export default CustomDrawerContent;
