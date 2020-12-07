import * as React from 'react';
import { Text } from 'react-native';

import Strings from '../../contants/Strings';

export default ({ style, text, screen }) => (
  <Text style={style}>{Strings.screens[screen].text[text]}</Text>
);
