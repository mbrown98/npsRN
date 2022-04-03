import React, {useState, useCallback, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {COLORS, SIZES, FONTS, parkCodes} from '../../../constants';

Feather.loadFont();

const ParksSearchBar = () => {
  const navigation = useNavigation();
  const [textInput, setTextInput] = useState('');

  const searchResults = useCallback(() => {
    if (!textInput) return [];
    const filtered = parkCodes.filter(
      park =>
        park.parkCode.startsWith(textInput.toLowerCase()) ||
        park.fullName.startsWith(textInput.toLowerCase()),
    );

    return filtered;
  }, [textInput]);

  return (
    <>
      <View style={styles.searchBarContain}>
        <Feather
          name="search"
          size={20}
          color={COLORS.black}
          style={styles.menuIcon}
        />
        <TextInput
          value={textInput}
          style={styles.searchBarText}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Parks"
          onChangeText={v => {
            setTextInput(v);
          }}
        />
      </View>
      {!!searchResults().length && (
        <View style={styles.searchResultsContain}>
          <FlatList
            data={searchResults()}
            keyExtractor={item => `${item.parkCode}`}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Park', {code: item.parkCode})
                  }>
                  <View style={styles.resultRow}>
                    <Text style={styles.resultRowText}>{item.fullName}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </>
  );
};

export default ParksSearchBar;

const styles = StyleSheet.create({
  searchBarContain: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    marginHorizontal: SIZES.padding,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    backgroundColor: COLORS.lightGray,
  },
  menuIcon: {},
  searchBarText: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
  },
  searchResultsContain: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: 10,
  },
  resultRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    paddingVertical: 10,
  },
  resultRowText: {
    ...FONTS.body5,
  },
});
