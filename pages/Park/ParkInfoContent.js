import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import useFullParkData from '../../api/nps/getFullParkData';
import {COLORS, FONTS, SIZES} from '../../constants';
import {useGlobal} from '../../context/global-context';
import {CONNECTION} from '../../utils/connection';
import DevSection from './components/DevSection';
import ParkDirections from './components/ParkDirections';
import ParkHoursAndFees from './components/ParkHoursAndFees';
import ParkWeather from './components/ParkWeather';
import {usePark} from './park-context';
import BoxListSection from './subComponents/BoxListSection';
import ImgInfoBoxFlatList from './subComponents/ImgInfoBoxFlatList';
import SectionHead from './subComponents/SectionHead';

const DataKeys = [
  'id',
  'url',
  'fullName',
  'parkCode',
  'description',
  'latitude',
  'longitude',
  'latLong',
  'activities',
  'topics',
  'states',
  'contacts',
  'entranceFees',
  'entrancePasses',
  'fees',
  'directionsInfo',
  'directionsUrl',
  'operatingHours',
  'addresses',
  'images',
  'weatherInfo',
  'name',
  'designation',
];

const FDKeys = [
  'alerts',
  'articles',
  'campgrounds',
  'events',
  'newsreleases',
  'people',
  'places',
  'thingstodo',
  'webcams',
];

const ParkInfoContent = () => {
  const {data, setImgIndex, sections} = usePark();
  const {data: fullData} = useFullParkData(data.parkCode);
  const {connection} = useGlobal();

  if (!data) {
    return null;
  }

  const {
    description,
    images,
    weatherInfo,
    topics,
    activities,
    states,
    addresses,
    directionsInfo,
    directionsUrl,
    entranceFees,
    entrancePasses,
    latLong,
    operatingHours,
    fullName,
  } = data;

  const address = addresses[0];

  return (
    <View style={styles.infoWrapper}>
      <Text style={styles.descriptionText}>{description}</Text>
      {CONNECTION.show(connection) && (
        <FlatList
          style={styles.imageScrollWrapper}
          horizontal={true}
          data={images}
          renderItem={item => {
            const uri = item.item.url;

            return (
              <TouchableOpacity
                style={{marginRight: 10}}
                onPress={() => setImgIndex(item.index)}>
                <Image
                  source={{uri}}
                  style={{
                    height: 120,
                    width: 120,
                    borderRadius: 10,
                    backgroundColor: COLORS.transparentGreen,
                  }}
                />
              </TouchableOpacity>
            );
          }}
          keyExtractor={item => item.index}
          showsHorizontalScrollIndicator={false}
        />
      )}

      <FlatList
        data={[
          {
            section: 'Hours and Fees',
            content: (
              <ParkHoursAndFees
                data={[{operatingHours, entrancePasses, entranceFees}]}
              />
            ),
          },
          {
            section: 'Directions',
            content: (
              <ParkDirections
                data={[{directionsInfo, directionsUrl, latLong, fullName}]}
              />
            ),
          },
          {
            section: 'Weather',
            content: <ParkWeather data={weatherInfo} />,
          },
          {
            section: 'Things To Do',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.thingstodo.map(ttd => {
                  return {
                    ...ttd,
                    infoUrl: ttd?.url,
                    subText: ttd?.activityDescription,
                    img: ttd?.images[0]?.url,
                  };
                })}
              />
            ),
          },

          {
            section: 'Places',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.places.map(place => {
                  return {
                    ...place,
                    infoUrl: place.url,
                    subText: place?.listingDescription,
                    img: place?.images[0]?.url,
                  };
                })}
              />
            ),
          },
          {
            section: 'Campgrounds',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.campgrounds.map(camp => {
                  return {
                    ...camp,
                    infoUrl: camp?.url,
                    title: camp?.name,
                    subText: camp?.description,
                    img: camp?.images[0]?.url,
                  };
                })}
              />
            ),
          },

          // {
          //   section: 'Webcams',
          //   content: <DevSection data={fullData?.webcams} />,
          // },
          // {
          //   section: 'Events',
          //   // content: <DevSection data={fullData?.events} />,
          //   content: (
          //     <ImgInfoBoxFlatList
          //       data={fullData?.events.map(event => {
          //         console.log('event', event);
          //         return {
          //           ...event,

          //         };
          //       })}
          //     />
          //   ),
          // },
          {
            section: 'News Releases',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.newsreleases.map(nr => {
                  return {
                    ...nr,
                    infoUrl: nr?.url,
                    img: nr?.image?.url,
                  };
                })}
              />
            ),
          },
          {
            section: 'Alerts',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.alerts.map(alert => {
                  return {
                    ...alert,
                    infoUrl: alert?.url,
                    subText: alert?.description,
                  };
                })}
              />
            ),
          },
          {
            section: 'Articles',
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.articles.map(article => {
                  return {
                    ...article,
                    infoUrl: article?.url,
                    subText: article?.listingDescription,
                  };
                })}
              />
            ),
          },

          {
            section: 'Historical Figures',
            // content: <ParkPeople data={fullData?.people} />,
            content: (
              <ImgInfoBoxFlatList
                data={fullData?.people.map(people => {
                  return {
                    ...people,
                    infoUrl: people?.url,
                    subText: people?.listingDescription,
                    img: people?.images[0].url,
                  };
                })}
              />
            ),
          },
          {
            section: 'Topics',
            content: <BoxListSection data={topics} />,
          },
          {
            section: 'Activities',
            content: <BoxListSection data={activities} />,
          },
          {
            section: 'States',
            content: (
              <BoxListSection
                data={states.split(',').map(opt => ({
                  name: opt,
                }))}
              />
            ),
          },
        ]}
        renderItem={({item}) => {
          const hasEntries = !!item.content.props?.data?.length;

          if (!hasEntries) {
            return null;
          }

          return (
            <>
              <SectionHead section={item.section} />
              {sections[item.section] && item.content}

              <View style={{height: 10}} />
            </>
          );
        }}
        keyExtractor={item => item.section}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default ParkInfoContent;

