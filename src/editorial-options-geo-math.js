// Explicit distractors for the Geography and Mathematics seed questions.
// Rationales are editorial notes for review and are not shown as factual citations.
const d = (text, rationale) => ({ text, rationale });
const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });

export const GEOGRAPHY_MATH_OPTION_SETS = {
  'geography-001': set('Australian cities', [
    d('Sydney', 'Sydney is Australia’s largest city, but Canberra is the national capital.'),
    d('Melbourne', 'Melbourne is a major Australian city, but it is not the national capital.'),
    d('Perth', 'Perth is a state capital in Australia, not the capital of the country.'),
  ]),
  'geography-002': set('African rivers', [
    d('Congo River', 'The Congo flows west to the Atlantic, rather than through Egypt to the Mediterranean.'),
    d('Niger River', 'The Niger flows through West Africa and reaches the Gulf of Guinea.'),
    d('Zambezi River', 'The Zambezi flows southeast to the Indian Ocean, not north through Egypt.'),
  ]),
  'geography-003': set('hot deserts', [
    d('Arabian Desert', 'The Arabian Desert is a major hot desert, but its area is smaller than the Sahara’s.'),
    d('Kalahari Desert', 'The Kalahari is a southern African desert region and is much smaller than the Sahara.'),
    d('Thar Desert', 'The Thar is a hot desert in South Asia, but it is far smaller than the Sahara.'),
  ]),
  'geography-004': set('European mountain ranges', [
    d('Alps', 'The Alps are a European range, but they do not form the France–Spain border.'),
    d('Apennines', 'The Apennines run along the Italian peninsula, not between France and Spain.'),
    d('Carpathians', 'The Carpathians arc through Central and Eastern Europe, away from the France–Spain border.'),
  ]),
  'geography-005': set('continents', [
    d('Africa', 'Africa contains tropical rainforest, but the Amazon rainforest is in South America.'),
    d('Asia', 'Asia has extensive forests, but it does not contain the Amazon rainforest.'),
    d('North America', 'North America has rainforest regions, but the Amazon is in South America.'),
  ]),
  'geography-006': set('East African capitals', [
    d('Kampala', 'Kampala is the capital of Uganda, not Kenya.'),
    d('Dodoma', 'Dodoma is the capital of Tanzania, not Kenya.'),
    d('Kigali', 'Kigali is the capital of Rwanda, not Kenya.'),
  ]),
  'geography-007': set('seas', [
    d('Black Sea', 'The Black Sea lies between parts of Europe and Asia, not between Europe and Africa.'),
    d('Red Sea', 'The Red Sea separates northeastern Africa from the Arabian Peninsula, not Europe from Africa.'),
    d('Baltic Sea', 'The Baltic Sea is in northern Europe and does not border Africa.'),
  ]),
  'geography-008': set('high mountain peaks', [
    d('K2', 'K2 is the world’s second-highest mountain above sea level, below Everest.'),
    d('Kangchenjunga', 'Kangchenjunga is among the highest peaks, but it is lower than Everest.'),
    d('Lhotse', 'Lhotse is a very high Himalayan peak, but it is lower than Everest.'),
  ]),
  'geography-009': set('Nordic countries', [
    d('Norway', 'Norway is a nearby Nordic country, but it does not occupy the island of Iceland.'),
    d('Denmark', 'Denmark is a Nordic country, but Iceland is a separate country.'),
    d('Sweden', 'Sweden is a Nordic country, but it does not occupy Iceland.'),
  ], { question:'Which country has Reykjavík as its capital?' }),
  'geography-010': set('Canadian cities', [
    d('Toronto', 'Toronto is Canada’s largest city, but Ottawa is the national capital.'),
    d('Montreal', 'Montreal is a major Canadian city, but it is not the national capital.'),
    d('Vancouver', 'Vancouver is a major Canadian city, but Ottawa is the national capital.'),
  ]),
  'geography-011': set('oceans', [
    d('Atlantic Ocean', 'The Atlantic borders eastern North America, not California’s west coast.'),
    d('Indian Ocean', 'The Indian Ocean is far from California and does not border it.'),
    d('Arctic Ocean', 'The Arctic Ocean lies around the Arctic, not along California.'),
  ]),
  'geography-012': set('large islands', [
    d('New Guinea', 'New Guinea is one of the largest islands, but Greenland is larger.'),
    d('Borneo', 'Borneo is a large island in Southeast Asia, but it is smaller than Greenland.'),
    d('Madagascar', 'Madagascar is a large island off Africa, but it is smaller than Greenland.'),
  ]),
  'geography-013': set('European rivers', [
    d('Seine', 'The Seine flows through Paris, not London.'),
    d('Danube', 'The Danube flows through several Central and Eastern European cities, not London.'),
    d('Tiber', 'The Tiber flows through Rome, not London.'),
  ]),
  'geography-014': set('Middle Eastern countries', [
    d('Egypt', 'Egypt is home to many ancient sites, but Petra is in Jordan.'),
    d('Lebanon', 'Lebanon is a neighboring country, but Petra is not within its borders.'),
    d('Saudi Arabia', 'Saudi Arabia borders Jordan, but Petra is in Jordan.'),
  ]),
  'geography-015': set('South American capitals', [
    d('Santiago', 'Santiago is the capital of Chile, not Argentina.'),
    d('Montevideo', 'Montevideo is the capital of Uruguay, not Argentina.'),
    d('Lima', 'Lima is the capital of Peru, not Argentina.'),
  ]),
  'geography-016': set('international straits', [
    d('Strait of Dover', 'The Strait of Dover separates England and France, not Spain and Morocco.'),
    d('Bosporus Strait', 'The Bosporus separates parts of Europe and Asia near Istanbul.'),
    d('Strait of Hormuz', 'The Strait of Hormuz lies between Iran and the Arabian Peninsula.'),
  ]),
  'geography-017': set('Eastern European countries', [
    d('Hungary', 'Hungary borders Romania, but Transylvania is within Romania.'),
    d('Bulgaria', 'Bulgaria is a neighboring country to the south, not the country containing Transylvania.'),
    d('Serbia', 'Serbia borders Romania, but Transylvania is a historic region of Romania.'),
  ]),
  'geography-018': set('South Pacific capitals', [
    d('Suva', 'Suva is the capital of Fiji, not New Zealand.'),
    d('Port Moresby', 'Port Moresby is the capital of Papua New Guinea, not New Zealand.'),
    d('Canberra', 'Canberra is the capital of Australia, not New Zealand.'),
  ]),
  'geography-019': set('deep lakes', [
    d('Lake Tanganyika', 'Lake Tanganyika is exceptionally deep, but Lake Baikal is deeper.'),
    d('Lake Malawi', 'Lake Malawi is a deep African lake, but it is not as deep as Lake Baikal.'),
    d('Lake Superior', 'Lake Superior is the largest freshwater lake by surface area, but not the deepest.'),
  ]),
  'geography-020': set('Southwestern United States states', [
    d('Utah', 'Utah borders Arizona, but the Grand Canyon is in Arizona.'),
    d('Nevada', 'Nevada is a neighboring southwestern state, but the Grand Canyon is in Arizona.'),
    d('New Mexico', 'New Mexico borders Arizona, but the Grand Canyon is in Arizona.'),
  ]),

  'math-001': set('decimal approximations of pi', [
    d('3.41', 'Pi begins 3.14159…, which rounds to 3.14 rather than 3.41.'),
    d('3.04', 'This changes the hundredths value; rounding pi to two decimal places gives 3.14.'),
    d('3.15', 'The third decimal digit of pi is 1, so 3.141… rounds down to 3.14.'),
  ]),
  'math-002': set('common angle measures', [
    d('45 degrees', '45 degrees is an acute angle; a right angle measures 90 degrees.'),
    d('180 degrees', '180 degrees is a straight angle, twice the measure of a right angle.'),
    d('360 degrees', '360 degrees is a full turn, four times the measure of a right angle.'),
  ]),
  'math-003': set('square roots', [
    d('8', '8 squared is 64, not 81.'),
    d('10', '10 squared is 100, not 81.'),
    d('7', '7 squared is 49, not 81.'),
  ]),
  'math-004': set('small prime candidates', [
    d('1', '1 is not prime because it has only one positive divisor, rather than exactly two.'),
    d('3', '3 is prime, but it is larger than 2.'),
    d('5', '5 is prime, but it is larger than 2.'),
  ]),
  'math-005': set('triangle angle sums', [
    d('90 degrees', '90 degrees is the measure of a right angle; it is not the sum of a Euclidean triangle’s interior angles.'),
    d('360 degrees', '360 degrees is a full turn and is the interior-angle sum for a quadrilateral, not a triangle.'),
    d('540 degrees', '540 degrees is the interior-angle sum of a pentagon, not a triangle.'),
  ]),
  'math-006': set('squares of nearby integers', [
    d('24', '24 is 12 multiplied by 2; squaring 12 means multiplying 12 by itself.'),
    d('120', '120 is 12 multiplied by 10, not 12 multiplied by 12.'),
    d('132', '132 is 12 multiplied by 11; squaring requires two factors of 12.'),
  ]),
  'math-007': set('prime numbers near eleven', [
    d('9', '9 is composite because it is divisible by 3.'),
    d('10', '10 is even and composite.'),
    d('13', '13 is prime, but 11 is the first prime greater than 7.'),
  ]),
  'math-008': set('polygon side counts', [
    d('10', 'A ten-sided polygon is a decagon.'),
    d('11', 'An eleven-sided polygon is an undecagon.'),
    d('14', 'A fourteen-sided polygon has two more sides than a dodecagon.'),
  ]),
  'math-009': set('statistics for a small data set', [
    d('2', '2 is the smallest value, not the middle value after ordering 2, 5, and 9.'),
    d('9', '9 is the largest value, not the middle value.'),
    d('16/3', '16/3 is the mean of the three values; the median is the middle value.'),
  ]),
  'math-010': set('percentage calculations', [
    d('15', '15 is 15 percent of 100; the question asks for 15 percent of 200.'),
    d('20', '20 is 10 percent of 200, not 15 percent.'),
    d('3000', 'This multiplies 15 by 200 without converting 15 percent to 0.15.'),
  ]),
  'math-011': set('square perimeter calculations', [
    d('8', '8 is twice the side length, not the total length of all four sides.'),
    d('12', '12 counts three sides of length 4 and omits the fourth side.'),
    d('20', 'A square with side 4 has four equal sides, whose lengths total 16.'),
  ]),
  'math-012': set('coin-toss probabilities', [
    d('One third', 'A fair coin has two equally likely outcomes, so heads has probability 1/2.'),
    d('One quarter', 'One quarter would require four equally likely outcomes, not the two sides of a coin.'),
    d('Two thirds', 'A fair coin gives heads on one of two equally likely outcomes, not two of three.'),
  ]),
  'math-013': set('Roman numerals', [
    d('X', 'X represents 10 in Roman numerals, not 50.'),
    d('C', 'C represents 100 in Roman numerals, not 50.'),
    d('V', 'V represents 5 in Roman numerals, not 50.'),
  ]),
  'math-014': set('polygon names', [
    d('Quadrilateral', 'A quadrilateral has four sides.'),
    d('Hexagon', 'A hexagon has six sides.'),
    d('Octagon', 'An octagon has eight sides.'),
  ]),
  'math-015': set('line slopes', [
    d('1', 'A slope of 1 means the line rises one unit for each unit moved horizontally.'),
    d('Undefined', 'An undefined slope describes a vertical line, not a horizontal line.'),
    d('-1', 'A slope of -1 describes a line that falls as x increases.'),
  ]),
  'math-016': set('factorials', [
    d('720', '720 is 6 factorial; 7 factorial includes the additional factor of 7.'),
    d('40320', '40320 is 8 factorial, one factor larger than 7 factorial.'),
    d('504', '504 omits a factor in the product 7×6×5×4×3×2×1.'),
  ]),
  'math-017': set('counts of cube features', [
    d('8', 'A cube has 8 vertices, but the question asks for its faces.'),
    d('12', 'A cube has 12 edges, but the question asks for its faces.'),
    d('4', 'A tetrahedron has 4 faces; a cube has 6.'),
  ]),
  'math-018': set('number identities', [
    d('Two', 'Two is a number, but adding 2 changes a value rather than leaving it unchanged.'),
    d('Negative one', 'Negative one is the additive inverse of 1, not the number that leaves every sum unchanged.'),
    d('Multiplicative identity', 'The multiplicative identity is 1; the question asks for the identity of addition.'),
  ]),
  'math-019': set('sums of initial positive integers', [
    d('10', '10 is the sum of the first four positive integers, 1+2+3+4.'),
    d('14', '14 is an arithmetic slip; adding 1+2+3+4+5 gives 15.'),
    d('30', '30 is the sum of the first five positive even integers, not the first five positive integers.'),
  ]),
  'math-020': set('number classifications', [
    d('Composite number', 'A composite number has more than two positive divisors.'),
    d('Integer', 'An integer is any whole number or its negative; this does not specify the two-divisor property.'),
    d('Rational number', 'A rational number can be written as a ratio of integers; many are not prime.'),
  ], { question:'Which term describes an integer greater than 1 with exactly two positive divisors?' }),
};

