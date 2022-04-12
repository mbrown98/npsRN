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
  Profile,
  Favorites,
  Home,
  Park,
  Onboard,
  Login,
  FullMap,
  ThingToDo,
  HistoricPerson,
} from './pages';
import {GlobalProvider, useGlobal} from './context/global-context';
import {useAuth} from './context/auth-context';
import {COLORS} from './constants';

Entypo.loadFont();
MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
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
          tabBarIcon: ({color}) => (
            <Entypo name="heart" size={32} color={color} />
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

  // if (onboardComplete === null) {
  //   return null;
  // }

  // if (true) {
  //   return <Onboard />;
  // }

  if (!user) {
    return <Login />;
  }

  if (initializing) {
    return (
      <View style={{flex: 1}}>
        <Text>Loading</Text>
      </View>
    );
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
          <Stack.Screen
            name="ThingToDo"
            component={ThingToDo}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{headerShown: false}}
          />
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
