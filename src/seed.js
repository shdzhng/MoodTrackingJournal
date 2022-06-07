// quotes by Jiddu Kirshnamurti

const seed = [
  {
    id: 1,
    entry: 'It is truth that liberates, not your effort to be free.',
    name: '5 Ways LEGOS Will Help You Get More Business',
    feeling: 'calm',
    date: 1610520356,
    location:
      '{"address_components":[{"long_name":"1825","short_name":"1825","types":["street_number"]},{"long_name":"San Pablo Avenue","short_name":"San Pablo Ave","types":["route"]},{"long_name":"Downtown Oakland","short_name":"Downtown Oakland","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94612","short_name":"94612","types":["postal_code"]},{"long_name":"1517","short_name":"1517","types":["postal_code_suffix"]}],"formatted_address":"1825 San Pablo Ave, Oakland, CA 94612, USA","geometry":{"location":{"lat":37.808281,"lng":-122.272855},"location_type":"ROOFTOP","viewport":{"south":37.8069320197085,"west":-122.2742039802915,"north":37.8096299802915,"east":-122.2715060197085}},"place_id":"ChIJOQKEO66Aj4ARUmW9bGNQwcc","plus_code":{"compound_code":"RP5G+8V Oakland, CA, USA","global_code":"849VRP5G+8V"},"types":["street_address"]}',
  },
  {
    id: 2,
    entry: 'You can only be afraid of what you think you know.',
    name: 'The Untold Secret To Mastering LEGOS In Just 3 Days',
    feeling: 'anxious',
    date: 1614381112,
    location:
      '{"address_components":[{"long_name":"Ralph Appezzato Memorial Pkwy &amp; Alameda College","short_name":"Ralph Appezzato Memorial Pkwy &amp; Alameda College","types":["establishment","point_of_interest","transit_station"]},{"long_name":"Alameda","short_name":"Alameda","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94501","short_name":"94501","types":["postal_code"]}],"formatted_address":"Ralph Appezzato Memorial Pkwy &amp; Alameda College, Alameda, CA 94501, USA","geometry":{"location":{"lat":37.779812,"lng":-122.279068},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.7784630197085,"west":-122.2804169802915,"north":37.7811609802915,"east":-122.2777190197085}},"place_id":"ChIJ66f7rtmAj4ARz67jcJD1C1k","plus_code":{"compound_code":"QPHC+W9 Alameda, CA, USA","global_code":"849VQPHC+W9"},"types":["establishment","point_of_interest","transit_station"]}',
  },
  {
    id: 3,
    entry:
      'We carry about us the burden of what thousands of people have said and the memories of all our misfortunes. To abandon all that is to be alone, and the mind that is alone is not only innocent but young -- not in time or age, but young, innocent, alive at whatever age -- and only such a mind can see that which is truth and that which is not measurable by words.',
    name: 'Proof That LEGOS Really Works',
    feeling: 'sad',
    date: 1663209245,
    location:
      '{"address_components":[{"long_name":"3661","short_name":"3661","types":["street_number"]},{"long_name":"19th Street","short_name":"19th St","types":["route"]},{"long_name":"Mission Dolores","short_name":"Mission Dolores","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]},{"long_name":"1567","short_name":"1567","types":["postal_code_suffix"]}],"formatted_address":"3661 19th St, San Francisco, CA 94110, USA","geometry":{"bounds":{"south":37.7595548,"west":-122.4250146,"north":37.7598238,"east":-122.4248106},"location":{"lat":37.7596856,"lng":-122.4249108},"location_type":"ROOFTOP","viewport":{"south":37.7583403197085,"west":-122.4262615802915,"north":37.7610382802915,"east":-122.4235636197085}},"place_id":"ChIJaQgw6Bd-j4AR-ubZAi9I0lQ","types":["premise"]}',
  },
  {
    id: 4,
    entry:
      'Thought is so cunning, so clever, that it distorts everything for its own convenience.',
    name: 'A Surprising Tool To Help You LEGOS',
    feeling: 'angry',
    date: 1670369378,
    location:
      '{"address_components":[{"long_name":"1736","short_name":"1736","types":["street_number"]},{"long_name":"Gough Street","short_name":"Gough St","types":["route"]},{"long_name":"Pacific Heights","short_name":"Pacific Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94109","short_name":"94109","types":["postal_code"]},{"long_name":"4420","short_name":"4420","types":["postal_code_suffix"]}],"formatted_address":"1736 Gough St, San Francisco, CA 94109, USA","geometry":{"location":{"lat":37.789549,"lng":-122.425232},"location_type":"ROOFTOP","viewport":{"south":37.7882000197085,"west":-122.4265809802915,"north":37.7908979802915,"east":-122.4238830197085}},"place_id":"ChIJe7C3C8CAhYAR1GFhlAnNIzM","plus_code":{"compound_code":"QHQF+RW Pacific Heights, San Francisco, CA, USA","global_code":"849VQHQF+RW"},"types":["street_address"]}',
  },
  {
    id: 5,
    entry:
      'Tell your friend that in his death, a part of you dies and goes with him. Wherever he goes, you also go. He will not be alone.',
    name: '7 and a Half Very Simple Things You Can Do To Save LEGOS',
    feeling: 'calm',
    date: 1670163111,
    location:
      '{"address_components":[{"long_name":"777","short_name":"777","types":["street_number"]},{"long_name":"Morton Street","short_name":"Morton St","types":["route"]},{"long_name":"Presidio of San Francisco","short_name":"Presidio of San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94129","short_name":"94129","types":["postal_code"]}],"formatted_address":"777 Morton St, San Francisco, CA 94129, USA","geometry":{"bounds":{"south":37.7960729,"west":-122.4533746,"north":37.7965196,"east":-122.4531339},"location":{"lat":37.7963456,"lng":-122.4532559},"location_type":"ROOFTOP","viewport":{"south":37.79494726970849,"west":-122.4546032302915,"north":37.79764523029149,"east":-122.4519052697085}},"place_id":"ChIJO183aCmHhYARZpOw1CfWQcM","types":["premise"]}',
  },
  {
    id: 6,
    entry:
      'The soil in which the meditative mind can begin is the soil of everyday life, the strife, the pain, and the fleeting joy. It must begin there, and bring order, and from there move endlessly. But if you are concerned only with making order, then that very order will bring about its own limitation, and the mind will be its prisoner. In all this movement you must somehow begin from the other end, from the other shore, and not always be concerned with this shore or how to cross the river. You must take a plunge into the water, not knowing how to swim. And the beauty of meditation is that you never know where you are, where you are going, what the end is.',
    name: '5 Brilliant Ways To Teach Your Audience About LEGOS',
    feeling: 'loved',
    date: 1630148472,
    location:
      '{"address_components":[{"long_name":"894","short_name":"894","types":["street_number"]},{"long_name":"Martin Luther King Junior Drive","short_name":"Martin Luther King Jr Dr","types":["route"]},{"long_name":"Golden Gate Park","short_name":"Golden Gate Park","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]}],"formatted_address":"894 Martin Luther King Jr Dr, San Francisco, CA 94122, USA","geometry":{"location":{"lat":37.7667909,"lng":-122.4822918},"location_type":"RANGE_INTERPOLATED","viewport":{"south":37.76544191970849,"west":-122.4836407802915,"north":37.76813988029149,"east":-122.4809428197085}},"place_id":"Ejo4OTQgTWFydGluIEx1dGhlciBLaW5nIEpyIERyLCBTYW4gRnJhbmNpc2NvLCBDQSA5NDEyMiwgVVNBIhsSGQoUChIJwY-Ti3GHhYARaFXXJ6Rl6u8Q_gY","types":["street_address"]}',
  },
  {
    id: 7,
    entry:
      'Do not repeat after me words that you do not understand. Do not merely put on a mask of my ideas, for it will be an illusion and you will thereby deceive yourself.',
    name: 'Fall In Love With LEGOS',
    feeling: 'angry',
    date: 1616647272,
    location:
      '{"address_components":[{"long_name":"472","short_name":"472","types":["street_number"]},{"long_name":"Douglass Street","short_name":"Douglass St","types":["route"]},{"long_name":"Eureka Valley","short_name":"Eureka Valley","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94114","short_name":"94114","types":["postal_code"]},{"long_name":"2761","short_name":"2761","types":["postal_code_suffix"]}],"formatted_address":"472 Douglass St, San Francisco, CA 94114, USA","geometry":{"bounds":{"south":37.75586,"west":-122.439265,"north":37.7559389,"east":-122.4390407},"location":{"lat":37.7558921,"lng":-122.4391044},"location_type":"ROOFTOP","viewport":{"south":37.75455046970851,"west":-122.4405018302915,"north":37.7572484302915,"east":-122.4378038697085}},"place_id":"ChIJm32Cbw9-j4ARyyeYgsyynJg","types":["premise"]}',
  },
  {
    id: 8,
    entry: 'Acquiring knowledge is a form of imitation.',
    name: 'LEGOS And Love - How They Are The Same',
    feeling: 'anxious',
    date: 1667799939,
    location:
      '{"address_components":[{"long_name":"VH6C+2M","short_name":"VH6C+2M","types":["plus_code"]},{"long_name":"Belvedere Tiburon","short_name":"Belvedere Tiburon","types":["neighborhood","political"]},{"long_name":"Tiburon","short_name":"Tiburon","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VH6C+2M Tiburon, CA, USA","geometry":{"bounds":{"south":37.86,"west":-122.428375,"north":37.860125,"east":-122.42825},"location":{"lat":37.8600547,"lng":-122.4283541},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8587135197085,"west":-122.4296614802915,"north":37.86141148029149,"east":-122.4269635197085}},"place_id":"GhIJs6K8RRbuQkAR4aZQJ2qbXsA","plus_code":{"compound_code":"VH6C+2M Tiburon, CA, USA","global_code":"849VVH6C+2M"},"types":["plus_code"]}',
  },
  {
    id: 9,
    entry: 'Real learning comes about when the competitive spirit has ceased.',
    name: 'How To Start A Business With LEGOS',
    feeling: 'angry',
    date: 1647203975,
    location:
      '{"address_components":[{"long_name":"2001","short_name":"2001","types":["street_number"]},{"long_name":"Paradise Drive","short_name":"Paradise Dr","types":["route"]},{"long_name":"Belvedere Tiburon","short_name":"Belvedere Tiburon","types":["neighborhood","political"]},{"long_name":"Tiburon","short_name":"Tiburon","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94920","short_name":"94920","types":["postal_code"]},{"long_name":"1937","short_name":"1937","types":["postal_code_suffix"]}],"formatted_address":"2001 Paradise Dr, Belvedere Tiburon, CA 94920, USA","geometry":{"location":{"lat":37.8726705,"lng":-122.450833},"location_type":"ROOFTOP","viewport":{"south":37.8713215197085,"west":-122.4521819802915,"north":37.87401948029149,"east":-122.4494840197085}},"place_id":"ChIJPzYPv36EhYARq02Jiq_tSfw","plus_code":{"compound_code":"VGFX+3M Belvedere Tiburon, Tiburon, CA, USA","global_code":"849VVGFX+3M"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 10,
    entry:
      'But what is the point of education at all? Is it merely to cultivate the capacity of memory, passing examinations and getting a job and all the rest, or is education something entirely different? Something more!',
    name: '15 Tips For LEGOS Success',
    feeling: 'calm',
    date: 1621123548,
    location:
      '{"address_components":[{"long_name":"512","short_name":"512","types":["street_number"]},{"long_name":"San Rafael Avenue","short_name":"San Rafael Ave","types":["route"]},{"long_name":"Belvedere Tiburon","short_name":"Belvedere Tiburon","types":["neighborhood","political"]},{"long_name":"Belvedere","short_name":"Belvedere","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94920","short_name":"94920","types":["postal_code"]},{"long_name":"2338","short_name":"2338","types":["postal_code_suffix"]}],"formatted_address":"512 San Rafael Ave, Belvedere Tiburon, CA 94920, USA","geometry":{"bounds":{"south":37.8738342,"west":-122.4647522,"north":37.8741086,"east":-122.4645169},"location":{"lat":37.8740361,"lng":-122.4646367},"location_type":"ROOFTOP","viewport":{"south":37.87262241970851,"west":-122.4659835302915,"north":37.87532038029151,"east":-122.4632855697085}},"place_id":"ChIJCXKQO4qEhYARUs-WddphmXw","types":["premise"]}',
  },
  {
    id: 11,
    entry:
      'Sirs, if you are listening and are not acting, it is like a man who is always tilling but never sowing. It is better not to listen to a truth than to listen without acting, for then it becomes a poison.',
    name: 'How I Improved My LEGOS In One Day',
    feeling: 'calm',
    date: 1642609233,
    location:
      '{"address_components":[{"long_name":"651","short_name":"651","types":["street_number"]},{"long_name":"Avenue D","short_name":"Avenue D","types":["route"]},{"long_name":"Treasure Island","short_name":"Treasure Island","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94130","short_name":"94130","types":["postal_code"]}],"formatted_address":"651 Avenue D, San Francisco, CA 94130, USA","geometry":{"location":{"lat":37.8235974,"lng":-122.3715005},"location_type":"ROOFTOP","viewport":{"south":37.8222484197085,"west":-122.3728494802915,"north":37.8249463802915,"east":-122.3701515197085}},"place_id":"ChIJ_4VLFTOAhYAR7kaPA4bL1-I","plus_code":{"compound_code":"RJFH+C9 Treasure Island, San Francisco, CA, USA","global_code":"849VRJFH+C9"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 12,
    entry:
      'It is only the innocent mind which knows what love is, and the innocent mind can live in the world which is not innocent.',
    name: 'If You Want To Be A Winner, Change Your LEGOS Philosophy Now!',
    feeling: 'happy',
    date: 1627576953,
    location:
      '{"address_components":[{"long_name":"5701-5795","short_name":"5701-5795","types":["street_number"]},{"long_name":"Christie Avenue","short_name":"Christie Ave","types":["route"]},{"long_name":"Emeryville","short_name":"Emeryville","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94608","short_name":"94608","types":["postal_code"]}],"formatted_address":"5701-5795 Christie Ave, Emeryville, CA 94608, USA","geometry":{"location":{"lat":37.8365128,"lng":-122.2942925},"location_type":"ROOFTOP","viewport":{"south":37.83516381970851,"west":-122.2956414802915,"north":37.8378617802915,"east":-122.2929435197085}},"place_id":"ChIJcxxjiER-hYARbndjirT8mwc","plus_code":{"compound_code":"RPP4+J7 Emeryville, CA, USA","global_code":"849VRPP4+J7"},"types":["establishment","food","grocery_or_supermarket","point_of_interest","restaurant","shopping_mall","store"]}',
  },
  {
    id: 13,
    entry:
      "In order to observe the movement of your own mind and heart, of your whole being, you must have a free mind, not a mind that agrees and disagrees, taking sides in an argument, disputing over mere words, but rather following with an intention to understand - a very difficult thing to do because most of us don't know how to look at, or listen to, our own being any more than we know how to look at the beauty of a river or listen to the breeze among the trees",
    name: 'Answered: Your Most Burning Questions About LEGOS',
    feeling: 'anxious',
    date: 1659900229,
    location:
      '{"address_components":[{"long_name":"1453","short_name":"1453","types":["street_number"]},{"long_name":"3rd Street","short_name":"3rd St","types":["route"]},{"long_name":"Mission Bay","short_name":"Mission Bay","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94158","short_name":"94158","types":["postal_code"]},{"long_name":"2210","short_name":"2210","types":["postal_code_suffix"]}],"formatted_address":"1453 3rd St, San Francisco, CA 94158, USA","geometry":{"location":{"lat":37.7701205,"lng":-122.3890583},"location_type":"ROOFTOP","viewport":{"south":37.7687715197085,"west":-122.3904072802915,"north":37.77146948029149,"east":-122.3877093197085}},"place_id":"ChIJiTA9RcV_j4ARp_S-BePKV_g","plus_code":{"compound_code":"QJC6+29 Mission Bay, San Francisco, CA, USA","global_code":"849VQJC6+29"},"types":["street_address"]}',
  },
  {
    id: 14,
    entry:
      'So if you can look at all things without allowing pleasure to creep in - at a face, a bird, the colour of a sari, the beauty of a sheet of water shimmering in the sun, or anything that gives delight - if you can look at it without wanting the experience to be repeated, then there will be no pain, no fear, and therefore tremendous joy. It is the struggle to repeat and perpetuate pleasure which turns it into pain. Watch it in yourself. The very demand for the repetition of pleasure brings about pain, because it is not the same, as it was yesterday. You struggle to achieve the same delight, not only to your aesthetic sense but the same inward quality of the mind, and you are hurt and disappointed because it is denied to you.',
    name: 'The A - Z Guide Of LEGOS',
    feeling: 'anxious',
    date: 1668931081,
    location:
      '{"address_components":[{"long_name":"2801","short_name":"2801","types":["street_number"]},{"long_name":"Turk Boulevard","short_name":"Turk Blvd","types":["route"]},{"long_name":"Lone Mountain","short_name":"Lone Mountain","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94118","short_name":"94118","types":["postal_code"]},{"long_name":"4355","short_name":"4355","types":["postal_code_suffix"]}],"formatted_address":"2801 Turk Blvd, San Francisco, CA 94118, USA","geometry":{"location":{"lat":37.7777839,"lng":-122.451725},"location_type":"ROOFTOP","viewport":{"south":37.7764349197085,"west":-122.4530739802915,"north":37.7791328802915,"east":-122.4503760197085}},"place_id":"ChIJQ80n3UuHhYARavPPY8b9j5g","plus_code":{"compound_code":"QGHX+48 Lone Mountain, San Francisco, CA, USA","global_code":"849VQGHX+48"},"types":["street_address"]}',
  },
  {
    id: 15,
    entry:
      "So if you understand that where there is a search for pleasure there must be pain, live that way if you want to, but don't just slip into it. If you want to end pleasure, though, which is to end pain, you must be totally attentive to the whole structure of pleasure - not cut it out as monks and sannyasis do, never looking at a woman because they think it is a sin and thereby destroying the vitality of their understanding - but seeing the whole meaning and significance of pleasure. Then you will have tremendous joy in life. You cannot think about joy. Joy is an immediate thing and by thinking about it, you turn it into pleasure. Living in the present is the instant perception of beauty and the great delight in it without seeking pleasure from it.",
    name: '5 Brilliant Ways To Use LEGOS',
    feeling: 'anxious',
    date: 1622643065,
    location:
      '{"address_components":[{"long_name":"670","short_name":"670","types":["street_number"]},{"long_name":"Commercial Street","short_name":"Commercial St","types":["route"]},{"long_name":"Chinatown","short_name":"Chinatown","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94111","short_name":"94111","types":["postal_code"]},{"long_name":"6521","short_name":"6521","types":["postal_code_suffix"]}],"formatted_address":"670 Commercial St, San Francisco, CA 94111, USA","geometry":{"location":{"lat":37.7942424,"lng":-122.4042614},"location_type":"ROOFTOP","viewport":{"south":37.7928934197085,"west":-122.4056103802915,"north":37.7955913802915,"east":-122.4029124197085}},"place_id":"ChIJvRqG4oqAhYARX6hAcvw1Me0","plus_code":{"compound_code":"QHVW+M7 Chinatown, San Francisco, CA, USA","global_code":"849VQHVW+M7"},"types":["art_gallery","cafe","establishment","food","point_of_interest","store"]}',
  },
  {
    id: 16,
    entry:
      'To understand ourselves needs no authority either of yesterday or of a thousand years because we are living things, always moving, flowing, never resting.',
    name: '12 Questions Answered About LEGOS',
    feeling: 'happy',
    date: 1633226264,
    location:
      '{"address_components":[{"long_name":"925","short_name":"925","types":["street_number"]},{"long_name":"Stockton Street","short_name":"Stockton St","types":["route"]},{"long_name":"Chinatown","short_name":"Chinatown","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94108","short_name":"94108","types":["postal_code"]},{"long_name":"1607","short_name":"1607","types":["postal_code_suffix"]}],"formatted_address":"925 Stockton St, San Francisco, CA 94108, USA","geometry":{"location":{"lat":37.7943975,"lng":-122.4082781},"location_type":"ROOFTOP","viewport":{"south":37.79304851970849,"west":-122.4096270802915,"north":37.79574648029149,"east":-122.4069291197085}},"place_id":"ChIJVVVFtIyAhYAR9wm9A1lRtT8","plus_code":{"compound_code":"QHVR+QM Chinatown, San Francisco, CA, USA","global_code":"849VQHVR+QM"},"types":["establishment","food","point_of_interest"]}',
  },
  {
    id: 17,
    entry:
      'We need a tremendous amount of energy and we dissipate it through fear but when there is this energy which comes from throwing off every form of fear, that energy itself produces the radical inward revolution.',
    name: '101 Ideas For LEGOS',
    feeling: 'sad',
    date: 1638464250,
    location:
      '{"address_components":[{"long_name":"2","short_name":"2","types":["street_number"]},{"long_name":"5th Avenue","short_name":"5th Ave","types":["route"]},{"long_name":"Richmond District","short_name":"Richmond District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94118","short_name":"94118","types":["postal_code"]},{"long_name":"1308","short_name":"1308","types":["postal_code_suffix"]}],"formatted_address":"2 5th Ave, San Francisco, CA 94118, USA","geometry":{"bounds":{"south":37.7885906,"west":-122.463613,"north":37.7887859,"east":-122.4632884},"location":{"lat":37.7886707,"lng":-122.4634647},"location_type":"ROOFTOP","viewport":{"south":37.7873392697085,"west":-122.4647996802915,"north":37.7900372302915,"east":-122.4621017197085}},"place_id":"ChIJLXUOnCSHhYARhXxQ769K2Lk","types":["premise"]}',
  },
  {
    id: 18,
    entry:
      'One is never afraid of the unknown one is afraid of the known coming to an end. ',
    name: 'How To Make Your LEGOS Look Amazing In 5 Days',
    feeling: 'anxious',
    date: 1642384222,
    location:
      '{"address_components":[{"long_name":"20","short_name":"20","types":["street_number"]},{"long_name":"Ventura Avenue","short_name":"Ventura Ave","types":["route"]},{"long_name":"West of Twin Peaks","short_name":"West of Twin Peaks","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94116","short_name":"94116","types":["postal_code"]},{"long_name":"1443","short_name":"1443","types":["postal_code_suffix"]}],"formatted_address":"20 Ventura Ave, San Francisco, CA 94116, USA","geometry":{"bounds":{"south":37.75116269999999,"west":-122.4638102,"north":37.75129099999999,"east":-122.4636308},"location":{"lat":37.7512307,"lng":-122.4637411},"location_type":"ROOFTOP","viewport":{"south":37.74987786970849,"west":-122.4650694802915,"north":37.75257583029149,"east":-122.4623715197085}},"place_id":"ChIJKyVxgPF9j4ARXoMEhVfQeKU","types":["premise"]}',
  },
  {
    id: 19,
    entry: 'The constant assertion of belief is an indication of fear.',
    name: 'How To Turn LEGOS Into Success',
    feeling: 'happy',
    date: 1643853006,
    location:
      '{"address_components":[{"long_name":"742","short_name":"742","types":["street_number"]},{"long_name":"33rd Avenue","short_name":"33rd Ave","types":["route"]},{"long_name":"Outer Richmond","short_name":"Outer Richmond","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94121","short_name":"94121","types":["postal_code"]},{"long_name":"3428","short_name":"3428","types":["postal_code_suffix"]}],"formatted_address":"742 33rd Ave, San Francisco, CA 94121, USA","geometry":{"bounds":{"south":37.77506,"west":-122.4928802,"north":37.7751326,"east":-122.4927111},"location":{"lat":37.7750924,"lng":-122.4928548},"location_type":"ROOFTOP","viewport":{"south":37.7737473197085,"west":-122.4941446302915,"north":37.7764452802915,"east":-122.4914466697085}},"place_id":"ChIJPXj3b6eHhYARMDSS2epN8ew","types":["premise"]}',
  },
  {
    id: 20,
    entry:
      'Discipline must be without control, without suppression, without any form of fear...It is not discipline first and then freedom; freedom is at the very beginning, not at the end.',
    name: 'LEGOS Made Simple - Even Your Kids Can Do It',
    feeling: 'happy',
    date: 1633287944,
    location:
      '{"address_components":[{"long_name":"RM4J+37","short_name":"RM4J+37","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"RM4J+37 Oakland, CA, USA","geometry":{"bounds":{"south":37.805125,"west":-122.319375,"north":37.80525000000001,"east":-122.31925},"location":{"lat":37.8052114,"lng":-122.3193695},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.80383851970851,"west":-122.3206614802915,"north":37.80653648029151,"east":-122.3179635197085}},"place_id":"GhIJ5a7KKhHnQkARwHXFjHCUXsA","plus_code":{"compound_code":"RM4J+37 Oakland, CA, USA","global_code":"849VRM4J+37"},"types":["plus_code"]}',
  },
  {
    id: 21,
    entry:
      "Seeing everything that goes on in your daily life, your daily activities - when you pick up a pen, when you talk, when you go out for a drive or when you are walking alone in the woods - can you with one breath, with one look, know yourself very simply as you are? When you know yourself as you are, then you understand the whole structure of man's endeavour, his deceptions, his hypocrisies, his search. To do this you must be tremendously honest with yourself throughout your being.",
    name: 'LEGOS Works Only Under These Conditions',
    feeling: 'calm',
    date: 1629093587,
    location:
      '{"address_components":[{"long_name":"48","short_name":"48","types":["street_number"]},{"long_name":"Toledo Way","short_name":"Toledo Way","types":["route"]},{"long_name":"Marina District","short_name":"Marina District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94123","short_name":"94123","types":["postal_code"]},{"long_name":"2109","short_name":"2109","types":["postal_code_suffix"]}],"formatted_address":"48 Toledo Way, San Francisco, CA 94123, USA","geometry":{"location":{"lat":37.80146,"lng":-122.438543},"location_type":"ROOFTOP","viewport":{"south":37.8001110197085,"west":-122.4398919802915,"north":37.8028089802915,"east":-122.4371940197085}},"place_id":"ChIJha2a_NaAhYARHpSyC4N7S24","plus_code":{"compound_code":"RH26+HH Marina District, San Francisco, CA, USA","global_code":"849VRH26+HH"},"types":["street_address"]}',
  },
  {
    id: 22,
    entry: 'virtue can flower only when there is freedom.',
    name: 'Here Is A Quick Cure For LEGOS',
    feeling: 'angry',
    date: 1625470502,
    location:
      '{"address_components":[{"long_name":"660","short_name":"660","types":["street_number"]},{"long_name":"Steiner Street","short_name":"Steiner St","types":["route"]},{"long_name":"Alamo Square","short_name":"Alamo Square","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94117","short_name":"94117","types":["postal_code"]}],"formatted_address":"660 Steiner St, San Francisco, CA 94117, USA","geometry":{"location":{"lat":37.7754976,"lng":-122.4326919},"location_type":"ROOFTOP","viewport":{"south":37.77414861970851,"west":-122.4340408802915,"north":37.7768465802915,"east":-122.4313429197085}},"place_id":"ChIJz_gvAqWAhYARYB654Fg2g3I","plus_code":{"compound_code":"QHG8+5W Alamo Square, San Francisco, CA, USA","global_code":"849VQHG8+5W"},"types":["street_address"]}',
  },
  {
    id: 23,
    entry:
      'space and silence are necessary because it is only when the mind is alone, uninfluenced, untrained, not held by infinite varieties of experience, that it can come upon something totally new.',
    name: 'Now You Can Have The LEGOS Of Your Dreams – Cheaper/Faster Than You Ever Imagined',
    feeling: 'sad',
    date: 1622662543,
    location:
      '{"address_components":[{"long_name":"1572","short_name":"1572","types":["street_number"]},{"long_name":"Shrader Street","short_name":"Shrader St","types":["route"]},{"long_name":"Ashbury Heights","short_name":"Ashbury Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94117","short_name":"94117","types":["postal_code"]},{"long_name":"4236","short_name":"4236","types":["postal_code_suffix"]}],"formatted_address":"1572 Shrader St, San Francisco, CA 94117, USA","geometry":{"bounds":{"south":37.7602724,"west":-122.4502404,"north":37.76035,"east":-122.4500603},"location":{"lat":37.7603082,"lng":-122.4500965},"location_type":"ROOFTOP","viewport":{"south":37.7589622197085,"west":-122.4514993302915,"north":37.76166018029149,"east":-122.4488013697085}},"place_id":"ChIJ28yFAv99j4ARpXldsNcTmQc","types":["premise"]}',
  },
  {
    id: 24,
    entry:
      'any movement which is worth while, any action which has any deep significance, must begin with each one of us. I must change first; I must see what is the nature and structure of my relationship with the world - and in the very seeing is the doing; therefore I, as a human being living in the world, bring about a different quality, and that quality, it seems to me, is the quality of the religious mind.The religious mind is something entirely different from the mind that believes in religion...A religious mind does not seek at all, it cannot experiment with truth. Truth is not something dictated by your pleasure or pain, or by your conditioning as a Hindu or whatever religion you belong to. The religious mind is a state of mind in which there is no fear and therefore no belief whatsoever but only what is - what actually is.',
    name: 'Want A Thriving Business? Focus On LEGOS!',
    feeling: 'angry',
    date: 1672216149,
    location:
      '{"address_components":[{"long_name":"2075","short_name":"2075","types":["street_number"]},{"long_name":"30th Avenue","short_name":"30th Ave","types":["route"]},{"long_name":"Outer Sunset","short_name":"Outer Sunset","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94116","short_name":"94116","types":["postal_code"]},{"long_name":"1149","short_name":"1149","types":["postal_code_suffix"]}],"formatted_address":"2075 30th Ave, San Francisco, CA 94116, USA","geometry":{"bounds":{"south":37.748571,"west":-122.4883105,"north":37.7486551,"east":-122.4880447},"location":{"lat":37.7486115,"lng":-122.4881289},"location_type":"ROOFTOP","viewport":{"south":37.74726406970851,"west":-122.4895265802915,"north":37.7499620302915,"east":-122.4868286197085}},"place_id":"ChIJc0MR4oB9j4ARcmRYC2ryydo","types":["premise"]}',
  },
  {
    id: 25,
    entry:
      'You have to be a light to yourself in a world that is utterly becoming dark.',
    name: 'The Untapped Gold Mine Of LEGOS That Virtually No One Knows About',
    feeling: 'anxious',
    date: 1638302808,
    location:
      '{"address_components":[{"long_name":"V","short_name":"V","types":["street_number"]},{"long_name":"Craut Street","short_name":"Craut St","types":["route"]},{"long_name":"Mission Terrace","short_name":"Mission Terrace","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94112","short_name":"94112","types":["postal_code"]}],"formatted_address":"V Craut St, San Francisco, CA 94112, USA","geometry":{"location":{"lat":37.7311784,"lng":-122.4272945},"location_type":"ROOFTOP","viewport":{"south":37.7298294197085,"west":-122.4286434802915,"north":37.7325273802915,"east":-122.4259455197085}},"place_id":"ChIJGdPye4p-j4ARYTxEhc3_GIk","plus_code":{"compound_code":"PHJF+F3 Mission Terrace, San Francisco, CA, USA","global_code":"849VPHJF+F3"},"types":["street_address"]}',
  },
  {
    id: 26,
    entry:
      'The ability to observe without evaluating is the highest form of intelligence.',
    name: 'Little Known Ways To Rid Yourself Of LEGOS',
    feeling: 'happy',
    date: 1663585305,
    location:
      '{"address_components":[{"long_name":"14","short_name":"14","types":["street_number"]},{"long_name":"Southwood Drive","short_name":"Southwood Dr","types":["route"]},{"long_name":"West of Twin Peaks","short_name":"West of Twin Peaks","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94112","short_name":"94112","types":["postal_code"]},{"long_name":"1248","short_name":"1248","types":["postal_code_suffix"]}],"formatted_address":"14 Southwood Dr, San Francisco, CA 94112, USA","geometry":{"bounds":{"south":37.7256258,"west":-122.4571451,"north":37.7257775,"east":-122.4569245},"location":{"lat":37.7257291,"lng":-122.4570518},"location_type":"ROOFTOP","viewport":{"south":37.7243526697085,"west":-122.4583837802915,"north":37.7270506302915,"east":-122.4556858197085}},"place_id":"ChIJ3b8BbNJ9j4AROnp20hFAx5A","types":["premise"]}',
  },
  {
    id: 27,
    entry:
      'The highest form of human intelligence is to observe yourself without judgment.',
    name: 'Read This Controversial Article And Find Out More About LEGOS',
    feeling: 'happy',
    date: 1661713686,
    location:
      '{"address_components":[{"long_name":"222","short_name":"222","types":["street_number"]},{"long_name":"La Salle Avenue","short_name":"La Salle Ave","types":["route"]},{"long_name":"Piedmont","short_name":"Piedmont","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94610","short_name":"94610","types":["postal_code"]},{"long_name":"1235","short_name":"1235","types":["postal_code_suffix"]}],"formatted_address":"222 La Salle Ave, Piedmont, CA 94610, USA","geometry":{"bounds":{"south":37.8151456,"west":-122.2265676,"north":37.8152977,"east":-122.2263886},"location":{"lat":37.8152324,"lng":-122.226456},"location_type":"ROOFTOP","viewport":{"south":37.81387266970849,"west":-122.2278270802915,"north":37.81657063029149,"east":-122.2251291197085}},"place_id":"ChIJ94g5kHOHj4ARSIljt7duMWQ","types":["premise"]}',
  },
  {
    id: 28,
    entry:
      'To understand the immeasurable, the mind must be extraordinarily quiet, still.',
    name: 'Why LEGOS Succeeds',
    feeling: 'calm',
    date: 1628905918,
    location:
      '{"address_components":[{"long_name":"573a","short_name":"573a","types":["street_number"]},{"long_name":"59th Street","short_name":"59th St","types":["route"]},{"long_name":"Bushrod","short_name":"Bushrod","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94609","short_name":"94609","types":["postal_code"]},{"long_name":"1527","short_name":"1527","types":["postal_code_suffix"]}],"formatted_address":"573a 59th St, Oakland, CA 94609, USA","geometry":{"location":{"lat":37.8445835,"lng":-122.2638125},"location_type":"ROOFTOP","viewport":{"south":37.8432345197085,"west":-122.2651614802915,"north":37.8459324802915,"east":-122.2624635197085}},"place_id":"ChIJdyfcwNh9hYARvgKyBC2GV3U","plus_code":{"compound_code":"RPVP+RF Oakland, CA, USA","global_code":"849VRPVP+RF"},"types":["street_address"]}',
  },
  {
    id: 29,
    entry: "The word 'innocence' means a mind that is incapable of being hurt.",
    name: '3 Ways You Can Reinvent LEGOS Without Looking Like An Amateur',
    feeling: 'sad',
    date: 1658039325,
    location:
      '{"address_components":[{"long_name":"1009","short_name":"1009","types":["street_number"]},{"long_name":"Heinz Avenue","short_name":"Heinz Ave","types":["route"]},{"long_name":"Southwest Berkeley","short_name":"Southwest Berkeley","types":["neighborhood","political"]},{"long_name":"Berkeley","short_name":"Berkeley","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94710","short_name":"94710","types":["postal_code"]},{"long_name":"2718","short_name":"2718","types":["postal_code_suffix"]}],"formatted_address":"1009 Heinz Ave, Berkeley, CA 94710, USA","geometry":{"location":{"lat":37.8543043,"lng":-122.2893287},"location_type":"ROOFTOP","viewport":{"south":37.8529553197085,"west":-122.2906776802915,"north":37.85565328029149,"east":-122.2879797197085}},"place_id":"ChIJnyznvfR-hYARm7EW7MQC5iA","plus_code":{"compound_code":"VP36+P7 Berkeley, CA, USA","global_code":"849VVP36+P7"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 30,
    entry:
      'To put it differently, as long as mind and heart are caught up in want, in desire, there must be emptiness.You want things, ideas, persons, only when you are conscious of your own emptiness, and that wanting creates a choice.When there is craving there must be choice, and choice precipitates you into the conflict of experiences.You have the capacity to choose, and thereby you limit yourself by your choice. Only when mind is free from choice is there liberation.',
    name: 'Where Can You Find Free LEGOS Resources',
    feeling: 'angry',
    date: 1650058535,
    location:
      '{"address_components":[{"long_name":"Conzelman Road","short_name":"Conzelman Rd","types":["route"]},{"long_name":"Sausalito","short_name":"Sausalito","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94965","short_name":"94965","types":["postal_code"]}],"formatted_address":"Conzelman Rd, Sausalito, CA 94965, USA","geometry":{"bounds":{"south":37.8334369,"west":-122.4837374,"north":37.8337516,"east":-122.4836276},"location":{"lat":37.8336039,"lng":-122.4837372},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8322452697085,"west":-122.4850314802915,"north":37.8349432302915,"east":-122.4823335197085}},"place_id":"ChIJE2lw1i6EhYARpEK6QcrhLJs","types":["route"]}',
  },
  {
    id: 31,
    entry:
      "Passion is a rather frightening thing because if you have passion you don't know where it will take you.",
    name: 'Use LEGOS To Make Someone Fall In Love With You',
    feeling: 'happy',
    date: 1611479431,
    location:
      '{"address_components":[{"long_name":"1668","short_name":"1668","types":["street_number"]},{"long_name":"14th Street","short_name":"14th St","types":["route"]},{"long_name":"Prescott","short_name":"Prescott","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]}],"formatted_address":"1668 14th St, Oakland, CA 94607, USA","geometry":{"location":{"lat":37.81251,"lng":-122.2956408},"location_type":"ROOFTOP","viewport":{"south":37.8111610197085,"west":-122.2969897802915,"north":37.81385898029149,"east":-122.2942918197085}},"place_id":"ChIJdUhn4iZ-hYARIMW-JaejEXw","plus_code":{"compound_code":"RP73+2P Oakland, CA, USA","global_code":"849VRP73+2P"},"types":["street_address"]}',
  },
  {
    id: 32,
    entry:
      'The primary cause of disorder in ourselves is the seeking of reality promised by another.',
    name: 'The Ultimate Deal On LEGOS',
    feeling: 'calm',
    date: 1629878420,
    location:
      '{"address_components":[{"long_name":"808","short_name":"808","types":["street_number"]},{"long_name":"Alice Street","short_name":"Alice St","types":["route"]},{"long_name":"Downtown Oakland","short_name":"Downtown Oakland","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]}],"formatted_address":"808 Alice St, Oakland, CA 94607, USA","geometry":{"location":{"lat":37.7984107,"lng":-122.2686143},"location_type":"ROOFTOP","viewport":{"south":37.7970617197085,"west":-122.2699632802915,"north":37.79975968029149,"east":-122.2672653197085}},"place_id":"ChIJcz9UYcqAj4AR1HuAwwqZSxM","plus_code":{"compound_code":"QPXJ+9H Oakland, CA, USA","global_code":"849VQPXJ+9H"},"types":["street_address"]}',
  },
  {
    id: 33,
    entry:
      'It is only when the mind is free from the old that it meets everything anew, and in that there is joy.',
    name: 'Stop Wasting Time And Start LEGOS',
    feeling: 'loved',
    date: 1615683106,
    location:
      '{"address_components":[{"long_name":"1333","short_name":"1333","types":["street_number"]},{"long_name":"8th Street","short_name":"8th St","types":["route"]},{"long_name":"West Alameda","short_name":"West Alameda","types":["neighborhood","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94501","short_name":"94501","types":["postal_code"]}],"formatted_address":"1333 8th St, Alameda, CA 94501, USA","geometry":{"location":{"lat":37.7687,"lng":-122.2737014},"location_type":"ROOFTOP","viewport":{"south":37.7673510197085,"west":-122.2750503802915,"north":37.7700489802915,"east":-122.2723524197085}},"place_id":"ChIJiRem0zGBj4AR7pyBBN67peE","plus_code":{"compound_code":"QP9G+FG Alameda, CA, USA","global_code":"849VQP9G+FG"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 34,
    entry:
      'It is no measure of health to be well adjusted to a profoundly sick society.',
    name: 'LEGOS And The Chuck Norris Effect',
    feeling: 'loved',
    date: 1660074249,
    location:
      '{"address_components":[{"long_name":"1494","short_name":"1494","types":["street_number"]},{"long_name":"Quesada Avenue","short_name":"Quesada Ave","types":["route"]},{"long_name":"Bayview","short_name":"Bayview","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94124","short_name":"94124","types":["postal_code"]},{"long_name":"2756","short_name":"2756","types":["postal_code_suffix"]}],"formatted_address":"1494 Quesada Ave, San Francisco, CA 94124, USA","geometry":{"bounds":{"south":37.7312558,"west":-122.3875751,"north":37.7313893,"east":-122.3873944},"location":{"lat":37.73133139999999,"lng":-122.3875066},"location_type":"ROOFTOP","viewport":{"south":37.7299735697085,"west":-122.3888337302915,"north":37.7326715302915,"east":-122.3861357697085}},"place_id":"ChIJ9zXZ_BB_j4ARFSNE5SMLCq4","types":["premise"]}',
  },
  {
    id: 35,
    entry:
      'Most of us waste this extraordinary thing called life. We have lived forty or sixty years, have gone to the office, engaged ourselves in social activity, escaping in various forms, and at the end of it, we have nothing but an empty, dull, stupid life, a wasted life.Now, please has created this pattern of social life. We take pleasure in ambition, in competition, in acquiring knowledge or power, or position, prestige, status. And that pursuit of pleasure as ambition, competition, greed, envy, status, domination, power is respectable. It is made respectable by a society which has only one concept: that you shall lead a moral life, which is a respectable life. You can be ambitious, you can be greedy, you can be violent, you can be competitive, you can be a ruthless human being, but society accepts it, because at the end of your ambition, you are either so called successful man with plenty of money, or a failure and therefore a frustrated human being. So social morality is immorality.',
    name: 'Why Everything You Know About LEGOS Is A Lie',
    feeling: 'calm',
    date: 1610001640,
    location:
      '{"address_components":[{"long_name":"439","short_name":"439","types":["street_number"]},{"long_name":"Myra Way","short_name":"Myra Way","types":["route"]},{"long_name":"Miraloma","short_name":"Miraloma","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94127","short_name":"94127","types":["postal_code"]},{"long_name":"1623","short_name":"1623","types":["postal_code_suffix"]}],"formatted_address":"439 Myra Way, San Francisco, CA 94127, USA","geometry":{"bounds":{"south":37.7375158,"west":-122.4527695,"north":37.7376394,"east":-122.4526083},"location":{"lat":37.7375719,"lng":-122.452662},"location_type":"ROOFTOP","viewport":{"south":37.7362286197085,"west":-122.4540378802915,"north":37.7389265802915,"east":-122.4513399197085}},"place_id":"ChIJzfGM_Nt9j4ARliWre6ZUum8","types":["premise"]}',
  },
  {
    id: 36,
    entry:
      'One of the fundamental causes of the disintegration of society is copying, which is the worship of authority.',
    name: 'Best Make LEGOS You Will Read This Year (in 2015)',
    feeling: 'loved',
    date: 1613217464,
    location:
      '{"address_components":[{"long_name":"735","short_name":"735","types":["street_number"]},{"long_name":"Greenwich Street","short_name":"Greenwich St","types":["route"]},{"long_name":"North Beach","short_name":"North Beach","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"2728","short_name":"2728","types":["postal_code_suffix"]}],"formatted_address":"735 Greenwich St, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.8018981,"lng":-122.4118843},"location_type":"ROOFTOP","viewport":{"south":37.8005491197085,"west":-122.4132332802915,"north":37.8032470802915,"east":-122.4105353197085}},"place_id":"ChIJX3yvF_CAhYAR86D-_r1l92A","plus_code":{"compound_code":"RH2Q+Q6 North Beach, San Francisco, CA, USA","global_code":"849VRH2Q+Q6"},"types":["street_address"]}',
  },
  {
    id: 37,
    entry:
      "We are so sluggish in our mentality that we think the world's problems are not our business, that they have to be resolved by the United Nations or by substituting new leaders for the old.",
    name: 'Why You Never See LEGOS That Actually Works',
    feeling: 'loved',
    date: 1657449891,
    location:
      '{"address_components":[{"long_name":"2527","short_name":"2527","types":["street_number"]},{"long_name":"Lake Street","short_name":"Lake St","types":["route"]},{"long_name":"Lake Street","short_name":"Lake Street","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94121","short_name":"94121","types":["postal_code"]},{"long_name":"1118","short_name":"1118","types":["postal_code_suffix"]}],"formatted_address":"2527 Lake St, San Francisco, CA 94121, USA","geometry":{"bounds":{"south":37.7854472,"west":-122.486805,"north":37.7855796,"east":-122.4867122},"location":{"lat":37.7855054,"lng":-122.4867572},"location_type":"ROOFTOP","viewport":{"south":37.7841644197085,"west":-122.4881075802915,"north":37.7868623802915,"east":-122.4854096197085}},"place_id":"ChIJMxwtWgGHhYARDXqV8GBjiqA","types":["premise"]}',
  },
  {
    id: 38,
    entry:
      'we do not ask. We want to be told. One of the most curious things in the structure of our psyche is that we all want to be told because we are the result of the propaganda of ten thousand years. We want to have our thinking confirmed and corroborated by another, whereas to ask a question is to ask it of yourself.',
    name: 'Learn To (Do) LEGOS Like A Professional',
    feeling: 'calm',
    date: 1644206240,
    location:
      '{"address_components":[{"long_name":"79","short_name":"79","types":["street_number"]},{"long_name":"Cole Drive","short_name":"Cole Dr","types":["route"]},{"long_name":"Sausalito","short_name":"Sausalito","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94965","short_name":"94965","types":["postal_code"]},{"long_name":"1208","short_name":"1208","types":["postal_code_suffix"]}],"formatted_address":"79 Cole Dr, Sausalito, CA 94965, USA","geometry":{"bounds":{"south":37.867128,"west":-122.5105205,"north":37.8676584,"east":-122.5101392},"location":{"lat":37.8675728,"lng":-122.5102792},"location_type":"ROOFTOP","viewport":{"south":37.86604421970851,"west":-122.5116788302915,"north":37.86874218029151,"east":-122.5089808697085}},"place_id":"ChIJDWSf9A2FhYAR5ix_1hhcz-M","types":["premise"]}',
  },
  {
    id: 39,
    entry:
      "You cannot reconcile creativeness with technical achievement. You may be perfect in playing the piano, and not be creative. You may be able to handle color, to put paint on canvas most cleverly, and not be a creative painter...having lost the song, we pursue the singer. We learn from the singer the technique of song, but there is no song; and I say the song is essential, the joy of singing is essential. When the joy is there, the technique can be built up from nothing; you will invent your own technique, you won't have to study elocution or style. When you have, you see, and the very seeing of beauty is an art.",
    name: 'Being A Star In Your Industry Is A Matter Of LEGOS',
    feeling: 'sad',
    date: 1633990637,
    location:
      '{"address_components":[{"long_name":"9","short_name":"9","types":["street_number"]},{"long_name":"Starbuck Drive","short_name":"Starbuck Dr","types":["route"]},{"long_name":"Muir Beach","short_name":"Muir Beach","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94965","short_name":"94965","types":["postal_code"]},{"long_name":"9716","short_name":"9716","types":["postal_code_suffix"]}],"formatted_address":"9 Starbuck Dr, Muir Beach, CA 94965, USA","geometry":{"bounds":{"south":37.8640551,"west":-122.5833991,"north":37.864162,"east":-122.5832556},"location":{"lat":37.8641228,"lng":-122.5833369},"location_type":"ROOFTOP","viewport":{"south":37.86275956970849,"west":-122.5846763302915,"north":37.86545753029149,"east":-122.5819783697085}},"place_id":"ChIJWWpHpjKOhYARnYAnBKTIh7M","types":["premise"]}',
  },
  {
    id: 40,
    entry:
      'Because we want to be inwardly secure, we are constantly seeking methods and means for this security, and thereby we create authority, the worship of another, which destroys comprehension, that spontaneous tranquility of mind in which alone there can be a state of creativeness.',
    name: 'Where Is The Best LEGOS?',
    feeling: 'angry',
    date: 1655212792,
    location:
      '{"address_components":[{"long_name":"239","short_name":"239","types":["street_number"]},{"long_name":"Ethel Avenue","short_name":"Ethel Ave","types":["route"]},{"long_name":"Mill Valley","short_name":"Mill Valley","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94941","short_name":"94941","types":["postal_code"]},{"long_name":"2731","short_name":"2731","types":["postal_code_suffix"]}],"formatted_address":"239 Ethel Ave, Mill Valley, CA 94941, USA","geometry":{"bounds":{"south":37.9027022,"west":-122.5445775,"north":37.9029665,"east":-122.5443753},"location":{"lat":37.9028404,"lng":-122.5444997},"location_type":"ROOFTOP","viewport":{"south":37.9014853697085,"west":-122.5458253802915,"north":37.9041833302915,"east":-122.5431274197085}},"place_id":"ChIJsUJo8wyQhYARtdsSo5LAejw","types":["premise"]}',
  },
  {
    id: 41,
    entry:
      'There must be a certain amount of imitation, copying, in outward technique, but when there is inward, psychological imitation surely we cease to be creative.',
    name: 'Make Your LEGOSA Reality',
    feeling: 'loved',
    date: 1617128100,
    location:
      '{"address_components":[{"long_name":"RFW8+M2","short_name":"RFW8+M2","types":["plus_code"]},{"long_name":"Tamalpais-Homestead Valley","short_name":"Tamalpais-Homestead Valley","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"RFW8+M2 Tamalpais-Homestead Valley, CA, USA","geometry":{"bounds":{"south":37.846625,"west":-122.535,"north":37.84675,"east":-122.534875},"location":{"lat":37.8466856,"lng":-122.5349251},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.84533851970849,"west":-122.5362864802915,"north":37.84803648029149,"east":-122.5335885197085}},"place_id":"GhIJQP-YMWDsQkARz5N8NjyiXsA","plus_code":{"compound_code":"RFW8+M2 Tamalpais-Homestead Valley, CA, USA","global_code":"849VRFW8+M2"},"types":["plus_code"]}',
  },
  {
    id: 42,
    entry:
      "Do you know that even when you look at a tree and say, `That is an oak tree', or `that is a banyan tree', the naming of the tree, which is botanical knowledge, has so conditioned your mind that the word comes between you and actually seeing the tree? To come in contact with the tree you have to put your hand on it and the word will not help you to touch it.",
    name: 'If You Do Not (Do)LEGOS Now, You Will Hate Yourself Later',
    feeling: 'calm',
    date: 1631540142,
    location:
      '{"address_components":[{"long_name":"801","short_name":"801","types":["street_number"]},{"long_name":"Panoramic Highway","short_name":"Panoramic Hwy","types":["route"]},{"long_name":"Mill Valley","short_name":"Mill Valley","types":["locality","political"]},{"long_name":"Marin County","short_name":"Marin County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94941","short_name":"94941","types":["postal_code"]}],"formatted_address":"801 Panoramic Hwy, Mill Valley, CA 94941, USA","geometry":{"location":{"lat":37.904614,"lng":-122.580487},"location_type":"ROOFTOP","viewport":{"south":37.9032650197085,"west":-122.5818359802915,"north":37.9059629802915,"east":-122.5791380197085}},"place_id":"ChIJ-wrq7VKQhYAREvySw0OXbw4","plus_code":{"compound_code":"WC39+RR Mill Valley, CA, USA","global_code":"849VWC39+RR"},"types":["street_address"]}',
  },
  {
    id: 43,
    entry:
      "To find out if there is actually such freedom one must be aware of one's own conditioning, of the problems, of the monotonous shallowness, emptiness, insufficiency of one's daily life, and above all one must be aware of fear. One must be aware of oneself neither introspectively nor analytically, but actually be aware of oneself as one is and see if it is at all possible to be entirely free of all those issues that seem to clog the mind.To explore, there must be freedom, not at the end, but right at the beginning. Unless one is free one cannot explore, investigate or examine. Two things are essential: freedom and the act of learning. One cannot learn about oneself unless one is free, free so that one can observe, not according to any pattern, formula or convept, but actually observe oneself as one is.",
    name: 'Learn Exactly How I Improved LEGOS In 2 Days',
    feeling: 'happy',
    date: 1650790233,
    location:
      '{"address_components":[{"long_name":"Forest Road","short_name":"Forest Rd","types":["route"]},{"long_name":"Yerba Buena Island","short_name":"Yerba Buena Island","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94130","short_name":"94130","types":["postal_code"]}],"formatted_address":"Yerba Buena Island, Forest Rd, San Francisco, CA 94130, USA","geometry":{"location":{"lat":37.809317,"lng":-122.3665156},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8079680197085,"west":-122.3678645802915,"north":37.8106659802915,"east":-122.3651666197085}},"place_id":"ChIJLS157gmBhYARosW5LEu18cE","plus_code":{"compound_code":"RJ5M+P9 Yerba Buena Island, San Francisco, CA, USA","global_code":"849VRJ5M+P9"},"types":["establishment","point_of_interest","tourist_attraction"]}',
  },
  {
    id: 44,
    entry:
      'A dialogue is very important. It is a form of communication in which question and answer continue till a question is left without an answer. Thus the question is suspended between the two persons involved in this answer and question. It is like a bud with untouched blossoms . . . If the question is left totally untouched by thought, it then has its own answer because the questioner and answerer, as persons, have disappeared. This is a form of dialogue in which investigation reaches a certain point of intensity and depth, which then has a quality that thought can never reach.',
    name: '5 Sexy Ways To Improve Your LEGOS',
    feeling: 'happy',
    date: 1662435247,
    location:
      '{"address_components":[{"long_name":"425","short_name":"425","types":["street_number"]},{"long_name":"2nd Street","short_name":"2nd St","types":["route"]},{"long_name":"Rincon Hill","short_name":"Rincon Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94107","short_name":"94107","types":["postal_code"]},{"long_name":"1487","short_name":"1487","types":["postal_code_suffix"]}],"formatted_address":"425 2nd St, San Francisco, CA 94107, USA","geometry":{"location":{"lat":37.7840744,"lng":-122.3936515},"location_type":"ROOFTOP","viewport":{"south":37.78272541970851,"west":-122.3950004802915,"north":37.7854233802915,"east":-122.3923025197085}},"place_id":"ChIJc5a4W3mAhYARXUrHoKXwzGM","plus_code":{"compound_code":"QJM4+JG Rincon Hill, San Francisco, CA, USA","global_code":"849VQJM4+JG"},"types":["art_gallery","establishment","point_of_interest"]}',
  },
  {
    id: 45,
    entry:
      "If I am all the time measuring myself against you, struggling to be like you, then I am denying what I am myself. Therefore I am creating an illusion. When I have understood that comparison in any form leads only to greater illusion and greater misery, just as when I analyse myself, add to my knowledge of myself bit by bit, or identify myself with something outside myself, whether it be the State, a saviour or an ideology - when I understand that all such processes lead only to greater conformity and therefore greater conflict - when I see all this I put it completely away. Then my mind is no longer seeking. It is very important to understand this. Then my mind is no longer groping, searching, questioning. This does not mean that my mind is satisfied with things as they are, but such a mind has no illusion. Such a mind can then move in a totally different dimension. The dimension in which we usually live, the life of every day which is pain, pleasure and fear, has conditioned the mind, limited the nature of the mind, and when that pain, pleasure and fear have gone (which does not mean that you no longer have joy: joy is something entirely different from pleasure) - then the mind functions in a different dimension in which there is no conflict, no sense of `otherness'.",
    name: 'How LEGOS Made Me A Better Salesperson',
    feeling: 'calm',
    date: 1638603621,
    location:
      '{"address_components":[{"long_name":"95","short_name":"95","types":["street_number"]},{"long_name":"7th Street","short_name":"7th St","types":["route"]},{"long_name":"Mid-Market","short_name":"Mid-Market","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94103","short_name":"94103","types":["postal_code"]}],"formatted_address":"95 7th St, San Francisco, CA 94103, USA","geometry":{"location":{"lat":37.7799909,"lng":-122.4110596},"location_type":"ROOFTOP","viewport":{"south":37.77864191970851,"west":-122.4124085802915,"north":37.7813398802915,"east":-122.4097106197085}},"place_id":"ChIJuVATnoSAhYARSOZ2gDprsSo","plus_code":{"compound_code":"QHHQ+XH Mid-Market, San Francisco, CA, USA","global_code":"849VQHHQ+XH"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 46,
    entry:
      'Meditation is to be aware of every thought and of every feeling, never to say it is right or wrong but just to watch it and move with it. In that watching you begin to understand the whole movement of thought and feeling. And out of this awareness comes silence. Silence put together by thought is stagnation, is dead, but the silence that comes when thought has understood its own beginning, the nature of itself, understood how all thought is never free but always old - this silence is meditation in which the meditator is entirely absent, for the mind has emptied itself of the past.',
    name: 'Congratulations! Your LEGOS Is (Are) About To Stop Being Relevant',
    feeling: 'calm',
    date: 1616141014,
    location:
      '{"address_components":[{"long_name":"1301","short_name":"1301","types":["street_number"]},{"long_name":"Cesar Chavez","short_name":"Cesar Chavez","types":["route"]},{"long_name":"Islais Creek","short_name":"Islais Creek","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94124","short_name":"94124","types":["postal_code"]},{"long_name":"1101","short_name":"1101","types":["postal_code_suffix"]}],"formatted_address":"1301 Cesar Chavez, San Francisco, CA 94124, USA","geometry":{"bounds":{"south":37.74928999999999,"west":-122.3912439,"north":37.7498291,"east":-122.3906826},"location":{"lat":37.74966560000001,"lng":-122.3908867},"location_type":"ROOFTOP","viewport":{"south":37.7482105697085,"west":-122.3923122302915,"north":37.7509085302915,"east":-122.3896142697085}},"place_id":"ChIJJ33TcK9_j4ARRItgHkWUQp4","types":["premise"]}',
  },
  {
    id: 47,
    entry:
      'Action has meaning only in relationship, and without understanding relationship, action on any level will only breed conflict. The understanding of relationship is infinitely more important than the search for any plan of action.',
    name: 'Find Out Now, What Should You Do For Fast LEGOS?',
    feeling: 'loved',
    date: 1640397876,
    location:
      '{"address_components":[{"long_name":"100","short_name":"100","types":["street_number"]},{"long_name":"Martin Luther King Junior Drive","short_name":"Martin Luther King Jr Dr","types":["route"]},{"long_name":"Golden Gate Park","short_name":"Golden Gate Park","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]}],"formatted_address":"100 Martin Luther King Jr Dr, San Francisco, CA 94122, USA","geometry":{"location":{"lat":37.7676543,"lng":-122.4647993},"location_type":"ROOFTOP","viewport":{"south":37.7663053197085,"west":-122.4661482802915,"north":37.76900328029149,"east":-122.4634503197085}},"place_id":"ChIJz61CLF-HhYAR7TvLtmY25MM","plus_code":{"compound_code":"QG9P+33 Golden Gate Park, San Francisco, CA, USA","global_code":"849VQG9P+33"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 48,
    entry:
      'When one loses the deep intimate relationship with nature, then temples, mosques and churches become important.',
    name: 'LEGOS And Love Have 4 Things In Common',
    feeling: 'anxious',
    date: 1635476705,
    location:
      '{"address_components":[{"long_name":"1573","short_name":"1573","types":["street_number"]},{"long_name":"10th Avenue","short_name":"10th Ave","types":["route"]},{"long_name":"Inner Sunset","short_name":"Inner Sunset","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]},{"long_name":"3622","short_name":"3622","types":["postal_code_suffix"]}],"formatted_address":"1573 10th Ave, San Francisco, CA 94122, USA","geometry":{"bounds":{"south":37.7589838,"west":-122.4673539,"north":37.7590554,"east":-122.467195},"location":{"lat":37.7590186,"lng":-122.4672792},"location_type":"ROOFTOP","viewport":{"south":37.75767061970851,"west":-122.4686234302915,"north":37.76036858029151,"east":-122.4659254697085}},"place_id":"ChIJCe0qu1-HhYAR5skLn0SE-nA","types":["premise"]}',
  },
  {
    id: 49,
    entry:
      'Poverty becomes a marvellously beautiful thing when the mindis free of society. One must become poor inwardly for then there isno seeking, no asking, no desire, no - nothing! It is only this inwardpoverty that can see the truth of a life in which there is no conflict at all',
    name: 'Death, LEGOS And Taxes',
    feeling: 'calm',
    date: 1627268201,
    location:
      '{"address_components":[{"long_name":"1953","short_name":"1953","types":["street_number"]},{"long_name":"O\'Farrell Street","short_name":"O\'Farrell St","types":["route"]},{"long_name":"Western Addition","short_name":"Western Addition","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94115","short_name":"94115","types":["postal_code"]},{"long_name":"3506","short_name":"3506","types":["postal_code_suffix"]}],"formatted_address":"1953 O\'Farrell St, San Francisco, CA 94115, USA","geometry":{"bounds":{"south":37.7825278,"west":-122.4368886,"north":37.7826651,"east":-122.4367926},"location":{"lat":37.78259300000001,"lng":-122.4368262},"location_type":"ROOFTOP","viewport":{"south":37.7812474697085,"west":-122.4381895802915,"north":37.7839454302915,"east":-122.4354916197085}},"place_id":"ChIJ45ywbLeAhYARarGNL27c0s4","types":["premise"]}',
  },
  {
    id: 50,
    entry: 'You must be a light unto yourself.',
    name: "Some People Excel At LEGOS And Some Don't - Which One Are You?",
    feeling: 'angry',
    date: 1666303367,
    location:
      '{"address_components":[{"long_name":"2402","short_name":"2402","types":["street_number"]},{"long_name":"Divisadero Street","short_name":"Divisadero St","types":["route"]},{"long_name":"Pacific Heights","short_name":"Pacific Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94115","short_name":"94115","types":["postal_code"]},{"long_name":"1118","short_name":"1118","types":["postal_code_suffix"]}],"formatted_address":"2402 Divisadero St, San Francisco, CA 94115, USA","geometry":{"location":{"lat":37.7918434,"lng":-122.4410032},"location_type":"ROOFTOP","viewport":{"south":37.7904944197085,"west":-122.4423521802915,"north":37.79319238029149,"east":-122.4396542197085}},"place_id":"ChIJBcdCf86AhYARNIt-Q3oQnII","plus_code":{"compound_code":"QHR5+PH Pacific Heights, San Francisco, CA, USA","global_code":"849VQHR5+PH"},"types":["street_address"]}',
  },
  {
    id: 51,
    entry:
      'What we are trying to do is to understand this confusion and not cover it up with quotations.',
    name: 'Why You Really Need (A) LEGOS',
    feeling: 'loved',
    date: 1625477774,
    location:
      '{"address_components":[{"long_name":"509","short_name":"509","types":["street_number"]},{"long_name":"44th Avenue","short_name":"44th Ave","types":["route"]},{"long_name":"Sutro Heights","short_name":"Sutro Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94121","short_name":"94121","types":["postal_code"]},{"long_name":"2538","short_name":"2538","types":["postal_code_suffix"]}],"formatted_address":"509 44th Ave, San Francisco, CA 94121, USA","geometry":{"bounds":{"south":37.7787804,"west":-122.5054116,"north":37.7788548,"east":-122.5052272},"location":{"lat":37.7788118,"lng":-122.5053385},"location_type":"ROOFTOP","viewport":{"south":37.77746861970849,"west":-122.5066683802915,"north":37.78016658029149,"east":-122.5039704197085}},"place_id":"ChIJR7_iiLGHhYARHx8CjxstkJA","types":["premise"]}',
  },
  {
    id: 52,
    entry: 'Can you look at a flower without thinking?',
    name: 'The Next 3 Things To Immediately Do About LEGOS',
    feeling: 'anxious',
    date: 1628949517,
    location:
      '{"address_components":[{"long_name":"3927","short_name":"3927","types":["street_number"]},{"long_name":"Lincoln Way","short_name":"Lincoln Way","types":["route"]},{"long_name":"Outer Sunset","short_name":"Outer Sunset","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]},{"long_name":"1228","short_name":"1228","types":["postal_code_suffix"]}],"formatted_address":"3927 Lincoln Way, San Francisco, CA 94122, USA","geometry":{"bounds":{"south":37.764106,"west":-122.5003529,"north":37.7642874,"east":-122.5002565},"location":{"lat":37.764209,"lng":-122.5002975},"location_type":"ROOFTOP","viewport":{"south":37.7628477197085,"west":-122.5016536802915,"north":37.7655456802915,"east":-122.4989557197085}},"place_id":"ChIJyVsy-ZiHhYARDAJRTYeRPxI","types":["premise"]}',
  },
  {
    id: 53,
    entry:
      'When you call yourself an Indian or a Muslim or a Christian or a European, or anything else, you are being violent. Do you see why it is violent? Because you are separating yourself from the rest of mankind. When you separate yourself by belief, by nationality, by tradition, it breeds violence. So a man who is seeking to understand violence does not belong to any country, to any religion, to any political party or partial system; he is concerned with the total understanding of mankind.',
    name: 'How To Lose Money With LEGOS',
    feeling: 'sad',
    date: 1620979827,
    location:
      '{"address_components":[{"long_name":"1574","short_name":"1574","types":["street_number"]},{"long_name":"18th Avenue","short_name":"18th Ave","types":["route"]},{"long_name":"Golden Gate Heights","short_name":"Golden Gate Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]},{"long_name":"3411","short_name":"3411","types":["postal_code_suffix"]}],"formatted_address":"1574 18th Ave, San Francisco, CA 94122, USA","geometry":{"bounds":{"south":37.75847419999999,"west":-122.4755591,"north":37.7585503,"east":-122.4753333},"location":{"lat":37.7585107,"lng":-122.4753609},"location_type":"ROOFTOP","viewport":{"south":37.75716326970849,"west":-122.4767951802915,"north":37.75986123029149,"east":-122.4740972197085}},"place_id":"ChIJSRNJ52OHhYAR65fKDBtk3lg","types":["premise"]}',
  },
  {
    id: 54,
    entry:
      'Freedom and love go together. Love is not a reaction. To love is not to ask anything in return, not even to feel that you are giving something, and it is only such love that can know freedom.',
    name: 'How I Improved My LEGOS In One Easy Lesson',
    feeling: 'loved',
    date: 1645464522,
    location:
      '{"address_components":[{"long_name":"1301","short_name":"1301","types":["street_number"]},{"long_name":"Church Street","short_name":"Church St","types":["route"]},{"long_name":"Dolores Heights","short_name":"Dolores Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94114","short_name":"94114","types":["postal_code"]},{"long_name":"3911","short_name":"3911","types":["postal_code_suffix"]}],"formatted_address":"1301 Church St, San Francisco, CA 94114, USA","geometry":{"location":{"lat":37.7499981,"lng":-122.427121},"location_type":"ROOFTOP","viewport":{"south":37.7486491197085,"west":-122.4284699802915,"north":37.7513470802915,"east":-122.4257720197085}},"place_id":"ChIJMUEAJ2t-j4ARTSwI24zjL54","plus_code":{"compound_code":"PHXF+X5 Dolores Heights, San Francisco, CA, USA","global_code":"849VPHXF+X5"},"types":["street_address"]}',
  },
  {
    id: 55,
    entry: 'A man who knows what it is to have humility is a vain man.',
    name: 'Ho To (Do) LEGOS Without Leaving Your Office(House).',
    feeling: 'happy',
    date: 1634917420,
    location:
      '{"address_components":[{"long_name":"114","short_name":"114","types":["street_number"]},{"long_name":"Santa Paula Avenue","short_name":"Santa Paula Ave","types":["route"]},{"long_name":"Saint Francis Wood","short_name":"Saint Francis Wood","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94127","short_name":"94127","types":["postal_code"]},{"long_name":"1524","short_name":"1524","types":["postal_code_suffix"]}],"formatted_address":"114 Santa Paula Ave, San Francisco, CA 94127, USA","geometry":{"bounds":{"south":37.7377227,"west":-122.4636941,"north":37.737885,"east":-122.4634501},"location":{"lat":37.7377772,"lng":-122.4635753},"location_type":"ROOFTOP","viewport":{"south":37.7364548697085,"west":-122.4649210802915,"north":37.7391528302915,"east":-122.4622231197085}},"place_id":"ChIJt5KuJ8J9j4ARCMicL9zFSXQ","types":["premise"]}',
  },
  {
    id: 56,
    entry:
      'Things, relationship, and ideas are so transparently impermanent, we are ever made unhappy by them...Things are impermanent, they wear out and are lost; relationship is constant friction and death awaits; ideas and beliefs have no stability, no permanency. We seek happiness in them and yet do not realize their impermanency. So sorrow becomes our constant companion and overcoming it our problem.',
    name: "Are You Embarrassed By Your LEGOS Skills? Here's What To Do",
    feeling: 'calm',
    date: 1621518159,
    location:
      '{"address_components":[{"long_name":"8072","short_name":"8072","types":["street_number"]},{"long_name":"Taraval Street","short_name":"Taraval St","types":["route"]},{"long_name":"Golden Gate Heights","short_name":"Golden Gate Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94116","short_name":"94116","types":["postal_code"]},{"long_name":"2512","short_name":"2512","types":["postal_code_suffix"]}],"formatted_address":"8072 Taraval St, San Francisco, CA 94116, USA","geometry":{"location":{"lat":37.7432777,"lng":-122.4734049},"location_type":"ROOFTOP","viewport":{"south":37.7419287197085,"west":-122.4747538802915,"north":37.7446266802915,"east":-122.4720559197085}},"place_id":"ChIJlZ-DtpN9j4ARtNQ28LTx4eo","plus_code":{"compound_code":"PGVG+8J Golden Gate Heights, San Francisco, CA, USA","global_code":"849VPGVG+8J"},"types":["street_address"]}',
  },
  {
    id: 57,
    entry:
      "The very desire to be certain,to be secure,is the beginning of bondage.It's only when the mind is not caught in the net of certainty,and is not seeking certainty, that it is in a state of discovery.",
    name: 'The Secrets To LEGOS',
    feeling: 'sad',
    date: 1634365828,
    location:
      '{"address_components":[{"long_name":"969","short_name":"969","types":["street_number"]},{"long_name":"Burnett Avenue","short_name":"Burnett Ave","types":["route"]},{"long_name":"Twin Peaks","short_name":"Twin Peaks","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94131","short_name":"94131","types":["postal_code"]},{"long_name":"1570","short_name":"1570","types":["postal_code_suffix"]}],"formatted_address":"969 Burnett Ave, San Francisco, CA 94131, USA","geometry":{"bounds":{"south":37.74778209999999,"west":-122.4448687,"north":37.7479058,"east":-122.4446465},"location":{"lat":37.7478471,"lng":-122.4447112},"location_type":"ROOFTOP","viewport":{"south":37.74649496970849,"west":-122.4461065802915,"north":37.74919293029149,"east":-122.4434086197085}},"place_id":"ChIJXzq8WQp-j4ARisLKx4OMgQg","types":["premise"]}',
  },
  {
    id: 58,
    entry:
      'It is only in virtue that you can discover, that you can live - not in the cultivation of a virtue, which merely brings about respectability, not understanding and freedom.',
    name: 'Essential LEGOS Smartphone Apps',
    feeling: 'sad',
    date: 1643270043,
    location:
      '{"address_components":[{"long_name":"71","short_name":"71","types":["street_number"]},{"long_name":"Lucky Street","short_name":"Lucky St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]},{"long_name":"4119","short_name":"4119","types":["postal_code_suffix"]}],"formatted_address":"71 Lucky St, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7514096,"lng":-122.4132989},"location_type":"ROOFTOP","viewport":{"south":37.7500606197085,"west":-122.4146478802915,"north":37.7527585802915,"east":-122.4119499197085}},"place_id":"ChIJCzlZGEZ-j4AROMmSetfgkzk","plus_code":{"compound_code":"QH2P+HM Mission District, San Francisco, CA, USA","global_code":"849VQH2P+HM"},"types":["street_address"]}',
  },
  {
    id: 59,
    entry:
      'Religion is the sense of comprehension of the totality of existence.',
    name: 'How To Use LEGOS To Desire',
    feeling: 'sad',
    date: 1618550136,
    location:
      '{"address_components":[{"long_name":"3200","short_name":"3200","types":["street_number"]},{"long_name":"24th Street","short_name":"24th St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"3200 24th St, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7524774,"lng":-122.4164941},"location_type":"ROOFTOP","viewport":{"south":37.75112841970849,"west":-122.4178430802915,"north":37.75382638029149,"east":-122.4151451197085}},"place_id":"ChIJCVl8EUd-j4ARGVQfw8O8U6I","plus_code":{"compound_code":"QH2M+XC Mission District, San Francisco, CA, USA","global_code":"849VQH2M+XC"},"types":["bar","establishment","food","point_of_interest","restaurant"]}',
  },
  {
    id: 60,
    entry: 'Happy is the man who is nothing.',
    name: '3 Ways Twitter Destroyed My LEGOS Without Me Noticing',
    feeling: 'sad',
    date: 1654919464,
    location:
      '{"address_components":[{"long_name":"986-998","short_name":"986-998","types":["street_number"]},{"long_name":"Treat Avenue","short_name":"Treat Ave","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"986-998 Treat Ave, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7543286,"lng":-122.4130051},"location_type":"ROOFTOP","viewport":{"south":37.7529796197085,"west":-122.4143540802915,"north":37.7556775802915,"east":-122.4116561197085}},"place_id":"ChIJc7uXRlp_j4AR7_OWyHpwgyw","plus_code":{"compound_code":"QH3P+PQ Mission District, San Francisco, CA, USA","global_code":"849VQH3P+PQ"},"types":["establishment","food","point_of_interest","restaurant"]}',
  },
  {
    id: 61,
    entry: 'Analysis does not transform consciousness.',
    name: 'Why Most LEGOS Fail',
    feeling: 'sad',
    date: 1626489382,
    location:
      '{"address_components":[{"long_name":"2963","short_name":"2963","types":["street_number"]},{"long_name":"Folsom Street","short_name":"Folsom St","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]}],"formatted_address":"2963 Folsom St, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7498707,"lng":-122.4137095},"location_type":"ROOFTOP","viewport":{"south":37.7485217197085,"west":-122.4150584802915,"north":37.7512196802915,"east":-122.4123605197085}},"place_id":"ChIJ7UtK4kV-j4AR-CGKwkh3pz0","plus_code":{"compound_code":"PHXP+WG Mission District, San Francisco, CA, USA","global_code":"849VPHXP+WG"},"types":["street_address"]}',
  },
  {
    id: 62,
    entry:
      'If you begin to understand what you are without trying to change it, then what you are undergoes a transformation.',
    name: 'How To Learn LEGOS',
    feeling: 'sad',
    date: 1615128085,
    location:
      '{"address_components":[{"long_name":"1150","short_name":"1150","types":["street_number"]},{"long_name":"South Van Ness Avenue","short_name":"S Van Ness Ave","types":["route"]},{"long_name":"Mission District","short_name":"Mission District","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]},{"long_name":"3205","short_name":"3205","types":["postal_code_suffix"]}],"formatted_address":"1150 S Van Ness Ave, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7547267,"lng":-122.4168576},"location_type":"ROOFTOP","viewport":{"south":37.7533777197085,"west":-122.4182065802915,"north":37.7560756802915,"east":-122.4155086197085}},"place_id":"ChIJs6x-ljh-j4AR9TchXfyiM1Y","plus_code":{"compound_code":"QH3M+V7 Mission District, San Francisco, CA, USA","global_code":"849VQH3M+V7"},"types":["street_address"]}',
  },
  {
    id: 63,
    entry:
      'If, living in the world, you refuse to be a part of it, you will help others out of this chaos - not in the future, not tomorrow, but now.',
    name: 'The LEGOS That Wins Customers',
    feeling: 'loved',
    date: 1665480078,
    location:
      '{"address_components":[{"long_name":"# 903","short_name":"# 903","types":["subpremise"]},{"long_name":"999","short_name":"999","types":["street_number"]},{"long_name":"Green Street","short_name":"Green St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"3649","short_name":"3649","types":["postal_code_suffix"]}],"formatted_address":"999 Green St # 903, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.7984729,"lng":-122.4153578},"location_type":"ROOFTOP","viewport":{"south":37.7971239197085,"west":-122.4167067802915,"north":37.7998218802915,"east":-122.4140088197085}},"place_id":"ChIJv7i7Xu6AhYARRV0eVw9Y2ag","plus_code":{"compound_code":"QHXM+9V Russian Hill, San Francisco, CA, USA","global_code":"849VQHXM+9V"},"types":["establishment","general_contractor","point_of_interest"]}',
  },
  {
    id: 64,
    entry:
      'If, living in the world, you refuse to be a part of it, you will help other out of this chaos - not in the future, not tomorrow, but now.',
    name: 'Here Is A Method That Is Helping LEGOS',
    feeling: 'loved',
    date: 1641881927,
    location:
      '{"address_components":[{"long_name":"850A","short_name":"850A","types":["street_number"]},{"long_name":"Union Street","short_name":"Union St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]}],"formatted_address":"850A Union St, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.8000702,"lng":-122.4132621},"location_type":"ROOFTOP","viewport":{"south":37.7987212197085,"west":-122.4146110802915,"north":37.8014191802915,"east":-122.4119131197085}},"place_id":"ChIJXfMp0--AhYARRQ0jj3NFdsE","plus_code":{"compound_code":"RH2P+2M Russian Hill, San Francisco, CA, USA","global_code":"849VRH2P+2M"},"types":["street_address"]}',
  },
  {
    id: 65,
    entry:
      'Identification with the rag called the national flag is an emotional and sentimental factor and for that factor you are willing to kill another - and that is called, the love of your country, love of the neighbor . . .? One can see that where sentiment and emotion come in, love is not.',
    name: "It's All About (The) LEGOS",
    feeling: 'loved',
    date: 1623408811,
    location:
      '{"address_components":[{"long_name":"2029","short_name":"2029","types":["street_number"]},{"long_name":"Taylor Street","short_name":"Taylor St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"2613","short_name":"2613","types":["postal_code_suffix"]}],"formatted_address":"2029 Taylor St, San Francisco, CA 94133, USA","geometry":{"bounds":{"south":37.8011691,"west":-122.4147011,"north":37.80126500000001,"east":-122.4145172},"location":{"lat":37.8012231,"lng":-122.4146585},"location_type":"ROOFTOP","viewport":{"south":37.7998680697085,"west":-122.4159581302915,"north":37.8025660302915,"east":-122.4132601697085}},"place_id":"ChIJ1VjZlu-AhYARXdYlG8i-WHQ","types":["premise"]}',
  },
  {
    id: 66,
    entry:
      'Patriotism, whether it is of the Western kind, or of the Eastern kind, is the same, a poison in human beings that is really distorting thought. So patriotism is a disease, and when you begin to realize, become aware that it is a disease, then you will see how your mind is reacting to that disease. When, in time of war, the whole world talks of patriotism, you will know the falseness of it, and therefore you will act as a true human being',
    name: 'The Secrets To Finding World Class Tools For Your LEGOS Quickly',
    feeling: 'loved',
    date: 1670641666,
    location:
      '{"address_components":[{"long_name":"930","short_name":"930","types":["street_number"]},{"long_name":"Union Street","short_name":"Union St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"2630","short_name":"2630","types":["postal_code_suffix"]}],"formatted_address":"930 Union St, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.8000357,"lng":-122.4147835},"location_type":"ROOFTOP","viewport":{"south":37.7986867197085,"west":-122.4161324802915,"north":37.8013846802915,"east":-122.4134345197085}},"place_id":"ChIJebEgsu-AhYARPLoUTUF3U8M","plus_code":{"compound_code":"RH2P+23 Russian Hill, San Francisco, CA, USA","global_code":"849VRH2P+23"},"types":["street_address"]}',
  },
  {
    id: 67,
    entry:
      "I do not know if you have ever examined how you listen, it doesn't matter to what, whether to a bird, to the wind in the leaves, to the rushing waters, or how you listen to a dialogue with yourself, to your conversation in various relationships with your intimate friends, your wife or husband. If we try to listen we find it extraordinarily difficult, because we are always projecting our opinions and ideas, our prejudices, our background, our inclinations, our impulses; when they dominate we hardly listen to what is being said. In that state there is no value at all. One listens and therefore learns, only in a state of attention, a state of silence in which this whole background is in abeyance, is quiet; then, it seems to me, it is possible to communicate.",
    name: 'Revolutionize Your LEGOS With These Easy-peasy Tips',
    feeling: 'loved',
    date: 1667826408,
    location:
      '{"address_components":[{"long_name":"820","short_name":"820","types":["street_number"]},{"long_name":"Green Street","short_name":"Green St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"3717","short_name":"3717","types":["postal_code_suffix"]}],"formatted_address":"820 Green St, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.7992141,"lng":-122.4127188},"location_type":"ROOFTOP","viewport":{"south":37.7978651197085,"west":-122.4140677802915,"north":37.8005630802915,"east":-122.4113698197085}},"place_id":"ChIJmTf-H-6AhYARekhAG-xLwo8","plus_code":{"compound_code":"QHXP+MW Russian Hill, San Francisco, CA, USA","global_code":"849VQHXP+MW"},"types":["street_address"]}',
  },
  {
    id: 68,
    entry:
      'Tradition becomes our security, and when the mind is secure it is in decay.',
    name: 'Guaranteed No Stress LEGOS',
    feeling: 'happy',
    date: 1668750424,
    location:
      '{"address_components":[{"long_name":"743a","short_name":"743a","types":["street_number"]},{"long_name":"Union Street","short_name":"Union St","types":["route"]},{"long_name":"Russian Hill","short_name":"Russian Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94133","short_name":"94133","types":["postal_code"]},{"long_name":"7011","short_name":"7011","types":["postal_code_suffix"]}],"formatted_address":"743a Union St, San Francisco, CA 94133, USA","geometry":{"location":{"lat":37.80007150000001,"lng":-122.4115478},"location_type":"ROOFTOP","viewport":{"south":37.79872251970851,"west":-122.4128967802915,"north":37.80142048029151,"east":-122.4101988197085}},"place_id":"ChIJQQ47xvGAhYARzRmgQ6c5kIY","plus_code":{"compound_code":"RH2Q+29 Russian Hill, San Francisco, CA, USA","global_code":"849VRH2Q+29"},"types":["street_address"]}',
  },
  {
    id: 69,
    entry:
      'If we can really understand the problem  the answer will come out of it  because the answer is not separate from the problem.',
    name: 'Improve(Increase) Your LEGOS In 3 Days',
    feeling: 'calm',
    date: 1630250872,
    location:
      '{"address_components":[{"long_name":"5406","short_name":"5406","types":["street_number"]},{"long_name":"Presidio Boulevard","short_name":"Presidio Blvd","types":["route"]},{"long_name":"Presidio of San Francisco","short_name":"Presidio of San Francisco","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94129","short_name":"94129","types":["postal_code"]}],"formatted_address":"5406 Presidio Blvd, San Francisco, CA 94129, USA","geometry":{"location":{"lat":37.79665170000001,"lng":-122.4518918},"location_type":"ROOFTOP","viewport":{"south":37.79530271970851,"west":-122.4532407802915,"north":37.79800068029151,"east":-122.4505428197085}},"place_id":"ChIJI7GH3SuHhYARDU_N70Lqnlk","plus_code":{"compound_code":"QGWX+M6 Presidio of San Francisco, San Francisco, CA, USA","global_code":"849VQGWX+M6"},"types":["street_address"]}',
  },
  {
    id: 70,
    entry: 'To seek fulfillment is to invite frustration.',
    name: '5 Simple Steps To An Effective LEGOS Strategy',
    feeling: 'sad',
    date: 1611211230,
    location:
      '{"address_components":[{"long_name":"1450","short_name":"1450","types":["street_number"]},{"long_name":"Laguna Street","short_name":"Laguna St","types":["route"]},{"long_name":"Cathedral Hill","short_name":"Cathedral Hill","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94115","short_name":"94115","types":["postal_code"]},{"long_name":"3717","short_name":"3717","types":["postal_code_suffix"]}],"formatted_address":"1450 Laguna St, San Francisco, CA 94115, USA","geometry":{"bounds":{"south":37.7844426,"west":-122.4278443,"north":37.7848928,"east":-122.4267796},"location":{"lat":37.7847506,"lng":-122.4273037},"location_type":"ROOFTOP","viewport":{"south":37.7833187197085,"west":-122.4286609302915,"north":37.7860166802915,"east":-122.4259629697085}},"place_id":"ChIJBxAYj76AhYARRyI-_LhYcXQ","types":["premise"]}',
  },
  {
    id: 71,
    entry:
      "Discipline does not mean suppression and control  nor is it adjustment to a pattern or ideology. It means a mind that sees 'what is' and learns from 'what was'.",
    name: 'Should Fixing LEGOS Take 60 Steps?',
    feeling: 'happy',
    date: 1642188816,
    location:
      '{"address_components":[{"long_name":"60","short_name":"60","types":["street_number"]},{"long_name":"San Jacinto Way","short_name":"San Jacinto Way","types":["route"]},{"long_name":"West of Twin Peaks","short_name":"West of Twin Peaks","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94127","short_name":"94127","types":["postal_code"]},{"long_name":"2033","short_name":"2033","types":["postal_code_suffix"]}],"formatted_address":"60 San Jacinto Way, San Francisco, CA 94127, USA","geometry":{"bounds":{"south":37.7333133,"west":-122.4631872,"north":37.73348590000001,"east":-122.4629664},"location":{"lat":37.7333982,"lng":-122.4630446},"location_type":"ROOFTOP","viewport":{"south":37.73205061970851,"west":-122.4644257802915,"north":37.7347485802915,"east":-122.4617278197085}},"place_id":"ChIJcQ5QI8R9j4ARZi4ltSZMt_0","types":["premise"]}',
  },
  {
    id: 72,
    entry:
      'If your eyes are blinded with your worries  you cannot see the beauty of the sunset.',
    name: 'The Ultimate Guide To LEGOS',
    feeling: 'happy',
    date: 1661013092,
    location:
      '{"address_components":[{"long_name":"427","short_name":"427","types":["street_number"]},{"long_name":"Lincoln Avenue","short_name":"Lincoln Ave","types":["route"]},{"long_name":"West Alameda","short_name":"West Alameda","types":["neighborhood","political"]},{"long_name":"Alameda","short_name":"Alameda","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94501","short_name":"94501","types":["postal_code"]},{"long_name":"3235","short_name":"3235","types":["postal_code_suffix"]}],"formatted_address":"427 Lincoln Ave, Alameda, CA 94501, USA","geometry":{"bounds":{"south":37.77550790000001,"west":-122.2846342,"north":37.7758859,"east":-122.2845126},"location":{"lat":37.7757111,"lng":-122.2845797},"location_type":"ROOFTOP","viewport":{"south":37.7743479197085,"west":-122.2859223802915,"north":37.7770458802915,"east":-122.2832244197085}},"place_id":"ChIJu-Y1e9-Aj4ARpIlytNkqrf8","types":["premise"]}',
  },
  {
    id: 73,
    entry:
      'If I follow a particular method of knowing myself, then I shall have the result which that system necessitates; but the result will obviously not be the understanding of myself.',
    name: '5 Things To Do Immediately About LEGOS',
    feeling: 'happy',
    date: 1663963253,
    location:
      '{"address_components":[{"long_name":"3333","short_name":"3333","types":["street_number"]},{"long_name":"Kempton Avenue","short_name":"Kempton Ave","types":["route"]},{"long_name":"Oakland Ave - Harrison St","short_name":"Oakland Ave - Harrison St","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94611","short_name":"94611","types":["postal_code"]},{"long_name":"5825","short_name":"5825","types":["postal_code_suffix"]}],"formatted_address":"3333 Kempton Ave, Oakland, CA 94611, USA","geometry":{"bounds":{"south":37.8202642,"west":-122.2572237,"north":37.8204194,"east":-122.2570225},"location":{"lat":37.82035219999999,"lng":-122.2571247},"location_type":"ROOFTOP","viewport":{"south":37.8189928197085,"west":-122.2584720802915,"north":37.8216907802915,"east":-122.2557741197085}},"place_id":"ChIJGRZyTFaHj4ARopWM1vmHdEE","types":["premise"]}',
  },
  {
    id: 74,
    entry:
      'In oneself lies the whole world and if you know how to look and learn, the door is there and the key is in your hand. Nobody on earth can give you either the key or the door to open, except yourself.',
    name: 'How To Win Buyers And Influence Sales with LEGOS',
    feeling: 'angry',
    date: 1654389589,
    location:
      '{"address_components":[{"long_name":"2318","short_name":"2318","types":["street_number"]},{"long_name":"Myrtle Street","short_name":"Myrtle St","types":["route"]},{"long_name":"McClymonds","short_name":"McClymonds","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]},{"long_name":"3410","short_name":"3410","types":["postal_code_suffix"]}],"formatted_address":"2318 Myrtle St, Oakland, CA 94607, USA","geometry":{"bounds":{"south":37.8156657,"west":-122.2792096,"north":37.8157673,"east":-122.2789789},"location":{"lat":37.8157107,"lng":-122.2790905},"location_type":"ROOFTOP","viewport":{"south":37.8143675197085,"west":-122.2804432302915,"north":37.8170654802915,"east":-122.2777452697085}},"place_id":"ChIJoXx6eh1-hYARZMkryBTtMk8","types":["premise"]}',
  },
  {
    id: 75,
    entry:
      'Love is the missing factor; there is a lack of affection, of warmth in relationship; and because we lack that love, that tenderness, that generosity, that mercy in relationship, we escape into mass action, which produces further confusion, further misery.',
    name: 'Savvy|Smart|Sexy People Do LEGOS :)',
    feeling: 'angry',
    date: 1611511350,
    location:
      '{"address_components":[{"long_name":"1251","short_name":"1251","types":["street_number"]},{"long_name":"3rd Street","short_name":"3rd St","types":["route"]},{"long_name":"Acorn Industrial","short_name":"Acorn Industrial","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]}],"formatted_address":"1251 3rd St, Oakland, CA 94607, USA","geometry":{"location":{"lat":37.8013143,"lng":-122.2930967},"location_type":"ROOFTOP","viewport":{"south":37.79996531970851,"west":-122.2944456802915,"north":37.8026632802915,"east":-122.2917477197085}},"place_id":"ChIJnYR-XJeAj4AR90JV3e4d1Sc","plus_code":{"compound_code":"RP24+GQ Oakland, CA, USA","global_code":"849VRP24+GQ"},"types":["street_address"]}',
  },
  {
    id: 76,
    entry:
      'The moment you have in your heart this extraordinary thing called love and feel the depth, the delight, the ecstasy of it, you will discover that for you the world is transformed.',
    name: 'Apply These 5 Secret Techniques To Improve LEGOS',
    feeling: 'anxious',
    date: 1631182986,
    location:
      '{"address_components":[{"long_name":"1188","short_name":"1188","types":["street_number"]},{"long_name":"12th Street","short_name":"12th St","types":["route"]},{"long_name":"Oak Center","short_name":"Oak Center","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]},{"long_name":"2743","short_name":"2743","types":["postal_code_suffix"]}],"formatted_address":"1188 12th St, Oakland, CA 94607, USA","geometry":{"location":{"lat":37.8085181,"lng":-122.2872309},"location_type":"ROOFTOP","viewport":{"south":37.8071691197085,"west":-122.2885798802915,"north":37.8098670802915,"east":-122.2858819197085}},"place_id":"ChIJAQDQ76GAj4ARwP0cctoIdD0","plus_code":{"compound_code":"RP57+C4 Oakland, CA, USA","global_code":"849VRP57+C4"},"types":["establishment","food","point_of_interest"]}',
  },
  {
    id: 77,
    entry:
      'We all want to be famous people, and the moment we want to be something we are no longer free.',
    name: 'Improve(Increase) Your LEGOS In 3 Days',
    feeling: 'sad',
    date: 1626386718,
    location:
      '{"address_components":[{"long_name":"1268","short_name":"1268","types":["street_number"]},{"long_name":"Twin Peaks Boulevard","short_name":"Twin Peaks Blvd","types":["route"]},{"long_name":"Twin Peaks","short_name":"Twin Peaks","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94131","short_name":"94131","types":["postal_code"]}],"formatted_address":"1268 Twin Peaks Blvd, San Francisco, CA 94131, USA","geometry":{"location":{"lat":37.7463166,"lng":-122.4510645},"location_type":"ROOFTOP","viewport":{"south":37.7449676197085,"west":-122.4524134802915,"north":37.7476655802915,"east":-122.4497155197085}},"place_id":"ChIJJyK9IuF9j4ARg8mung93-o0","plus_code":{"compound_code":"PGWX+GH Twin Peaks, San Francisco, CA, USA","global_code":"849VPGWX+GH"},"types":["street_address"]}',
  },
  {
    id: 78,
    entry:
      'It is odd that we have so little relationship with nature, with the insects and the leaping frog and the owl that hoots among the hills calling for its mate. We never seem to have a feeling for all living things on the earth.',
    name: 'The Secret of Successful LEGOS',
    feeling: 'anxious',
    date: 1659766171,
    location:
      '{"address_components":[{"long_name":"Lincoln Way &amp; 17th Ave","short_name":"Lincoln Way &amp; 17th Ave","types":["establishment","point_of_interest","transit_station"]},{"long_name":"Golden Gate Park","short_name":"Golden Gate Park","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94122","short_name":"94122","types":["postal_code"]}],"formatted_address":"Lincoln Way &amp; 17th Ave, San Francisco, CA 94122, USA","geometry":{"location":{"lat":37.76563,"lng":-122.47536},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.76428101970851,"west":-122.4767089802915,"north":37.7669789802915,"east":-122.4740110197085}},"place_id":"ChIJp2kFNm-HhYARkL_fwllSM74","plus_code":{"compound_code":"QG8F+7V Golden Gate Park, San Francisco, CA, USA","global_code":"849VQG8F+7V"},"types":["establishment","point_of_interest","transit_station"]}',
  },
  {
    id: 79,
    entry:
      'If we could establish a deep abiding relationship with nature, we would never kill an animal for our appetite; we would never harm, vivisect, a monkey, a dog, a guinea pig for our benefit. We would find other ways to heal our wounds, heal our bodies.',
    name: 'Your Key To Success: LEGOS',
    feeling: 'calm',
    date: 1635498854,
    location:
      '{"address_components":[{"long_name":"2883","short_name":"2883","types":["street_number"]},{"long_name":"Bush Street","short_name":"Bush St","types":["route"]},{"long_name":"Lower Pacific Heights","short_name":"Lower Pacific Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94115","short_name":"94115","types":["postal_code"]},{"long_name":"2904","short_name":"2904","types":["postal_code_suffix"]}],"formatted_address":"2883 Bush St, San Francisco, CA 94115, USA","geometry":{"location":{"lat":37.7854591,"lng":-122.4446467},"location_type":"ROOFTOP","viewport":{"south":37.7841101197085,"west":-122.4459956802915,"north":37.78680808029149,"east":-122.4432977197085}},"place_id":"ChIJ3TGn_MqAhYARIeppcKB6rUQ","plus_code":{"compound_code":"QHP4+54 Lower Pacific Heights, San Francisco, CA, USA","global_code":"849VQHP4+54"},"types":["street_address"]}',
  },
  {
    id: 80,
    entry:
      'It is really very important while you are young to live in an environment in which there is no fear. Most of us, as we grow older, become frightened; we are afraid of living, afraid of losing a job, afraid of tradition, afraid of what the neighbours, or what the wife or husband would say, afraid of death.',
    name: '7 Rules About LEGOS Meant To Be Broken',
    feeling: 'loved',
    date: 1623515591,
    location:
      '{"address_components":[{"long_name":"813","short_name":"813","types":["street_number"]},{"long_name":"Laguna Street","short_name":"Laguna St","types":["route"]},{"long_name":"Western Addition","short_name":"Western Addition","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94102","short_name":"94102","types":["postal_code"]},{"long_name":"3109","short_name":"3109","types":["postal_code_suffix"]}],"formatted_address":"813 Laguna St, San Francisco, CA 94102, USA","geometry":{"location":{"lat":37.7798601,"lng":-122.4268145},"location_type":"ROOFTOP","viewport":{"south":37.7785111197085,"west":-122.4281634802915,"north":37.7812090802915,"east":-122.4254655197085}},"place_id":"ChIJPcXK2KKAhYARL6S1YuJ4_Pc","plus_code":{"compound_code":"QHHF+W7 Western Addition, San Francisco, CA, USA","global_code":"849VQHHF+W7"},"types":["street_address"]}',
  },
  {
    id: 81,
    entry:
      'If we depend for our happiness on another, on society or on environment, they become essential to us; we cling to them, and any alteration of these we violently oppose because we depend upon them for our psychological security and comfort.',
    name: 'How To Make Your LEGOS Look Like A Million Bucks',
    feeling: 'anxious',
    date: 1622099462,
    location:
      '{"address_components":[{"long_name":"6101","short_name":"6101","types":["street_number"]},{"long_name":"Fulton Street","short_name":"Fulton St","types":["route"]},{"long_name":"Golden Gate Park","short_name":"Golden Gate Park","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94121","short_name":"94121","types":["postal_code"]},{"long_name":"3460","short_name":"3460","types":["postal_code_suffix"]}],"formatted_address":"6101 Fulton St, San Francisco, CA 94121, USA","geometry":{"location":{"lat":37.7715562,"lng":-122.4970581},"location_type":"ROOFTOP","viewport":{"south":37.7702072197085,"west":-122.4984070802915,"north":37.7729051802915,"east":-122.4957091197085}},"place_id":"ChIJF_JAG5yAhYARWH3Zp0kVTs8","plus_code":{"compound_code":"QGC3+J5 Golden Gate Park, San Francisco, CA, USA","global_code":"849VQGC3+J5"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 82,
    entry:
      'We never look deeply into the quality of a tree; we never really touch it, feel its solidity, its rough bark, and hear the sound that is part of the tree. Not the sound of wind through the leaves, not the breeze of a morning that flutters the leaves, but its own sound, the sound of the trunk and the silent sound of the roots.',
    name: 'Can You Pass The LEGOS Test?',
    feeling: 'calm',
    date: 1626386718,
    location:
      '{"address_components":[{"long_name":"21","short_name":"21","types":["street_number"]},{"long_name":"14th Avenue","short_name":"14th Ave","types":["route"]},{"long_name":"Lake Street","short_name":"Lake Street","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94118","short_name":"94118","types":["postal_code"]},{"long_name":"1005","short_name":"1005","types":["postal_code_suffix"]}],"formatted_address":"21 14th Ave, San Francisco, CA 94118, USA","geometry":{"location":{"lat":37.78695159999999,"lng":-122.4734683},"location_type":"ROOFTOP","viewport":{"south":37.7856026197085,"west":-122.4748172802915,"north":37.78830058029149,"east":-122.4721193197085}},"place_id":"ChIJx7Z0DRmHhYARGbN47HadOD0","plus_code":{"compound_code":"QGPG+QJ Lake Street, San Francisco, CA, USA","global_code":"849VQGPG+QJ"},"types":["street_address"]}',
  },
  {
    id: 83,
    entry:
      'There is no end to education. It is not that you read a book, pass an examination, and finish with education. The whole of life, from the moment you are born to the moment you die, is a process of learning.',
    name: 'Are You Making These LEGOS Mistakes?',
    feeling: 'sad',
    date: 1659766171,
    location:
      '{"address_components":[{"long_name":"3215","short_name":"3215","types":["street_number"]},{"long_name":"Cesar Chavez","short_name":"Cesar Chavez","types":["route"]},{"long_name":"Bernal Heights","short_name":"Bernal Heights","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94110","short_name":"94110","types":["postal_code"]},{"long_name":"4609","short_name":"4609","types":["postal_code_suffix"]}],"formatted_address":"3215 Cesar Chavez, San Francisco, CA 94110, USA","geometry":{"location":{"lat":37.7480464,"lng":-122.4146087},"location_type":"ROOFTOP","viewport":{"south":37.7466974197085,"west":-122.4159576802915,"north":37.7493953802915,"east":-122.4132597197085}},"place_id":"ChIJ_____0N-j4ARoZRdbf2EevE","plus_code":{"compound_code":"PHXP+65 Bernal Heights, San Francisco, CA, USA","global_code":"849VPHXP+65"},"types":["establishment","point_of_interest","school"]}',
  },
  {
    id: 84,
    entry:
      "What religion a man holds, to what race he belongs, these things are not important; the really important thing is this knowledge: the knowledge of God's plan for men. For God has a plan, and that plan is evolution.",
    name: 'Short Story: The Truth About LEGOS',
    feeling: 'happy',
    date: 1635498854,
    location:
      '{"address_components":[{"long_name":"4027","short_name":"4027","types":["street_number"]},{"long_name":"19th Street","short_name":"19th St","types":["route"]},{"long_name":"Eureka Valley","short_name":"Eureka Valley","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94114","short_name":"94114","types":["postal_code"]}],"formatted_address":"4027 19th St, San Francisco, CA 94114, USA","geometry":{"bounds":{"south":37.7590856,"west":-122.4333104,"north":37.7592727,"east":-122.4332262},"location":{"lat":37.7591965,"lng":-122.4332713},"location_type":"ROOFTOP","viewport":{"south":37.7578301697085,"west":-122.4346172802915,"north":37.7605281302915,"east":-122.4319193197085}},"place_id":"ChIJ15MFjhp-j4AR6pmNYnI3J2Y","types":["premise"]}',
  },
  {
    id: 85,
    entry:
      'Religion is the frozen thought of man out of which they build temples.',
    name: '10 Funny LEGOS Quotes',
    feeling: 'anxious',
    date: 1623515591,
    location:
      '{"address_components":[{"long_name":"390","short_name":"390","types":["street_number"]},{"long_name":"Gellert Drive","short_name":"Gellert Dr","types":["route"]},{"long_name":"Lakeshore","short_name":"Lakeshore","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94132","short_name":"94132","types":["postal_code"]},{"long_name":"1235","short_name":"1235","types":["postal_code_suffix"]}],"formatted_address":"390 Gellert Dr, San Francisco, CA 94132, USA","geometry":{"bounds":{"south":37.7296237,"west":-122.4911534,"north":37.729829,"east":-122.4909082},"location":{"lat":37.72973,"lng":-122.4910583},"location_type":"ROOFTOP","viewport":{"south":37.7283773697085,"west":-122.4923797802915,"north":37.7310753302915,"east":-122.4896818197085}},"place_id":"ChIJa6OXbKB9j4ARYYxYhk2hKE0","types":["premise"]}',
  },
  {
    id: 86,
    entry:
      'I maintain that Truth is a pathless land, and you cannot approach it by any path whatsoever, by any religion, by any sect.',
    name: 'Need More Time? Read These Tips To Eliminate LEGOS',
    feeling: 'loved',
    date: 1622099462,
    location:
      '{"address_components":[{"long_name":"3348","short_name":"3348","types":["street_number"]},{"long_name":"San Jose Avenue","short_name":"San Jose Avenue","types":["route"]},{"long_name":"Daly City","short_name":"Daly City","types":["locality","political"]},{"long_name":"San Mateo County","short_name":"San Mateo County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94014","short_name":"94014","types":["postal_code"]},{"long_name":"1044","short_name":"1044","types":["postal_code_suffix"]}],"formatted_address":"3348 San Jose Avenue, Daly City, CA 94014, USA","geometry":{"location":{"lat":37.7065922,"lng":-122.4610231},"location_type":"ROOFTOP","viewport":{"south":37.70524321970849,"west":-122.4623720802915,"north":37.70794118029149,"east":-122.4596741197085}},"place_id":"ChIJ3ZDZfTx8j4AR4hHLTt8dbP0","plus_code":{"compound_code":"PG4Q+JH Daly City, CA, USA","global_code":"849VPG4Q+JH"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 87,
    entry:
      'A belief is purely an individual matter, and you cannot and must not organize it. If you do, it becomes dead, crystallized; it becomes a creed, a sect, a religion, to be imposed on others.',
    name: 'Secrets To LEGOS – Even In This Down Economy',
    feeling: 'calm',
    date: 1655132056,
    location:
      '{"address_components":[{"long_name":"1250","short_name":"1250","types":["street_number"]},{"long_name":"Cayuga Avenue","short_name":"Cayuga Ave","types":["route"]},{"long_name":"Cayuga Terrace","short_name":"Cayuga Terrace","types":["neighborhood","political"]},{"long_name":"San Francisco","short_name":"SF","types":["locality","political"]},{"long_name":"San Francisco County","short_name":"San Francisco County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94112","short_name":"94112","types":["postal_code"]},{"long_name":"3355","short_name":"3355","types":["postal_code_suffix"]}],"formatted_address":"1250 Cayuga Ave, San Francisco, CA 94112, USA","geometry":{"location":{"lat":37.7193805,"lng":-122.4433106},"location_type":"ROOFTOP","viewport":{"south":37.7180315197085,"west":-122.4446595802915,"north":37.7207294802915,"east":-122.4419616197085}},"place_id":"ChIJiS66B4N-j4ARCRdtZyCRuqQ","plus_code":{"compound_code":"PH94+QM Cayuga Terrace, San Francisco, CA, USA","global_code":"849VPH94+QM"},"types":["street_address"]}',
  },
  {
    id: 88,
    entry:
      "The question of whether or not there is a God or truth or reality or whatever you like to call it, can never be answered by books, by priests, philosopher's or saviours. Nobody and nothing can answer the question but you yourself, and that is why you must know yourself - Immaturity lies only in total ignorance of self.",
    name: '5 Incredibly Useful LEGOS Tips For Small Businesses',
    feeling: 'calm',
    date: 1626119386,
    location:
      '{"address_components":[{"long_name":"VQ98+G5","short_name":"VQ98+G5","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQ98+G5 Oakland, CA, USA","geometry":{"bounds":{"south":37.86875,"west":-122.234625,"north":37.868875,"east":-122.2345},"location":{"lat":37.8688357,"lng":-122.2346125},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8674635197085,"west":-122.2359114802915,"north":37.87016148029149,"east":-122.2332135197085}},"place_id":"GhIJc4waAjbvQkAR564l5AOPXsA","plus_code":{"compound_code":"VQ98+G5 Oakland, CA, USA","global_code":"849VVQ98+G5"},"types":["plus_code"]}',
  },
  {
    id: 89,
    entry:
      'What is needed, rather than running away or controlling or suppressing or any other resistance, is understanding fear; that means, watch it, learn about it, come directly into contact with it. We are to learn about fear, not how to escape from it.',
    name: 'Warning: These 9 Mistakes Will Destroy Your LEGOS',
    feeling: 'anxious',
    date: 1609490840,
    location:
      '{"address_components":[{"long_name":"VQJC+MH","short_name":"VQJC+MH","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQJC+MH Oakland, CA, USA","geometry":{"bounds":{"south":37.881625,"west":-122.228625,"north":37.88175,"east":-122.2285},"location":{"lat":37.8816948,"lng":-122.2286222},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.88033851970849,"west":-122.2299114802915,"north":37.88303648029149,"east":-122.2272135197085}},"place_id":"GhIJ0YYNYNvwQkAR7wgCv6GOXsA","plus_code":{"compound_code":"VQJC+MH Oakland, CA, USA","global_code":"849VVQJC+MH"},"types":["plus_code"]}',
  },
  {
    id: 90,
    entry:
      'A man who is not afraid is not aggressive, a man who has no sense of fear of any kind is really a free, a peaceful man.',
    name: 'Find A Quick Way To LEGOS',
    feeling: 'happy',
    date: 1619363113,
    location:
      '{"address_components":[{"long_name":"VQG8+4Q","short_name":"VQG8+4Q","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQG8+4Q Oakland, CA, USA","geometry":{"bounds":{"south":37.87525,"west":-122.233125,"north":37.875375,"east":-122.233},"location":{"lat":37.875371,"lng":-122.2330999},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8739635197085,"west":-122.2344114802915,"north":37.8766614802915,"east":-122.2317135197085}},"place_id":"GhIJ9G4sKAzwQkAR28zXG-uOXsA","plus_code":{"compound_code":"VQG8+4Q Oakland, CA, USA","global_code":"849VVQG8+4Q"},"types":["plus_code"]}',
  },
  {
    id: 91,
    entry:
      'Truth cannot be brought down; rather, the individual must make the effort to ascend to it. You cannot bring the mountaintop to the valley. If you would attain to the mountaintop, you must pass through the valley, climb the steeps, unafraid of the dangerous precipices.',
    name: "In 10 Minutes, I'll Give You The Truth About LEGOS",
    feeling: 'calm',
    date: 1618136587,
    location:
      '{"address_components":[{"long_name":"VQFC+MV","short_name":"VQFC+MV","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQFC+MV Oakland, CA, USA","geometry":{"bounds":{"south":37.874125,"west":-122.227875,"north":37.87425,"east":-122.22775},"location":{"lat":37.8741584,"lng":-122.2278218},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8728385197085,"west":-122.2291614802915,"north":37.87553648029149,"east":-122.2264635197085}},"place_id":"GhIJCMMlbOTvQkARNxTjoZSOXsA","plus_code":{"compound_code":"VQFC+MV Oakland, CA, USA","global_code":"849VVQFC+MV"},"types":["plus_code"]}',
  },
  {
    id: 92,
    entry:
      'We are domesticated animals, revolving in a cage which we have built for ourselves - with its contentions, wranglings, its impossible political leaders, its gurus who exploit our self-conceit and their own with great refinement or rather crudely.',
    name: '10 Best Practices For LEGOS',
    feeling: 'calm',
    date: 1668713407,
    location:
      '{"address_components":[{"long_name":"VQF7+94","short_name":"VQF7+94","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQF7+94 Oakland, CA, USA","geometry":{"bounds":{"south":37.873375,"west":-122.23725,"north":37.8735,"east":-122.237125},"location":{"lat":37.8734878,"lng":-122.2371349},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.87208851970851,"west":-122.2385364802915,"north":37.8747864802915,"east":-122.2358385197085}},"place_id":"GhIJPTq_cs7vQkARYA_cNy2PXsA","plus_code":{"compound_code":"VQF7+94 Oakland, CA, USA","global_code":"849VVQF7+94"},"types":["plus_code"]}',
  },
  {
    id: 93,
    entry:
      'When the mind is empty, silent, when it is in a state of complete negation - which is not blankness, nor the opposite of being positive, but a totally different state in which all thought has ceased - only then is it possible for that which is unnameable to come into being.',
    name: 'What Everyone Must Know About LEGOS',
    feeling: 'sad',
    date: 1646509613,
    location:
      '{"address_components":[{"long_name":"VQ97+C7","short_name":"VQ97+C7","types":["plus_code"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]}],"formatted_address":"VQ97+C7 Oakland, CA, USA","geometry":{"bounds":{"south":37.8685,"west":-122.236875,"north":37.868625,"east":-122.23675},"location":{"lat":37.8686164,"lng":-122.236835},"location_type":"GEOMETRIC_CENTER","viewport":{"south":37.8672135197085,"west":-122.2381614802915,"north":37.8699114802915,"east":-122.2354635197085}},"place_id":"GhIJd2J70i7vQkARFuP8TSiPXsA","plus_code":{"compound_code":"VQ97+C7 Oakland, CA, USA","global_code":"849VVQ97+C7"},"types":["plus_code"]}',
  },
  {
    id: 94,
    entry:
      'Have you not noticed that love is silence? It may be while holding the hand of another, or looking lovingly at a child, or taking in the beauty of an evening. Love has no past or future, and so it is with this extraordinary state of silence.',
    name: 'A Guide To LEGOS At Any Age',
    feeling: 'sad',
    date: 1614282065,
    location:
      '{"address_components":[{"long_name":"6019","short_name":"6019","types":["street_number"]},{"long_name":"Colby Street","short_name":"Colby St","types":["route"]},{"long_name":"Upper Telegraph","short_name":"Upper Telegraph","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94618","short_name":"94618","types":["postal_code"]},{"long_name":"1228","short_name":"1228","types":["postal_code_suffix"]}],"formatted_address":"6019 Colby St, Oakland, CA 94618, USA","geometry":{"location":{"lat":37.8472719,"lng":-122.25675},"location_type":"ROOFTOP","viewport":{"south":37.8459229197085,"west":-122.2580989802915,"north":37.8486208802915,"east":-122.2554010197085}},"place_id":"ChIJ54wlCtt9hYARsRLFyhGBAcM","plus_code":{"compound_code":"RPWV+W8 Oakland, CA, USA","global_code":"849VRPWV+W8"},"types":["street_address"]}',
  },
  {
    id: 95,
    entry:
      'All of us have been trained by education and environment to seek personal gain and security and to fight for ourselves. Though we cover it over with pleasant phrases, we have been educated for various professions within a system which is based on exploitation and acquisitive fear.',
    name: 'How You Can (Do) LEGOS Almost Instantly',
    feeling: 'angry',
    date: 1671399152,
    location:
      '{"address_components":[{"long_name":"5815","short_name":"5815","types":["street_number"]},{"long_name":"Shellmound Street","short_name":"Shellmound St","types":["route"]},{"long_name":"Emeryville","short_name":"Emeryville","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94608","short_name":"94608","types":["postal_code"]}],"formatted_address":"5815 Shellmound St, Emeryville, CA 94608, USA","geometry":{"location":{"lat":37.8392235,"lng":-122.2936067},"location_type":"ROOFTOP","viewport":{"south":37.8378745197085,"west":-122.2949556802915,"north":37.84057248029149,"east":-122.2922577197085}},"place_id":"ChIJBcqrVUN-hYARnX7mrfB1DY8","plus_code":{"compound_code":"RPQ4+MH Emeryville, CA, USA","global_code":"849VRPQ4+MH"},"types":["street_address"]}',
  },
  {
    id: 96,
    entry:
      'No one can live without relationship. You may withdraw into the mountains, become a monk, a sannyasi, wander off into the desert by yourself, but you are related. You cannot escape from that absolute fact. You cannot exist in isolation.',
    name: 'Cracking The LEGOS Code',
    feeling: 'anxious',
    date: 1624544020,
    location:
      '{"address_components":[{"long_name":"4312","short_name":"4312","types":["street_number"]},{"long_name":"Telegraph Avenue","short_name":"Telegraph Ave","types":["route"]},{"long_name":"Temescal","short_name":"Temescal","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94609","short_name":"94609","types":["postal_code"]}],"formatted_address":"4312 Telegraph Ave, Oakland, CA 94609, USA","geometry":{"location":{"lat":37.8318623,"lng":-122.2635398},"location_type":"ROOFTOP","viewport":{"south":37.83051331970849,"west":-122.2648887802915,"north":37.83321128029149,"east":-122.2621908197085}},"place_id":"ChIJtU1nWOJ9hYARJOPE2P_rdjk","plus_code":{"compound_code":"RPJP+PH Oakland, CA, USA","global_code":"849VRPJP+PH"},"types":["street_address"]}',
  },
  {
    id: 97,
    entry:
      'Life cannot be without relationship, but we have made it so agonizing and hideous by basing it on personal and possessive love. Can one love and yet not possess? You will find the true answer not in escape, ideals, beliefs but through the understanding of the causes of dependence and possessiveness.',
    name: 'Never Suffer From LEGOS Again',
    feeling: 'happy',
    date: 1667309257,
    location:
      '{"address_components":[{"long_name":"633","short_name":"633","types":["street_number"]},{"long_name":"54th Street","short_name":"54th St","types":["route"]},{"long_name":"Bushrod","short_name":"Bushrod","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94609","short_name":"94609","types":["postal_code"]}],"formatted_address":"633 54th St, Oakland, CA 94609, USA","geometry":{"location":{"lat":37.8392804,"lng":-122.2654998},"location_type":"ROOFTOP","viewport":{"south":37.8379314197085,"west":-122.2668487802915,"north":37.8406293802915,"east":-122.2641508197085}},"place_id":"ChIJFRY6X3V-hYARdHncObd3_Jo","plus_code":{"compound_code":"RPQM+PR Oakland, CA, USA","global_code":"849VRPQM+PR"},"types":["street_address"]}',
  },
  {
    id: 98,
    entry:
      'Life is relationship, living is relationship. We cannot live if you and I have built a wall around ourselves and just peep over that wall occasionally. Unconsciously, deeply, under the wall, we are related.',
    name: 'How To Save Money with LEGOS?',
    feeling: 'happy',
    date: 1671263224,
    location:
      '{"address_components":[{"long_name":"3900","short_name":"3900","types":["street_number"]},{"long_name":"Adeline Street","short_name":"Adeline St","types":["route"]},{"long_name":"Longfellow","short_name":"Longfellow","types":["neighborhood","political"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94608","short_name":"94608","types":["postal_code"]}],"formatted_address":"3900 Adeline St, Oakland, CA 94608, USA","geometry":{"location":{"lat":37.8295456,"lng":-122.2786905},"location_type":"ROOFTOP","viewport":{"south":37.82819661970849,"west":-122.2800394802915,"north":37.83089458029149,"east":-122.2773415197085}},"place_id":"ChIJ0X5fASp_hYARr05izT1IJVY","plus_code":{"compound_code":"RPHC+RG Oakland, CA, USA","global_code":"849VRPHC+RG"},"types":["establishment","point_of_interest"]}',
  },
  {
    id: 99,
    entry:
      'For most of us, relationship with another is based on dependence, either economic or psychological. This dependence creates fear, breeds in us possessiveness, results in friction, suspicion, frustration.',
    name: '9 Ways LEGOS Can Make You Invincible',
    feeling: 'calm',
    date: 1671218817,
    location:
      '{"address_components":[{"long_name":"710","short_name":"710","types":["street_number"]},{"long_name":"Maritime Street","short_name":"Maritime St","types":["route"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]},{"long_name":"1001","short_name":"1001","types":["postal_code_suffix"]}],"formatted_address":"710 Maritime St, Oakland, CA 94607, USA","geometry":{"bounds":{"south":37.8091134,"west":-122.3146264,"north":37.8092761,"east":-122.3144561},"location":{"lat":37.8091929,"lng":-122.3145495},"location_type":"ROOFTOP","viewport":{"south":37.80784576970851,"west":-122.3158902302915,"north":37.81054373029151,"east":-122.3131922697085}},"place_id":"ChIJmyqnidN_hYAREr3uhWxoFRQ","types":["premise"]}',
  },
  {
    id: 100,
    entry:
      'To live is to find out for yourself what is true, and you can do this only when there is freedom, when there is continuous revolution inwardly, within yourself.',
    name: 'How To Learn LEGOS',
    feeling: 'calm',
    date: 1655132056,
    location:
      '{"address_components":[{"long_name":"710","short_name":"710","types":["street_number"]},{"long_name":"Maritime Street","short_name":"Maritime St","types":["route"]},{"long_name":"Oakland","short_name":"Oakland","types":["locality","political"]},{"long_name":"Alameda County","short_name":"Alameda County","types":["administrative_area_level_2","political"]},{"long_name":"California","short_name":"CA","types":["administrative_area_level_1","political"]},{"long_name":"United States","short_name":"US","types":["country","political"]},{"long_name":"94607","short_name":"94607","types":["postal_code"]},{"long_name":"1001","short_name":"1001","types":["postal_code_suffix"]}],"formatted_address":"710 Maritime St, Oakland, CA 94607, USA","geometry":{"bounds":{"south":37.8091134,"west":-122.3146264,"north":37.8092761,"east":-122.3144561},"location":{"lat":37.8091929,"lng":-122.3145495},"location_type":"ROOFTOP","viewport":{"south":37.80784576970851,"west":-122.3158902302915,"north":37.81054373029151,"east":-122.3131922697085}},"place_id":"ChIJmyqnidN_hYAREr3uhWxoFRQ","types":["premise"]}',
  },
];

export default seed;
