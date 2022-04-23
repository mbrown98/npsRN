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
          buttonContainerStyle={{
            paddingVertical: 12,
            borderRadius: 10,
          }}
          colors={[COLORS.darkGreen, COLORS.lime]}
          onPress={() => AUTH.signIn('google')}
        />

        <AppleButton
          buttonStyle={AppleButton.Style.WHITE}
          buttonType={AppleButton.Type.SIGN_IN}
          style={{
            height: 50,
            marginTop: 10,
          }}
          onPress={() => AUTH.signIn('apple')}
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
