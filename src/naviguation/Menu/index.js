import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { DrawerActions } from '@react-navigation/native';
import AppContext from 'EGComponents/AppContext';

import Strings from 'EGStrings';
import Colors from 'EGColors';

import Home from '../../screens/Home';
import Path from '../../screens/Path';
import Library from '../../screens/Library';
import Messages from '../../screens/Messages';
import Stats from '../../screens/Stats';
import Rewards from '../../screens/Rewards';
import Help from '../../screens/Help';

import CustomDrawerContent from './CustomDrawer';
import Profile from '../../screens/Profile';

const Drawer = createDrawerNavigator();

const Menu = ({ navigation }) => {
  const myContext = useContext(AppContext);

  //= ==========================================
  // Burguer menu Icon
  //= ==========================================
  if (!myContext.isLargeScreen) {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <Icon name="menu" size={25} style={styles.headerIcon} />
        </TouchableOpacity>
      ),
    });
  } else {
    navigation.setOptions({
      headerLeft: () => {},
    });
  }

  //= ==========================================
  // Refactoring functions
  //= ==========================================
  const screenName = Strings.navigation.menu.child;
  const options = (iconName, iconType) => ({
    drawerIcon: ({ color, size }) => (
      <Icon name={iconName} type={iconType} color={color} size={size} />
    ),
  });

  //= ==========================================
  // Menu desciption
  //= ==========================================
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: Colors.mainTextcolor,
        activeBackgroundColor: Colors.mainColor,
        itemStyle: {
        },
      }}
      initialRouteName={screenName.home}
      openByDefault
      drawerType={myContext.isLargeScreen ? 'permanent' : 'back'}
      drawerContent={(props) => (
        <CustomDrawerContent style={{ height: '100%' }} {...props} />
      )}
    >
      <Drawer.Screen
        name={screenName.home}
        options={options('home')}
        component={Home}
      />
      <Drawer.Screen
        name={screenName.path}
        options={options('near-me')}
        component={Path}
      />
      <Drawer.Screen
        name={screenName.library}
        options={options('library-books')}
        component={Library}
      />
      <Drawer.Screen
        name={screenName.messages}
        options={options('chat')}
        component={Messages}
      />
      <Drawer.Screen
        name={screenName.stats}
        options={options('poll')}
        component={Stats}
      />
      <Drawer.Screen
        name={screenName.rewards}
        options={options('trophy-variant', 'material-community')}
        component={Rewards}
      />
      <Drawer.Screen
        name={screenName.profil}
        options={options('face')}
        component={Profile}
      />
      <Drawer.Screen
        name={screenName.help}
        options={options('help')}
        component={Help}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  headerIcon: {
    marginRight: 10,
    marginLeft: 10,
    textAlign: 'center',
  },
});

export default Menu;