const TOPIC_DETAILS = {
  'geography-001':['national-capitals','Capitals of Australia and Oceania',9],
  'geography-002':['african-rivers','Major African rivers',2],
  'geography-003':['hot-deserts','Major hot deserts',3],
  'geography-004':['european-mountains','Mountain ranges and borders',1],
  'geography-005':['rainforest-regions','Tropical rainforest regions',6],
  'geography-006':['east-african-capitals','Capitals of East Africa',9],
  'geography-007':['seas-and-regions','Seas between continents',5],
  'geography-008':['high-mountains','World’s highest mountain peaks',1],
  'geography-009':['nordic-capitals','Nordic countries and capitals',10],
  'geography-010':['north-american-capitals','Capitals of North America',9],
  'geography-011':['pacific-coast','Oceans and coastlines',5],
  'geography-012':['large-islands','World’s largest islands',4],
  'geography-013':['european-rivers','Rivers through European cities',2],
  'geography-014':['middle-east-landmarks','Countries and archaeological landmarks',8],
  'geography-015':['south-american-capitals','Capitals of South America',9],
  'geography-016':['international-straits','Straits and maritime passages',5],
  'geography-017':['transylvania','Regions of Eastern Europe',8],
  'geography-018':['oceania-capitals','Capitals of Oceania',9],
  'geography-019':['deep-lakes','Deep freshwater lakes',2],
  'geography-020':['grand-canyon','Landforms of the American Southwest',8],
  'math-001':['decimal-approximation','Decimals and numerical constants',1],
  'math-002':['angle-measure','Angle measurement',8],
  'math-003':['square-roots','Roots and powers',1],
  'math-004':['prime-numbers','Prime numbers and divisibility',1],
  'math-005':['triangle-geometry','Triangle angle properties',8],
  'math-006':['squares-and-powers','Powers and multiplication',7],
  'math-007':['prime-numbers','Prime numbers and divisibility',1],
  'math-008':['polygon-classification','Polygon names and side counts',8],
  'math-009':['median-and-data','Data summaries and medians',6],
  'math-010':['percentages','Fractions, percentages, and proportions',3],
  'math-011':['perimeter','Measurement and perimeter',6],
  'math-012':['probability','Probability and chance',5],
  'math-013':['roman-numerals','Numerical representations',1],
  'math-014':['polygon-classification','Polygon names and side counts',8],
  'math-015':['linear-slope','Algebra and linear relationships',7],
  'math-016':['factorials','Products and factorials',1],
  'math-017':['solid-geometry','Polyhedra and their properties',2],
  'math-018':['identity-properties','Additive and multiplicative identities',7],
  'math-019':['integer-sums','Number patterns and sums',1],
  'math-020':['prime-numbers','Prime numbers and divisibility',1],
};

for (const [id, [topicId, subtopic, chapterId]] of Object.entries(TOPIC_DETAILS)) {
  Object.assign(GEOGRAPHY_MATH_OPTION_SETS[id], { topicId, subtopic, chapterId });
}
