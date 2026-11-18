// Seed facts are deliberately short, stable, and suitable for a lightweight first world.
// Add question packs here without changing the gameplay engine.
export const SPACE_QUESTIONS = [
  { id:'s01', difficulty:'easy', topic:'Solar system', q:'Which planet is known as the Red Planet?', a:['Mars','Venus','Mercury','Neptune'], correct:0, why:'Iron-rich dust gives Mars its familiar reddish color.' },
  { id:'s02', difficulty:'easy', topic:'Solar system', q:'Which planet is the largest in our solar system?', a:['Saturn','Jupiter','Earth','Uranus'], correct:1, why:'Jupiter is so large that all the other planets could fit inside it by volume.' },
  { id:'s03', difficulty:'easy', topic:'Solar system', q:'Which planet is closest to the Sun?', a:['Venus','Earth','Mercury','Mars'], correct:2, why:'Mercury is the innermost planet, orbiting about 58 million km from the Sun on average.' },
  { id:'s04', difficulty:'easy', topic:'Solar system', q:'Which planet is famous for its bright ring system?', a:['Saturn','Mars','Mercury','Earth'], correct:0, why:'Saturn’s broad rings are made mostly of countless pieces of ice and rock.' },
  { id:'s05', difficulty:'easy', topic:'Solar system', q:'What is the name of Earth’s natural satellite?', a:['Phobos','Titan','Europa','The Moon'], correct:3, why:'The Moon is Earth’s only natural satellite.' },
  { id:'s06', difficulty:'easy', topic:'Solar system', q:'Which planet is the hottest on average?', a:['Mercury','Venus','Mars','Jupiter'], correct:1, why:'Venus has a thick carbon dioxide atmosphere that traps heat in a strong greenhouse effect.' },
  { id:'s07', difficulty:'easy', topic:'Solar system', q:'How many planets orbit the Sun?', a:['Seven','Eight','Nine','Ten'], correct:1, why:'The International Astronomical Union recognizes eight planets in our solar system.' },
  { id:'s08', difficulty:'easy', topic:'Solar system', q:'Which planet is famous for rotating on its side?', a:['Uranus','Jupiter','Venus','Mercury'], correct:0, why:'Uranus has an extreme axial tilt of about 98 degrees.' },
  { id:'s09', difficulty:'easy', topic:'Solar system', q:'What is the Sun?', a:['A planet','A moon','A star','A comet'], correct:2, why:'The Sun is a star: a huge sphere of hot plasma producing its own light and energy.' },
  { id:'s10', difficulty:'easy', topic:'Solar system', q:'Which planet is known for its giant red spot?', a:['Neptune','Jupiter','Saturn','Mars'], correct:1, why:'Jupiter’s Great Red Spot is a long-lived storm larger than Earth.' },
  { id:'s11', difficulty:'easy', topic:'Space basics', q:'What force keeps planets in orbit around the Sun?', a:['Magnetism','Friction','Gravity','Static electricity'], correct:2, why:'Gravity attracts the Sun and planets, shaping their orbital paths.' },
  { id:'s12', difficulty:'easy', topic:'Space basics', q:'What do we call a rocky object that burns as it passes through Earth’s atmosphere?', a:['Meteor','Asteroid','Comet','Satellite'], correct:0, why:'A streak of light from an object burning in the atmosphere is a meteor.' },
  { id:'s13', difficulty:'easy', topic:'Space basics', q:'What galaxy is home to our solar system?', a:['Andromeda','Whirlpool','Milky Way','Sombrero'], correct:2, why:'Our Sun and solar system are in the Milky Way galaxy.' },
  { id:'s14', difficulty:'easy', topic:'Space basics', q:'What is the name of the first human to walk on the Moon?', a:['Yuri Gagarin','Buzz Aldrin','Neil Armstrong','John Glenn'], correct:2, why:'Neil Armstrong stepped onto the Moon during Apollo 11 in July 1969.' },
  { id:'s15', difficulty:'easy', topic:'Space basics', q:'What do astronauts wear outside a spacecraft?', a:['A flight suit','A pressure spacesuit','A diving suit','A thermal blanket'], correct:1, why:'A spacesuit supplies oxygen and protects astronauts from vacuum, heat, and cold.' },
  { id:'s16', difficulty:'easy', topic:'Space basics', q:'Which planet is our home?', a:['Mars','Earth','Venus','Saturn'], correct:1, why:'Earth is the third planet from the Sun and the only world known to host life.' },
  { id:'s17', difficulty:'easy', topic:'Space basics', q:'What shape is the path of a planet around the Sun?', a:['A perfect square','An ellipse','A triangle','A straight line'], correct:1, why:'Planets follow elliptical orbits, which are close to circular in many cases.' },
  { id:'s18', difficulty:'easy', topic:'Space basics', q:'What is a group of stars forming a recognizable pattern called?', a:['A constellation','An orbit','A nebula','A crater'], correct:0, why:'A constellation is a named pattern of stars as seen from Earth.' },
  { id:'s19', difficulty:'easy', topic:'Space basics', q:'Which object has a tail that can appear when it approaches the Sun?', a:['Comet','Moon','Exoplanet','Pulsar'], correct:0, why:'Solar heat releases gas and dust from a comet, creating a glowing coma and tail.' },
  { id:'s20', difficulty:'easy', topic:'Space basics', q:'What is the closest star to Earth?', a:['Sirius','Proxima Centauri','The Sun','Vega'], correct:2, why:'The Sun is our nearest star, about 150 million km away on average.' },
  { id:'s21', difficulty:'easy', topic:'Moon', q:'About how long does the Moon take to orbit Earth?', a:['One day','About one month','One year','Ten years'], correct:1, why:'The Moon completes an orbit relative to the stars in about 27.3 days.' },
  { id:'s22', difficulty:'easy', topic:'Moon', q:'What causes the Moon’s phases?', a:['Earth’s shadow every night','Changing views of its sunlit half','Clouds on the Moon','The Moon changing shape'], correct:1, why:'As the Moon orbits Earth, we see different portions of its sunlit half.' },
  { id:'s23', difficulty:'easy', topic:'Space exploration', q:'Which country’s Apollo 11 mission first landed people on the Moon?', a:['United States','Soviet Union','China','India'], correct:0, why:'NASA’s Apollo 11 mission landed Neil Armstrong and Buzz Aldrin on the Moon in 1969.' },
  { id:'s24', difficulty:'easy', topic:'Space exploration', q:'What is the International Space Station?', a:['A telescope on the Moon','A crewed laboratory orbiting Earth','A probe near Jupiter','A launch site'], correct:1, why:'The ISS is a modular research laboratory in low Earth orbit, operated by an international partnership.' },
  { id:'s25', difficulty:'easy', topic:'Space exploration', q:'What does a telescope help astronomers do?', a:['Measure ocean tides','Observe distant objects','Change a planet’s orbit','Make stars brighter'], correct:1, why:'Telescopes collect light and other signals from faraway objects for study.' },
  { id:'s26', difficulty:'easy', topic:'Solar system', q:'Which planet is farthest from the Sun among the eight planets?', a:['Uranus','Saturn','Neptune','Jupiter'], correct:2, why:'Neptune is the eighth and most distant recognized planet from the Sun.' },
  { id:'s27', difficulty:'easy', topic:'Solar system', q:'Which planet has the most prominent clouds of acid and a very thick atmosphere?', a:['Venus','Mars','Mercury','Neptune'], correct:0, why:'Venus is covered by thick clouds of sulfuric acid droplets.' },
  { id:'s28', difficulty:'easy', topic:'Space basics', q:'What is a light-year a measure of?', a:['Time','Distance','Brightness','Temperature'], correct:1, why:'A light-year is the distance light travels in one year.' },
  { id:'s29', difficulty:'easy', topic:'Space basics', q:'Which of these is a dwarf planet?', a:['Pluto','Europa','Titan','Phobos'], correct:0, why:'Pluto is classified as a dwarf planet by the International Astronomical Union.' },
  { id:'s30', difficulty:'easy', topic:'Space basics', q:'What do we call a huge cloud of gas and dust in space?', a:['Nebula','Crater','Orbit','Quasar'], correct:0, why:'Nebulae are large interstellar clouds of gas and dust, some of which form stars.' },
  { id:'s31', difficulty:'medium', topic:'Space exploration', q:'Which NASA rover landed in Jezero Crater on Mars in 2021?', a:['Curiosity','Perseverance','Opportunity','Spirit'], correct:1, why:'Perseverance landed in Jezero Crater in February 2021 to study ancient habitability and collect samples.' },
  { id:'s32', difficulty:'medium', topic:'Space exploration', q:'Which spacecraft was the first to fly past Pluto?', a:['Voyager 1','Cassini','New Horizons','Juno'], correct:2, why:'NASA’s New Horizons spacecraft flew past Pluto in July 2015.' },
  { id:'s33', difficulty:'medium', topic:'Solar system', q:'Which planet has the shortest day, lasting about 10 hours?', a:['Earth','Jupiter','Mars','Mercury'], correct:1, why:'Jupiter rotates once in roughly 9 hours and 56 minutes, the fastest planetary rotation.' },
  { id:'s34', difficulty:'medium', topic:'Solar system', q:'What is the asteroid belt mainly located between?', a:['Earth and Mars','Mars and Jupiter','Jupiter and Saturn','Uranus and Neptune'], correct:1, why:'The main asteroid belt lies between the orbits of Mars and Jupiter.' },
  { id:'s35', difficulty:'medium', topic:'Moon', q:'What is the boundary between the sunlit and dark sides of the Moon called?', a:['Terminator','Equator','Ecliptic','Horizon ring'], correct:0, why:'The terminator is the moving line separating night and day on a body.' },
  { id:'s36', difficulty:'medium', topic:'Space exploration', q:'Which space telescope launched in 2021 to observe infrared light?', a:['Hubble','James Webb Space Telescope','Kepler','Chandra'], correct:1, why:'The James Webb Space Telescope launched in December 2021 and observes mainly in infrared.' },
  { id:'s37', difficulty:'medium', topic:'Solar system', q:'Which moon of Saturn has lakes of liquid methane and ethane?', a:['Enceladus','Titan','Mimas','Rhea'], correct:1, why:'Titan’s cold surface hosts lakes and seas of liquid hydrocarbons.' },
  { id:'s38', difficulty:'medium', topic:'Solar system', q:'Which moon of Jupiter is covered by an icy crust and thought to hide a global ocean?', a:['Europa','Io','Ganymede','Callisto'], correct:0, why:'Evidence from several spacecraft suggests a salty ocean lies beneath Europa’s icy crust.' },
  { id:'s39', difficulty:'medium', topic:'Space exploration', q:'What was the first artificial satellite placed in Earth orbit?', a:['Explorer 1','Sputnik 1','Vostok 1','Luna 2'], correct:1, why:'The Soviet Union launched Sputnik 1 on October 4, 1957.' },
  { id:'s40', difficulty:'medium', topic:'Solar system', q:'What is Saturn’s north-polar six-sided jet-stream pattern called?', a:['The Great Dark Spot','The Hexagon','The Polar Crown','The Ring Vortex'], correct:1, why:'Saturn’s north pole has a persistent hexagon-shaped jet stream surrounding its polar vortex.' },
  { id:'s41', difficulty:'medium', topic:'Space basics', q:'What is the name for a planet orbiting a star beyond our solar system?', a:['Exoplanet','Minor moon','Asteroid','Pulsar'], correct:0, why:'An exoplanet is a planet that orbits a star other than the Sun.' },
  { id:'s42', difficulty:'medium', topic:'Space exploration', q:'Which mission was the first successful soft landing on the Moon?', a:['Luna 9','Apollo 8','Surveyor 1','Luna 2'], correct:0, why:'The Soviet Luna 9 spacecraft achieved the first successful soft landing in February 1966.' },
  { id:'s43', difficulty:'medium', topic:'Space basics', q:'What is the name of the boundary around a black hole beyond which light cannot escape?', a:['Event horizon','Photosphere','Magnetopause','Roche limit'], correct:0, why:'The event horizon marks the boundary beyond which escape is impossible.' },
  { id:'s44', difficulty:'medium', topic:'Solar system', q:'Which planet has the strongest winds measured in the solar system?', a:['Venus','Neptune','Earth','Mercury'], correct:1, why:'Neptune’s atmosphere has supersonic winds measured at over 2,000 km/h.' },
  { id:'s45', difficulty:'medium', topic:'Space exploration', q:'Which NASA program sent John Glenn into Earth orbit in 1962?', a:['Apollo','Mercury','Gemini','Soyuz'], correct:1, why:'NASA’s Mercury program sent John Glenn into orbit in 1962; Yuri Gagarin had made the first human orbital flight in 1961.' },
  { id:'s46', difficulty:'medium', topic:'Space basics', q:'What does a star primarily fuse in its core during its main sequence?', a:['Iron into gold','Hydrogen into helium','Oxygen into carbon','Helium into uranium'], correct:1, why:'Main-sequence stars generate energy mainly by fusing hydrogen into helium.' },
  { id:'s47', difficulty:'medium', topic:'Space exploration', q:'Which NASA spacecraft entered orbit around Saturn in 2004?', a:['Juno','Cassini','Galileo','Dawn'], correct:1, why:'The Cassini spacecraft began orbiting Saturn in 2004 and studied the system until 2017.' },
  { id:'s48', difficulty:'medium', topic:'Solar system', q:'What is the largest moon in the solar system?', a:['Titan','Earth’s Moon','Ganymede','Triton'], correct:2, why:'Jupiter’s Ganymede is larger than Mercury and is the solar system’s biggest moon.' },
  { id:'s49', difficulty:'medium', topic:'Space basics', q:'Why does the sky look dark to astronauts on the Moon?', a:['The Moon blocks all sunlight','There is no atmosphere to scatter sunlight','The Sun is too far away','The Moon has no daylight'], correct:1, why:'Without an atmosphere, sunlight is not scattered across the sky as it is on Earth.' },
  { id:'s50', difficulty:'medium', topic:'Space exploration', q:'Which space telescope is famous for deep visible-light images and launched in 1990?', a:['Hubble Space Telescope','Spitzer Space Telescope','Kepler','Planck'], correct:0, why:'Hubble launched in 1990 and has produced landmark observations across visible and other wavelengths.' },
  { id:'s51', difficulty:'hard', topic:'Space basics', q:'What is the approximate speed of light in vacuum?', a:['30,000 km/s','150,000 km/s','300,000 km/s','1,000,000 km/s'], correct:2, why:'Light travels at about 299,792 kilometers per second in a vacuum.' },
  { id:'s52', difficulty:'hard', topic:'Space basics', q:'What is the name of the region where the solar wind meets interstellar space?', a:['Heliopause','Magnetotail','Photosphere','Oort boundary'], correct:0, why:'The heliopause is the outer boundary of the heliosphere, where solar wind pressure meets the interstellar medium.' },
  { id:'s53', difficulty:'hard', topic:'Space exploration', q:'Which probe was the first human-made object to enter interstellar space?', a:['Pioneer 10','Voyager 1','New Horizons','Voyager 2'], correct:1, why:'NASA confirmed Voyager 1 crossed the heliopause into interstellar space in 2012.' },
  { id:'s54', difficulty:'hard', topic:'Space basics', q:'What is the approximate age of the universe according to modern measurements?', a:['1.4 billion years','4.6 billion years','13.8 billion years','46 billion years'], correct:2, why:'Measurements of the expanding universe point to an age of about 13.8 billion years.' },
  { id:'s55', difficulty:'hard', topic:'Space basics', q:'What is a pulsar?', a:['A rapidly rotating neutron star emitting beams of radiation','A young planet','A type of comet','A black hole with rings'], correct:0, why:'Pulsars are rotating neutron stars whose radiation beams can sweep past Earth like a lighthouse.' },
  { id:'s56', difficulty:'hard', topic:'Space exploration', q:'Which mission first returned samples from the far side of the Moon?', a:['Chang’e 4','Chang’e 5','Chang’e 6','Luna 16'], correct:2, why:'China’s Chang’e 6 mission returned the first samples from the Moon’s far side in 2024.' },
  { id:'s57', difficulty:'hard', topic:'Space basics', q:'What is the Roche limit?', a:['A star’s outer atmosphere','The distance inside which tidal forces can disrupt an orbiting body','The edge of the observable universe','A spacecraft’s safe re-entry altitude'], correct:1, why:'Within the Roche limit, tidal forces can overcome a satellite’s self-gravity and break it apart.' },
  { id:'s58', difficulty:'hard', topic:'Space basics', q:'What is the name of the boundary separating Earth’s magnetosphere from the solar wind on the sunward side?', a:['Magnetopause','Heliopause','Ionosphere','Bow shock only'], correct:0, why:'The magnetopause is where Earth’s magnetic field pressure balances the solar wind.' },
  { id:'s59', difficulty:'hard', topic:'Space basics', q:'Which type of galaxy is the Milky Way?', a:['Elliptical','Irregular','Barred spiral','Ring galaxy'], correct:2, why:'The Milky Way is a barred spiral galaxy with a central bar and winding arms.' },
  { id:'s60', difficulty:'hard', topic:'Space exploration', q:'Which NASA mission was the first to orbit an asteroid?', a:['Dawn','NEAR Shoemaker','OSIRIS-REx','Hayabusa2'], correct:1, why:'NEAR Shoemaker entered orbit around asteroid Eros in 2000, the first spacecraft to orbit an asteroid.' },
  { id:'s61', difficulty:'hard', topic:'Space exploration', q:'Which planet did NASA’s Juno spacecraft begin orbiting in 2016?', a:['Saturn','Jupiter','Mars','Neptune'], correct:1, why:'Juno entered orbit around Jupiter in July 2016 to study its origin and interior.' },
  { id:'s62', difficulty:'hard', topic:'Space basics', q:'In an accelerating universe, which horizon marks the limit beyond which signals sent now can never reach us?', a:['Cosmic event horizon','Heliopause','Kuiper boundary','Roche limit'], correct:0, why:'The cosmic event horizon marks the greatest distance from which a signal sent now could ever reach an observer.' },
  { id:'s63', difficulty:'hard', topic:'Space exploration', q:'Which mission was the first to orbit Mercury?', a:['MESSENGER','Mariner 10','BepiColombo','Pioneer Venus'], correct:0, why:'NASA’s MESSENGER spacecraft entered orbit around Mercury in 2011.' },
  { id:'s64', difficulty:'hard', topic:'Solar system', q:'Which planet has a moon called Triton that orbits in the opposite direction to the planet’s rotation?', a:['Uranus','Neptune','Saturn','Jupiter'], correct:1, why:'Triton orbits Neptune retrograde, suggesting it was captured from the Kuiper Belt.' },
  { id:'s65', difficulty:'hard', topic:'Space basics', q:'What is the cosmic microwave background?', a:['Radio noise from the Sun','Leftover radiation from the early universe','Signals from pulsars','Heat from Earth’s atmosphere'], correct:1, why:'The CMB is relic radiation released when the early universe became transparent, about 380,000 years after the Big Bang.' },
  { id:'s66', difficulty:'hard', topic:'Space exploration', q:'Which mission first landed a spacecraft on a comet?', a:['Rosetta’s Philae lander','Deep Impact','Stardust','Hayabusa'], correct:0, why:'ESA’s Philae lander touched down on comet 67P/Churyumov–Gerasimenko in 2014.' },
  { id:'s67', difficulty:'hard', topic:'Space basics', q:'What is the Sun’s visible surface layer called?', a:['Chromosphere','Photosphere','Corona','Core'], correct:1, why:'The photosphere is the layer from which most visible sunlight escapes.' },
  { id:'s68', difficulty:'hard', topic:'Space exploration', q:'Which spacecraft was the first to visit Uranus?', a:['Voyager 2','Pioneer 11','Cassini','New Horizons'], correct:0, why:'Voyager 2 made the only close flyby of Uranus in January 1986.' },
  { id:'s69', difficulty:'hard', topic:'Space basics', q:'What is the name of the immense black hole at the center of the Milky Way?', a:['Cygnus X-1','Sagittarius A*','M87*','Kepler-22b'], correct:1, why:'Sagittarius A* is the supermassive black hole at the center of our galaxy.' },
  { id:'s70', difficulty:'hard', topic:'Space exploration', q:'Which observatory detected gravitational waves for the first time in 2015?', a:['ALMA','LIGO','Hubble','Chandra'], correct:1, why:'The LIGO detectors observed gravitational waves from merging black holes in September 2015.' },
  { id:'s71', difficulty:'medium', topic:'Space exploration', q:'What was the name of the first artificial satellite launched by the United States?', a:['Vanguard 1','Explorer 1','Telstar 1','Skylab'], correct:1, why:'Explorer 1 launched in January 1958, months after Sputnik 1.' },
  { id:'s72', difficulty:'easy', topic:'Solar system', q:'Which planet is often called Earth’s twin because of its similar size?', a:['Venus','Mars','Jupiter','Neptune'], correct:0, why:'Venus is close to Earth in size, although its surface and atmosphere are very different.' },
  { id:'s73', difficulty:'medium', topic:'Moon', q:'What kind of eclipse occurs when the Moon passes between Earth and the Sun?', a:['Lunar eclipse','Solar eclipse','Transit of Venus','Occultation of Mars'], correct:1, why:'A solar eclipse occurs when the Moon blocks some or all of the Sun from our view.' },
  { id:'s74', difficulty:'medium', topic:'Space basics', q:'Which is Saturn’s largest moon?', a:['Enceladus','Titan','Mimas','Rhea'], correct:1, why:'Titan is Saturn’s largest moon and has lakes and seas of liquid hydrocarbons on its surface.' },
  { id:'s75', difficulty:'easy', topic:'Space exploration', q:'Which animal did the Soviet Union send into orbit aboard Sputnik 2?', a:['Laika the dog','Ham the chimpanzee','A cat named Félicette','A tortoise'], correct:0, why:'Laika became the first animal to orbit Earth aboard Sputnik 2 in 1957.' },
  { id:'s76', difficulty:'medium', topic:'Solar system', q:'Which planet is the smallest of the eight planets?', a:['Mars','Mercury','Venus','Earth'], correct:1, why:'Mercury is the smallest planet in the solar system.' },
  { id:'s77', difficulty:'hard', topic:'Space exploration', q:'Which mission was the first to land successfully on Mars?', a:['Viking 1','Mars Pathfinder','Mars 3','Sojourner'], correct:0, why:'NASA’s Viking 1 lander reached the Martian surface in July 1976 and operated successfully.' },
  { id:'s78', difficulty:'medium', topic:'Space basics', q:'What is the Kuiper Belt?', a:['A region beyond Neptune containing many icy bodies','A ring around Saturn','A layer of the Sun','A group of nearby stars'], correct:0, why:'The Kuiper Belt is a doughnut-shaped region beyond Neptune that contains dwarf planets and icy small bodies.' },
  { id:'s79', difficulty:'easy', topic:'Space basics', q:'What is the name of the star at the center of our solar system?', a:['Polaris','Sirius','The Sun','Betelgeuse'], correct:2, why:'The Sun is the star around which Earth and the other solar system planets orbit.' },
  { id:'s80', difficulty:'medium', topic:'Space exploration', q:'Which mission first carried humans to the Moon’s vicinity, without landing?', a:['Apollo 8','Apollo 11','Gemini 8','Artemis I'], correct:0, why:'Apollo 8 carried astronauts around the Moon in December 1968, before the first landing.' },
].map((question, questionIndex) => {
  const eligibleLevels = question.difficulty === 'easy' ? [1,2,3,4,5] : question.difficulty === 'medium' ? [3,4,5,6,7,8,9] : [5,6,7,8,9,10];
  const semanticType = inferSemanticType('space', question.q, question.a[question.correct]);
  const options = question.a.map((text, index) => ({
    id: `${question.id}-option-${index + 1}`,
    text,
    semanticType,
    correct: index === question.correct,
  }));
  const topicId = question.topic.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  return {
    ...question,
    options,
    semanticType,
    correctOptionId: options[question.correct].id,
    categoryId: 'space',
    topicId,
    subtopic: question.topic,
    chapterId: ({ 'Solar system':1, Moon:2, 'Space exploration':8, 'Space basics':7 })[question.topic] || ((questionIndex % 10) + 1),
    questionType: 'multiple-choice',
    levelEligibility: eligibleLevels,
    reviewStatus: 'needs-review',
    source: { title: 'NASA Solar System Exploration', url: 'https://science.nasa.gov/solar-system/', status: 'needs-review' },
    eligibleLevels,
  };
});

