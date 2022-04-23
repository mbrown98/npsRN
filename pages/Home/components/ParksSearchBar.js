import React, {useState, useCallback, useEffect} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

import {COLORS, SIZES, FONTS, parkCodes} from '../../../constants';
import CloseCircle from '../../../components/CloseCircle';

Feather.loadFont();

const ParksSearchBar = ({
  showDropdown = true,
  onChange,
  placeholder = 'Search',
}) => {
  const navigation = useNavigation();
  const [textInput, setTextInput] = useState('');

  const searchResults = useCallback(() => {
    if (!textInput || !showDropdown) {
      return [];
    }
    const filtered = Object.values(parkCodes).filter(park => {
      return park.fullName.toLowerCase().startsWith(textInput.toLowerCase());
    });

    return filtered;
  }, [textInput, showDropdown]);

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
          placeholder={placeholder}
          onChangeText={v => {
            setTextInput(v);
            onChange && onChange(v);
          }}
        />
        {!!textInput && (
          <CloseCircle
            touchProps={{
              onPress: () => {
                setTextInput('');
                onChange && onChange('');
                Keyboard.dismiss();
              },
            }}
          />
        )}
      </View>
      {showDropdown && !!searchResults().length && (
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
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
    // backgroundColor: COLORS.lightGray,
  },
  menuIcon: {},
  searchBarText: {
    marginLeft: SIZES.radius,
    ...FONTS.body3,
    flex: 1,
  },
  searchResultsContain: {
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
