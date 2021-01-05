import React, { useState, useContext } from 'react';
import {
  Text, SafeAreaView, View, StyleSheet,
} from 'react-native';

import AppContext from '../../../components/AppContext';
import Button from '../../../components/form/Button';
import Input from '../../../components/form/Input';

// import { requestPost } from '../../../components/Request';

import Strings from '../../../contants/Strings';
import Colors from '../../../contants/Colors';

const Login = ({ navigation }) => {
  const myContext = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginRequest = () => {
    myContext.setUser({
      logged: true,
      token: 'coucou',
    });
    navigation.navigate(Strings.navigation.menu.title);
    // requestPost('token/getToken', { pseudo: email, password }).then(
    //  (res) => {
    //    if (res !== undefined && res.success) {
    //      myContext.setUser({
    //        logged: true,
    //        token: res.token,
    //      });
    //      navigation.navigate(Strings.navigation.menu.title);
    //    }
    //  },
    // );
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
