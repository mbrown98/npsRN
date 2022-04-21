import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  Favorites,
  Home,
  Park,
  Onboard,
  Login,
  FullMap,
  HistoricPerson,
} from './pages';

import {GlobalProvider, useGlobal} from './context/global-context';
import {useAuth} from './context/auth-context';
import {COLORS} from './constants';
import ASSETS from './assets';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const {
    favorites: {FavSvg, NoFavSvg},
  } = ASSETS;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: COLORS.darkGreen,
        tabBarInactiveTintColor: 'grey',
        tabBarShowLabel: false,
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name="home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="FullMap"
        component={FullMap}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="map" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: opt =>
            opt.focused ? (
              <FavSvg height={32} width={32} />
            ) : (
              <NoFavSvg height={32} width={32} />
            ),
        }}
      />

      {/* <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" size={32} color={color} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};

// Create a client
const queryClient = new QueryClient();

export default function App() {
  const {user, initializing} = useAuth();

  GoogleSignin.configure({
    webClientId:
      '12398867805-3t8ijtejc7dibs5rmorc3u1umqsnth3i.apps.googleusercontent.com',
  });
  const {onboardComplete} = useGlobal();

  if (onboardComplete === null) {
    return null;
  }

  if (!user) {
    return <Login />;
  }

  if (onboardComplete === 'NOT_COMPLETE') {
    return <Onboard />;
  }

  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNavigator"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Park"
            component={Park}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="HistoricPerson"
            component={HistoricPerson}
            options={{headerShown: false}}
          />
          {/*
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          /> */}
        </Stack.Navigator>
      </QueryClientProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
