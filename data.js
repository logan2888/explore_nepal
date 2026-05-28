// ============================================================
//  data.js  –  ExploreNepal  (Final Version)
//  All images: images.unsplash.com (free, hotlink-allowed)
//  Updated: real, verified photo IDs for every entry
// ============================================================

const destinations = [
  {
    id: "everest", name: "Mount Everest & Base Camp",
    province: "Province No. 1", category: "mountain",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    description: "The world's highest peak at 8,849 m. The classic Everest Base Camp trek takes you through Sherpa villages like Namche Bazaar and Tengboche, past Buddhist monasteries, across suspension bridges draped in prayer flags, and through stunning glacial landscapes. Standing at Base Camp with the Khumbu Icefall before you is one of the most powerful experiences on Earth.",
    latitude: 27.9881, longitude: 86.9250,
    bestSeason: "Mar–May, Sep–Nov", entryFee: "NPR 11,000 (TIMS + permit)",
    activities: ["Trekking", "Mountaineering", "Photography", "Cultural Tours"]
  },
  {
    id: "annapurna", name: "Annapurna Circuit",
    province: "Gandaki Province", category: "mountain",
    image: "https://images.unsplash.com/photo-1571401835393-8c5f35328320?w=800&q=80",
    description: "One of the world's greatest treks, circumnavigating the Annapurna massif and crossing Thorong La Pass at 5,416 m. The route passes through subtropical forests, alpine meadows and high desert. Villages of Gurung, Thakali and Manangi people line the trail, offering authentic homestay experiences.",
    latitude: 28.5971, longitude: 84.1060,
    bestSeason: "Oct–Nov, Mar–Apr", entryFee: "NPR 3,000 (ACAP permit)",
    activities: ["Trekking", "Camping", "Photography", "Homestay"]
  },
  {
    id: "boudhanath", name: "Boudhanath Stupa",
    province: "Bagmati Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    description: "One of the largest Buddhist stupas in the world and a UNESCO World Heritage Site. The giant white dome is topped with gilded eyes of the Buddha gazing in all four directions. Tibetan pilgrims circle the stupa constantly, spinning prayer wheels and chanting mantras.",
    latitude: 27.7215, longitude: 85.3620,
    bestSeason: "Year-round", entryFee: "NPR 400",
    activities: ["Cultural Tours", "Photography", "Meditation", "Shopping"]
  },
  {
    id: "pashupatinath", name: "Pashupatinath Temple",
    province: "Bagmati Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1609348745238-e71a01a9eed0?w=800&q=80",
    description: "The most sacred Hindu temple in Nepal, dedicated to Lord Shiva on the banks of the holy Bagmati River. The complex includes hundreds of shrines, cremation ghats and ashrams. Sadhus smeared in ash sit in meditation near the ghats. The evening Aarti ceremony is deeply moving.",
    latitude: 27.7105, longitude: 85.3487,
    bestSeason: "Year-round (Maha Shivaratri is spectacular)", entryFee: "NPR 1,000",
    activities: ["Pilgrimage", "Photography", "Cultural Tours"]
  },
  {
    id: "pokhara", name: "Pokhara & Phewa Lake",
    province: "Gandaki Province", category: "lake",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    description: "Nepal's adventure capital where Phewa Lake mirrors the snow-capped Annapurna and Machhapuchhre peaks at sunrise. The lakeside promenade is lined with cafes and adventure gear shops. Activities range from peaceful boat rides to heart-pounding paragliding launches from Sarangkot ridge.",
    latitude: 28.2096, longitude: 83.9856,
    bestSeason: "Sep–Nov, Mar–May", entryFee: "Free",
    activities: ["Boating", "Paragliding", "Trekking", "Zip-lining", "Photography"]
  },
  {
    id: "chitwan", name: "Chitwan National Park",
    province: "Bagmati Province", category: "nature",
    image: "https://images.unsplash.com/photo-1571150825816-3b9c10640445?w=800&q=80",
    description: "A UNESCO World Heritage Site and one of Asia's finest wildlife reserves. Chitwan protects the endangered one-horned rhinoceros, Royal Bengal tiger, gharial crocodiles and over 540 bird species. Jungle safaris by jeep, elephant and dugout canoe offer extraordinary encounters with wildlife.",
    latitude: 27.5291, longitude: 84.3542,
    bestSeason: "Oct–Mar", entryFee: "USD 25",
    activities: ["Jungle Safari", "Bird Watching", "Canoe Ride", "Elephant Bathing"]
  },
  {
    id: "lumbini", name: "Lumbini – Birthplace of Buddha",
    province: "Lumbini Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1603792907191-89e55f70099a?w=800&q=80",
    description: "The birthplace of Siddhartha Gautama — the Buddha — and a UNESCO World Heritage Site. The sacred garden contains the Mayadevi Temple marking the exact birth spot, the ancient Ashoka Pillar from 249 BC, and a serene zone of international monasteries from around the globe.",
    latitude: 27.4833, longitude: 83.2761,
    bestSeason: "Oct–Mar", entryFee: "NPR 200",
    activities: ["Pilgrimage", "Meditation", "Photography", "Cultural Tours"]
  },
  {
    id: "rara", name: "Rara Lake",
    province: "Karnali Province", category: "lake",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    description: "Nepal's largest and deepest lake hidden in the remote northwest at 2,990 m. The sapphire-blue water reflects pine forests and snow-capped ridges in perfect stillness. Rara National Park protects red pandas, Himalayan black bears and musk deer. Very few tourists ever reach this pristine wilderness.",
    latitude: 29.5269, longitude: 82.0883,
    bestSeason: "Apr–Jun, Sep–Nov", entryFee: "NPR 3,000",
    activities: ["Trekking", "Camping", "Bird Watching", "Photography"]
  },
  {
    id: "poonhill", name: "Ghorepani Poon Hill",
    province: "Gandaki Province", category: "mountain",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    description: "The most popular short trek in Nepal. The viewpoint atop Poon Hill (3,210 m) offers a panoramic sunrise over the entire Annapurna and Dhaulagiri ranges — with Machhapuchhre's fishtail summit glowing pink in the morning light. The route through rhododendron forests is magical in spring.",
    latitude: 28.4167, longitude: 83.6833,
    bestSeason: "Mar–May, Sep–Nov", entryFee: "ACAP permit",
    activities: ["Trekking", "Sunrise Viewing", "Photography", "Rhododendron Forests"]
  },
  {
    id: "bhaktapur", name: "Bhaktapur Durbar Square",
    province: "Bagmati Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?w=800&q=80",
    description: "The best-preserved medieval city in Kathmandu Valley and a UNESCO World Heritage Site. Bhaktapur's Durbar Square contains the stunning 55-Window Palace, the Golden Gate and the tall Nyatapola Temple. The pottery square is alive with locals shaping clay on traditional wheels.",
    latitude: 27.6722, longitude: 85.4281,
    bestSeason: "Oct–Mar", entryFee: "NPR 1,500",
    activities: ["Cultural Tours", "Photography", "Pottery", "Architecture"]
  },
  {
    id: "nagarkot", name: "Nagarkot",
    province: "Bagmati Province", category: "nature",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
    description: "A peaceful hill station on the eastern rim of Kathmandu Valley at 2,175 m, famous for its wide Himalayan sunrise panorama. On a clear morning you can see peaks from Dhaulagiri to Kanchenjunga including Everest. The cool climate and walking trails make it a perfect escape.",
    latitude: 27.8010, longitude: 85.5210,
    bestSeason: "Oct–Dec, Feb–Apr", entryFee: "Free",
    activities: ["Sunrise Viewing", "Hiking", "Photography", "Bird Watching"]
  },
  {
    id: "mustang", name: "Upper Mustang",
    province: "Gandaki Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    description: "The last forbidden kingdom — closed to outsiders until 1992 and still feeling like a world apart. The walled city of Lo Manthang preserves centuries-old Tibetan Buddhist monasteries, cave dwellings and a living royal court. The dramatic landscape of eroded red cliffs looks like nothing else on Earth.",
    latitude: 29.1833, longitude: 83.9667,
    bestSeason: "May–Sep", entryFee: "USD 500 permit",
    activities: ["Trekking", "Cultural Tours", "Monastery Visits", "Photography"]
  },
  {
    id: "swayambhunath", name: "Swayambhunath (Monkey Temple)",
    province: "Bagmati Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80",
    description: "Perched atop a wooded hill above Kathmandu, Swayambhunath is one of Nepal's oldest religious sites. The all-seeing eyes of the Buddha on the golden spire watch over the valley. Hundreds of monkeys roam freely around the stupa. The 365 steps up give spectacular valley views.",
    latitude: 27.7149, longitude: 85.2907,
    bestSeason: "Year-round", entryFee: "NPR 200",
    activities: ["Photography", "Sunset Views", "Stairs Climb", "Meditation"]
  },
  {
    id: "sarangkot", name: "Sarangkot",
    province: "Gandaki Province", category: "nature",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    description: "The famous ridge above Pokhara from which paragliders launch above Phewa Lake with the Annapurna giants as their backdrop. Even for non-flyers, the sunrise view over the lake and mountains is one of Nepal's most photographed scenes.",
    latitude: 28.2500, longitude: 83.9500,
    bestSeason: "Sep–Nov, Mar–May", entryFee: "Free",
    activities: ["Paragliding", "Sunrise Viewing", "Photography", "Hiking"]
  },
  {
    id: "gokyo", name: "Gokyo Lakes",
    province: "Province No. 1", category: "lake",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80",
    description: "Six turquoise glacial lakes at the base of Nepal's longest glacier. The climb to Gokyo Ri (5,357 m) rewards with a 360 degree panorama including Everest, Lhotse, Makalu and Cho Oyu — four of the world's highest peaks visible at once.",
    latitude: 27.9667, longitude: 86.6833,
    bestSeason: "Mar–May, Sep–Nov", entryFee: "Sagarmatha permit",
    activities: ["Trekking", "Photography", "Lake Views", "Peak Climbing"]
  },
  {
    id: "bardiya", name: "Bardia National Park",
    province: "Lumbini Province", category: "nature",
    image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=800&q=80",
    description: "Nepal's largest national park in the western Terai — wilder and far less visited than Chitwan. Bardia has a high concentration of tigers and is one of the best places in Asia to spot them. The Karnali River supports gharial crocodiles and the endangered Gangetic river dolphin.",
    latitude: 28.3833, longitude: 81.3167,
    bestSeason: "Oct–Mar", entryFee: "USD 20–25",
    activities: ["Safari", "Tiger Tracking", "Bird Watching", "Tharu Culture"]
  },
  {
    id: "patan", name: "Patan Durbar Square",
    province: "Bagmati Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1598346762291-aee88549193f?w=800&q=80",
    description: "The most artistically rich of the three royal squares in Kathmandu Valley. Patan's UNESCO-listed Durbar Square is packed with intricately carved temples, water spouts and courtyards. The Patan Museum inside the old royal palace is considered the finest museum in Nepal.",
    latitude: 27.6722, longitude: 85.3250,
    bestSeason: "Oct–Mar", entryFee: "NPR 1,000",
    activities: ["Architecture", "Photography", "Art & Crafts", "Museum"]
  },
  {
    id: "bandipur", name: "Bandipur Village",
    province: "Gandaki Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=800&q=80",
    description: "A car-free Newari hilltop town frozen in the 19th century. Bandipur's pedestrian-only main street is lined with traditional architecture housing tea shops, craft stores and small hotels. At dawn, the valley below fills with cloud and the snow peaks glow behind the horizon.",
    latitude: 27.9333, longitude: 84.4167,
    bestSeason: "Oct–Mar", entryFee: "Free",
    activities: ["Village Walk", "Photography", "Sunset Views", "Hiking"]
  },
  {
    id: "ilam", name: "Ilam Tea Gardens",
    province: "Koshi Province", category: "nature",
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?w=800&q=80",
    description: "Nepal's premier tea-growing region in the eastern hills near the Sikkim border. The rolling green terraces of Ilam produce some of South Asia's finest Orthodox teas. Misty mornings, friendly workers picking leaves by hand, and the aroma of fresh tea make a visit here unique.",
    latitude: 26.9167, longitude: 87.9333,
    bestSeason: "Mar–May, Oct–Nov", entryFee: "Free",
    activities: ["Tea Tasting", "Factory Tour", "Hiking", "Photography"]
  },
  {
    id: "janakpur", name: "Janakpur – Janaki Mandir",
    province: "Madhesh Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1545126913-da4f3c7ad3d1?w=800&q=80",
    description: "The birthplace of Goddess Sita and one of Hinduism's holiest sites. The magnificent Janaki Mandir temple, built in 1911 in Mughal-Rajput style, is the centrepiece of this ancient city. Janakpur is also home of Mithila folk art — intricate geometric patterns painted by women on homes.",
    latitude: 26.7333, longitude: 85.9333,
    bestSeason: "Oct–Mar", entryFee: "Free",
    activities: ["Pilgrimage", "Mithila Art", "Photography", "Cultural Tours"]
  },
  {
    id: "gosainkunda", name: "Gosainkunda Lake",
    province: "Bagmati Province", category: "lake",
    image: "https://images.unsplash.com/photo-1439853949212-36589f9027c4?w=800&q=80",
    description: "A sacred alpine lake at 4,380 m believed to have been created when Lord Shiva struck the Himalayas with his trident. Every year during Janai Purnima, tens of thousands of pilgrims trek to bathe in its icy waters. The lake freezes from December to March.",
    latitude: 28.0833, longitude: 85.6167,
    bestSeason: "May–Jun, Sep–Oct", entryFee: "Langtang permit",
    activities: ["Pilgrimage", "Trekking", "Photography", "High Altitude Walk"]
  },
  {
    id: "chandragiri", name: "Chandragiri Hills",
    province: "Bagmati Province", category: "nature",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=800&q=80",
    description: "A hill station on the southern rim of Kathmandu Valley accessible by cable car from Thankot. The top station at 2,551 m has the ancient Bhaleshwor Mahadev temple and sweeping views of the Kathmandu Valley below and the Himalayan chain above.",
    latitude: 27.6667, longitude: 85.2000,
    bestSeason: "Oct–Mar", entryFee: "Cable car ticket",
    activities: ["Cable Car Ride", "Temple Visit", "Photography", "Valley Views"]
  },
  {
    id: "gorkha", name: "Gorkha Palace",
    province: "Gandaki Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&q=80",
    description: "The ancestral home of Prithvi Narayan Shah, the king who unified Nepal in the 18th century. The palace-temple complex sits atop a steep hill requiring about 1,000 steps to climb. The reward is the magnificent Gorkha Durbar palace with spectacular Himalayan views.",
    latitude: 27.9833, longitude: 84.6333,
    bestSeason: "Oct–Mar", entryFee: "NPR 500",
    activities: ["History Tour", "Hiking", "Photography", "Architecture"]
  },
  {
    id: "tansen", name: "Tansen (Palpa)",
    province: "Lumbini Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=800&q=80",
    description: "A well-preserved Newari hilltop trading town famous for dhaka cloth weaving and bronze crafts. The ruined Rani Mahal palace on the Kali Gandaki riverbank below is sometimes called the Taj Mahal of Nepal. The old bazaar streets and mountain views make Tansen unforgettable.",
    latitude: 27.8667, longitude: 83.5500,
    bestSeason: "Oct–Mar", entryFee: "Free",
    activities: ["Walking Tour", "Architecture", "Dhaka Weaving", "Photography"]
  },
  {
    id: "langtang", name: "Langtang Valley",
    province: "Bagmati Province", category: "mountain",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
    description: "The closest major trekking destination to Kathmandu, flanked by the 7,234-metre Langtang Lirung peak. The valley is filled with yak pastures, glacial rivers and traditional Tamang villages. Kyanjin Gompa monastery at the valley head is a highlight of any visit.",
    latitude: 28.1667, longitude: 85.6667,
    bestSeason: "Mar–May, Sep–Nov", entryFee: "Langtang permit",
    activities: ["Trekking", "Monastery Visit", "Cheese Factory", "Photography"]
  },
  {
    id: "muktinath", name: "Muktinath Temple",
    province: "Gandaki Province", category: "heritage",
    image: "https://images.unsplash.com/photo-1609234656388-0ff363383899?w=800&q=80",
    description: "One of the most sacred pilgrimage sites in Asia, holy to both Hindus and Buddhists. Situated at 3,800 m in Mustang district, the temple has 108 stone water spouts shaped like cow heads plus an eternal blue flame burning from natural gas.",
    latitude: 28.8167, longitude: 83.8667,
    bestSeason: "Mar–May, Sep–Nov", entryFee: "ACAP permit",
    activities: ["Pilgrimage", "Trekking", "Photography", "High Altitude"]
  },
  {
    id: "manaslu", name: "Manaslu Circuit",
    province: "Gandaki Province", category: "mountain",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80",
    description: "A remote and spectacular trek around the world's 8th highest mountain (8,163 m). The circuit crosses Larkya La Pass at 5,160 m and passes through Tibetan Buddhist villages that see far fewer tourists than the Annapurna or Everest regions.",
    latitude: 28.5500, longitude: 84.5500,
    bestSeason: "Sep–Nov, Mar–May", entryFee: "Restricted area permit",
    activities: ["Trekking", "Cultural Tours", "Photography", "High Pass Crossing"]
  },
  {
    id: "tilicho", name: "Tilicho Lake",
    province: "Gandaki Province", category: "lake",
    image: "https://images.unsplash.com/photo-1445375011782-2384686778a0?w=800&q=80",
    description: "One of the world's highest lakes at 4,919 m in the Annapurna region. The lake's vivid blue-green surface framed by the sheer walls of the Great Barrier ridge and Tilicho Peak creates a scene of breathtaking otherworldly beauty.",
    latitude: 28.6833, longitude: 83.8000,
    bestSeason: "Apr–May, Sep–Oct", entryFee: "ACAP permit",
    activities: ["High Altitude Trekking", "Photography", "Lake Views"]
  },
  {
    id: "hadiya", name: "Hadiya, Udayapur",
    province: "Koshi Province", category: "nature",
    image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=800&q=80",
    description: "A hidden gem nestled in the lush green hills of Udayapur district in eastern Nepal. Hadiya is known for its rich biodiversity, dense forests, peaceful streams and warm local communities. Far from the main tourist circuit, it offers an authentic taste of rural Nepali life with terraced farmland and panoramic views.",
    latitude: 26.9300, longitude: 86.5100,
    bestSeason: "Oct–Apr", entryFee: "Free",
    activities: ["Nature Walk", "Hiking", "Village Tour", "Local Culture", "Photography"]
  },
  {
    id: "basaha", name: "Basaha, Udayapur",
    province: "Koshi Province", category: "nature",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&q=80",
    description: "A serene and scenic destination in Udayapur district, Basaha is surrounded by lush hills, flowing rivers and dense forests teeming with wildlife. Known for its peaceful natural environment and authentic rural Nepali culture, Basaha is perfect for nature lovers, birdwatchers and those seeking an escape from city life.",
    latitude: 26.9500, longitude: 86.4800,
    bestSeason: "Oct–Apr", entryFee: "Free",
    activities: ["Nature Walk", "Bird Watching", "Village Tour", "River Walk", "Photography"]
  }
];

