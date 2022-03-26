import React from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import {SIZES, COLORS, FONTS} from '../../constants';
import LoginHeader from './components/LoginHeader';
import LoginDetails from './components/LoginDetails';

const Login = ({navigation}) => {
  return (
    <View style={styles.contain}>
      <StatusBar barStyle="light-content" />
      <LoginHeader />
      <LoginDetails />
    </View>
  );
};

// styles
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
});

export default Login;
