import React from 'react';
import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {BlurView} from '@react-native-community/blur';
import {FONTS, SIZES} from '../../constants';

const ThingToDo = ({
  navigation,
  route: {
    params: {TTD},
  },
}) => {
  const renderSubSect = (title, sub) => {
    if (!sub) {
      return null;
    }
    return (
      <>
        <Text style={styles.subHead}>{title}</Text>
        <Text style={styles.subText}>{sub}</Text>
      </>
    );
  };
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={{uri: TTD.images[0].url}}
        style={{
          height: 250,
        }}
        resizeMode="cover">
        <BlurView
          style={{
            marginTop: 'auto',
            marginHorizontal: 20,
            borderRadius: 10,
            padding: 10,
            marginBottom: 20,
          }}
          blurType="dark">
          <Text style={{...FONTS.h2, color: 'white', textAlign: 'center'}}>
            {TTD.title}
          </Text>
        </BlurView>
      </ImageBackground>

      <FlatList
        style={{flex: 1, padding: SIZES.padding}}
        ListHeaderComponent={() => (
          <Text style={{...FONTS.body5, fontWeight: '700'}}>
            {TTD.shortDescription}
          </Text>
        )}
        ListFooterComponent={() => <View style={{height: 100}} />}
        data={[
          {title: 'Location', data: TTD.location},
          {title: 'Duration', data: TTD.duration},
          {title: 'Time of Day', data: TTD.timeOfDayDescription},
          {title: 'Seasons', data: TTD.seasonDescription},
          {title: 'Access', data: TTD.accessibilityInformation},
        ]}
        keyExtractor={item => item.title}
        renderItem={({item}) => {
          return <>{renderSubSect(item.title, item.data)}</>;
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ThingToDo;

const styles = StyleSheet.create({
  subHead: {marginVertical: 10, marginBottom: 5, ...FONTS.h3},
  subText: {...FONTS.body5},
});

const t = {
  accessibilityInformation:
    'The path to the Cedar Pass Amphitheater from the parking lot is an accessible paved ramp. Service animals are allowed at the Amphitheater.',
  activities: [{id: '13A57703-BB1A-41A2-94B8-53B692EB7238', name: 'Astronomy'}],
  activityDescription: '',
  age: '',
  ageDescription: '',
  amenities: [],
  arePetsPermitted: 'false',
  arePetsPermittedWithRestrictions: 'false',
  doFeesApply: 'false',
  duration: '30-90 Minutes',
  durationDescription: '',
  feeDescription: '',
  geometryPoiId: '',
  id: '81A4B246-A7EE-4AEB-B2BE-58D6F9E57792',
  images: [
    {
      altText:
        'stars whir around the silhouette of a badlands butte in a circular motion',
      caption: '',
      credit: '',
      crops: [Array],
      description: '',
      title: '',
      url: 'https://www.nps.gov/common/uploads/cropped_image/3C4B8FA6-9334-824F-B22CBD9D82EDCF90.jpg',
    },
  ],
  isReservationRequired: 'false',
  latitude: '',
  location: 'Cedar Pass Amphitheater',
  locationDescription: '',
  longDescription:
    '<p>Summer night sky viewing is offered at the Cedar Pass Campground Amphitheater each evening from Memorial Day through Labor Day. After the evening ranger program, stay to enjoy the spectacular night sky. Telescopes are provided thanks to funding from our partners - Celestron and Badlands Natural History Association. The ranger will point out constellations, stars, and planets. Everyone is given an opportunity to see impressive objects of the night sky.</p> <h2>Night Sky Viewings</h2> <p>Rarely do most people have the opportunity to experience the awesome dark skies and the spectacular sights found here. Badlands National Park offers such wondrous sights for those who visit the park. On any given night, visitors will be exposed to more than 7,500 stars. Especially phenomenal is the clarity of our own Milky Way Galaxy. Night sky views include not only galaxies but also star clusters, nebulae, planets and moons. Visitors are also treated to fly-overs by numerous satellites and the International Space Station.<br /> <br /> Join park rangers and astronomy volunteers each night in the summer after the Evening Program for a Night Sky Viewing. The time of this program is subject to change due to sunset, but the location is always the same at the Cedar Pass Amphitheater.</p> <h2>Badlands Astronomy Festival</h2> <p>The Annual Badlands Astronomy Festival brings together space science professionals, amateur astronomers, educators, youth groups, South Dakota residents and visitors for a "stellar experience". Celebrate the beauty of a dark night sky and the wonder of space exploration. Novices and experts alike will enjoy daily family-friendly activities and evening presentations with special guest speakers. Nightly telescope viewing will be sponsored by the NPS Night Sky Program and Celestron.</p> <p>This three-day celebration at Badlands National Park will support the continued protection and enjoyment of our incredible night skies as a precious natural resource. The festival will focus on active engagement in resource education programs and hands-on experiences. Astronomy Festival events do not require advance registration or tickets.<br /> Check out the <a href="https://www.nps.gov/badl/learn/news/badlands-astronomy-festival.htm">Festival</a> page for more info.  </p> <h3>You Can Help!</h3> <p>If you are interested in sharing your love of astronomy and natural dark skies, consider applying for a position as a <a href="https://www.nps.gov/badl/getinvolved/volunteer.htm">Volunteer In Park (VIP) Night Sky Assistant</a>. For more information contact the park’s <a href="mailto:edward_welsh@nps.gov">Volunteer Program Coordinator</a>.</p>',
  longitude: '',
  petsDescription:
    '<ul> <li>Pets are allowed only on paved or gravel roads and in developed areas such as campgrounds.</li> <li>Pets must be kept on a leash no longer than six feet at all times.</li> <li>Pets are not allowed on trails or in public buildings.</li> <li>Leaving an animal unattended and/or tied to a fixed object is prohibited, as well as a danger to your pet.</li> <li>Pet etiquette dictates always cleaning up animal waste and disposing of it in trash receptacles.</li> <li><strong>Service animals are an exception to most pet restrictions and are allowed on trails and in public buildings. </strong>Service animals must be kept on a leash at all times and, due to potentially infectious wildlife diseases, are not allowed in areas with prairie dog colonies.</li> <li>Dogs whose sole function is to provide comfort or emotional support do not qualify as service animals under the ADA.</li> </ul>',
  relatedOrganizations: [],
  relatedParks: [
    {
      designation: 'National Park',
      fullName: 'Badlands National Park',
      name: 'Badlands',
      parkCode: 'badl',
      states: 'SD',
      url: 'https://www.nps.gov/badl/index.htm',
    },
  ],
  reservationDescription: '',
  season: ['Spring', 'Summer', 'Fall'],
  seasonDescription:
    'Night Sky Viewings typically take place May through September. Contact the <a href="https://www.nps.gov/badl/planyourvisit/hours.htm">Ben Reifel Visitor Center</a> for more information on this year\'s programs.',
  shortDescription:
    'Night Sky Viewings are a great way to see the dark skies of the Badlands. Park rangers and astronomy volunteers are available to point out objects in the night sky and help you look through telescopes.',
  tags: [
    'night sky',
    'popular activities',
    'MidwestNPS',
    'Great Plains',
    'South Dakota',
    'ranger programs',
  ],
  timeOfDay: ['Night'],
  timeOfDayDescription:
    'The timing of the Night Sky Viewing depends on when the sun sets, but will always follow the Evening Program of the day. In May through July, this program typically starts at 9:45pm, and in August and September it typically starts at 9:15pm. Contact the <a href="https://www.nps.gov/badl/planyourvisit/hours.htm">Ben Reifel Visitor Center</a> for more information.',
  title: 'Enjoy the Night Sky',
  topics: [
    {id: 'A7359FC4-DAD8-45F5-AF15-7FF62F816ED3', name: 'Night Sky'},
    {id: 'E06F3C94-AC8A-4B1C-A247-8EBA8910D5EE', name: 'Astronomy'},
  ],
  url: 'https://www.nps.gov/thingstodo/night-sky-badl.htm',
};