// ── HOTELS ──────────────────────────────────────────────────
const hotels = [
  {
    id: "h1", name: "Hotel Yak & Yeti", type: "Luxury Hotel",
    location: "Durbar Marg, Kathmandu",
    description: "One of Kathmandu's most iconic luxury hotels set in a heritage building in the heart of the city. The Yak & Yeti combines colonial elegance with modern comforts, featuring landscaped gardens, a heated swimming pool and multiple award-winning restaurants. A favourite of diplomats and discerning travellers since 1961.",
    priceRange: "Luxury (USD 150–300/night)",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80",
    amenities: ["Swimming Pool", "Spa", "Free WiFi", "Restaurant", "Airport Shuttle", "Bar", "Gym"],
    phone: "+977-1-4248999", rating: 4.7, reviews: 890
  },
  {
    id: "h2", name: "Temple Tree Resort & Spa", type: "Resort",
    location: "Lakeside, Pokhara",
    description: "A beautifully designed resort on the shores of Phewa Lake with direct mountain views of the Annapurna range. Surrounded by tropical gardens, Temple Tree offers villa-style rooms, an outdoor pool and a full-service spa. Wake up to birdsong and the reflection of Machhapuchhre in the still lake.",
    priceRange: "Mid-range (USD 60–120/night)",
    image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800&q=80",
    amenities: ["Lake View", "Pool", "Free WiFi", "Restaurant", "Yoga", "Spa", "Boating"],
    phone: "+977-61-465658", rating: 4.6, reviews: 540
  },
  {
    id: "h3", name: "Namche Green Lodge", type: "Guesthouse",
    location: "Namche Bazaar, Solukhumbu",
    description: "A welcoming family-run guesthouse in Namche Bazaar, the gateway village to Everest. The lodge has warm rooms with yak-wool blankets, solar-heated showers and a dining room serving authentic Sherpa food. The rooftop offers a stunning sunrise view of the surrounding peaks.",
    priceRange: "Budget (USD 15–30/night)",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80",
    amenities: ["Mountain View", "Hot Solar Shower", "Dining Room", "Luggage Storage", "WiFi"],
    phone: "+977-9841234567", rating: 4.5, reviews: 310
  },
  {
    id: "h4", name: "Chitwan Jungle Lodge", type: "Eco Lodge",
    location: "Sauraha, Chitwan",
    description: "An eco-friendly jungle lodge on the edge of Chitwan National Park built with local materials. Comfortable cottages sit among flowering gardens alive with birds and butterflies. The lodge organises jeep safaris, canoe rides and Tharu village visits. Fall asleep to the sounds of the jungle at night.",
    priceRange: "Mid-range (USD 50–90/night)",
    image: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?w=800&q=80",
    amenities: ["Jungle View", "Safari Packages", "Restaurant", "WiFi", "Bonfire", "Bird Watching"],
    phone: "+977-56-580024", rating: 4.6, reviews: 420
  },
  {
    id: "h5", name: "Pokhara Grande Hotel", type: "Luxury Hotel",
    location: "Baidam, Lakeside Pokhara",
    description: "Pokhara's premier hotel with panoramic rooftop views of the entire Annapurna range. The Grande features contemporary rooms with floor-to-ceiling windows, a rooftop infinity pool and a fine-dining restaurant. Ideally placed for all Lakeside attractions on foot.",
    priceRange: "Luxury (USD 100–200/night)",
    image: "https://images.unsplash.com/photo-1455587734955-081b22074882?w=800&q=80",
    amenities: ["Rooftop Pool", "Mountain View", "Free WiFi", "Restaurant", "Bar", "Gym", "Spa"],
    phone: "+977-61-540540", rating: 4.7, reviews: 670
  },
  {
    id: "h6", name: "Bhaktapur Heritage Guesthouse", type: "Guesthouse",
    location: "Bhaktapur Old City",
    description: "A charming traditional Newari guesthouse just steps from Durbar Square. Staying here puts you in the medieval atmosphere long after day-trippers leave. Rooms have carved wooden windows overlooking a temple-filled courtyard. The rooftop breakfast with Himalayan sunrise views is unforgettable.",
    priceRange: "Budget (USD 20–45/night)",
    image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&q=80",
    amenities: ["Heritage Building", "Rooftop Terrace", "Free WiFi", "Breakfast", "City Views"],
    phone: "+977-1-6610488", rating: 4.6, reviews: 290
  }
];

