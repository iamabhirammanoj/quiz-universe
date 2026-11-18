// Question-specific repairs for the distractors identified in the Task 4 audit.
// Each distractor carries an internal rationale; these notes are not shown in play.
import { GEOGRAPHY_MATH_OPTION_SETS } from './editorial-options-geo-math.js';
import { CHEM_BODY_OPTION_SETS } from './editorial-options-chem-body.js';
import { SPACE_EDITORIAL_OPTION_SETS } from './editorial-options-space.js';
import { BATCH_A_OPTION_SETS } from './editorial-options-batch-a.js';
import { BATCH_B_OPTION_SETS } from './editorial-options-batch-b.js';
import { BATCH_C_OPTION_SETS } from './editorial-options-batch-c.js';

const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });
const d = (text, rationale) => ({ text, rationale });

export const EDITORIAL_OPTION_SETS = {
  ...GEOGRAPHY_MATH_OPTION_SETS,
  ...CHEM_BODY_OPTION_SETS,
  ...SPACE_EDITORIAL_OPTION_SETS,
  ...BATCH_A_OPTION_SETS,
  ...BATCH_B_OPTION_SETS,
  ...BATCH_C_OPTION_SETS,
  'ai-001': set('machine-learning concept', [
    d('A collection of examples used to train a model', 'Training data supplies examples; it is an input to machine learning, not the learning method itself.'),
    d('A network of connected computing units inspired by neurons', 'A neural network is one model architecture, not the whole field of machine learning.'),
    d('A program that follows only hand-written rules', 'Rule-based software can perform tasks without learning patterns from data.'),
  ], { source:{ title:'Stanford HAI · What is Machine Learning?', url:'https://hai.stanford.edu/ai-definitions/what-is-machine-learning', status:'verified' }, verifiedAt:'2026-11-16', topicId:'machine-learning', subtopic:'Machine learning concepts', chapterId:2 }),
  'ai-003': set('network analogy', [
    d('The way blood vessels branch and connect', 'Blood vessels form a biological network, but they are not what artificial neural networks are modeled after.'),
    d('The way roots spread through soil', 'Roots create branching structures, but this is not the inspiration named in the question.'),
    d('The way roads connect in a transport grid', 'Road networks are connected systems, but the stated inspiration is biological neurons.'),
  ]),
  'ai-008': set('machine-learning evaluation', [
    d('It performs poorly on both training data and new data', 'Poor performance on both sets is more consistent with underfitting.'),
    d('It performs similarly on training data and new data', 'Similar performance with strong results suggests the model generalizes rather than overfits.'),
    d('It cannot be evaluated on any data', 'A model can be evaluated; overfitting describes a gap between training and new-data performance.'),
  ], { question:'What is a common sign that a machine-learning model is overfit?', correctText:'It performs well on training data but poorly on new data.', why:'An overfit model matches its training examples too closely and generalizes poorly to new examples.' }),
  'ai-015': set('machine-learning evaluation', [
    d('To tune model weights during training', 'Training data is used to fit the model; a test set is held back for evaluation.'),
    d('To choose examples for training labels', 'Labeling examples prepares training data and does not explain a separate test set.'),
    d('To measure performance on the same examples used to fit the model', 'Training-set scores can overstate generalization; the test set checks unseen examples.'),
  ]),
  'history-005': set('historic ship', [
    d('Santa Maria', 'This ship is associated with Columbus’s 1492 voyage, not the Pilgrims’ 1620 crossing.'),
    d('Susan Constant', 'This ship carried English colonists to Jamestown in 1607, not the Pilgrims in 1620.'),
    d('Discovery', 'The name was used by several historic ships, but it was not the ship named in the Pilgrims’ 1620 crossing.'),
  ], { source:{ title:'Smithsonian National Postal Museum · Mayflower Departs England for the New World', url:'https://postalmuseum.si.edu/exhibition/mayflower-departs-england-for-the-new-world', status:'verified' }, verifiedAt:'2026-11-16', topicId:'pilgrim-voyage', subtopic:'Early colonial voyages', chapterId:6 }),
  'nature-001': set('shark species', [
    d('Basking shark', 'It is another very large filter-feeding shark, but smaller than the whale shark.'),
    d('Great white shark', 'It is a large predatory shark, but not the largest shark species.'),
    d('Tiger shark', 'It is a large shark, but it does not reach the size of a whale shark.'),
  ], { source:{ title:'NOAA Fisheries · Fun Facts About Shocking Sharks', url:'https://www.fisheries.noaa.gov/national/outreach-and-education/fun-facts-about-shocking-sharks', status:'verified' }, verifiedAt:'2026-11-16', topicId:'sharks', subtopic:'Sharks and rays', chapterId:2 }),
  'biology-001': set('biological molecule', [
    d('RNA', 'RNA carries genetic information in some viruses, but DNA carries it in most living organisms.'),
    d('Protein', 'Proteins perform many cellular functions but are not the primary hereditary information molecule in most organisms.'),
    d('Carbohydrate', 'Carbohydrates are important energy and structural molecules, not the hereditary information molecule.'),
  ], { source:{ title:'NHGRI · Deoxyribonucleic Acid (DNA)', url:'https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid-DNA', status:'verified' }, verifiedAt:'2026-11-16', topicId:'genetics', subtopic:'DNA and heredity', chapterId:2 }),
  'inventions-005': set('solar-energy device', [
    d('A rechargeable battery', 'A battery stores chemical energy and can supply electricity, but it does not convert sunlight directly.'),
    d('A solar thermal collector', 'A thermal collector captures solar heat rather than directly converting light into electricity.'),
    d('A photoresistor', 'A photoresistor changes resistance in response to light; it is not a photovoltaic power source.'),
  ], { source:{ title:'U.S. Department of Energy · Solar Photovoltaic Cell Basics', url:'https://www.energy.gov/cmei/systems/solar-photovoltaic-cell-basics', status:'verified' }, verifiedAt:'2026-11-16', topicId:'solar-energy', subtopic:'Photovoltaic inventions', chapterId:4 }),
  'technology-002': set('binary notation', [
    d('1 and 2', 'The digit 2 is not part of the binary digit alphabet.'),
    d('0 through 9', 'Those are decimal digits; binary uses only two digits.'),
    d('2 and 16', 'Those numbers describe other bases, not the digits used in binary notation.'),
  ], { question:'Which two digits are used in binary notation?', correctText:'0 and 1', topicId:'binary-notation', subtopic:'Number systems', chapterId:2 }),
  'science-006': set('phase change', [
    d('Liquid to gas', 'This is vaporization, a different phase change.'),
    d('Gas to solid', 'This is deposition, the reverse direction of sublimation.'),
    d('Liquid to solid', 'This is freezing, not a direct solid-to-gas change.'),
  ]),
  'science-010': set('ecology concept', [
    d('The place where an organism lives', 'That is its habitat; a niche describes its ecological role and interactions.'),
    d('All populations living in an area', 'That is an ecological community, not one organism’s role.'),
    d('The path energy follows through a food web', 'Energy transfer is part of ecosystem functioning, not the definition of an organism’s niche.'),
  ]),
  'science-014': set('cell structure', [
    d('Mitochondrion', 'Human mitochondria contain a small amount of DNA, but most genetic material is in the nucleus.'),
    d('Ribosome', 'Ribosomes build proteins; they do not contain most of a human cell’s genetic material.'),
    d('Golgi apparatus', 'The Golgi apparatus modifies and sorts cell products; it does not contain most genetic material.'),
  ]),
  'general-015': set('glassmaking material', [
    d('Soda ash (sodium carbonate)', 'Soda ash is a common glassmaking ingredient, but it is not the primary ingredient in ordinary glass.'),
    d('Limestone (calcium carbonate)', 'Limestone supplies lime to many glass recipes, but silica is the main ingredient.'),
    d('Borax', 'Borax can be used in specialty glass, but it is not the main ingredient in traditional glass.'),
  ]),
  'general-017': set('phase change', [
    d('Solid directly to gas', 'This is sublimation, not evaporation.'),
    d('Gas to liquid', 'This is condensation, the reverse direction from evaporation.'),
    d('Liquid to solid', 'This is freezing, not evaporation.'),
  ]),
  'general-020': set('feeding strategy', [
    d('Herbivore', 'A herbivore eats plant material rather than both plants and animals.'),
    d('Carnivore', 'A carnivore eats animals and does not describe the two-part diet in the question.'),
    d('Detritivore', 'A detritivore feeds on dead organic matter, a different feeding strategy.'),
  ]),
  'physics-005': set('wave type', [
    d('Transverse wave', 'In a transverse wave, oscillations are perpendicular to the direction of travel.'),
    d('Surface wave', 'A surface wave travels along an interface; sound in air travels as a longitudinal pressure wave.'),
    d('Electromagnetic wave', 'Electromagnetic waves do not require air and are transverse in free space.'),
  ]),
  'physics-007': set('frequency and pitch', [
    d('It becomes lower', 'Lower frequency is perceived as lower pitch.'),
    d('It stays the same', 'A change in frequency changes the perceived pitch.'),
    d('It becomes louder', 'Loudness is primarily related to wave amplitude, not frequency.'),
  ]),
  'physics-011': set('optical component', [
    d('Concave lens', 'A diverging concave lens spreads parallel rays rather than converging them.'),
    d('Plane mirror', 'A plane mirror reflects rays instead of converging them.'),
    d('Prism', 'A prism can refract and disperse light but is not the converging lens described.'),
  ]),
  'physics-015': set('electromagnetic spectrum', [
    d('Microwaves', 'Microwaves have shorter wavelengths than radio waves.'),
    d('Infrared waves', 'Infrared has shorter wavelengths than radio waves.'),
    d('Visible light', 'Visible light has a much shorter wavelength than radio waves.'),
  ]),
  'physics-018': set('temperature and resistance', [
    d('It decreases', 'For a typical metal, rising temperature increases lattice vibrations and resistance.'),
    d('It stays constant', 'A metal’s resistance generally changes with temperature.'),
    d('It becomes zero', 'Zero resistance is associated with superconductivity under specific conditions, not ordinary heating.'),
  ]),
  'sports-004': set('racket sport', [
    d('Squash', 'Squash uses a small rubber ball rather than a shuttlecock.'),
    d('Table tennis', 'Table tennis uses a lightweight ball, not a shuttlecock.'),
    d('Tennis', 'Tennis uses a felt-covered ball rather than a shuttlecock.'),
  ]),
  'sports-007': set('tennis court surface', [
    d('Clay', 'Clay is used at major tennis events such as the French Open, not Wimbledon.'),
    d('Hard court', 'Hard courts are used by other major tournaments, not Wimbledon’s traditional surface.'),
    d('Carpet', 'Carpet is an indoor tennis surface and is not Wimbledon’s surface.'),
  ]),
  'sports-009': set('marathon distance', [
    d('41.195 kilometers', 'This is one kilometer shorter than the standardized marathon distance.'),
    d('40 kilometers', 'This is a common rounded estimate but is shorter than the official distance.'),
    d('43.195 kilometers', 'This is one kilometer longer than the standardized marathon distance.'),
  ], { question:'What is the official marathon distance in kilometers?', why:'The standardized marathon distance is 42.195 kilometers.' }),
  'sports-010': set('cycling discipline', [
    d('Track cycling', 'Track cycling is raced on a velodrome rather than in the Tour de France.'),
    d('Mountain biking', 'Mountain biking uses off-road courses, unlike the Tour de France road race.'),
    d('BMX racing', 'BMX racing is a short-course discipline, not the Tour de France event.'),
  ]),
  'sports-013': set('road cycling race terms', [
    d('Breakaway', 'A breakaway is a rider or group ahead of the main pack, not the name for the main group itself.'),
    d('Domestique', 'A domestique is a rider who supports a team leader, not the group of riders riding together.'),
    d('Peloton sprint', 'A sprint is a high-speed effort, often near a stage finish, not the term for the main group throughout a race.'),
  ], { correctText:'Peloton', question:'In road cycling, what is the main group of riders riding together called?', why:'The peloton is the main group of riders in a road race.', topicId:'road-cycling', subtopic:'Road cycling race groups and tactics', chapterId:1 }),
  'sports-014': set('golf score', [
    d('Eagle', 'An eagle is two strokes under par, not one.'),
    d('Bogey', 'A bogey is one stroke over par.'),
    d('Par', 'Par is the expected score for the hole, not one under.'),
  ]),
  'sports-015': set('swimming stroke', [
    d('Backstroke', 'Backstroke is named for the swimmer’s position, not an insect.'),
    d('Breaststroke', 'Breaststroke is named for its movement, not an insect.'),
    d('Freestyle', 'Freestyle describes the event rule and is not named after an insect.'),
  ]),
  'sports-019': set('track race distance', [
    d('100-meter race', 'This is a sprint on the straight, not one full lap of a standard outdoor track.'),
    d('200-meter race', 'This is half a standard 400-meter lap.'),
    d('800-meter race', 'This is two laps of a standard 400-meter track.'),
  ]),
  'sports-020': set('football scoring term', [
    d('Brace', 'A brace means two goals by one player, not three.'),
    d('Own goal', 'An own goal is scored into a player’s own team goal; it does not specify a three-goal tally.'),
    d('Clean sheet', 'A clean sheet means allowing no goals, not one player scoring three.'),
  ]),
  'music-004': set('keyboard instrument', [
    d('Harpsichord', 'A harpsichord is a keyboard instrument, but its strings are plucked and its keys are not the piano described.'),
    d('Pipe organ', 'A pipe organ uses keyboards but produces sound by directing air through pipes.'),
    d('Accordion', 'An accordion has a keyboard or buttons and bellows, rather than a piano keyboard and hammers.'),
  ]),
  'music-008': set('drum instrument', [
    d('Bongos', 'Bongos are a pair of small drums, but they are not the orchestral kettledrums described.'),
    d('Tabla', 'Tabla is a paired hand-drum set, not a pair of orchestral kettledrums.'),
    d('Congas', 'Congas are tall hand drums, not paired kettledrums.'),
  ]),
  'music-012': set('Scottish instrument', [
    d('Fiddle', 'The fiddle is a traditional Scottish instrument, but it has strings rather than an air bag.'),
    d('Clàrsach (Scottish harp)', 'The clàrsach is a Scottish instrument, but it is a string harp rather than a bag instrument.'),
    d('Bodhrán', 'The bodhrán is a traditional frame drum, not an instrument supplied with air from a bag.'),
  ]),
  'music-020': set('pitched percussion instrument', [
    d('Xylophone', 'A conventional xylophone has wooden bars; the metal-bar instrument specified is a different instrument.'),
    d('Marimba', 'A marimba has wooden bars rather than the metal bars specified.'),
    d('Tubular bells', 'Tubular bells use suspended metal tubes rather than a keyboard row of metal bars.'),
  ], { question:'Which orchestral percussion instrument has tuned steel bars arranged like a keyboard and struck with hard mallets?', correctText:'Glockenspiel', why:'A glockenspiel has tuned metal bars arranged like a keyboard; a xylophone and marimba conventionally use wooden bars, while a vibraphone has a different resonator and motor arrangement.', topicId:'pitched-percussion', subtopic:'Orchestral percussion', chapterId:4 }),
  'literature-012': set('poetic form', [
    d('Haiku', 'A haiku is a short form traditionally structured around three lines, not fourteen.'),
    d('Ballad', 'A ballad is a narrative poem and is not defined by fourteen lines.'),
    d('Ode', 'An ode is a lyric poem, not a fixed fourteen-line form.'),
  ]),
  'flags-004': set('country', [
    d('Bangladesh', 'Its flag has a red disc on a green field rather than a white field.'),
    d('Poland', 'Its flag has horizontal white and red bands, not a red circle on white.'),
    d('Austria', 'Its flag has horizontal red-white-red bands, not a red circle on white.'),
  ]),
  'food-001': set('grain or grain-like food', [
    d('Couscous', 'Couscous is made from semolina granules and is not the rice used in risotto.'),
    d('Pearl barley', 'Barley can be cooked in a risotto-style dish, but traditional risotto uses rice.'),
    d('Quinoa', 'Quinoa can be cooked similarly, but it is not the traditional grain used for risotto.'),
  ]),
  'food-017': set('Mediterranean country', [
    d('Italy', 'Italy has many rice dishes, but paella is traditionally associated with Spain.'),
    d('Portugal', 'Portugal has distinct rice dishes, but paella is associated with Spain.'),
    d('Greece', 'Greece has its own rice-based dishes, but paella is associated with Spain.'),
  ]),
  'movies-002': set('film award', [
    d('BAFTA Award', 'BAFTA is a separate British film and television award.'),
    d('Golden Globe Award', 'The Golden Globes are a separate award presented by a different organization.'),
    d('Palme d’Or', 'The Palme d’Or is the top prize at the Cannes Film Festival, not the Academy statuette.'),
  ], { question:'What nickname is commonly used for the Academy Award of Merit statuette?', correctText:'Oscar', why:'“Oscar” is the familiar nickname for the Academy Award of Merit statuette.' }),
  'logic-001': set('deductive conclusion', [
    d('All Lazzies are Bloops', 'The premises give the direction Bloop → Lazzie, not the reverse.'),
    d('Some Bloops are not Lazzies', 'The premises place every Bloop inside the Lazzie group.'),
    d('The premises do not connect Bloops and Lazzies', 'The premises explicitly connect the groups through Razzies.'),
  ]),
  'logic-007': set('ordered comparison', [
    d('B', 'A is taller than B, so B is not the tallest of these three.'),
    d('C', 'C is shorter than B, and B is shorter than A.'),
    d('It cannot be determined', 'The two comparisons establish A above B and B above C.'),
  ]),
  'logic-014': set('letter sequence', [
    d('H', 'H is the next letter alphabetically, but the sequence advances by two letters.'),
    d('J', 'J skips one letter too many after G in the alternating-letter pattern.'),
    d('K', 'K skips two letters too many after G in the alternating-letter pattern.'),
  ]),
  'logic-016': set('logical proposition', [
    d('Every non-mammal is a bird', 'This reverses the stated exclusion: being outside the mammal group does not imply being a bird.'),
    d('Some mammals are birds', 'This contradicts the premise that no birds are mammals.'),
    d('The premises do not tell us whether a robin is a bird', 'The question explicitly states that a robin is a bird.'),
  ]),
};

