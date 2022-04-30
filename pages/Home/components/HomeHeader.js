import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
} from 'react-native';
import AUTH from '../../../api/firebase/auth';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {useAuth} from '../../../context/auth-context';
import {useFirebase} from '../../../context/firebase-content';

const HomeHeader = () => {
  const {user} = useAuth();
  const {userData} = useFirebase();
  const [profileOpen, setProfileOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  console.log({userData});

  const deleteAlert = () =>
    Alert.alert(
      deleteOpen === 'failed'
        ? 'Failed to Delete'
        : 'Confirm you wish to delete your account?',
      'Select option below',
      [
        {
          text: 'Delete',
          onPress: async () => {
            const res = await AUTH.deleteAccount();
            if (res === 'failed') {
              setDeleteOpen('failed');
            }
          },
        },

        {text: 'Cancel', onPress: () => setDeleteOpen(false)},
      ],
    );

  return (
    <View style={styles.contain}>
      {!profileOpen ? (
        <View style={styles.userInfoWrapper}>
          <Text style={styles.userName}>
            {user.displayName
              ? `Hello ${user.displayName}`
              : 'Welcome to Parkport'}
            ,
          </Text>
          <Text style={styles.subText}>What do you want to explore today?</Text>
        </View>
      ) : (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={styles.toBox} onPress={() => AUTH.signOut()}>
            <Text style={styles.toText}>Sign-Out</Text>
          </TouchableOpacity>
          {user.email && (
            <>
              <TouchableOpacity
                style={[styles.toBox, {borderColor: COLORS.lightGray2}]}
                onPress={() => setDeleteOpen(true)}>
                <Text style={[styles.toText, {color: COLORS.lightGray2}]}>
                  Delete Account
                </Text>
              </TouchableOpacity>
              {deleteOpen && deleteAlert()}
            </>
          )}
        </View>
      )}
      <TouchableOpacity onPress={() => setProfileOpen(!profileOpen)}>
        <Image source={{uri: user.photoURL}} style={styles.userProfileImg} />
      </TouchableOpacity>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  userInfoWrapper: {flex: 1},
  userName: {color: COLORS.darkGreen, ...FONTS.h2},
  subText: {
    marginTop: 3,
    color: COLORS.gray,
    ...FONTS.body3,
  },
  userProfileImg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,

    borderColor: COLORS.darkGreen,
  },
  toBox: {borderWidth: 1, padding: 10, borderRadius: 5},
  toText: {
    fontWeight: '800',
  },
});
