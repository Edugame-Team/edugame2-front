import React, { useState, useEffect } from 'react';

import { Dimensions } from 'react-native';
import AppContext from 'EGComponents/AppContext';

import Toast from 'EGComponents/Toast';
import Router from './src/naviguation/Router';

export default function App() {
  //= ==========================================
  // window size handler
  //= ==========================================
  const [isLargeScreen, setIsLargeScreen] = useState(
    Dimensions.get('window').width > 780,
  );

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
      <Router />
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </AppContext.Provider>
  );
}
