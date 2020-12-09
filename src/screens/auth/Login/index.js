import React, { useState } from 'react';
import {
  Text, SafeAreaView, View, StyleSheet,
} from 'react-native';

import Button from '../../../components/form/Button';
import Input from '../../../components/form/Input';

import Strings from '../../../contants/Strings';
import Colors from '../../../contants/Colors';

import { loginRequest } from '../../../functions/auth';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          onPress={() => loginRequest(email, password, () => {
            navigation.navigate(Strings.navigation.menu.title);
          })}
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
          onPress={() => console.log('reset password')}
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
