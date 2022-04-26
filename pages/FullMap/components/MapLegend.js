import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Pie from 'react-native-pie';
import {COLORS, FONTS, parkCodes} from '../../../constants';
import {useFirebase} from '../../../context/firebase-content';
import Spacer from '../../../components/Spacer';
import ASSETS from '../../../assets';

const {
  favorites: {FavPng, FavSvg, NoFavSvg},
  visited: {VisitedPng, VisitedSvg, NoVisitedSvg},
  map: {CurrentPin},
} = ASSETS;

const IconLegend = [
  {title: 'Favorite', src: FavPng},
  {title: 'Visited', src: VisitedPng},
  {title: 'Current', src: CurrentPin},
];

const MapLegend = () => {
  const [legendOpen, setLegendOpen] = useState(false);
  const {
    userData: {favorites, visited},
  } = useFirebase();

  const visitPer = Math.round(
    (Object.keys(visited).length / Object.keys(parkCodes).length) * 100,
  );
  if (!legendOpen) {
    return (
      <View style={styles.legendTabContain}>
        <SafeAreaView />
        <Spacer h={20} />
        <TouchableOpacity
          style={styles.legendOpen}
          onPress={() => setLegendOpen(true)}>
          <Text style={styles.legendOpenText}>Legend</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.legendOverlay}>
      <SafeAreaView />
      <Spacer h={20} />
      <Text style={styles.parkCountText}>
        {visitPer
          ? `You have visited ${visitPer}% of the National Parks`
          : 'Mark a few more parks as visited to track progress'}
      </Text>
      <Spacer h={20} />
      <Pie
        radius={100}
        sections={[
          {
            percentage: visitPer,
            color: COLORS.darkGreen,
          },
        ]}
        backgroundColor={COLORS.transparentGreen}
      />

      <Spacer h={20} />
      <View style={{flexDirection: 'row'}}>
        {IconLegend.map((opt, i) => (
          <View style={{flex: 1, alignItems: 'center'}} key={i}>
            <Image source={opt.src} style={{height: 40, width: 40}} />
            <Spacer h={5} />
            <Text style={{fontSize: 12, fontWeight: '600'}}>{opt.title}</Text>
          </View>
        ))}
      </View>
      <Spacer h={20} />
      <TouchableOpacity onPress={() => setLegendOpen(false)}>
        <Text style={{color: COLORS.darkGreen, fontWeight: '400'}}>
          Collapse
        </Text>
      </TouchableOpacity>
      <Spacer h={20} />
    </View>
  );
};

export default MapLegend;

const styles = StyleSheet.create({
  legendOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(231, 249, 239,.9)',
    paddingHorizontal: 20,
    marginHorizontal: '2%',
    borderRadius: 20,
    alignItems: 'center',
  },
  legendTabContain: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  legendOpen: {
    backgroundColor: COLORS.transparentGreen,
    padding: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  legendOpenText: {fontWeight: '600', fontSize: 12},
  parkCountText: {textAlign: 'center', fontWeight: '600', fontSize: 17},
});
