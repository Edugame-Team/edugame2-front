import { AsyncStorage } from 'react-native';
import { requestPost } from './request';
import { errorlog, infolog } from './logs';

export const setUser = async (user) => {
  try {
    await AsyncStorage.setItem('user', user);
  } catch (error) {
    errorlog(error.toString());
    return false;
  }
  return true;
};

export const getUser = async () => {
  try {
    return await AsyncStorage.getItem('user');
  } catch (error) {
    infolog('User not connected');
  }
  return {
    token: '',
    pseudo: '',
  };
};

export const loginRequest = (pseudo, password, responseHandler) => {
  requestPost('getToken', { pseudo, password }).then(
    (res) => {
      if (res !== undefined && res.success) {
        const user = getUser();
        user.token = res.token;
        user.pseudo = res.pseudo;
        responseHandler();
      }
    },
  );
}};
