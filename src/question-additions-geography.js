// Eighty researched Geography questions, aligned to the ten chapter themes.
// Claim-level sources were opened and checked on 2026-11-16.
const VERIFIED_AT = '2026-11-16';

const SOURCES = {
  usgsMountains: {
    title: 'U.S. Geological Survey · Cool Earthquake Facts',
    url: 'https://www.usgs.gov/programs/earthquake-hazards/cool-earthquake-facts',
    claim: 'USGS describes the Wasatch Range as running north–south through Utah, identifies the Andes as the longest land range and the Himalaya-Karakoram as the greatest land range, notes plate movement created the Andes and Himalaya-Karakoram, and distinguishes the longer mid-ocean ridge.',
  },
  denali: {
    title: 'U.S. National Park Service · Natural High Points of States in Parks',
    url: 'https://www.nps.gov/articles/000/state-high-points.htm',
    claim: 'NPS identifies Denali in Alaska as the highest point on the continent of North America.',
  },
  kilimanjaro: {
    title: 'UNESCO World Heritage Centre · Kilimanjaro National Park',
    url: 'https://whc.unesco.org/en/list/403/',
    claim: 'UNESCO states that Mount Kilimanjaro is the highest point in Africa and describes its volcanic massif.',
  },
  fuji: {
    title: 'UNESCO World Heritage Centre · Fujisan, sacred place and source of artistic inspiration',
    url: 'https://whc.unesco.org/en/list/1418',
    claim: 'UNESCO describes Fujisan (Mount Fuji) as a Japanese stratovolcano about 100 km southwest of Tokyo.',
  },
  everest: {
    title: 'National Geographic Education · Mount Everest',
    url: 'https://education.nationalgeographic.org/resource/mount-everest/',
    claim: 'National Geographic identifies Mount Everest as a peak in the Himalaya between Nepal and Tibet, an autonomous region of China.',
  },
  continent: {
    title: 'National Geographic Education · Continent',
    url: 'https://education.nationalgeographic.org/resource/Continent/',
    claim: 'The article describes the seven continents, the conventional Europe–Asia boundary at the Ural Mountains, and major continental geography.',
  },
  europe: {
    title: 'National Geographic Education · Europe: Physical Geography',
    url: 'https://education.nationalgeographic.org/resource/europe-physical-geography/',
    claim: 'The article describes the Alps as an arc across southern Europe and lists the Volga among Europe’s important rivers.',
  },
  southAmerica: {
    title: 'National Geographic Education · South America: Physical Geography',
    url: 'https://education.nationalgeographic.org/resource/south-america-physical-geography/',
    claim: 'The article identifies the Andes as the world’s longest mountain system, places Aconcagua on the Argentina–Chile border, and says it is the tallest mountain outside Asia; it also says the Amazon empties into the Atlantic.',
  },
  nile: {
    title: 'National Geographic Education · Nile River',
    url: 'https://education.nationalgeographic.org/resource/nile-river/',
    claim: 'The Nile flows through northeastern Africa from south to north and empties into the Mediterranean; the Blue Nile begins at Lake Tana in Ethiopia.',
  },
  npsGrandCanyon: {
    title: 'U.S. National Park Service · Geologic Formations, Grand Canyon National Park',
    url: 'https://www.nps.gov/grca/learn/nature/geologicformations.htm?simple=True',
    claim: 'NPS states that the Colorado River carved the Grand Canyon.',
  },
  rivers: {
    title: 'National Geographic Education · Understanding Rivers',
    url: 'https://education.nationalgeographic.org/resource/understanding-rivers/',
    claim: 'The article describes rivers including the Nile, Congo, Danube, Yangtze, and the cities of Cairo, Kolkata, and Shanghai; it states that the Congo flows across central Africa into the Atlantic.',
  },
  deserts: {
    title: 'National Geographic Education · Deserts Explained',
    url: 'https://education.nationalgeographic.org/resource/deserts-explained/',
    claim: 'The article says deserts cover more than one-fifth of Earth’s land area, defines them by low precipitation, identifies the Sahara as the largest hot desert, and describes the Gobi and polar deserts as cold deserts.',
  },
  desert: {
    title: 'National Geographic Education · Desert',
    url: 'https://education.nationalgeographic.org/resource/desert/',
    claim: 'The article describes the Gobi Desert in China and Mongolia and Antarctica as the world’s largest desert.',
  },
  nasaAtacama: {
    title: 'NASA Earth Observatory · Atacama Greening',
    url: 'https://science.nasa.gov/earth/earth-observatory/atacama-greening-144989/',
    claim: 'NASA places the Atacama Desert in northern Chile along the western edge of the Andes.',
  },
  borneo: {
    title: 'National Geographic · Just Back: Borneo',
    url: 'https://www.nationalgeographic.com/travel/article/just-back-borneo',
    claim: 'National Geographic states that Borneo is divided among Malaysia, Brunei, and Indonesia.',
  },
  nasaEarth: {
    title: 'National Geographic Education · Earth',
    url: 'https://education.nationalgeographic.org/resource/earth/',
    claim: 'The article’s NASA Earth image description locates Madagascar off Africa’s southern coast and Sri Lanka off India’s southern coast.',
  },
  tasmania: {
    title: 'Geoscience Australia · Australia’s state and territory borders',
    url: 'https://www.ga.gov.au/scientific-topics/national-location-information/geography/state-territory-borders',
    claim: 'Geoscience Australia states that Tasmania is Australia’s only island state.',
  },
  newZealand: {
    title: 'New Zealand Ministry for the Environment · New Zealand’s Eighth National Communication',
    url: 'https://environment.govt.nz/assets/publications/New-Zealands-Eighth-National-Communication.pdf',
    claim: 'The Ministry for the Environment describes Aotearoa New Zealand as a long, mountainous country in the southwest Pacific Ocean, made up of two large islands and smaller islands.',
  },
  continentHawaii: {
    title: 'National Geographic Education · Continent',
    url: 'https://education.nationalgeographic.org/resource/Continent/',
    claim: 'The article locates the Hawaiian Islands in the middle of the Pacific Ocean.',
  },
  natgeoIslandGroups: {
    title: 'National Geographic Education · Island',
    url: 'https://education.nationalgeographic.org/resource/island/',
    claim: 'The article identifies the Cyclades as a closely spaced group of Greek islands in the Aegean Sea and Easter Island in the South Pacific.',
  },
  noaaPacific: {
    title: 'NOAA Ocean Service · What is the largest ocean basin on Earth?',
    url: 'https://oceanservice.noaa.gov/facts/biggestocean.html',
    claim: 'NOAA identifies the Pacific as the largest and deepest world ocean basin and lists the Atlantic as second largest.',
  },
  noaaArctic: {
    title: 'NOAA Ocean Exploration · Which ocean is the smallest?',
    url: 'https://oceanexplorer.noaa.gov/ocean-fact/smallest-ocean/',
    claim: 'NOAA identifies the Arctic Ocean as the world’s smallest ocean basin.',
  },
  noaaDepth: {
    title: 'NOAA Ocean Service · How deep is the ocean?',
    url: 'https://oceanservice.noaa.gov/facts/oceandepth.html',
    claim: 'NOAA locates Challenger Deep in the southern end of the Mariana Trench beneath the western Pacific Ocean.',
  },
  noaaOceans: {
    title: 'NOAA Ocean Service · How many oceans are there?',
    url: 'https://oceanservice.noaa.gov/facts/howmanyoceans.html',
    claim: 'NOAA describes one global ocean covering 71 percent of Earth and says the United States recognizes the Southern Ocean as a fifth named ocean extending north from Antarctica to 60° south latitude.',
  },
  rainforest: {
    title: 'National Geographic Education · Rainforest',
    url: 'https://education.nationalgeographic.org/resource/rain-forest/',
    claim: 'The article identifies the Amazon and Congo as Earth’s largest rainforests, says rainforests occur on every continent except Antarctica, and describes rainforest layers and temperate rainforest regions.',
  },
  amazonForest: {
    title: 'National Geographic Education · The Amazon Rainforest',
    url: 'https://education.nationalgeographic.org/resource/amazon-rainforest/',
    claim: 'The Amazon River Basin supports the world’s largest rainforest and spans parts of several South American countries.',
  },
  congoForest: {
    title: 'Food and Agriculture Organization · Tackling the drivers of deforestation in the Congo Basin',
    url: 'https://www.fao.org/gcf/news/news-detail/tackling-the-drivers-of-deforestation-in-the-Congo-Basin/',
    claim: 'FAO identifies the Congo Basin in central Africa as home to the world’s second-largest tropical rainforest after the Amazon.',
  },
  biomes: {
    title: 'National Geographic Education · MapMaker: Biomes',
    url: 'https://education.nationalgeographic.org/resource/mapmaker-biomes/',
    claim: 'The article calls boreal forests taiga and locates them broadly in northern Russia and Canada.',
  },
  temperateForest: {
    title: 'National Geographic Education · Rainforest',
    url: 'https://education.nationalgeographic.org/resource/rain-forest/',
    claim: 'The article lists the Pacific Northwest coast among regions with temperate rainforests.',
  },
  polarNASA: {
    title: 'NASA Science · Arctic and Antarctic Sea Ice: How Are They Different?',
    url: 'https://science.nasa.gov/earth/climate-change/arctic-and-antarctic-sea-ice-how-are-they-different/',
    claim: 'NASA explains that the Arctic is an ocean surrounded by land, while Antarctica is a continent surrounded by the Southern Ocean.',
  },
  antarctica: {
    title: 'NASA Space Place · What Is Antarctica?',
    url: 'https://spaceplace.nasa.gov/antarctica/en/',
    claim: 'NASA states that Antarctica is a continent covering Earth’s South Pole, is the fifth-largest continent, and is the coldest place on Earth.',
  },
  greenland: {
    title: 'Statistics Greenland · Greenland in Figures 2025',
    url: 'https://stat.gl/publ/EN/GF/2025/pdf/Greenland%20in%20Figures%202025.pdf',
    claim: 'Statistics Greenland describes Greenland as the world’s largest non-continental island between the Arctic Ocean and North Atlantic, northeast of Canada.',
  },
  antarcticDesert: {
    title: 'National Geographic Education · Desert',
    url: 'https://education.nationalgeographic.org/resource/desert/',
    claim: 'The article describes nearly all of Antarctica as a polar desert and calls it the world’s largest desert.',
  },
  earthOcean: {
    title: 'NASA Earth Observatory · Sea Ice',
    url: 'https://science.nasa.gov/earth/earth-observatory/sea-ice/',
    claim: 'NASA states that Arctic sea ice reaches all the way to the North Pole because there is no landmass at the pole.',
  },
  greatBarrier: {
    title: 'UNESCO World Heritage Centre · Great Barrier Reef',
    url: 'https://whc.unesco.org/en/list/154',
    claim: 'UNESCO locates the Great Barrier Reef off northeast Australia and identifies it as the world’s largest coral reef ecosystem.',
  },
  victoriaFalls: {
    title: 'UNESCO World Heritage Centre · Mosi-oa-Tunya / Victoria Falls',
    url: 'https://whc.unesco.org/en/list/509',
    claim: 'UNESCO says the Zambezi River plunges over Victoria Falls, a transboundary property shared by Zambia and Zimbabwe.',
  },
  iguazu: {
    title: 'UNESCO World Heritage Centre · Iguazu National Park',
    url: 'https://whc.unesco.org/en/list/303/',
    claim: 'UNESCO locates the Iguazú/Iguaçu waterfall system on the border between Argentina and Brazil.',
  },
  oldFaithful: {
    title: 'U.S. National Park Service · Old Faithful Geyser',
    url: 'https://www.nps.gov/places/old-faithful-geyser.htm',
    claim: 'NPS locates Old Faithful in the Upper Geyser Basin of Yellowstone National Park.',
  },
  serengeti: {
    title: 'UNESCO World Heritage Centre · Serengeti National Park',
    url: 'https://whc.unesco.org/en/list/156/',
    claim: 'UNESCO describes the annual Serengeti migration as spanning Tanzania and Kenya.',
  },
  salar: {
    title: 'NASA Earth Observatory · Salt Flats, Mountains, and Moisture',
    url: 'https://science.nasa.gov/earth/earth-observatory/salt-flats-mountains-and-moisture-144826/',
    claim: 'NASA identifies Salar de Uyuni in the Andes as the largest salt flat on Earth.',
  },
  brazil: {
    title: 'Library of Congress · Brazil: A Country Study',
    url: 'https://tile.loc.gov/storage-services/master/frd/frdcstdy/br/brazilcountrystu00huds_0/brazilcountrystu00huds_0.pdf',
    claim: 'The Library of Congress country study lists Brasília as Brazil’s capital.',
  },
  peru: {
    title: 'NASA Earth Observatory · Lima Metropolitan Area, Peru',
    url: 'https://science.nasa.gov/earth/earth-observatory/lima-metropolitan-area-peru-5427/',
    claim: 'NASA identifies Lima as the capital of Peru.',
  },
  japan: {
    title: 'The White House Archives · Tokyo, Japan',
    url: 'https://clintonwhitehouse5.archives.gov/WH/New/Pacific/tokyo.html',
    claim: 'The U.S. White House archive identifies Tokyo as Japan’s capital.',
  },
  india: {
    title: 'Embassy of India, Rome · Know Your India',
    url: 'https://www.indianembassyrome.gov.in/page/know-your-india/',
    claim: 'The Government of India embassy page states that New Delhi is India’s capital.',
  },
  nigeria: {
    title: 'Nigeria High Commission, Canberra · About Nigeria',
    url: 'https://www.canberra.foreignaffairs.gov.ng/about-nigeria.html',
    claim: 'The Nigerian government page identifies Abuja as Nigeria’s capital and seat of the Federal Government.',
  },
  hemisphere: {
    title: 'National Geographic Education · Hemisphere',
    url: 'https://education.nationalgeographic.org/resource/hemisphere/',
    claim: 'The Equator is 0° latitude and divides the Northern and Southern Hemispheres; the Prime Meridian is used to divide east and west.',
  },
  panama: {
    title: 'National Geographic Education · Continent',
    url: 'https://education.nationalgeographic.org/resource/Continent/',
    claim: 'The article states that South America is connected to North America by the narrow Isthmus of Panama.',
  },
  africa: {
    title: 'National Geographic Education · Africa: Physical Geography',
    url: 'https://education.nationalgeographic.org/resource/africa-physical-geography/',
    claim: 'The article describes Africa as bounded by the Mediterranean Sea, Red Sea, Indian Ocean, and Atlantic Ocean, and nearly equally divided by the Equator.',
  },
};

