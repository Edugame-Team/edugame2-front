import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon } from 'react-native-elements';

const Reward = ({ reward }) => (
  <ListItem
    leftIcon={() => (
      <Icon
        style={styles.itemIcon}
        name={reward.type.name}
        type="material-community"
      />
    )}
    title={reward.message}
    subtitle={reward.date}
    bottomDivider
  />
);

const styles = StyleSheet.create({
  itemIcon: {
    paddingRight: 10,
  },
});

export default Reward;
