// QUIZ UNIVERSE — Interaction Data Registry
// Explicit structured datasets for Map Selection, Timeline Ordering, Sequence Completion, and Image Identification

export const MAP_DATA_RECORDS = {
  // Space World
  's01': {
    mapType: 'space',
    hint: 'Locate the reddish terrestrial orbit in the inner solar system',
    hotspots: [
      { optionIndex: 0, x: 300, y: 88, markerLabel: 'Sector A', locationName: 'Mars Orbit (1.52 AU)', feedback: 'Mars orbits 1.52 AU from the Sun, covered in reddish iron-oxide dust.' },
      { optionIndex: 1, x: 248, y: 110, markerLabel: 'Sector B', locationName: 'Venus Orbit (0.72 AU)', feedback: 'Venus orbits 0.72 AU from the Sun beneath dense sulfuric acid clouds.' },
      { optionIndex: 2, x: 226, y: 120, markerLabel: 'Sector C', locationName: 'Mercury Orbit (0.39 AU)', feedback: 'Mercury is the innermost planet, orbiting just 0.39 AU from the Sun.' },
      { optionIndex: 3, x: 75, y: 60, markerLabel: 'Sector D', locationName: 'Neptune Orbit (30.07 AU)', feedback: 'Neptune is the outermost giant ice planet at 30.07 AU.' },
    ],
  },
  's02': {
    mapType: 'space',
    hint: 'Identify the orbital zone of the solar system’s most massive gas giant',
    hotspots: [
      { optionIndex: 0, x: 338, y: 75, markerLabel: 'Sector A', locationName: 'Jupiter Orbit (5.20 AU)', feedback: 'Jupiter is the largest planet, with more mass than all others combined.' },
      { optionIndex: 1, x: 375, y: 65, markerLabel: 'Sector B', locationName: 'Saturn Orbit (9.58 AU)', feedback: 'Saturn is the second-largest planet, famous for its ring system.' },
      { optionIndex: 2, x: 272, y: 100, markerLabel: 'Sector C', locationName: 'Earth Orbit (1.00 AU)', feedback: 'Earth is the largest of the four inner terrestrial rocky planets.' },
      { optionIndex: 3, x: 120, y: 65, markerLabel: 'Sector D', locationName: 'Uranus Orbit (19.22 AU)', feedback: 'Uranus is the third-largest by diameter, an ice giant world.' },
    ],
  },
  's03': {
    mapType: 'space',
    hint: 'Target the innermost planetary trajectory adjacent to the Sun',
    hotspots: [
      { optionIndex: 0, x: 226, y: 120, markerLabel: 'Sector A', locationName: 'Mercury Orbit (0.39 AU)', feedback: 'Mercury is closest to the Sun, with an orbital period of only 88 Earth days.' },
      { optionIndex: 1, x: 248, y: 110, markerLabel: 'Sector B', locationName: 'Venus Orbit (0.72 AU)', feedback: 'Venus is the second planet from the Sun, between Mercury and Earth.' },
      { optionIndex: 2, x: 272, y: 100, markerLabel: 'Sector C', locationName: 'Earth Orbit (1.00 AU)', feedback: 'Earth is the third planet, located in the habitable zone at 1.00 AU.' },
      { optionIndex: 3, x: 300, y: 88, markerLabel: 'Sector D', locationName: 'Mars Orbit (1.52 AU)', feedback: 'Mars is the fourth planet, situated beyond Earth’s orbit.' },
    ],
  },
  's04': {
    mapType: 'space',
    hint: 'Pinpoint the giant ringed planet beyond the asteroid belt',
    hotspots: [
      { optionIndex: 0, x: 375, y: 65, markerLabel: 'Sector A', locationName: 'Saturn Orbit (9.58 AU)', feedback: 'Saturn features expansive, highly reflective rings composed primarily of water ice.' },
      { optionIndex: 1, x: 300, y: 88, markerLabel: 'Sector B', locationName: 'Mars Orbit (1.52 AU)', feedback: 'Mars has two small irregular moons, Phobos and Deimos, but no ring system.' },
      { optionIndex: 2, x: 226, y: 120, markerLabel: 'Sector C', locationName: 'Mercury Orbit (0.39 AU)', feedback: 'Mercury has no atmosphere and no planetary rings.' },
      { optionIndex: 3, x: 272, y: 100, markerLabel: 'Sector D', locationName: 'Earth Orbit (1.00 AU)', feedback: 'Earth possesses a single large natural satellite, the Moon, but no rings.' },
    ],
  },
  's06': {
    mapType: 'space',
    hint: 'Identify the world with runaway greenhouse heating',
    hotspots: [
      { optionIndex: 0, x: 248, y: 110, markerLabel: 'Sector A', locationName: 'Venus Orbit (0.72 AU)', feedback: 'Venus has an average surface temperature of ~464°C due to dense CO₂ greenhouse trapping.' },
      { optionIndex: 1, x: 226, y: 120, markerLabel: 'Sector B', locationName: 'Mercury Orbit (0.39 AU)', feedback: 'Mercury lacks an atmosphere, so its night side plummets to −180°C.' },
      { optionIndex: 2, x: 300, y: 88, markerLabel: 'Sector C', locationName: 'Mars Orbit (1.52 AU)', feedback: 'Mars has a thin atmosphere and averages a cold −60°C.' },
      { optionIndex: 3, x: 338, y: 75, markerLabel: 'Sector D', locationName: 'Jupiter Orbit (5.20 AU)', feedback: 'Jupiter’s cloud tops are frigid, averaging −110°C.' },
    ],
  },
  's08': {
    mapType: 'space',
    hint: 'Locate the outer ice giant tilted at an extreme 97.8 degree axial tilt',
    hotspots: [
      { optionIndex: 0, x: 120, y: 65, markerLabel: 'Sector A', locationName: 'Uranus Orbit (19.22 AU)', feedback: 'Uranus rotates almost entirely on its side with an axial tilt of 97.8 degrees.' },
      { optionIndex: 1, x: 338, y: 75, markerLabel: 'Sector B', locationName: 'Jupiter Orbit (5.20 AU)', feedback: 'Jupiter has a nearly upright axial tilt of only 3.1 degrees.' },
      { optionIndex: 2, x: 248, y: 110, markerLabel: 'Sector C', locationName: 'Venus Orbit (0.72 AU)', feedback: 'Venus has retrograde rotation with a 177 degree tilt, but spins very slowly.' },
      { optionIndex: 3, x: 226, y: 120, markerLabel: 'Sector D', locationName: 'Mercury Orbit (0.39 AU)', feedback: 'Mercury’s rotational axis is nearly perpendicular to its orbital plane (0.03°).' },
    ],
  },

  // Geography World
  'geography-001': {
    mapType: 'world',
    hint: 'Target the capital of Australia on the southeastern Australian continent',
    hotspots: [
      { optionIndex: 0, x: 342, y: 182, markerLabel: 'Site A', locationName: 'Canberra (35°S, 149°E)', feedback: 'Canberra is the federal capital of Australia, chosen as a compromise between Sydney and Melbourne.' },
      { optionIndex: 1, x: 348, y: 178, markerLabel: 'Site B', locationName: 'Sydney (33°S, 151°E)', feedback: 'Sydney is the largest city in Australia and capital of New South Wales.' },
      { optionIndex: 2, x: 338, y: 186, markerLabel: 'Site C', locationName: 'Melbourne (37°S, 144°E)', feedback: 'Melbourne is the capital of Victoria on Port Phillip Bay.' },
      { optionIndex: 3, x: 318, y: 176, markerLabel: 'Site D', locationName: 'Perth (31°S, 115°E)', feedback: 'Perth is the state capital of Western Australia on the Indian Ocean coast.' },
    ],
  },
  'geography-002': {
    mapType: 'world',
    hint: 'Follow the northeastern African drainage basin into the Mediterranean',
    hotspots: [
      { optionIndex: 0, x: 230, y: 115, markerLabel: 'Site A', locationName: 'Nile Basin, Egypt (30°N, 31°E)', feedback: 'The Nile flows northward through Egypt into the Mediterranean Sea.' },
      { optionIndex: 1, x: 218, y: 145, markerLabel: 'Site B', locationName: 'Congo Basin (0°, 20°E)', feedback: 'The Congo River drains into the Atlantic Ocean in Central Africa.' },
      { optionIndex: 2, x: 195, y: 125, markerLabel: 'Site C', locationName: 'Niger River Basin (10°N, 5°E)', feedback: 'The Niger River flows through West Africa into the Gulf of Guinea.' },
      { optionIndex: 3, x: 228, y: 168, markerLabel: 'Site D', locationName: 'Zambezi River (15°S, 30°E)', feedback: 'The Zambezi River flows eastward into the Indian Ocean in Southern Africa.' },
    ],
  },
  'geography-003': {
    mapType: 'world',
    hint: 'Identify the expansive desert across northern Africa',
    hotspots: [
      { optionIndex: 0, x: 210, y: 108, markerLabel: 'Site A', locationName: 'Sahara Desert (23°N, 12°E)', feedback: 'The Sahara spans ~9.2 million km² across North Africa, the largest hot desert on Earth.' },
      { optionIndex: 1, x: 245, y: 105, markerLabel: 'Site B', locationName: 'Arabian Desert (23°N, 45°E)', feedback: 'The Arabian Desert occupies most of the Arabian Peninsula in Western Asia.' },
      { optionIndex: 2, x: 220, y: 175, markerLabel: 'Site C', locationName: 'Kalahari Basin (23°S, 22°E)', feedback: 'The Kalahari is a semi-arid savanna basin in Southern Africa.' },
      { optionIndex: 3, x: 265, y: 108, markerLabel: 'Site D', locationName: 'Thar Desert (27°N, 71°E)', feedback: 'The Thar Desert forms a natural boundary between India and Pakistan.' },
    ],
  },
  'geography-004': {
    mapType: 'world',
    hint: 'Select the mountain barrier separating France and the Iberian Peninsula',
    hotspots: [
      { optionIndex: 0, x: 198, y: 78, markerLabel: 'Site A', locationName: 'Pyrenees (42°N, 1°E)', feedback: 'The Pyrenees range forms the natural physical border between France and Spain.' },
      { optionIndex: 1, x: 210, y: 72, markerLabel: 'Site B', locationName: 'Alps (46°N, 9°E)', feedback: 'The Alps extend across France, Switzerland, Italy, and Austria.' },
      { optionIndex: 2, x: 214, y: 78, markerLabel: 'Site C', locationName: 'Apennines (43°N, 13°E)', feedback: 'The Apennines run along the length of peninsular Italy.' },
      { optionIndex: 3, x: 226, y: 68, markerLabel: 'Site D', locationName: 'Carpathians (47°N, 25°E)', feedback: 'The Carpathian Mountains form an arc across Central and Eastern Europe.' },
    ],
  },
  'geography-005': {
    mapType: 'world',
    hint: 'Locate the South American continent containing the Amazon Basin',
    hotspots: [
      { optionIndex: 0, x: 125, y: 160, markerLabel: 'Site A', locationName: 'South America (10°S, 55°W)', feedback: 'South America contains the Amazon Basin, representing over half of Earth’s remaining rainforest.' },
      { optionIndex: 1, x: 215, y: 135, markerLabel: 'Site B', locationName: 'Africa (5°N, 20°E)', feedback: 'Africa is home to the Congo Basin rainforest in equatorial Central Africa.' },
      { optionIndex: 2, x: 295, y: 80, markerLabel: 'Site C', locationName: 'Asia (40°N, 100°E)', feedback: 'Asia is Earth’s largest and most populous continent.' },
      { optionIndex: 3, x: 95, y: 70, markerLabel: 'Site D', locationName: 'North America (45°N, 100°W)', feedback: 'North America contains boreal forests and temperate rainforests in the Pacific Northwest.' },
    ],
  },
  'geography-006': {
    mapType: 'world',
    hint: 'Pinpoint the capital city in East Africa near the equator',
    hotspots: [
      { optionIndex: 0, x: 238, y: 138, markerLabel: 'Site A', locationName: 'Nairobi, Kenya (1°S, 36°E)', feedback: 'Nairobi is the capital and largest city of Kenya in East Africa.' },
      { optionIndex: 1, x: 232, y: 136, markerLabel: 'Site B', locationName: 'Kampala, Uganda (0°N, 32°E)', feedback: 'Kampala is the capital of Uganda, situated near Lake Victoria.' },
      { optionIndex: 2, x: 236, y: 146, markerLabel: 'Site C', locationName: 'Dodoma, Tanzania (6°S, 35°E)', feedback: 'Dodoma is the designated national capital of Tanzania.' },
      { optionIndex: 3, x: 230, y: 140, markerLabel: 'Site D', locationName: 'Kigali, Rwanda (1°S, 30°E)', feedback: 'Kigali is the geographic capital of Rwanda.' },
    ],
  },
  'geography-007': {
    mapType: 'world',
    hint: 'Target the intercontinental sea between Europe and Africa',
    hotspots: [
      { optionIndex: 0, x: 215, y: 88, markerLabel: 'Site A', locationName: 'Mediterranean Sea (35°N, 18°E)', feedback: 'The Mediterranean Sea connects to the Atlantic Ocean via the Strait of Gibraltar.' },
      { optionIndex: 1, x: 235, y: 76, markerLabel: 'Site B', locationName: 'Black Sea (44°N, 35°E)', feedback: 'The Black Sea lies between Southeastern Europe and Western Asia.' },
      { optionIndex: 2, x: 238, y: 110, markerLabel: 'Site C', locationName: 'Red Sea (20°N, 38°E)', feedback: 'The Red Sea is an inlet of the Indian Ocean between Africa and Arabia.' },
      { optionIndex: 3, x: 216, y: 52, markerLabel: 'Site D', locationName: 'Baltic Sea (58°N, 20°E)', feedback: 'The Baltic Sea is an arm of the Atlantic Ocean in Northern Europe.' },
    ],
  },
  'geography-008': {
    mapType: 'world',
    hint: 'Find the highest peak in the Himalayan mountain range',
    hotspots: [
      { optionIndex: 0, x: 278, y: 102, markerLabel: 'Site A', locationName: 'Mount Everest (27°N, 86°E)', feedback: 'Mount Everest stands 8,848.86 m on the border between Nepal and China.' },
      { optionIndex: 1, x: 272, y: 94, markerLabel: 'Site B', locationName: 'K2, Karakoram (35°N, 76°E)', feedback: 'K2 is the world’s second-highest peak at 8,611 m in the Karakoram range.' },
      { optionIndex: 2, x: 280, y: 104, markerLabel: 'Site C', locationName: 'Kangchenjunga (27°N, 88°E)', feedback: 'Kangchenjunga is the third-highest mountain at 8,586 m between India and Nepal.' },
      { optionIndex: 3, x: 279, y: 103, markerLabel: 'Site D', locationName: 'Lhotse (27°N, 86°E)', feedback: 'Lhotse is the fourth-highest mountain, directly connected to Everest via the South Col.' },
    ],
  },
  'geography-extra-021': {
    mapType: 'world',
    hint: 'Trace the longest continental mountain range on Earth along western South America',
    hotspots: [
      { optionIndex: 0, x: 125, y: 165, markerLabel: 'Site A', locationName: 'The Andes (South America)', feedback: 'The Andes span ~7,000 km along western South America, the longest continental mountain range on Earth.' },
      { optionIndex: 1, x: 278, y: 102, markerLabel: 'Site B', locationName: 'The Himalaya (Asia)', feedback: 'The Himalaya contain Earth’s highest peaks, spanning South Asia.' },
      { optionIndex: 2, x: 88, y: 68, markerLabel: 'Site C', locationName: 'The Rocky Mountains (North America)', feedback: 'The Rockies stretch ~4,800 km across western North America.' },
      { optionIndex: 3, x: 210, y: 72, markerLabel: 'Site D', locationName: 'The Alps (Europe)', feedback: 'The Alps form Europe’s most prominent high mountain barrier.' },
    ],
  },
  'geography-extra-022': {
    mapType: 'world',
    hint: 'Locate the highest mountain summit in North America in south-central Alaska',
    hotspots: [
      { optionIndex: 0, x: 72, y: 45, markerLabel: 'Site A', locationName: 'Denali, Alaska (63°N, 151°W)', feedback: 'Denali reaches 6,190 m (20,310 ft) in the Alaska Range, the highest peak in North America.' },
      { optionIndex: 1, x: 122, y: 185, markerLabel: 'Site B', locationName: 'Aconcagua, Argentina (32°S, 70°W)', feedback: 'Aconcagua is the highest summit outside Asia at 6,961 m in the Andes.' },
      { optionIndex: 2, x: 236, y: 142, markerLabel: 'Site C', locationName: 'Mount Kilimanjaro, Tanzania (3°S, 37°E)', feedback: 'Mount Kilimanjaro is the highest peak in Africa at 5,895 m.' },
      { optionIndex: 3, x: 278, y: 102, markerLabel: 'Site D', locationName: 'Mount Everest, Asia (27°N, 86°E)', feedback: 'Mount Everest is Earth’s highest mountain above sea level at 8,848 m.' },
    ],
  },
  'geography-extra-023': {
    mapType: 'world',
    hint: 'Target the highest volcanic massif in Africa in northern Tanzania',
    hotspots: [
      { optionIndex: 0, x: 236, y: 142, markerLabel: 'Site A', locationName: 'Mount Kilimanjaro (3°S, 37°E)', feedback: 'Kilimanjaro is a dormant volcano in Tanzania and the highest summit in Africa (5,895 m).' },
      { optionIndex: 1, x: 237, y: 137, markerLabel: 'Site B', locationName: 'Mount Kenya (0°S, 37°E)', feedback: 'Mount Kenya is the second-highest peak in Africa at 5,199 m.' },
      { optionIndex: 2, x: 234, y: 135, markerLabel: 'Site C', locationName: 'Mount Elgon (1°N, 34°E)', feedback: 'Mount Elgon is an extinct shield volcano on the Uganda-Kenya border.' },
      { optionIndex: 3, x: 237, y: 118, markerLabel: 'Site D', locationName: 'Ras Dashen, Ethiopia (13°N, 38°E)', feedback: 'Ras Dashen is the highest peak in Ethiopia (4,550 m).' },
    ],
  },
  'geography-extra-024': {
    mapType: 'world',
    hint: 'Identify the iconic snow-capped stratovolcano on Honshu Island, Japan',
    hotspots: [
      { optionIndex: 0, x: 345, y: 85, markerLabel: 'Site A', locationName: 'Mount Fuji, Japan (35°N, 138°E)', feedback: 'Mount Fuji (Fujisan) is Japan’s highest active stratovolcano at 3,776 m.' },
      { optionIndex: 1, x: 278, y: 102, markerLabel: 'Site B', locationName: 'Mount Everest, Asia (27°N, 86°E)', feedback: 'Mount Everest is the highest mountain on Earth at 8,848 m in the Himalayas.' },
      { optionIndex: 2, x: 236, y: 142, markerLabel: 'Site C', locationName: 'Mount Kilimanjaro, Tanzania (3°S, 37°E)', feedback: 'Mount Kilimanjaro is the highest peak in Africa at 5,895 m.' },
      { optionIndex: 3, x: 72, y: 45, markerLabel: 'Site D', locationName: 'Denali, Alaska (63°N, 151°W)', feedback: 'Denali is the highest mountain in North America at 6,190 m.' },
    ],
  },
  'geography-extra-025': {
    mapType: 'world',
    hint: 'Find the towering Himalayan mountain chain rising between the Tibetan Plateau and India',
    hotspots: [
      { optionIndex: 0, x: 278, y: 102, markerLabel: 'Site A', locationName: 'The Himalaya (Asia)', feedback: 'The Himalaya mountain system stretches across five countries in South Asia.' },
      { optionIndex: 1, x: 125, y: 165, markerLabel: 'Site B', locationName: 'The Andes (South America)', feedback: 'The Andes mountain system runs down western South America.' },
      { optionIndex: 2, x: 210, y: 72, markerLabel: 'Site C', locationName: 'The Alps (Europe)', feedback: 'The Alps span across central-southern Europe.' },
      { optionIndex: 3, x: 88, y: 68, markerLabel: 'Site D', locationName: 'The Rocky Mountains (North America)', feedback: 'The Rockies stretch through western North America.' },
    ],
  },

  // Flags World
  'flags-002': {
    mapType: 'world',
    hint: 'Select the North American country whose flag features a red maple leaf',
    hotspots: [
      { optionIndex: 0, x: 90, y: 48, markerLabel: 'Site A', locationName: 'Canada (60°N, 95°W)', feedback: 'Canada adopted the National Flag of Canada (Maple Leaf) in 1965.' },
      { optionIndex: 1, x: 208, y: 56, markerLabel: 'Site B', locationName: 'Denmark (56°N, 10°E)', feedback: 'Denmark flies the Dannebrog, a white Scandinavian cross on red.' },
      { optionIndex: 2, x: 208, y: 48, markerLabel: 'Site C', locationName: 'Norway (62°N, 9°E)', feedback: 'Norway’s flag is red with an indigo blue Scandinavian cross bordered in white.' },
      { optionIndex: 3, x: 225, y: 46, markerLabel: 'Site D', locationName: 'Finland (64°N, 26°E)', feedback: 'Finland flies the Siniristilippu, a blue Nordic cross on a white field.' },
    ],
  },
  'flags-003': {
    mapType: 'world',
    hint: 'Target the European island nation flying a green, white, and orange tricolor',
    hotspots: [
      { optionIndex: 0, x: 190, y: 60, markerLabel: 'Site A', locationName: 'Ireland (53°N, 8°W)', feedback: 'Ireland’s tricolour represents Gaelic tradition (green), Williamite tradition (orange), and peace (white).' },
      { optionIndex: 1, x: 212, y: 80, markerLabel: 'Site B', locationName: 'Italy (42°N, 12°E)', feedback: 'Italy’s vertical tricolor features green, white, and red bands.' },
      { optionIndex: 2, x: 192, y: 130, markerLabel: 'Site C', locationName: 'Côte d’Ivoire (7°N, 5°W)', feedback: 'Côte d’Ivoire has orange, white, and green vertical stripes (reversed order).' },
      { optionIndex: 3, x: 270, y: 115, markerLabel: 'Site D', locationName: 'India (20°N, 78°E)', feedback: 'India’s horizontal tricolour has saffron, white, and green with the Ashoka Chakra.' },
    ],
  },
  'flags-004': {
    mapType: 'world',
    hint: 'Locate the East Asian island nation with a red circle on white',
    hotspots: [
      { optionIndex: 0, x: 345, y: 85, markerLabel: 'Site A', locationName: 'Japan (36°N, 138°E)', feedback: 'Japan’s flag (Nisshōki / Hinomaru) symbolizes the rising sun.' },
      { optionIndex: 1, x: 278, y: 114, markerLabel: 'Site B', locationName: 'Bangladesh (23°N, 90°E)', feedback: 'Bangladesh’s flag features a red disc offset slightly on a dark green field.' },
      { optionIndex: 2, x: 220, y: 64, markerLabel: 'Site C', locationName: 'Poland (52°N, 19°E)', feedback: 'Poland’s flag consists of two horizontal stripes: white on top and red below.' },
      { optionIndex: 3, x: 215, y: 72, markerLabel: 'Site D', locationName: 'Austria (47°N, 14°E)', feedback: 'Austria’s triband flag consists of three equal horizontal bands of red, white, red.' },
    ],
  },
  'flags-007': {
    mapType: 'world',
    hint: 'Identify the Scandinavian nation with a yellow cross on blue',
    hotspots: [
      { optionIndex: 0, x: 215, y: 48, markerLabel: 'Site A', locationName: 'Sweden (62°N, 15°E)', feedback: 'Sweden’s flag displays a yellow Scandinavian cross on a blue field.' },
      { optionIndex: 1, x: 225, y: 46, markerLabel: 'Site B', locationName: 'Finland (64°N, 26°E)', feedback: 'Finland features a blue cross on a white background.' },
      { optionIndex: 2, x: 208, y: 56, markerLabel: 'Site C', locationName: 'Denmark (56°N, 10°E)', feedback: 'Denmark uses a white cross on a red background.' },
      { optionIndex: 3, x: 208, y: 48, markerLabel: 'Site D', locationName: 'Norway (62°N, 9°E)', feedback: 'Norway features a blue cross bordered with white on red.' },
    ],
  },
  'flags-009': {
    mapType: 'world',
    hint: 'Pinpoint the East Asian nation flying five yellow stars on red',
    hotspots: [
      { optionIndex: 0, x: 300, y: 95, markerLabel: 'Site A', locationName: 'China (35°N, 105°E)', feedback: 'China’s Five-star Red Flag features a large yellow star with four smaller stars in an arc.' },
      { optionIndex: 1, x: 306, y: 118, markerLabel: 'Site B', locationName: 'Vietnam (14°N, 108°E)', feedback: 'Vietnam’s flag features a single large yellow five-pointed star on red.' },
      { optionIndex: 2, x: 310, y: 132, markerLabel: 'Site C', locationName: 'Singapore (1°N, 103°E)', feedback: 'Singapore’s flag has red and white horizontal halves with a crescent and five white stars.' },
      { optionIndex: 3, x: 235, y: 80, markerLabel: 'Site D', locationName: 'Turkey (39°N, 35°E)', feedback: 'Turkey flies a white crescent and five-pointed star on a red field.' },
    ],
  },
  'flags-extra-021': {
    mapType: 'world',
    hint: 'Locate the Central European nation flying black, red, and gold',
    hotspots: [
      { optionIndex: 0, x: 212, y: 65, markerLabel: 'Site A', locationName: 'Germany (51°N, 10°E)', feedback: 'Germany adopted the black, red, and gold tricolour during the 1848 Frankfurt Parliament.' },
      { optionIndex: 1, x: 202, y: 72, markerLabel: 'Site B', locationName: 'France (46°N, 2°E)', feedback: 'France flies the vertical tricolore of blue, white, and red.' },
      { optionIndex: 2, x: 212, y: 80, markerLabel: 'Site C', locationName: 'Italy (42°N, 12°E)', feedback: 'Italy flies the vertical tricolor of green, white, and red.' },
      { optionIndex: 3, x: 203, y: 66, markerLabel: 'Site D', locationName: 'Belgium (50°N, 4°E)', feedback: 'Belgium flies a vertical tricolour of black, yellow, and red.' },
    ],
  },
};

