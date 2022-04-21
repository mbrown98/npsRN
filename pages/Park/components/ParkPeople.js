import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BROWSER from '../../../utils/browser';

const ParkPeople = ({data}) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({item: person}) => {
        return (
          <TouchableOpacity
            style={styles.imgBox}
            onPress={() => BROWSER.openBrowser(person.url)}>
            <Image source={{uri: person.images[0].url}} style={styles.img} />
            <Text
              style={styles.infoText}
              numberOfLines={3}
              ellipsizeMode="tail">
              {person.title}
            </Text>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ParkPeople;

const styles = StyleSheet.create({
  imgBox: {
    marginRight: 20,
    alignItems: 'center',
  },
  img: {height: 100, width: 100, borderRadius: 50, marginVertical: 10},
  infoText: {
    fontWeight: '700',
    fontSize: 15,
    marginTop: 0,
    maxWidth: 100,
    textAlign: 'center',
  },
});

const p = {
  bodyText:
    "<p>Samuel Alexander Mudd I was a physician, small-scale tobacco farmer and slave owner who assisted in the escape of John Wilkes Booth in the aftermath of the assassination of President Abraham Lincoln. Historians debate how much Dr. Mudd knew of the plot to kidnap or kill the president and others before the event, but certain facts are indisputable: that Mudd was entirely sympathetic to the Southern cause; that Booth visited his farm some weeks before the event; that Mudd met with Booth and other conspirators multiple times in Washington and they with him at his farm; that he lied about knowing Booth; and that he delayed notifying authorities of Booth's presence in his home until days after Booth's departure.<br> <br> Despite the circumstantial evidence, no direct testimony of Mudd's prior involvement in the plot emerged during his trial and, though convicted as a conspirator, Mudd escaped the death penalty by a single vote of the Military Commission. After Mudd's trial, conspirator George Atzerodt claimed that Dr. Mudd played an important role in the scheme. \"I am certain Dr. Mudd knew all about it,\" Atzerodt said. \"Booth sent liquors and provisions for the trip with the [kidnapped] President to Richmond about two weeks before the murder to Dr. Mudd's.\" Samuel Mudd was sentenced to life imprisonment for his association with the assassins and was imprisoned at Fort Jefferson in the Dry Tortugas off the Florida coast, but was pardoned by President Andrew Johnson in 1869. After his release, he returned to his Maryland farm where he spent the remainder of his life.</p>",
  firstName: '',
  geometryPoiId: '',
  id: 'D569C247-61C1-4120-8FA3-40D51C3ECB0E',
  images: [
    {
      altText: 'Photo of Samuel Mudd',
      caption: 'Samuel Mudd',
      credit: 'Library of Congress',
      crops: [Array],
      description: 'Samuel Mudd',
      title: 'Photo of Samuel Mudd',
      url: 'https://www.nps.gov/common/uploads/people/images/nri/subject/civilwar/CAAE7317-FF13-B7CB-7084807363709D8D/CAAE7317-FF13-B7CB-7084807363709D8D.jpg',
    },
  ],
  lastName: '',
  latLong: '',
  latitude: '',
  listingDescription:
    'Samuel Mudd, a Maryland physician and Southern sympathizer, was tried and convicted of assisting John Wilkes Booth escape following the assassination of Abraham Lincoln. Sentenced to imprisonment at Fort Jefferson off the Florida coast, would his name still be "Mudd" after a yellow fever epidemic overtakes the island fortress?',
  longitude: '',
  middleName: '',
  quickFacts: [
    {
      id: 'f7a67c96-173f-4675-b374-7e3d3a1818b2',
      name: 'Significance',
      value:
        'Physician who treated John Wilkes Booth after the assassination of Abraham Lincoln',
    },
    {
      id: '7f812988-263d-4233-81cf-6e7a89621004',
      name: 'Place Of Birth',
      value: 'Charles County, MD',
    },
    {
      id: '5e9ca71f-e57b-4222-bbd3-1a225e2351c2',
      name: 'Date Of Birth',
      value: 'December 20, 1833',
    },
    {
      id: '3905576c-509a-49f5-a8ee-b4cf14529bbb',
      name: 'Place Of Death',
      value: 'Waldorf, MD',
    },
    {
      id: '8f2d2a55-2e87-4df3-8e09-8520b5a5b7fd',
      name: 'Date Of Death',
      value: 'January 10, 1883',
    },
    {
      id: 'e0ceb20d-33ea-4a2e-8444-de8d7d572ca7',
      name: 'Place Of Burial',
      value: 'Bryantown, MD',
    },
    {
      id: '87bfd41c-3e7b-45da-9ce0-1aa7c093b2a5',
      name: 'Cemetery Name',
      value: "St. Mary's Catholic Church Cemetery",
    },
  ],
  relatedOrganizations: [],
  relatedParks: [
    {
      designation: 'National Park',
      fullName: 'Dry Tortugas National Park',
      name: 'Dry Tortugas',
      parkCode: 'drto',
      states: 'FL',
      url: 'https://www.nps.gov/drto/index.htm',
    },
    {
      designation: '',
      fullName: "Ford's Theatre",
      name: "Ford's Theatre",
      parkCode: 'foth',
      states: 'DC',
      url: 'https://www.nps.gov/foth/index.htm',
    },
  ],
  tags: ['Civil War', 'Medical History', 'lincoln assassination'],
  title: 'Samuel Mudd',
  url: 'https://www.nps.gov/people/samuel-mudd.htm',
};