export function inferSemanticType(worldId, question, answer = '') {
  const stem = question.toLowerCase();
  const text = `${stem} ${answer}`.toLowerCase();
  if (worldId === 'movies' && /film features|film series|animated film|film.*quote/.test(stem)) return 'film-title';
  if (worldId === 'gaming' && /which game series features/.test(stem)) return 'game-franchise';
  if (/^who\b|\b(?:singer|composer|musician|poet|author|historical person)\b/.test(stem)) return 'person';
  if (/fictional archaeologist/.test(stem)) return 'film-character';
  if (/\b(language|spoken in|written in)\b/.test(stem)) return 'language';
  if (/\bwhich empire\b|\bwhich civilization\b/.test(stem)) return 'civilization';
  if (/\blake\b/.test(stem)) return 'lake';
  if (/\bstrait\b/.test(stem)) return 'strait';
  if (/\bu\.s\. state\b|\bwhich state contains\b/.test(stem)) return 'us-state';
  if (/\bpolygon|shape with (?:five|six|seven|eight|nine|ten|5|6|7|8|9|10) sides\b/.test(stem)) return 'polygon';
  if (/\bprime number|number divisible only\b/.test(stem)) return 'prime-number';
  if (/\broman numeral\b/.test(stem)) return 'roman-numeral';
  if (/\badditive identity\b/.test(stem)) return 'number-property';
  if (/\bwhat is the name of the shape with\b/.test(stem)) return 'polygon';
  if (/si unit.*force|force.*si unit/.test(stem)) return 'physical-unit';
  if (/what does inertia describe/.test(stem)) return 'mechanics-concept';
  if (/lever pivots/.test(stem)) return 'lever-part';
  if (/\bsmallest bones|body part|which part of the eye|what connects muscles|bones protect|blood cells|organ|tooth|red blood cells|body system|brain\b/.test(stem)) return 'anatomy';
  if (/\bwhat do bees collect\b/.test(stem)) return 'bee-forage';
  if (worldId === 'logic') {
    if (/today is/.test(stem)) return 'weekday';
    if (/box has only/.test(stem)) return 'two-color';
    if (/odd one out|word does not belong/.test(stem)) return 'logic-exception';
    if (/all bloops|some cats|every glorp/.test(stem)) return 'logic-conclusion';
    if (/heavier/.test(stem)) return 'weight-comparison';
    if (/angle between its hands/.test(stem)) return 'numeric-result';
    if (/overtake the runner/.test(stem)) return 'race-position';
  }
  if (/law states that every action/.test(stem)) return 'physical-law';
  if (/file extension.*jpg|\.jpg.*indicate/.test(stem)) return 'file-format';
  if (/program that helps a computer access websites/.test(stem)) return 'software-category';
  if (/chemical symbol|chemical formula|formula for/.test(stem)) return 'chemistry-formula';
  if (/ph of a neutral/.test(stem)) return 'numeric-result';
  if (/substance that speeds a reaction/.test(stem)) return 'catalyst-term';
  if (/bond forms when atoms share/.test(stem)) return 'chemistry-bond';
  if (/positively charged ion/.test(stem)) return 'chemistry-ion';
  if (/common name for sodium bicarbonate/.test(stem)) return 'compound-common-name';
  if (/oxidation reaction/.test(stem)) return 'chemical-process';
  if (/vertical columns in the periodic table/.test(stem)) return 'periodic-table-term';
  if (/solution with ph below/.test(stem)) return 'acid-base-term';
  if (/scientist who studies/.test(stem)) return 'occupation';
  if (/\b(compass.*determine|which direction.*compass)\b/.test(stem)) return 'compass-direction';
  if (/\bmedical imaging|ultrasound imaging\b/.test(stem)) return 'medical-imaging';
  if (/\bthermometer measure\b/.test(stem)) return 'measured-quantity';
  if (/\btechnology lets computers send data using light\b/.test(stem)) return 'optical-medium';
  if (/\blens to make distant objects appear closer|magnified images of tiny objects\b/.test(stem)) return 'optical-instrument';
  if (/\b12 squared|factorial\b/.test(stem)) return 'numeric-result';
  if (/\bapproximate acceleration|approximate speed\b/.test(stem)) return 'numeric-result';
  if (/\bwhat happens to quantity demanded\b/.test(stem)) return 'demand-change';
  if (/\bcurrency\b|\bmoney used in\b/.test(stem)) return 'currency';
  if (/\bdirection\b|\bwhich way\b/.test(stem)) return 'direction';
  if (/\b(how many|how much|how long|how far|how fast|how old|what is the value|what is the sum|what is the square root|what is the probability|what is the perimeter|what is the slope|what is the median|how many degrees|how many sides|how many faces|how many rings|how many colors|what comes next|what number|which number|what is \d+ percent|what is the angle|\d+[\s,]+\d+.*sequence)\b/.test(stem)) return 'numeric-result';
  if (/\bopposite meaning\b|\bword for\b/.test(stem)) return 'vocabulary-term';
  if (/\bgas\b/.test(stem)) return 'gas';
  if (/\bmetal\b/.test(stem)) return 'metal';
  if (/\bstate of matter\b/.test(stem)) return 'matter-state';
  if (/\bforce\b/.test(stem)) return 'force';
  if (/\bpigment\b|\bcapture energy from sunlight\b/.test(stem)) return 'pigment';
  if (/\bchange from solid|liquid turns into a solid|liquid to gas\b/.test(stem)) return 'phase-change';
  if (/\bparticle\b|\bsubatomic\b/.test(stem)) return 'subatomic-particle';
  if (/\bsi unit|measured in\b/.test(stem)) return 'physical-unit';
  if (/\btype of energy|energy of motion|energy is stored\b/.test(stem)) return 'energy-type';
  if (/\b(ecosystem|organism.s role|variety of life|biodiversity|habitat|migration)\b/.test(stem)) return 'ecology-term';
  if (/\bmaintain a stable internal body temperature\b/.test(stem)) return 'thermoregulation-term';
  if (/\btype of rock\b/.test(stem)) return 'rock-type';
  if (/\btestable explanation\b/.test(stem)) return 'scientific-method';
  if (/\blayer of earth\b/.test(stem)) return 'earth-layer';
  if (/\bbending of light|bending of a wave|lens converges|mirror forms|pitch of a sound|kind of wave|wavelength\b/.test(stem)) return 'wave-optics-term';
  if (/\b(acronym|stand for)\b/.test(stem)) return 'computing-abbreviation';
  if (/\bhtml|url|web page\b/.test(stem)) return 'web-concept';
  if (/\bmain purpose of a computer backup\b/.test(stem)) return 'backup-purpose';
  if (/\bwhat does an algorithm provide\b/.test(stem)) return 'algorithm-purpose';
  if (/\btwo-factor authentication\b/.test(stem)) return 'security-method';
  if (/\bnetwork of connected devices around the world\b/.test(stem)) return 'network-name';
  if (/\bstorage device|flash memory\b/.test(stem)) return 'storage-device';
  if (/\bram\b|memory\b/.test(stem)) return 'memory-concept';
  if (/\bcomputer|computer backup|computer displays|file extension|jpg\b/.test(stem)) return 'computing-concept';
  if (/\bsoftware|source code\b/.test(stem)) return 'software-concept';
  if (/\bwi-fi|wireless|network\b/.test(stem)) return 'network-concept';
  if (/\bicon|picture that represents\b/.test(stem)) return 'interface-concept';
  if (/\bclassifier|model parameter|dataset|training data|test dataset|generative ai|large language model|reinforcement learning|neural network|natural language processing|chatbot|hallucination|bias in an ai|evaluation benchmark|recommendation system\b/.test(stem)) return 'ai-concept';
  if (/\btrade route\b/.test(stem)) return 'trade-route';
  if (/\bstrait|inherit|genetic makeup|molecule carries hereditary|process plants use|fungi|pollen|protein|blood cells|organisms become|kingdom\b/.test(stem)) return 'biology-term';
  if (/\bwhat object is hit|what object.*hockey\b/.test(stem)) return 'sports-object';
  if (/\bwhich combat sport\b/.test(stem)) return 'sport-name';
  if (/\bwhich film features|which film series|which animated film|which film features a time\b/.test(stem)) return 'film-title';
  if (/\bperson who directs a film\b/.test(stem)) return 'film-role';
  if (/\b(score of zero|free throw|strike|par|goals|players|points|baseball diamond|rings appear|marathon|race is run|yellow jersey|surface is traditionally|shuttlecock|sport is played|tour de france|chess boxing)\b/.test(stem)) return 'sports-term';
  if (/\bfilm|movie|film series|film features|film technique|film festival|promotional preview|directs a film|fictional archaeologist|screenplay|animated drawings\b/.test(stem)) return 'film-term';
  if (/\bwhich family does the trumpet belong\b/.test(stem)) return 'instrument-family';
  if (/\bsymbol that raises a note\b/.test(stem)) return 'music-symbol';
  if (/\bspeed of music\b/.test(stem)) return 'music-tempo';
  if (/\bgradual increase in loudness\b/.test(stem)) return 'music-dynamic';
  if (/\blowest common adult male singing voice\b/.test(stem)) return 'vocal-range';
  if (/\bgenre.*improvisation|music.*genre\b/.test(stem)) return 'music-genre';
  if (/\bmusical|music|violin|clef|notes played|singer|singing voice|loudness|musical marking|genre.*improvisation|pitches\b/.test(stem)) return 'music-term';
  if (/\bstory|poet|literature|consonant sounds|moral lesson|reference to another work|comparison using|main character\b/.test(stem)) return 'literary-term';
  if (/\b(?:myth|goddess|god|hero|creature|winged horse|world tree|final battle)s?\b/.test(stem)) return 'mythological-entity';
  if (/\b(?:plant|tree|wolves|caterpillars|organism|animals|animal|species|acorns|leaves)\b/.test(stem)) return 'nature-term';
  if (/\bmade from|herb|pastry|nut|cheese|pasta|liquid left|seed|fermentation|ingredient|food|dish\b/.test(stem)) return 'food-ingredient';
  if (/\bcompany|console family|created the .* series|developed the .* series|makes the .* console\b/.test(stem)) return 'gaming-company';
  if (/\byellow character|fictional region|which game|game series|arcade game|features.*character|includes the character\b/.test(stem)) return 'game-franchise';
  if (/\bgame genre|kind of game|genre.*game|chess when implemented\b/.test(stem)) return 'game-genre';
  if (/\bnpc|dlc|multiplayer|speedrun|co-op|frame rate\b/.test(stem)) return 'gaming-concept';
  if (/\beconomist|budget|bank deposit|inflation|revenue|consumer|loan|market|scarce resource|entrepreneur|tax|savings account|trade-off|expense|supply chain|stock share|break-even|opportunity cost|demand\b/.test(stem)) return 'economics-term';
  if (/\bflag|colors on the flag\b/.test(stem)) return 'flag-description';
  if (worldId === 'puzzles') return 'riddle-answer';
  if (worldId === 'mythology') return 'mythological-entity';
  if (/\b(capital|city|town|urban center)\b/.test(text)) return 'city';
  if (/\b(river|waterway)\b/.test(text)) return 'river';
  if (/\b(mountain range|mountain|peak)\b/.test(text)) return 'mountain';
  if (/\b(desert)\b/.test(text)) return 'desert';
  if (/\b(continent)\b/.test(text)) return 'continent';
  if (/\b(ocean|sea)\b/.test(text)) return 'waterbody';
  if (/\b(island)\b/.test(text)) return 'island';
  if (/\b(country|nation)\b/.test(text)) return 'country';
  if (/\b(planet)\b/.test(text)) return 'planet';
  if (/\b(moon|natural satellite)\b/.test(text)) return 'moon';
  if (/\b(rover)\b/.test(text)) return 'rover';
  if (/\b(telescope|observatory)\b/.test(text)) return 'telescope';
  if (/\b(spacecraft|probe|mission|satellite|program)\b/.test(text)) return 'mission';
  if (/\b(galaxy|constellation|star)\b/.test(text)) return 'celestial-object';
  if (/\b(what year|which year|in which year|\b\d{4}\b)\b/.test(text) || /^\d{4}$/.test(answer.trim())) return 'historical-year';
  if (/^who\b|\bwho (?:was|is|led|developed|discovered|invented|wrote|created|founded|built)\b/.test(question.toLowerCase())) return 'person';
  if (/\b(civilization|empire|dynasty)\b/.test(text)) return 'civilization';
  if (/\b(organ|bone|system|cell|tissue|protein|hormone)\b/.test(text)) return /\bsystem\b/.test(text) ? 'body-system' : 'anatomy';
  if (/\b(instrument|device|tool|invention|machine)\b/.test(text)) return 'instrument';
  if (/\b(chemical element|element|atom)\b/.test(text)) return 'chemical-element';
  if (/\b(athlete|player|team|tournament|sport)\b/.test(text)) return 'sports-entity';
  if (/\b(book|novel|poem|author|writer)\b/.test(text)) return /\bauthor|writer\b/.test(text) ? 'person' : 'literary-work';
  if (/\b(song|composer|musician|instrument)\b/.test(text)) return /\bcomposer|musician\b/.test(text) ? 'person' : 'instrument';
  if (/\b(animal|species|mammal|bird|fish|reptile|insect|wildlife)\b/.test(text)) return 'animal';
  if (/\b(food|dish|cuisine|ingredient|fruit|spice|grain)\b/.test(text)) return 'food';
  if (/\b(award|prize)\b/.test(text)) return 'award';
  if (/\b(language|word|term|concept|theory|law|effect|process|method|property|measure|force|energy|type|form|shape|pattern|logic|rule|system|model|algorithm|technology|network|currency|market|economic|company|business|game|film|movie|music|myth|god|goddess|creature|puzzle|riddle|invention|discovery)\b/.test(text)) return `${worldId}-concept`;
  return `${worldId}-entity`;
}

