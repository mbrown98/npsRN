const parkCodes = {
  abli: {
    description:
      "For over a century people from around the world have come to rural Central Kentucky to honor the humble beginnings of our 16th president, Abraham Lincoln. His early life on Kentucky's frontier shaped his character and prepared him to lead the nation through Civil War. The country's first memorial to Lincoln, built with donations from young and old, enshrines the symbolic birthplace cabin.",
    fullName: 'Abraham Lincoln Birthplace National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C861078-1DD8-B71B-0B774A242EF6A706.jpg',
    },
    latitude: '37.5858662',
    longitude: '-85.67330523',
    parkCode: 'abli',
  },
  acad: {
    description:
      "Acadia National Park protects the natural beauty of the highest rocky headlands along the Atlantic coastline of the United States, an abundance of habitats, and a rich cultural heritage. At 3.5 million visits a year, it's one of the top 10 most-visited national parks in the United States. Visitors enjoy 27 miles of historic motor roads, 158 miles of hiking trails, and 45 miles of carriage roads.",
    fullName: 'Acadia National Park',
    image: {
      credit: 'NPS / Kristi Rugg',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B45AE-1DD8-B71B-0B7EE131C7DFC2F5.jpg',
    },
    latitude: '44.409286',
    longitude: '-68.247501',
    parkCode: 'acad',
  },
  adam: {
    description:
      'From the sweet little farm at the foot of Penn’s Hill to the gentleman’s country estate at Peace field, Adams National Historical Park is the story of “heroes, statesman, philosophers … and learned women” whose ideas and actions helped to transform thirteen disparate colonies into one united nation.',
    fullName: 'Adams National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C7416-1DD8-B71B-0B1B30D0827F7C74.jpg',
    },
    latitude: '42.2553961',
    longitude: '-71.01160356',
    parkCode: 'adam',
  },
  afam: {
    description:
      'Over 200,000 African-American soldiers and sailors served in the U.S. Army and Navy during the Civil War. Their service helped to end the war and free over four million slaves. The African American Civil War Memorial honors their service and sacrifice.',
    fullName: 'African American Civil War Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C816B50-1DD8-B71B-0BF380049FB6B6A2.jpg',
    },
    latitude: '38.9166',
    longitude: '-77.026',
    parkCode: 'afam',
  },
  afbg: {
    description:
      'African Burial Ground is the oldest and largest known excavated burial ground in North America for both free and enslaved Africans. It protects the historic role slavery played in building New York',
    fullName: 'African Burial Ground National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8554EA-1DD8-B71B-0BE6FF3BF04C18B8.jpg',
    },
    latitude: '40.71452681',
    longitude: '-74.00447358',
    parkCode: 'afbg',
  },
  agfo: {
    description:
      'In the early 1900s, paleontologists unearthed the Age of Mammals when they found full skeletons of extinct Miocene mammals in the hills of Nebraska -- species previously only known through fragments. At the same time, an age of friendship began between rancher James Cook and Chief Red Cloud of the Lakota. These two unprecedented events are preserved and protected here... at Agate Fossil Beds.',
    fullName: 'Agate Fossil Beds National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A058F-1DD8-B71B-0B188ED102F7285F.jpg',
    },
    latitude: '42.42170419',
    longitude: '-103.753886',
    parkCode: 'agfo',
  },
  alag: {
    description:
      'The headwaters of Alagnak Wild River lie within the rugged Aleutian Range of neighboring Katmai National Park and Preserve. Meandering west towards Bristol Bay and the Bering Sea, the Alagnak traverses the beautiful Alaska Peninsula, providing an unparalleled opportunity to experience the unique wilderness, wildlife, and cultural heritage of southwest Alaska.',
    fullName: 'Alagnak Wild River',
    image: {
      credit: 'NPS/R. Wood',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E810E-1DD8-B71B-0B92FDF31F5C0CA6.jpg',
    },
    latitude: '59.05180188',
    longitude: '-156.112002',
    parkCode: 'alag',
  },
  alca: {
    description:
      "Alcatraz reveals stories of American incarceration, justice, and our common humanity. This small island was once a fort, a military prison, and a maximum security federal penitentiary. In 1969, the Indians of All Tribes occupied Alcatraz for 19 months in the name of freedom and Native American civil rights. We invite you to explore Alcatraz's complex history and natural beauty.",
    fullName: 'Alcatraz Island',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/2514A14F-D5E3-BB31-4A0C4175BF61216A.jpg',
    },
    latitude: '37.82676234',
    longitude: '-122.4230206',
    parkCode: 'alca',
  },
  aleu: {
    description:
      'During World War II the remote Aleutian Islands, home to the Unangax̂ (Aleut) people for over 8,000 years, became a fiercely contested battleground in the Pacific. This thousand-mile-long archipelago saw invasion by Japanese forces, the occupation of two islands; a mass relocation of Unangax̂ civilians; a 15-month air war; and one of the deadliest battles in the Pacific Theater.',
    fullName: 'Aleutian Islands World War II National Historic Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BC1AE-1DD8-B71B-0BF60FDE7A21822B.jpg',
    },
    latitude: '53.9143',
    longitude: '-166.5197',
    parkCode: 'aleu',
  },
  alfl: {
    description:
      '13,000 years ago, this site was well-known by mammoth hunters as a source of flint for tools. Centuries passed, but the colorful flint never lost its value or usefulness in the Texas Panhandle. Learn how important this site was to the survival, commerce and culture of the people of the High Plains.',
    fullName: 'Alibates Flint Quarries National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7EFA64-1DD8-B71B-0BD2E6EF7D52B0BF.jpg',
    },
    latitude: '35.5819662',
    longitude: '-101.6717008',
    parkCode: 'alfl',
  },
  alka: {
    description:
      'Established in 2000 to preserve, protect and interpret traditional Native Hawaiian culture and natural resources, Ala Kahakai National Historic Trail is a 175 mile corridor encompassing a network of culturally and historically significant trails. This "trail by the sea" traverses wahi pana (storied landscapes), ancient Hawaiian sites and over 200 ahupuaʻa (traditional land divisions). Connect now!',
    fullName: 'Ala Kahakai National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86C7EB-1DD8-B71B-0BF2A10341617580.jpg',
    },
    latitude: '19.144668109',
    longitude: '-155.890734294',
    parkCode: 'alka',
  },
  alpo: {
    description:
      'The first railroad to circumvent the Allegheny Mountains, the Allegheny Portage Railroad was the finishing piece of the Pennsylvania Main Line Canal. "The Portage" opened in 1834, marking the first time that there was one, direct route between Philadelphia and Pittsburgh. All things to all people, it served merchants, passengers, slaves in pursuit of freedom, and soldiers from the Mexican War.',
    fullName: 'Allegheny Portage Railroad National Historic Site',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/2C12F155-DE91-DD44-9108A954EB6F3DF6.jpg',
    },
    latitude: '40.42977467',
    longitude: '-78.57431622',
    parkCode: 'alpo',
  },
  amch: {
    description:
      'Amache, also known as the Granada Relocation Center, near Granada, Colorado was one of ten incarceration sites established by the War Relocation Authority during World War II to unjustly incarcerate Japanese Americans. Over 10,000 people, most American citizens, were incarcerated at Amache from 1942-1945. Amache - a place to reflect, recommit, and further the pursuit of freedom and justice.',
    fullName: 'Amache National Historic Site',
    image: {
      credit: 'NPS Photo / Stuart West',
      url: 'https://www.nps.gov/common/uploads/structured_data/C1E570C9-C140-0E81-EDDC02810B0B7EAE.jpg',
    },
    latitude: '38.04962',
    longitude: '-102.32903',
    parkCode: 'amch',
  },
  amis: {
    description:
      'An oasis in the desert, Amistad National Recreation Area consists of the US portion of the International Amistad Reservoir. Amistad, whose name comes from the Spanish word meaning friendship, is best known for excellent water-based recreation, camping, hiking, rock art viewing, and its rich cultural history. Amistad is also home to a wide variety of plant and animal life above and below the water.',
    fullName: 'Amistad National Recreation Area',
    image: {
      credit: 'A. Curtis',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F0F97-1DD8-B71B-0B2AE2BF68A9390E.jpg',
    },
    latitude: '29.53539777',
    longitude: '-101.075821',
    parkCode: 'amis',
  },
  amme: {
    description:
      'American Memorial Park honors the American and Marianas people who gave their lives during the Marianas Campaign of World War II. At the park, memorials stand in tribute to the courage and sacrifice of the US Servicemen and Chamorro and Carolinian civilians who were killed in the battles between the United States and Japan that took place on Saipan, Tinian, and the Philippine Sea in 1944.',
    fullName: 'American Memorial Park',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8576F5-1DD8-B71B-0B2A1CF96D1F9701.jpg',
    },
    latitude: '15.21680033',
    longitude: '145.7231096',
    parkCode: 'amme',
  },
  anac: {
    description:
      'Welcome to Anacostia Park, your neighborhood national park in the heart of Washington, DC! Enjoy exercise along the river trail or relax by the water, Anacostia Park is a breath of fresh air and a space to unwind amid a bustling city.',
    fullName: 'Anacostia Park',
    image: {
      credit: 'NPS Photo/Miguel Marquez',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82A965-1DD8-B71B-0B42F2CD698E11A7.jpg',
    },
    latitude: '38.8782',
    longitude: '-76.9703',
    parkCode: 'anac',
  },
  anch: {
    description:
      'Alaska’s parks, forests, and refuges are rich and varied. The Alaska Public Lands Information Centers help visitors and residents to have meaningful, safe, enjoyable experiences on public lands, and encourages them to sustain the natural and cultural resources of Alaska. These centers provide trip-planning, interpretation, and education for all ages.',
    fullName: 'Alaska Public Lands',
    image: {
      credit: 'NPS/Josh Spice',
      url: 'https://www.nps.gov/common/uploads/structured_data/2595FA12-DF7A-1B6C-55D8F41ABCA2E011.jpg',
    },
    latitude: '61.2188',
    longitude: '-149.894536',
    parkCode: 'anch',
  },
  ande: {
    description:
      'Nearly 13,000 men died on these grounds, a site that became infamous even before the Civil War ended. Their burial grounds became Andersonville National Cemetery, where veterans continue to be buried today. This place, where tens of thousands suffered captivity so others could be free, is also home to the National Prisoner of War Museum and serves as a memorial to all American prisoners of war.',
    fullName: 'Andersonville National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87F1CB-1DD8-B71B-0B8B6223F6173DF9.jpg',
    },
    latitude: '32.19831758',
    longitude: '-84.12988898',
    parkCode: 'ande',
  },
  ania: {
    description:
      'Given its remote location and challenging weather conditions, Aniakchak is one of the most wild and least visited places in the National Park System. This landscape is a vibrant reminder of Alaska\'s location in the volcanically active "Ring of Fire," as it is home to an impressive six mile (10 km) wide, 2,500 ft (762 m) deep caldera formed during a massive volcanic eruption 3,500 years ago.',
    fullName: 'Aniakchak National Monument & Preserve',
    image: {
      credit: 'NPS Photo/Troy Hamon',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A78AD-1DD8-B71B-0BF20886BAA0C0DA.jpg',
    },
    latitude: '56.85317675',
    longitude: '-157.5544362',
    parkCode: 'ania',
  },
  anjo: {
    description:
      "Andrew Johnson's complex presidency (1865-69) illustrates the Constitution at work following the Civil War. As the President and Congress disagreed on Reconstruction methods, the Constitution served as their guide on balance of powers, vetoes, and impeachment. In the end, it evolved as a living document with pivotal amendments on freedom, citizenship, and voting rights - topics still vital today.",
    fullName: 'Andrew Johnson National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/EC39774A-008A-5580-AC8ECA5E8D8B98AD.jpg',
    },
    latitude: '36.15624509',
    longitude: '-82.83709021',
    parkCode: 'anjo',
  },
  anti: {
    description:
      "23,000 soldiers were killed, wounded or missing after twelve hours of savage combat on September 17, 1862. The Battle of Antietam ended the Confederate Army of Northern Virginia's first invasion into the North and led Abraham Lincoln to issue the preliminary Emancipation Proclamation.",
    fullName: 'Antietam National Battlefield',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80828B-1DD8-B71B-0BAC8994DD862724.jpg',
    },
    latitude: '39.46763452',
    longitude: '-77.73828017',
    parkCode: 'anti',
  },
  apco: {
    description:
      "On April 9, 1865, the surrender of the Army of Northern Virginia in the McLean House in the village of Appomattox Court House, Virginia signaled the end of the nation's largest war. Two important questions about its future were answered. Could the nation survive a civil war intact, and would that nation exist without slavery? The answer to both was yes and a new nation was born.",
    fullName: 'Appomattox Court House National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85DA69-1DD8-B71B-0B56D1B9F92263B5.jpg',
    },
    latitude: '37.38022164',
    longitude: '-78.79856982',
    parkCode: 'apco',
  },
  apis: {
    description:
      'Imagine that moment, being in that perfect spot as the sun rises, and everything comes into focus. A rocky shoreline suddenly reflects the world around you. Waiting for you among the water, land, forests, and history is that moment. How will the islands inspire you?',
    fullName: 'Apostle Islands National Lakeshore',
    image: {
      credit: 'NPS Photo / M. Carlson',
      url: 'https://www.nps.gov/common/uploads/structured_data/D6607D31-F031-1115-3C8F37DAD0BBB0E2.jpg',
    },
    latitude: '46.96240467',
    longitude: '-90.66045665',
    parkCode: 'apis',
  },
  appa: {
    description:
      'The Appalachian Trail is a 2,180+ mile long public footpath that traverses the scenic, wooded, pastoral, wild, and culturally resonant lands of the Appalachian Mountains. Conceived in 1921, built by private citizens, and completed in 1937, today the trail is managed by the National Park Service, US Forest Service, Appalachian Trail Conservancy, numerous state agencies and thousands of volunteers.',
    fullName: 'Appalachian National Scenic Trail',
    image: {
      credit: 'Photo Credit: ATC/Benjamin Hays',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8397D6-1DD8-B71B-0BEF4C54462A1EB3.jpg',
    },
    latitude: '40.41029575',
    longitude: '-76.4337548',
    parkCode: 'appa',
  },
  arch: {
    description:
      'Visit Arches to discover a landscape of contrasting colors, land forms, and textures unlike any other in the world. The park has over 2,000 natural stone arches and hundreds of soaring pinnacles, massive rock fins, and giant balanced rocks. This red-rock wonderland will amaze you with its formations, refresh you with its trails, and inspire you with its sunsets.',
    fullName: 'Arches National Park',
    image: {
      credit: 'NPS/Neal Herbert',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79850F-1DD8-B71B-0BC4A88BA85DE6B0.jpg',
    },
    latitude: '38.72261844',
    longitude: '-109.5863666',
    parkCode: 'arch',
  },
  arho: {
    description:
      'Arlington House is the nation’s memorial to Robert E. Lee. It honors him for specific reasons, including his role in promoting peace and reunion after the Civil War. In a larger sense it exists as a place of study and contemplation of the meaning of some of the most difficult aspects of American history: military service; sacrifice; citizenship; duty; loyalty; slavery and freedom.',
    fullName: 'Arlington House, The Robert E. Lee Memorial',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/C6780B46-B0C0-FB79-E17378C527E54DA7.jpeg',
    },
    latitude: '38.8822021484',
    longitude: '-77.0734786987',
    parkCode: 'arho',
  },
  arpo: {
    description:
      'Located at the confluence of two rivers, Arkansas Post has served as a gathering place for many cultures throughout human history - it represents cultural cooperation, conflict, synthesis, and diversity.',
    fullName: 'Arkansas Post National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C847F86-1DD8-B71B-0B476A9BC4ABFDBB.jpg',
    },
    latitude: '34.00389998',
    longitude: '-91.30837178',
    parkCode: 'arpo',
  },
  asis: {
    description:
      'Want to live on the edge? Visit a place recreated each day by ocean wind and waves. Life on Assateague Island has adapted to an existence on the move. Explore sandy beaches, salt marshes, maritime forests and coastal bays. Rest, relax, recreate and enjoy some time on the edge of the continent.',
    fullName: 'Assateague Island National Seashore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C809F06-1DD8-B71B-0B39C9B927D2C688.jpg',
    },
    latitude: '38.05593172',
    longitude: '-75.24524611',
    parkCode: 'asis',
  },
  azru: {
    description:
      'Pueblo people describe this site as part of their migration journey. Today you can follow their ancient passageways to a distant time. Explore a 900-year old ancestral Pueblo Great House of over 400 masonry rooms. Look up and see original timbers holding up the roof. Search for the fingerprints of ancient workers in the mortar. Listen for an echo of ritual drums in the reconstructed Great Kiva.',
    fullName: 'Aztec Ruins National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80AFE4-1DD8-B71B-0BE2EEFC92413401.jpg',
    },
    latitude: '36.83682216',
    longitude: '-107.9999245',
    parkCode: 'azru',
  },
  badl: {
    description:
      'The rugged beauty of the Badlands draws visitors from around the world. These striking geologic deposits contain one of the world’s richest fossil beds. Ancient horses and rhinos once roamed here. The park’s 244,000 acres protect an expanse of mixed-grass prairie where bison, bighorn sheep, prairie dogs, and black-footed ferrets live today.',
    fullName: 'Badlands National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82EE63-1DD8-B71B-0BD6EE0FDCB5D402.jpg',
    },
    latitude: '43.68584846',
    longitude: '-102.482942',
    parkCode: 'badl',
  },
  band: {
    description:
      'Bandelier National Monument protects over 33,000 acres of rugged but beautiful canyon and mesa country as well as evidence of a human presence here going back over 11,000 years. Petroglyphs, dwellings carved into the soft rock cliffs, and standing masonry walls pay tribute to the early days of a culture that still survives in the surrounding communities.',
    fullName: 'Bandelier National Monument',
    image: {
      credit: 'NPS Photo/Sally King',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C830B03-1DD8-B71B-0BA1266ED9B0CE08.jpg',
    },
    latitude: '35.77898596',
    longitude: '-106.3317124',
    parkCode: 'band',
  },
  bawa: {
    description:
      'This 29-mile highway connects Baltimore, MD and Washington, D.C. The parkway has carried visitors to and from the capital city since 1954.',
    fullName: 'Baltimore-Washington Parkway',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F83E6-1DD8-B71B-0BD4AB5763204C1E.jpg',
    },
    latitude: '39.02604289',
    longitude: '-76.85410921',
    parkCode: 'bawa',
  },
  bela: {
    description:
      'Bering Land Bridge National Preserve lies at the continental crossroads that greatly influenced the distribution of life in the Western Hemisphere during the Pleistocene Epoch. It is a vital landscape for indigenous communities who depend on the land just as their ancestors did for many generations. It is a wild and ecologically healthy landscape unlike any other.',
    fullName: 'Bering Land Bridge National Preserve',
    image: {
      credit: 'NPS / Roy Wood',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A859F-1DD8-B71B-0B24F438FBCB2BE9.jpg',
    },
    latitude: '65.96087902',
    longitude: '-164.4086432',
    parkCode: 'bela',
  },
  beol: {
    description:
      "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade. Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
    fullName: "Bent's Old Fort National Historic Site",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/8D0EC7EA-0A5E-6A59-309722431A8274F7.jpg',
    },
    latitude: '38.03977546',
    longitude: '-103.4266499',
    parkCode: 'beol',
  },
  bepa: {
    description:
      "Home to the National Woman's Party for more than 90 years, this was the epicenter of the struggle for women's rights. From this house in the shadow of the U.S. Capitol and Supreme Court, Alice Paul and the NWP developed innovative strategies and tactics to advocate for the Equal Rights Amendment and equality for women. President Barack Obama designated the national monument on April 12, 2016.",
    fullName: "Belmont-Paul Women's Equality National Monument",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/6E4F7F3F-1DD8-B71B-0BBDE514BEF76FDF.jpg',
    },
    latitude: '38.89231541',
    longitude: '-77.00381882',
    parkCode: 'bepa',
  },
  bibe: {
    description:
      'There is a place in Far West Texas where night skies are dark as coal and rivers carve temple-like canyons in ancient limestone. Here, at the end of the road, hundreds of bird species take refuge in a solitary mountain range surrounded by weather-beaten desert. Tenacious cactus bloom in sublime southwestern sun, and diversity of species is the best in the country. This magical place is Big Bend...',
    fullName: 'Big Bend National Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/8BF8356B-BB63-76A4-19F5296EF94C96B4.jpg',
    },
    latitude: '29.29817767',
    longitude: '-103.2297897',
    parkCode: 'bibe',
  },
  bica: {
    description:
      'The vast, wild landscape of Bighorn Canyon National Recreation Area offers visitors unparalleled opportunities to immerse themselves in the natural world, and experience the wonders of this extraordinary place. With over 120,000 acres, one can find an astounding diversity in ecosystems, wildlife, and more than 10,000 years of human history to explore.',
    fullName: 'Bighorn Canyon National Recreation Area',
    image: {
      credit: 'Sharron Genaux',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8210BC-1DD8-B71B-0B15EAD02A4BA4D2.jpg',
    },
    latitude: '45.13154227',
    longitude: '-108.1443943',
    parkCode: 'bica',
  },
  bicr: {
    description:
      'In 1963, images of snarling police dogs unleashed against non-violent protesters and of children being sprayed with high-pressure hoses appeared in print and television news around the world. These dramatic scenes of violent police aggression against civil rights protesters in Birmingham, Alabama were vivid examples of segregation and racial injustice in America.',
    fullName: 'Birmingham Civil Rights National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/D22DF28C-CD37-750E-EB966436CB1DB631.jpeg',
    },
    latitude: '33.5154266357',
    longitude: '-86.814666748',
    parkCode: 'bicr',
  },
  bicy: {
    description:
      "The freshwaters of the Big Cypress Swamp, essential to the health of the neighboring Everglades, support the rich marine estuaries along Florida's southwest coast. Conserving over 729,000 acres of this vast swamp, Big Cypress National Preserve contains a mixture of tropical and temperate plant communities that are home to diverse wildlife, including the Endangered Florida panther.",
    fullName: 'Big Cypress National Preserve',
    image: {
      credit: 'John Kellam',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87C79D-1DD8-B71B-0BB51B9A589AEC2D.jpg',
    },
    latitude: '25.97079602',
    longitude: '-81.08120629',
    parkCode: 'bicy',
  },
  biho: {
    description:
      'On August 9, 1877 gun shots shattered a chilly dawn on a sleeping camp of Nez Perce. By the time the smoke cleared on August 10, almost 90 Nez Perce were dead along with 31 soldiers and volunteers. Big Hole National Battlefield was created to honor all who were there.',
    fullName: 'Big Hole National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/99279113-1DD8-B71B-0BF75905FA3FFC7A.jpg',
    },
    latitude: '45.64647324',
    longitude: '-113.6458443',
    parkCode: 'biho',
  },
  bisc: {
    description:
      'Within sight of Miami, yet worlds away, Biscayne protects a rare combination of aquamarine waters, emerald islands, and fish-bejeweled coral reefs. Evidence of 10,000 years of human history is here too; from prehistoric tribes to shipwrecks, and pineapple farmers to presidents. For many, the park is a boating, fishing, and diving destination, while others enjoy a warm breeze and peaceful scenery.',
    fullName: 'Biscayne National Park',
    image: {
      credit: 'NPS image by Shaun Wolfe',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8717A4-1DD8-B71B-0B2EED68CFA7E008.jpg',
    },
    latitude: '25.490587',
    longitude: '-80.21023851',
    parkCode: 'bisc',
  },
  biso: {
    description:
      'Encompassing 125,000 acres of the Cumberland Plateau, Big South Fork National River and Recreation Area protects the free-flowing Big South Fork of the Cumberland River and its tributaries. The area boasts miles of scenic gorges and sandstone bluffs, is rich with natural and historic features and has been developed to provide visitors with a wide range of outdoor recreational activities.',
    fullName: 'Big South Fork National River & Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C793E18-1DD8-B71B-0B815C3EA6EF7F23.jpg',
    },
    latitude: '36.5348388',
    longitude: '-84.66506688',
    parkCode: 'biso',
  },
  bith: {
    description:
      'Life of all types abounds in the Big Thicket. This national preserve protects the incredible diversity of life found where multiple habitats converge in southeast Texas. Hiking trails and waterways meander through nine different ecosystems, from longleaf pine forests to cypress-lined bayous. It is a place of discovery, a place to wander and explore, a place to marvel at the richness of nature.',
    fullName: 'Big Thicket National Preserve',
    image: {
      credit: 'NPS Photo / Scott Sharaga',
      url: 'https://www.nps.gov/common/uploads/structured_data/99496910-FFB3-1128-BC616CA28AFA83A9.jpg',
    },
    latitude: '30.457983431',
    longitude: '-94.386742115',
    parkCode: 'bith',
  },
  blca: {
    description:
      'Big enough to be overwhelming, still intimate enough to feel the pulse of time, Black Canyon of the Gunnison National Park exposes you to some of the steepest cliffs, oldest rock, and craggiest spires in North America. With two million years to work, the Gunnison River, along with the forces of weathering, has sculpted this vertical wilderness of rock, water, and sky.',
    fullName: 'Black Canyon Of The Gunnison National Park',
    image: {
      credit: 'NPS Photo/Lynch',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81655F-1DD8-B71B-0B4BCFFDB74EE723.jpg',
    },
    latitude: '38.57779869',
    longitude: '-107.7242756',
    parkCode: 'blca',
  },
  blri: {
    description:
      'A Blue Ridge Parkway experience is unlike any other: a slow-paced and relaxing drive revealing stunning long-range vistas and close-up views of the rugged mountains and pastoral landscapes of the Appalachian Highlands. The Parkway meanders for 469 miles, protecting a diversity of plants and animals, and providing opportunities for enjoying all that makes this region of the country so special.',
    fullName: 'Blue Ridge Parkway',
    image: {
      credit: 'Harold Blackwood Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/87E985D9-BF92-9DC3-74B91467FBA15010.jpg',
    },
    latitude: '35.5657195274',
    longitude: '-82.486484587',
    parkCode: 'blri',
  },
  blrv: {
    description:
      "The Blackstone River powered America's entry into the Age of Industry. The success of Samuel Slater's cotton spinning mill in Pawtucket, RI touched off a chain reaction that changed how people worked and where they lived, and continues to reverberate across the nation to this day. Come visit and see how this revolution transformed the landscape of the Blackstone Valley and then the United States.",
    fullName: 'Blackstone River Valley National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/D929646A-F836-33F7-42C7CDB03AD8858C.jpg',
    },
    latitude: '41.8775792792',
    longitude: '-71.382433945',
    parkCode: 'blrv',
  },
  blue: {
    description:
      'The Bluestone River and the rugged and ancient gorge it has carved is a richly diverse and scenic area of the southern Appalachians. Bluestone National Scenic River is preserved as a living landscape that provides an unspoiled experience for visitors and a haven for a variety of plants and animals. The park protects a 10.5-mile section of the Bluestone River in southern West Virginia.',
    fullName: 'Bluestone National Scenic River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C800E49-1DD8-B71B-0BD0956F0EFE00F0.jpg',
    },
    latitude: '37.56577087',
    longitude: '-80.98366657',
    parkCode: 'blue',
  },
  boaf: {
    description:
      'Centered on the north slope of Beacon Hill, the African American community of 19th century Boston led the city and the nation in the fight against slavery and injustice. These remarkable men and women, together with their allies, were leaders in the Abolition Movement, the Underground Railroad, the Civil War, and the early struggle for equal rights and education.',
    fullName: 'Boston African American National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C790A8C-1DD8-B71B-0BB037E9568998D1.jpg',
    },
    latitude: '42.35908295',
    longitude: '-71.06764181',
    parkCode: 'boaf',
  },
  boha: {
    description:
      ". . . where you can walk a Civil War-era fort, visit historic lighthouses, explore tide pools, hike lush trails, camp under the stars, or relax while fishing, picnicking or swimming-all within reach of downtown Boston. Youth programs, visitor services, research, wildlife management, and more are coordinated on the park's 34 islands and peninsulas by the Boston Harbor Islands Partnership.",
    fullName: 'Boston Harbor Islands National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C858BDF-1DD8-B71B-0B6D6FFEF068BAB3.jpg',
    },
    latitude: '42.30905526',
    longitude: '-70.93941138',
    parkCode: 'boha',
  },
  bost: {
    description:
      'Discover how one city could be the Cradle of Liberty, site of the first major battle of American Revolution, and home to many who espoused that freedom can be extended to all.',
    fullName: 'Boston National Historical Park',
    image: {
      credit: 'Boston National Historical Park',
      url: 'https://www.nps.gov/common/uploads/structured_data/9698669F-1DD8-B71B-0BAF19BCD480270D.jpg',
    },
    latitude: '42.36957407',
    longitude: '-71.05536763',
    parkCode: 'bost',
  },
  bowa: {
    description:
      'Booker T. Washington was born a slave in April 1856 on the 207-acre farm of James Burroughs. After the Civil War, Washington became the first principal of Tuskegee Normal and Industrial School. Later as an adviser, author and orator, his past would influence his philosophies as the most influential African American of his era. Come explore his birthplace.',
    fullName: 'Booker T Washington National Monument',
    image: {
      credit: 'NPS Photo/ VIP Bill Tucker',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C78FE2A-1DD8-B71B-0B28DF0A7DEA50EB.jpg',
    },
    latitude: '37.11520539',
    longitude: '-79.73185833',
    parkCode: 'bowa',
  },
  brca: {
    description:
      "Hoodoos (irregular columns of rock) exist on every continent, but here is the largest concentration found anywhere on Earth. Situated along a high plateau at the top of the Grand Staircase, the park's high elevations include numerous life communities, fantastic dark skies, and geological wonders that defy description.",
    fullName: 'Bryce Canyon National Park',
    image: {
      credit: 'NPS Photo / Peter Densmore',
      url: 'https://www.nps.gov/common/uploads/structured_data/61F08520-E14F-18F2-BF5F3D89482631BD.jpg',
    },
    latitude: '37.58399144',
    longitude: '-112.1826689',
    parkCode: 'brca',
  },
  brcr: {
    description:
      'The Confederate victory at Brices Cross Roads was a significant victory for Major General Nathan Bedford Forrest, but its long term effect on the war proved costly for the Confederates. Brices Cross Roads is an excellent example of winning the battle, but losing the war.',
    fullName: 'Brices Cross Roads National Battlefield Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C844204-1DD8-B71B-0BF8D1D53809C1E1.jpg',
    },
    latitude: '34.50611958',
    longitude: '-88.72889343',
    parkCode: 'brcr',
  },
  brvb: {
    description:
      'The story of Brown v. Board of Education, which ended legal segregation in public schools, is one of hope and courage. When the people agreed to be plaintiffs in the case, they never knew they would change history. The people who make up this story were ordinary people. They were teachers, secretaries, welders, ministers, and students who simply wanted to be treated equally.',
    fullName: 'Brown v. Board of Education National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8422BD-1DD8-B71B-0BB53F08D10856B9.jpg',
    },
    latitude: '39.03787665',
    longitude: '-95.67614437',
    parkCode: 'brvb',
  },
  buff: {
    description:
      'Established in 1972, Buffalo National River flows freely for 135 miles and is one of the few remaining undammed rivers in the lower 48 states. Once you arrive, prepare to journey from running rapids to quiet pools while surrounded by massive bluffs as you cruise through the Ozark Mountains down to the White River.',
    fullName: 'Buffalo National River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7AAA8F-1DD8-B71B-0B030B40F222703A.jpg',
    },
    latitude: '36.04116481',
    longitude: '-92.90761584',
    parkCode: 'buff',
  },
  buis: {
    description:
      'Welcome to Buck Island! Before you come, please watch our 2014 Telly Award winning film "Caribbean Gem." Watching this will catch you up on 50+ years of National Park Service protection and civic engagement. Learn what we do every day to preserve this resource for Virgin Islanders and visitors alike. For the General Management Plan and Environmental Compliance, visit the News page.',
    fullName: 'Buck Island Reef National Monument',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/9166F458-AD79-8637-97F62EDA1485FF6A.jpg',
    },
    latitude: '17.81026717',
    longitude: '-64.6222179',
    parkCode: 'buis',
  },
  cabr: {
    description:
      'Climbing out of his boat and onto shore in 1542, Juan Rodriguez Cabrillo stepped into history as the first European to set foot on what is now the West Coast of the United States. In addition to telling the story of 16th century exploration, the park is home to a wealth of cultural and natural resources. Join us and embark on your own Voyage of Exploration.',
    fullName: 'Cabrillo National Monument',
    image: {
      credit: 'NPS Photo / Dan Zeller',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83BD0E-1DD8-B71B-0B8A7140406810C6.jpg',
    },
    latitude: '32.6722503',
    longitude: '-117.2415985',
    parkCode: 'cabr',
  },
  cach: {
    description:
      "For nearly 5,000 years, people have lived in these canyons - longer than anyone has lived uninterrupted anywhere on the Colorado Plateau. In the place called Tsegi, their homes and images tell us their stories. Today, Navajo families make their homes, raise livestock, and farm the lands in the canyons. A place like no other, the park and Navajo Nation work together to manage the land's resources.",
    fullName: 'Canyon de Chelly National Monument',
    image: {
      credit: 'Ravis Henry',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C840D48-1DD8-B71B-0B7CD1781BEC0D0D.png',
    },
    latitude: '36.14319567',
    longitude: '-109.3388303',
    parkCode: 'cach',
  },
  cacl: {
    description:
      'Located at the southern tip of Manhattan Island, Castle Clinton stands where New York City began, and represents not only the city’s growth, but the growth of a nation. Initially intended to prevent a British invasion in 1812, the fortification has transformed over the years to welcome theatergoers, immigrants, sightseers, and now, millions of visitors to New York Harbor.',
    fullName: 'Castle Clinton National Monument',
    image: {
      credit: 'NPS Photo/Laura Brennan',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8541DF-1DD8-B71B-0BFFEA05DAED37D6.jpg',
    },
    latitude: '40.70347795',
    longitude: '-74.01680558',
    parkCode: 'cacl',
  },
  caco: {
    description:
      "The great Outer Beach described by Thoreau in the 1800s is protected within the national seashore. Forty miles of pristine sandy beach, marshes, ponds, and uplands support diverse species. Lighthouses, cultural landscapes, and wild cranberry bogs offer a glimpse of Cape Cod's past and continuing ways of life. Swimming beaches and walking and biking trails beckon today's visitors.",
    fullName: 'Cape Cod National Seashore',
    image: {
      credit: 'NPS image',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C853027-1DD8-B71B-0B7E332E35FF7626.jpg',
    },
    latitude: '41.92381465',
    longitude: '-70.04319832',
    parkCode: 'caco',
  },
  cagr: {
    description:
      'Explore the mystery and complexity of an extended network of communities and irrigation canals. An Ancestral Sonoran Desert People\'s farming community and "Great House" are preserved at Casa Grande Ruins. Whether the Casa Grande was a gathering place for the Desert People or simply a waypoint marker in an extensive system of canals and trading partners is but part of the mystique of the Ruins.',
    fullName: 'Casa Grande Ruins National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D9776-1DD8-B71B-0B4D6AE7F16F082E.jpg',
    },
    latitude: '32.99702582',
    longitude: '-111.5325383',
    parkCode: 'cagr',
  },
  caha: {
    description:
      'The sound of ocean waves, the starry night sky, or the calm of the salt marshes, you can experience it all. Shaped by the forces of water, wind, and storms these islands are ever changing. The plants, wildlife, and people who live here adapt continually. Whether you are enjoying the beach, kayaking the sound, or climbing the Cape Hatteras Lighthouse there is something for everyone to explore!',
    fullName: 'Cape Hatteras National Seashore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C835612-1DD8-B71B-0BA2C4F36928F354.jpg',
    },
    latitude: '35.41370839',
    longitude: '-75.65061112',
    parkCode: 'caha',
  },
  cahi: {
    description:
      'The Capitol Hill Parks include several park areas east of the U.S. Capitol. Included in this group are Folger, Lincoln, Stanton, and Marion Parks, the Eastern Market and Potomac Avenue Metro stations, and several smaller land parcels such as Seward Square, Twining Square, the Maryland Avenue Triangles, the Pennsylvania Avenue Medians, and 59 inner-city triangles and squares.',
    fullName: 'Capitol Hill Parks',
    image: {
      credit: 'NPS Photo/Kenneth Chandler',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83EFA3-1DD8-B71B-0B0CFF59BA0F5510.jpg',
    },
    latitude: '38.889993',
    longitude: '-76.990332',
    parkCode: 'cahi',
  },
  cajo: {
    description:
      'People first arrived in the Chesapeake Bay during the last ice age. As glaciers melted, diverse societies learned to thrive in a world of water. When Englishman Captain John Smith explored the Bay in 1608, he documented hundreds of American Indian communities. Today, sites on his map are archeological treasures and sacred sites for tribal citizens. Come join us on the shores of the Chesapeake Bay!',
    fullName: 'Captain John Smith Chesapeake National Historic Trail',
    image: {
      credit: 'NPS Photo / Middleton Evans',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C823100-1DD8-B71B-0B3AE3516DDF485B.jpg',
    },
    latitude: '38.971601',
    longitude: '-76.483355',
    parkCode: 'cajo',
  },
  cakr: {
    description:
      'North of the Arctic Circle, the monument forms 70 miles of shoreline on the Chukchi Sea. More than 114 beach ridges provide evidence of human use for 5,000 years. The Inupiat continue to use the area today. Vast wetlands provide habitat for shorebirds from as far away as South America. Hikers and boaters can see carpets of wildflowers among shrubs containing wisps of qiviut from muskoxen.',
    fullName: 'Cape Krusenstern National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A2014-1DD8-B71B-0B764AD7207B0477.jpg',
    },
    latitude: '67.41499986',
    longitude: '-163.5037786',
    parkCode: 'cakr',
  },
  cali: {
    description:
      'Follow in the footsteps of over 250,000 emigrants who traveled to the gold fields and rich farmlands of California during the 1840s and 1850s: the greatest mass migration in American history. The California National Historic Trail is over 5,000 miles long and covers portions of 10 states. Step into history along more than 1,000 miles of ruts and traces from travelers and their overland wagons.',
    fullName: 'California National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B7987-1DD8-B71B-0B3C3123ED8F686B.jpg',
    },
    latitude: '42.3999643979',
    longitude: '-108.702415369',
    parkCode: 'cali',
  },
  calo: {
    description:
      'A boat ride three miles off-shore brings you to the barrier islands of Cape Lookout National Seashore. Horse watching, shelling, fishing, birding, camping, lighthouse climbing, and touring historic villages--there’s something for everyone at Cape Lookout. Be sure to bring all the food, water, and supplies you need (and carry your trash out of the park) when visiting these remote beaches.',
    fullName: 'Cape Lookout National Seashore',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86A358-1DD8-B71B-0BC275CB93DB8D43.jpg',
    },
    latitude: '34.8267961',
    longitude: '-76.34319082',
    parkCode: 'calo',
  },
  came: {
    description:
      "English colonists first landed here in April 1607, erected a wooden cross and gave thanks for a successful crossing to a new land. In 1781, Americans could watch from these same sand dunes the largest naval battle of the Revolutionary War. Our French Allies defeated a British fleet just off this shore to set the stage for General George Washington's victory at Yorktown.",
    fullName: 'Cape Henry Memorial Part of Colonial National Historical Park',
    image: {
      credit: 'National Park Service',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79AA09-1DD8-B71B-0B4B7A5D37A9CBA5.jpg',
    },
    latitude: '36.9278094',
    longitude: '-76.0088219',
    parkCode: 'came',
  },
  camo: {
    description:
      'Castle Mountains represents some of the most unique elements of the Mojave Desert. Nestled between the Nevada state line and Mojave National Preserve, the nearly 21,000 acres of Castle Mountains boasts Joshua tree forests, unbroken natural landscapes, rare desert grasslands, and rich human history. This intriguing area provides serenity and solitude from nearby metropolitan areas.',
    fullName: 'Castle Mountains National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87A219-1DD8-B71B-0BF28720E6A4AC75.jpg',
    },
    latitude: '35.29156348',
    longitude: '-115.0935606',
    parkCode: 'camo',
  },
  cana: {
    description:
      'Reflect on a pristine undeveloped shoreline, explore a historic site, or experience the rumble of a rocket soaring into space. This pristine barrier island composed of dune, hammock and lagoon habitats provides protection from storms, preserves ancient Timucua Native American mounds, and is sanctuary for thousands of species of plants and animals that call Canaveral National Seashore home.',
    fullName: 'Canaveral National Seashore',
    image: {
      credit: 'NPS Photo Lord',
      url: 'https://www.nps.gov/common/uploads/structured_data/55D27C61-D079-2CAA-76210898EB90B25C.jpg',
    },
    latitude: '28.78637529',
    longitude: '-80.75419576',
    parkCode: 'cana',
  },
  cane: {
    description:
      'Established as a supply depot and hospital during the Civil War for the U.S. Army, Camp Nelson became a large recruitment and training center for African American soldiers (USCTs), and a refugee camp for their wives and children. Thousands of enslaved people escaped to this site with the hope of securing freedom and ultimately controlling their futures by aiding in the destruction of slavery.',
    fullName: 'Camp Nelson National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/2B2D69D2-EB54-83B1-65A8D9668859658E.jpg',
    },
    latitude: '37.7970179913',
    longitude: '-84.598168306',
    parkCode: 'cane',
  },
  cany: {
    description:
      'Canyonlands invites you to explore a wilderness of countless canyons and fantastically formed buttes carved by the Colorado River and its tributaries. Rivers divide the park into four districts: Island in the Sky, The Needles, The Maze, and the rivers themselves. These areas share a primitive desert atmosphere, but each offers different opportunities for sightseeing and adventure.',
    fullName: 'Canyonlands National Park',
    image: {
      credit: 'NPS/Neal Herbert',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A525D-1DD8-B71B-0B8E59D2EB39F6D0.jpg',
    },
    latitude: '38.24555783',
    longitude: '-109.8801624',
    parkCode: 'cany',
  },
  care: {
    description:
      'Located in south-central Utah in the heart of red rock country, Capitol Reef National Park is a hidden treasure filled with cliffs, canyons, domes, and bridges in the Waterpocket Fold, a geologic monocline (a wrinkle on the earth) extending almost 100 miles.',
    fullName: 'Capitol Reef National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82E3C7-1DD8-B71B-0B4181834EE46AED.jpg',
    },
    latitude: '38.2821653131',
    longitude: '-111.247048378',
    parkCode: 'care',
  },
  cari: {
    description:
      'The Cane River region is home to a unique culture; the Creoles. Generations of the same families of owners and workers, enslaved and tenant, lived on these lands for over 200 years. The park tells their stories and preserves the cultural landscape of Oakland and Magnolia Plantations, two of the most intact Creole cotton plantations in the United States.',
    fullName: 'Cane River Creole National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/FF225B2C-08F8-7008-74039BCDFF98F1FF.jpg',
    },
    latitude: '31.65408447',
    longitude: '-93.00131977',
    parkCode: 'cari',
  },
  carl: {
    description:
      "“I make it clear why I write as I do and why other poets write as they do. After hundreds of experiments I decided to go my own way in style and see what would happen.” Carl Sandburg's free verse style of poetry, journalism, biography, children's stories, prose writing, and social activism provided a popular voice for the American people of the twentieth century.",
    fullName: 'Carl Sandburg Home National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C798702-1DD8-B71B-0B01ED72F322BC48.jpg',
    },
    latitude: '35.26815509',
    longitude: '-82.45106258',
    parkCode: 'carl',
  },
  casa: {
    description:
      'Built by the Spanish in St. Augustine to defend Florida and the Atlantic trade route, Castillo de San Marcos National Monument preserves the oldest masonry fortification in the continental United States and interprets more than 450 years of cultural intersections.',
    fullName: 'Castillo de San Marcos National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E9A99-1DD8-B71B-0B5C1C290617CA10.jpg',
    },
    latitude: '29.89785701',
    longitude: '-81.31217173',
    parkCode: 'casa',
  },
  cato: {
    description:
      'President Franklin D. Roosevelt created programs to give people a chance to rebuild their lives from the Great Depression. The Works Progress Administration and the Civilian Conservation Corps gave this land a second opportunity and through re-growth, a new role as a recreation area.',
    fullName: 'Catoctin Mountain Park',
    image: {
      credit: 'NPS Photo/Peggie Gaul',
      url: 'https://www.nps.gov/common/uploads/structured_data/88247400-C3C0-D7DE-8C42EF37DF502F7F.jpg',
    },
    latitude: '39.65068457',
    longitude: '-77.46417665',
    parkCode: 'cato',
  },
  cave: {
    description:
      'High ancient sea ledges, deep rocky canyons, flowering cactus, and desert wildlife—treasures above the ground in the Chihuahuan Desert. Hidden beneath the surface are more than 119 caves—formed when sulfuric acid dissolved limestone leaving behind caverns of all sizes.',
    fullName: 'Carlsbad Caverns National Park',
    image: {
      credit: 'NPS / Michael Larson',
      url: 'https://www.nps.gov/common/uploads/structured_data/29C3C977-AAE6-B7FD-3C107828D704A5CB.jpg',
    },
    latitude: '32.14089463',
    longitude: '-104.5529688',
    parkCode: 'cave',
  },
  cavo: {
    description:
      "Part of the 8,000 square mile Raton-Clayton Volcanic Field, Capulin Volcano showcases the volcanic geology of northeastern New Mexico. The views are spectacular day or night, with views of 4 different states from the volcanic rim and one of the darkest night skies in the country. Whether it's a quick stop or a day's trip, enjoy exploring the landscape of this unique volcano!",
    fullName: 'Capulin Volcano National Monument',
    image: {
      credit: 'NPS photo/ R. Richman',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84FCB2-1DD8-B71B-0BE4C7320D95575F.jpg',
    },
    latitude: '36.78171096',
    longitude: '-103.9710427',
    parkCode: 'cavo',
  },
  cawo: {
    description:
      'Before Dr. Carter G. Woodson, there was very little accurate written history about the lives and experiences of Americans of African descent. Today a National Historic Site, Dr. Woodson’s home served as the headquarters for the Association for the Study of African American Life and History. Dr. Woodson established Negro History Week here in 1926, which we celebrate today as Black History Month.',
    fullName: 'Carter G. Woodson Home National Historic Site',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/93C3FA3C-028F-9E45-D5C31B4A283F60AC.jpg',
    },
    latitude: '38.91089286',
    longitude: '-77.02431104',
    parkCode: 'cawo',
  },
  cbpo: {
    description:
      'NPS helps you learn about and enjoy the Chesapeake Bay, the largest estuary in North America. Here, you can visit major league cities, colonial towns, American Indian landscapes, farms and fishing villages. You can learn to kayak, pick crabs, go fishing, tour a lighthouse, slurp oysters, and slow down to enjoy the natural beauty of the Chesapeake.',
    fullName: 'Chesapeake Bay',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C825EB4-1DD8-B71B-0BCF3FF1FE0211DA.jpg',
    },
    latitude: '38.971601',
    longitude: '-76.483355',
    parkCode: 'cbpo',
  },
  cebe: {
    description:
      'The Shenandoah Valley invites you to learn about its rich heritage, from Native Americans who first shaped the land, to pioneers of this frontier; this fertile area became one of the most important wheat producing regions of the entire South. The Valley also witnessed some of the most dramatic events of the Civil War,including the Battle of Cedar Creek, a decisive October 19, 1864 Union victory.',
    fullName: 'Cedar Creek & Belle Grove National Historical Park',
    image: {
      credit: 'NPS Photo/Buddy Secor',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F7010-1DD8-B71B-0BBD98AD1E4FD734.jpg',
    },
    latitude: '39.0093576',
    longitude: '-78.30618934',
    parkCode: 'cebe',
  },
  cebr: {
    description:
      'Crowning the grand staircase, Cedar Breaks sits at over 10,000 feet and looks down into a half-mile deep geologic amphitheater. Come wander among timeless bristlecone pines, stand in lush meadows of wildflower, ponder crystal-clear night skies and experience the richness of our subalpine forest.',
    fullName: 'Cedar Breaks National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E0046-1DD8-B71B-0B98037C3E2F685B.jpg',
    },
    latitude: '37.63545562',
    longitude: '-112.845268',
    parkCode: 'cebr',
  },
  cech: {
    description:
      "Yes, we can! Widely recognized as the most important Latino leader in the United States during the twentieth century, César E. Chávez led farm workers and supporters in the establishment of the country's first permanent agricultural union. His leadership brought sustained international attention to the plight of U.S. farm workers, and secured for them higher wages and safer working conditions",
    fullName: 'César E. Chávez National Monument',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A4740-1DD8-B71B-0BF737E1DDD1EA21.jpg',
    },
    latitude: '35.22729389',
    longitude: '-118.5615781',
    parkCode: 'cech',
  },
  cham: {
    description:
      'Chamizal is more than just an urban park to recreate or enjoy a quiet afternoon. These grounds are a reminder of the harmonious settlement of a 100-year boundary dispute between the United States and Mexico. We celebrate the cultures of the borderlands to promote the same mutual respect that helped to diplomatically resolve an international disagreement.',
    fullName: 'Chamizal National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7CCC23-1DD8-B71B-0BD6AD7C38B32185.jpg',
    },
    latitude: '31.76729634',
    longitude: '-106.4544011',
    parkCode: 'cham',
  },
  chat: {
    description:
      'Today the river valley attracts us for so many reasons. Take a solitary walk to enjoy nature’s display, raft leisurely through the rocky shoals with friends, fish the misty waters as the sun comes up, or have a picnic on a Sunday afternoon. Get Outdoors and experience your Chattahoochee River National Recreation Area as you have never done before.',
    fullName: 'Chattahoochee River National Recreation Area',
    image: {
      credit: 'NPS Photo/Tom Wilson',
      url: 'https://www.nps.gov/common/uploads/structured_data/C8083BD1-1DD8-B71B-0BB3FE7205EBC05D.jpg',
    },
    latitude: '33.99698333',
    longitude: '-84.28953177',
    parkCode: 'chat',
  },
  chch: {
    description:
      'In 1863, Union and Confederate forces fought for control of Chattanooga, known as the "Gateway to the Deep South." The Confederates were victorious at nearby Chickamauga in September. However, renewed fighting in Chattanooga that November provided Union troops victory and control of the city. After the fighting, a Confederate soldier ominously wrote, "This...is the death-knell of the Confederacy."',
    fullName: 'Chickamauga & Chattanooga National Military Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C0A34-1DD8-B71B-0B9DCF42DA23DD8C.jpg',
    },
    latitude: '34.94317623',
    longitude: '-85.28749537',
    parkCode: 'chch',
  },
  chcu: {
    description:
      'Today the massive buildings of the Ancestral Puebloan people still testify to the organizational and engineering abilities not seen anywhere else in the American Southwest. For a deeper contact with the canyon that was central to thousands of people between 850 and 1250 A.D., come and explore Chaco through guided tours, hiking & biking trails, evening campfire talks, and night sky programs.',
    fullName: 'Chaco Culture National Historical Park',
    image: {
      credit: 'Chaco Culture NHP 006/001-image02a',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82F405-1DD8-B71B-0B2EB1FEC35F52B9.jpg',
    },
    latitude: '36.03963414',
    longitude: '-107.9560076',
    parkCode: 'chcu',
  },
  chic: {
    description:
      'Springs, streams, lakes - whatever its form, water is the attraction at Chickasaw National Recreation Area.',
    fullName: 'Chickasaw National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81C510-1DD8-B71B-0B34D1FBCE6AA1C6.jpg',
    },
    latitude: '34.46050507',
    longitude: '-97.00715669',
    parkCode: 'chic',
  },
  chir: {
    description:
      'A "Wonderland of Rocks" is waiting for you to explore at Chiricahua National Monument. The 8-mile paved scenic drive and 17-miles of day-use hiking trails provide opportunities to discover the beauty, natural sounds, and inhabitants of this 12,025 acre site. Visit the Faraway Ranch Historic District to discover more about the people who have called this area home.',
    fullName: 'Chiricahua National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/9F5DFDFD-9FE4-883F-99DC9D5CBACCA397.jpg',
    },
    latitude: '32.01214618',
    longitude: '-109.341607',
    parkCode: 'chir',
  },
  chis: {
    description:
      'Channel Islands National Park encompasses five remarkable islands and their ocean environment, preserving and protecting a wealth of natural and cultural resources. Isolation over thousands of years has created unique animals, plants, and archeological resources found nowhere else on Earth and helped preserve a place where visitors can experience coastal southern California as it once was.',
    fullName: 'Channel Islands National Park',
    image: {
      credit: 'Tim Hauf, timhaufphotography.com',
      url: 'https://www.nps.gov/common/uploads/structured_data/8DE774D1-CB22-37F2-D826E3F0A73D303A.jpg',
    },
    latitude: '33.98680093',
    longitude: '-119.9112735',
    parkCode: 'chis',
  },
  choh: {
    description:
      "Preserving America's early transportation history, the C&O Canal began as a dream of passage to Western wealth. Operating for nearly 100 years the canal was a lifeline for communities along the Potomac River as coal, lumber, and agricultural products floated down the waterway to market. Today it endures as a pathway for discovering historical, natural, and recreational treasures.",
    fullName: 'Chesapeake & Ohio Canal National Historical Park',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7EC77A-1DD8-B71B-0B67E179DDA9A05A.jpg',
    },
    latitude: '39.000283692',
    longitude: '-77.2481399539',
    parkCode: 'choh',
  },
  chpi: {
    description:
      "Charles Pinckney was a principal author and signer of the United States Constitution, and went on to be a political leader in South Carolina for over 40 years. The park preserves Snee Farm, one of his plantation properties, where visitors can learn about the politician's influences on Charleston, the African people he enslaved, plantation operations, and the legacy of Pinckney's life.",
    fullName: 'Charles Pinckney National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86ACA6-1DD8-B71B-0B4AB188D4CC5AE8.jpg',
    },
    latitude: '32.84577392',
    longitude: '-79.82487582',
    parkCode: 'chpi',
  },
  chri: {
    description:
      'Christiansted National Historic Site was established in 1952 as the first unit of the National Park Service in the Virgin Islands of the United States. Covering over seven acres the park tells the stories about Danish economy and ways of life, and the interactions of people in Europe, Africa, West Indies, and North America during the Danish era of occupation of the Virgin Islands (1734-1917).',
    fullName: 'Christiansted National Historic Site',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/904D12AC-A8B3-9FF6-43BD208514DCC668.jpg',
    },
    latitude: '17.73771903',
    longitude: '-64.72906227',
    parkCode: 'chri',
  },
  chsc: {
    description:
      'In 1957, Little Rock Central High School was the epicenter of confrontation and a catalyst for change as the fundamental test for the United States to enforce African American civil rights following Brown v. Board of Education. Learn how the sacrifice and struggle endured by the Little Rock Nine have provided opportunities and opened doors for those seeking equality and education around the world.',
    fullName: 'Little Rock Central High School National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/53095121-0127-7E62-B983B9E8D77E7ECF.jpg',
    },
    latitude: '34.7369465',
    longitude: '-92.29987899',
    parkCode: 'chsc',
  },
  chyo: {
    description:
      'Throughout his life, Charles Young overcame countless obstacles in his ascent to prominence. In spite of overt racism and stifling inequality, Young rose through the military ranks to become one of the most respected leaders of his time. A well-rounded man with a steadfast devotion to duty, Young led by example and inspired a generation of new leaders.',
    fullName: 'Charles Young Buffalo Soldiers National Monument',
    image: {
      credit: 'NPS / Tom Engberg',
      url: 'https://www.nps.gov/common/uploads/structured_data/0645BF55-CF33-994E-F247098090A7E65C.jpg',
    },
    latitude: '39.70817829',
    longitude: '-83.89328575',
    parkCode: 'chyo',
  },
  ciro: {
    description:
      'Emigrants of the California Trail describe the rocks here in vivid detail as "a city of tall spires,” “steeple rocks," and "the silent city." Today, this backcountry byway attracts rock climbers, campers, hikers, hunters, and those with the spirit of adventure. There\'s inspirational scenery, exceptional opportunities for geologic study, and remnants of the Old West awaiting your discovery.',
    fullName: 'City Of Rocks National Reserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/E9C491CA-E6B2-9B7E-68A22E261CA08942.jpg',
    },
    latitude: '42.0699024',
    longitude: '-113.7124097',
    parkCode: 'ciro',
  },
  clba: {
    description:
      'Clara Barton dedicated her life and energies to help others in times of need - both home and abroad, in peacetime as well as during military emergencies. Glen Echo was her home the last 15 years of her life and the structure illustrates her dedication and concern for those less fortunate than herself. Virtual Presentations about Clara Barton are offered free to groups of 10 or more.',
    fullName: 'Clara Barton National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8477E7-1DD8-B71B-0BF1DE30138186A7.jpg',
    },
    latitude: '38.96762882',
    longitude: '-77.14009689',
    parkCode: 'clba',
  },
  coga: {
    description:
      'Officially established in 1965, National Mall and Memorial Parks actually protects some of the older parkland in the National Park System. Areas within this premier park provide visitors with ample opportunities to commemorate presidential legacies; honor the courage and sacrifice of war veterans; and celebrate the United States commitment to freedom and equality.',
    fullName: 'Constitution Gardens',
    image: {
      credit: 'NPS Photo/Brian Hall',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C815721-1DD8-B71B-0B6B84757C7F343E.jpg',
    },
    latitude: '38.8909354',
    longitude: '-77.04409306',
    parkCode: 'coga',
  },
  colm: {
    description:
      'Colorado National Monument preserves one of the grand landscapes of the American West. But this treasure is much more than a monument. Towering monoliths exist within a vast plateau and canyon panorama. You can experience sheer-walled, red rock canyons along the twists and turns of Rim Rock Drive, where you may spy bighorn sheep and soaring eagles.',
    fullName: 'Colorado National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C823606-1DD8-B71B-0BF5770F63271B19.jpg',
    },
    latitude: '39.05045016',
    longitude: '-108.6920709',
    parkCode: 'colm',
  },
  colo: {
    description:
      'On May 13, 1607, Jamestown was established as the first permanent English settlement in North America. Three cultures came together – European, Virginia Indian and African–to create a new society that would eventually seek independence from Great Britain. On October 19, 1781, American and French troops defeated the British at Yorktown in the last major battle of the American Revolutionary War.',
    fullName: 'Colonial National Historical Park',
    image: {
      credit: 'National Park Service',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79E166-1DD8-B71B-0B513F9A61E8A9EB.jpg',
    },
    latitude: '37.22824435',
    longitude: '-76.61998123',
    parkCode: 'colo',
  },
  colt: {
    description:
      "When Samuel Colt started his Hartford factory on the banks of the Connecticut River in 1847, it followed years of mismanagement and failure. Soon, demand for Colt's revolver would change his fortunes and the Colt empire was born. Following Colt's untimely death in 1862, his wife, Elizabeth Colt, would lead the company to its legendary status, and influence Hartford for over 40 years.",
    fullName: 'Coltsville National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/C06E016C-F1BC-766E-AB4A5E99E2FF8F50.jpg',
    },
    latitude: '42.4677505493',
    longitude: '-73.203666687',
    parkCode: 'colt',
  },
  cong: {
    description:
      'Astonishing biodiversity exists in Congaree National Park, the largest intact expanse of old growth bottomland hardwood forest remaining in the southeastern United States. Waters from the Congaree and Wateree Rivers sweep through the floodplain, carrying nutrients and sediments that nourish and rejuvenate this ecosystem and support the growth of national and state champion trees.',
    fullName: 'Congaree National Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C862C60-1DD8-B71B-0BB65F7B652BA840.jpg',
    },
    latitude: '33.79187523',
    longitude: '-80.74867805',
    parkCode: 'cong',
  },
  coro: {
    description:
      'It was a journey of conquest filled with exploration, wonder - and cruelty. Inspired by tales of vast cities of gold, 339 European soldiers and hundreds of Aztec allies embarked on an epic journey through arid deserts and rugged mountains. They encountered rich traditions and brought new technologies. The resulting collision and combination of cultures reverberates today.',
    fullName: 'Coronado National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82D04F-1DD8-B71B-0B9FBF53061B965D.jpg',
    },
    latitude: '31.34900397',
    longitude: '-110.2561574',
    parkCode: 'coro',
  },
  cowp: {
    description:
      "“…our success was complete…” -- Daniel Morgan to Nathanael Greene, January 19, 1781 A pasturing area at the time of the battle, this Revolutionary War site commemorates the place where Daniel Morgan and his army turned the flanks of Banastre Tarleton's British army. This classic military tactic, known as a double envelopment, was one of only a few in history.",
    fullName: 'Cowpens National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C797008-1DD8-B71B-0B2C546FE940A6F3.jpg',
    },
    latitude: '35.13160654',
    longitude: '-81.80935433',
    parkCode: 'cowp',
  },
  crla: {
    description:
      'Crater Lake inspires awe. Native Americans witnessed its formation 7,700 years ago, when a violent eruption triggered the collapse of a tall peak. Scientists marvel at its purity: fed by rain and snow, it’s the deepest lake in the USA and one of the most pristine on earth. Artists, photographers, and sightseers gaze in wonder at its blue water and stunning setting atop the Cascade Mountain Range.',
    fullName: 'Crater Lake National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B227E-1DD8-B71B-0BEECDD24771C381.jpg',
    },
    latitude: '42.94065854',
    longitude: '-122.1338414',
    parkCode: 'crla',
  },
  crmo: {
    description:
      'Craters of the Moon is a vast ocean of lava flows with scattered islands of cinder cones and sagebrush. We invite you to explore this "weird and scenic landscape" where yesterday\'s volcanic events are likely to continue tomorrow.',
    fullName: 'Craters Of The Moon National Monument & Preserve',
    image: {
      credit: 'NPS / David Hunter',
      url: 'https://www.nps.gov/common/uploads/structured_data/B12C4D19-0A4E-52EC-8CE6D0D975978393.jpg',
    },
    latitude: '43.20345611',
    longitude: '-113.4791609',
    parkCode: 'crmo',
  },
  cuga: {
    description:
      'At Cumberland Gap, the first great gateway to the west, follow the buffalo, the Native American, the longhunter, the pioneer... all traveled this route through the mountains into the wilderness of Kentucky. Modern day explorers and travelers stand in awe at this great gateway and the many miles of trails and scenic features found in the park.',
    fullName: 'Cumberland Gap National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87BB9F-1DD8-B71B-0B03EA00319ED876.jpg',
    },
    latitude: '36.62503076',
    longitude: '-83.6114083',
    parkCode: 'cuga',
  },
  cuis: {
    description:
      "St Marys is the gateway to Cumberland Island, Georgia's largest and southernmost barrier island. Here pristine maritime forests, undeveloped beaches and wide marshes whisper the stories of both man and nature. Natives, missionaries, enslaved African Americans and Wealthy Industrialists all walked here. Cumberland Island is also home to over 9,800 acres of Congressionally designated Wilderness.",
    fullName: 'Cumberland Island National Seashore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C803FAD-1DD8-B71B-0BF8968CDECF2468.jpg',
    },
    latitude: '30.85857484',
    longitude: '-81.45253575',
    parkCode: 'cuis',
  },
  cure: {
    description:
      'Curecanti National Recreation Area is a series of three reservoirs along the once wild Gunnison River. The reservoirs that make up Curecanti today are a destination for water-based recreation high in the Rocky Mountains. Best known for salmon and trout fishing, Curecanti also offers opportunities for hiking, boating, camping, and bird watching.',
    fullName: 'Curecanti National Recreation Area',
    image: {
      credit: 'NPS Photo/Lynch',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C816852-1DD8-B71B-0B23A038AF62DA56.jpg',
    },
    latitude: '38.46584558',
    longitude: '-107.3303371',
    parkCode: 'cure',
  },
  cuva: {
    description:
      'Though a short distance from the urban areas of Cleveland and Akron, Cuyahoga Valley National Park seems worlds away. The park is a refuge for native plants and wildlife, and provides routes of discovery for visitors. The winding Cuyahoga River gives way to deep forests, rolling hills, and open farmlands. Walk or ride the Towpath Trail to follow the historic route of the Ohio & Erie Canal.',
    fullName: 'Cuyahoga Valley National Park',
    image: {
      credit: 'NPS Photo / D.J. Reiser',
      url: 'https://www.nps.gov/common/uploads/structured_data/F7425874-D97F-BFD6-36581A36C8A7FF0D.jpg',
    },
    latitude: '41.26093905',
    longitude: '-81.57116722',
    parkCode: 'cuva',
  },
  cwdw: {
    description:
      "On forested hills surrounding the nation's capital are the remnants of a complex system of Civil War fortifications. These strategic buttresses transformed the young capital into one of the world's most fortified cities. By 1865, 68 forts and 93 batteries armed with over 800 cannons encircled Washington, DC. Today, you can visit 17 of the original sites now managed by the National Park Service.",
    fullName: 'Civil War Defenses of Washington',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82F2B8-1DD8-B71B-0BEE3AC8B175885F.jpg',
    },
    latitude: '38.9644',
    longitude: '-77.0292',
    parkCode: 'cwdw',
  },
  daav: {
    description:
      'Dayton Aviation Heritage National Historical Park exists at the heart of one of the world’s most significant, globally impactful stories: the discovery of the secrets of controllable flight. Through perseverance and determination the Wright brothers and Paul Laurence Dunbar were able to overcome obstacles in their lives and leave their respective marks on history.',
    fullName: 'Dayton Aviation Heritage National Historical Park',
    image: {
      credit: 'NPS / Tom Engberg',
      url: 'https://www.nps.gov/common/uploads/structured_data/0B28E77A-B721-B2D1-7549D561D8CE4722.jpg',
    },
    latitude: '39.78944467',
    longitude: '-84.10442045',
    parkCode: 'daav',
  },
  ddem: {
    description:
      "The Dwight D. Eisenhower Memorial tells the story of one of America's greatest leaders of the 20th century.",
    fullName: 'Dwight D. Eisenhower Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/7E0A4E6C-06D4-F1EC-7717B0A532D6A635.jpg',
    },
    latitude: '38.8869476647',
    longitude: '-77.018737554',
    parkCode: 'ddem',
  },
  dena: {
    description:
      "Denali is six million acres of wild land, bisected by one ribbon of road. Travelers along it see the relatively low-elevation taiga forest give way to high alpine tundra and snowy mountains, culminating in North America's tallest peak, 20,310' Denali. Wild animals large and small roam un-fenced lands, living as they have for ages. Solitude, tranquility and wilderness await.",
    fullName: 'Denali National Park & Preserve',
    image: {
      credit: 'NPS Photo / Nathan Kostegian',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83C9C7-1DD8-B71B-0B9B669ED961F97E.jpg',
    },
    latitude: '63.29777484',
    longitude: '-151.0526568',
    parkCode: 'dena',
  },
  depo: {
    description:
      "Established in 1911 by presidential proclamation, Devils Postpile National Monument protects and preserves the Devils Postpile formation, the 101-foot high Rainbow Falls, and pristine mountain scenery. The formation is a rare sight in the geologic world and ranks as one of the world's finest examples of columnar basalt. Its' columns tower up to 60 feet and display a striking symmetry.",
    fullName: 'Devils Postpile National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D873E-1DD8-B71B-0BF8E731254A9D7E.jpg',
    },
    latitude: '37.6152564',
    longitude: '-119.0873903',
    parkCode: 'depo',
  },
  deso: {
    description:
      'In May 1539, Conquistador Hernando de Soto’s army of soldiers, hired mercenaries, craftsmen, and clergy made landfall in Tampa Bay. They were met with fierce resistance of indigenous people protecting their homelands. De Soto’s quest for glory and gold would be a four year, four thousand mile odyssey of intrigue, warfare, disease, and discovery that would form the history of the United States.',
    fullName: 'De Soto National Memorial',
    image: {
      credit: 'Tim Ohr',
      url: 'https://www.nps.gov/common/uploads/structured_data/5A51F02C-1DD8-B71B-0B73F14FDF6736AE.jpg',
    },
    latitude: '27.52272613',
    longitude: '-82.64335416',
    parkCode: 'deso',
  },
  deto: {
    description:
      'The Tower is an astounding geologic feature that protrudes out of the prairie surrounding the Black Hills. It is considered sacred by Northern Plains Indians and indigenous people. Hundreds of parallel cracks make it one of the finest crack climbing areas in North America. Devils Tower entices us to learn more, explore more and define our place in the natural and cultural world.',
    fullName: 'Devils Tower National Monument',
    image: {
      credit: 'NPS/ S. Carter',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C812956-1DD8-B71B-0B0AB4D807441C9D.jpg',
    },
    latitude: '44.59064655',
    longitude: '-104.7156341',
    parkCode: 'deto',
  },
  deva: {
    description:
      'In this below-sea-level basin, steady drought and record summer heat make Death Valley a land of extremes. Yet, each extreme has a striking contrast. Towering peaks are frosted with winter snow. Rare rainstorms bring vast fields of wildflowers. Lush oases harbor tiny fish and refuge for wildlife and humans. Despite its morbid name, a great diversity of life survives in Death Valley.',
    fullName: 'Death Valley National Park',
    image: {
      credit: 'Ronald Gaddis',
      url: 'https://www.nps.gov/common/uploads/structured_data/010A933C-95B1-CBCD-D6D64D47D5B81E76.jpg',
    },
    latitude: '36.48753731',
    longitude: '-117.134395',
    parkCode: 'deva',
  },
  dewa: {
    description:
      "Need to get back to nature for a little while? We are here for you. This sacred land has been cherished by people for over 10,000 years. Its fields and forests protected those that came before us, and today are a beloved national treasure. With 40 miles of river, 100+ miles of hiking trails, and three swim beaches where you can bring a grill, there's lots of ways to #FindYourPark #EcuentraTuParque",
    fullName: 'Delaware Water Gap National Recreation Area',
    image: {
      credit: 'Courtesy of James Hicks',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79C4E3-1DD8-B71B-0B9EC12DFCA00E1C.jpg',
    },
    latitude: '41.12793491',
    longitude: '-74.94751173',
    parkCode: 'dewa',
  },
  dino: {
    description:
      'Dinosaurs once roamed here. Their fantastic remains are still visibly embedded in the rocks. Today, the mountains, desert, and untamed rivers flowing in deep canyons support an array of life. Petroglyphs hint at earlier cultures. Later, homesteaders and outlaws found refuge here. Whether your passion is science, adventure, history or scenery, Dinosaur offers much to explore.',
    fullName: 'Dinosaur National Monument',
    image: {
      credit: 'NPS Photo / Dan Johnson',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83D97A-1DD8-B71B-0B61AF7BD82A61B1.jpg',
    },
    latitude: '40.50739742',
    longitude: '-108.9333714',
    parkCode: 'dino',
  },
  drto: {
    description:
      'Almost 70 miles (113 km) west of Key West lies the remote Dry Tortugas National Park. This 100-square mile park is mostly open water with seven small islands. Accessible only by boat or seaplane, the park is known the world over as the home of magnificent Fort Jefferson, picturesque blue waters, superlative coral reefs and marine life, and the vast assortment of bird life that frequents the area.',
    fullName: 'Dry Tortugas National Park',
    image: {
      credit: 'NPS Photo / Brett Seymour',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81050F-1DD8-B71B-0B45EDC68B621860.jpg',
    },
    latitude: '24.628741',
    longitude: '-82.87319',
    parkCode: 'drto',
  },
  ebla: {
    description:
      'This stunning landscape on the Salish Sea, with its rich farmland and promising seaport, lured the earliest American pioneers north of the Columbia River to Ebey’s Landing. Today Ebey’s Landing National Historical Reserve preserves the historical, agricultural and cultural traditions of both Native and Euro-American – while offering spectacular opportunities for recreation.',
    fullName: "Ebey's Landing National Historical Reserve",
    image: {
      credit: 'NPS Photo / H. Richards',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84BC00-1DD8-B71B-0BD2CA9CA44675E9.jpg',
    },
    latitude: '48.21403036',
    longitude: '-122.6877213',
    parkCode: 'ebla',
  },
  edal: {
    description:
      'Described as horrifying, mystifying, and brilliant, Poe’s writing has engaged readers all over the globe. The six years Edgar Allan Poe lived in Philadelphia were his happiest and most productive. Yet Poe also struggled with bad luck, personal demons and his wife’s illness. In Poe’s humble home, reflect on the human spirit surmounting crushing obstacles, and celebrate Poe’s astonishing creativity.',
    fullName: 'Edgar Allan Poe National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7AD5D5-1DD8-B71B-0BAF630A8D440C44.jpg',
    },
    latitude: '39.96195482',
    longitude: '-75.1500062',
    parkCode: 'edal',
  },
  edis: {
    description:
      'Thomas Edison’s home and laboratory are a step back in time, when machines were run by belts and pulleys and music was played on phonographs. Where to the uninformed passerby, the buildings betray little evidence of the industries they once started. Discover where America’s greatest inventor changed our world forever.',
    fullName: 'Thomas Edison National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81E2B0-1DD8-B71B-0B55C38EB2E224A5.jpg',
    },
    latitude: '40.78549896',
    longitude: '-74.23821139',
    parkCode: 'edis',
  },
  efmo: {
    description:
      "The mounds preserved here are considered sacred by many Americans, especially the Monument's 20 culturally associated American Indian tribes. A visit offers opportunities to contemplate the meanings of the mounds and the people who built them. The 200 plus American Indian mounds are located in one of the most picturesque sections of the Upper Mississippi River Valley.",
    fullName: 'Effigy Mounds National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BB1E2-1DD8-B71B-0B5500DF447CB89D.jpg',
    },
    latitude: '43.08095081',
    longitude: '-91.19687517',
    parkCode: 'efmo',
  },
  eise: {
    description:
      'Eisenhower National Historic Site preserves the farm of General and 34th President Dwight D. Eisenhower. Adjacent to the Gettysburg battlefield, the farm served the president and first lady as a weekend retreat and as a meeting place for world leaders. With its peaceful setting and view of South Mountain, it was a respite from Washington, DC, and a backdrop for efforts to reduce Cold War tensions.',
    fullName: 'Eisenhower National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81389C-1DD8-B71B-0BDD6A8DAF590B3E.jpg',
    },
    latitude: '39.79577592',
    longitude: '-77.26508101',
    parkCode: 'eise',
  },
  elca: {
    description:
      'Travel along El Camino Real de Tierra Adentro National Historic Trail to experience and learn from a complicated legacy of 300 years of conflict, cooperation, and cultural exchange between a variety of empires—European and non-European alike.',
    fullName: 'El Camino Real de Tierra Adentro National Historic Trail',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A6685-1DD8-B71B-0B18BFB9BABA6FCD.jpg',
    },
    latitude: '33.7990672546',
    longitude: '-106.866386195',
    parkCode: 'elca',
  },
  elis: {
    description:
      'How far would you travel to find a better life? What if the journey took weeks under difficult conditions? If you answered "Whatever it takes," you echo the feelings of the 12 million immigrants who passed through these now quiet halls from 1892 to 1954. Ellis Island afforded them the opportunity to attain the American dream for themselves and their descendants. Come hear their stories.',
    fullName: 'Ellis Island Part of Statue of Liberty National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C856FAB-1DD8-B71B-0B0DD7A0B6955955.jpg',
    },
    latitude: '40.69946',
    longitude: '-74.0401',
    parkCode: 'elis',
  },
  elma: {
    description:
      'The richly diverse volcanic landscape of El Malpais (el-mal-pie-EES) offers solitude, recreation, and adventure. Explore incredible geologic features such as lava flows, cinder cones, lava tube caves, and sandstone bluffs. While some may see a desolate environment, people have been adapting to and living in this extraordinary terrain for generations. Come discover the land of fire and ice!',
    fullName: 'El Malpais National Monument',
    image: {
      credit: 'NPS Photo/ Maci MacPherson',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E2FFF-1DD8-B71B-0B930EEBB4CE85D2.jpg',
    },
    latitude: '34.88422799',
    longitude: '-107.9950948',
    parkCode: 'elma',
  },
  elmo: {
    description:
      'Imagine the refreshment of finding water after days of dusty travel. A reliable waterhole hidden at the base of a sandstone bluff made El Morro (the headland) a popular campsite for hundreds of years. Here, Ancestral Puebloans, Spanish and American travelers carved over 2,000 signatures, dates, messages, and petroglyphs. Make El Morro National Monument a stopping point on your travels.',
    fullName: 'El Morro National Monument',
    image: {
      credit: 'NPS/Andrew Frieder',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86C570-1DD8-B71B-0B69C68F5DC5DEDB.jpg',
    },
    latitude: '35.03895916',
    longitude: '-108.3463984',
    parkCode: 'elmo',
  },
  elro: {
    description:
      'Visit the home of Eleanor Roosevelt. Here, Franklin and Eleanor entertained friends, state visitors, the press, and their associates in the tranquil and relaxed atmosphere of Val-Kill. Explore the Roosevelt saga in the homes of Franklin and Eleanor Roosevelt, the exhibits at the nation’s first Presidential Library, and over a thousand acres of gardens and trails.',
    fullName: 'Eleanor Roosevelt National Historic Site',
    image: {
      credit: 'NPS Photo/Bill Urbin',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8112E3-1DD8-B71B-0B51AD6484D491FF.jpg',
    },
    latitude: '41.76208482',
    longitude: '-73.89894026',
    parkCode: 'elro',
  },
  elte: {
    description:
      'Explore a diverse array of histories contained within El Camino Real de los Tejas’ 150-year life, including the Spanish struggle to missionize American Indian nations, the growth of cattle ranching in the Mexican period, and the movement for Texan independence and statehood.',
    fullName: 'El Camino Real de los Tejas National Historic Trail',
    image: {
      credit: 'Christopher Talbot',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E7812-1DD8-B71B-0B21FD984B4C001C.jpg',
    },
    latitude: '30.0922964581',
    longitude: '-97.3397666725',
    parkCode: 'elte',
  },
  euon: {
    description:
      "America's only Nobel Prize winning playwright, Eugene O'Neill, chose to live in Northern California at the height of his writing career. Isolated from the world and within the walls of his home, O'Neill wrote his final and most memorable plays; The Iceman Cometh, Long Day's Journey Into Night, and A Moon for the Misbegotten.",
    fullName: "Eugene O'Neill National Historic Site",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0334-1DD8-B71B-0B8C905A1ABBFE6A.jpg',
    },
    latitude: '37.82604456',
    longitude: '-122.0271566',
    parkCode: 'euon',
  },
  ever: {
    description:
      'Everglades National Park protects an unparalleled landscape that provides important habitat for numerous rare and endangered species like the manatee, American crocodile, and the elusive Florida panther. An international treasure as well - a World Heritage Site, International Biosphere Reserve, a Wetland of International Importance, and a specially protected area under the Cartagena Treaty.',
    fullName: 'Everglades National Park',
    image: {
      credit: 'NPS Photo by Miguel Salas',
      url: 'https://www.nps.gov/common/uploads/structured_data/17EC840E-9926-2E09-F2DD47A282915BBB.jpg',
    },
    latitude: '25.37294225',
    longitude: '-80.88200301',
    parkCode: 'ever',
  },
  feha: {
    description:
      'Here on Wall Street, George Washington took the oath of office as our first President, and this site was home to the first Congress, Supreme Court, and Executive Branch offices. The current structure, a Customs House, later served as part of the US Sub-Treasury. Now, the building serves as a museum and memorial to our first President and the beginnings of the United States of America.',
    fullName: 'Federal Hall National Memorial',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C855D19-1DD8-B71B-0B2AF1FAF9721319.jpg',
    },
    latitude: '40.70731192',
    longitude: '-74.01025636',
    parkCode: 'feha',
  },
  fiis: {
    description:
      'Immerse yourself in an enchanting collage of coastal life and history. Rhythmic waves, high dunes, ancient maritime forests, historic landmarks and glimpses of wildlife, Fire Island has been a special place for diverse plants, animals and people for centuries. Far from the pressure of nearby big-city life, dynamic barrier island beaches offer solitude, camaraderie, and spiritual renewal.',
    fullName: 'Fire Island National Seashore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D4BAC-1DD8-B71B-0B8798F96FC8F8D7.jpg',
    },
    latitude: '40.69668638',
    longitude: '-73.00013462',
    parkCode: 'fiis',
  },
  fila: {
    description:
      'First Ladies National Historic Site consists of two properties in downtown Canton, Ohio - the home of First Lady Ida Saxton-McKinley and our Education Center. Come learn about how the position of First Lady has evolved over time to include a public role.',
    fullName: 'First Ladies National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C824DCE-1DD8-B71B-0B14D80DEE050385.jpg',
    },
    latitude: '40.79689857',
    longitude: '-81.37579869',
    parkCode: 'fila',
  },
  flfo: {
    description:
      'Beneath a grassy mountain valley in central Colorado lies one of the richest and most diverse fossil deposits in the world. Petrified redwood stumps up to 14 feet wide and thousands of detailed fossils of insects and plants reveal the story of a very different, prehistoric Colorado.',
    fullName: 'Florissant Fossil Beds National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F8744-1DD8-B71B-0BB99F85D26FBB5C.jpg',
    },
    latitude: '38.91260586',
    longitude: '-105.2803396',
    parkCode: 'flfo',
  },
  flni: {
    description:
      'On Tuesday morning, September 11, 2001, the U.S. came under attack when four commercial airliners were hijacked and used to strike targets on the ground. Nearly 3,000 people tragically lost their lives. Because of the actions of the 40 passengers and crew aboard one of the planes, Flight 93, the attack on the U.S. Capitol was thwarted.',
    fullName: 'Flight 93 National Memorial',
    image: {
      credit: 'NPS Photo/Courtney Claycomb',
      url: 'https://www.nps.gov/common/uploads/structured_data/10BAD632-AD12-B21C-C9DAC330F7193A67.jpg',
    },
    latitude: '40.06061476',
    longitude: '-78.89456905',
    parkCode: 'flni',
  },
  fobo: {
    description:
      'Fort Bowie witnessed almost 25 years of conflict between the Chiricahua Apache and the US Army, and remains a tangible connection to the turbulent era of the late 1800s. Explore the history of Fort Bowie and Apache Pass as you hike to the visitor center and old fort ruins. Today, this peaceful landscape stands in stark contrast to the violence that once gripped this land.',
    fullName: 'Fort Bowie National Historic Site',
    image: {
      credit: 'NPS Photo/ Ron Stewart',
      url: 'https://www.nps.gov/common/uploads/structured_data/30BF20D7-BF6A-1DE6-21266DC5EE3557AF.jpg',
    },
    latitude: '32.14925942',
    longitude: '-109.451132',
    parkCode: 'fobo',
  },
  fobu: {
    description:
      "Some of the world's best preserved fossils are found in the flat-topped ridges of southwestern Wyoming's cold sagebrush desert. Fossilized fishes, insects, plants, reptiles, birds, and mammals are exceptional for their abundance, variety, and detail of preservation. Most remarkable is the story they tell of ancient life in a subtropical landscape.",
    fullName: 'Fossil Butte National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/41C5C9F2-E170-9D8F-5AC0C8BB658F20A6.jpg',
    },
    latitude: '41.85635223',
    longitude: '-110.7624754',
    parkCode: 'fobu',
  },
  foda: {
    description:
      "Fort Davis is one of the best surviving examples of an Indian Wars' frontier military post in the Southwest. From 1854 to 1891, Fort Davis was strategically located to protect emigrants, mail coaches, and freight wagons on the Trans-Pecos portion of the San Antonio-El Paso Road and on the Chihuahua Trail.",
    fullName: 'Fort Davis National Historic Site',
    image: {
      credit: 'NPS Photo / Max Kandler',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DCD39-1DD8-B71B-0BEE09E6D3EF298C.jpg',
    },
    latitude: '30.59930381',
    longitude: '-103.8961904',
    parkCode: 'foda',
  },
  fodo: {
    description:
      'Brigadier General Ulysses S. Grant was becoming quite famous as he wrote these words following the surrender of Confederate Fort Donelson on Sunday, February 16, 1862. The Union victory at Fort Donelson elated the North, and stunned the South. Within days of the surrender, Clarksville and Nashville would fall into Union hands. Grant and his troops had created a pathway to victory for the Union.',
    fullName: 'Fort Donelson National Battlefield',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/6903ED5B-1DD8-B71B-0B29CCAFAED7A0BF.jpg',
    },
    latitude: '36.49019078',
    longitude: '-87.92445695',
    parkCode: 'fodo',
  },
  fodu: {
    description:
      "This 376 acre wooded park was once home to an earthen fort built to protect Washington, DC, during the Civil War. Today, visitors can see the fort's earthworks and escape to the great outdoors. Activities include picnics, nature walks, biking, gardening, environmental education, music, and ranger-led programs.",
    fullName: 'Fort Dupont Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82FB0D-1DD8-B71B-0B3FA003572FE8B6.jpg',
    },
    latitude: '38.87731289',
    longitude: '-76.94955824',
    parkCode: 'fodu',
  },
  fofo: {
    description:
      "Fort Foote was constructed in 1863 atop Rozier's Bluff to strengthen the ring of fortifications that encircled Washington, D.C. Two of the Guns that protected Washington are still there along with the remains of the fort's earthworks.",
    fullName: 'Fort Foote Park',
    image: {
      credit: 'NPS / Rachel Hendrix',
      url: 'https://www.nps.gov/common/uploads/structured_data/29827F7B-FB58-C388-8417892C807E7940.jpg',
    },
    latitude: '38.76901785',
    longitude: '-77.02812387',
    parkCode: 'fofo',
  },
  fofr: {
    description:
      "Georgia's fate was decided in 1742 when Spanish and British forces clashed on St. Simons Island. Fort Frederica's troops defeated the Spanish, ensuring Georgia's future as a British colony. Today, the archeological remnants of Frederica are protected by the National Park Service.",
    fullName: 'Fort Frederica National Monument',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DD350-1DD8-B71B-0BF0B4C77628ED80.jpg',
    },
    latitude: '31.2214699',
    longitude: '-81.39452014',
    parkCode: 'fofr',
  },
  fola: {
    description:
      'Originally established as a private fur trading fort in 1834, Fort Laramie evolved into the largest and best known military post on the Northern Plains before its abandonment in 1890. This “grand old post” witnessed the entire sweeping saga of America’s western expansion and Indian resistance to encroachment on their territories.',
    fullName: 'Fort Laramie National Historic Site',
    image: {
      credit: 'Chase Swift Photography/Chase Swift',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81F1A8-1DD8-B71B-0BDAD2375D9DFAA5.jpg',
    },
    latitude: '42.20301694',
    longitude: '-104.5459112',
    parkCode: 'fola',
  },
  fols: {
    description:
      'Discover a complete and authentic army post from the 1860s -1870s! This well-preserved fort on the Santa Fe Trail shares a tumultuous history of the Indian Wars era. The sandstone constructed buildings sheltered troops who were known as the Guardians of the Santa Fe Trail.',
    fullName: 'Fort Larned National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B90DB-1DD8-B71B-0BC969A75425CFE9.jpg',
    },
    latitude: '38.18047491',
    longitude: '-99.21836664',
    parkCode: 'fols',
  },
  foma: {
    description:
      'Fort Matanzas National Monument preserves the fortified coquina watchtower, completed in 1742, which defended the southern approach to the Spanish military settlement of St. Augustine. It also protects approximately 300 acres of Florida coastal environment containing dunes, marsh, maritime forest, and associated flora and fauna, including threatened and endangered species.',
    fullName: 'Fort Matanzas National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/E811D610-C355-6074-0A04E6DFF40C6EEC.jpg',
    },
    latitude: '29.7121489',
    longitude: '-81.23567535',
    parkCode: 'foma',
  },
  fomc: {
    description:
      "by the dawn's early light, a large red, white and blue banner? Whose broad stripes and bright stars... were so gallantly streaming...over Fort McHenry! The valiant defense of the fort during the Battle of Baltimore on September 13-14, 1814 inspired Francis Scott Key to write the words that became the U.S. national anthem. The fort's history holds many other stories too, from the Civil War to WWII.",
    fullName: 'Fort McHenry National Monument and Historic Shrine',
    image: {
      credit: 'Tim Ervin',
      url: 'https://www.nps.gov/common/uploads/structured_data/8F45A684-F00A-CB5C-85186E42923EFBC1.jpg',
    },
    latitude: '39.26395314',
    longitude: '-76.58044165',
    parkCode: 'fomc',
  },
  fomr: {
    description:
      "Fort Monroe National Monument has a diverse history spanning the American story from American Indian presence, Captain John Smith's journeys, first arrival of enslaved Africans in English North America, a safe haven for freedom seekers during the American Civil War, and a bastion of defense for the Chesapeake Bay through the 21st Century. Visit and witness the on-going preservation work in action.",
    fullName: 'Fort Monroe National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C859CCE-1DD8-B71B-0B87DECA53D748EB.jpg',
    },
    latitude: '37.01733343',
    longitude: '-76.30103195',
    parkCode: 'fomr',
  },
  fone: {
    description:
      'The battle at Fort Necessity in the summer of 1754 was the opening action of the French and Indian War. This war was a clash of British, French and American Indian cultures. It ended with the removal of French power from North America. The stage was set for the American Revolution.',
    fullName: 'Fort Necessity National Battlefield',
    image: {
      credit: 'NPS Photo/Tom Markwardt',
      url: 'https://www.nps.gov/common/uploads/structured_data/F78F68EB-E4CB-1C1A-9A36EE67336D8B60.jpg',
    },
    latitude: '39.81306048',
    longitude: '-79.59033344',
    parkCode: 'fone',
  },
  fopo: {
    description:
      "From its vantage point overlooking the spectacular Golden Gate, Fort Point defended the San Francisco Bay following California's Gold Rush through World War II. Its beautifully arched casemates display the art of 3rd system brick masonry and interacts gracefully with the Golden Gate Bridge.",
    fullName: 'Fort Point National Historic Site',
    image: {
      credit: 'NPS photo/Will Elder',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C800CC0-1DD8-B71B-0B80D91C47D8ACE5.jpg',
    },
    latitude: '37.80837439',
    longitude: '-122.473747',
    parkCode: 'fopo',
  },
  fopu: {
    description:
      'For much of the 19th century, masonry fortifications were the United States’ main defense against overseas enemies. However, during the Civil War, new technology proved its superiority to these forts. The Union army used rifled cannon and compelled the Confederate garrison inside Fort Pulaski to surrender. The siege was a landmark experiment in the history of military science and invention.',
    fullName: 'Fort Pulaski National Monument',
    image: {
      credit: 'NPS Photo / Joel Cadoff',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C870DCA-1DD8-B71B-0B2574219E50694B.jpg',
    },
    latitude: '32.0308274',
    longitude: '-80.93361681',
    parkCode: 'fopu',
  },
  fora: {
    description:
      "Fort Raleigh National Historic Site protects and preserves known portions of England's first New World settlements from 1584 to 1590. This site also preserves the cultural heritage of the Native Americans, European Americans and African Americans who have lived on Roanoke Island.",
    fullName: 'Fort Raleigh National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C78FF79-1DD8-B71B-0B8F7CC3FCAA5934.jpg',
    },
    latitude: '35.93278602',
    longitude: '-75.71496865',
    parkCode: 'fora',
  },
  fosc: {
    description:
      "Promises made and broken! Who deserves to be free? The fight for freedom! Soldiers fighting settlers! Each of these stories is a link in the chain of events that encircled Fort Scott from 1842-1873. All of the site's structures, its parade ground, and its tallgrass prairie bear witness to this era when the country was forged from a young republic into a united transcontinental nation.",
    fullName: 'Fort Scott National Historic Site',
    image: {
      credit: 'NPS Pnoto',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C837EE2-1DD8-B71B-0BD0F84088C06269.jpg',
    },
    latitude: '37.84358849',
    longitude: '-94.70429174',
    parkCode: 'fosc',
  },
  fosm: {
    description:
      "Explore life on the edge of frontier and Indian Territory through the stories of soldiers, the Trail of Tears, scandals, outlaws, and lawmen who pursued them. From the establishment of the first Fort Smith on December 25, 1817, to the final days of Judge Isaac C. Parker's jurisdiction over Indian Territory in 1896, Fort Smith National Historic Site preserves almost 80 years of history.",
    fullName: 'Fort Smith National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7CB43F-1DD8-B71B-0B6B515EA0FAACF5.jpg',
    },
    latitude: '35.38834746',
    longitude: '-94.43129079',
    parkCode: 'fosm',
  },
  fost: {
    description:
      'For centuries, the Oneida Carrying Place, a six mile portage connecting the Mohawk River and Wood Creek, served as a vital link for those traveling by water from the ocean to the Great Lakes. When Europeans arrived, nations fought for control of the carry, the homelands of the Six Nations Confederacy, and the rich resources of North America. In this struggle, Fort Stanwix would play a vital role.',
    fullName: 'Fort Stanwix National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/97622E69-1DD8-B71B-0BFA66595163F51F.jpg',
    },
    latitude: '43.21053441',
    longitude: '-75.45557626',
    parkCode: 'fost',
  },
  fosu: {
    description:
      'Two forts stand at the entrance of Charleston Harbor. Patriots inside a palmetto log fort, later named Fort Moultrie, defeated the Royal Navy in 1776. As Charleston blazed a path towards secession to preserve slavery, construction on a new fort, Fort Sumter, proceeded. The Confederacy fired on the US garrison of Fort Sumter on April 12, 1861 opening the Civil War, which redefined American freedom.',
    fullName: 'Fort Sumter and Fort Moultrie National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/E989D519-950E-C3AC-84F007692983681A.jpg',
    },
    latitude: '32.75654469',
    longitude: '-79.87068744',
    parkCode: 'fosu',
  },
  foth: {
    description:
      'April 14, 1865. President Lincoln is assassinated at Ford’s Theatre. Discover how a nation handled grief and loss, how everyday people experienced a national tragedy, and how we have remembered a fallen leader. Today, in partnership with Ford’s Theatre Society, live dramatic productions highlight Lincoln’s love of the theatre, and the power of stories to connect us to ourselves and our history.',
    fullName: "Ford's Theatre",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C815286-1DD8-B71B-0BF2AD2960AE4AF6.jpg',
    },
    latitude: '38.89668819',
    longitude: '-77.02577944',
    parkCode: 'foth',
  },
  foun: {
    description:
      'Exposed to the wind, within a sweeping valley of short grass prairie, amid the swales of the Santa Fe Trail, lie the territorial-style adobe remnants of the largest 19th century military fort in the region. For forty years, 1851-1891, Fort Union functioned as an agent of political and cultural change, whether desired or not, in New Mexico and throughout the Southwest.',
    fullName: 'Fort Union National Monument',
    image: {
      credit: 'Ron Harvey - Fort Union National Monument',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C1B33-1DD8-B71B-0B88C189AAA85B01.jpg',
    },
    latitude: '35.90700629',
    longitude: '-105.0145185',
    parkCode: 'foun',
  },
  fous: {
    description:
      'Between 1828 and 1867, Fort Union was the most important fur trade post on the Upper Missouri River. Here, the Assiniboine and six other Northern Plains Tribes exchanged buffalo robes and smaller furs for goods from around the world, including cloth, guns, blankets, and beads. A bastion of peaceful coexistence, the post annually traded over 25,000 buffalo robes and $100,000 in merchandise.',
    fullName: 'Fort Union Trading Post National Historic Site',
    image: {
      credit: 'NPS Photo / Kris Baxter',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81ACEF-1DD8-B71B-0B1AD164BE2F3313.jpg',
    },
    latitude: '48.00075828',
    longitude: '-104.0375238',
    parkCode: 'fous',
  },
  fova: {
    description:
      'Located on the north bank of the Columbia River, in sight of snowy mountain peaks and a vibrant urban landscape, this park has a rich cultural past. From a frontier fur trading post, to a powerful military legacy, the magic of flight, and the origin of the American Pacific Northwest, history is shared at four unique sites. Discover stories of transition, settlement, conflict, and community.',
    fullName: 'Fort Vancouver National Historic Site',
    image: {
      credit: 'NPS Photo / Troy Wayrynen',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E8577-1DD8-B71B-0B5ABB3F175DDD81.jpg',
    },
    latitude: '45.62234841',
    longitude: '-122.6617043',
    parkCode: 'fova',
  },
  fowa: {
    description:
      'Built to defend the river approach to Washington, DC, Fort Washington has stood as silent sentry for over 200 years. As technologies advanced so did Fort Washington, from the brick and stone of the 19th century to the concrete and steel of the 20th century. Joining the National Park Service in 1946, the park continues to protect the Potomac River.',
    fullName: 'Fort Washington Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81C3C3-1DD8-B71B-0B04CE7B7C61FE25.jpg',
    },
    latitude: '38.7117',
    longitude: '-77.0302',
    parkCode: 'fowa',
  },
  frde: {
    description:
      'These words by President Franklin Delano Roosevelt ushered the United States into World War II and defined what it is to be an American. Stop by this secluded memorial and begin to understand the Roosevelt legacy.',
    fullName: 'Franklin Delano Roosevelt Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C822603-1DD8-B71B-0BADCFA6633AC4D6.jpg',
    },
    latitude: '38.88341274',
    longitude: '-77.04311542',
    parkCode: 'frde',
  },
  frdo: {
    description:
      "Frederick Douglass spent his life fighting for justice and equality. Born into slavery in 1818, he escaped as a young man and became a leading voice in the abolitionist movement. People everywhere still find inspiration today in his tireless struggle, brilliant words, and inclusive vision of humanity. Douglass's legacy is preserved here at Cedar Hill, where he lived his last 17 years.",
    fullName: 'Frederick Douglass National Historic Site',
    image: {
      credit: 'NPS Photo / Nate Johnson',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BDCB8-1DD8-B71B-0BB04B6313FE6EF1.jpg',
    },
    latitude: '38.86298458',
    longitude: '-76.98508147',
    parkCode: 'frdo',
  },
  frhi: {
    description:
      "Albert Gallatin is best remembered for his thirteen year tenure as Secretary of the Treasury during the Jefferson and Madison administrations. In that time he reduced the national debt, purchased the Louisiana Territory and funded the Lewis & Clark exploration. Gallatin's accomplishments and contributions are highlighted at Friendship Hill, his restored country estate.",
    fullName: 'Friendship Hill National Historic Site',
    image: {
      credit: 'NPS Photo/Rene Benson',
      url: 'https://www.nps.gov/common/uploads/structured_data/7B7689B8-BF0B-AE71-290D810DFE3D0968.jpg',
    },
    latitude: '39.77543423',
    longitude: '-79.92504169',
    parkCode: 'frhi',
  },
  frla: {
    description:
      "Frederick Law Olmsted (1822-1903) is recognized as the founder of American landscape architecture and the nation's foremost parkmaker. Olmsted moved his home to suburban Boston in 1883 and established the world's first full-scale professional office for the practice of landscape design. During the next century, his sons and successors perpetuated Olmsted's design ideals, philosophy, and influence.",
    fullName: 'Frederick Law Olmsted National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C853BE9-1DD8-B71B-0B625B6B8B89F1A0.jpg',
    },
    latitude: '42.32424266',
    longitude: '-71.13202567',
    parkCode: 'frla',
  },
  frri: {
    description:
      'In 1961, a small interracial band of “Freedom Riders” challenged discriminatory laws requiring separation of the races in interstate travel. They were attacked by white segregationists, who firebombed the bus. Images of the attack appeared in hundreds of newspapers, shocking the American public and spurring the Federal Government to issue regulations banning segregation in interstate travel.',
    fullName: 'Freedom Riders National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/89E23FDC-9BE7-D83A-83DEECF7210BD97D.jpg',
    },
    latitude: '33.635269165',
    longitude: '-85.9064331055',
    parkCode: 'frri',
  },
  frsp: {
    description:
      "Fredericksburg, Chancellorsville, Wilderness, and Spotsylvania, this is America's battleground, where the Civil War roared to its bloody climax. No place more vividly reflects the War's tragic cost in all its forms. A town bombarded and looted. Farms large and small ruined. Refugees by the thousands forced into the countryside. More than 85,000 men wounded; 15,000 killed--most in graves unknown.",
    fullName: 'Fredericksburg & Spotsylvania National Military Park',
    image: {
      credit: 'Buddy Secor',
      url: 'https://www.nps.gov/common/uploads/structured_data/BC87C21E-A621-18BC-AA6D4063790AD241.jpg',
    },
    latitude: '38.29378',
    longitude: '-77.46734',
    parkCode: 'frsp',
  },
  frst: {
    description:
      'Famous as the First State to ratify the Constitution, Delaware was born out of a conflict among three world powers for dominance of the Delaware Valley. From this beginning, the region developed a distinct character that tolerated diversity in religion and national origin and valued independence.',
    fullName: 'First State National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/B2BE43AE-F527-DF72-2128343A2C155557.jpg',
    },
    latitude: '39.83076929',
    longitude: '-75.56353942',
    parkCode: 'frst',
  },
  gaar: {
    description:
      'This vast landscape does not contain any roads or trails. Visitors discover intact ecosystems where people have lived with the land for thousands of years. Wild rivers meander through glacier-carved valleys, caribou migrate along age-old trails, endless summer light fades into aurora-lit night skies of winter. It remains virtually unchanged except by the forces of nature.',
    fullName: 'Gates Of The Arctic National Park & Preserve',
    image: {
      credit: 'NPS Photo / Sean Tevebaugh',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A8B6B-1DD8-B71B-0B8B89FE0C6B6F4F.jpg',
    },
    latitude: '67.75961636',
    longitude: '-153.2917758',
    parkCode: 'gaar',
  },
  gari: {
    description:
      'The 25 miles of free-flowing Gauley River and the six miles of the Meadow River pass through scenic gorges and valleys containing a wide variety of natural and cultural features. The Gauley River contains several class V+ rapids, making it one of the most adventurous white water boating rivers in the east.',
    fullName: 'Gauley River National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F582C-1DD8-B71B-0BD2BEB50EE7AA86.jpg',
    },
    latitude: '38.20614947',
    longitude: '-81.00420836',
    parkCode: 'gari',
  },
  gate: {
    description:
      'Spanning 27,000 acres from Sandy Hook in New Jersey to Breezy Point in New York City, the park is both the gateway from the ocean into New York Harbor, and the gateway to the National Park Service for millions of visitors every year. Gateway offers green spaces and beaches alongside historic structures and cultural landscapes. Every day, Gateway is open for you to explore, envision, and enjoy!',
    fullName: 'Gateway National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85156E-1DD8-B71B-0BBB764337412E34.jpg',
    },
    latitude: '40.56536246',
    longitude: '-73.9171087',
    parkCode: 'gate',
  },
  gegr: {
    description:
      'The final resting place of President Ulysses S. Grant and his wife, Julia, is the largest mausoleum in North America. It testifies to a people’s gratitude for the man who ended the bloodiest conflict in American history as Commanding General of the Union Army and then, as President of the United States, strove to heal a nation after a civil war and make rights for all citizens a reality.',
    fullName: 'General Grant National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C855F85-1DD8-B71B-0B5A4A32E92B3730.jpg',
    },
    latitude: '40.81332817',
    longitude: '-73.96331542',
    parkCode: 'gegr',
  },
  gero: {
    description:
      'The British flag would not be raised above Fort Sackville Feb. 25, 1779. At 10 a.m., the garrison surrendered to American Colonel George Rogers Clark. His American army, aided by French residents of the Illinois country, had marched through freezing floodwaters to gain this victory. The fort’s capture assured United States claims to the frontier, an area nearly as large as the original 13 states.',
    fullName: 'George Rogers Clark National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C795C28-1DD8-B71B-0BB8A40DEE3F49FD.jpg',
    },
    latitude: '38.67912659',
    longitude: '-87.53545212',
    parkCode: 'gero',
  },
  gett: {
    description:
      'The Battle of Gettysburg was a turning point in the Civil War, the Union victory that ended General Robert E. Lee\'s second and most ambitious invasion of the North. Often referred to as the "High Water Mark of the Rebellion", Gettysburg was the Civil War\'s bloodiest battle and was also the inspiration for President Abraham Lincoln\'s immortal "Gettysburg Address".',
    fullName: 'Gettysburg National Military Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81933E-1DD8-B71B-0B1D3D82C99E2A6E.jpg',
    },
    latitude: '39.81557366',
    longitude: '-77.23246758',
    parkCode: 'gett',
  },
  gewa: {
    description:
      'George Washington Birthplace National Monument is located in the Northern Neck of Virginia. It encompasses 550 acres of the former Popes Creek Plantation, the American ancestral home of the Washington Family where George Washington was born. In addition to a Colonial Revival farm, burial ground, visitor center, and historic structures, the park also has picnic grounds and a public beach.',
    fullName: 'George Washington Birthplace National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/B1BC42A4-B749-0E55-A6D101DCD7ABBE57.jpg',
    },
    latitude: '38.19362603',
    longitude: '-76.92079458',
    parkCode: 'gewa',
  },
  gicl: {
    description:
      'For thousands of years, groups of ancient nomads used caves above the Gila River as temporary shelter. In the late 1200s, people of the agricultural Mogollon (Southern Ancestral Pueblo) culture made it a home. They built rooms, crafted pottery and raised children in the cliff dwellings for one or two generations. By approximately 1300, the Mogollon had moved on, leaving the walls behind.',
    fullName: 'Gila Cliff Dwellings National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8401BB-1DD8-B71B-0B29C3E110725BF2.jpg',
    },
    latitude: '33.22715258',
    longitude: '-108.2706711',
    parkCode: 'gicl',
  },
  glac: {
    description:
      "Come and experience Glacier's pristine forests, alpine meadows, rugged mountains, and spectacular lakes. With over 700 miles of trails, Glacier is a hiker's paradise for adventurous visitors seeking wilderness and solitude. Relive the days of old through historic chalets, lodges, and the famous Going-to-the-Sun Road. Explore Glacier National Park and discover what awaits you.",
    fullName: 'Glacier National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/9A13A83B-A961-01DA-EB87DF3C25DEAABC.jpg',
    },
    latitude: '48.68414678',
    longitude: '-113.8009306',
    parkCode: 'glac',
  },
  glba: {
    description:
      "Covering 3.3 million acres of rugged mountains, dynamic glaciers, temperate rainforest, wild coastlines and deep sheltered fjords, Glacier Bay National Park is a highlight of Alaska's Inside Passage and part of a 25-million acre World Heritage Site—one of the world’s largest international protected areas. From sea to summit, Glacier Bay offers limitless opportunities for adventure and inspiration.",
    fullName: 'Glacier Bay National Park & Preserve',
    image: {
      credit: 'NPS / T. VandenBerg',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C791618-1DD8-B71B-0B113FBF2EC1D614.jpg',
    },
    latitude: '58.80086718',
    longitude: '-136.8407579',
    parkCode: 'glba',
  },
  glca: {
    description:
      'Encompassing over 1.25 million acres, Glen Canyon National Recreation Area offers unparalleled opportunities for water-based & backcountry recreation. The recreation area stretches for hundreds of miles from Lees Ferry in Arizona to the Orange Cliffs of southern Utah, encompassing scenic vistas, geologic wonders, and a vast panorama of human history.',
    fullName: 'Glen Canyon National Recreation Area',
    image: {
      credit: 'NPS Photo / T Sigmon',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F1632-1DD8-B71B-0B783D849BA99EC8.jpg',
    },
    latitude: '36.9357464677',
    longitude: '-111.485594268',
    parkCode: 'glca',
  },
  glde: {
    description:
      "Before Pennsylvania there was New Sweden. Discover this last historic link to a forgotten past. Visit the church's pastoral surroundings and its burial ground of patriots and ordinary citizens alike.",
    fullName: 'Gloria Dei Church National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7FA643-1DD8-B71B-0BC25E1EB46EC74C.jpg',
    },
    latitude: '39.93435005',
    longitude: '-75.14398924',
    parkCode: 'glde',
  },
  glec: {
    description:
      'Glen Echo Park began in 1891 as a National Chautauqua Assembly "to promote liberal and practical education." By 1911, it transformed into DC\'s premier amusement park until it closed in 1968. Since 1971, the National Park Service has owned and operated the site and today, with the help of the Glen Echo Park Partnership for Arts and Culture, offers year-round cultural and recreational activities.',
    fullName: 'Glen Echo Park',
    image: {
      credit: 'NPS Photo/Bruce Douglas',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C848FDE-1DD8-B71B-0BE1393F7AFBC3D4.jpg',
    },
    latitude: '38.96912315',
    longitude: '-77.14012206',
    parkCode: 'glec',
  },
  goga: {
    description:
      'Experience a park so rich it supports 19 distinct ecosystems with over 2,000 plant and animal species. Go for a hike, enjoy a vista, have a picnic or learn about the centuries of overlapping history from California’s indigenous cultures, Spanish colonialism, the Mexican Republic, US military expansion and the growth of San Francisco. All of this and more awaits you, so get out and find your park.',
    fullName: 'Golden Gate National Recreation Area',
    image: {
      credit: 'NPS photo/Will Elder',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7FEE17-1DD8-B71B-0BA285725552D8E3.jpg',
    },
    latitude: '37.85982543',
    longitude: '-122.6007386',
    parkCode: 'goga',
  },
  gois: {
    description:
      'From 1794 to 1966, the U.S. Army on Governors Island was part of the social, political, and economic tapestry of New York City. Today, the island is a vibrant summer seasonal venue of art, culture, and performance against the backdrop of two centuries of military heritage and the skyline of one of the great cities of the world. The island is open to the public. Check Alerts',
    fullName: 'Governors Island National Monument',
    image: {
      credit: 'NPS photo / Michael B. Shaver',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85A2A1-1DD8-B71B-0B50FD84825F4474.jpg',
    },
    latitude: '40.69164233',
    longitude: '-74.01670765',
    parkCode: 'gois',
  },
  gosp: {
    description:
      'One of the greatest technological achievements of the 19th century, the completion of the first transcontinental railroad across the United States. Visitors to the park can see the location of the Last Spike Site, 1869 railroad construction features, walk or drive on the original railroad grade, and get an up close view of Victorian era replica locomotives.',
    fullName: 'Golden Spike National Historical Park',
    image: {
      credit: 'Courtesy NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/BBB413D5-AB8C-3706-92656E721502B7E8.jpg',
    },
    latitude: '41.61947508',
    longitude: '-112.5242653',
    parkCode: 'gosp',
  },
  grba: {
    description:
      "From the 13,063-foot summit of Wheeler Peak, to the sage-covered foothills, Great Basin National Park is a place to sample the stunning diversity of the larger Great Basin region. Come and partake of the solitude of the wilderness, walk among ancient bristlecone pines, bask in the darkest of night skies, and explore mysterious subterranean passages. There's a whole lot more than just desert here!",
    fullName: 'Great Basin National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/FD29737E-9549-8EF4-90C1076486DE559A.jpeg',
    },
    latitude: '38.94617378',
    longitude: '-114.2579782',
    parkCode: 'grba',
  },
  grca: {
    description:
      'Located in Arizona, Grand Canyon National Park encompasses 277 miles (446 km) of the Colorado River and adjacent uplands. The immense Grand Canyon is a mile (1.6 km) deep, and up to 18 miles (29 km) wide. Layered bands of colorful rock reveal millions of years of geologic history with unmatched vistas from the rim. The South Rim is open 24 hours. The North Rim is Closed for the Winter.',
    fullName: 'Grand Canyon National Park',
    image: {
      credit: 'NPS/M.Quinn',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B12D1-1DD8-B71B-0BCE0712F9CEA155.jpg',
    },
    latitude: '36.0001165336',
    longitude: '-112.121516363',
    parkCode: 'grca',
  },
  gree: {
    description:
      'Camp ten miles from the Washington Monument! Greenbelt Park is located in suburban Greenbelt, Maryland just ten miles from the Washington D.C. attractions. Visit to enjoy affordable camping, peaceful surroundings in an urban forest, and National Park Service hospitality. Greenbelt Park has a 172 site campground, nine miles of trails and three picnic areas.',
    fullName: 'Greenbelt Park',
    image: {
      credit: 'NPS/G Wilson',
      url: 'https://www.nps.gov/common/uploads/structured_data/44A5DD06-1DD8-B71B-0B61B91EB87117B2.jpg',
    },
    latitude: '38.98328267',
    longitude: '-76.89722133',
    parkCode: 'gree',
  },
  greg: {
    description:
      'The River gradually widens as it picks up the waters of 17 tributaries on its way to Great Egg Harbor and the Atlantic Ocean. Established by Congress in 1992, nearly all of this 129-mile river system rests within the Pinelands National Reserve. This National Park Service unit is unusual in that local jurisdictions continue to administer the lands.',
    fullName: 'Great Egg Harbor River',
    image: {
      credit: 'Tim Kiser',
      url: 'https://www.nps.gov/common/uploads/structured_data/69830EAB-1DD8-B71B-0B2995AFD827B8FB.jpg',
    },
    latitude: '39.3042',
    longitude: '-74.6497',
    parkCode: 'greg',
  },
  grfa: {
    description:
      "At Great Falls, the Potomac River builds up speed and force as it falls over a series of steep, jagged rocks and flows through the narrow Mather Gorge. The Patowmack Canal offers a glimpse into the early history of this country. Great Falls Park has many opportunities to explore history and nature, all in a beautiful 800-acre park only 15 miles from the Nation's Capital.",
    fullName: 'Great Falls Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/F3B82E17-CE9F-1035-D33AE07C0819BBD2.jpg',
    },
    latitude: '38.98776107',
    longitude: '-77.25128326',
    parkCode: 'grfa',
  },
  grko: {
    description:
      'Wide open spaces, the hard-working cowboy, his spirited cow pony, and vast herds of cattle are among the strongest symbols of the American West. Once the headquarters of a 10 million acre cattle empire, Grant-Kohrs Ranch National Historic Site preserves these symbols and commemorates the role of cattlemen in American history.',
    fullName: 'Grant-Kohrs Ranch National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F26F9-1DD8-B71B-0B805195D3FAF5BF.jpg',
    },
    latitude: '46.41358923',
    longitude: '-112.7467024',
    parkCode: 'grko',
  },
  grpo: {
    description:
      'Travel into the past to discover the present. Explore the partnership of the Grand Portage Ojibwe and the North West Company during the North American fur trade and the NPS today. Follow pathways into a distant time. Experience the sights and smells of a bustling depot reconstructed in its exact location. Hear the beat of the drum echo over Gichigami - Lake Superior.',
    fullName: 'Grand Portage National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C2F07-1DD8-B71B-0B85AFDB9962EAE1.jpg',
    },
    latitude: '47.99294217',
    longitude: '-89.75573031',
    parkCode: 'grpo',
  },
  grsa: {
    description:
      "Open 24/7 year round! There are no limitations or reservations to visit, but there is currently limited capacity in the visitor center. The tallest dunes in North America are the centerpiece in a diverse landscape of grasslands, wetlands, forests, alpine lakes, and tundra. Stay on a moonless night to experience this International Dark Sky Park's starry skies!",
    fullName: 'Great Sand Dunes National Park & Preserve',
    image: {
      credit: 'NPS/Patrick Myers',
      url: 'https://www.nps.gov/common/uploads/structured_data/BC4ACB4C-0A6D-0188-E9A6AA1217827461.jpg',
    },
    latitude: '37.79256812',
    longitude: '-105.5919572',
    parkCode: 'grsa',
  },
  grsm: {
    description:
      "Ridge upon ridge of forest straddles the border between North Carolina and Tennessee in Great Smoky Mountains National Park. World renowned for its diversity of plant and animal life, the beauty of its ancient mountains, and the quality of its remnants of Southern Appalachian mountain culture, this is America's most visited national park. Plan your visit today!",
    fullName: 'Great Smoky Mountains National Park',
    image: {
      credit: 'Kristina Plaas',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80E3F4-1DD8-B71B-0BFF4F2280EF1B52.jpg',
    },
    latitude: '35.60116374',
    longitude: '-83.50818326',
    parkCode: 'grsm',
  },
  grsp: {
    description:
      'Green Springs National Historic Landmark District in Virginia’s Piedmont encompasses over 14,000 acres. Its landscapes and structures, privately owned today but viewable from public roads, offer a continuum of rural vernacular architecture with minimal alteration. Many of the farmsteads, often dating to the 19th century and connecting to one another visually, are preserved through easements.',
    fullName: 'Green Springs',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/00E4FBBD-1DD8-B71B-0B674A3BE15ACF42.jpg',
    },
    latitude: '38.037099',
    longitude: '-78.189823',
    parkCode: 'grsp',
  },
  grte: {
    description:
      'Rising above a scene rich with extraordinary wildlife, pristine lakes, and alpine terrain, the Teton Range stands as a monument to the people who fought to protect it. These are mountains of the imagination. Mountains that led to the creation of Grand Teton National Park where you can explore over two hundred miles of trails, float the Snake River, and enjoy the serenity of this remarkable place.',
    fullName: 'Grand Teton National Park',
    image: {
      credit: 'NPS Photo / D. Lehle',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7FA4C5-1DD8-B71B-0B7FCC54E43FEE79.jpg',
    },
    latitude: '43.81853565',
    longitude: '-110.7054666',
    parkCode: 'grte',
  },
  guco: {
    description:
      '"I never saw such fighting since God made me. The Americans fought like demons." - Lt. General Charles, Earl Cornwallis On March 15, 1781, six years into the American Revolution, General Greene and Lord Cornwallis\' troops faced off at a small courthouse community. This 2.5 hour battle would change the course of the Southern Campaign of the American Revolution.',
    fullName: 'Guilford Courthouse National Military Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/F649327B-9F59-A88D-E8A82709DC7B2970.jpg',
    },
    latitude: '36.13225478',
    longitude: '-79.8424561',
    parkCode: 'guco',
  },
  guis: {
    description:
      "Millions of visitors are drawn to the Gulf of Mexico for Gulf Islands National Seashore's emerald coast waters, magnificent white beaches, fertile marshes and historical landscapes. Come explore with us today!",
    fullName: 'Gulf Islands National Seashore',
    image: {
      credit: 'NPS Photo/Willis',
      url: 'https://www.nps.gov/common/uploads/structured_data/C42CDDE1-DB1A-14FA-97D1FA62BD391651.jpg',
    },
    latitude: '30.29924926',
    longitude: '-87.75064297',
    parkCode: 'guis',
  },
  gumo: {
    description:
      "Come experience mountains and canyons, desert and dunes, night skies and spectacular vistas within a place unlike any other. Guadalupe Mountains National Park protects the world's most extensive Permian fossil reef, the four highest peaks in Texas, an environmentally diverse collection of flora and fauna, and the stories of lives shaped through conflict, cooperation and survival.",
    fullName: 'Guadalupe Mountains National Park',
    image: {
      credit: 'NPS/Bieri',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C825533-1DD8-B71B-0B6FDF436F604A3C.jpg',
    },
    latitude: '31.92304462',
    longitude: '-104.885527',
    parkCode: 'gumo',
  },
  gwca: {
    description:
      'The young child known as the "Plant Doctor" tended his secret garden while observing the day-to-day operations of a 19th century farm. Nature and nurture ultimately influenced George on his quest for education to becoming a renowned agricultural scientist, educator, and humanitarian.',
    fullName: 'George Washington Carver National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C13C3-1DD8-B71B-0B1164958433C548.jpg',
    },
    latitude: '36.9871322',
    longitude: '-94.35522737',
    parkCode: 'gwca',
  },
  gwmp: {
    description:
      'The George Washington Memorial Parkway was designed for recreational driving. It links sites that commemorate important episodes in American history and preserve habitat for local wildlife. The parkway and its associated trails provide a scenic place to play and rest in the busy Washington, DC metropolitan area.',
    fullName: 'George Washington Memorial Parkway',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/C645D155-EDA3-ED3B-6DE6F6A95D3A8A6F.jpg',
    },
    latitude: '38.9628',
    longitude: '-77.1495',
    parkCode: 'gwmp',
  },
  hafe: {
    description:
      "Find yourself at the confluence of history and nature. Experience John Brown's Raid, a flash point that ignited the Civil War. Find your story in the struggle for freedom, education, and civil rights at Storer College. Explore the rolling Blue Ridge mountains and rushing waters of the Shenandoah and Potomac rivers that powered industry and the nation's second armory. Find your Harpers Ferry.",
    fullName: 'Harpers Ferry National Historical Park',
    image: {
      credit: 'NPS Photo/Shenandoah Sanchez',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C829352-1DD8-B71B-0BEB6383BF4B9277.jpg',
    },
    latitude: '39.31865949',
    longitude: '-77.74088546',
    parkCode: 'hafe',
  },
  hafo: {
    description:
      'During the Pliocene, this place looked quite different. Lush wetlands, forests, and grasslands provided excellent habitat for a variety of animals. From fascinating, now-extinct creatures like the saber-toothed cat, mastodon, and ground sloth, to more familiar animals like horses, beavers, and birds, the scientific study of Pliocene fossils is the key to Hagerman.',
    fullName: 'Hagerman Fossil Beds National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87A639-1DD8-B71B-0B3105E41A302D03.jpg',
    },
    latitude: '42.79074114',
    longitude: '-114.9443074',
    parkCode: 'hafo',
  },
  hagr: {
    description:
      'Merchant’s clerk, Revolutionary War soldier, first Secretary Treasury of the United States: Alexander Hamilton’s life is memorialized at The Grange, the home he built on a country estate in uptown Manhattan. A faithful testament to early American architecture, it stands today as a tribute to its first owner’s many accomplishments.',
    fullName: 'Hamilton Grange National Memorial',
    image: {
      credit: 'NPS Photo/Kevin Daley',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80DC70-1DD8-B71B-0B9CB85978295244.jpg',
    },
    latitude: '40.81871605',
    longitude: '-73.94878487',
    parkCode: 'hagr',
  },
  haha: {
    description:
      'The 18th century Harmony Hall mansion is located on a 62.5-acre open pasture land estate along the Potomac River. This estate was purchased by the National Park Service in 1966, to preserve southern Maryland cultural heritage. Surrounded by a rich landscape, it offers visitors many chances to connect with Colonial History. The park also home to the remains of the Want Water House and canal.',
    fullName: 'Harmony Hall',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/28A04A53-CF37-9979-72C9072811BC2DD0.jpg',
    },
    latitude: '38.74646351',
    longitude: '-77.00377069',
    parkCode: 'haha',
  },
  hale: {
    description:
      'This special place vibrates with stories of ancient and modern Hawaiian culture and protects the bond between the land and its people. The park also cares for endangered species, some of which exist nowhere else. Come visit this special place - renew your spirit amid stark volcanic landscapes and sub-tropical rain forest with an unforgettable hike through the backcountry.',
    fullName: 'Haleakalā National Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3D05E583-1DD8-B71B-0BBFF82F7F78AF6A.jpg',
    },
    latitude: '20.70693015',
    longitude: '-156.1591775',
    parkCode: 'hale',
  },
  hamp: {
    description:
      'Once possibly the largest private home in America by 1790, the Hampton mansion serves as a grand example of late-Georgian architecture in America. Hampton is also the story of its people, as the estate evolved through the actions of the Ridgely family, enslaved African Americans, European indentured servants, and paid laborers within a nation struggling to define its own concept of freedom.',
    fullName: 'Hampton National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/30E70993-1DD8-B71B-0BF669D83ECFDB7A.jpg',
    },
    latitude: '39.4175296',
    longitude: '-76.58781182',
    parkCode: 'hamp',
  },
  hart: {
    description:
      'Harriet Tubman was guided by a deep faith and devotion to family, freedom, and community. After emancipating herself and members of her family, she moved them from Ontario, Canada to Fleming and Auburn, New York in 1859. Central New York was a center for progressive thought, abolition, and women’s suffrage where Tubman continued to fight for human rights and dignity until she died in 1913.',
    fullName: 'Harriet Tubman National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3F80375F-1DD8-B71B-0B40A16E2EDDA99D.jpg',
    },
    latitude: '42.9128920287',
    longitude: '-76.5646715462',
    parkCode: 'hart',
  },
  hatu: {
    description:
      'Harriet Tubman was a deeply spiritual woman who lived her ideals and dedicated her life to freedom. She is the Underground Railroad’s best known conductor and before the Civil War repeatedly risked her life to guide 70 enslaved people north to new lives of freedom. This new national historical park preserves the same landscapes that Tubman used to carry herself and others away from slavery.',
    fullName: 'Harriet Tubman Underground Railroad National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/351D33D4-1DD8-B71B-0B2D84861E200164.jpg',
    },
    latitude: '38.4548643511',
    longitude: '-76.1373451376',
    parkCode: 'hatu',
  },
  havo: {
    description:
      "Hawai‘i Volcanoes National Park protects some of the most unique geological, biological, and cherished cultural landscapes in the world. Extending from sea level to 13,681 feet, the park encompasses the summits of two of the world's most active volcanoes - Kīlauea and Mauna Loa - and is a designated International Biosphere Reserve and UNESCO World Heritage Site.",
    fullName: 'Hawaiʻi Volcanoes National Park',
    image: {
      credit: 'Courtesy of J. Frank',
      url: 'https://www.nps.gov/common/uploads/structured_data/C4E8415A-08E5-5976-833F494FFCA3FFE6.jpg',
    },
    latitude: '19.3355036',
    longitude: '-155.4700257',
    parkCode: 'havo',
  },
  heho: {
    description:
      'Orphaned at age nine, Herbert Hoover left West Branch never to live here again. In later years, he returned to his humble birthplace to celebrate his long career of public service. A memorial landscape remains to tell his story: how community, hard work, honesty, and usefulness to others opened a world of opportunity— and the presidency of the United States— to a child of simple beginnings.',
    fullName: 'Herbert Hoover National Historic Site',
    image: {
      credit: 'NPS Photo/John Eicher',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7924AC-1DD8-B71B-0BEDCDE2B64225D5.jpg',
    },
    latitude: '41.66793558',
    longitude: '-91.35232139',
    parkCode: 'heho',
  },
  hobe: {
    description:
      'On 27 March 1814, Major General Andrew Jackson ‘s army of 3,300 men attacked Chief Menawa’s 1,000 Red Stick Creek warriors fortified in a horseshoe shaped bend of the Tallapoosa River. Over 800 Red Sticks died that day. The battle ended the Creek War, resulted in a land cession of 23,000,000 acres to the United States and created a national hero of Andrew Jackson.',
    fullName: 'Horseshoe Bend National Military Park',
    image: {
      credit: 'NPS Photo / Vester Marable',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87586A-1DD8-B71B-0BDE37630D876F7D.jpg',
    },
    latitude: '32.97668879',
    longitude: '-85.73413589',
    parkCode: 'hobe',
  },
  hocu: {
    description:
      'Nearly 2000 years ago, American Indians built dozens of monumental mounds and earthen enclosures in southern Ohio. These earthwork complexes were ceremonial landscapes used for feasts, funerals, rituals, and rites of passage associated with an American Indian religious movement that swept over half the continent for almost 400 years. Come walk among the earthworks and experience the past.',
    fullName: 'Hopewell Culture National Historical Park',
    image: {
      credit: 'NPS / Tom Engberg',
      url: 'https://www.nps.gov/common/uploads/structured_data/0C0231CE-C54D-AE33-ACAB8874C99A1B84.jpg',
    },
    latitude: '39.31594374',
    longitude: '-83.08049456',
    parkCode: 'hocu',
  },
  hofr: {
    description:
      'Home to the 32nd and longest-serving president of the United States, Franklin D. Roosevelt returned to Hyde Park often, drawing on this place to renew his spirit during times of personal and political crisis. Explore the Roosevelt saga in the homes of Franklin and Eleanor Roosevelt, the exhibits at the nation’s first Presidential Library, and over a thousand acres of gardens and trails.',
    fullName: 'Home Of Franklin D Roosevelt National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/236415B1-F65A-709B-C946C5447868BB66.jpg',
    },
    latitude: '41.76639758',
    longitude: '-73.92516857',
    parkCode: 'hofr',
  },
  hofu: {
    description:
      'Hopewell Furnace showcases an early American landscape of industrial operations from 1771-1883, Hopewell and other "iron plantations" laid the foundation for the transformation of the United States into an industrial giant for the time. The park\'s 848 acres and historic structures illustrate the business, technology and lifestyle of our growing nation.',
    fullName: 'Hopewell Furnace National Historic Site',
    image: {
      credit: 'NPS Image',
      url: 'https://www.nps.gov/common/uploads/structured_data/075722FB-1DD8-B71B-0BF13410F2C2AB65.jpg',
    },
    latitude: '40.20610637',
    longitude: '-75.76766355',
    parkCode: 'hofu',
  },
  home: {
    description:
      'The Homestead Act of 1862 transformed the world. Millions were invited to file claims including, families, immigrants, single women, and freed slaves. Over 10 percent of the United States was homesteaded! The land, long inhabited by American Indian cultures, changed forever. Homesteaders created settlements and farms, drove industrial advancement, and built our nation chasing the American Dream.',
    fullName: 'Homestead National Historical Park',
    image: {
      credit: 'NPS Photo/Hunter Hendricks',
      url: 'https://www.nps.gov/common/uploads/structured_data/E9AA6622-E74B-C7C1-97C6C3C3676F7519.jpg',
    },
    latitude: '40.28802381',
    longitude: '-96.83387781',
    parkCode: 'home',
  },
  hono: {
    description:
      'Although not yet open to the public, Hono‘uli‘uli National Historic Site will tell the history of incarceration, martial law, and the experience of prisoners of war in Hawai‘i during World War II. Hono‘uli‘uli National Historic Site will be a place to reflect on wartime experiences and recommit ourselves to the pursuit of freedom and justice.',
    fullName: "Hono'uli'uli National Historic Site",
    image: {
      credit:
        'National Register Boundary (NPS), Historic and Modern Features by Jeff Burton and Mary Farrell',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86BF53-1DD8-B71B-0BB227CD8FE92BD2.png',
    },
    latitude: '21.38817536',
    longitude: '-158.0574991',
    parkCode: 'hono',
  },
  hosp: {
    description:
      'Hot Springs National Park has a rich cultural past. The grand architecture of our historic bathhouses is equally matched by the natural curiosities that have been drawing people here for hundreds of years. Ancient thermal springs, mountain views, incredible geology, forested hikes, and abundant creeks – all in the middle of town – make Hot Springs National Park a unique and beautiful destination.',
    fullName: 'Hot Springs National Park',
    image: {
      credit: 'Mitch Smith',
      url: 'https://www.nps.gov/common/uploads/structured_data/C0D8DFDD-F151-C5B0-3004B0088C98BA5A.jpg',
    },
    latitude: '34.52414366',
    longitude: '-93.06332936',
    parkCode: 'hosp',
  },
  hove: {
    description:
      'Once home to over 2,500 people, Hovenweep includes six prehistoric villages built between A.D. 1200 and 1300. Explore a variety of structures, including multistory towers perched on canyon rims and balanced on boulders. The construction and attention to detail will leave you marveling at the skill and motivation of the builders.',
    fullName: 'Hovenweep National Monument',
    image: {
      credit: 'NPS Photo / Jacob W. Frank',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7EFD89-1DD8-B71B-0B19BADA80708922.jpg',
    },
    latitude: '37.39134092',
    longitude: '-109.0047977',
    parkCode: 'hove',
  },
  hstr: {
    description:
      'President Harry S Truman took America from its traditional isolationism into the age of international involvement. Despite his power, he never forgot where he came from. Today, visitors can experience the surroundings Truman knew as a young man of modest ambition through his political career and final years as a former president.',
    fullName: 'Harry S Truman National Historic Site',
    image: {
      credit: 'NPS Photo/Matt Turner',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79AC3C-1DD8-B71B-0BB54731F4D0538A.jpg',
    },
    latitude: '38.92711967',
    longitude: '-94.5162488',
    parkCode: 'hstr',
  },
  hutr: {
    description:
      'The squeaky wooden floor greets your entry into the oldest operating Trading Post on the Navajo Nation. When your eyes adjust to the dim light in the "bullpen" you find you’ve just entered a mercantile. Hubbell Trading Post has been serving Ganado selling goods and Native American Art since 1878. Discover Hubbell Trading Post NHS, sheep, rugs, jewelry and so much more..',
    fullName: 'Hubbell Trading Post National Historic Site',
    image: {
      credit: 'NPS Photo/LHenio',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C91D7-1DD8-B71B-0B54C08912784B29.jpg',
    },
    latitude: '35.70727324',
    longitude: '-109.5599515',
    parkCode: 'hutr',
  },
  iafl: {
    description:
      'At the end of the last Ice Age, 18,000 to 15,000 years ago, an ice dam in northern Idaho created Glacial Lake Missoula stretching 3,000 square miles around Missoula, Montana. The dam burst and released flood waters across Washington, down the Columbia River into Oregon before reaching the Pacific Ocean. The Ice Age Floods forever changed the lives and landscape of the Pacific Northwest.',
    fullName: 'Ice Age Floods National Geologic Trail',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/0E7BEDF2-952B-D9E0-038D808912A45A65.jpeg',
    },
    latitude: '46.5669309008',
    longitude: '-118.992564971',
    parkCode: 'iafl',
  },
  iatr: {
    description:
      "A mere 15,000 years ago during the Ice Age, much of North America lay under a huge glacier. Mammoths, saber tooth cats and cave lions roamed the earth! Some of the best evidence of this glacier is found in Wisconsin such as the state’s many lakes, river valleys, gently rolling hills, and ridges. The nearly 1,200 mile Ice Age National Scenic Trail, established in 1980, traces the glacier's edge.",
    fullName: 'Ice Age National Scenic Trail',
    image: {
      credit: 'IATA Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C9700-1DD8-B71B-0B7F7D7D94CE39E6.jpg',
    },
    latitude: '43.9895697794',
    longitude: '-89.5612021706',
    parkCode: 'iatr',
  },
  inde: {
    description:
      'The park represents the founding ideals of the nation, and preserves national and international symbols of freedom and democracy, including Independence Hall and the Liberty Bell. The Declaration of Independence and U.S. Constitution were both debated and signed inside Independence Hall, a UNESCO World Heritage Site.',
    fullName: 'Independence National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/7AFE0115-FFFB-4779-4787C9D078489E1C.jpg',
    },
    latitude: '39.94746112',
    longitude: '-75.14794157',
    parkCode: 'inde',
  },
  indu: {
    description:
      "Indiana Dunes National Park hugs 15 miles of the southern shore of Lake Michigan and has much to offer. Whether you enjoy scouting for rare species of birds or flying kites on the sandy beach, the national park's 15,000 acres will continually enchant you. Hikers will enjoy 50 miles of trails over rugged dunes, mysterious wetlands, sunny prairies, meandering rivers and peaceful forests.",
    fullName: 'Indiana Dunes National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/9253EDFB-AAFD-E111-B985CD2747F5C48F.jpg',
    },
    latitude: '41.63765525',
    longitude: '-87.09647445',
    parkCode: 'indu',
  },
  inup: {
    description:
      'On the rooftop of the world, the Iñupiat Heritage Center in Barrow, Alaska, tells the story of the Iñupiat people. They have thrived for thousands of years in one of the harshest climates on Earth, hunting the bowhead, or "Agviq." In the 19th century, these lonely seas swarmed with commercial whalemen from New England, who also sought the bowhead for its valuable baleen and blubber.',
    fullName: 'Iñupiat Heritage Center',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8130DF-1DD8-B71B-0B99B1F06EB07E76.jpg',
    },
    latitude: '71.29832445',
    longitude: '-156.7535863',
    parkCode: 'inup',
  },
  isro: {
    description:
      "Explore a rugged, isolated island, far from the sights and sounds of civilization. Surrounded by Lake Superior, Isle Royale offers adventures for backpackers, hikers, boaters, kayakers, canoeists and scuba divers. Here, amid stunning scenic beauty, you'll find opportunities for reflection and discovery, and make memories that last a lifetime.",
    fullName: 'Isle Royale National Park',
    image: {
      credit: 'NPS / Paul Brown',
      url: 'https://www.nps.gov/common/uploads/structured_data/6059CAD8-02E8-2E00-2922DF84800167E0.jpg',
    },
    latitude: '48.01145819',
    longitude: '-88.82780657',
    parkCode: 'isro',
  },
  jaga: {
    description:
      "A front porch can serve many purposes. For some, it is a place to enjoy the breeze on a warm summer night. For others, a perch from which to keep eyes on what's happening in their neighborhood. In 1880, James Garfield used his front porch as a platform to greet thousands of well-wishers during his presidential campaign. Today, the porch serves as a gateway to the story of the Garfield family.",
    fullName: 'James A Garfield National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8438A8-1DD8-B71B-0B1FAF95F1FC35BF.jpg',
    },
    latitude: '41.66486549',
    longitude: '-81.35086557',
    parkCode: 'jaga',
  },
  jame: {
    description:
      'Walk in the steps of Captain John Smith and Pocahontas where a successful English colonization of North America began. Despite early struggles to survive, the 1607 settlement evolved into a prosperous colony. As the colony expanded, the Virginia Indians were pushed out of their homeland. In 1619, the arrival of Africans was recorded, marking the origin of slavery in English North America.',
    fullName: 'Historic Jamestowne Part of Colonial National Historical Park',
    image: {
      credit: 'Park Ranger Roger W. Green',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79E67E-1DD8-B71B-0B2D4A6D3D48D7A7.jpg',
    },
    latitude: '37.2065',
    longitude: '-76.7538',
    parkCode: 'jame',
  },
  jazz: {
    description:
      'Only in New Orleans could there be a National Park for jazz! Drop by our visitor center temporary location at the Jean Lafitte National Historical Park & Preserve French Quarter Visitor Center at 419 Decatur Street to inquire about musical events around town. In the mood for a world class musical experience?',
    fullName: 'New Orleans Jazz National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87C505-1DD8-B71B-0BE34A8A361477FB.jpg',
    },
    latitude: '29.96303129',
    longitude: '-90.06749669',
    parkCode: 'jazz',
  },
  jeca: {
    description:
      'Immerse yourself within the third longest cave in the world. With over 210 miles of mapped and surveyed passages, this underground wilderness appeals to human curiosity. Its splendor is revealed through fragile formations and glimpses of brilliant color. Its maze of passages lure explorers, and its scientific wealth remains a mystery. This resource is truly a jewel in the National Park Service.',
    fullName: 'Jewel Cave National Monument',
    image: {
      credit: 'NPS Staff Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/C6DE6447-A12D-692B-419DBA224FA0D35B.jpg',
    },
    latitude: '43.73102945',
    longitude: '-103.829994',
    parkCode: 'jeca',
  },
  jeff: {
    description:
      "The Gateway Arch reflects St. Louis' role in the Westward Expansion of the United States during the nineteenth century. The park is a memorial to Thomas Jefferson's role in opening the West, to the pioneers who helped shape its history, and to Dred Scott who sued for his freedom in the Old Courthouse.",
    fullName: 'Gateway Arch National Park',
    image: {
      credit: 'NPS photo/Jennifer Clark',
      url: 'https://www.nps.gov/common/uploads/structured_data/200BA7E6-D782-9A97-A8C36AC178DEB31C.jpg',
    },
    latitude: '38.6258069',
    longitude: '-90.1892508',
    parkCode: 'jeff',
  },
  jela: {
    description:
      "In Jean Lafitte's day, silver and gold filled a pirate's treasure chest, but today's treasures are people, places, and memories. Discover New Orleans’ rich cultural mix. Learn Cajun traditions from people who live them. Watch an alligator bask on a bayou’s bank. Walk in the footsteps of the men who fought at 1815’s Battle of New Orleans. Follow the link to discover the treasure of Jean Lafitte.",
    fullName: 'Jean Lafitte National Historical Park and Preserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C845D16-1DD8-B71B-0B04181AABF4F0C1.jpg',
    },
    latitude: '29.81739855',
    longitude: '-90.1402241',
    parkCode: 'jela',
  },
  jica: {
    description:
      'Few U.S. Presidents have had such close ties with where they were born and raised. The rural southern culture of Plains, Georgia, that revolves around farming, church and school, had a large influence in molding the character and in shaping the political policies of the 39th President of the United States.',
    fullName: 'Jimmy Carter National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87D454-1DD8-B71B-0B1CF7672AB5806C.jpg',
    },
    latitude: '32.03611',
    longitude: '-84.3924',
    parkCode: 'jica',
  },
  joda: {
    description:
      'Colorful rock formations at John Day Fossil Beds preserve a world class record of plant and animal evolution, changing climate, and past ecosystems that span over 40 million years. Exhibits and a working lab at the Thomas Condon Paleontology Center as well as scenic drives and hikes at all three units allow visitors to explore the prehistoric past of Oregon and see science in action.',
    fullName: 'John Day Fossil Beds National Monument',
    image: {
      credit: 'NPS Photo / Sue Anderson',
      url: 'https://www.nps.gov/common/uploads/structured_data/65131BFA-AC34-079D-7FD7AF99F152FFED.jpg',
    },
    latitude: '44.62566508',
    longitude: '-119.8811491',
    parkCode: 'joda',
  },
  jofi: {
    description:
      'As a boy, JFK’s parents never expected he would grow up to be president. Yet in his birthplace home he learned values that inspired a life in public service. His mother, Rose Kennedy, recreated her family’s first home to share her memories of those early years with visitors. We commemorate not only his early life, but the ideas and principles he left behind.',
    fullName: 'John Fitzgerald Kennedy National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C820F63-1DD8-B71B-0BA806C2D92161BF.jpg',
    },
    latitude: '42.34693694',
    longitude: '-71.12323846',
    parkCode: 'jofi',
  },
  jofl: {
    description:
      'The South Fork dam failed on Friday, May 31, 1889 and unleashed 20,000,000 tons of water that devastated Johnstown, PA. The flood killed 2,209 people but it brought the nation and the world together to aid the "Johnstown sufferers." The story of the Johnstown Flood reminds us all, "...that we must leave nothing undone for the preservation and protection of our brother men."',
    fullName: 'Johnstown Flood National Memorial',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/2A4B8778-986F-86FB-4B696139FFE5B131.jpg',
    },
    latitude: '40.34584534',
    longitude: '-78.77448601',
    parkCode: 'jofl',
  },
  jomu: {
    description:
      'John Muir played many roles in his life, all of which helped him succeed in his role as an advocate for Nature. As America’s most famous naturalist and conservationist, Muir fought to protect the wild places he loved, places we can still visit today. Muir’s writings convinced the U.S. government to protect Yosemite, Sequoia, Grand Canyon and Mt. Rainier as national parks.',
    fullName: 'John Muir National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79DF6A-1DD8-B71B-0B64749528CB4952.jpg',
    },
    latitude: '37.9828422',
    longitude: '-122.1326097',
    parkCode: 'jomu',
  },
  jotr: {
    description:
      'Two distinct desert ecosystems, the Mojave and the Colorado, come together in Joshua Tree National Park. A fascinating variety of plants and animals make their homes in a land sculpted by strong winds and occasional torrents of rain. Dark night skies, a rich cultural history, and surreal geologic features add to the wonder of this vast wilderness in southern California. Come explore for yourself.',
    fullName: 'Joshua Tree National Park',
    image: {
      credit: 'NPS / Emily Hassell',
      url: 'https://www.nps.gov/common/uploads/structured_data/306D0D93-9CCA-76E1-AD48268F8D7A7E3E.jpg',
    },
    latitude: '33.91418525',
    longitude: '-115.8398125',
    parkCode: 'jotr',
  },
  juba: {
    description:
      '"¡Vayan Subiendo!"("Everyone mount up!") was the rousing call from Juan Bautista de Anza. In 1775-76, he led some 240 men, women, and children on an epic journey to establish the first non-Native settlement at San Francisco Bay. Today, the 1,200-mile Juan Bautista de Anza National Historic Trail connects history, culture, and outdoor recreation from Nogales, Arizona, to the San Francisco Bay Area.',
    fullName: 'Juan Bautista de Anza National Historic Trail',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C872DB3-1DD8-B71B-0B6201C88B96A87D.jpg',
    },
    latitude: '33.8743390994',
    longitude: '-117.224179857',
    parkCode: 'juba',
  },
  kaho: {
    description:
      'To survive in a hot and arid environment the native Hawaiians (kanaka maoli) used ancient fishing skills, including the building of fishponds, and the knowledge of the location of precious fresh water (wai) that flows into the many brackish pools throughout the park. The spirit of the people (poe) and the knowledge of the elders (kupuna) created a tradition of respect and reverence for this area.',
    fullName: 'Kaloko-Honokōhau National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C821C0B-1DD8-B71B-0B75B0451911CCAA.jpg',
    },
    latitude: '19.68083237',
    longitude: '-156.0306932',
    parkCode: 'kaho',
  },
  kala: {
    description:
      "When Hansen's disease (leprosy) was introduced to the Hawaiian Islands, King Kamehameha V banished all afflicted to the isolated Kalaupapa peninsula on the north shore of Molokai. Since 1866, more than 8000 people, mostly Hawaiians, have died at Kalaupapa. Once a prison, Kalaupapa is now refuge for the few remaining residents who are now cured, but were forced to live their lives in isolation.",
    fullName: 'Kalaupapa National Historical Park',
    image: {
      credit: 'Tylor Tanaka',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79B6CD-1DD8-B71B-0BB2B4265DD8C023.jpg',
    },
    latitude: '21.1731108',
    longitude: '-156.9511609',
    parkCode: 'kala',
  },
  katm: {
    description:
      'A landscape is alive underneath our feet, filled with creatures that remind us what it is to be wild. Katmai was established in 1918 to protect the volcanically devastated region surrounding Novarupta and the Valley of Ten Thousand Smokes. Today, Katmai National Park and Preserve also protects 9,000 years of human history and important habitat for salmon and thousands of brown bears.',
    fullName: 'Katmai National Park & Preserve',
    image: {
      credit: 'NPS/David Jacob',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0FDB-1DD8-B71B-0B8933ACA92FE6B3.jpg',
    },
    latitude: '58.62235668',
    longitude: '-155.0126574',
    parkCode: 'katm',
  },
  kaww: {
    description:
      'Spread across a wild landscape offering spectacular views of Mount Katahdin, Katahdin Woods and Waters invites discovery of its rivers, streams, woods, flora, fauna, geology, and the night skies that have attracted humans for millennia.',
    fullName: 'Katahdin Woods and Waters National Monument',
    image: {
      credit: 'Jason Gablaski',
      url: 'https://www.nps.gov/common/uploads/structured_data/706CD3A6-9835-C974-F5C1ECDF3354177B.jpg',
    },
    latitude: '45.9567565918',
    longitude: '-68.7122879028',
    parkCode: 'kaww',
  },
  keaq: {
    description:
      'Deep within Kenilworth lies an oasis, hidden behind trees and cattails. It\'s a place where beavers build their homes and turtles sleep on logs. Lotus blooms rise from the muck and lilies sit on the water. The wind dances with the dragonflies, rustling through the trees, carrying the song of the birds until it brushes across your face, fading to a whisper, saying "come join."',
    fullName: 'Kenilworth Park & Aquatic Gardens',
    image: {
      credit: 'NPS Photo/Miguel A. Marquez',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C819F7C-1DD8-B71B-0BE9077BC0E39492.jpg',
    },
    latitude: '38.9128',
    longitude: '-76.9434',
    parkCode: 'keaq',
  },
  kefj: {
    description:
      "At the edge of the Kenai Peninsula lies a land where the ice age lingers. Nearly 40 glaciers flow from the Harding Icefield, Kenai Fjords' crowning feature. Wildlife thrives in icy waters and lush forests around this vast expanse of ice. Sugpiaq people relied on these resources to nurture a life entwined with the sea. Today, shrinking glaciers bear witness to the effects of our changing climate.",
    fullName: 'Kenai Fjords National Park',
    image: {
      credit: 'USGS/Bruce Molnia',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C798EAB-1DD8-B71B-0BC4BEFB197F2C90.jpg',
    },
    latitude: '59.81804414',
    longitude: '-150.106502',
    parkCode: 'kefj',
  },
  kemo: {
    description:
      'Kennesaw Mountain National Battlefield Park is a 2,965 acre National Battlefield that preserves a Civil War battleground of the Atlanta Campaign. Opposing forces maneuvered and fought here from June 19, 1864 until July 2, 1864. Although most famous as a Civil War battlefield, Kennesaw Mountain has a much richer story.',
    fullName: 'Kennesaw Mountain National Battlefield Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/D0648995-1DD8-B71B-0BADC579C8917954.jpg',
    },
    latitude: '33.95370717',
    longitude: '-84.59214186',
    parkCode: 'kemo',
  },
  kewe: {
    description:
      'From 7,000 years ago to the 1900s people mined Keweenaw copper. Native peoples made copper into tools and trade items. Investors and immigrants arrived in the 1800s in a great mineral rush, developing thriving industries and cosmopolitan communities. Though the mines have since closed, their mark is still visible on the land and people.',
    fullName: 'Keweenaw National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D1933-1DD8-B71B-0BDEE535F0C69BBC.jpg',
    },
    latitude: '47.1792308',
    longitude: '-88.52275344',
    parkCode: 'kewe',
  },
  kimo: {
    description:
      'Thomas Jefferson called it "The turn of the tide of success." The battle of Kings Mountain, fought October 7th, 1780, was an important American victory during the Revolutionary War. The battle was the first major patriot victory to occur after the British invasion of Charleston, SC in May 1780. The park preserves the site of this important battle.',
    fullName: 'Kings Mountain National Military Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8687F0-1DD8-B71B-0B6A5B7B87219459.jpg',
    },
    latitude: '35.13900723',
    longitude: '-81.38978712',
    parkCode: 'kimo',
  },
  klgo: {
    description:
      'Headlines screamed "Gold!" The dream of a better life catapulted thousands of people to Alaska and the Yukon Territory. Their journey shaped them, and changed the people they encountered and the north forever. Today, the park remembers the trails, boomtowns, and stories of the Klondike Gold Rush.',
    fullName: 'Klondike Gold Rush National Historical Park',
    image: {
      credit: 'NPS Photo/S. Millard',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BBEAE-1DD8-B71B-0B469DDC9151A4CA.jpg',
    },
    latitude: '59.61042373',
    longitude: '-135.2618535',
    parkCode: 'klgo',
  },
  klse: {
    description:
      "Seattle flourished during and after the Klondike Gold Rush. Merchants supplied people from around the world passing through this port city on their way to a remarkable adventure in Alaska. Today, the park is your gateway to learn about the Klondike Gold Rush, explore the area's public lands, and engage with the local community.",
    fullName: 'Klondike Gold Rush - Seattle Unit National Historical Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/39704550-FCDA-D336-B4FBEE35BD2793C2.jpg',
    },
    latitude: '47.5993663',
    longitude: '-122.3319664',
    parkCode: 'klse',
  },
  knri: {
    description:
      'Earthlodge people hunted bison and other game, but were in essence farmers living in villages along the Missouri and its tributaries. The site was a major Native American trade center for hundreds of years prior to becoming an important market place for fur traders after 1750.',
    fullName: 'Knife River Indian Villages National Historic Site',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C812613-1DD8-B71B-0B29B74AAFA56DE7.jpg',
    },
    latitude: '47.3540219',
    longitude: '-101.3860533',
    parkCode: 'knri',
  },
  kova: {
    description:
      'Caribou, sand dunes, the Kobuk River, Onion Portage - just some of the facets of Kobuk Valley National Park. Half a million caribou migrate through, their tracks crisscrossing sculpted dunes. The Kobuk River is an ancient and current path for people and wildlife. For 9000 years, people came to Onion Portage to harvest caribou as they swam the river. Even today, that rich tradition continues.',
    fullName: 'Kobuk Valley National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A1214-1DD8-B71B-0B00D823BD9BF4CF.jpg',
    },
    latitude: '67.35631336',
    longitude: '-159.2002293',
    parkCode: 'kova',
  },
  kowa: {
    description:
      'Our nation honors her sons and daughters who answered the call to defend a country they never knew and a people they never met.',
    fullName: 'Korean War Veterans Memorial',
    image: {
      credit: 'NPS Photo/Carol Highsmith',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C822E13-1DD8-B71B-0B426CD34F183D32.jpg',
    },
    latitude: '38.88784226',
    longitude: '-77.04773857',
    parkCode: 'kowa',
  },
  labe: {
    description:
      'Lava Beds National Monument is a land of turmoil, both geological and historical. Over the last half-million years, volcanic eruptions on the Medicine Lake shield volcano have created a rugged landscape dotted with diverse volcanic features. More than 800 caves, Native American rock art sites, historic battlefields and campsites, and a high desert wilderness experience await you!',
    fullName: 'Lava Beds National Monument',
    image: {
      credit: 'NPS Photo / Nathan Charlton',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C820779-1DD8-B71B-0B20C2B5154C940A.jpg',
    },
    latitude: '41.75915823',
    longitude: '-121.5172189',
    parkCode: 'labe',
  },
  lacl: {
    description:
      'Lake Clark National Park and Preserve is a land of stunning beauty. Volcanoes steam, salmon run, bears forage, and craggy mountains reflect in shimmering turquoise lakes. Here, too, local people and culture still depend on the land and water. Venture into the park to become part of the wilderness.',
    fullName: 'Lake Clark National Park & Preserve',
    image: {
      credit: 'NPS Photo / James Kramer',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A9F9E-1DD8-B71B-0B6CEC8EF3F377DA.jpg',
    },
    latitude: '60.57405857',
    longitude: '-153.55535',
    parkCode: 'lacl',
  },
  lake: {
    description:
      "Swim, boat, hike, cycle, camp and fish at America’s first and largest national recreation area. With striking landscapes and brilliant blue waters, this year-round playground spreads across 1.5 million acres of mountains, canyons, valleys and two vast lakes. See the Hoover Dam from the waters of Lake Mead or Lake Mohave, or find solitude in one of the park's nine wilderness areas.",
    fullName: 'Lake Mead National Recreation Area',
    image: {
      credit: 'NPS Photo/Andrew Cattoir',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79D292-1DD8-B71B-0B9A850B0D5AAAFC.jpg',
    },
    latitude: '35.96622528',
    longitude: '-114.3469067',
    parkCode: 'lake',
  },
  lamr: {
    description:
      'Within the dry, windswept plains of the Texas Panhandle lies a hidden oasis, a welcoming haven where wildlife and people find relief from the dry grasslands above. Through this flat plain, the Canadian River has cut dramatic 200-foot canyons, or breaks, where humans lived 13,000 years ago. Lake Meredith occupies these hidden coves and is a haven for migratory birds and other wildlife.',
    fullName: 'Lake Meredith National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7EF8FA-1DD8-B71B-0B0A1337DFDA3A87.jpg',
    },
    latitude: '35.61926203',
    longitude: '-101.6820066',
    parkCode: 'lamr',
  },
  laro: {
    description:
      'The ancient geologic landscape of the upper Columbia River cradles Lake Roosevelt in walls of stone carved by massive ice age floods. Come explore the shorelines and learn the stories of American Indians, traders and trappers, settlers and dam builders who called this place home. Swim, boat, hike, camp, and fish at this hidden gem in Northeast Washington, created by the Grand Coulee Dam.',
    fullName: 'Lake Roosevelt National Recreation Area',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C878C15-1DD8-B71B-0B3F6762ED559E9B.jpg',
    },
    latitude: '48.17148735',
    longitude: '-118.3513713',
    parkCode: 'laro',
  },
  lavo: {
    description:
      'Lassen Volcanic National Park is home to steaming fumaroles, meadows freckled with wildflowers, clear mountain lakes, and numerous volcanoes. Jagged peaks tell the story of its eruptive past while hot water continues to shape the land.',
    fullName: 'Lassen Volcanic National Park',
    image: {
      credit: 'NPS Photo / Scott Arnaz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C873811-1DD8-B71B-0B9C62ED8E12E7B5.jpg',
    },
    latitude: '40.49354575',
    longitude: '-121.4075993',
    parkCode: 'lavo',
  },
  lecl: {
    description:
      'The Lewis and Clark National Historic Trail is approximately 4,900 miles long, extending from Pittsburgh, Pennsylvania, to the mouth of the Columbia River, near present day Astoria, Oregon. It follows the historic outbound and inbound routes of the Lewis and Clark Expedition as well as the preparatory section from Pittsburgh, Pennsylvania to Wood River, Illinois.',
    fullName: 'Lewis & Clark National Historic Trail',
    image: {
      credit: 'NPS Photo / Alex Wiles',
      url: 'https://www.nps.gov/common/uploads/structured_data/FA29AF56-DF2B-8692-40F8422E38FB9093.jpg',
    },
    latitude: '41.2646141052',
    longitude: '-95.9245147705',
    parkCode: 'lecl',
  },
  lewi: {
    description:
      "Explore the timeless rainforests and majestic coastal vistas. Discover the rich heritage of the native people. Unfold the dramatic stories of America's most famous explorers. The park encompasses sites along the Columbia River and the Pacific Coast. Follow in the footsteps of the explorers and have an adventure in history.",
    fullName: 'Lewis and Clark National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/54612AA3-0734-3D97-137865DFB9918D11.jpg',
    },
    latitude: '46.21178735',
    longitude: '-123.9638583',
    parkCode: 'lewi',
  },
  libi: {
    description:
      "This area memorializes the US Army's 7th Cavalry and the Lakotas and Cheyennes in one of the Indian's last armed efforts to preserve their way of life. Here on June 25 and 26 of 1876, 263 soldiers, including Lt. Col. George A. Custer and attached personnel of the US Army, died fighting several thousand Lakota and Cheyenne warriors.",
    fullName: 'Little Bighorn Battlefield National Monument',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C847035-1DD8-B71B-0B387957A7924FFA.jpg',
    },
    latitude: '45.55633048',
    longitude: '-107.4183614',
    parkCode: 'libi',
  },
  libo: {
    description:
      "Abraham Lincoln grew from youth to manhood on this southern Indiana soil. Many character and moral traits of one of the world's most respected leaders was formed and nurtured here. Explore Lincoln's boyhood and learn about the boy who would one day become the leader of our nation.",
    fullName: 'Lincoln Boyhood National Memorial',
    image: {
      credit: 'NPS Photo/Paula Alexander',
      url: 'https://www.nps.gov/common/uploads/structured_data/04C50A1E-1DD8-B71B-0B89814283E6E886.jpg',
    },
    latitude: '38.11817004',
    longitude: '-86.99656861',
    parkCode: 'libo',
  },
  liho: {
    description:
      'Abraham Lincoln believed in the ideal that everyone in America should have the opportunity to improve their economic and social condition. Lincoln’s life was the embodiment of that idea. We know him as the sixteenth president but he was also a spouse, parent, and neighbor who experienced the same hopes, dreams, and challenges of life that are still experienced by many people today.',
    fullName: 'Lincoln Home National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/519B9677-A5DA-1824-C11B59B1C565188B.jpg',
    },
    latitude: '39.79715642',
    longitude: '-89.64513397',
    parkCode: 'liho',
  },
  linc: {
    description:
      '"...as in the hearts of the people for whom he saved the Union, the memory of Abraham Lincoln is enshrined forever." Beneath these words, the 16th president of the United States sits immortalized in marble as an enduring symbol of unity, strength, and wisdom.',
    fullName: 'Lincoln Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C816F5A-1DD8-B71B-0B6D38F175B60A23.jpg',
    },
    latitude: '38.88927229',
    longitude: '-77.05017778',
    parkCode: 'linc',
  },
  liri: {
    description:
      'Little River is unique because it flows for most of its length atop Lookout Mountain in northeast Alabama. Forested uplands, waterfalls, canyon rims and bluffs, pools, boulders, and sandstone cliffs offer settings for a variety of recreational activities. Natural resources and cultural heritage come together to tell the story of the Preserve, a special place in the Southern Appalachians.',
    fullName: 'Little River Canyon National Preserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C870F95-1DD8-B71B-0B1A89976F5B3292.jpg',
    },
    latitude: '34.41461863',
    longitude: '-85.61734327',
    parkCode: 'liri',
  },
  lode: {
    description:
      'The largest free-flowing river in the eastern United States, the Delaware River runs past forests, farmlands, and villages, and it also links some of the most densely populated regions in America. In 2000, the National Wild and Scenic River System incorporated key segments of the lower Delaware River to form this unit of the National Park System.',
    fullName: 'Lower Delaware National Wild and Scenic River',
    image: {
      credit: 'NPS Photo/Julia Bell',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A403C-1DD8-B71B-0B48D4D57314EA3D.jpg',
    },
    latitude: '40.4000389',
    longitude: '-74.983737',
    parkCode: 'lode',
  },
  loea: {
    description:
      'The heart of the museum is it historic tenements, home to an estimated 7,000 people from over 20 nations between 1863 and 1935. The tenement’s cramped living spaces, the lives of past residents, and the history of the Lower East Side, contribute to its representation of the immigrant experience. Experience this museum through various in person and virtual programming today!',
    fullName: 'Lower East Side Tenement Museum National Historic Site',
    image: {
      credit: 'Lower East Side Tenement Museum',
      url: 'https://www.nps.gov/common/uploads/structured_data/39E65D0C-1DD8-B71B-0B5C18C95C5D04A0.jpg',
    },
    latitude: '40.7187683',
    longitude: '-73.99001245',
    parkCode: 'loea',
  },
  long: {
    description:
      "Longfellow House-Washington's Headquarters National Historic Site preserves the home of Henry W. Longfellow, one of the world’s foremost 19th century poets. The house also served as headquarters for General George Washington during the Siege of Boston, July 1775 - April 1776. In addition to its rich history, the site offers unique opportunities to explore 19th century literature and arts.",
    fullName:
      "Longfellow House Washington's Headquarters National Historic Site",
    image: {
      credit: 'NPS Photo / James P. Jones | Photography RI',
      url: 'https://www.nps.gov/common/uploads/structured_data/3F81541A-CC01-7548-8F7723937ECD58D8.jpg',
    },
    latitude: '42.37698854',
    longitude: '-71.12636956',
    parkCode: 'long',
  },
  lowe: {
    description:
      'Discover the Continuing Revolution. Lowell’s water-powered textile mills catapulted the nation – including immigrant families and early female factory workers – into an uncertain new industrial era. Nearly 200 years later, the changes that began here still reverberate in our shifting global economy. Explore Lowell, a living monument to the dynamic human story of the Industrial Revolution.',
    fullName: 'Lowell National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/540E0A41-958B-903A-9034B50FD25C4D69.jpg',
    },
    latitude: '42.6455371',
    longitude: '-71.31588673',
    parkCode: 'lowe',
  },
  lyba: {
    description:
      'From this distance the seat of national power appears pristine across the river, so President Johnson came here often when he needed to escape from the stresses of building a Great Society. After he died, his wife chose this place for his memorial. A landscape of serpentine paths, white pines, a granite monolith, and an open meadow honors his legacy of social justice and conservation legislation.',
    fullName: 'LBJ Memorial Grove on the Potomac',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C827D24-1DD8-B71B-0B230D50B1C6F96F.jpg',
    },
    latitude: '38.87858036',
    longitude: '-77.05145832',
    parkCode: 'lyba',
  },
  lyjo: {
    description:
      '---Lyndon Baines Johnson Lyndon B. Johnson National Historical Park tells the story of our 36th President beginning with his ancestors until his final resting place on his beloved LBJ Ranch. This entire "circle of life" gives the visitor a unique perspective into one of America\'s most noteworthy citizens by providing the most complete picture of any American president.',
    fullName: 'Lyndon B Johnson National Historical Park',
    image: {
      credit: 'LBJ Library Photo by Frank Wolfe',
      url: 'https://www.nps.gov/common/uploads/structured_data/FE93563C-B920-FCC4-73E75A4CE886A72F.jpg',
    },
    latitude: '30.2519655',
    longitude: '-98.60692433',
    parkCode: 'lyjo',
  },
  maac: {
    description:
      'Maine Acadians share beliefs and experiences tying them to a common religion, languages, and history. The St. John River, land, and family are essential to their culture. The National Park Service supports the Maine Acadian Heritage Council, an association of historical societies, cultural clubs, towns, and museums that work together to support Maine Acadian culture in the St. John Valley.',
    fullName: 'Maine Acadian Culture',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B3A97-1DD8-B71B-0BCDEEBD8170AEE0.jpg',
    },
    latitude: '47.25102114',
    longitude: '-68.59447532',
    parkCode: 'maac',
  },
  mabi: {
    description:
      "Walk through one of Vermont's most beautiful landscapes, under the shade of sugar maples and 400-year-old hemlocks, across covered bridges and alongside rambling stone walls. This is a landscape of loss, recovery, and conservation. This is a story of stewardship, of people taking care of places - sharing an enduring connection to land and a sense of hope for the future.",
    fullName: 'Marsh - Billings - Rockefeller National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C808F76-1DD8-B71B-0BA3A335C2ADFAF3.jpg',
    },
    latitude: '43.63348732',
    longitude: '-72.53424638',
    parkCode: 'mabi',
  },
  maca: {
    description:
      'Rolling hills, deep river valleys, and the worlds longest known cave system. Mammoth Cave National Park is home to thousands of years of human history and a rich diversity of plant and animal life, earning it the title of UNESCO World Heritage Site and International Biosphere Reserve.',
    fullName: 'Mammoth Cave National Park',
    image: {
      credit: 'NPS Photo/ Deb Spillman',
      url: 'https://www.nps.gov/common/uploads/structured_data/95EAA431-F26B-66EB-E9E6B108F47F70B0.jpg',
    },
    latitude: '37.19760458',
    longitude: '-86.13090198',
    parkCode: 'maca',
  },
  malu: {
    description:
      'A young boy grows up in a time of segregation…A dreamer is moved by destiny into leadership of the modern civil rights movement…This was Martin Luther King, Jr. Come hear his story, visit the home of his birth, and where he played as a child. Walk in his footsteps, and hear his voice in the church where he moved hearts and minds. Marvel at how he was an instrument for social change.',
    fullName: 'Martin Luther King, Jr. National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/5DC14EA9-047B-156E-0DEAFE4188EAD890.jpg',
    },
    latitude: '33.75618241',
    longitude: '-84.37256768',
    parkCode: 'malu',
  },
  mamc: {
    description:
      'Mary McLeod Bethune achieved her greatest recognition at the Washington, DC townhouse that is now this National Historic Site. The Council House was the first headquarters of the National Council of Negro Women (NCNW) and was Bethune’s last home in Washington, DC. From here, Bethune and the NCNW spearheaded strategies and developed programs that advanced the interests of African American women.',
    fullName: 'Mary McLeod Bethune Council House National Historic Site',
    image: {
      credit: 'NPS Photo/Kenneth Chandler',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83EDB8-1DD8-B71B-0B904FDCAD5D7937.jpg',
    },
    latitude: '38.90819107',
    longitude: '-77.03096742',
    parkCode: 'mamc',
  },
  mana: {
    description:
      'On July 21, 1861, two armies clashed for the first time on the fields overlooking Bull Run. Heavy fighting swept away any notion of a quick war. In August 1862, Union and Confederate armies converged for a second time on the plains of Manassas. The Confederates won a solid victory bringing them to the height of their power.',
    fullName: 'Manassas National Battlefield Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85AA4D-1DD8-B71B-0B4C0BA37FFF3157.jpg',
    },
    latitude: '38.81710063',
    longitude: '-77.5353468',
    parkCode: 'mana',
  },
  manz: {
    description:
      'In 1942, the United States government ordered more than 110,000 men, women, and children to leave their homes and detained them in remote, military-style camps. Manzanar War Relocation Center was one of ten camps where the US government incarcerated Japanese immigrants ineligible for citizenship and Japanese American citizens during World War II.',
    fullName: 'Manzanar National Historic Site',
    image: {
      credit: 'Dorothea Lange',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C876C2F-1DD8-B71B-0B0F7AB75DF47C6F.jpg',
    },
    latitude: '36.72559195',
    longitude: '-118.1547177',
    parkCode: 'manz',
  },
  mapr: {
    description:
      'The Manhattan Project is one of the most transformative events of the 20th century. It ushered in the nuclear age with the development of the world’s first atomic bombs. The building of atomic weapons began in 1942 in three secret communities across the nation. As World War II waned in 1945, the United States dropped the atomic bombs on Hiroshima and Nagasaki, Japan — forever changing the world.',
    fullName: 'Manhattan Project National Historical Park',
    image: {
      credit: 'NPS/FELLER',
      url: 'https://www.nps.gov/common/uploads/structured_data/C6FAAA0C-9945-1711-798ADDFEFE54E5B2.jpg',
    },
    latitude: '35.88096',
    longitude: '-106.30214',
    parkCode: 'mapr',
  },
  mava: {
    description:
      "Today, Martin Van Buren is an obscure man, often little more than a footnote. In pre-Civil War America, however, it was impossible not to have an opinion of him. Van Buren was central to the creation of America's political parties, and to the largest crisis of his time, slavery. The above quote is from Davy Crockett, one of many Americans trying to understand the Red Fox of Kinderhook.",
    fullName: 'Martin Van Buren National Historic Site',
    image: {
      credit: 'Chloe Barker-Benfield',
      url: 'https://www.nps.gov/common/uploads/structured_data/63CAAA72-1DD8-B71B-0BA08E6F04BC7FEC.jpeg',
    },
    latitude: '42.36819596',
    longitude: '-73.70834257',
    parkCode: 'mava',
  },
  mawa: {
    description:
      'Maggie Lena Walker devoted her life to civil rights advancement, economic empowerment, and educational opportunities for Jim Crow-era African Americans and women. As a bank president, newspaper editor, and fraternal leader, Walker served as an inspiration of pride and progress. Today, Walker’s home is preserved as a tribute to her enduring legacy of vision, courage, and determination.',
    fullName: 'Maggie L Walker National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/9FA50A63-1DD8-B71B-0BE282041CAE097D.jpg',
    },
    latitude: '37.54781499',
    longitude: '-77.43746979',
    parkCode: 'mawa',
  },
  memy: {
    description:
      'Medgar and Myrlie Evers were partners in the civil rights struggle. The assassination of Medgar Evers in the carport of their home on June 12, 1963, was the first murder of a nationally significant leader of the American Civil Rights Movement, and it became a catalyst for passage of the Civil Rights Act of 1964. Myrlie Evers continued to promote issues of racial equality and social justice.',
    fullName: 'Medgar and Myrlie Evers Home National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/A9FDD030-BEAF-C4EE-7688C55E2902CB09.jpg',
    },
    latitude: '32.34096274',
    longitude: '-90.21264553',
    parkCode: 'memy',
  },
  meve: {
    description:
      'For over 700 years, the Ancestral Pueblo people built thriving communities on the mesas and in the cliffs of Mesa Verde. Today, the park protects the rich cultural heritage of 26 tribes and offers visitors a spectacular window into the past. This World Heritage Site and International Dark Sky Park is home to over a thousand species, including several that live nowhere else on earth.',
    fullName: 'Mesa Verde National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C0089-1DD8-B71B-0BC397BA671C0616.jpg',
    },
    latitude: '37.23908345',
    longitude: '-108.4624032',
    parkCode: 'meve',
  },
  miin: {
    description:
      "The Pearl Harbor attack intensified existing hostility towards Japanese Americans. As wartime hysteria mounted, President Roosevelt signed Executive Order 9066. Over 120,000 persons of Japanese ancestry (Nikkei) had to leave their homes, jobs, and lives behind, and were forced into one of ten prison camps spread across the nation. This is Minidoka's story.",
    fullName: 'Minidoka National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C874621-1DD8-B71B-0B29C1E739E9977F.jpg',
    },
    latitude: '42.80586068',
    longitude: '-114.4449868',
    parkCode: 'miin',
  },
  mima: {
    description:
      'At Minute Man National Historical Park the opening battle of the Revolution is brought to life as visitors explore the battlefields and structures associated with April 19, 1775, and witness the American revolutionary spirit through the writings of the Concord authors.',
    fullName: 'Minute Man National Historical Park',
    image: {
      credit: 'NPS Photo/P. Lupsiewicz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8093FE-1DD8-B71B-0B136DB5E8378F8C.jpg',
    },
    latitude: '42.4562778',
    longitude: '-71.30738884',
    parkCode: 'mima',
  },
  mimi: {
    description:
      'During the Cold War, a vast arsenal of nuclear missiles were placed in the Great Plains. Hidden in plain sight, for thirty years 1,000 missiles were kept on constant alert; hundreds remain today. The Minuteman Missile remains an iconic weapon in the American nuclear arsenal. It holds the power to destroy civilization, but is meant as a nuclear deterrent to maintain peace and prevent war.',
    fullName: 'Minuteman Missile National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BEAAF-1DD8-B71B-0BBB2CECC1123926.jpg',
    },
    latitude: '43.89558013',
    longitude: '-102.0272131',
    parkCode: 'mimi',
  },
  misp: {
    description:
      "The Union won a significant victory early in the Civil War at The Battle of Mill Springs. Explore the rolling fields of Kentucky where the battle took place and learn about that state's strategic importance to both sides of the fight.",
    fullName: 'Mill Springs Battlefield National Monument',
    image: {
      credit: 'Mill Springs Battlefield Association',
      url: 'https://www.nps.gov/common/uploads/structured_data/57ECF29C-E3D1-BC5C-803A0C6691AB28CB.jpg',
    },
    latitude: '37.0688158602',
    longitude: '-84.7375361304',
    parkCode: 'misp',
  },
  miss: {
    description:
      'In the middle of a bustling urban setting, this 72 mile river park offers quiet stretches for fishing, boating and canoeing, birdwatching, bicycling, and hiking. And there are plenty of visitor centers and trails that highlight the fascinating human history of the Mississippi River. This a great place to start your exploration of this important river.',
    fullName: 'Mississippi National River and Recreation Area',
    image: {
      credit: 'NPS photo/Gordon Dietzman',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7CDBEB-1DD8-B71B-0BA93C0F0BE1C5FB.jpg',
    },
    latitude: '44.942487',
    longitude: '-93.098712',
    parkCode: 'miss',
  },
  mlkm: {
    description:
      "Located in downtown Washington, DC, the memorial honors Martin Luther King, Jr.'s legacy and the struggle for freedom, equality, and justice. A prominent leader in the modern civil rights movement, Dr. King was a tireless advocate for racial equality, working class, and the oppressed around the world.",
    fullName: 'Martin Luther King, Jr. Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C817680-1DD8-B71B-0B2377795A1029FE.jpg',
    },
    latitude: '38.8862276865',
    longitude: '-77.0442195534',
    parkCode: 'mlkm',
  },
  mnrr: {
    description:
      "Imagine a 100-mile stretch of North America's longest river, a vestige of the untamed American West. The Missouri National Recreational River is where imagination meets reality. Two free flowing stretches of the Missouri make up the National Park. Relive the past by making an exploration of the wild, untamed and mighty river that continues to flow as nature intended.",
    fullName: 'Missouri National Recreational River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8375D2-1DD8-B71B-0B28DF0D3992CFAE.jpg',
    },
    latitude: '42.7882189',
    longitude: '-97.59077822',
    parkCode: 'mnrr',
  },
  moca: {
    description:
      'Established December 8, 1906, Montezuma Castle is the third National Monument dedicated to preserving Native American culture. This 20 room high-rise apartment, nestled into a towering limestone cliff, tells a story of ingenuity, survival and ultimately, prosperity in an unforgiving desert landscape.',
    fullName: 'Montezuma Castle National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7ACA59-1DD8-B71B-0B68D8F8681AA81D.jpg',
    },
    latitude: '34.62237771',
    longitude: '-111.8147857',
    parkCode: 'moca',
  },
  mocr: {
    description:
      'In the early morning hours of February 27, 1776, Loyalist forces charged across a partially dismantled Moores Creek Bridge. Beyond the bridge, nearly 1,000 North Carolina Patriots waited quietly with cannons and muskets poised to fire. This battle marked the last broadsword charge by Scottish Highlanders and the first significant victory for the Patriots in the American Revolution.',
    fullName: 'Moores Creek National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/914A2696-A4AE-2051-F206B93B3BE54A8B.jpg',
    },
    latitude: '34.45820776',
    longitude: '-78.11031134',
    parkCode: 'mocr',
  },
  moja: {
    description:
      'Mojave preserves a diverse mosaic of ecological habitats and a 10,000 year history of human connection with the desert. Offering extensive opportunities to experience desert landscapes, the preserve promotes understanding and appreciation for the increasingly threatened resources of the Mojave Desert. This remote preserve encourages a sense of discovery and a connection to wild places.',
    fullName: 'Mojave National Preserve',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/A2751C78-ACB9-A19B-D7946503414E34AE.jpg',
    },
    latitude: '35.12485941',
    longitude: '-115.5168258',
    parkCode: 'moja',
  },
  mono: {
    description:
      'During the summer of 1864, the Confederacy carried out a bold plan to turn the tide of the Civil War in their favor. They planned to capture Washington, DC and influence the election of 1864. On July 9, however, Federal soldiers outnumbered three to one, fought gallantly along the banks of the Monocacy River in an effort to buy time for Union reinforcement to arrive in Washington, DC.',
    fullName: 'Monocacy National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80BC8B-1DD8-B71B-0B7C449D99556A3F.jpg',
    },
    latitude: '39.36084236',
    longitude: '-77.39637677',
    parkCode: 'mono',
  },
  mopi: {
    description:
      'Explore the Mormon Pioneer National Historic Trail across five states to see the 1,300-mile route traveled by Mormons who fled Nauvoo, Illinois, to the Great Salt Lake Valley in 1846-1847.',
    fullName: 'Mormon Pioneer National Historic Trail',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DB6E0-1DD8-B71B-0BF585CE20DBD781.jpg',
    },
    latitude: '41.2650321741',
    longitude: '-101.84083756',
    parkCode: 'mopi',
  },
  mora: {
    description:
      'Ascending to 14,410 feet above sea level, Mount Rainier stands as an icon in the Washington landscape. An active volcano, Mount Rainier is the most glaciated peak in the contiguous U.S.A., spawning five major rivers. Subalpine wildflower meadows ring the icy volcano while ancient forest cloaks Mount Rainier’s lower slopes. Wildlife abounds in the park’s ecosystems. A lifetime of discovery awaits.',
    fullName: 'Mount Rainier National Park',
    image: {
      credit: 'JD Hascup Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/49F34094-B893-7DD6-5AE0F0220724B0EF.jpg',
    },
    latitude: '46.86075416',
    longitude: '-121.7043885',
    parkCode: 'mora',
  },
  morr: {
    description:
      'Morristown National Historical Park commemorates the sites of General Washington and the Continental army’s winter encampment of December 1779 to June 1780, where they survived through what would be the coldest winter on record. The park also maintains a museum & library collection related to the encampments & George Washington, as well as items relating to pre- and post-Revolutionary America.',
    fullName: 'Morristown National Historical Park',
    image: {
      credit: 'NPS Photo/Dan Beards',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C804A08-1DD8-B71B-0B73C1F0A0ACAD7A.jpg',
    },
    latitude: '40.7650755',
    longitude: '-74.53455122',
    parkCode: 'morr',
  },
  moru: {
    description:
      'Majestic figures of George Washington, Thomas Jefferson, Theodore Roosevelt and Abraham Lincoln, surrounded by the beauty of the Black Hills of South Dakota, tell the story of the birth, growth, development and preservation of this country. From the history of the first inhabitants to the diversity of America today, Mount Rushmore brings visitors face to face with the rich heritage we all share.',
    fullName: 'Mount Rushmore National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/7F64FD4B-FBD4-5B1B-3492A37C207C73A4.jpg',
    },
    latitude: '43.88037021',
    longitude: '-103.4525186',
    parkCode: 'moru',
  },
  muwo: {
    description:
      'Walk among old growth coast redwoods, cooling their roots in the fresh water of Redwood Creek and lifting their crowns to reach the sun and fog. Federally protected as a National Monument since 1908, this primeval forest is both refuge and laboratory, revealing our relationship with the living landscape. What will you discover in Muir Woods?',
    fullName: 'Muir Woods National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/B8948A3E-F88D-F366-93C97C2CE440F386.jpg',
    },
    latitude: '37.89658027',
    longitude: '-122.5808047',
    parkCode: 'muwo',
  },
  nabr: {
    description:
      'Three majestic natural bridges invite you to ponder the power of water in a landscape usually defined by its absence. View them from an overlook, or hit the trails and experience their grandeur from below. Declared a National Monument in 1908, the bridges are named "Kachina," "Owachomo" and "Sipapu" in honor of the ancestral Puebloans who once made this place their home.',
    fullName: 'Natural Bridges National Monument',
    image: {
      credit: 'NPS Photo / Jacob W. Frank',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F0B3F-1DD8-B71B-0B8A0FBA0B28DD66.jpg',
    },
    latitude: '37.6045329',
    longitude: '-110.0022436',
    parkCode: 'nabr',
  },
  nace: {
    description:
      'Welcome to National Capital Parks-East. We invite you to journey to parks Beyond the capitol of Washington, D.C. National Capital Parks-East is 13 park sites, parkways and statuary covering more than 8,000 acres of historic, cultural, and recreational parklands from Capitol Hill to the nearby Maryland suburbs',
    fullName: 'National Capital Parks-East',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82B782-1DD8-B71B-0B692035768B7064.jpg',
    },
    latitude: '38.8659',
    longitude: '-76.994',
    parkCode: 'nace',
  },
  nama: {
    description:
      'This is where the nation comes to remember and where history is made. As “America’s Front Yard,” the National Mall and Memorial Parks is home to many of our country’s most iconic memorials telling the story of people and events that shaped us as a nation. Each year, millions of people come to recreate, commemorate presidential legacies, honor our veterans, and make their voices heard.',
    fullName: 'National Mall and Memorial Parks',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C821F64-1DD8-B71B-0B7C29BA3E4F549E.jpg',
    },
    latitude: '38.8899',
    longitude: '-77.026',
    parkCode: 'nama',
  },
  natc: {
    description:
      'Discover the history of all the peoples of Natchez, Mississippi, from European settlement, African enslavement, the American cotton economy, to the Civil Rights struggle on the lower Mississippi River.',
    fullName: 'Natchez National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/BC2BF996-9A1D-637F-B279C39E2232C4C4.jpg',
    },
    latitude: '31.54697621',
    longitude: '-91.39040665',
    parkCode: 'natc',
  },
  natr: {
    description:
      'The Natchez Trace Parkway is a 444-mile recreational road and scenic drive through three states. It roughly follows the "Old Natchez Trace" a historic travel corridor used by American Indians, "Kaintucks," European settlers, slave traders, soldiers, and future presidents. Today, people can enjoy not only a scenic drive but also hiking, biking, horseback riding, and camping along the parkway.',
    fullName: 'Natchez Trace Parkway',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80016C-1DD8-B71B-0B91B2FA75DF0C02.jpg',
    },
    latitude: '33.78002293',
    longitude: '-89.03092439',
    parkCode: 'natr',
  },
  natt: {
    description:
      "The Natchez Trace National Scenic Trail is five sections of hiking trail running roughly parallel to the 444-mile long Natchez Trace Parkway scenic motor road. The foot trails total more than 60 miles and offer opportunities to explore wetlands, swamps, hardwood forest, and the history of the area. For What's Open What's Close visit www.nps.gov/natr/planyourvisit/what-is-open-what-is-closed.htm",
    fullName: 'Natchez Trace National Scenic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C843CE5-1DD8-B71B-0BAFBFE2E37ADA31.jpg',
    },
    latitude: '34.330290333',
    longitude: '-88.7100104094',
    parkCode: 'natt',
  },
  nava: {
    description:
      'The Hopi, San Juan Southern Paiute, Zuni, and Navajo are tribes that have inhabited the canyons for centuries. Springs fed into farming land on the canyon floor and homes were built in the natural sandstone alcoves. The cliff dwellings of Betatakin, Keet Seel, and Inscription House were last physically occupied around 1300 AD but the villages have a spiritual presence that can still be felt today.',
    fullName: 'Navajo National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C821A96-1DD8-B71B-0B6A3DE748A3EA81.jpg',
    },
    latitude: '36.71755643',
    longitude: '-110.5504015',
    parkCode: 'nava',
  },
  nebe: {
    description:
      '"The town itself is perhaps the dearest place to live in, in all New England..nowhere in all America will you find more patrician-like houses, parks and gardens more opulent, than in New Bedford…all these brave houses and flowery gardens came from the Atlantic, Pacific, and Indian oceans. One and all, they were harpooned and dragged up hither from the bottom of the sea." H. Melville, "Moby-Dick"',
    fullName: 'New Bedford Whaling National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B58A6-1DD8-B71B-0BECE805AD9FBFDA.png',
    },
    latitude: '41.63540552',
    longitude: '-70.92322321',
    parkCode: 'nebe',
  },
  neen: {
    description:
      'From the Sound to the Summits: the New England Trail covers 215 miles from Long Island Sound across long ridges to scenic mountain summits in Connecticut and Massachusetts. The trail offers panoramic vistas and close-ups of New England’s natural and cultural landscape: traprock ridges, historic village centers, farmlands, unfragmented forests, quiet streams, steep river valleys and waterfalls.',
    fullName: 'New England National Scenic Trail',
    image: {
      credit: 'AMC Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/498B6E55-9C9A-07E3-AB0896A77C5485DD.jpg',
    },
    latitude: '42.2915819137',
    longitude: '-72.5242767334',
    parkCode: 'neen',
  },
  nepe: {
    description:
      'Since time immemorial, the valleys, prairies, mountains, and plateaus of the inland northwest have been home to the Nimiipuu (Nez Perce) people. Extremely resilient, they survived the settling of the United States and adapted to a changed world. Nez Perce National Historical Park consists of 38 places important to the history and culture of the Nimiipuu. Explore these places. Learn their stories.',
    fullName: 'Nez Perce National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C879308-1DD8-B71B-0B32D10FCFA3C59F.jpg',
    },
    latitude: '46.07019093',
    longitude: '-115.8761258',
    parkCode: 'nepe',
  },
  neri: {
    description:
      'A rugged, whitewater river flowing northward through deep canyons, the New River is among the oldest rivers on the continent. The park encompasses over 70,000 acres of land along the New River, is rich in cultural and natural history, and offers an abundance of scenic and recreational opportunities.',
    fullName: 'New River Gorge National Park and Preserve',
    image: {
      credit: 'Gary Hartley',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E8C70-1DD8-B71B-0B00C7B2373E386E.jpg',
    },
    latitude: '37.86878554',
    longitude: '-80.99956002',
    parkCode: 'neri',
  },
  nico: {
    description:
      'Formerly enslaved African Americans left Kentucky at the end of the of post-Civil War Reconstruction period to experience freedom in the "Promised Land" of Kansas. Nicodemus represents the involvement of African Americans in the westward expansion and settlement of the Great Plains. It is the oldest and only remaining Black settlement west of the Mississippi River.',
    fullName: 'Nicodemus National Historic Site',
    image: {
      credit: 'NPS PHOTO by Will Pope',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8336EF-1DD8-B71B-0B6789502BDA7E24.jpg',
    },
    latitude: '39.39167606',
    longitude: '-99.61680329',
    parkCode: 'nico',
  },
  niob: {
    description:
      "With a little something for everyone, the Niobrara National Scenic River is a destination for crossing adventures off your bucket list. Most popular for river recreation, you can float the Niobrara River on a canoe, tube, or kayak as a beginner and have a blast. Hiking, biking, and wildlife watching keep our visitors busy. Oh! And we haven't even told you about the waterfalls yet.",
    fullName: 'Niobrara National Scenic River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C95AD-1DD8-B71B-0B9C962E8BA62E89.jpg',
    },
    latitude: '42.79413083',
    longitude: '-99.91870646',
    parkCode: 'niob',
  },
  nisi: {
    description:
      'Settlers struggled against the harsh backcountry to survive. Cherokee Indians hunted and fought to keep their land. Two towns and a trading post were formed then abandoned to the elements. And two Revolutionary War battles claimed over 100 lives. Come discover the 18th century history of South Carolina.',
    fullName: 'Ninety Six National Historic Site',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79EFE2-1DD8-B71B-0BE1C97AF62D94F2.jpg',
    },
    latitude: '34.14273587',
    longitude: '-82.01636079',
    parkCode: 'nisi',
  },
  noat: {
    description:
      "As one of North America's largest mountain-ringed river basins with an intact ecosystem, the Noatak River environs features some of the Arctic's finest arrays of plants and animals. The river is classified as a national wild and scenic river, and offers stunning wilderness float-trip opportunities - from deep in the Brooks Range to the tidewater of the Chukchi Sea.",
    fullName: 'Noatak National Preserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A1876-1DD8-B71B-0B9C0CE759BEC365.jpg',
    },
    latitude: '68.01027053',
    longitude: '-159.831694',
    parkCode: 'noat',
  },
  noca: {
    description:
      "Less than three hours from Seattle, an alpine landscape beckons. Discover communities of life adapted to moisture in the west and recurring fire in the east. Explore jagged peaks crowned by more than 300 glaciers. Listen to cascading waters in forested valleys. Witness a landscape sensitive to the Earth's changing climate. Help steward the ecological heart of the Cascades.",
    fullName: 'North Cascades National Park',
    image: {
      credit: 'NPS Photo/D.Dixon',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A599D-1DD8-B71B-0BBDC12BEC5107B5.jpg',
    },
    latitude: '48.71171756',
    longitude: '-121.2069423',
    parkCode: 'noca',
  },
  noco: {
    description:
      'Come to the North Country. Trek the hills and valleys. Stand on the shores of lakes & streams from glaciers 10,000 years before. Clear-flowing water, red/gold of autumn, a fairyland of snow, open prairies, and distant horizons paint the land. Historic sites along the way tell how America settled and grew as a nation. From North Dakota to Vermont, adventure is never far away.',
    fullName: 'North Country National Scenic Trail',
    image: {
      credit: 'NCTA',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C834C15-1DD8-B71B-0BDB0B3A229F398B.jpg',
    },
    latitude: '46.334400743',
    longitude: '-90.8165630499',
    parkCode: 'noco',
  },
  npnh: {
    description:
      'These 11 sites preserve more than 400 years of American history! We invite you to explore the past and investigate its relevance in our lives today. From the birth of American democracy to the evolution of commerce, harbor defense, ecology and immigration, the breadth of themes commemorated through the National Parks of New York Harbor reflect the richness and diversity of our heritage.',
    fullName: 'National Parks of New York Harbor',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C851C36-1DD8-B71B-0B0CDC66CCAD1F18.jpg',
    },
    latitude: '40.6632',
    longitude: '-74.0451',
    parkCode: 'npnh',
  },
  npsa: {
    description:
      'The National Park of American Samoa welcomes you into the heart of the South Pacific, to a world of sights, sounds, and experiences that you will find in no other national park in the United States. Enjoy this unique national park and the welcoming people of American Samoa. We are here to protect its rich culture and natural resources. Come explore them with us!',
    fullName: 'National Park of American Samoa',
    image: {
      credit: 'NPS Photo / Michael Larson',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84F643-1DD8-B71B-0BC6F3EA2E1F58AB.jpg',
    },
    latitude: '-14.22865935',
    longitude: '-169.8503777',
    parkCode: 'npsa',
  },
  obed: {
    description:
      'The Obed Wild and Scenic River looks much the same today as it did when the first white settlers strolled its banks in the late 1700s. While meagerly populated due to poor farming soil, the river was a hospitable fishing and hunting area for trappers and pioneers. Today, the Obed stretches along the Cumberland Plateau and offers visitors a variety of outdoor recreational opportunities.',
    fullName: 'Obed Wild & Scenic River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C792DFB-1DD8-B71B-0B5E8EB41685A5BB.jpg',
    },
    latitude: '36.1056026037',
    longitude: '-84.5979170501',
    parkCode: 'obed',
  },
  ocmu: {
    description:
      'Welcome to Ocmulgee Mounds National Historical Park. This park is a prehistoric American Indian site, where many different American Indian cultures occupied this land for thousands of years. American Indians first came here during the Paleo-Indian Period hunting Ice Age mammals. Around 900 CE, the Mississippian Period began, and people constructed mounds for their elite, which remain here today.',
    fullName: 'Ocmulgee Mounds National Historical Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C797774-1DD8-B71B-0B2DA9E973C5AD89.jpg',
    },
    latitude: '32.83816576',
    longitude: '-83.60224853',
    parkCode: 'ocmu',
  },
  okci: {
    description:
      'The outdoor symbolic memorial is a place of quiet reflection, honoring victims, survivors, rescuers, and all who were changed forever on April 19, 1995. It encompasses the now sacred soil where the Alfred P. Murrah Federal Building once stood, capturing and preserving forever the place and events that changed the world.',
    fullName: 'Oklahoma City National Memorial',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85F67B-1DD8-B71B-0B799239B62FEB48.jpg',
    },
    latitude: '35.473',
    longitude: '-97.5171',
    parkCode: 'okci',
  },
  olsp: {
    description:
      'Follow the routes of mule pack trains across the Southwest on the Old Spanish National Historic Trail between Santa Fe, New Mexico, and Los Angeles, California. New Mexican traders moved locally produced merchandise across what are now six states to exchange for mules and horses.',
    fullName: 'Old Spanish National Historic Trail',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7EA8D2-1DD8-B71B-0B9050CB4DDFC559.jpg',
    },
    latitude: '37.0791782514',
    longitude: '-112.114693431',
    parkCode: 'olsp',
  },
  olym: {
    description:
      'With its incredible range of precipitation and elevation, diversity is the hallmark of Olympic National Park. Encompassing nearly a million acres, the park protects a vast wilderness, thousands of years of human history, and several distinctly different ecosystems, including glacier-capped mountains, old-growth temperate rain forests, and over 70 miles of wild coastline. Come explore!',
    fullName: 'Olympic National Park',
    image: {
      credit: 'NPS Photo/Jon Preston',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B1DB4-1DD8-B71B-0B9DFEFDD398DB71.jpg',
    },
    latitude: '47.80392754',
    longitude: '-123.6663848',
    parkCode: 'olym',
  },
  orca: {
    description:
      'Deep within the Siskiyou Mountains are dark, twisting passages that await your discovery. Eons of acidic water seeping into marble rock created and decorated the wondrous “Marble Halls of Oregon.” Join a tour, get a taste of what caving is all about, and explore a mountain from the inside and out!',
    fullName: 'Oregon Caves National Monument & Preserve',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8507A5-1DD8-B71B-0B921718CA5479A5.jpg',
    },
    latitude: '42.10319143',
    longitude: '-123.4018586',
    parkCode: 'orca',
  },
  oreg: {
    description:
      'Imagine yourself an emigrant headed for Oregon: would promises of lush farmlands and a new beginning lure you to leave home and walk for weeks? More than 2,000 miles of trail ruts and traces can still be seen along the Oregon National Historic Trail in six states and serve as reminders of the sacrifices, struggles, and triumphs of early American settlers.',
    fullName: 'Oregon National Historic Trail',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D9108-1DD8-B71B-0BE55F68DE91648F.jpg',
    },
    latitude: '41.9876977831',
    longitude: '-109.634200841',
    parkCode: 'oreg',
  },
  orpi: {
    description:
      'Look closely. Look again. The sights and sounds of Organ Pipe Cactus National Monument, an International Biosphere Reserve, reveal a thriving community of plants and animals. Human stories echo throughout this desert preserve, chronicling thousands of years of desert living. A scenic drive, wilderness hike or a night of camping will expose you to a living desert that thrives.',
    fullName: 'Organ Pipe Cactus National Monument',
    image: {
      credit: 'NPS Photo/ Craig Stocks',
      url: 'https://www.nps.gov/common/uploads/structured_data/A1910F3F-AC95-B7D0-2B1171BAB2F34B89.jpg',
    },
    latitude: '32.03585543',
    longitude: '-112.8573314',
    parkCode: 'orpi',
  },
  ovvi: {
    description:
      'Stretching 330 miles through four states (Virginia, Tennessee, North and South Carolina) the Overmountain Victory National Historic Trail traces the route used by patriot militia during the pivotal Kings Mountain campaign of 1780. Follow the campaign by utilizing a Commemorative Motor Route which uses existing state highways marked with the distinctive trail logo, or 87 miles of walkable pathways.',
    fullName: 'Overmountain Victory National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86935E-1DD8-B71B-0BE36DA6ABE25174.jpg',
    },
    latitude: '35.14044',
    longitude: '-81.377',
    parkCode: 'ovvi',
  },
  oxhi: {
    description:
      'The diverse history of Maryland and our national heritage can be experienced at Oxon Cove Park. Through hands-on programs and other activities, you can experience farm life and how its changed over time. Explore how the park evolved from a plantation home during the War of 1812, to a hospital farm, to the park you can visit today.',
    fullName: 'Oxon Cove Park & Oxon Hill Farm',
    image: {
      credit: '(NPS/CLaBarge)',
      url: 'https://www.nps.gov/common/uploads/structured_data/34B552FE-055B-F687-3DBC825302910582.jpg',
    },
    latitude: '38.80578214',
    longitude: '-77.01131457',
    parkCode: 'oxhi',
  },
  ozar: {
    description:
      "Ozark National Scenic Riverways is the first national park area to protect a river system. The Current and Jacks Fork rivers are two of the finest floating rivers you'll find anywhere. Spring-fed, cold and clear they are a delight to canoe, swim, boat or fish. Besides these two famous rivers, the park is home to hundreds of freshwater springs, caves, trails and historic sites such as Alley Mill.",
    fullName: 'Ozark National Scenic Riverways',
    image: {
      credit: 'Brock Davis',
      url: 'https://www.nps.gov/common/uploads/structured_data/44F55489-0B88-97AB-548A8C5373A6E8D1.jpg',
    },
    latitude: '37.13968894',
    longitude: '-91.25709817',
    parkCode: 'ozar',
  },
  paal: {
    description:
      'On May 8, 1846, United States and Mexican troops clashed on the prairie of Palo Alto. The battle was the first in a two-year long war that changed the map of North America. Palo Alto Battlefield National Historical Park preserves the site of this notable battle and provides an understanding of the causes, events, and consequences of the U.S.-Mexican War.',
    fullName: 'Palo Alto Battlefield National Historical Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C791D5F-1DD8-B71B-0B9B92E13DDE689F.jpg',
    },
    latitude: '26.02387351',
    longitude: '-97.46296072',
    parkCode: 'paal',
  },
  paav: {
    description:
      "A street unlike any other. It is known the world over as the heart of the Nation's Capital. America's history has marched, paraded, promenaded, and protested its way along the Avenue.",
    fullName: 'Pennsylvania Avenue',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85E1B9-1DD8-B71B-0B20BF6EC58D31AF.jpg',
    },
    latitude: '38.89426856',
    longitude: '-77.02506554',
    parkCode: 'paav',
  },
  pagr: {
    description:
      "Cotton and silk fabrics; steam locomotives; continuous rolls of paper; airplane engines. What do these things have in common? They were all manufactured in the same place - Paterson, NJ. In 1792, Paterson was established, America's first planned industrial city, centered around the Great Falls of the Passaic River. From humble mills rose industries that changed the face of the United States.",
    fullName: 'Paterson Great Falls National Historical Park',
    image: {
      credit: 'NPS Photo/ Terry McKenna',
      url: 'https://www.nps.gov/common/uploads/structured_data/3F720292-1DD8-B71B-0BBF0A529555D377.jpg',
    },
    latitude: '40.91584645',
    longitude: '-74.18021494',
    parkCode: 'pagr',
  },
  pais: {
    description:
      'Padre Island National Seashore separates the Gulf of Mexico from the Laguna Madre, one of a few hypersaline lagoons in the world. The park protects 66 miles of coastline, dunes, prairies, and wind tidal flats teeming with life. It is a safe nesting ground for the Kemp’s ridley sea turtle and a haven for over 380 bird species. It also has a rich history, including the Spanish shipwrecks of 1554.',
    fullName: 'Padre Island National Seashore',
    image: {
      credit: 'NPS Photo/Jody Mays',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C798FA7-1DD8-B71B-0B884F1081FE6647.jpg',
    },
    latitude: '27.05381186',
    longitude: '-97.35901135',
    parkCode: 'pais',
  },
  para: {
    description:
      'Take a lonely and rocky two-track road in a 4x4 to the edge of the Grand Wash Cliffs. Find a stunning solitary vista deep into the Grand Canyon. Relax in the shade of ponderosas at Mt. Trumbull. Touch ancient waters at Pakoon Springs in one of the driest places in the world. Parashant is remote. There are no crowds here. Be equipped to leave pavement, cell service, and the 21st century behind.',
    fullName: 'Grand Canyon-Parashant National Monument',
    image: {
      credit: 'NPS/T. Miller',
      url: 'https://www.nps.gov/common/uploads/structured_data/5FEA14DD-DA42-DE40-C979416A86C8A4AC.jpg',
    },
    latitude: '36.41535465',
    longitude: '-113.6682797',
    parkCode: 'para',
  },
  peco: {
    description:
      'Pecos is a cultural crossroads through which hunters and gatherers, traders, conquerors and explorers, immigrants, soldiers, ranchers and tourists passed. Walk the trails and imagine Pecos through the centuries. Explore sites where cultural demonstrations and traditional practices continue today - a living legacy of the people who passed this way. Welcome to Pecos, where past is present.',
    fullName: 'Pecos National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/0457F740-1DD8-B71B-0B9462AD0E72A834.jpg',
    },
    latitude: '35.54192238',
    longitude: '-105.6814684',
    parkCode: 'peco',
  },
  pefo: {
    description:
      "Park Hours: 8am to 5pm, MST. Don't forget that Arizona does not observe Daylight Savings. We are an hour earlier than New Mexico, Utah, and the Navajo Nation. Would you like to see the park film? It is located at the park's YouTube Channel.",
    fullName: 'Petrified Forest National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D8213-1DD8-B71B-0BE4A3B9394FD89A.jpg',
    },
    latitude: '34.98387664',
    longitude: '-109.7877678',
    parkCode: 'pefo',
  },
  peri: {
    description:
      'On March 7-8, 1862, over 23,000 soldiers fought here to decide the fate of Missouri and was a turning point of the war in the West. The 4,300 acre battlefield honors those who fought and died on these grounds. Pea Ridge was the most pivotal Civil War battle west of the Mississippi River and is one of the most intact Civil War battlefields in the United States.',
    fullName: 'Pea Ridge National Military Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E6346-1DD8-B71B-0B7F2E71DEF77DE8.jpg',
    },
    latitude: '36.45438033',
    longitude: '-94.03468357',
    parkCode: 'peri',
  },
  pete: {
    description:
      "Nine and a half months, 70,000 casualties, the suffering of civilians, thousands of U. S. Colored Troops fighting for the freedom of their race, and the decline of Gen. Robert E. Lee's Army of No. Virginia all describe the Siege of Petersburg. It was here Gen. Ulysses S. Grant cut off all of Petersburg's supply lines ensuring the fall of Richmond on April 3, 1865. Six days later, Lee surrendered.",
    fullName: 'Petersburg National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C857F09-1DD8-B71B-0B54C972E552D1CB.jpg',
    },
    latitude: '37.19109957',
    longitude: '-77.47594865',
    parkCode: 'pete',
  },
  petr: {
    description:
      'Petroglyph National Monument protects one of the largest petroglyph sites in North America, featuring designs and symbols carved onto volcanic rocks by Native Americans and Spanish settlers 400 to 700 years ago. These images are a valuable record of cultural expression and hold profound spiritual significance for contemporary Native Americans and for the descendants of the early Spanish settlers.',
    fullName: 'Petroglyph National Monument',
    image: {
      credit: 'NPS Photo / Daniel Leifheit',
      url: 'https://www.nps.gov/common/uploads/structured_data/2425221F-94B6-50F2-382B3DB62384FB07.jpg',
    },
    latitude: '35.13915998',
    longitude: '-106.7491456',
    parkCode: 'petr',
  },
  pevi: {
    description:
      "Perry's Victory and International Peace Memorial was established to honor those who fought in the Battle of Lake Erie, during the War of 1812, and to celebrate the long-lasting peace among Great Britain, Canada and the U.S. The Memorial, a Doric column, rising 352 feet over Lake Erie is situated 5 miles from the longest undefended border in the world.",
    fullName: "Perry's Victory & International Peace Memorial",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/841EBF31-FF88-8F95-A51D7A1594AAF65C.jpg',
    },
    latitude: '41.65449782',
    longitude: '-82.8115794',
    parkCode: 'pevi',
  },
  pine: {
    description:
      "This is truly a special place. It's classified as a United States Biosphere Reserve and in 1978 was established by Congress as the country’s first National Reserve. It includes portions of seven southern New Jersey counties, and encompasses over one-million acres of farms, forests and wetlands. It contains 56 communities, from hamlets to suburbs, with over 700,000 permanent residents.",
    fullName: 'New Jersey Pinelands National Reserve',
    image: {
      credit: 'Farmartin',
      url: 'https://www.nps.gov/common/uploads/structured_data/6A36EF6A-1DD8-B71B-0B6EF527BB26F6F0.jpg',
    },
    latitude: '39.9384',
    longitude: '-74.625',
    parkCode: 'pine',
  },
  pinn: {
    description:
      'Some 23 million years ago multiple volcanoes erupted, flowed, and slid to form what would become Pinnacles National Park. What remains is a unique landscape. Travelers journey through chaparral, oak woodlands, and canyon bottoms. Hikers enter rare talus caves and emerge to towering rock spires teeming with life: prairie and peregrine falcons, golden eagles, and the inspiring California condor.',
    fullName: 'Pinnacles National Park',
    image: {
      credit: 'National Park Service/Oscar Garcia',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C86A8CB-1DD8-B71B-0BAE8F7141CCBB1B.jpg',
    },
    latitude: '36.49029208',
    longitude: '-121.1813607',
    parkCode: 'pinn',
  },
  pipe: {
    description:
      "For countless generations, American Indians have quarried the red pipestone found at this site. These grounds are sacred to many people because the pipestone quarried here is carved into pipes used for prayer. Many believe that the pipe's smoke carries one's prayer to the Great Spirit. The traditions of quarrying and pipemaking continue here today.",
    fullName: 'Pipestone National Monument',
    image: {
      credit: 'J.Borden',
      url: 'https://www.nps.gov/common/uploads/structured_data/DA3FB8BE-E6ED-14AC-0D31ABF5E44A43F8.jpg',
    },
    latitude: '44.01351958',
    longitude: '-96.32475523',
    parkCode: 'pipe',
  },
  piro: {
    description:
      "Sandstone cliffs, beaches, sand dunes, waterfalls, inland lakes, deep forest, and wild shoreline beckon you to visit Pictured Rocks National Lakeshore. The power of Lake Superior shapes the park's coastal features and affects every ecosystem, creating a unique landscape to explore. Hiking, camping, sightseeing, and four-season outdoor opportunities abound.",
    fullName: 'Pictured Rocks National Lakeshore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C834062-1DD8-B71B-0B5E6CE1052B344E.jpg',
    },
    latitude: '46.56435642',
    longitude: '-86.31628733',
    parkCode: 'piro',
  },
  pisc: {
    description:
      'Piscataway Park is home to bald eagles, beavers, deer, foxes, ospreys, and many other species. To complement the surroundings, the park has, in addition to a public fishing pier and two boardwalks over fresh water tidal wetlands, a variety of nature trails, meadows, and woodland areas. The Park is also home to National Colonial Farm.',
    fullName: 'Piscataway Park',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E0595-1DD8-B71B-0BE07FAAF6BD61E8.jpg',
    },
    latitude: '38.6929',
    longitude: '-77.067',
    parkCode: 'pisc',
  },
  pisp: {
    description:
      'The rich history of Pipe Spring and its flowing water comes alive as you explore the traditions of the Kaibab Paiute and the Mormon settlers through the museum, historic fort, cabins, and garden. Hike the Ridge Trail to enjoy geologic wonders, plants, and wildlife. Attend living history demonstrations and talks and be sure to visit with our amazing ranch animals!',
    fullName: 'Pipe Spring National Monument',
    image: {
      credit: 'NPS Photo/Kait Thomas',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C865B7C-1DD8-B71B-0BC81C6B55603669.jpg',
    },
    latitude: '36.86282666',
    longitude: '-112.7398567',
    parkCode: 'pisp',
  },
  poch: {
    description:
      "On the evening of July 17, 1944, residents in the San Francisco east bay area were jolted awake by a massive explosion that cracked windows and lit up the night sky. At Port Chicago Naval Magazine, 320 men were instantly killed when two ships being loaded with ammunition for the Pacific theater troops blew up. It was WWII's worst home front disaster.",
    fullName: 'Port Chicago Naval Magazine National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A0454-1DD8-B71B-0B7C42BC0D75A36F.jpg',
    },
    latitude: '38.05685472',
    longitude: '-122.0301603',
    parkCode: 'poch',
  },
  poex: {
    description:
      'It is hard to believe that young men once rode horses to carry mail from Missouri to California in the unprecedented time of only 10 days. This relay system along the Pony Express National Historic Trail in eight states was the most direct and practical means of east-west communications before the telegraph.',
    fullName: 'Pony Express National Historic Trail',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DBDE9-1DD8-B71B-0B1F370DE4F54140.jpg',
    },
    latitude: '42.2365761128',
    longitude: '-109.266148417',
    parkCode: 'poex',
  },
  pohe: {
    description:
      'Over thousands of years, the Potomac River wound its way through layers of rock. Carving limestone cliffs, roaring falls, and serene winding bends, these waters created a landscape and shaped a nation. Today, the Potomac River corridor is rich in both history and recreation. Offering a chance to both explore your heritage and choose your adventure along the way. Start your journey below!',
    fullName: 'Potomac Heritage National Scenic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C836951-1DD8-B71B-0BC4219B01CD33A3.jpg',
    },
    latitude: '39.15060133',
    longitude: '-77.52301085',
    parkCode: 'pohe',
  },
  popo: {
    description:
      'Now a nearly forgotten culture, Poverty Point at its peak 3,000 years ago was part of an enormous trading network that stretched for hundreds of miles across the continent. It was - and is - also an engineering marvel, the product of five million hours of labor. Explore the culture of a highly sophisticated people who left behind one of North America’s most important archeological sites.',
    fullName: 'Poverty Point National Monument',
    image: {
      credit: 'Bart Everson',
      url: 'https://www.nps.gov/common/uploads/structured_data/093C6AE3-1DD8-B71B-0BF4825496F87868.jpg',
    },
    latitude: '32.6424361',
    longitude: '-91.40829834',
    parkCode: 'popo',
  },
  pore: {
    description:
      'From its thunderous ocean breakers crashing against rocky headlands and expansive sand beaches to its open grasslands, brushy hillsides, and forested ridges, Point Reyes offers visitors over 1500 species of plants and animals to discover. Home to several cultures over thousands of years, the Seashore preserves a tapestry of stories and interactions of people. Point Reyes awaits your exploration.',
    fullName: 'Point Reyes National Seashore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/4A1A8835-9A7B-6E5C-B6CE0D4BDCFDB2CB.jpg',
    },
    latitude: '38.05511241',
    longitude: '-122.8797804',
    parkCode: 'pore',
  },
  prsf: {
    description:
      'For 218 years, the Presidio served as an army post for three nations. World and local events, from military campaigns to World Fairs and earthquakes, left their mark. Come enjoy the history and the natural beauty of the Presidio. Explore centuries of architecture. Reflect in a national cemetery. Walk along an historic airfield, through forests or to beaches, and admire spectacular vistas.',
    fullName: 'Presidio of San Francisco',
    image: {
      credit: 'NPS photo/Will Elder',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80243D-1DD8-B71B-0B485E9DA8C86784.jpg',
    },
    latitude: '37.797',
    longitude: '-122.4671',
    parkCode: 'prsf',
  },
  prwi: {
    description:
      "Prince William Forest Park is an oasis, a respite of quiet and calm. In 1936, Chopawamsic Recreation Area opened its gates to house children's 'relief' camps during the Great Depression. Renamed Prince William Forest Park in 1948, these fragrant woods and trickling streams have welcomed generations of campers, hikers, bikers and nature lovers. Discover Northern Virginia's best kept secret!",
    fullName: 'Prince William Forest Park',
    image: {
      credit: 'NPS Photo/Cecilia Lynch',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82646F-1DD8-B71B-0BBBC3BB74314991.jpg',
    },
    latitude: '38.58589108',
    longitude: '-77.38910997',
    parkCode: 'prwi',
  },
  puhe: {
    description:
      "How many places in America can you walk in the footsteps of a king? Where else has a stranded sailor risen up to become a great chief over an entire island? Where else can you experience the culminating event of a people, foretold from centuries past? Where else can you stand on a beach and watch as sharks pass over a submerged temple? Experience all this and much more – only at Pu'ukoholā Heiau!",
    fullName: 'Puʻukoholā Heiau National Historic Site',
    image: {
      credit: 'NPS Photo / M. Tadio',
      url: 'https://www.nps.gov/common/uploads/structured_data/EB3BCC7A-CB39-FD44-4E6392881F5CC412.jpg',
    },
    latitude: '20.02772186',
    longitude: '-155.8211629',
    parkCode: 'puhe',
  },
  puho: {
    description:
      'Imagine you had just broken the sacred laws, the kapu, and the only punishment was death. Your only chance of survival is to elude your pursuers and reach the Puʻuhonua, a place of refuge. The Puʻuhonua protected the kapu breaker, defeated warriors, as well as civilians during the time of battle. No physical harm could come to those who reached the boundaries of the Puʻuhonua.',
    fullName: 'Puʻuhonua o Hōnaunau National Historical Park',
    image: {
      credit: 'NPS / Chisholm',
      url: 'https://www.nps.gov/common/uploads/structured_data/B9D5C440-9B40-6C05-5FCF4EFB33F1FD16.jpg',
    },
    latitude: '19.41268627',
    longitude: '-155.9008789',
    parkCode: 'puho',
  },
  pull: {
    description:
      'In a growing Chicago neighborhood, diverse people and stories intertwined. All were seeking opportunity. Some succeeded. Others were limited—by race, gender, or economic status. Their stories came together in Pullman, a planned industrial community famed for its urban design and architecture.',
    fullName: 'Pullman National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/20E409DD-D017-0B84-52AEE57620BCD240.jpg',
    },
    latitude: '41.69429163',
    longitude: '-87.60873824',
    parkCode: 'pull',
  },
  rabr: {
    description:
      "Rainbow Bridge is one of the world's largest known natural bridges. The span has undoubtedly inspired people throughout time--from the neighboring American Indian tribes who consider Rainbow Bridge sacred, to the 85,000 people from around the world who visit it each year. Please visit Rainbow Bridge in a spirit that honors and respects the cultures to whom it is sacred.",
    fullName: 'Rainbow Bridge National Monument',
    image: {
      credit: 'NPS Photo / Scott Dowd',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F2C6F-1DD8-B71B-0B3A38DBC8161E3E.jpg',
    },
    latitude: '36.9943264317',
    longitude: '-111.491484759',
    parkCode: 'rabr',
  },
  redw: {
    description:
      'Most people know Redwood as home to the tallest trees on Earth. But the Parks also protect vast prairies, oak woodlands, wild rivers, and 40 miles of rugged coastline. People have lived in this verdant landscape since time immemorial. Together, the National Park Service and California State Parks are managing and restoring these lands for the inspiration, enjoyment, and education of all.',
    fullName: 'Redwood National and State Parks',
    image: {
      credit: 'NPS Photo / Steve Olson',
      url: 'https://www.nps.gov/common/uploads/structured_data/CD69DD56-E050-4F4E-DDF622317D38250E.jpg',
    },
    latitude: '41.37237268',
    longitude: '-124.0318129',
    parkCode: 'redw',
  },
  reer: {
    description:
      'The Reconstruction era,1861-1900 the historic period in which the United States grappled with the question of how to integrate millions of newly freed African Americans into social, political,economic, and labor systems, was a time of significant transformation. The people, places, and events in Beaufort County, South Carolina, reflect on the most important issues of this tumultuous time period.',
    fullName: 'Reconstruction Era National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/C1E96A3D-D248-AD79-ABDA8E7BE3A38597.jpg',
    },
    latitude: '32.3868598938',
    longitude: '-80.6511077881',
    parkCode: 'reer',
  },
  rich: {
    description:
      'The center of Confederate manufacturing fueled a modern war, one of the South’s largest hospitals gave care to the sick and wounded, and armies battled on open fields and in miles of defensive earthworks. From 1861 to 1865, Richmond’s fate would determine America’s future.',
    fullName: 'Richmond National Battlefield Park',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/1C9115CA-B4D2-FFC6-7F6EA4ED3A0E33B4.jpg',
    },
    latitude: '37.48774472',
    longitude: '-77.29107785',
    parkCode: 'rich',
  },
  rigr: {
    description:
      'For 196 miles, this free-flowing stretch of the Rio winds its way through desert expanses and stunning canyons of stratified rock. For the well prepared, an extended float trip provides opportunities to explore the most remote corner of Texas and experience the ultimate in solitude, self-reliance, and immersion in natural soundscapes.',
    fullName: 'Rio Grande Wild & Scenic River',
    image: {
      credit: 'NPS / G. Fisseler',
      url: 'https://www.nps.gov/common/uploads/structured_data/7F2119C6-9098-7131-FCBAC74787E4E2DB.jpg',
    },
    latitude: '29.52743158',
    longitude: '-102.5979169',
    parkCode: 'rigr',
  },
  rira: {
    description:
      'River Raisin National Battlefield Park preserves, commemorates, and interprets the January 1813 battles of the War of 1812 and their aftermath in Monroe and Wayne counties in SE Michigan. The Battle resulted in the greatest victory for Tecumseh’s American Indian confederation and the greatest defeat for the U.S. The resulting rally cry “Remember the Raisin” spurred support for the rest of the war.',
    fullName: 'River Raisin National Battlefield Park',
    image: {
      credit: 'Painting by Tim Kurtz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C380D-1DD8-B71B-0BB6B63A283B9B55.jpg',
    },
    latitude: '41.91291085',
    longitude: '-83.37620464',
    parkCode: 'rira',
  },
  roca: {
    description:
      'For many years, Franklin D. Roosevelt summered on Campobello Island. As an adult, he shared with his family the same active pursuits he enjoyed on the island as child. Although he visited less frequently after contracting polio, Campobello remained important to FDR. Today Roosevelt Campobello International Park serves as a memorial to FDR and a symbol of cooperation between the U.S. and Canada.',
    fullName: 'Roosevelt Campobello International Park',
    image: {
      credit: 'Parks Canada Photo / Harold Bailey',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87DAB6-1DD8-B71B-0BEB25E5636E1E5F.jpg',
    },
    latitude: '44.8736',
    longitude: '-66.9621',
    parkCode: 'roca',
  },
  rocr: {
    description:
      "Rock Creek Park is truly a gem in our nation's capital. This 1,754 acre city park was officially authorized in 1890, making it the third national park to be designated by the federal government. It offers visitors the opportunity to escape the bustle of the city and find a peaceful refuge, recreation, fresh air, majestic trees, wild animals, and thousands of years of human history.",
    fullName: 'Rock Creek Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/5578822B-0F57-D3E7-A49D70F3D88C1509.jpg',
    },
    latitude: '38.95125063',
    longitude: '-77.05002838',
    parkCode: 'rocr',
  },
  romo: {
    description:
      "Rocky Mountain National Park's 415 square miles (265,807 acres) encompasses a spectacular range of mountain environments. From meadows found in the montane life zone to the glistening lakes in the subalpine zone and to the mountain peaks located in the alpine zone, there is something for everyone to discover. Along the way explore over 300 miles of hiking trails and incredible wildlife viewing.",
    fullName: 'Rocky Mountain National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/2BCDF88A-BEF3-0AF9-416EA73CFF273DD9.jpg',
    },
    latitude: '40.3556924',
    longitude: '-105.6972879',
    parkCode: 'romo',
  },
  rori: {
    description:
      'Explore and honor the efforts and sacrifices of American civilians on the World War II home front. Find out how they lived, worked and got along. Many faces, many stories, many truths weave a complex tapestry of myths and realities from this time of opportunity and loss.',
    fullName: 'Rosie the Riveter WWII Home Front National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79DE6E-1DD8-B71B-0BFD000DC71E6031.jpg',
    },
    latitude: '37.90999027',
    longitude: '-122.360156',
    parkCode: 'rori',
  },
  rowi: {
    description:
      'Roger Williams National Memorial commemorates the life of the founder of Rhode Island and a champion of the ideal of religious freedom. Williams, banished from Massachusetts for his beliefs, founded Providence in 1636. This colony served as a refuge where all could come to worship as their conscience dictated without interference from the state.',
    fullName: 'Roger Williams National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B5DA9-1DD8-B71B-0B14F6F073E4117B.jpg',
    },
    latitude: '41.8298955',
    longitude: '-71.41056665',
    parkCode: 'rowi',
  },
  ruca: {
    description:
      'Russell Cave is an archeological site with one of the most complete records of prehistoric cultures in the Southeast. In the 1950s, archeologists uncovered a large quantity of artifacts representing over 10,000 years of use in a single place. Today, Russell Cave National Monument helps bring to light many cultural developments of phenomenal human journeys.',
    fullName: 'Russell Cave National Monument',
    image: {
      credit: 'NPS Photo / Mary Dawson',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8726D8-1DD8-B71B-0BD90F30D72A98BF.jpg',
    },
    latitude: '34.97402063',
    longitude: '-85.81560314',
    parkCode: 'ruca',
  },
  saan: {
    description:
      'Welcome to San Antonio Missions, a National Park Service site and the only UNESCO World Heritage Site in Texas. After 10,000 years, the people of South Texas were faced with drought, European diseases, and colonization. In the early 1700s, many Native people of South Texas foreswore their traditional life to become Spanish, accepting a new religion and agrarian lifestyle in hopes of survival.',
    fullName: 'San Antonio Missions National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DAC12-1DD8-B71B-0B52A18E18ADF8B7.jpg',
    },
    latitude: '29.31262089',
    longitude: '-98.4289522',
    parkCode: 'saan',
  },
  sacn: {
    description:
      'Grab your paddle and your longing for adventure and head to the St. Croix and Namekagon rivers! Together they form the St. Croix National Scenic Riverway, offering over 200 miles of clean water that glides and rushes through a forested landscape. Paddle, boat, fish, and camp among this wild and scenic beauty. Hiking and historic towns also beckon.',
    fullName: 'Saint Croix National Scenic Riverway',
    image: {
      credit: 'NPS Photo / Konopacz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82D82E-1DD8-B71B-0BA50602B2B786DD.jpg',
    },
    latitude: '45.70019235',
    longitude: '-92.36126685',
    parkCode: 'sacn',
  },
  sacr: {
    description:
      "The winter of 1604-1605 on Saint Croix Island was a cruel one for Pierre Dugua's French expedition. Iced in by freezing temperatures and cut off from fresh water and game, 35 of 79 men died. As spring arrived and native people traded game for bread, the health of those remaining improved. Although the expedition moved on by summer, the beginning of French presence in North America had begun.",
    fullName: 'Saint Croix Island International Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B31B6-1DD8-B71B-0BC1CE33970A8EAD.jpg',
    },
    latitude: '45.12858838',
    longitude: '-67.13363651',
    parkCode: 'sacr',
  },
  safe: {
    description:
      'You can almost hear the whoops and cries of "All\'s set!" as trail hands hitched their oxen to freight wagons carrying cargo between western Missouri and Santa Fe, New Mexico. Follow the Santa Fe National Historic Trail through five states and you\'ll find adventure and evidence of past travelers who made this remarkable trip before you!',
    fullName: 'Santa Fe National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/5580C726-C882-0DDF-0171D443948EB5F4.jpg',
    },
    latitude: '37.7276522226',
    longitude: '-99.921969227',
    parkCode: 'safe',
  },
  safr: {
    description:
      "Located in the Fisherman's Wharf neighborhood, San Francisco Maritime National Historical Park offers visitors the sights, sounds, smells and stories of Pacific Coast maritime history. The Park includes a magnificent fleet of historic ships, a Visitor Center, Maritime Museum, Maritime Research Center, and Aquatic Park Historic District.",
    fullName: 'San Francisco Maritime National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B8245-1DD8-B71B-0B3598B410FDBACE.jpg',
    },
    latitude: '37.81005871',
    longitude: '-122.4244415',
    parkCode: 'safr',
  },
  saga: {
    description:
      "Augustus Saint-Gaudens, one of America's greatest sculptors lived here seasonally starting in 1885, and year-round 1900 until his death in 1907. Experience the park grounds, where several of Saint-Gaudens bronze sculptures are on view throughout the year, & trails wind through the woods. Learn more about the park.",
    fullName: 'Saint-Gaudens National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C856833-1DD8-B71B-0BAEFC61DA10D0B6.jpg',
    },
    latitude: '43.4997238',
    longitude: '-72.37333969',
    parkCode: 'saga',
  },
  sagu: {
    description:
      "Tucson, Arizona is home to the nation's largest cacti. The giant saguaro is the universal symbol of the American west. These majestic plants, found only in a small portion of the United States, are protected by Saguaro National Park, to the east and west of the modern city of Tucson. Here you have a chance to see these enormous cacti, silhouetted by the beauty of a magnificent desert sunset.",
    fullName: 'Saguaro National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/5CB8B2F6-01B7-9A50-73702A355E4136B8.jpg',
    },
    latitude: '32.20909636',
    longitude: '-110.7574974',
    parkCode: 'sagu',
  },
  sahi: {
    description:
      'Sagamore Hill was the home of Theodore Roosevelt, 26th President of the United States, from 1885 until his death in 1919. During Roosevelt\'s time in office, his "Summer White House" was the focus of international attention. Explore 83 acres of natural surroundings and historic buildings and become inspired by the legacy of one of America\'s most popular presidents.',
    fullName: 'Sagamore Hill National Historic Site',
    image: {
      credit: 'NPS/Audrey Tiernan',
      url: 'https://www.nps.gov/common/uploads/structured_data/ECB04F63-907D-CA88-695806E416BB05D8.jpg',
    },
    latitude: '40.88579128',
    longitude: '-73.49686438',
    parkCode: 'sahi',
  },
  sair: {
    description:
      "In the 1600's, on the banks of the Saugus River, something extraordinary happened! Explore the place where European iron makers brought their special skills to a young Massachusetts colony. Saugus Iron Works is a twelve-acre National Historic Site that includes working waterwheels, forges, mills, a historic 17th century home, and a lush river basin.",
    fullName: 'Saugus Iron Works National Historic Site',
    image: {
      credit: 'NPS Photo / Don Woods',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C852E9B-1DD8-B71B-0BA7396E0D076BDB.jpg',
    },
    latitude: '42.46830664',
    longitude: '-71.0076953',
    parkCode: 'sair',
  },
  sajh: {
    description:
      'San Juan Island is well known for splendid vistas, saltwater shore, quiet woodlands, orca whales and one of the last remaining native prairies in the Puget Sound/Northern Straits region. But it was also here in 1859 that the United States and Great Britain nearly went to war over possession of the island, the crisis ignited by the death of a pig.',
    fullName: 'San Juan Island National Historical Park',
    image: {
      credit: 'NPS Photo/Gary Tarleton',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81CFC5-1DD8-B71B-0B16B28795ED1CA0.jpg',
    },
    latitude: '48.51241933',
    longitude: '-123.0610277',
    parkCode: 'sajh',
  },
  saju: {
    description:
      'San Juan National Historic Site preserves stories of great ambition and aspirations. Countries fought for control of this tiny yet strategic island for centuries. Generations of soldiers have lived and worked within the forts. Visitors today are as inspired by these stories as they are by the beauty of the architecture and the ingenuity of design and engineering of this World Heritage Site.',
    fullName: 'San Juan National Historic Site',
    image: {
      credit: 'Courtesy: Aerofoto',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7AF5C5-1DD8-B71B-0B40514DB1A21024.jpg',
    },
    latitude: '18.46873857',
    longitude: '-66.11848623',
    parkCode: 'saju',
  },
  sama: {
    description:
      "Established on March 17, 1938 as the first National Historic Site in the United States, Salem Maritime National Historic Site consists of nine acres of land and twelve historic structures along the Salem waterfront, as well as a downtown visitor center. Located in the urban setting of Salem, the park preserves and interprets over 600 years of New England's maritime history and global connections.",
    fullName: 'Salem Maritime National Historic Site',
    image: {
      credit: 'NPS Photo / Robert Grant',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C852B17-1DD8-B71B-0BB86A151B7BE502.jpg',
    },
    latitude: '42.52024529',
    longitude: '-70.88640867',
    parkCode: 'sama',
  },
  samo: {
    description:
      'The Santa Monica Mountains offer easy access to surprisingly wild places. Experience the famous beaches of Malibu or explore more than 500 miles of trails. The park abounds with historical and cultural sites, from old movie ranches to Native American centers. What will you and your family discover?',
    fullName: 'Santa Monica Mountains National Recreation Area',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/1562B20E-ECB2-8C39-845FD157BDF14D22.jpg',
    },
    latitude: '34.09777606',
    longitude: '-118.7708619',
    parkCode: 'samo',
  },
  sand: {
    description:
      'The Sand Creek Massacre: profound, symbolic, spiritual, controversial, a site unlike any other in America. As 675 cavalrymen came around a prairie bend, the camps of Chiefs Black Kettle, White Antelope, and Left Hand lay in the valley before them. Chaotic, horrific, tumultuous, and bloody, the events of November 29, 1864 changed the course of history.',
    fullName: 'Sand Creek Massacre National Historic Site',
    image: {
      credit: 'NPS Photo/Shawn G. Gillette',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C841052-1DD8-B71B-0B0333C9B2FBE609.jpg',
    },
    latitude: '38.56414189',
    longitude: '-102.5169542',
    parkCode: 'sand',
  },
  sapa: {
    description:
      "Since 1665, Saint Paul's Church played a vital role in the colonial life of Eastchester, 20 miles north of New York City. Townspeople voted at the nearby Village Green; local militia drilled outside its doors. But the American Revolution changed everything. American, British and Hessian troops tore down the old wooden meetinghouse for firewood and used the unfinished stone chapel as a hospital.",
    fullName: "Saint Paul's Church National Historic Site",
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C854A64-1DD8-B71B-0B52ECD0B7FF74F2.jpg',
    },
    latitude: '40.89283511',
    longitude: '-73.82577276',
    parkCode: 'sapa',
  },
  sapu: {
    description:
      'Tucked away in the middle of New Mexico you’ll find Salinas Pueblo Missions National Monument. Its three distinct sites offer a glimpse into a unique time in history—a time entrenched with cultural borrowing, conflict and struggles. These sites continue to stand as reminders of the Spanish and Pueblo peoples’ early encounters and prompt exploration of today’s interactions among different people.',
    fullName: 'Salinas Pueblo Missions National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C860054-1DD8-B71B-0BE09BE0AD611F0B.jpg',
    },
    latitude: '34.35423203',
    longitude: '-106.2050309',
    parkCode: 'sapu',
  },
  sara: {
    description:
      'Here, in 1777, during the American War for Independence, American troops battled and beat a British invasion force, marking the first time in world history that a British Army ever surrendered. This crucial victory secured essential foreign recognition and support, instigated world-wide wars, affirmed United States independence, and changed the face of the world.',
    fullName: 'Saratoga National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85622B-1DD8-B71B-0B0BF18D5DE04D82.jpg',
    },
    latitude: '42.99522612',
    longitude: '-73.63386108',
    parkCode: 'sara',
  },
  sari: {
    description:
      'Salt River Bay National Historical Park and Ecological Preserve uniquely documents the human and natural Caribbean world from the earliest indigenous settlements in the central Caribbean to their clash with seven different colonial European powers to the present day.',
    fullName: 'Salt River Bay National Historical Park and Ecological Preserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/D0B758DC-1DD8-B71B-0B463C640F211F0A.jpg',
    },
    latitude: '17.77908602',
    longitude: '-64.75519348',
    parkCode: 'sari',
  },
  scbl: {
    description:
      'Towering 800 feet above the North Platte River, Scotts Bluff has served as a landmark for peoples from Native Americans to emigrants on the Oregon, California and Mormon Trails to modern travelers. Rich with geological and paleontological history as well as human history, there is much to discover while exploring the 3,000 acres of Scotts Bluff National Monument.',
    fullName: 'Scotts Bluff National Monument',
    image: {
      credit: 'NPS Photo / Wesley Gant',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7AB9C7-1DD8-B71B-0BE8539018DE86B3.jpg',
    },
    latitude: '41.83464193',
    longitude: '-103.7071351',
    parkCode: 'scbl',
  },
  seki: {
    description:
      'Huge mountains, rugged foothills, deep canyons, vast caverns, and the world’s largest trees exemplify the diversity of landscapes, life, and beauty here. Explore these pages to learn about the plants and animals here and the threats they face. Our ancient giant sequoias may seem invincible, but they, too are vulnerable.',
    fullName: 'Sequoia & Kings Canyon National Parks',
    image: {
      credit: 'NPS/Rick Cain',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A250B-1DD8-B71B-0BCF61A89A8B2970.jpg',
    },
    latitude: '36.71277299',
    longitude: '-118.587429',
    parkCode: 'seki',
  },
  semo: {
    description:
      '‏‏‎Established by Congress in 1996, the Selma to Montgomery National Historic Trail commemorates the people, events, and route of the 1965 Voting Rights March in Alabama. Led by Dr. Martin Luther King Jr., Black and White non-violent supporters fought for the right to vote in Central Alabama. Today, you can connect with this history and trace the events of these marches along the 54-mile trail. ‏',
    fullName: 'Selma To Montgomery National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C878A7E-1DD8-B71B-0B5F97E4D222FACF.jpg',
    },
    latitude: '32.27082092',
    longitude: '-86.72823702',
    parkCode: 'semo',
  },
  shen: {
    description:
      "Just 75 miles from the bustle of Washington, D.C., Shenandoah National Park is a land bursting with cascading waterfalls, spectacular vistas, fields of wildflowers, and quiet wooded hollows. With over 200,000 acres of protected lands that are haven to deer, songbirds, and black bear, there's so much to explore...and your journey begins right here!",
    fullName: 'Shenandoah National Park',
    image: {
      credit: 'NPS Photo / Neal Lewis',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80B539-1DD8-B71B-0BEAAA4AC31E7D5B.jpg',
    },
    latitude: '38.49236644',
    longitude: '-78.46907715',
    parkCode: 'shen',
  },
  shil: {
    description:
      "Visit the sites of the most epic struggle in the Western Theater of the Civil War. Nearly 110,000 American troops clashed in a bloody contest that resulted in 23,746 casualties; more casualties than in all of America's previous wars combined. Explore both the Shiloh and Corinth battlefields to discover the impact of this struggle on the soldiers and on the nation.",
    fullName: 'Shiloh National Military Park',
    image: {
      credit: 'NPS Photo/Mekow',
      url: 'https://www.nps.gov/common/uploads/structured_data/C17670A9-D87F-BF06-7D5D3B3C515AAFDF.jpg',
    },
    latitude: '35.13850907',
    longitude: '-88.3421072',
    parkCode: 'shil',
  },
  sitk: {
    description:
      'On an island amid towering spruce and hemlock, Sitka National Historical Park preserves the site of a battle between invading Russian traders and indigenous Kiks.ádi Tlingit. Totem poles from Tlingit and Haida areas line the park’s scenic coastal trail, and the restored Russian Bishop’s House is a rare reminder of Russia’s colonial legacy in North America.',
    fullName: 'Sitka National Historical Park',
    image: {
      credit: 'NPS photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7A873D-1DD8-B71B-0B8AD5C703A13270.jpg',
    },
    latitude: '57.04718173',
    longitude: '-135.3156876',
    parkCode: 'sitk',
  },
  slbe: {
    description:
      'Miles of sand beach, bluffs that tower 450’ above Lake Michigan, lush forests, clear inland lakes, unique flora and fauna make up the natural world of Sleeping Bear Dunes. High dunes afford spectacular views across the lake. An island lighthouse, US Life-Saving Service stations, coastal villages, and picturesque farmsteads reflect the park’s rich maritime, agricultural, and recreational history.',
    fullName: 'Sleeping Bear Dunes National Lakeshore',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/6039A7C7-076A-897E-9E33B512C1067A09.jpg',
    },
    latitude: '44.92844962',
    longitude: '-86.02706591',
    parkCode: 'slbe',
  },
  spar: {
    description:
      "For nearly two centuries, the U.S. Armed Forces and American industry looked to Springfield Armory for innovative engineering and superior firearms. Springfield Armory National Historic Site commemorates the critical role of the nation’s first armory by preserving and interpreting the world's largest historic US military small arms collection, along with historic archives, buildings, and landscape",
    fullName: 'Springfield Armory National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/D351A3D5-1DD8-B71B-0B9E169EA16305E9.jpg',
    },
    latitude: '42.1086368',
    longitude: '-72.57967415',
    parkCode: 'spar',
  },
  stea: {
    description:
      "You'd feel heat from the firebox, smell hot steam and oil; you'd hear the whistle, feel the ground vibrate, and watch as one-ton drive rods turned steel wheels. Remember the sound of \"chuff-chuff\" from the smokestack? Today, you can learn the history of steam railroad transportation, and the people who built, repaired and rode, as we work to preserve a special era in America's industrial history!",
    fullName: 'Steamtown National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/602A3D89-EDEA-FD1D-5BBB631A9E78AD13.jpg',
    },
    latitude: '41.40757521',
    longitude: '-75.67037255',
    parkCode: 'stea',
  },
  stge: {
    description:
      'Established by 1750, Ste. Geneviève was the first permanent European settlement in Missouri. Early French Canadian settlers were drawn here by the rich agricultural land known as Le Grand Champ (the Big Field). After the flood of 1785, the town relocated to its present location on higher ground approximately three miles to the northwest of its original site.',
    fullName: 'Ste. Geneviève National Historical Park',
    image: {
      credit: 'NPS/Ste. Geneviève National Historical Park',
      url: 'https://www.nps.gov/common/uploads/structured_data/942AC884-B428-2669-50A1417E5BFF404F.jpg',
    },
    latitude: '37.9792171421179',
    longitude: '-90.0432157516479',
    parkCode: 'stge',
  },
  stli: {
    description:
      '"The Statue of Liberty Enlightening the World" was a gift of friendship from the people of France to the United States and is recognized as a universal symbol of freedom and democracy. The Statue of Liberty was dedicated on October 28, 1886. It was designated as a National Monument in 1924. Employees of the National Park Service have been caring for the colossal copper statue since 1933.',
    fullName: 'Statue Of Liberty National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85432E-1DD8-B71B-0B678722109EDDF3.jpg',
    },
    latitude: '40.6898',
    longitude: '-74.0451',
    parkCode: 'stli',
  },
  stri: {
    description:
      'The Battle of Stones River began on the last day of 1862 and was one of the bloodiest conflicts of the Civil War. The battle produced important military and political gains for the Union, and it changed forever the people who lived and fought here.',
    fullName: 'Stones River National Battlefield',
    image: {
      credit: 'NPS Photo / Buddy Secor',
      url: 'https://www.nps.gov/common/uploads/structured_data/7433C5A9-1DD8-B71B-0B8D22CB43F53B7C.jpg',
    },
    latitude: '35.87608652',
    longitude: '-86.43078399',
    parkCode: 'stri',
  },
  stsp: {
    description:
      'For three years the young United States was embroiled in the War of 1812 and the Chesapeake Bay region felt the brunt of it, choked by shipping blockades and ravaged by enemy raids. Through sites and landscapes in Virginia, the District of Columbia, and Maryland, the Trail tells the stories of the events, people, and places that led to the birth of the U.S. national anthem.',
    fullName: 'Star-Spangled Banner National Historic Trail',
    image: {
      credit: 'Pride of Baltimore, Inc.',
      url: 'https://www.nps.gov/common/uploads/structured_data/F108B920-E383-8D58-961E7B7E0C438B74.jpg',
    },
    latitude: '39.2872505188',
    longitude: '-76.6034317017',
    parkCode: 'stsp',
  },
  sucr: {
    description:
      'The lava flow lies on the land like a dream, a wonderland of rock. A thousand years ago the ground was torn open and lava erupted into the sky, forever changing the landscape and the lives of the people who lived here. A thousand years later, trees and flowers grow among the rocks, and people visit the lava flow to see and remember the most recent volcanic eruption in Arizona.',
    fullName: 'Sunset Crater Volcano National Monument',
    image: {
      credit: 'NPS Photo / Elliot Schultz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E279C-1DD8-B71B-0BBF86870A971E2B.jpg',
    },
    latitude: '35.37114323',
    longitude: '-111.510376',
    parkCode: 'sucr',
  },
  tapr: {
    description:
      'Tallgrass prairie once covered 170 million acres of North America, but within a generation most of it had been transformed into farmland. Today less than 4% remains intact, mostly in the Kansas Flint Hills. Established on November 12, 1996, the preserve protects a nationally significant remnant of the once vast tallgrass prairie ecosystem. Here the tallgrass makes its last stand.',
    fullName: 'Tallgrass Prairie National Preserve',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C799F41-1DD8-B71B-0BE449FCE70F95CA.jpg',
    },
    latitude: '38.44023613',
    longitude: '-96.5670822',
    parkCode: 'tapr',
  },
  thco: {
    description:
      'In 1825, America was still a new nation, just forming its own unique identity and traditions. Thomas Cole invented a new style of art, one that Americans could call their own. His landscape paintings launched the art movement known as the Hudson River School. His groundbreaking achievements took place here in Catskill, New York -- in the "peaceful shades" of his beloved home, Cedar Grove.',
    fullName: 'Thomas Cole National Historic Site',
    image: {
      credit: 'Photo by Escape Brooklyn',
      url: 'https://www.nps.gov/common/uploads/structured_data/2D840ABD-9893-BA8E-49B75545C9AD5875.jpg',
    },
    latitude: '42.22570607',
    longitude: '-73.86154864',
    parkCode: 'thco',
  },
  this: {
    description:
      'In the 1930s, landscape architects transformed Mason’s Island from neglected, overgrown farmland into Theodore Roosevelt Island, a memorial to America’s 26th president. They conceived a “real forest” designed to mimic the natural forest that once covered the island. Today miles of trails through wooded uplands and swampy bottomlands honor the legacy of a great outdoorsman and conservationist.',
    fullName: 'Theodore Roosevelt Island',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85E097-1DD8-B71B-0BA63E687BBA913E.jpg',
    },
    latitude: '38.89584162',
    longitude: '-77.06241918',
    parkCode: 'this',
  },
  thje: {
    description:
      'Author of the Declaration of Independence, statesman and visionary for the founding of a nation.',
    fullName: 'Thomas Jefferson Memorial',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C822990-1DD8-B71B-0BE050EA15A04568.gif',
    },
    latitude: '38.88101431',
    longitude: '-77.03632572',
    parkCode: 'thje',
  },
  thko: {
    description:
      'Visit the house where wounded Polish freedom fighter Thaddeus Kosciuszko lived and hear how this brilliant military engineer designed successful fortifications during the American Revolution. See the room where he received notable visitors such as Chief Little Turtle and Thomas Jefferson.',
    fullName: 'Thaddeus Kosciuszko National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7ADDD2-1DD8-B71B-0B128C61D6236420.jpg',
    },
    latitude: '39.94345312',
    longitude: '-75.14732045',
    parkCode: 'thko',
  },
  thrb: {
    description:
      'This is the boyhood home of the first U.S. president to be born in New York City. Raised in a townhouse at 28 E. 20th St., Theodore Roosevelt would grow up to be our 26th President and become immortalized on Mount Rushmore. However, he started life as a sickly yet bright boy who exercised to improve his health and began a lifelong passion for the "strenuous life."',
    fullName: 'Theodore Roosevelt Birthplace National Historic Site',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C855E63-1DD8-B71B-0B4BD6B7AEC50FF4.jpg',
    },
    latitude: '40.7386469',
    longitude: '-73.98903703',
    parkCode: 'thrb',
  },
  thri: {
    description:
      "As president, Theodore Roosevelt created protections for ordinary citizens, began regulation of big business, and made the US a major force in international affairs. Yet one of the most important presidencies in America's history nearly didn't happen. See the place where a brief, emotional, and improvised ceremony in Buffalo, NY brought TR into office, and forever altered the nation.",
    fullName: 'Theodore Roosevelt Inaugural National Historic Site',
    image: {
      credit: 'Mark Lozo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7BD805-1DD8-B71B-0B1E51DD10FB6FAA.jpg',
    },
    latitude: '42.90146781',
    longitude: '-78.87248411',
    parkCode: 'thri',
  },
  thro: {
    description:
      'When Theodore Roosevelt came to Dakota Territory to hunt bison in 1883, he was a skinny, young, spectacled dude from New York. He could not have imagined how his adventure in this remote and unfamiliar place would forever alter the course of the nation. The rugged landscape and strenuous life that TR experienced here would help shape a conservation policy that we still benefit from today.',
    fullName: 'Theodore Roosevelt National Park',
    image: {
      credit: 'NPS Photo / Mark Meyers',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C793AD5-1DD8-B71B-0B4A3C1BFA5B4C83.jpg',
    },
    latitude: '47.17777274',
    longitude: '-103.4300083',
    parkCode: 'thro',
  },
  thst: {
    description:
      'Choosing revolution, as Thomas Stone and many others eventually did, was not an easy or inevitable decision for most American colonists. The outcome of a war with England was far from certain and regardless of who won, the lives of the colonists would never be the same. With safety, security, family and fortune at stake, courage and personal sacrifice were tested no matter what side was chosen.',
    fullName: 'Thomas Stone National Historic Site',
    image: {
      credit: 'NPS Photo / Stephen Girimont',
      url: 'https://www.nps.gov/common/uploads/structured_data/1045ACA0-BB5B-C428-2272CC5E8E76A87C.jpg',
    },
    latitude: '38.52934443',
    longitude: '-77.037813',
    parkCode: 'thst',
  },
  tica: {
    description:
      'Cave tours are closed for the winter. Tours will be available again mid-May 2022. Hike your way past stunning vistas to explore a hidden underground world. Taste the thrill of caving as you twist and bend to enter beautifully decorated rooms. Learn the science behind formations and hear stories of cave exploration and preservation. Experience and discover as you go – geologic mysteries await.',
    fullName: 'Timpanogos Cave National Monument',
    image: {
      credit: 'NPS/Ryan R Maurer',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C83CDD6-1DD8-B71B-0B2C642E4C17AC62.jpg',
    },
    latitude: '40.44039719',
    longitude: '-111.7093944',
    parkCode: 'tica',
  },
  timu: {
    description:
      'Visit one of the last unspoiled coastal wetlands on the Atlantic Coast. Discover 6,000 years of human history and experience the beauty of salt marshes, coastal dunes, and hardwood hammocks. The Timucuan Preserve includes Fort Caroline and Kingsley Plantation.',
    fullName: 'Timucuan Ecological & Historic Preserve',
    image: {
      credit: 'NPS Photo/Darryl Herring',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7B4D58-1DD8-B71B-0B40B94C4363CBFB.jpg',
    },
    latitude: '30.47251894',
    longitude: '-81.49950104',
    parkCode: 'timu',
  },
  tont: {
    description:
      'The Salado Phenomena, 700 years ago, blended ideas of neighboring Native American cultures to emerge a unique and vibrant society. Tonto National Monument showcases two Salado-style cliff dwellings. Colorful pottery, woven cotton cloth, and other artifacts tell a story of people living and using resources from the northern Sonoran Desert from 1250 to 1450 CE.',
    fullName: 'Tonto National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81D952-1DD8-B71B-0B67D23426B08661.jpg',
    },
    latitude: '33.64842945',
    longitude: '-111.1135627',
    parkCode: 'tont',
  },
  tosy: {
    description:
      'Touro Synagogue, a building of exquisite beauty and design, steeped in history and ideals, and one of the most historically significant Jewish buildings in America, was designated a National Historic Site in 1946. Dedicated in 1763, it still serves an active congregation and each year greets over 30,000 visitors who come to see the magnificent interior and hear its remarkable story.',
    fullName: 'Touro Synagogue National Historic Site',
    image: {
      credit: 'Tourosynagogue.org',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C82D5FA-1DD8-B71B-0B69EBF05C11248B.jpg',
    },
    latitude: '41.4893',
    longitude: '-71.3121',
    parkCode: 'tosy',
  },
  trte: {
    description:
      'Remember and commemorate the survival of the Cherokee people, forcefully removed from their homelands in Georgia, Alabama, and Tennessee to live in Indian Territory, now Oklahoma. They traveled by foot, horse, wagon, or steamboat in 1838-1839.',
    fullName: 'Trail Of Tears National Historic Trail',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E670B-1DD8-B71B-0B25C5CD76BF4A04.jpg',
    },
    latitude: '36.0530021046',
    longitude: '-89.6761041963',
    parkCode: 'trte',
  },
  tuai: {
    description:
      'Before the first African American military pilots became known as the "Red Tails" they wore striped tails as they began their flight training in the Army\'s PT-17 Stearman bi-plane. Their flying adventure started at Moton Field, in Tuskegee, Alabama, where the Army Air Corps conducted a military test to determine if African Americans could be trained to fly combat aircraft.',
    fullName: 'Tuskegee Airmen National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C87CA3F-1DD8-B71B-0B1A6DBC5E5DF262.jpg',
    },
    latitude: '32.45538671',
    longitude: '-85.67983321',
    parkCode: 'tuai',
  },
  tuin: {
    description:
      'In 1881, Booker T. Washington arrived in Alabama and started building Tuskegee Institute both in reputation and literally brick by brick. He recruited the best and the brightest to come and teach here including George Washington Carver who arrived in 1896. Carver’s innovations in agriculture, especially with peanuts, expanded Tuskegee’s standing throughout the country. The story continues….',
    fullName: 'Tuskegee Institute National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C880363-1DD8-B71B-0B19DE390A6D20CD.jpg',
    },
    latitude: '32.42962115',
    longitude: '-85.70488498',
    parkCode: 'tuin',
  },
  tule: {
    description:
      'The Tule Lake National Monument includes both the the Tule Lake Segregation Center, the largest and most controversial of the sites where Japanese Americans were incarcerated during World War II, and Camp Tulelake, which was first a Civilian Conservation Corps camp, then an additional facility to detain Japanese Americans, and finally a prisoner of war camp.',
    fullName: 'Tule Lake National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81F835-1DD8-B71B-0B2F390826C60693.jpg',
    },
    latitude: '41.88727902',
    longitude: '-121.3744818',
    parkCode: 'tule',
  },
  tuma: {
    description:
      'Tumacácori sits at a cultural crossroads in the Santa Cruz River valley. Here O’odham, Yaqui, and Apache people met and mingled with European Jesuit and Franciscan missionaries, settlers, and soldiers, sometimes in conflict and sometimes in cooperation. Follow the timeworn paths and discover stories that connect us to enduring relationships, vibrant cultures, and traditions of long ago.',
    fullName: 'Tumacácori National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79D947-1DD8-B71B-0BD91C826A5B9030.jpg',
    },
    latitude: '31.567824',
    longitude: '-111.051223',
    parkCode: 'tuma',
  },
  tupe: {
    description:
      'In July, 1864, Union forces, including men from the United States Colored Troops, marched into Tupelo, Mississippi. Disorganized Confederate soldiers fought fiercely but could not overpower the federal troops. Neither side could claim a clear victory, but Union troops had succeeded in their main goal: keeping the Confederates away from Union railroads in Tennessee.',
    fullName: 'Tupelo National Battlefield',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C844354-1DD8-B71B-0B1A7DB85F697FC5.jpg',
    },
    latitude: '34.25557705',
    longitude: '-88.73708623',
    parkCode: 'tupe',
  },
  tusk: {
    description:
      'Over the last ~570,000 years, water has transformed the Upper Las Vegas Valley. Tule Springs Fossil Beds National Monument is an urban park that preserves the unique story of this ever-changing ecosystem.',
    fullName: 'Tule Springs Fossil Beds National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85F41B-1DD8-B71B-0B8406CBCA19D911.jpg',
    },
    latitude: '36.3893217',
    longitude: '-115.3202223',
    parkCode: 'tusk',
  },
  tuzi: {
    description:
      'Water flows under and through this landscape, feeding the growth of people and towns. The Verde Valley is watered by snowmelt, summer monsoons, and springs that well up from the ancient sedimentary rocks. In the heart of the valley, a thousand years ago, people began to build a little hilltop pueblo that would grow into one of the largest villages in the area.',
    fullName: 'Tuzigoot National Monument',
    image: {
      credit: 'NPS Photo/Krystina Mucha',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E38AB-1DD8-B71B-0B459BC481F2FBCD.jpg',
    },
    latitude: '34.77296377',
    longitude: '-112.0279069',
    parkCode: 'tuzi',
  },
  ulsg: {
    description:
      'Ulysses S. Grant is known as the victorious Civil War general who saved the Union and the 18th President of the United States. He first met Julia Dent, his future wife, at her family home, named White Haven. From 1854 to 1859 the Dents, Grants and an enslaved African-American workforce lived on the property.',
    fullName: 'Ulysses S Grant National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C827360-1DD8-B71B-0BF9ADC1F4742F80.jpg',
    },
    latitude: '38.55182374',
    longitude: '-90.35169255',
    parkCode: 'ulsg',
  },
  upde: {
    description:
      'Canoe through rapids and quiet pools as the Delaware River winds its way through a valley of swiftly changing scenery or fish amid rolling hills and riverfront villages in one of the finest fishing rivers in the northeastern United States. The clean water of the Delaware, the last major undammed river in the eastern United States, supports a healthy ecosystem and offers tranquility and excitement.',
    fullName: 'Upper Delaware Scenic & Recreational River',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/CCDE00F6-1DD8-B71B-0BF8D6AEEFB16FAC.jpg',
    },
    latitude: '41.66172578',
    longitude: '-75.03861562',
    parkCode: 'upde',
  },
  vafo: {
    description:
      'Valley Forge is the encampment site of the Continental Army during the winter of 1777-1778. The park features 3,500 acres of monuments, meadows, and woodlands commemorating the sacrifices and perseverance of the Revolutionary War generation and honoring the power of people to pull together and overcome adversity during extraordinary times.',
    fullName: 'Valley Forge National Historical Park',
    image: {
      credit: 'NPS Photo / Gregory Purifoy',
      url: 'https://www.nps.gov/common/uploads/structured_data/4745A057-0C77-874C-62AC3C99AF2F2293.jpg',
    },
    latitude: '40.10054985',
    longitude: '-75.44581889',
    parkCode: 'vafo',
  },
  vall: {
    description:
      'About 1.25 million years ago, a spectacular volcanic eruption created the 13-mile wide circular depression now known as the Valles Caldera. The preserve is known for its huge mountain meadows, abundant wildlife, and meandering streams. The area also preserves the homeland of ancestral native peoples and embraces a rich ranching history.',
    fullName: 'Valles Caldera National Preserve',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84ABE7-1DD8-B71B-0BA9D89DC6B7D276.jpg',
    },
    latitude: '35.91682872',
    longitude: '-106.5195724',
    parkCode: 'vall',
  },
  valr: {
    description:
      'At the Pearl Harbor National Memorial, learn about one of the most pivotal moments in US history: the attack on Pearl Harbor, and the subsequent entry of the United States into World War II.',
    fullName: 'Pearl Harbor National Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/6E5D5C03-C701-0F6B-FB7BF0935A817ED0.jpg',
    },
    latitude: '21.3670699388',
    longitude: '-157.938578898',
    parkCode: 'valr',
  },
  vama: {
    description:
      "Built by of one of the first families of wealth in America. Designed by one of the nation's preeminent architects. The Vanderbilt Mansion is a home built expressly for the aristocratic lifestyle.",
    fullName: 'Vanderbilt Mansion National Historic Site',
    image: {
      credit: 'NPS Photo/Bill Urbin',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C810D33-1DD8-B71B-0B857963C3AEC92E.jpg',
    },
    latitude: '41.79697937',
    longitude: '-73.94205557',
    parkCode: 'vama',
  },
  vick: {
    description:
      'To Confederate President Jefferson Davis, Vicksburg was the "nailhead that holds the South\'s two halves together." President Abraham Lincoln remarked "Vicksburg is the key" to victory, and could be the north\'s lifeline into the south. As the federals closed in on the Fortress City, they were met by a ring of forts with over 170 cannon. The resulting battle would determine the war\'s outcome.',
    fullName: 'Vicksburg National Military Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79F947-1DD8-B71B-0B6F394F6E31CAE2.jpg',
    },
    latitude: '32.3621286',
    longitude: '-90.85030186',
    parkCode: 'vick',
  },
  vicr: {
    description:
      'Virgin Islands Coral Reef National Monument includes federal submerged lands within the 3-mile belt off the island of St. John. These waters support a diverse and complex system of coral reefs and other ecosystems such as shoreline mangrove forests and seagrass beds.',
    fullName: 'Virgin Islands Coral Reef National Monument',
    image: {
      credit: 'Susanna Pershern',
      url: 'https://www.nps.gov/common/uploads/structured_data/D67D3D53-1DD8-B71B-0BCC67BD08FD4E6B.jpg',
    },
    latitude: '18.28996918',
    longitude: '-64.70683395',
    parkCode: 'vicr',
  },
  viis: {
    description:
      "Go beyond Virgin Islands National Park's stunning white-sand beaches. Hike to historic plantation sites to learn about a challenging past when sugar and enslaved labor dominated life on the island. Visit the Indigenous Taino's ancient petroglyphs. Snorkel coral reefs to discover hidden marine life. Two-thirds of the island of St. John is national park, making it a unique destination for visitors.",
    fullName: 'Virgin Islands National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/1F0534AF-91EB-443B-41760F790BE42778.jpg',
    },
    latitude: '18.34279656',
    longitude: '-64.74194451',
    parkCode: 'viis',
  },
  vive: {
    description:
      'Honoring the men and women who served in the controversial Vietnam War, the Vietnam Veterans Memorial chronologically lists the names of 58,318 Americans who gave their lives in service to their country.',
    fullName: 'Vietnam Veterans Memorial',
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/B7747C16-EFF0-AE6C-C2CCE4E52D34F1F7.jpg',
    },
    latitude: '38.89096297',
    longitude: '-77.04765735',
    parkCode: 'vive',
  },
  voya: {
    description:
      'With 218,055 acres, Voyageurs National Park is an adventure wonderland all year long full of exposed rock ridges, cliffs, wetlands, forests, streams and lakes. This is a place of transition between land and aquatic ecosystems, between southern boreal and northern hardwood forests, and between wild and developed areas. Whether you are exploring by land, water or ice there is something for everyone.',
    fullName: 'Voyageurs National Park',
    image: {
      credit: 'NPS /Dimse',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8405EF-1DD8-B71B-0B42909E4E77E144.jpg',
    },
    latitude: '48.48370609',
    longitude: '-92.8382913',
    parkCode: 'voya',
  },
  waba: {
    description:
      'On November 27, 1868, Lt. Colonel George Armstrong Custer led the 7th US Cavalry on a surprise dawn attack on a Cheyenne village led by Peace Chief Black Kettle. The event was an example of the tragic clash of cultures that occurred during the Great Plains Wars. It is also a place of remembrance and reflection for those who died here.',
    fullName: 'Washita Battlefield National Historic Site',
    image: {
      credit: 'NPS Photo / Gene Eakins',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84A0E2-1DD8-B71B-0BD431BE8524A232.jpg',
    },
    latitude: '35.62083963',
    longitude: '-99.70445143',
    parkCode: 'waba',
  },
  waca: {
    description:
      'Come gaze across curved canyon walls. Among the remarkable geological formations of the canyon itself, the former homes of ancient inhabitants are easily evident. Along the trails you can imagine life within Walnut Canyon, while visiting actual pueblos and walking in the steps of those who came before.',
    fullName: 'Walnut Canyon National Monument',
    image: {
      credit: 'NPS Photo / Marge Ullmann',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E56A7-1DD8-B71B-0B9142948979784E.jpg',
    },
    latitude: '35.16822994',
    longitude: '-111.5024239',
    parkCode: 'waca',
  },
  waco: {
    description:
      "Standing as tall as 14 feet and weighing 20,000 pounds, Columbian mammoths roamed across what is present-day Texas thousands of years ago. Today, the fossil specimens represent the nation's first and only recorded evidence of a nursery herd of ice age Columbian mammoths.",
    fullName: 'Waco Mammoth National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F3BE3-1DD8-B71B-0BD24272B0D8B14F.jpg',
    },
    latitude: '31.60465887',
    longitude: '-97.17606143',
    parkCode: 'waco',
  },
  wamo: {
    description:
      "Built to honor George Washington, the United States' first president, the 555-foot marble obelisk towers over Washington, D.C.",
    fullName: 'Washington Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C815A59-1DD8-B71B-0B153A3989783B78.jpg',
    },
    latitude: '38.88948',
    longitude: '-77.035207',
    parkCode: 'wamo',
  },
  wapa: {
    description:
      'War in the Pacific National Historical Park was established to commemorate the bravery and sacrifice of those participating in the campaigns of the Pacific Theater of World War II and to conserve and interpret outstanding natural, scenic, and historic values and objects of the island of Guam.',
    fullName: 'War In The Pacific National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C84E1DA-1DD8-B71B-0B51C510B3B8336F.jpg',
    },
    latitude: '13.43795691',
    longitude: '144.6922461',
    parkCode: 'wapa',
  },
  waro: {
    description:
      'In 1781, General Rochambeau’s French Army joined forces with General Washington’s Continental Army to fight the British Army in Yorktown, Virginia. With the French Navy in support, the allied armies moved hundreds of miles to become the largest troop movement of the American Revolution. The effort and cooperation between the two sides led to a victory at Yorktown and secured American independence.',
    fullName:
      'Washington-Rochambeau Revolutionary Route National Historic Trail',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/38D13B48-1DD8-B71B-0B557C5D33E45D9D.jpg',
    },
    latitude: '40.0958204557',
    longitude: '-74.8563515109',
    parkCode: 'waro',
  },
  wefa: {
    description:
      'Visit the home and studio of America\'s most beloved Impressionist, J. Alden Weir, and walk in the footsteps of generations of world-class artists. Set amidst more than 60 acres of painterly woods, fields, and waterways, you’ll soon see why Weir described his home as the "Great Good Place." Weir’s farm is a national legacy to American Impressionism, the creative spirit, and historic preservation.',
    fullName: 'Weir Farm National Historical Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C79474F-1DD8-B71B-0B09D5BBA22FB9D0.jpg',
    },
    latitude: '41.25886268',
    longitude: '-73.45452542',
    parkCode: 'wefa',
  },
  whho: {
    description:
      'Every president except George Washington has called the White House home and has run the executive branch of the United States government from within its walls. Recognizable around the world, the White House stands as a symbol of democracy. The White House and its park grounds also serve as an iconic place for civil discourse.',
    fullName: "President's Park (White House)",
    image: {
      credit: 'NPS',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C85DF8B-1DD8-B71B-0B3BCAF449D7D845.jpg',
    },
    latitude: '38.89541886',
    longitude: '-77.03654147',
    parkCode: 'whho',
  },
  whis: {
    description:
      'Whiskeytown Lake’s crystal-clear water is perhaps the most recognized feature of the park. However, water-based recreation is only a part of what the 42,000-acre Whiskeytown National Recreation Area has to offer. Visit waterfalls, hike through rugged mountains, explore California Gold Rush history, and observe post-fire ecology in action. Your national park is calling...',
    fullName: 'Whiskeytown National Recreation Area',
    image: {
      credit: 'NPS Matthew Switzer',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81470B-1DD8-B71B-0B1CF8A880DBD58D.jpg',
    },
    latitude: '40.61359941',
    longitude: '-122.6022657',
    parkCode: 'whis',
  },
  whmi: {
    description:
      'The 1847 attack on the Whitmans horrified Americans and impacted the lives of the peoples of the Columbia Plateau for decades afterwards. Was killing the Whitmans justified legal retribution, an act of revenge, or some combination of both? The circumstances that surround this tragic event resonate with modern issues of cultural interaction and differing perspectives.',
    fullName: 'Whitman Mission National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/0BF0A3D7-D2A9-5705-180B4FED2BAA38FC.jpg',
    },
    latitude: '46.04119286',
    longitude: '-118.4629388',
    parkCode: 'whmi',
  },
  whsa: {
    description:
      "Rising from the heart of the Tularosa Basin is one of the world's great natural wonders - the glistening white sands of New Mexico. Great wave-like dunes of gypsum sand have engulfed 275 square miles of desert, creating the world's largest gypsum dunefield. White Sands National Park preserves a major portion of this unique dunefield, along with the plants and animals that live here.",
    fullName: 'White Sands National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/7CA16410-A412-1F05-2D92EB04EEB27980.jpg',
    },
    latitude: '32.77907858',
    longitude: '-106.3333461',
    parkCode: 'whsa',
  },
  wica: {
    description:
      "Bison, elk, and other wildlife roam the rolling prairie grasslands and forested hillsides of one of America's oldest national parks. Below the remnant island of intact prairie sits Wind Cave, one of the longest and most complex caves in the world. Named for barometric winds at its entrance, this maze of passages is home to boxwork, a unique formation rarely found elsewhere.",
    fullName: 'Wind Cave National Park',
    image: {
      credit: 'NPS Photo / Dan Roddy',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7ACD12-1DD8-B71B-0BEF13804E4498FF.jpg',
    },
    latitude: '43.58012365',
    longitude: '-103.4394709',
    parkCode: 'wica',
  },
  wicl: {
    description:
      'Named for the father who died shortly before his birth, William Jefferson Blythe III later became the 42nd President of the United States. In this place, the experiences shared with his mother & grandparents in rural Arkansas developed the broad views on race relations, social justice, and public service that defined his presidency and life after the White House. For Bill Clinton, "Hope was home."',
    fullName:
      'President William Jefferson Clinton Birthplace Home National Historic Site',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C80B417-1DD8-B71B-0B6F982FAD0B0CE9.jpg',
    },
    latitude: '33.66758356',
    longitude: '-93.59641868',
    parkCode: 'wicl',
  },
  wicr: {
    description:
      "Wilson's Creek was the first major Civil War battle fought west of the Mississippi River, and the site of the death of Nathaniel Lyon, the first Union general killed in action. The costly Southern victory on August 10, 1861, focused national attention on the war in Missouri. Wilson’s Creek NB commemorates and interprets the battle within the context of the war in the Trans-Mississippi West.",
    fullName: "Wilson's Creek National Battlefield",
    image: {
      credit: 'Charles Dischinger',
      url: 'https://www.nps.gov/common/uploads/structured_data/EB8B9CDB-F889-440A-39F7A89402AF6B96.jpg',
    },
    latitude: '37.1000127',
    longitude: '-93.40986704',
    parkCode: 'wicr',
  },
  wiho: {
    description:
      "High atop one of Cincinnati's most prominent hilltops stands the two-story Greek Revival house where William Howard Taft was born and grew up. Hard work, a good education, and an interest in civic duty are attributes that made the Taft family outstanding leaders over the years. The environment that shaped Taft's character and philosophy is highlighted on a visit to the site.",
    fullName: 'William Howard Taft National Historic Site',
    image: {
      credit: 'NPS / Tom Engberg',
      url: 'https://www.nps.gov/common/uploads/structured_data/0D45DABD-A233-4C44-C2C50358855DCA46.jpg',
    },
    latitude: '39.11970352',
    longitude: '-84.50758951',
    parkCode: 'wiho',
  },
  wing: {
    description:
      'More than a museum, the Wing is an experience. A chance to truly understand what it was - and is - to be Asian American in the Pacific Northwest. Take a guided tour of a historic hotel and learn the inside story about what makes the local Chinatown-International District unique. Visitors explore thought-provoking exhibitions of real stories, including actor and martial arts master Bruce Lee.',
    fullName: 'Wing Luke Museum Affiliated Area',
    image: {
      credit: 'Lindsay Kennedy',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C81D25A-1DD8-B71B-0B9DAC16CFECEC36.jpg',
    },
    latitude: '47.59820859',
    longitude: '-122.3228912',
    parkCode: 'wing',
  },
  wori: {
    description:
      'Women’s Rights National Historical Park tells the story of the first Women’s Rights Convention held in Seneca Falls, NY on July 19-20,1848. It is a story of struggles for civil rights, human rights, and equality, global struggles that continue today. The efforts of women’s rights leaders, abolitionists, and other 19th century reformers remind us that all people must be accepted as equals.',
    fullName: "Women's Rights National Historical Park",
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C700A-1DD8-B71B-0B5C2C42B93C9B76.jpg',
    },
    latitude: '42.90817073',
    longitude: '-76.81655558',
    parkCode: 'wori',
  },
  wotr: {
    description:
      "No matter what your age or taste in shows, you'll find something you like onstage at Wolf Trap National Park for the Performing Arts. From May through September, multiple amphitheaters in the park present performances such as musicals, dance, opera, jazz, and popular and country music. A good time to explore the beauty and history of the park without the crowds is October - April.",
    fullName: 'Wolf Trap National Park for the Performing Arts',
    image: {
      credit: 'NPS Photo / N. Adams',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8068F8-1DD8-B71B-0B3D0F4B88C2CD62.jpg',
    },
    latitude: '38.93854526',
    longitude: '-77.265089',
    parkCode: 'wotr',
  },
  wrbr: {
    description:
      'Wind, sand, and a dream of flight brought Wilbur and Orville Wright to Kitty Hawk, North Carolina where, after four years of scientific experimentation, they achieved the first successful airplane flights on December 17, 1903. With courage and perseverance, these self-taught engineers relied on teamwork and application of the scientific process. What they achieved changed our world forever.',
    fullName: 'Wright Brothers National Memorial',
    image: {
      credit: 'Wilbur Wright, Orville Wright, and John Daniels',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C835C3E-1DD8-B71B-0BD5373635F58D88.jpg',
    },
    latitude: '36.01637713',
    longitude: '-75.66997163',
    parkCode: 'wrbr',
  },
  wrst: {
    description:
      'Wrangell-St. Elias is a vast national park that rises from the ocean all the way up to 18,008 ft. At 13.2 million acres, the park is the same size as Yellowstone National Park, Yosemite National Park, and Switzerland combined! Within this wild landscape, people continue to live off the land as they have done for centuries. This rugged, beautiful land is filled with opportunities for adventure.',
    fullName: 'Wrangell - St Elias National Park & Preserve',
    image: {
      credit: 'NPS Photo/ Neal Herbert',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7AAD63-1DD8-B71B-0BCE10FFD741A687.jpg',
    },
    latitude: '61.4182147',
    longitude: '-142.6028439',
    parkCode: 'wrst',
  },
  wupa: {
    description:
      'Nestled between the Painted Desert and ponderosa highlands of northern Arizona Wupatki seems like an unlikely landscape for a thriving community. In the early 1100s during a time period of cooler temperatures and wetter seasons the ancestors of contemporary Pueblo communities created a bustling center of trade and culture. For Hopi people these sites represent the footprints of their ancestors.',
    fullName: 'Wupatki National Monument',
    image: {
      credit: 'NPS Photo / Elliot Schultz',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7E1F4C-1DD8-B71B-0B5C3A37182BDF0C.jpg',
    },
    latitude: '35.55741077',
    longitude: '-111.3957216',
    parkCode: 'wupa',
  },
  wwii: {
    description:
      'Through stone architecture and bronze sculptures, the World War II Memorial recognizes the ways Americans served, honors those who fell, and recognizes the victory they achieved to restore freedom and end tyranny around the globe.',
    fullName: 'World War II Memorial',
    image: {
      credit: 'NPS Photo/Brian Hall',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C8177E8-1DD8-B71B-0BE98D23BE5E7C32.jpg',
    },
    latitude: '38.88923917',
    longitude: '-77.0403759',
    parkCode: 'wwii',
  },
  wwim: {
    description:
      'A grateful nation honors the service, valor, courage and sacrifice of the 4.7 million American sons and daughters who served in the Great War.',
    fullName: 'World War I Memorial',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/CB4DB522-0F64-662E-7F41883E1BEC3066.jpg',
    },
    latitude: '38.8959',
    longitude: '-77.0329',
    parkCode: 'wwim',
  },
  yell: {
    description:
      'On March 1, 1872, Yellowstone became the first national park for all to enjoy the unique hydrothermal wonders. Today, millions of people come here each year to camp, hike, and enjoy the majesty of the park.',
    fullName: 'Yellowstone National Park',
    image: {
      credit: 'NPS/Jim Peaco',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7D5920-1DD8-B71B-0B83F012ED802CEA.jpg?w=10%%',
    },
    latitude: '44.59824417',
    longitude: '-110.5471695',
    parkCode: 'yell',
  },
  york: {
    description:
      'Discover what it took for the United States to be independent as you explore the site of the last major battle of the Revolutionary War. Here at Yorktown, in the fall of 1781, General George Washington, with allied American and French forces, besieged General Charles Lord Cornwallis’s British army. On October 19, Cornwallis surrendered, effectively ending the war and ensuring independence.',
    fullName: 'Yorktown Battlefield Part of Colonial National Historical Park',
    image: {
      credit: 'NPS Photo/Linda Williams',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7DF20A-1DD8-B71B-0B6F95C33437A94D.jpg',
    },
    latitude: '37.2195',
    longitude: '-76.4983',
    parkCode: 'york',
  },
  yose: {
    description:
      'Not just a great valley, but a shrine to human foresight, the strength of granite, the power of glaciers, the persistence of life, and the tranquility of the High Sierra. First protected in 1864, Yosemite National Park is best known for its waterfalls, but within its nearly 1,200 square miles, you can find deep valleys, grand meadows, ancient giant sequoias, a vast wilderness area, and much more.',
    fullName: 'Yosemite National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/05383E91-AA28-2DDC-AB517507594F9FA6.jpg',
    },
    latitude: '37.84883288',
    longitude: '-119.5571873',
    parkCode: 'yose',
  },
  yuch: {
    description:
      "Located in Interior Alaska, Yukon-Charley Rivers offers exploration in a largely untouched landscape. Whether you float the mighty Yukon River or paddle the Charley River's whitewater, your memories will last a lifetime. Geology, cultural history, gold rush remnants, wildlife, and vast scenery will be a part of your experience. But, the strongest element will be solitude. Your adventure awaits.",
    fullName: 'Yukon - Charley Rivers National Preserve',
    image: {
      credit: 'NPS Photo / Josh Spice',
      url: 'https://www.nps.gov/common/uploads/structured_data/5441BF50-05AD-F33E-6A0339476B5B18EF.jpg',
    },
    latitude: '65.0935608',
    longitude: '-142.7960021',
    parkCode: 'yuch',
  },
  yuho: {
    description:
      "Yucca House National Monument preserves a large unexcavated pueblo with a stunning setting in Montezuma Valley, nestled between Mesa Verde and Ute Mountain. Since Yucca House was protected as a national monument in 1919, it has remained largely untouched, offering intrepid visitors a sense of discovery and preserving the pueblo's beauty and integrity for future generations.",
    fullName: 'Yucca House National Monument',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7C2020-1DD8-B71B-0B9F3E84D4AE2CD0.jpg',
    },
    latitude: '37.24778944',
    longitude: '-108.6861274',
    parkCode: 'yuho',
  },
  zion: {
    description:
      'Follow the paths where native people and pioneers walked. Gaze up at massive sandstone cliffs of cream, pink, and red that soar into a brilliant blue sky. Experience wilderness in a narrow slot canyon. Zion’s unique array of plants and animals will enchant you as you absorb the rich history of the past and enjoy the excitement of present day adventures.',
    fullName: 'Zion National Park',
    image: {
      credit: 'NPS Photo',
      url: 'https://www.nps.gov/common/uploads/structured_data/3C7F0098-1DD8-B71B-0B6C0191D7391384.jpg',
    },
    latitude: '37.29839254',
    longitude: '-113.0265138',
    parkCode: 'zion',
  },
};

export default parkCodes;
