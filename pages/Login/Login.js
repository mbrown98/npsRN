import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Button,
  ImageBackground,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import auth from '@react-native-firebase/auth';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAuth} from '../../context/auth-context';
import {IMAGES} from '../../assets/images';
import CustomButton from '../../components/CustomButton';
import {SIZES, COLORS, FONTS} from '../../constants';

const {zion, olympic, bryce, yosemite} = IMAGES.onboard;

async function googleSignIn() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  const user_sign_in = auth().signInWithCredential(googleCredential);

  user_sign_in
    .then(res => console.log('resss:', res))
    .catch(e => console.log('e', e));
}

const Login = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}
          resizeMode="cover"
          source={zion}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding,
            }}>
            <Text
              style={{
                width: '80%',
                color: COLORS.white,
                lineHeight: 45,
                ...FONTS.largeTitle,
              }}>
              Cooking a Delicious Food Easily
            </Text>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }

  function renderDetail() {
    return (
      <View
        style={{
          flex: 1,
          paddingHorizontal: SIZES.padding,
        }}>
        {/* Description */}
        <Text
          style={{
            marginTop: SIZES.radius,
            width: '70%',
            color: COLORS.gray,
            ...FONTS.body3,
          }}>
          Discover more than 1200 food recipes in your hands and cooking it
          easily!
        </Text>

        {/* Buttons */}
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <CustomButton
            buttonText="Login"
            buttonContainerStyle={{
              paddingVertical: 18,
              borderRadius: 20,
            }}
            colors={[COLORS.darkGreen, COLORS.lime]}
            onPress={() => navigation.replace('Home')}
          />

          <CustomButton
            buttonText="Sign Up"
            buttonContainerStyle={{
              marginTop: SIZES.radius,
              paddingVertical: 18,
              borderRadius: 20,
              borderColor: COLORS.darkLime,
              borderWidth: 1,
            }}
            colors={[]}
            onPress={() => navigation.replace('Home')}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      {renderHeader()}

      {/* Detail */}
      {renderDetail()}
    </View>
  );
};

export default Login;
