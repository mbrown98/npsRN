import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AUTH from '../../../api/firebase/auth';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import CustomButton from '../../../components/CustomButton';
import {COLORS, SIZES, FONTS} from '../../../constants';
import Spacer from '../../../components/Spacer';

export default function LoginDetails() {
  return (
    <View style={styles.contain}>
      <Text style={styles.infoText}>
        Discover more than 500 parks in your hands!
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContain}>
        <CustomButton
          buttonText="Sign in With Google"
          buttonContainerStyle={{}}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => AUTH.signIn('google')}
        />
        <Spacer h={10} />
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            height: 50,
          }}
          onPress={() => AUTH.signIn('apple')}
        />
        <Spacer h={10} />
        <CustomButton
          buttonText="Continue as Guest"
          buttonContainerStyle={{}}
          colors={[COLORS.gray, COLORS.lightGray2]}
          onPress={() => {
            AUTH.guestSignIn();
          }}
        />
      </View>
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    paddingHorizontal: SIZES.padding,
  },
  infoText: {
    marginTop: SIZES.radius,
    width: '70%',
    color: COLORS.gray,
    ...FONTS.body3,
  },
  buttonContain: {
    flex: 1,
    justifyContent: 'center',
  },
});