export const TIMELINE_DATA_RECORDS = {
  // History World
  'history-extra-021': {
    theme: 'Ancient Mesopotamian & Early Egyptian Milestones',
    events: [
      { id: 'he21_1', title: 'Uruk Emerges as World\'s First Metropolis', date: 'c. 3200 BCE', chronologicalRank: 1, description: 'Sumerian urban revolution establishes monumental temple precincts.', correctPosition: 0, explanation: 'Uruk grew into the largest urban center in Mesopotamia c. 3200 BCE.' },
      { id: 'he21_2', title: 'Cuneiform Script Developed in Sumer', date: 'c. 3000 BCE', chronologicalRank: 2, description: 'Pictographic administrative tallies evolve into wedge-shaped clay script.', correctPosition: 1, explanation: 'Sumerian cuneiform represents humanity’s earliest recorded writing system.' },
      { id: 'he21_3', title: 'Djoser’s Step Pyramid Built at Saqqara', date: 'c. 2670 BCE', chronologicalRank: 3, description: 'Architect Imhotep designs Egypt’s first monumental stone pyramid complex.', correctPosition: 2, explanation: 'Built during Egypt’s Third Dynasty as the earliest monumental stone pyramid.' },
      { id: 'he21_4', title: 'Code of Ur-Nammu Promulgated', date: 'c. 2100 BCE', chronologicalRank: 4, description: 'King of Ur writes the oldest surviving statutory legal code.', correctPosition: 3, explanation: 'Predates the Code of Hammurabi by three centuries, establishing statutory law.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'history-001': {
    theme: 'Ancient Civilizations & Monolithic Monuments',
    events: [
      { id: 'h1_1', title: 'Great Pyramid of Giza Built', date: 'c. 2560 BCE', chronologicalRank: 1, description: 'Pharaoh Khufu commissions the Great Pyramid during Egypt’s Old Kingdom.', correctPosition: 0, explanation: 'Completed c. 2560 BCE, standing as the tallest man-made structure for over 3,800 years.' },
      { id: 'h1_2', title: 'Parthenon Constructed in Athens', date: 'c. 447 BCE', chronologicalRank: 2, description: 'Pericles oversees the building of the marble temple on the Athenian Acropolis.', correctPosition: 1, explanation: 'Dedicated to Athena Parthenos at the peak of classical Greek architectural supremacy.' },
      { id: 'h1_3', title: 'Roman Colosseum Dedicated', date: '80 CE', chronologicalRank: 3, description: 'Emperor Titus opens the Flavian Amphitheatre with 100 days of games.', correctPosition: 2, explanation: 'The largest amphitheatre of the ancient Roman Empire seated over 50,000 spectators.' },
      { id: 'h1_4', title: 'Berlin Wall Demolished', date: '1989 CE', chronologicalRank: 4, description: 'Border checkpoints open between East and West Germany, ending Cold War division.', correctPosition: 3, explanation: 'The fall of the wall symbolized the collapse of Soviet European satellite control.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'history-003': {
    theme: 'Modern Era Political Transformations',
    events: [
      { id: 'h3_1', title: 'Outbreak of the French Revolution', date: '1789 CE', chronologicalRank: 1, description: 'The storming of the Bastille triggers the end of absolute French monarchy.', correctPosition: 0, explanation: 'Ignited on July 14, 1789, establishing the Declaration of the Rights of Man.' },
      { id: 'h3_2', title: 'Outbreak of World War I', date: '1914 CE', chronologicalRank: 2, description: 'Assassination of Archduke Franz Ferdinand unleashes global alliance hostilities.', correctPosition: 1, explanation: 'Commenced in August 1914 following the July Crisis among the Great Powers.' },
      { id: 'h3_3', title: 'Apollo 11 Crew Lands on the Moon', date: '1969 CE', chronologicalRank: 3, description: 'Neil Armstrong and Buzz Aldrin complete the first crewed lunar touchdown.', correctPosition: 2, explanation: 'Touched down in the Sea of Tranquility on July 20, 1969.' },
      { id: 'h3_4', title: 'Fall of the Berlin Wall', date: '1989 CE', chronologicalRank: 4, description: 'Peaceful revolution opens the border separating East and West Berlin.', correctPosition: 3, explanation: 'On November 9, 1989, East Germany announced immediate travel authorization.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'history-004': {
    theme: 'Early United States Presidential Succession',
    events: [
      { id: 'h4_1', title: 'George Washington Takes Office', date: '1789 CE', chronologicalRank: 1, description: 'Inaugurated as the 1st President under the new US Constitution.', correctPosition: 0, explanation: 'Sworn in on Federal Hall balcony in New York City on April 30, 1789.' },
      { id: 'h4_2', title: 'John Adams Assumes Presidency', date: '1797 CE', chronologicalRank: 2, description: 'Succeeds Washington as the 2nd President of the United States.', correctPosition: 1, explanation: 'Elected in 1796, serving one term through the Quasi-War diplomacy.' },
      { id: 'h4_3', title: 'Thomas Jefferson Inauguration', date: '1801 CE', chronologicalRank: 3, description: '3rd President takes office following the Revolution of 1800 election.', correctPosition: 2, explanation: 'Marked the first peaceful transfer of executive power between opposing parties.' },
      { id: 'h4_4', title: 'James Madison Inauguration', date: '1809 CE', chronologicalRank: 4, description: '4th President leads the nation during the War of 1812 conflict.', correctPosition: 3, explanation: 'Primary drafter of the Bill of Rights, elected president in 1808.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'history-008': {
    theme: 'Age of Democratic Revolutions',
    events: [
      { id: 'h8_1', title: 'American Declaration of Independence', date: '1776 CE', chronologicalRank: 1, description: 'Continental Congress declares the thirteen colonies free and independent.', correctPosition: 0, explanation: 'Adopted in Philadelphia on July 4, 1776, severing British sovereign rule.' },
      { id: 'h8_2', title: 'French Revolution Begins', date: '1789 CE', chronologicalRank: 2, description: 'Estates-General convenes and citizens storm the royal Bastille fortress.', correctPosition: 1, explanation: 'Initiated fundamental transformation of European social and legal institutions.' },
      { id: 'h8_3', title: 'Haitian Independence Proclaimed', date: '1804 CE', chronologicalRank: 3, description: 'Enslaved people defeat French colonial forces, establishing the free republic.', correctPosition: 2, explanation: 'Jean-Jacques Dessalines proclaims Haitian independence on January 1, 1804.' },
      { id: 'h8_4', title: 'European Revolutions of 1848', date: '1848 CE', chronologicalRank: 4, description: 'Springtime of the Peoples triggers democratic uprisings across Europe.', correctPosition: 3, explanation: 'Over 50 countries experienced simultaneous revolutionary popular protests.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'history-017': {
    theme: 'Major 19th & 20th Century Military Milestones',
    events: [
      { id: 'h17_1', title: 'Crimean War Concluded by Treaty of Paris', date: '1856 CE', chronologicalRank: 1, description: 'Allied powers defeat the Russian Empire in the Black Sea theater.', correctPosition: 0, explanation: 'Ended the Crimean conflict and demilitarized the Black Sea.' },
      { id: 'h17_2', title: 'Franco-Prussian War and German Unification', date: '1871 CE', chronologicalRank: 2, description: 'Prussian victory leads to proclamation of the German Empire at Versailles.', correctPosition: 1, explanation: 'Concluded with the Treaty of Frankfurt in May 1871.' },
      { id: 'h17_3', title: 'Armistice of Compiègne Ends WWI Fighting', date: '1918 CE', chronologicalRank: 3, description: 'Guns fall silent on the Western Front at the eleventh hour of November 11.', correctPosition: 2, explanation: 'Concluded combat operations in World War I between Germany and the Allies.' },
      { id: 'h17_4', title: 'Surrender of Axis Forces in World War II', date: '1945 CE', chronologicalRank: 4, description: 'VE Day and VJ Day mark unconditional victory of Allied coalition.', correctPosition: 3, explanation: 'Concluded global warfare following the atomic bombings and Soviet Manchurian campaign.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },

  // Inventions World
  'inventions-extra-021': {
    theme: 'Ancient Engineering and Technical Inventions',
    events: [
      { id: 'ie21_1', title: 'Solid Wooden Wheel Invented in Mesopotamia', date: 'c. 3500 BCE', chronologicalRank: 1, description: 'Pottery turntables and wheeled vehicular axles revolutionize transport.', correctPosition: 0, explanation: 'Early Sumerian excavations preserve the earliest known solid wheeled vehicles.' },
      { id: 'ie21_2', title: 'Papyrus Paper Developed in Egypt', date: 'c. 3000 BCE', chronologicalRank: 2, description: 'Laminated reed pith creates portable, durable writing rolls.', correctPosition: 1, explanation: 'Papyrus rolls enabled administrative archival records across the Mediterranean basin.' },
      { id: 'ie21_3', title: 'Archimedes’ Screw Water Pump Designed', date: 'c. 250 BCE', chronologicalRank: 3, description: 'Helical screw inside cylinder lifts irrigation water efficiently.', correctPosition: 2, explanation: 'Devised by Archimedes in Hellenistic Syracuse for land drainage and irrigation.' },
      { id: 'ie21_4', title: 'Antikythera Mechanism Astronomical Computer', date: 'c. 100 BCE', chronologicalRank: 4, description: 'Complex bronze gear trains model planetary positions and eclipse cycles.', correctPosition: 3, explanation: 'The world’s earliest known analog computational clockwork machine.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'inventions-001': {
    theme: 'Milestones in Mechanical & Information Technology',
    events: [
      { id: 'inv1_1', title: 'Gutenberg Operates Movable-Type Press', date: '1440 CE', chronologicalRank: 1, description: 'Hand mold and durable lead alloy type enable mass mechanical book production.', correctPosition: 0, explanation: 'Johannes Gutenberg perfected printing press technology in Mainz, Germany.' },
      { id: 'inv1_2', title: 'Galileo Improves Astronomical Telescope', date: '1609 CE', chronologicalRank: 2, description: 'Refracting telescope reveals Jupiter’s four Galilean moons and lunar craters.', correctPosition: 1, explanation: 'Provided observational empirical evidence confirming the heliocentric Copernican system.' },
      { id: 'inv1_3', title: 'Watt Patents Separate Condenser Steam Engine', date: '1769 CE', chronologicalRank: 3, description: 'Radical thermal efficiency improvement drives the Industrial Revolution.', correctPosition: 2, explanation: 'Separate condensing chamber eliminated cyclic cooling of the main cylinder.' },
      { id: 'inv1_4', title: 'Bell Patents Electric Telephone', date: '1876 CE', chronologicalRank: 4, description: 'Continuous electromagnetic undulating current transmits human speech.', correctPosition: 3, explanation: 'Alexander Graham Bell received US Patent 174,465 for voice transmission.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'inventions-002': {
    theme: 'Evolution of Long-Distance Communication',
    events: [
      { id: 'inv2_1', title: 'Morse Demonstrates Electric Telegraph', date: '1844 CE', chronologicalRank: 1, description: 'Sends the historic phrase "What hath God wrought" from Washington to Baltimore.', correctPosition: 0, explanation: 'Proved the feasibility of instantaneous long-distance electric coding.' },
      { id: 'inv2_2', title: 'Bell Demonstrates Electromagnetic Telephone', date: '1876 CE', chronologicalRank: 2, description: 'Transmits clear acoustic voice audio over an electrical wire.', correctPosition: 1, explanation: 'Enabled real-time bidirectional human voice telecommunication.' },
      { id: 'inv2_3', title: 'Marconi Transmits Transatlantic Wireless Radio', date: '1901 CE', chronologicalRank: 3, description: 'Radio frequency signals cross the ocean without physical submarine cables.', correctPosition: 2, explanation: 'Signal received in Newfoundland from Poldhu, Cornwall across 3,500 km.' },
      { id: 'inv2_4', title: 'First ARPANET Message Transmitted', date: '1969 CE', chronologicalRank: 4, description: 'Packet-switched computer node transmits "LO" between UCLA and Stanford.', correctPosition: 3, explanation: 'Founded the distributed packet networking protocols that created the Internet.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'inventions-003': {
    theme: 'Pioneering Breakthroughs in Transportation',
    events: [
      { id: 'inv3_1', title: 'Commercial Steam Locomotive Service Begins', date: '1830 CE', chronologicalRank: 1, description: 'Liverpool and Manchester Railway introduces scheduled twin-track steam rail.', correctPosition: 0, explanation: 'George Stephenson’s Rocket proved the economic dominance of steam locomotive transit.' },
      { id: 'inv3_2', title: 'Benz Patents Internal Combustion Motorwagen', date: '1886 CE', chronologicalRank: 2, description: 'Karl Benz builds the first purpose-designed petroleum gasoline automobile.', correctPosition: 1, explanation: 'German Patent 37435 recognized the birth of the modern automobile.' },
      { id: 'inv3_3', title: 'Wright Brothers Complete Powered Flight', date: '1903 CE', chronologicalRank: 3, description: 'Wright Flyer I achieves controlled, sustained heavier-than-air powered flight.', correctPosition: 2, explanation: 'Orville Wright flew 120 feet in 12 seconds over Kitty Hawk sands on Dec 17.' },
      { id: 'inv3_4', title: 'First Crewed Orbital Spaceflight by Gagarin', date: '1961 CE', chronologicalRank: 4, description: 'Vostok 1 carries Yuri Gagarin through complete 108-minute Earth orbit.', correctPosition: 3, explanation: 'Marked humanity’s entry into crewed space exploration.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'inventions-010': {
    theme: 'Electrical Power and Illumination Pioneers',
    events: [
      { id: 'inv10_1', title: 'Volta Constructs First Chemical Electric Battery', date: '1800 CE', chronologicalRank: 1, description: 'Voltaic pile produces continuous, steady direct electrical current.', correctPosition: 0, explanation: 'Alternating zinc and copper discs separated by brine-soaked cloth pioneered electrical science.' },
      { id: 'inv10_2', title: 'Faraday Discovers Electromagnetic Induction', date: '1831 CE', chronologicalRank: 2, description: 'Moving magnet through a coil generates electric voltage and current.', correctPosition: 1, explanation: 'Laid the theoretical and physical basis for electric generators and transformers.' },
      { id: 'inv10_3', title: 'Edison Develops Practical Carbon Filament Lamp', date: '1879 CE', chronologicalRank: 3, description: 'High-resistance evacuated bulb burns reliably for over 40 continuous hours.', correctPosition: 2, explanation: 'Thomas Edison created the commercial electrical distribution system that illuminated cities.' },
      { id: 'inv10_4', title: 'Bell Labs Team Invents Point-Contact Transistor', date: '1947 CE', chronologicalRank: 4, description: 'Solid-state semiconductor amplifier eliminates fragile, power-hungry vacuum tubes.', correctPosition: 3, explanation: 'John Bardeen, Walter Brattain, and William Shockley sparked modern microelectronics.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },

  // Literature World
  'literature-001': {
    theme: 'Masterpieces of World Literature',
    events: [
      { id: 'lit1_1', title: 'Homer Composes the Odyssey', date: 'c. 725 BCE', chronologicalRank: 1, description: 'Archaic Greek epic follows Odysseus’s ten-year journey home from Troy.', correctPosition: 0, explanation: 'Foundational Western epic tradition transmitted via dactylic hexameter verse.' },
      { id: 'lit1_2', title: 'Shakespeare Completes Hamlet', date: 'c. 1601 CE', chronologicalRank: 2, description: 'Tragedy of Prince Hamlet of Denmark premiers at London’s Globe Theatre.', correctPosition: 1, explanation: 'William Shakespeare’s longest play explores existential crisis, betrayal, and madness.' },
      { id: 'lit1_3', title: 'Jane Austen Publishes Pride and Prejudice', date: '1813 CE', chronologicalRank: 3, description: 'Classic comedy of manners traces Elizabeth Bennet and Mr. Darcy.', correctPosition: 2, explanation: 'Published anonymously in three volumes by Thomas Egerton in London.' },
      { id: 'lit1_4', title: 'George Orwell Publishes Nineteen Eighty-Four', date: '1949 CE', chronologicalRank: 4, description: 'Dystopian analysis of totalitarian surveillance, Doublethink, and Big Brother.', correctPosition: 3, explanation: 'Written on the Scottish island of Jura and published by Secker & Warburg.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
  'literature-008': {
    theme: 'Gothic & Speculative Fiction Traditions',
    events: [
      { id: 'lit8_1', title: 'Chaucer Writes The Canterbury Tales', date: 'c. 1387 CE', chronologicalRank: 1, description: 'Pilgrims traveling to Saint Thomas Becket’s shrine tell varied vernacular tales.', correctPosition: 0, explanation: 'Established Middle English as a high literary language.' },
      { id: 'lit8_2', title: 'Mary Shelley Publishes Frankenstein', date: '1818 CE', chronologicalRank: 2, description: 'Gothic masterpiece warns of scientific overreach and ethical responsibility.', correctPosition: 1, explanation: 'Published anonymously in London on New Year’s Day 1818 when Shelley was twenty.' },
      { id: 'lit8_3', title: 'Edgar Allan Poe Publishes The Raven', date: '1845 CE', chronologicalRank: 3, description: 'Narrative poem explores grief and psychological descent with musicality.', correctPosition: 2, explanation: 'First printed in the New York Evening Mirror on January 29, 1845.' },
      { id: 'lit8_4', title: 'Gabriel García Márquez Publishes Solitude', date: '1967 CE', chronologicalRank: 4, description: 'Landmark magical realist saga chronicles seven generations in Macondo.', correctPosition: 3, explanation: 'Cien años de soledad catapulted Latin American Boom literature to world acclaim.' },
    ],
    correctOrder: [0, 1, 2, 3],
  },
};

export const SEQUENCE_DATA_RECORDS = {
  // Logic World
  'logic-002': {
    sequenceType: 'arithmetic',
    terms: ['2', '4', '6', '8'],
    missingIndex: 4,
    rule: 'Add 2 to previous term (+2)',
    expectedAnswer: '10',
    distractors: ['9', '12', '16'],
    explanation: 'Consecutive even integers increase by 2 each step: 2, 4, 6, 8, so the next term is 8 + 2 = 10.',
  },
  'logic-006': {
    sequenceType: 'fibonacci',
    terms: ['1', '1', '2', '3', '5'],
    missingIndex: 5,
    rule: 'Fibonacci summation: each term is the sum of the prior two (F_n = F_{n-1} + F_{n-2})',
    expectedAnswer: '8',
    distractors: ['7', '9', '13'],
    explanation: '1 + 1 = 2; 1 + 2 = 3; 2 + 3 = 5; 3 + 5 = 8. The next term is 8.',
  },
  'logic-010': {
    sequenceType: 'geometric',
    terms: ['3', '6', '12', '24'],
    missingIndex: 4,
    rule: 'Multiply previous term by 2 (×2)',
    expectedAnswer: '48',
    distractors: ['36', '40', '72'],
    explanation: 'Geometric progression with common ratio r = 2: 3 × 2 = 6, 6 × 2 = 12, 12 × 2 = 24, 24 × 2 = 48.',
  },
  'logic-014': {
    sequenceType: 'alphabetic',
    terms: ['A', 'C', 'E', 'G'],
    missingIndex: 4,
    rule: 'Advance by 2 letter positions (+2 in alphabet)',
    expectedAnswer: 'I',
    distractors: ['H', 'J', 'K'],
    explanation: 'A (1), C (3), E (5), G (7) skips one letter each step, landing on I (9).',
  },
  'logic-020': {
    sequenceType: 'powers',
    terms: ['1', '4', '9', '16'],
    missingIndex: 4,
    rule: 'Consecutive integer squares (n² for n = 1, 2, 3, 4, …)',
    expectedAnswer: '25',
    distractors: ['20', '24', '36'],
    explanation: '1² = 1, 2² = 4, 3² = 9, 4² = 16. The next square is 5² = 25.',
  },
  'logic-extra-021': {
    sequenceType: 'geometric',
    terms: ['2', '4', '8', '16', '32'],
    missingIndex: 5,
    rule: 'Binary powers of two (2^n, multiply by 2)',
    expectedAnswer: '64',
    distractors: ['32', '128', '48'],
    explanation: 'Each successive term doubles the previous value: 32 × 2 = 64.',
  },
  'logic-extra-022': {
    sequenceType: 'arithmetic',
    terms: ['5', '9', '13', '17', '21'],
    missingIndex: 5,
    rule: 'Common difference of +4',
    expectedAnswer: '25',
    distractors: ['24', '26', '29'],
    explanation: 'Arithmetic progression with difference d = 4: 21 + 4 = 25.',
  },

  // Math World
  'math-007': {
    sequenceType: 'primes',
    terms: ['2', '3', '5', '7'],
    missingIndex: 4,
    rule: 'Ascending sequence of prime numbers',
    expectedAnswer: '11',
    distractors: ['9', '10', '13'],
    explanation: 'The prime sequence continues with 11 (9 is 3×3, 10 is 2×5).',
  },
  'math-extra-076': {
    sequenceType: 'fibonacci',
    terms: ['1', '1', '2', '3', '5', '8'],
    missingIndex: 6,
    rule: 'Fibonacci recurrence relation F_n = F_{n-1} + F_{n-2}',
    expectedAnswer: '13',
    distractors: ['11', '12', '16'],
    explanation: 'The next Fibonacci term is the sum of 5 and 8: 5 + 8 = 13.',
  },

  // Puzzles World
  'puzzles-extra-051': {
    sequenceType: 'step',
    terms: ['1', '3', '7', '15', '31'],
    missingIndex: 5,
    rule: 'Mersenne powers pattern: 2^n - 1, or multiply by 2 and add 1',
    expectedAnswer: '63',
    distractors: ['61', '62', '65'],
    explanation: '31 × 2 + 1 = 63 (equivalent to 2⁶ - 1 = 64 - 1 = 63).',
  },
  'puzzles-extra-054': {
    sequenceType: 'powers',
    terms: ['1', '8', '27', '64', '125'],
    missingIndex: 5,
    rule: 'Consecutive integer cubes (n³ for n = 1, 2, 3, 4, 5, …)',
    expectedAnswer: '216',
    distractors: ['196', '225', '343'],
    explanation: '1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, so 6³ = 6 × 6 × 6 = 216.',
  },
};

export const IMAGE_DATA_RECORDS = {
  // Science World
  'science-001': {
    assetId: 'atom_bohr',
    subject: 'Bohr Atomic Model',
    altSubjects: ['Compound Crystal Lattice', 'Proton Quark Triplet', 'Electromagnetic Wave'],
    correctSubject: 'Bohr Atomic Model',
    explanation: 'The diagram shows a central atomic nucleus encircled by discrete planetary electron energy shells.',
  },
  'science-002': {
    assetId: 'liquid_matter',
    subject: 'Liquid State of Matter (Fluid conforming to container)',
    altSubjects: ['Rigid Solid Crystal Matrix', 'Dispersed Gaseous State', 'Ionized High-Energy Plasma'],
    correctSubject: 'Liquid State of Matter (Fluid conforming to container)',
    explanation: 'Liquids maintain a fixed volume due to cohesive intermolecular forces, but flow freely to take the shape of their vessel.',
  },

  // Nature World
  'nature-extra-023': {
    assetId: 'jaguar_fauna',
    subject: 'Amazonian Jaguar (Panthera onca)',
    altSubjects: ['Ocelot', 'Margay', 'Cougar'],
    correctSubject: 'Amazonian Jaguar (Panthera onca)',
    explanation: 'The specimen depicts the stocky muscular build, large jaw, and rosette-patterned coat of the Americas’ top feline apex predator.',
  },
  'nature-001': {
    assetId: 'whale_shark',
    subject: 'Whale Shark (Rhincodon typus)',
    altSubjects: ['Basking Shark', 'Great White Shark', 'Tiger Shark'],
    correctSubject: 'Whale Shark (Rhincodon typus)',
    explanation: 'Features the distinctive broad flattened head and starry white dot pattern characteristic of the world’s largest living fish species.',
  },
  'nature-002': {
    assetId: 'platypus_fauna',
    subject: 'Duck-Billed Platypus (Ornithorhynchus anatinus)',
    altSubjects: ['Short-Beaked Echidna', 'River Otter', 'American Beaver'],
    correctSubject: 'Duck-Billed Platypus (Ornithorhynchus anatinus)',
    explanation: 'Depicts the duck-bill sensory rostrum, webbed forefeet, and flattened beaver tail of the egg-laying monotreme.',
  },

  // Sports World
  'sports-001': {
    assetId: 'soccer_sports',
    subject: 'Regulation Soccer Match Ball',
    altSubjects: ['Volleyball', 'Basketball', 'Handball'],
    correctSubject: 'Regulation Soccer Match Ball',
    explanation: 'Features the classic Telstar 32-panel truncated icosahedron geometry with pentagonal and hexagonal tiles.',
  },
  'sports-003': {
    assetId: 'olympic_rings',
    subject: 'The Five Olympic Rings',
    altSubjects: ['Audi Emblem Rings', 'Toric Knot Links', 'Mastercard Venn Discs'],
    correctSubject: 'The Five Olympic Rings',
    explanation: 'Illustrates the five interlocking rings in blue, yellow, black, green, and red designed by Pierre de Coubertin.',
  },

  // Food World
  'food-002': {
    assetId: 'turmeric_food',
    subject: 'Turmeric Rhizome (Curcuma longa)',
    altSubjects: ['Saffron Stigmas', 'Paprika Pod', 'Cumin Seeds'],
    correctSubject: 'Turmeric Rhizome (Curcuma longa)',
    explanation: 'Exhibits the knobby golden rhizome and vibrant yellow-orange interior curcuma pigment used across culinary and medicinal traditions.',
  },
  'food-003': {
    assetId: 'avocado_food',
    subject: 'Halved Hass Avocado (Persea americana)',
    altSubjects: ['Chickpea Dip', 'Eggplant Caviar', 'Green Sweet Pea Mash'],
    correctSubject: 'Halved Hass Avocado (Persea americana)',
    explanation: 'Shows the pebbled dark green exocarp, pale creamy green monounsaturated mesocarp flesh, and central spherical pit.',
  },

  // Flags World
  'flags-001': {
    assetId: 'flag_japan',
    subject: 'National Flag of Japan (Nisshōki)',
    altSubjects: ['Flag of Bangladesh', 'Flag of Poland', 'Flag of Austria'],
    correctSubject: 'National Flag of Japan (Nisshōki)',
    explanation: 'Depicts the crimson-red sun disc centered upon a white rectangular field (Hinomaru).',
  },
  'flags-002': {
    assetId: 'flag_canada',
    subject: 'National Flag of Canada (Maple Leaf)',
    altSubjects: ['Flag of Denmark', 'Flag of Norway', 'Flag of Finland'],
    correctSubject: 'National Flag of Canada (Maple Leaf)',
    explanation: 'Shows the red field with a white square bearing an eleven-pointed stylized red maple leaf.',
  },
  'flags-003': {
    assetId: 'flag_ireland',
    subject: 'National Flag of Ireland (Tricolour)',
    altSubjects: ['Flag of Italy', 'Flag of Côte d’Ivoire', 'Flag of India'],
    correctSubject: 'National Flag of Ireland (Tricolour)',
    explanation: 'Features three equal vertical bands of green, white, and orange.',
  },
  'flags-007': {
    assetId: 'flag_sweden',
    subject: 'National Flag of Sweden',
    altSubjects: ['Flag of Finland', 'Flag of Denmark', 'Flag of Norway'],
    correctSubject: 'National Flag of Sweden',
    explanation: 'Displays the golden-yellow Scandinavian cross extending to the edges of a light blue field.',
  },

  // History World
  'history-001': {
    assetId: 'pyramid_sphinx',
    subject: 'The Great Pyramid of Giza',
    altSubjects: ['Ziggurat of Ur', 'El Castillo at Chichen Itza', 'Nubian Pyramids of Meroe'],
    correctSubject: 'The Great Pyramid of Giza',
    explanation: 'Illustrates the monumental limestone pyramid structure constructed during Egypt’s Fourth Dynasty for Pharaoh Khufu.',
  },
  'history-002': {
    assetId: 'roman_temple',
    subject: 'Classical Roman Monument (Forum Temple)',
    altSubjects: ['Athenian Acropolis Parthenon', 'Etruscan Crypt', 'Carthaginian Palace'],
    correctSubject: 'Classical Roman Monument (Forum Temple)',
    explanation: 'Features classical fluted columns, triangular pediment, and marble entablature emblematic of ancient Roman civic architecture.',
  },
};