export function randomizeQuestionOptions(question, random = Math.random) {
  const options = [...question.options];
  for (let index = options.length - 1; index > 0; index--) {
    const other = Math.floor(random() * (index + 1));
    [options[index], options[other]] = [options[other], options[index]];
  }
  const correct = options.findIndex(option => option.id === question.correctOptionId);
  let mapData = question.mapData;
  if (mapData && Array.isArray(mapData.hotspots)) {
    const hotspots = mapData.hotspots.map((h, i) => {
      const optId = h.optionId || question.options[h.optionIndex ?? i]?.id;
      const currentIdx = options.findIndex(opt => opt.id === optId);
      return {
        ...h,
        optionId: optId,
        optionIndex: currentIdx !== -1 ? currentIdx : h.optionIndex,
      };
    });
    mapData = { ...mapData, hotspots };
  }
  return { ...question, options, a: options.map(option => option.text), correct, mapData };
}

// Active-run snapshots can outlive an older content schema. Restore those runs
// from the authored pack record; never synthesize answer choices from legacy
// positional arrays at render time.
export function resolveStructuredQuestion(snapshot, pack) {
  if (Array.isArray(snapshot?.options) && snapshot.correctOptionId) return snapshot;
  if (!snapshot?.id || !Array.isArray(pack)) return null;
  return pack.find(question => question.id === snapshot.id) || null;
}

