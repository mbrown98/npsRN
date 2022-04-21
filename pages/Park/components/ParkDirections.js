import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import openMap from 'react-native-open-maps';
import React from 'react';
import BROWSER from '../../../utils/browser';

const ParkDirections = ({data}) => {
  let {latLong, directionsUrl, directionsInfo} = data[0];

  const coords = latLong.replace('lat:', '').replace(', long:', '|').split('|');

  const mapOpts = [
    {
      text: 'Open in Maps',
      onPress: () => {
        openMap({
          latitude: Number(coords[0]),
          longitude: Number(coords[1]),
        });
      },
    },
    {
      text: 'NPS Directions Page',
      onPress: () => {
        BROWSER.openBrowser(directionsUrl);
      },
    },
  ];

  return (
    <View>
      <Text style={{fontSize: 13, fontWeight: '300', lineHeight: 20}}>
        {directionsInfo}
      </Text>
      <View style={{marginVertical: 10}}>
        {mapOpts.map((opt, i) => (
          <TouchableOpacity
            key={i}
            onPress={opt.onPress}
            style={[i !== mapOpts.length - 1 && {marginBottom: 10}]}>
            <Text style={{textAlign: 'center', fontWeight: '600'}}>
              {opt.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ParkDirections;

const styles = StyleSheet.create({});

const x = {
  addresses: [
    {
      city: 'Interior',
      line1: '25216 Ben Reifel Road',
      line2: '',
      line3: '',
      postalCode: '57750',
      stateCode: 'SD',
      type: 'Physical',
    },
    {
      city: 'Interior',
      line1: '25216 Ben Reifel Road',
      line2: '',
      line3: '',
      postalCode: '57750',
      stateCode: 'SD',
      type: 'Mailing',
    },
  ],
  contacts: {emailAddresses: [[Object]], phoneNumbers: [[Object]]},
  directionsInfo:
    'Badlands National Park is located 75 miles east of Rapid City, South Dakota. Physical Addresses for GPS* Park Headquarters: 25216 Ben Reifel Road, Interior, SD 57750. Northeast Entrance (I-90, Exit 131): 21020 SD Hwy 240, Interior, SD 57750. Pinnacles Entrance (I-90, Exit 110): 24240 Hwy 240, Wall, SD 57790. Interior Entrance: 20640 SD Hwy 377, Interior, SD 57750.',
  directionsUrl: 'http://www.nps.gov/badl/planyourvisit/directions.htm',
  latLong: 'lat:43.68584846, long:-102.482942',
};