const styles = StyleSheet.create({
  infoWrapper: {
    padding: SIZES.padding,
  },
  descriptionText: {
    fontWeight: '600',
    lineHeight: 22,
    fontSize: 15,
  },
  imageScrollWrapper: {
    marginVertical: SIZES.padding,
  },
  noEntries: {
    color: COLORS.lightGray2,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 10,
  },
});

const t = {
  activities: [
    {id: '09DF0950-D319-4557-A57E-04CD2F63FF42', name: 'Arts and Culture'},
    {id: '13A57703-BB1A-41A2-94B8-53B692EB7238', name: 'Astronomy'},
    {id: 'D37A0003-8317-4F04-8FB0-4CF0A272E195', name: 'Stargazing'},
    {id: '7CE6E935-F839-4FEC-A63E-052B1DEF39D2', name: 'Biking'},
    {id: 'A59947B7-3376-49B4-AD02-C0423E08C5F7', name: 'Camping'},
    {id: '4A58AF13-E8FB-4530-B41A-97DF0B0C77B7', name: 'Backcountry Camping'},
    {
      id: '9159DF0F-951D-4AAE-9987-CEB3CE2A9ADA',
      name: 'Car or Front Country Camping',
    },
    {id: '7CFF5F03-5ECC-4F5A-8572-75D1F0976C0C', name: 'Group Camping'},
    {id: '07CBCA6A-46B8-413F-8B6C-ABEDEBF9853E', name: 'Canyoneering'},
    {id: 'B12FAAB9-713F-4B38-83E4-A273F5A43C77', name: 'Climbing'},
    {id: '87D3B1CD-3903-4561-ABB1-2DD870C43F2F', name: 'Rock Climbing'},
    {id: 'B33DC9B6-0B7D-4322-BAD7-A13A34C584A3', name: 'Guided Tours'},
    {id: 'BFF8C027-7C8F-480B-A5F8-CD8CE490BFBA', name: 'Hiking'},
    {id: '0307955A-B65C-4CE4-A780-EB36BAAADF0B', name: 'Horse Trekking'},
    {id: '1886DA47-0AEC-4568-B9C2-8E9BC316AAAC', name: 'Horseback Riding'},
    {id: 'DF4A35E0-7983-4A3E-BC47-F37B872B0F25', name: 'Junior Ranger Program'},
    {id: '24380E3F-AD9D-4E38-BF13-C8EEB21893E7', name: 'Shopping'},
    {
      id: '467DC8B8-0B7D-436D-A026-80A22358F615',
      name: 'Bookstore and Park Store',
    },
  ],
  addresses: [
    {
      city: 'Moab',
      line1: '5 miles north of Moab, Utah, on US 191',
      line2: '',
      line3: '',
      postalCode: '84532',
      stateCode: 'UT',
      type: 'Physical',
    },
    {
      city: 'Moab',
      line1: 'PO Box 907',
      line2: '',
      line3: '',
      postalCode: '84532',
      stateCode: 'UT',
      type: 'Mailing',
    },
  ],
  contacts: {emailAddresses: [[Object]], phoneNumbers: [[Object]]},
  description:
    'Visit Arches to discover a landscape of contrasting colors, land forms, and textures unlike any other in the world. The park has over 2,000 natural stone arches and hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.',
  designation: 'National Park',
  directionsInfo:
    'Arches National Park is located in southeast Utah, five miles north of Moab on US 191. From Moab, Utah, drive five miles north on Main Street/US 191. Turn right at the stoplight. From Interstate 70, take exit 182 (Crescent Junction), then drive south 28 miles on US 191. Turn left at the stoplight.',
  directionsUrl: 'http://www.nps.gov/arch/planyourvisit/directions.htm',
  entranceFees: [
    {
      cost: '30.00',
      description:
        'Admits one private, non-commercial vehicle (15 passenger capacity or less) and all its occupants.',
      title: 'Private Vehicle Fee',
    },
    {
      cost: '25.00',
      description:
        'Admits a private, non-commercial motorcycle and its riders.',
      title: 'Motorcycle Fee',
    },
    {
      cost: '15.00',
      description:
        'Admits one individual with no car. Typically used for bicyclists, hikers, and pedestrians. Youth 15 and under are admitted free.',
      title: 'Per Person',
    },
  ],
  entrancePasses: [
    {
      cost: '55.00',
      description:
        'Valid for one year through the month of purchase. Admits one (1) private, non-commercial vehicle or its pass holder to Arches and Canyonlands national parks, and Natural Bridges National Monument.',
      title: 'Southeast Utah Parks Pass',
    },
  ],
  fees: [],
  fullName: 'Arches National Park',
  id: '36240051-018E-4915-B6EA-3F1A7F24FBE4',
  images: [
    {
      altText: 'a stone monolith reflected in standing water',
      caption:
        'The Organ rock formation is reflected in one of many natural potholes.',
      credit: 'NPS/Neal Herbert',
      title: 'The Organ with Potholes',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg',
    },
    {
      altText: 'a broad, red arch with rock pinnacles in the background',
      caption:
        'Double O Arch is one of many large arches in the Devils Garden area',
      credit: 'NPS Photo',
      title: 'Double O Arch',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79931C-1DD8-B71B-0BF201E3DB540D04.jpg',
    },
    {
      altText: 'a stone arch',
      caption:
        'Delicate Arch is perhaps the most famous natural arch in the world.',
      credit: 'NPS Photo',
      title: 'Delicate Arch',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0B2B-1DD8-B71B-0BE0E26B0740AA6B.jpg',
    },
    {
      altText: 'the Milky Way arcs above silhouetted stone pinnacles',
      caption: 'Arches offers some excellent night sky viewing.',
      credit: 'NPS/Wonderly',
      title: 'Milky Way over the Garden of Eden',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0C49-1DD8-B71B-0B460D58D6E83B40.jpg',
    },
    {
      altText:
        'two hikers descend a broad wash with tall rock walls on either side.',
      caption:
        'The Park Avenue trail is one of many hiking trails at Arches, ranging from easy to strenuous.',
      credit: 'NPS/Herbert',
      title: 'Park Avenue Trail',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0DE5-1DD8-B71B-0BFBE720788EF4A3.jpg',
    },
  ],
  latLong: 'lat:38.72261844, long:-109.5863666',
  latitude: '38.72261844',
  longitude: '-109.5863666',
  name: 'Arches',
  operatingHours: [
    {
      description:
        'Arches National Park is generally open 24 hours a day, year-round. Fees apply. The park is very busy between March and October. To avoid traffic, we recommend entering the park before 8 am or after 3 pm.',
      exceptions: [Array],
      name: 'Park Hours',
      standardHours: [Object],
    },
  ],
  parkCode: 'arch',
  states: 'UT',
  topics: [
    {id: '7F81A0CB-B91F-4896-B9A5-41BE9A54A27B', name: 'Archeology'},
    {
      id: '1F833C99-A75D-4F9E-9256-B96523485466',
      name: 'Farming and  Agriculture',
    },
    {id: 'E4E84C87-6737-4C37-9157-5962648A35F2', name: 'Ranches'},
    {
      id: 'A1BAF33E-EA84-4608-A888-4CEE9541F027',
      name: 'Native American Heritage',
    },
    {id: '0D00073E-18C3-46E5-8727-2F87B112DDC6', name: 'Animals'},
    {id: '957EF2BD-AC6C-4B7B-BD9A-87593ADC6691', name: 'Birds'},
    {id: 'F0F97E32-2F29-41B4-AF98-9FBE8DAB36B1', name: 'Geology'},
    {id: 'A7359FC4-DAD8-45F5-AF15-7FF62F816ED3', name: 'Night Sky'},
    {
      id: '4244F489-6813-4B7A-9D0C-20CE098C8FFF',
      name: 'Rock Landscapes and Features',
    },
    {id: '72E87FCE-B48F-48E8-8761-4849A79736AF', name: 'Arches'},
    {id: '5BE55D7F-BDB6-4E3D-AC35-2D8EBB974417', name: 'Trails'},
  ],
  url: 'https://www.nps.gov/arch/index.htm',
  weatherInfo:
    'Arches is part of the Colorado Plateau, a "high desert" region that experiences wide temperature fluctuations, sometimes over 40 degrees in a single day. The temperate (and most popular) seasons are spring (April-May) and fall (mid-September-October), when daytime highs average 60 to 80 F and lows average 30 to 50 F. Summer temperatures often exceed 100 F, making strenuous exercise difficult. Winters are cold, with highs averaging 30 to 50 F, and lows averaging 0 to 20 F.',
};
