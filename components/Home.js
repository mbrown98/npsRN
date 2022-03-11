import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import colors from '../assets/colors/colors';
import profile from '../assets/images/person.png';
import Feather from 'react-native-vector-icons/Feather';
import activitiesData from '../assets/data/activitiesData';
import discoverCategoriesData from '../assets/data/discoverCategoriesData';
import learnMoreData from '../assets/data/learnMoreData';
import discoverData from '../assets/data/discoverData';

Feather.loadFont();

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>
        {/* Discover */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text
              style={[styles.discoverCategoriesText, {color: colors.orange}]}>
              All
            </Text>
            <Text style={styles.discoverCategoriesText}>Destinations</Text>
            <Text style={styles.discoverCategoriesText}>Cities</Text>
            <Text style={styles.discoverCategoriesText}>Experiences</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.white,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {},
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: 'Lato-Bold',
    fontSize: 32,
  },

  discoverCategoriesWrapper: {
    flexDirection: 'row',
    marginTop: 20,
  },
  discoverCategoriesText: {
    marginRight: 30,
    fontFamily: 'Lato-Regular',
    color: colors.gray,
  },
});
