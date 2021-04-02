import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ListItem, Icon, Badge } from 'react-native-elements';

const Message = ({ item: message }) => (
  <ListItem
    onPress={() => console.log('press')}
    onLongPress={() => console.log('long press')}
    bottomDivider
  >
    <Icon style={styles.itemIcon} name="home" type="material-community" />
    <ListItem.Content>
      <ListItem.Title>{message.name}</ListItem.Title>
      <ListItem.Subtitle>{message.lastmessage}</ListItem.Subtitle>
    </ListItem.Content>
    {message.nbMessageUnread > 0 && (
    <Badge
      value={message.nbMessageUnread}
      status="success"
      textStyle={{ paddingRight: 10, paddingLeft: 10 }}
      containerStyle={{ color: 'gray' }}
    />
    )}
    <ListItem.Chevron />
  </ListItem>
);

const styles = StyleSheet.create({
  itemIcon: {
    paddingRight: 10,
  },
});

export default Message;
