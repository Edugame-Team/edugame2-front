import React, { useContext } from 'react';
import {
  Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Icon, Badge } from 'react-native-elements';

import 'react-native-gesture-handler';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Menu from './Menu';
import Login from '../screens/auth/Login';
import ChooseType from '../screens/auth/ChooseType';

import Strings from '../contants/Strings';

import AppContext from '../components/AppContext';

const Stack = createStackNavigator();

export default function App() {
  const myContext = useContext(AppContext);

  // {myContext.user.logged && ()}
  return (
    <NavigationContainer linking={{}} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          headerStyle: {
          },
          cardStyle: { backgroundColor: '#F1F7F7' },
        }}
        initialRouteName={
          myContext.user.logged
            ? Strings.navigation.menu.title
            : Strings.navigation.chooseType.title
        }
      >
        <Stack.Screen
          options={({ navigation }) => ({
            headerTitle: (props) => <Text {...props} />,
            headerRight: () => (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              >
                <Icon
                  style={styles.headerIcon}
                  name="bell"
                  type="material-community"
                  size={25}
                />
                <Badge
                  style={styles.iconBadge}
                  status="error"
                  containerStyle={{
                    position: 'absolute',
                    top: -4,
                    right: 7,
                  }}
                  value={1}
                />
              </TouchableOpacity>
            ),
          })}
          name={Strings.navigation.menu.title}
          component={Menu}
        />

        <Stack.Screen name={Strings.navigation.login.title} component={Login} />

        <Stack.Screen
          name={Strings.navigation.chooseType.title}
          component={ChooseType}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 15,
    marginLeft: 10,
    textAlign: 'center',
  },
  spaceView: {
    width: 5,
  },
  baseBackground: {
    backgroundColor: '#1d7110',
    height: '100%',
    width: '100%',
  },
});