// ── RESTAURANTS ──────────────────────────────────────────────
const restaurants = [
  {
    id: "r1", name: "Bhojan Griha", cuisine: "Traditional Nepali",
    location: "Dillibazar, Kathmandu", priceRange: "Mid-range",
    description: "Kathmandu's most celebrated traditional Nepali restaurant set inside a 150-year-old Rana palace. Meals are served on copper plates with folk music and dance performances. Every dish follows traditional recipes — the Newari khaja set, gundruk soup and freshly made sel roti are extraordinary.",
    specialties: ["Dal Bhat", "Gundruk Soup", "Sel Roti", "Newari Khaja Set", "Momo"],
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    phone: "+977-1-4416423", rating: 4.8, reviews: 720
  },
  {
    id: "r2", name: "Busy Bee Cafe", cuisine: "Continental & Nepali",
    location: "Lakeside, Pokhara", priceRange: "Budget",
    description: "A legendary backpacker cafe on Pokhara's lakeside that has been feeding trekkers for over 30 years. The menu covers enormous breakfast plates, wood-fired pizzas and Nepali thali sets. The garden terrace with fairy lights and lake glimpses is perfect for a relaxed evening.",
    specialties: ["Everest Burger", "Wood-fired Pizza", "Apple Pie", "Lassi", "Thakali Set"],
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    phone: "+977-61-462009", rating: 4.5, reviews: 880
  },
  {
    id: "r3", name: "OR2K Restaurant", cuisine: "Middle Eastern & Vegetarian",
    location: "Thamel, Kathmandu", priceRange: "Mid-range",
    description: "A Thamel institution serving healthy Middle Eastern and vegetarian food in a colourful cushioned lounge atmosphere. The mezze platters, fresh-baked pita and falafel wraps are outstanding. Known for generous portions and a calm alternative to Thamel's noisy streets.",
    specialties: ["Falafel Wrap", "Mezze Platter", "Fresh Juices", "Shakshuka", "Vegan Dal"],
    image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    phone: "+977-1-4700528", rating: 4.6, reviews: 640
  },
  {
    id: "r4", name: "Thakali Kitchen", cuisine: "Thakali (Mustang-style)",
    location: "New Road, Kathmandu", priceRange: "Budget",
    description: "A no-frills local favourite serving authentic Thakali cuisine from Nepal's Mustang district. The Thakali dal bhat — with six side dishes, ghee-drizzled rice and rich mustard-seed pickle — is considered the best in Kathmandu. Pure Nepali soul food.",
    specialties: ["Thakali Dal Bhat", "Mustard Pickle", "Ghee Rice", "Mutton Curry", "Buckwheat Roti"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    phone: "+977-1-4227344", rating: 4.7, reviews: 510
  },
  {
    id: "r5", name: "Krishnarpan", cuisine: "Royal Nepali Fine Dining",
    location: "Dwarika's Hotel, Battisputali", priceRange: "Luxury",
    description: "Nepal's only true fine-dining Nepali restaurant, offering a ceremonial multi-course meal of up to 22 dishes inside the stunning Dwarika's heritage hotel. Each course is inspired by a different region of Nepal. The silver-and-terracotta table settings and classical music create an extraordinary atmosphere.",
    specialties: ["22-Course Tasting Menu", "Heritage Recipes", "Himalayan Herb Dishes", "Royal Sweets"],
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    phone: "+977-1-4479488", rating: 4.9, reviews: 430
  },
  {
    id: "r6", name: "Momos & More", cuisine: "Nepali Street Food",
    location: "Ason Bazaar, Kathmandu", priceRange: "Budget",
    description: "A tiny beloved street-food stall in the heart of Ason Bazaar serving Kathmandu's most popular momos since 1985. The steamed buff momos with sesame-tomato sauce are legendary among locals. Join the queue of office workers and students for the most authentic momo experience in the city.",
    specialties: ["Steamed Buff Momo", "Fried Momo", "Jhol Momo", "Chowmein", "Samosa"],
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
    phone: "+977-9841111222", rating: 4.6, reviews: 1200
  }
];
