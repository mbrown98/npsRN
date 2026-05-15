import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import Spacer from '../../../components/Spacer';

const ParkHoursAndFees = ({data}) => {
  const {operatingHours, entranceFees} = data[0];

  return (
    <View>
      <Spacer h={5} />
      <Text style={{fontSize: 12}}>{operatingHours[0].description}</Text>
      <Spacer h={10} />
      <FlatList
        data={Object.entries(operatingHours[0].standardHours)}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item[0]}
        renderItem={({item, index}) => {
          return (
            <View style={{marginRight: 10}}>
              <Text style={{fontWeight: '600', fontSize: 11}}>
                {item[0].toLocaleUpperCase()}
              </Text>
              <Spacer h={5} />
              <Text style={{fontWeight: '400', fontSize: 11}}>{item[1]}</Text>
            </View>
          );
        }}
      />
      <Spacer h={10} />
      <Text style={{fontWeight: '600', fontSize: 16}}>Entrance Fees</Text>
      <Spacer h={10} />
      <FlatList
        data={entranceFees}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item[0]}
        renderItem={({item, index}) => {
          return (
            //   make width based on screen width
            <View style={{marginRight: 15, maxWidth: 200}} key={index}>
              <Text style={{fontWeight: '600', fontSize: 11}}>
                {item.title}
              </Text>
              <Spacer h={5} />
              <Text style={{fontWeight: '400', fontSize: 11}}>
                ${item.cost}
              </Text>
              <Spacer h={5} />
              <Text style={{fontWeight: '400', fontSize: 11}}>
                {item.description}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ParkHoursAndFees;

const styles = StyleSheet.create({});

const x = {
  entranceFees: [
    {
      cost: '30.00',
      description:
        'Fee covers the entry of a private vehicle and its occupants for 7 days',
      title: 'Private Vehicle',
    },
    {
      cost: '15.00',
      description:
        'Fee covers the entry of an individual that is hiking, bicycling, etc... for 7 days',
      title: 'Individual (Hiking, Bicycling, etc...)',
    },
    {
      cost: '25.00',
      description:
        'Fee covers the entry of a motorcycle and its occupants for 7 days',
      title: 'Motorcycle',
    },
    {
      cost: '25.00',
      description:
        'Commercial sedan, 1 to 6 passenger capacity.   $25 plus $10 per person - 7 days for Original Manifest',
      title: 'Commercial Sedan, 1 to 6 passenger capacity',
    },
    {
      cost: '50.00',
      description:
        'Commercial van, 7 to 15 passenger capacity; $50 - 7 days for Original Manifest',
      title: 'Commercial Van, 7 to 15 passenger capacity',
    },
    {
      cost: '60.00',
      description:
        'Minibus, 16 to 25 passenger capacity; $60 - 7 days for Original Manifest',
      title: 'Commercial Minibus, 16 to 25 passenger capacity',
    },
    {
      cost: '150.00',
      description:
        'Motorcoach, 26 or more passenger capacity; $150 - 7 days for Original Manifest',
      title: 'Commercial Motorcoach, 26 or more passenger capacity',
    },
  ],
  entrancePasses: [
    {
      cost: '55.00',
      description:
        'This pass admits a single, private, non commercial vehicle and its occupants into the park. This pass does not include camping or give any type of discount at stores inside the park. Valid for one year from month of purchase.',
      title: 'Badlands National Park Annual Pass',
    },
  ],
  operatingHours: [
    {
      description:
        'The park is open to visitors all year with the exception of weather closures.',
      exceptions: [Array],
      name: 'Badlands National Park',
      standardHours: [Object],
    },
  ],
};
