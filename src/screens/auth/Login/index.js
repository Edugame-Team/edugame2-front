import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';

import AppContext from '../../../components/AppContext';
import Button from '../../../components/form/Button';
import Input from '../../../components/form/Input';

import { requestPost } from '../../../components/Request';

import Strings from '../../../contants/Strings';

const Login = ({ navigation }) => {
  const myContext = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginRequest = () => {
    requestPost('api/token/getToken', { pseudo: email, password }).then(
      (res) => {
        if (res.success) {
          myContext.setUser({
            logged: true,
            token: res.token,
          });
          navigation.navigate(Strings.navigation.menu.title);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        screen="login"
        placeholder="email"
        icon="email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        focus
      />
      <Input
        screen="login"
        placeholder="password"
        errorMessage="password_error"
        icon="lock"
        onChangeText={(text) => setPassword(text)}
        value={password}
        style={styles.input}
        secureTextEntry
      />
      <Button
        screen="login"
        style={[styles.button, styles.forgot_password]}
        title="forgot_password"
        onPress={() => loginRequest()}
        textStyle={{ fontSize: 11, color: 'white' }}
      />
      <Button
        style={[styles.button, styles.loginBtn]}
        screen="login"
        title="login"
        textStyle={{ color: 'white' }}
        onPress={() => loginRequest()}
      />
      <Button
        style={styles.button}
        screen="login"
        title="signup"
        textStyle={{ color: 'white' }}
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
  },
  loginBtn: {
    marginTop: 40,
    marginBottom: 10,
    backgroundColor: '#fb5b5a',
  },
  input: {
    width: '80%',
  },
});

export default Login;
