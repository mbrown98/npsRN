import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {FONTS, SIZES} from '../../constants';

const HistoricPerson = ({
  navigation,
  route: {
    params: {person},
  },
}) => {
  console.log(person);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black', padding: 5}}>
      <StatusBar barStyle="light-content" />
      <ImageBackground source={{uri: person.images[0].url}} style={{flex: 1}}>
        <BlurView
          style={{
            marginTop: Dimensions.get('screen').height * 0.55,
            flex: 1,
            padding: SIZES.padding,
          }}
          blurType="dark">
          <ScrollView>
            <Text style={{...FONTS.h1, color: 'white'}}>{person.title}</Text>
            <FlatList
              horizontal={true}
              style={{marginVertical: 10}}
              data={person.quickFacts}
              showsHorizontalScrollIndicator={false}
              renderItem={({item}) => {
                if (item.name === 'Significance') return null;
                return (
                  <View style={{marginRight: 20}}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '800',

                        marginBottom: 5,
                      }}>
                      {item.name}
                    </Text>
                    <Text style={{color: 'white'}}>{item.value}</Text>
                  </View>
                );
              }}
              keyExtractor={item => item.id}
            />
            <Text
              style={{
                color: 'white',
                fontWeight: '800',
                marginTop: 5,
                marginBottom: 5,
              }}>
              Info
            </Text>
            <Text style={{...FONTS.body4, color: 'white'}}>
              {person.listingDescription}
            </Text>
          </ScrollView>
        </BlurView>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default HistoricPerson;

const styles = StyleSheet.create({});

const d = {
  bodyText:
    "<h3>At a Glance</h3> <ul> <li>Started as a clerk to Interior Secretary Lane in 1913 at age 23</li> <li>Becomes Stephen Mather's assistant after Mather joins the Department of the Interior in 1915</li> <li>Works with Mather work to create a parks bureau, 1914–1916</li> <li>Acts as director of the National Park Service (NPS), 1917–1919</li> <li>Serves as Yellowstone’s superintendent and field director of NPS, 1919–1929</li> <li>Serves as NPS director, 1929–1933</li> </ul> <h3>Key Significance</h3> <ul> <li>He was instrumental in creating and maintaining the National Park Service.</li> <li>He saw Yellowstone as the flagship of the NPS and wanted his management of Yellowstone to be a model of national parks administered by the new agency.</li> <li>As an advocate of the cultural side to the NPS, he was essential to agency management of historical sites.</li> </ul> <p>Horace Albright was born in 1890 in California. In 1913, Albright graduated from the University of California, Berkeley and moved to Washington DC to begin working as a clerk for the Secretary of the Interior. Although he worked on park issues right away, his focus became nearly exclusively their issues in 1915. That year he became the assistant of newly hired Stephen Mather. In fact, Mather would not join the department unless Albright agreed to be his assistant in order to “’keep me [Mather] out of jail.’” Together they worked to create a parks bureau that resulted in the creation of the National Park Service (NPS) on August 25, 1916.</p> <p>In 1917 Stephen Mather became seriously ill from what was likely bipolar depression. This made it so Mather was unable to do the duties as director of the newly formed NPS. During a span between 1917 and 1919, Albright served as acting director.</p> <p>After Mather could return, Albright took up the jobs of superintendent of Yellowstone and NPS field director. As superintendent, Albright wanted to make Yellowstone a flagship of the agency and demonstrate how a park would be managed under the new National Park Service. Many of the current agency and park-wide policies and functions have roots with Albright. Two of the functions he helped found were visitor services and park museums. He was also instrumental in achieving the enlarged Grand Teton National Park of today.</p> <p>After Mather suffered a stroke in 1929, Albright became the second director of the NPS. One of his most lasting contributions to the National Park Service was to get all the war department sites placed under NPS control. This solidified the agency’s place as the keeper of both the natural and cultural heritage of the United States of America.</p> <p>In 1933, Albright left the NPS to work for the United States Potash Company. He retired from the company in 1956. Although he went into the private sector, Albright was always interested and involved in the affairs of national parks. He was even awarded the Presidential Medal of Freedom in 1980 for his involvement with the creation of the NPS. Albright died in 1987.</p>",
  firstName: 'Horace',
  geometryPoiId: '',
  id: '93643143-6594-4410-B0BF-0B15D85F4B59',
  images: [
    {
      altText: 'A man wearing a suit sitting behind a desk in an office.',
      caption:
        'Horace Albright sitting behind a desk in Mammoth Hot Springs in 1933.',
      credit: 'NPS',
      crops: [Array],
      description: '',
      title: '',
      url: 'https://www.nps.gov/common/uploads/people/nri/20200603/people/CDC9ABDC-E914-DA90-B5210CF7CC4C0BCC/CDC9ABDC-E914-DA90-B5210CF7CC4C0BCC.jpg',
    },
  ],
  lastName: 'Albright',
  latLong: '',
  latitude: '',
  listingDescription:
    'Horace Albright was instrumental in creating and maintaining the National Park Service. He served as director from 1917–1919, and again from 1929–1933. He also served as superintendent of Yellowstone National Park from 1919–1929.',
  longitude: '',
  middleName: 'Marden',
  quickFacts: [
    {
      id: 'F7A67C96-173F-4675-B374-7E3D3A1818B2',
      name: 'Significance',
      value:
        'Instrumental in creating and maintaining the National Park Service',
    },
    {
      id: '7F812988-263D-4233-81CF-6E7A89621004',
      name: 'Place of Birth',
      value: 'Bishop, California',
    },
    {
      id: '5E9CA71F-E57B-4222-BBD3-1A225E2351C2',
      name: 'Date of Birth',
      value: 'January 6,1890',
    },
    {
      id: '3905576C-509A-49F5-A8EE-B4CF14529BBB',
      name: 'Place of Death',
      value: 'Van Nuys, California',
    },
    {
      id: '8F2D2A55-2E87-4DF3-8E09-8520B5A5B7FD',
      name: 'Date of Death',
      value: 'March 28, 1987',
    },
  ],
  relatedOrganizations: [
    {id: 'C8DBBEFF-B534-4D31-8D1E-B49E65449EBB', name: 'Director', url: ''},
  ],
  relatedParks: [
    {
      designation: 'National Park',
      fullName: 'Yellowstone National Park',
      name: 'Yellowstone',
      parkCode: 'yell',
      states: 'ID,MT,WY',
      url: 'https://www.nps.gov/yell/index.htm',
    },
  ],
  tags: [
    'Horace Albright',
    'Yellowstone National Park',
    'national park service',
    'Director',
    '1916',
    'Stephen Mather',
  ],
  title: 'Horace M. Albright',
  url: 'https://www.nps.gov/people/horace-m-albright.htm',
};