export function validateQuestions(questions) {
  const ids = new Set();
  const stems = new Set();
  const errors = [];
  for (const question of questions) {
    if (!question.id || ids.has(question.id)) errors.push(`Missing or duplicate id: ${question.id}`);
    ids.add(question.id);
    if (!question.q?.trim()) errors.push(`Missing question text: ${question.id}`);
    const stem = question.q?.trim().toLocaleLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ');
    if (stem && stems.has(stem)) errors.push(`Duplicate question text: ${question.id}`);
    if (stem) stems.add(stem);
    const options = question.options;
    const correctOptions = Array.isArray(options) ? options.filter(option => option?.correct === true) : [];
    if (!Array.isArray(options) || options.length !== 4) errors.push(`Expected four structured options: ${question.id}`);
    if (Array.isArray(options)) {
      const texts = options.map(option => String(typeof option === 'string' ? option : option?.text || '').trim().toLocaleLowerCase().replace(/^(?:a|an|the)\s+/, '').replace(/\s+/g,' '));
      if (texts.some(text => !text) || new Set(texts).size !== options.length) errors.push(`Duplicate options or blank option text: ${question.id}`);
      if (options.some(option => option && typeof option === 'object' && option.semanticType === 'flag-description')) {
        const colorSets=options.map(option=>String(option.text).toLowerCase().replace(/\band\b/g,' ').replace(/[^a-z]+/g,' ').trim().split(/\s+/).sort().join(' '));
        if(new Set(colorSets).size!==4)errors.push(`Near-duplicate options: ${question.id}`);
      }
      const optionIds = options.map(option => typeof option === 'string' ? '' : option?.id);
      if (optionIds.some(id => !id) || new Set(optionIds).size !== optionIds.length) errors.push(`Missing or duplicate option ids: ${question.id}`);
      if (correctOptions.length !== 1) errors.push(`Expected exactly one correct option: ${question.id}`);
      const semanticTypes = options.map(option => typeof option === 'string' ? '' : option?.semanticType);
      if (semanticTypes.some(type => !type)) errors.push(`Missing semantic type: ${question.id}`);
      if (new Set(semanticTypes).size > 1) errors.push(`Mismatched semantic types: ${question.id}`);
      if (question.answerSetProvenance !== 'question-specific-editorial') {
        errors.push(`Missing question-specific authored answer set: ${question.id}`);
      }
      const distractors = options.filter(option => option?.correct !== true);
      if (distractors.length !== 3 || options.some(option => !option?.answerFamily?.trim()) ||
          distractors.some(option => !option.distractorRationale?.trim())) {
        errors.push(`Every question needs an answer family and three individual distractor rationales: ${question.id}`);
      }
      const correctOptionId = question.correctOptionId;
      if (!correctOptionId || !optionIds.includes(correctOptionId)) errors.push(`Missing or incorrect correct-answer id: ${question.id}`);
      if (correctOptions.length === 1 && correctOptionId && correctOptions[0].id !== correctOptionId) errors.push(`Correct-answer id does not map to correct option: ${question.id}`);
      if (!Number.isInteger(question.correct) || !options[question.correct] || options[question.correct].id !== correctOptionId) errors.push(`Answer index does not map to correct option id: ${question.id}`);
    }
    if (!Number.isInteger(question.correct) || question.correct < 0 || question.correct > 3) errors.push(`Invalid answer key: ${question.id}`);
    const eligibleLevels = question.levelEligibility;
    if (!question.categoryId || question.worldId !== question.categoryId || !question.questionType || !['easy','medium','hard','expert'].includes(question.difficulty) || !Array.isArray(eligibleLevels) || !eligibleLevels.length || eligibleLevels.some(level => !Number.isInteger(level) || level < 1 || level > 100)) errors.push(`Missing or invalid question metadata: ${question.id}`);
    if (!question.topicId || !question.subtopic || !Number.isInteger(question.chapterId) || question.chapterId < 1 || question.chapterId > 10) errors.push(`Missing or invalid topic metadata: ${question.id}`);
    const source = question.source;
    if (!source || typeof source !== 'object' || !source.title?.trim() || !source.url?.startsWith('https://') || !source.claim?.trim()) errors.push(`Missing titled source reference or claim: ${question.id}`);
    if (!['verified','reasoning-verified','needs-review'].includes(question.reviewStatus) || question.reviewStatus !== source?.status || !Object.hasOwn(question, 'reviewDate')) errors.push(`Missing or inconsistent review status/date: ${question.id}`);
    if (question.reviewStatus === 'verified' || source?.status === 'verified') {
      if (question.reviewStatus !== 'verified' || source?.status !== 'verified' || !source.lastVerified || question.verifiedAt !== source.lastVerified || question.reviewDate !== question.verifiedAt) {
        errors.push(`Verified question needs a claim-level citation and verification date: ${question.id}`);
      }
      const correctText = correctOptions[0]?.text?.trim().toLocaleLowerCase();
      if (correctText && !source.claim?.toLocaleLowerCase().includes(correctText)) {
        errors.push(`Verified source claim does not identify the authored answer: ${question.id}`);
      }
      try {
        if (new URL(source.url).pathname === '/') errors.push(`Verified question needs a direct source page, not a homepage: ${question.id}`);
      } catch {
        errors.push(`Verified question has an invalid source URL: ${question.id}`);
      }
    } else if (question.reviewStatus === 'reasoning-verified' || source?.status === 'reasoning-verified') {
      if (question.reviewStatus !== 'reasoning-verified' || source?.status !== 'reasoning-verified' || !source.lastVerified || question.verifiedAt !== source.lastVerified || question.reviewDate !== question.verifiedAt) {
        errors.push(`Reasoning-verified question needs a derivation claim and verification date: ${question.id}`);
      }
      const correctText = correctOptions[0]?.text?.trim().toLocaleLowerCase();
      if (correctText && !source.claim?.toLocaleLowerCase().includes(correctText)) {
        errors.push(`Reasoning-verified claim does not identify the derived answer: ${question.id}`);
      }
    } else if (question.reviewDate !== null) {
      errors.push(`Pending questions must not claim a review date: ${question.id}`);
    }
    if (!question.why?.trim()) errors.push(`Missing explanation: ${question.id}`);
  }
  return errors;
}
