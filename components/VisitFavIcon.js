import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {FIRESTORE} from '../api/firebase/firestore';
import ASSETS from '../assets';
import {useAuth} from '../context/auth-context';
import {useFirebase} from '../context/firebase-content';

const VisitFavIcon = ({park, list, size}) => {
  const {user} = useAuth();
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const isFavs = list === 'favorites';

  const {
    favorites: {FavSvg, NoFavSvg},
    visited: {VisitedSvg, NoVisitedSvg},
  } = ASSETS;

  let dataSet = isFavs ? favorites : visited;

  return (
    <TouchableOpacity
      onPress={async () => {
        FIRESTORE.toggleUserPark(user.uid, list, park);
      }}>
      {dataSet[park] ? (
        isFavs ? (
          <FavSvg height={size} width={size} />
        ) : (
          <VisitedSvg height={size} width={size} />
        )
      ) : isFavs ? (
        <NoFavSvg height={size} width={size} />
      ) : (
        <NoVisitedSvg height={size} width={size} />
      )}
    </TouchableOpacity>
  );
};

export default VisitFavIcon;

const styles = StyleSheet.create({});
