import React from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {IMAGES} from '../../assets/images';

import {FONTS, COLORS, icons, images, SIZES} from '../../constants';
import {useAuth} from '../../context/auth-context';
import HomeHeader from './components/HomeHeader';
// import {TrendingCard, CategoryCard} from '../components';

const Home2 = ({navigation}) => {
  const {user} = useAuth();

  function renderSearchBar() {
    return (
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          alignItems: 'center',
          marginHorizontal: SIZES.padding,
          paddingHorizontal: SIZES.radius,
          borderRadius: 10,
          backgroundColor: COLORS.lightGray,
        }}>
        {/* <Image
          style={{
            width: 20,
            height: 20,
            tintColor: COLORS.gray,
          }}
          source={icons.search}
        /> */}
        <TextInput
          style={{
            marginLeft: SIZES.radius,
            ...FONTS.body3,
          }}
          placeholderTextColor={COLORS.gray}
          placeholder="Search Parks"
        />
      </View>
    );
  }

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={IMAGES.login.tallTrees}
            style={{width: 80, height: 80}}
          />
        </View>

        {/* Text */}
        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            You have 12 parks that you haven't tried yet
          </Text>

          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            onPress={() => console.log('See Recipes')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Trending Recipe
        </Text>

        <FlatList
          data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <Text>Hi</Text>
              //   <TrendingCard
              //     containerStyle={{
              //       marginLeft: index == 0 ? SIZES.padding : 0,
              //     }}
              //     recipeItem={item}
              //     onPress={() => navigation.navigate('Recipe', {recipe: item})}
              //   />
            );
          }}
        />
      </View>
    );
  }

  function renderCategoryHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 20,
          marginHorizontal: SIZES.padding,
        }}>
        <Text style={{flex: 1, ...FONTS.h2}}>Categories</Text>
        <TouchableOpacity>
          <Text
            style={{
              color: COLORS.gray,
              ...FONTS.body4,
            }}>
            View All
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <FlatList
        data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}]}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            <HomeHeader />
            {renderSearchBar()}
            {renderSeeRecipeCard()}
            {renderTrendingSection()}
            {renderCategoryHeader()}
          </View>
        }
        renderItem={({item}) => {
          return (
            <Text>Hi</Text>
            // <CategoryCard
            //   containerStyle={{
            //     marginHorizontal: SIZES.padding,
            //   }}
            //   categoryItem={item}
            //   onPress={() => navigation.navigate('Recipe', {recipe: item})}
            // />
          );
        }}
        ListFooterComponent={<View style={{marginBottom: 100}}></View>}
      />
    </SafeAreaView>
  );
};

export default Home2;
