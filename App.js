import React, {
  useState, useEffect,
} from 'react';

import { Dimensions } from 'react-native';
import Toast from 'react-native-toast-message';
import AppContext from './src/components/AppContext';
import Router from './src/naviguation/Router';

import { getUser } from './src/functions/auth';

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
  const [user, setUser] = useState(getUser());

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