// Each row is [question, answer, explanation, difficulty, topicId, subtopic,
// chapterId, answerFamily, three [distractor, rationale] pairs, source key].
const rows = [
  // Chapter 1 · Mountain Paths
  ["Which continental land mountain range does USGS identify as the longest?","The Andes","USGS distinguishes land mountain ranges from the still-longer mid-ocean ridge and identifies the Andes as the longest continental range.","medium","mountain-ranges","Major world mountain ranges",1,"named continental mountain ranges",[["The Himalaya","The Himalaya is a very high mountain system, but USGS identifies the Andes as the longest land range."],["The Rocky Mountains","The Rockies extend across western North America, not South America, and are shorter than the Andes."],["The Alps","The Alps are an important European range but are not the longest continental range."]],"usgsMountains"],
  ["What is the highest peak in North America?","Denali","Denali in Alaska is the highest point on the North American continent.","easy","mountain-ranges","Continental high points",1,"named mountain peaks",[["Aconcagua","Aconcagua is the highest peak outside Asia, but it is in South America."],["Mount Kilimanjaro","Kilimanjaro is Africa’s highest mountain, not North America’s."],["Mount Everest","Everest is Earth’s highest point and lies in the Himalaya in Asia."]],"denali"],
  ["Which mountain is the highest point in Africa?","Mount Kilimanjaro","UNESCO gives Kilimanjaro’s summit elevation as 5,895 meters and identifies it as Africa’s highest point.","easy","mountain-ranges","African mountains",1,"named continental high points",[["Mount Kenya","Mount Kenya is a high African mountain, but it is below Kilimanjaro."],["Mount Elgon","Mount Elgon is an East African volcano, not the continent’s highest point."],["Ras Dashen","Ras Dashen is Ethiopia’s highest peak, not Africa’s highest."]],"kilimanjaro"],
  ["Which Japanese stratovolcano is known locally as Fujisan?","Mount Fuji","UNESCO describes Fujisan, or Mount Fuji, as a Japanese stratovolcano about 100 kilometers southwest of Tokyo.","easy","mountain-ranges","Volcanoes and named peaks",1,"named Asian mountain peaks",[["Mount Everest","Everest is in the Himalaya between Nepal and China, not Japan."],["Mount Kilimanjaro","Kilimanjaro is in Tanzania, Africa."],["Mount Denali","Denali is in Alaska, North America."]],"fuji"],
  ["Mount Everest is part of which mountain range?","The Himalaya","National Geographic places Everest in the Himalaya mountain range.","easy","mountain-ranges","The Himalaya and its peaks",1,"named mountain ranges",[["The Andes","The Andes run along western South America."],["The Alps","The Alps are in Europe."],["The Rockies","The Rocky Mountains are in North America."]],"everest"],
  ["Which mountain range is commonly used as part of the boundary between Europe and Asia?","The Ural Mountains","National Geographic describes the Urals as separating Europe from Asia in the conventional continental boundary.","medium","mountain-ranges","Continental boundaries",1,"named mountain ranges",[["The Alps","The Alps arc across southern Europe and do not form the Europe–Asia boundary."],["The Pyrenees","The Pyrenees lie between France and Spain."],["The Himalaya","The Himalaya are in Asia and are not the conventional Europe–Asia boundary."]],"continent"],
  ["Which mountain range forms an arc across southern Europe from Albania toward Austria and France?","The Alps","National Geographic describes the Alps as an arc extending from Albania to Austria and across Switzerland and northern Italy into France.","medium","mountain-ranges","European mountain ranges",1,"named European mountain ranges",[["The Pyrenees","The Pyrenees form a border between France and Spain, farther west."],["The Ural Mountains","The Urals are far to the east and are associated with the Europe–Asia boundary."],["The Scandinavian Mountains","The Scandinavian Mountains are in northern Europe."]],"europe"],
  ["Which Andean peak is the tallest mountain outside Asia?","Aconcagua","National Geographic identifies Aconcagua on the Argentina–Chile border as the tallest mountain outside Asia.","hard","mountain-ranges","South American peaks",1,"named mountain peaks outside Asia",[["Denali","Denali is North America’s highest peak, but it is lower than Aconcagua."],["Kilimanjaro","Kilimanjaro is Africa’s highest peak, but it is lower than Aconcagua."],["Mount Elbrus","Elbrus is a high European peak, but it is not the tallest outside Asia."]],"southAmerica"],
  ["On the border of which two countries does Aconcagua stand?","Argentina and Chile","National Geographic places Aconcagua on the Argentina–Chile border in the Andes.","easy","mountain-ranges","South American peaks",1,"country pairs containing major mountain peaks",[["Peru and Bolivia","Both countries include high Andean terrain, but Aconcagua stands on the Argentina–Chile border."],["Ecuador and Peru","These countries share the Andes farther north; Aconcagua is much farther south."],["Chile and Peru","Chile and Peru share a northern border, while Aconcagua is on Chile’s border with Argentina."]],"southAmerica"],
  ["Which mountain range runs along the western side of South America?","The Andes","National Geographic describes the Andes as extending along the western edge of South America.","easy","mountain-ranges","South American mountain ranges",1,"named mountain ranges by continent and region",[["The Rocky Mountains","The Rockies run through western North America, not western South America."],["The Appalachian Mountains","The Appalachians are in eastern North America."],["The Great Dividing Range","The Great Dividing Range is in eastern Australia."]],"southAmerica"],
  ["NASA locates the Atacama Desert along the western edge of which mountain range?","The Andes","NASA places the Atacama in northern Chile along the western edge of the Andes.","medium","mountain-ranges","South American mountain ranges",1,"named mountain ranges near major deserts",[["The Rocky Mountains","The Rockies are in North America, far from the Atacama."],["The Alps","The Alps are in Europe, not along the Atacama Desert."],["The Himalaya","The Himalaya are in Asia, not South America."]],"nasaAtacama"],
  ["Which three main volcanic peaks does UNESCO list for Mount Kilimanjaro?","Kibo, Mawenzi, and Shira","UNESCO names Kibo, Mawenzi, and Shira as Kilimanjaro’s three main volcanic peaks.","medium","mountain-ranges","African volcanic mountains",1,"sets of named volcanic peaks on a mountain",[["Nyiragongo, Nyamuragira, and Karisimbi","These are prominent volcanoes of the Virunga region, not Kilimanjaro’s main peaks."],["Mount Kenya, Mount Elgon, and Mount Meru","These are other East African mountains, not the three peaks UNESCO lists for Kilimanjaro."],["Kibo, Uhuru, and Shira","Uhuru is the summit name on Kibo, not one of the three main volcanic peaks listed by UNESCO."]],"kilimanjaro"],
  ["What is the longest mountain range on Earth?","The mid-ocean ridge","USGS and NOAA identify the global mid-ocean ridge as Earth’s longest mountain range; it lies beneath the oceans.","medium","mountain-ranges","Submarine mountain systems",1,"named mountain ranges by total length",[["The Andes","The Andes are the longest land range, but the global mid-ocean ridge is longer overall."],["The Himalaya-Karakoram","This is a major high mountain system in Asia, but it is not the longest range overall."],["The Rocky Mountains","The Rockies are a major North American range, but they are shorter than the mid-ocean ridge."]],"usgsMountains"],
  ["USGS says both the Andes and Himalaya-Karakoram were created by movement of what?","Tectonic plates","USGS says movement of tectonic plates created both the Andes and the Himalaya-Karakoram mountain systems.","medium","mountain-ranges","How mountain ranges form",1,"geological processes that shape mountain ranges",[["Wind erosion","Wind can shape exposed rock, but USGS attributes these ranges to plate movement."],["River deposition","River deposits form sediments and landforms, but they did not create these mountain systems."],["Glacial melting","Glaciers can erode mountains, but melting did not create these ranges."]],"usgsMountains"],
  ["Which mountain range runs north–south through Utah, according to USGS?","The Wasatch Range","USGS describes the Wasatch Range as running north–south through Utah.","medium","mountain-ranges","North American mountain ranges",1,"named mountain ranges by location",[["The Sierra Nevada","The Sierra Nevada is in California and Nevada, not Utah."],["The Cascade Range","The Cascade Range lies farther west in the Pacific Northwest."],["The Appalachian Mountains","The Appalachians are in eastern North America, not Utah."]],"usgsMountains"],
  ["Which mountain massif does UNESCO describe as the world’s largest free-standing volcanic mass?","Mount Kilimanjaro","UNESCO describes Kilimanjaro as the world’s largest free-standing volcanic mass.","medium","mountain-ranges","African volcanic mountains",1,"named volcanic mountain massifs",[["Mount Etna","Etna is a large active volcano in Italy, but UNESCO identifies Kilimanjaro for this description."],["Mauna Loa","Mauna Loa is a massive Hawaiian volcano, but it is not the free-standing volcanic mass named by UNESCO."],["Mount Fuji","Fuji is a prominent Japanese stratovolcano, but UNESCO names Kilimanjaro as the largest free-standing mass."]],"kilimanjaro"],
  ["Mount Everest lies between which two countries or regions?","Nepal and Tibet","National Geographic places Everest between Nepal and Tibet, an autonomous region of China.","medium","mountain-ranges","The Himalaya and its peaks",1,"countries and regions bordering major mountain peaks",[["Nepal and India","India borders Nepal, but National Geographic places Everest between Nepal and Tibet."],["Tibet and Bhutan","Tibet borders Bhutan, but the cited source places Everest between Tibet and Nepal."],["China and India","China and India share a border, but the cited page identifies Nepal and Tibet for Everest."]],"everest"],
  ["How high is Mount Fuji according to UNESCO?","3,776 meters","UNESCO gives Mount Fuji’s height as 3,776 meters.","easy","mountain-ranges","Asian mountains and volcanoes",1,"elevations of named mountains",[["2,776 meters","This is 1,000 meters below the elevation UNESCO gives for Fuji."],["4,776 meters","This is 1,000 meters above the elevation UNESCO gives for Fuji."],["5,776 meters","This is 2,000 meters above the elevation UNESCO gives for Fuji."]],"fuji"],
  ["Aconcagua is part of which mountain range?","The Andes","National Geographic identifies Aconcagua as an Andean peak on the Argentina–Chile border.","easy","mountain-ranges","South American peaks",1,"named mountain ranges containing major peaks",[["The Rocky Mountains","The Rockies are in North America, while Aconcagua is in South America."],["The Alps","The Alps are in Europe, not South America."],["The Himalaya","The Himalaya are in Asia; Aconcagua belongs to the Andes."]],"southAmerica"],
  ["What is the Tibetan name for Mount Everest?","Chomolungma","National Geographic gives Chomolungma as Everest’s Tibetan name and Sagarmatha as its Nepali name.","medium","mountain-ranges","Regional names of major mountains",1,"regional names for major mountains",[["Sagarmatha","Sagarmatha is the Nepali name for Everest, not its Tibetan name."],["Fujisan","Fujisan is the Japanese name for Mount Fuji."],["Denali","Denali is the name of Alaska’s highest mountain, not Everest."]],"everest"],

  // Chapter 2 · Great Rivers
  ["Into which sea does the Nile River flow?","The Mediterranean Sea","The Nile flows north through northeastern Africa and empties into the Mediterranean on Egypt’s coast.","easy","river-systems","Rivers and their mouths",2,"named seas where major rivers empty",[["The Red Sea","The Red Sea is east of Egypt, but the Nile empties into the Mediterranean."],["The Arabian Sea","The Arabian Sea lies south of the Arabian Peninsula and is not the Nile’s outlet."],["The Black Sea","The Black Sea is not connected to the Nile’s mouth."]],"nile"],
  ["Which river carries the greatest volume of water into the Atlantic Ocean?","The Amazon","USGS describes the Amazon as the world’s largest river by discharge; it empties into the Atlantic.","medium","river-systems","South American rivers",2,"named major rivers by water discharge",[["The Congo","The Congo has enormous flow, but USGS reports the Amazon’s flow is more than four times greater."],["The Mississippi","The Mississippi is a major North American river, but its discharge is far below the Amazon’s."],["The Yangtze","The Yangtze is a major Asian river, but it does not carry more water than the Amazon."]],"southAmerica"],
  ["Which river carved the Grand Canyon?","The Colorado River","The National Park Service says the Colorado River carved the Grand Canyon into the Colorado Plateau.","easy","river-systems","Rivers and landscapes",2,"named rivers associated with major canyons",[["The Snake River","The Snake is a western U.S. river, but it did not carve the Grand Canyon."],["The Rio Grande","The Rio Grande forms part of the U.S.–Mexico border and is not the river that carved the Grand Canyon."],["The Columbia River","The Columbia drains to the Pacific Northwest and did not carve the Grand Canyon."]],"npsGrandCanyon"],
  ["Which African river flows across central Africa and empties into the Atlantic Ocean?","The Congo River","National Geographic describes the Congo as crossing central Africa before reaching the Atlantic.","medium","river-systems","African rivers",2,"named African rivers",[["The Niger River","The Niger flows through western Africa and reaches the Gulf of Guinea."],["The Zambezi River","The Zambezi flows through southern Africa and reaches the Indian Ocean."],["The Orange River","The Orange flows across southern Africa to the Atlantic, not across central Africa."]],"rivers"],
  ["Which river is one of the major European waterways named by National Geographic?","The Volga","National Geographic lists the Volga among the European river systems used for travel and trade.","medium","river-systems","European rivers",2,"named European rivers",[["The Mekong","The Mekong flows through Southeast Asia."],["The Orinoco","The Orinoco flows through northern South America."],["The White Nile","The White Nile is a tributary in northeastern Africa."]],"europe"],
  ["The Blue Nile begins at which Ethiopian lake?","Lake Tana","National Geographic says the Blue Nile begins in Lake Tana in Ethiopia before joining the White Nile at Khartoum.","hard","river-systems","River sources and tributaries",2,"named African lakes at river sources",[["Lake Victoria","Lake Victoria feeds the White Nile, not the Blue Nile."],["Lake Turkana","Lake Turkana is not the source lake identified for the Blue Nile."],["Lake Malawi","Lake Malawi is far to the south and is not a Nile source."]],"nile"],

  // Chapter 3 · Desert Trails
  ["About what share of Earth’s land area do deserts cover, according to National Geographic?","More than one-fifth","National Geographic says deserts cover more than one-fifth of Earth’s land area.","medium","deserts","Deserts around the world",3,"fractions of Earth’s land area covered by deserts",[["About one-tenth","That is less than National Geographic’s estimate."],["About one-third","That is more than National Geographic’s estimate."],["About one-half","That is far more than National Geographic’s estimate."]],"deserts"],
  ["The Gobi Desert extends across which two countries?","China and Mongolia","National Geographic locates the Gobi in China and Mongolia.","easy","deserts","Asian deserts",3,"country pairs containing a named desert",[["India and Pakistan","The Thar Desert lies across parts of India and Pakistan, not the Gobi."],["Egypt and Libya","These countries border the Sahara, not the Gobi."],["Chile and Argentina","These countries lie in South America, far from the Gobi."]],"desert"],
  ["Which desert is the largest in the world, including both hot and cold deserts?","The Antarctic polar desert","National Geographic describes nearly all of Antarctica as a polar desert and identifies it as the world’s largest desert.","medium","deserts","Polar deserts",3,"named world deserts by overall size",[["The Sahara","The Sahara is the largest hot desert, but Antarctica is the largest desert overall."],["The Gobi","The Gobi is a large cold desert in Asia, but it is smaller than Antarctica."],["The Arabian Desert","The Arabian Desert is not the world’s largest desert."]],"desert"],
  ["Which of these is a cold desert in Asia?","The Gobi","National Geographic describes the Gobi as a cold desert in Asia.","medium","deserts","Cold deserts",3,"named cold deserts",[["The Sahara","The Sahara is the largest hot desert in northern Africa."],["The Mojave","The Mojave is a North American desert, not an Asian cold desert."],["The Namib","The Namib is a coastal desert in southwestern Africa."]],"deserts"],
  ["What approximate annual precipitation limit is used in National Geographic’s definition of a desert?","No more than 25 centimeters","National Geographic’s desert definition uses 25 centimeters (10 inches) of annual precipitation as the upper limit.","medium","deserts","How deserts are defined",3,"annual precipitation thresholds",[["No more than 250 centimeters","That is ten times the threshold in National Geographic’s definition."],["No more than 100 centimeters","That exceeds the cited 25-centimeter threshold."],["No more than 5 centimeters","That is much lower than the stated threshold."]],"deserts"],
  ["According to National Geographic, about what portion of deserts is covered by sand?","About one-fifth","National Geographic notes that only about 20 percent of deserts are covered by sand.","hard","deserts","Desert landscapes",3,"proportions of desert surface cover",[["About one-half","Sand covers far less than half of desert surfaces according to the article."],["About three-quarters","Most deserts are not primarily sand-covered."],["Nearly all of them","National Geographic says only about one-fifth are covered by sand."]],"deserts"],
  ["The Mojave Desert spans parts of which U.S. states?","California, Arizona, Nevada, and Utah","National Geographic lists California, Arizona, Nevada, and Utah as the U.S. states containing the Mojave Desert.","medium","deserts","North American deserts",3,"sets of U.S. states containing named deserts",[["Oregon, Idaho, Montana, and Wyoming","These states lie north of the states listed for the Mojave."],["Texas, Oklahoma, Kansas, and Colorado","This set is farther east and north than the Mojave’s range."],["Florida, Georgia, Alabama, and Mississippi","These southeastern states do not contain the Mojave Desert."]],"deserts"],

  // Chapter 4 · Island Chains
  ["Madagascar lies off the southern coast of which continent?","Africa","National Geographic’s NASA image description places Madagascar off Africa’s southern coast in the Indian Ocean.","easy","islands","Islands of the Indian Ocean",4,"continents near major islands",[["Asia","Madagascar is separated from Africa by the Mozambique Channel, not located off Asia."],["South America","South America lies across the Atlantic from Madagascar."],["Europe","Madagascar is in the Indian Ocean off Africa, not Europe."]],"nasaEarth"],
  ["Borneo is shared among which three countries?","Indonesia, Malaysia, and Brunei","National Geographic describes Borneo as divided among Indonesia, Malaysia, and Brunei.","medium","islands","Southeast Asian islands",4,"countries sharing a major island",[["Indonesia, the Philippines, and Thailand","The Philippines and Thailand do not share Borneo."],["Malaysia, Singapore, and Brunei","Singapore does not occupy Borneo; Indonesia does."],["Indonesia, Vietnam, and Cambodia","Vietnam and Cambodia do not share Borneo."]],"borneo"],
  ["Sri Lanka lies just south of which country?","India","National Geographic identifies Sri Lanka as an island off the southern coast of India.","easy","islands","South Asian islands",4,"countries adjacent to major islands",[["Thailand","Thailand is east of the Bay of Bengal and is not immediately north of Sri Lanka."],["Indonesia","Indonesia lies much farther southeast."],["Pakistan","Pakistan is northwest of India, not immediately north of Sri Lanka."]],"nasaEarth"],
  ["Which Australian state is also an island?","Tasmania","Geoscience Australia calls Tasmania the only island state in Australia.","easy","islands","Australian islands",4,"Australian states and territories",[["Victoria","Victoria is on the Australian mainland."],["Queensland","Queensland is a mainland state, though it includes islands."],["South Australia","South Australia is on the mainland."]],"tasmania"],
  ["New Zealand lies in which ocean region?","The southwest Pacific Ocean","The New Zealand Ministry for the Environment locates the country in the southwest Pacific Ocean.","easy","islands","Pacific island geography",4,"ocean regions around island countries",[["The northeast Atlantic Ocean","The Atlantic is far from New Zealand."],["The western Indian Ocean","The Indian Ocean lies west of Australia, not around New Zealand."],["The Arctic Ocean","The Arctic Ocean is in the far north."]],"newZealand"],
  ["The Hawaiian Islands lie in the middle of which ocean?","The Pacific Ocean","National Geographic locates the Hawaiian Islands in the middle of the Pacific Ocean.","easy","islands","Pacific island groups",4,"oceans containing island groups",[["The Atlantic Ocean","The Atlantic is on the other side of North America."],["The Indian Ocean","The Indian Ocean lies west of the Pacific basin."],["The Arctic Ocean","Hawaii is tropical and lies far south of the Arctic."]],"continentHawaii"],
  ["What is the name of the closely spaced group of Greek islands in the Aegean Sea?","The Cyclades","National Geographic identifies the Cyclades as a group of Greek islands in the Aegean Sea.","medium","islands","Island groups and archipelagos",4,"named island groups",[["The Aleutian Islands","The Aleutians stretch west from Alaska toward Russia."],["The Hawaiian Islands","Hawaii is a Pacific island chain, not a Greek group."],["The Galápagos Islands","The Galápagos lie in the Pacific Ocean off Ecuador."]],"natgeoIslandGroups"],

  // Chapter 5 · Deep Oceans
  ["Which ocean basin is the largest on Earth?","The Pacific Ocean","NOAA identifies the Pacific as the largest and deepest ocean basin.","easy","oceans","Ocean basins",5,"named ocean basins by size",[["The Atlantic Ocean","The Atlantic is the second-largest ocean basin."],["The Indian Ocean","The Indian basin is smaller than the Pacific and Atlantic."],["The Arctic Ocean","NOAA identifies the Arctic as the smallest ocean basin."]],"noaaPacific"],
  ["Which is the smallest of Earth’s major ocean basins?","The Arctic Ocean","NOAA identifies the Arctic as the smallest of the world’s ocean basins.","easy","oceans","Ocean basins",5,"named ocean basins by size",[["The Indian Ocean","The Indian Ocean is larger than the Arctic basin."],["The Southern Ocean","The Southern Ocean is larger than the Arctic basin."],["The Atlantic Ocean","The Atlantic is the second-largest ocean basin."]],"noaaArctic"],
  ["Challenger Deep, the deepest known part of the ocean, lies in which trench?","The Mariana Trench","NOAA locates Challenger Deep at the southern end of the Mariana Trench in the western Pacific.","medium","oceans","Ocean trenches",5,"named ocean trenches",[["The Puerto Rico Trench","The Puerto Rico Trench is in the Atlantic, not the western Pacific."],["The Tonga Trench","The Tonga Trench is in the South Pacific, but NOAA places Challenger Deep in the Mariana Trench."],["The Peru–Chile Trench","The Peru–Chile Trench lies off western South America."]],"noaaDepth"],
  ["From Antarctica’s coast, NOAA’s recognized Southern Ocean extends north to about which latitude?","60 degrees south","NOAA describes the U.S.-recognized Southern Ocean as extending from Antarctica to 60° south latitude.","hard","oceans","Southern Ocean boundaries",5,"latitudes marking ocean boundaries",[["30 degrees south","Thirty degrees south is much farther north than the boundary NOAA describes."],["Equator","The Southern Ocean does not extend to the Equator."],["60 degrees north","That latitude is in the Northern Hemisphere."]],"noaaOceans"],
  ["Which ocean is recognized by the United States as the fifth named ocean?","The Southern Ocean","NOAA says the United States recognizes the Southern Ocean as the fifth named ocean basin.","easy","oceans","Named oceans",5,"named ocean basins",[["The Caribbean Sea","The Caribbean is a sea, not the fifth named ocean basin."],["The Bering Sea","The Bering is a sea within the Pacific region."],["The Mediterranean Sea","The Mediterranean is an interconnected sea, not a named ocean basin."]],"noaaOceans"],
  ["About what percentage of Earth’s surface is covered by the global ocean?","About 71 percent","NOAA states that the one global ocean covers 71 percent of Earth’s surface.","easy","oceans","The global ocean",5,"percentages of Earth’s surface",[["About 29 percent","That is roughly the portion covered by land, not ocean."],["About 50 percent","The ocean covers substantially more than half the surface."],["About 97 percent","NOAA uses about 97 percent for the share of Earth’s water held by the ocean, not surface area."]],"noaaOceans"],
  ["Which ocean basin is the second largest after the Pacific?","The Atlantic Ocean","NOAA ranks the Atlantic basin second after the Pacific.","medium","oceans","Ocean basin size comparisons",5,"named ocean basins by size",[["The Indian Ocean","NOAA lists the Indian basin after the Atlantic."],["The Southern Ocean","The Southern basin is smaller than the Atlantic."],["The Arctic Ocean","The Arctic is the smallest ocean basin."]],"noaaPacific"],

  // Chapter 6 · Forest Belts
  ["The world’s largest rainforest is supported by which South American river basin?","The Amazon River Basin","National Geographic identifies the Amazon Basin as supporting the world’s largest rainforest.","easy","forest-belts","Tropical rainforests",6,"named river basins associated with the largest rainforest",[["The Paraná River Basin","The Paraná basin is in South America, but the Amazon basin supports the world’s largest rainforest."],["The Orinoco River Basin","The Orinoco basin lies north of the Amazon and is not the largest rainforest region."],["The Colorado River Basin","The Colorado basin is in arid western North America."]],"amazonForest"],
  ["Which basin contains the world’s second-largest tropical rainforest after the Amazon?","The Congo Basin","FAO identifies the Congo Basin as home to the world’s second-largest tropical rainforest.","medium","forest-belts","African rainforests",6,"named rainforest regions by relative size",[["The Mekong Basin","The Mekong Basin is in Southeast Asia, not the second-largest rainforest region."],["The Mississippi Basin","The Mississippi Basin is in North America and is not a major tropical rainforest."],["The Danube Basin","The Danube Basin is in Europe."]],"congoForest"],
  ["The Congo Basin rainforest is located on which continent?","Africa","FAO describes the Congo Basin as lying in the heart of the African continent.","easy","forest-belts","Rainforests by continent",6,"continents containing major rainforest regions",[["South America","The Amazon rainforest is in South America; the Congo Basin is in Africa."],["Europe","The Congo Basin is in central Africa."],["North America","North America has rainforests, but not the Congo Basin."]],"congoForest"],
  ["What is another name for the boreal forest biome?","Taiga","National Geographic uses taiga as another name for boreal forests.","easy","forest-belts","Boreal forests",6,"names of forest biomes",[["Savanna","A savanna is a tropical grassland with scattered trees."],["Chaparral","Chaparral is a shrubland biome, not a boreal forest."],["Tundra","Tundra is a cold biome with sparse tree cover."]],"biomes"],
  ["Boreal forests are widespread across which two regions?","Northern Russia and Canada","National Geographic describes boreal forests as widespread in northern Russia and Canada.","medium","forest-belts","Boreal forest distribution",6,"regions with extensive boreal forests",[["Northern Africa and Arabia","These are mostly arid regions, not the boreal forest belt."],["Central America and the Caribbean","These tropical regions do not contain the northern boreal belt."],["Southern Europe and North Africa","These lie far south of the boreal forest regions."]],"biomes"],
  ["Rainforests are found on every continent except which one?","Antarctica","National Geographic states that rainforests thrive on every continent except Antarctica.","easy","forest-belts","Global rainforest distribution",6,"continents with or without rainforests",[["Europe","Temperate rainforests occur in parts of Europe."],["South America","South America contains the Amazon rainforest."],["Asia","Tropical and temperate rainforests occur in Asia."]],"rainforest"],
  ["Which North American region is known for temperate rainforests along its coast?","The Pacific Northwest","National Geographic lists the Pacific Northwest coast among the regions with temperate rainforests.","medium","forest-belts","Temperate rainforests",6,"named regions with temperate rainforests",[["The Great Plains","The Great Plains are inland grasslands, not a coastal rainforest region."],["The Gulf Coast","The Gulf Coast is not the region cited for North American temperate rainforests."],["The Sonoran Desert","The Sonoran is an arid region in the southwest."]],"temperateForest"],

  // Chapter 7 · Polar Worlds
  ["Which polar region is an ocean covered by sea ice and surrounded by land?","The Arctic","NASA describes the Arctic as an ocean with sea ice, surrounded by land.","easy","polar-geography","Arctic and Antarctic geography",7,"polar regions by underlying landform",[["Antarctica","Antarctica is a continent surrounded by ocean."],["Greenland","Greenland is an island within the Arctic region, not the polar ocean basin itself."],["The Himalaya","The Himalaya are a mountain system in Asia, not a polar region."]],"polarNASA"],
  ["Which ice-covered continent contains Earth’s South Pole?","Antarctica","NASA states that Antarctica is a continent and covers Earth’s South Pole.","easy","polar-geography","Antarctic geography",7,"continents containing geographic poles",[["Australia","Australia is far north of the South Pole."],["Greenland","Greenland is an Arctic island in the Northern Hemisphere."],["South America","South America reaches toward Antarctica but does not contain the South Pole."]],"antarctica"],
  ["What ocean surrounds the continent of Antarctica?","The Southern Ocean","NASA describes Antarctica as surrounded by the Southern Ocean.","easy","polar-geography","Southern Ocean and Antarctica",7,"oceans surrounding polar landmasses",[["The Arctic Ocean","The Arctic Ocean is in the Northern Hemisphere."],["The North Atlantic Ocean","The North Atlantic lies far north of Antarctica."],["The Indian Ocean only","The Indian Ocean is one neighboring basin, but NASA identifies the surrounding ocean as the Southern Ocean."]],"polarNASA"],
  ["Which large island lies between the Arctic Ocean and the North Atlantic, northeast of Canada?","Greenland","Statistics Greenland describes Greenland’s location between the Arctic and North Atlantic oceans, northeast of Canada.","medium","polar-geography","Arctic islands",7,"named islands in polar regions",[["Iceland","Iceland lies southeast of Greenland in the North Atlantic."],["Baffin Island","Baffin Island is west of Greenland and part of Canada."],["Svalbard","Svalbard lies east of Greenland, near Norway."]],"greenland"],
  ["Which named strait is one of the few outlets for sea ice leaving the Arctic Ocean?","The Bering Strait","NASA identifies the Bering Strait as one of the few outlets through which sea ice exits the Arctic Ocean.","hard","polar-geography","Arctic waterways",7,"named Arctic straits",[["The Strait of Gibraltar","Gibraltar connects the Atlantic and Mediterranean, far from the Arctic."],["The Strait of Malacca","Malacca is in Southeast Asia."],["The Bosporus","The Bosporus connects the Black Sea and Sea of Marmara."]],"earthOcean"],
  ["Which polar desert is described as the world’s largest desert?","Antarctica","National Geographic describes nearly all of Antarctica as a polar desert and the largest desert overall.","medium","polar-geography","Polar landscapes",7,"named polar deserts",[["The Arctic","The Arctic contains polar desert areas, but Antarctica is the largest desert."],["The Gobi","The Gobi is a large Asian cold desert but is smaller than Antarctica."],["The Patagonian Desert","The Patagonian Desert is in South America and is much smaller."]],"antarcticDesert"],
  ["At Earth’s North Pole, what is the underlying geographic surface beneath sea ice?","The Arctic Ocean","NASA explains that there is no landmass at the North Pole; sea ice there rests over the Arctic Ocean.","medium","polar-geography","The North Pole",7,"landforms beneath polar ice",[["A continent","NASA states that the North Pole is over ocean rather than a continent."],["A mountain plateau","The North Pole is not a land plateau."],["A tropical island","The North Pole is in the Arctic Ocean, not a tropical island."]],"earthOcean"],

  // Chapter 8 · Natural Wonders
  ["Off the northeast coast of which country is the Great Barrier Reef?","Australia","UNESCO locates the Great Barrier Reef off Australia’s northeast coast.","easy","natural-landmarks","Coral reef landmarks",8,"countries with major natural landmarks",[["South Africa","South Africa is far from the Great Barrier Reef."],["Mexico","Mexico has coral reefs, but not the Great Barrier Reef."],["India","India is not the country UNESCO identifies for the Great Barrier Reef."]],"greatBarrier"],
  ["Which river plunges over Victoria Falls?","The Zambezi River","UNESCO states that the Zambezi plunges over Victoria Falls between Zambia and Zimbabwe.","easy","natural-landmarks","Waterfalls and rivers",8,"rivers associated with famous waterfalls",[["The Congo River","The Congo is a major central African river but does not form Victoria Falls."],["The Nile River","The Nile flows north to the Mediterranean and does not form Victoria Falls."],["The Limpopo River","The Limpopo is in southern Africa, but the Zambezi forms Victoria Falls."]],"victoriaFalls"],
  ["The Iguazú/Iguaçu waterfall system lies on the border of which countries?","Argentina and Brazil","UNESCO places the waterfall system on the border between Argentina and Brazil.","medium","natural-landmarks","South American waterfalls",8,"country pairs sharing a natural landmark",[["Chile and Peru","These countries lie on South America’s Pacific side, not at Iguazú Falls."],["Brazil and Uruguay","Uruguay is south of Brazil and does not share the falls."],["Argentina and Paraguay","Paraguay is nearby, but the falls cross the Argentina–Brazil border."]],"iguazu"],
  ["Which river is responsible for carving the Grand Canyon?","The Colorado River","The National Park Service identifies the Colorado River as the erosive force that carved the Grand Canyon.","easy","natural-landmarks","Canyons and erosion",8,"rivers associated with famous canyons",[["The Mississippi River","The Mississippi flows across central North America and did not carve the Grand Canyon."],["The Columbia River","The Columbia drains the Pacific Northwest, not the Grand Canyon."],["The Rio Grande","The Rio Grande forms part of the U.S.–Mexico border and did not carve the Grand Canyon."]],"npsGrandCanyon"],
  ["Old Faithful is a geyser in which U.S. national park?","Yellowstone National Park","The National Park Service lists Old Faithful in Yellowstone’s Upper Geyser Basin.","easy","natural-landmarks","Geysers and geothermal landmarks",8,"national parks containing famous geysers",[["Yosemite National Park","Yosemite is famous for waterfalls and granite cliffs, not Old Faithful."],["Grand Canyon National Park","The Grand Canyon is in Arizona and does not contain Old Faithful."],["Zion National Park","Zion is in Utah and is not the location of Old Faithful."]],"oldFaithful"],
  ["Across which two countries does the Serengeti’s annual wildlife migration travel?","Tanzania and Kenya","UNESCO describes the Serengeti migration as spanning Tanzania and Kenya.","medium","natural-landmarks","African plains and migrations",8,"country pairs crossed by a natural migration",[["Namibia and Botswana","These countries are in southern Africa, far from the Serengeti."],["Egypt and Sudan","These countries are along the Nile in northeastern Africa."],["South Africa and Lesotho","These neighboring countries are far south of the Serengeti."]],"serengeti"],
  ["What is the name of the world’s largest salt flat in Bolivia?","Salar de Uyuni","NASA identifies Salar de Uyuni in the Andes as Earth’s largest salt flat.","medium","natural-landmarks","Salt flats and high plateaus",8,"named salt flats",[["Salar de Atacama","Salar de Atacama is a salt flat in Chile, but NASA identifies Uyuni as the largest."],["Bonneville Salt Flats","Bonneville is in Utah, United States."],["Etosha Pan","Etosha Pan is a salt pan in Namibia, not Bolivia."]],"salar"],

  // Chapter 9 · People & Places
  ["What is the capital of Brazil?","Brasília","The Library of Congress country study lists Brasília as Brazil’s capital.","easy","cities-and-countries","National capitals",9,"world capital cities",[["Rio de Janeiro","Rio de Janeiro was Brazil’s former capital, but the current capital is Brasília."],["São Paulo","São Paulo is Brazil’s largest city, not its capital."],["Salvador","Salvador was an early colonial capital, not Brazil’s current capital."]],"brazil"],
  ["What is the capital of Peru?","Lima","NASA identifies Lima as Peru’s capital on the country’s western coastline.","easy","cities-and-countries","National capitals",9,"world capital cities",[["Cusco","Cusco was the capital of the Inca Empire, but Peru’s current capital is Lima."],["Quito","Quito is the capital of Ecuador."],["La Paz","La Paz is Bolivia’s seat of government, not Peru’s capital."]],"peru"],
  ["Which city is the capital of Japan?","Tokyo","The White House archive identifies Tokyo as Japan’s capital.","easy","cities-and-countries","National capitals",9,"world capital cities",[["Kyoto","Kyoto was Japan’s imperial capital for centuries, but the current capital is Tokyo."],["Osaka","Osaka is a major Japanese city, not the capital."],["Seoul","Seoul is the capital of South Korea."]],"japan"],
  ["What is the capital of India?","New Delhi","The Government of India embassy page states that New Delhi is India’s capital.","easy","cities-and-countries","National capitals",9,"world capital cities",[["Mumbai","Mumbai is India’s largest city by population, but not its capital."],["Kolkata","Kolkata was the capital of British India for a period, but India’s capital is New Delhi."],["Chennai","Chennai is a major Indian city, not the national capital."]],"india"],
  ["Which city serves as Nigeria’s capital and seat of its federal government?","Abuja","Nigeria’s High Commission identifies Abuja as the capital and seat of the Federal Government.","easy","cities-and-countries","National capitals",9,"world capital cities",[["Lagos","Lagos is Nigeria’s largest city and former capital, but the capital is Abuja."],["Kano","Kano is a major city in northern Nigeria, not the national capital."],["Accra","Accra is the capital of Ghana."]],"nigeria"],

  // Chapter 10 · Around the Globe
  ["Which line at 0 degrees latitude divides the Northern and Southern Hemispheres?","The Equator","National Geographic defines the Equator as 0° latitude and the line dividing the Northern and Southern Hemispheres.","easy","global-reference-lines","Latitude and hemispheres",10,"named lines of latitude and longitude",[["The Prime Meridian","The Prime Meridian is a line of longitude, not the north–south hemispheric boundary."],["The Tropic of Cancer","The Tropic of Cancer lies north of the Equator."],["The International Date Line","The International Date Line is a longitude reference near 180°, not 0° latitude."]],"hemisphere"],
  ["Which line of longitude is used as the reference for dividing the Eastern and Western Hemispheres?","The Prime Meridian","National Geographic describes the Prime Meridian as the reference used for the east–west division.","medium","global-reference-lines","Latitude and hemispheres",10,"named lines of latitude and longitude",[["The Equator","The Equator is a line of latitude dividing north and south."],["The Tropic of Capricorn","The Tropic of Capricorn is a line of latitude in the Southern Hemisphere."],["The Arctic Circle","The Arctic Circle is a line of latitude in the north."]],"hemisphere"],
  ["Which continent is largest by area in the seven-continent model?","Asia","National Geographic ranks Asia as the largest of Earth’s seven continents.","easy","continents","Continents by area",10,"continents by relative land area",[["Africa","Africa is the second-largest continent."],["North America","North America is smaller than Asia."],["South America","South America is smaller than Asia."]],"continent"],
  ["What narrow land bridge connects South America to North America?","The Isthmus of Panama","National Geographic says South America is connected to North America by the narrow Isthmus of Panama.","easy","global-landforms","Isthmuses and continental connections",10,"named land bridges and isthmuses",[["The Isthmus of Suez","The Suez land bridge is between Africa and Asia, not the Americas."],["The Strait of Magellan","The Strait of Magellan is a water passage at South America’s southern end."],["The Strait of Gibraltar","Gibraltar is a water passage between Europe and Africa."]],"panama"],
  ["What name describes the continuous landmass made up of Europe and Asia?","Eurasia","National Geographic describes Europe and Asia as parts of the single landmass Eurasia.","medium","continents","Continents and supercontinents",10,"named continental landmasses",[["Afro-Eurasia","Afro-Eurasia includes Africa as well as Europe and Asia."],["Oceania","Oceania is a Pacific island region that includes Australia and neighboring islands."],["The Americas","The Americas refer to North and South America."]],"continent"],
  ["Which ocean borders the eastern side of Africa?","The Indian Ocean","National Geographic lists the Indian Ocean among the bodies of water bordering Africa, on its eastern side.","easy","global-ocean-geography","Continents and bordering oceans",10,"oceans bordering continents",[["The Pacific Ocean","The Pacific does not border Africa."],["The Arctic Ocean","The Arctic is far north of Africa."],["The Southern Ocean","The Southern Ocean lies around Antarctica, south of Africa."]],"africa"],
  ["Which sea lies between northeastern Africa and the Arabian Peninsula?","The Red Sea","National Geographic identifies the Red Sea as a body of water bordering Africa between the continent and Arabia.","medium","global-ocean-geography","Seas and continental boundaries",10,"named seas between regions",[["The Black Sea","The Black Sea lies between southeastern Europe and western Asia."],["The Caribbean Sea","The Caribbean lies between Central America and the Caribbean islands."],["The Baltic Sea","The Baltic lies in northern Europe."]],"africa"],
];

export const GEOGRAPHY_QUESTION_ADDITIONS = rows.map((row, index) => {
  const [q, correctText, why, difficulty, topicId, subtopic, chapterId, answerFamily, distractorRows, sourceKey] = row;
  const source = SOURCES[sourceKey];
  if (!source) throw new Error(`Missing Geography source: ${sourceKey}`);
  return {
    id: `geography-extra-${String(index + 21).padStart(3, '0')}`,
    q,
    correctText,
    why,
    difficulty,
    topicId,
    subtopic,
    chapterId,
    answerFamily,
    distractors: distractorRows.map(([text, rationale]) => ({ text, rationale })),
    source: { ...source, status: 'verified', lastVerified: VERIFIED_AT },
    verifiedAt: VERIFIED_AT,
  };
});
