import React, {
  useState, useEffect,
} from 'react';

import { Dimensions, StyleSheet } from 'react-native';
import AppContext from './src/components/AppContext';
import Router from './src/Router';

export default function App() {
  //= ==========================================
  // window size handler
  //= ==========================================
  const [isLargeScreen, setIsLargeScreen] = useState(Dimensions.get('window').width > 780);

  const onChange = ({ window }) => {
    setIsLargeScreen(window.width > 780);
  };

  useEffect(() => {
    Dimensions.addEventListener('change', onChange);
    return () => {
      Dimensions.removeEventListener('change', onChange);
    };
  });

  //= ==========================================
  // global variables
  //= ==========================================
  const [user, setUser] = useState({
    logged: false,
    token: '',
  });

  const settings = {
    user,
    setUser,
    isLargeScreen,
    setIsLargeScreen,
  };


  //= ==========================================
  // router
  //= ==========================================
  return (
    <AppContext.Provider value={settings}>
      <Router  />
    </AppContext.Provider>
  );
}
