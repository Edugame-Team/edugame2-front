import React, { useState, useContext } from 'react';
import {
  Text, SafeAreaView, View, StyleSheet,
} from 'react-native';

import AppContext from 'EGComponents/AppContext';
import Button from 'EGComponents/form/Button';
import Input from 'EGComponents/form/Input';

import { requestPost } from 'EGComponents/Request';

import Strings from 'EGStrings';
import Colors from 'EGColors';

const Login = ({ navigation }) => {
  const myContext = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const loginRequest = () => {
    myContext.setUser({
      logged: true,
      token: 'coucou',
    });
    navigation.navigate(Strings.navigation.menu.title);

    requestPost({
      url: 'token/getToken',
      body: { pseudo: email, password },
      toastText: 'connection',
      setLoading,
    }).then(
      (res) => {
        if (res !== undefined && res.success) {
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
    <View style={[styles.container, styles.globalContainer]}>
      <View style={styles.container}>
        <Text style={styles.title}>{Strings.screens.login.title}</Text>
        <Text style={styles.subTitle}>{Strings.screens.login.subTitle}</Text>
        <Input
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
          secureTextEntry
        />
        <Button
          screen="login"
          title="login"
          onPress={() => loginRequest()}
          loading={loading}
        />
        <SafeAreaView style={styles.textButtonContainer}>
          <Text style={styles.textButton}>
            {Strings.screens.login.have_an_account}
          </Text>
          <Button
            style={styles.textButton}
            screen="login"
            title="signup"
            onPress={() => navigation.popToTop()}
            textStyle={styles.textButton}
            textButton
          />
        </SafeAreaView>
      </View>
      <SafeAreaView style={[styles.textButtonContainer, styles.forgottenPassword]}>
        <Text style={styles.textButton}>
          {Strings.screens.login.forgot_password}
        </Text>
        <Button
          screen="login"
          style={[styles.reset_password]}
          title="reset_password"
          onPress={() => loginRequest()}
          textStyle={styles.textButton}
          textButton
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
  },
  globalContainer: {
    width: '100%',
  },
  textButton: {
    fontSize: 13,
  },
  textButtonContainer: {
    flexDirection: 'row',
    marginTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.mainTextcolor,
  },
  subTitle: {
    marginBottom: 20,
  },
  forgottenPassword: {
    marginTop: 0,
  },
});

export default Login;
