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
      <View
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
        }}>
        <SafeAreaView />
        <Spacer h={20} />
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.transparentGreen,
            padding: 10,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          onPress={() => setLegendOpen(true)}>
          <Text style={{fontWeight: '600', fontSize: 12}}>Legend</Text>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.legendOverlay}>
      <SafeAreaView />
      <Spacer h={20} />
      <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 17}}>
        You have visited {visitPer}% of the National Parks
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
        {IconLegend.map(opt => (
          <View style={{flex: 1, alignItems: 'center'}}>
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
  gauge: {
    position: 'absolute',
    width: 150,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  gaugeText: {
    color: '#000',
    fontSize: 24,
  },
});
