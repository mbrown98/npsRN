import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AUTH from '../../../api/firebase/auth';
import {AppleButton} from '@invertase/react-native-apple-authentication';
import CustomButton from '../../../components/CustomButton';
import {COLORS, SIZES, FONTS} from '../../../constants';

export default function LoginDetails() {
  return (
    <View style={styles.contain}>
      <Text style={styles.infoText}>
        Discover more than 500 parks in your hands!
      </Text>

      {/* Buttons */}
      <View style={styles.buttonContain}>
        <CustomButton
          buttonText="Login"
          buttonContainerStyle={{
            paddingVertical: 18,
            borderRadius: 20,
          }}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => AUTH.signIn('google')}
        />
        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            width: 160,
            height: 45,
          }}
          onPress={() => AUTH.signIn('apple')}
        />
        {/* <CustomButton
          buttonText="Sign Up"
          buttonContainerStyle={{
            marginTop: SIZES.radius,
            paddingVertical: 18,
            borderRadius: 20,
            borderColor: COLORS.darkLime,
            borderWidth: 1,
          }}
          colors={[]}
          onPress={() => {}}
        /> */}
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