const additionalCurriculum = {
  'general-015':['glassmaking','Glass and traditional materials',6],
  'general-017':['phase-changes','Water and phase changes',5],
  'general-020':['animal-diets','Animal feeding strategies',5],
  'science-006':['phase-changes','Changes of state',1],
  'science-010':['ecology','Ecological roles and interactions',7],
  'science-014':['cell-biology','Cell structures and genetic material',3],
  'ai-003':['neural-networks','Neural network models',3],
  'ai-008':['model-evaluation','Generalization and overfitting',7],
  'ai-015':['model-evaluation','Training and test data',7],
  'physics-005':['waves-and-sound','Sound waves',4],
  'physics-007':['waves-and-sound','Frequency and pitch',4],
  'physics-011':['geometric-optics','Lenses and image formation',4],
  'physics-015':['electromagnetic-spectrum','Radio waves and wavelength',5],
  'physics-018':['electrical-materials','Resistance and temperature',7],
  'sports-004':['racket-sports','Badminton and racket sports',7],
  'sports-007':['tennis','Tennis tournaments and surfaces',7],
  'sports-009':['road-racing','Marathon distance',1],
  'sports-010':['cycling','Road cycling',7],
  'sports-014':['golf','Golf scoring',2],
  'sports-015':['swimming','Swimming strokes',3],
  'sports-019':['track-and-field','Track race distances',1],
  'sports-020':['association-football','Football scoring terms',3],
  'movies-002':['film-awards','Major film awards',9],
  'music-004':['keyboard-instruments','Piano and keyboard instruments',2],
  'music-008':['orchestral-percussion','Timpani and orchestral percussion',4],
  'music-012':['scottish-music','Traditional Scottish instruments',5],
  'literature-012':['poetic-forms','The sonnet',2],
  'flags-004':['national-flags','Flags of East Asia',2],
  'food-001':['rice-dishes','Rice varieties and cooking',2],
  'food-017':['spanish-cuisine','Regional dishes of Spain',7],
  'logic-001':['syllogisms','Class inclusion and deduction',4],
  'logic-007':['ordered-relations','Transitive comparisons',6],
  'logic-014':['letter-sequences','Alternating alphabet patterns',3],
  'logic-016':['deductive-reasoning','Conclusions from stated premises',4],
};
for (const [id, [topicId, subtopic, chapterId]] of Object.entries(additionalCurriculum)) {
  Object.assign(EDITORIAL_OPTION_SETS[id], { topicId, subtopic, chapterId });
}

export function getEditorialOptionSet(questionId) {
  return EDITORIAL_OPTION_SETS[questionId] || null;
}
