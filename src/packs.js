import { SPACE_QUESTIONS } from './questions.js';
import { getEditorialOptionSet } from './editorial-options.js';
import { SPACE_QUESTION_ADDITIONS_A } from './question-additions-space-a.js';
import { SPACE_ADDITIONS_B } from './question-additions-space-b.js';
import { BIOLOGY_QUESTION_ADDITIONS } from './question-additions-biology.js';
import { HISTORY_QUESTION_ADDITIONS } from './question-additions-history.js';
import { GEOGRAPHY_QUESTION_ADDITIONS } from './question-additions-geography.js';
import { SCIENCE_QUESTION_ADDITIONS } from './question-additions-science.js';
import { GROUP_A_QUESTION_ADDITIONS } from './question-additions-group-a.js';
import { GROUP_B_QUESTION_ADDITIONS } from './question-additions-group-b.js';
import { GROUP_C_QUESTION_ADDITIONS } from './question-additions-group-c.js';
import { GROUP_D_QUESTION_ADDITIONS } from './question-additions-group-d.js';
import { WORLD_BY_ID } from './catalog.js';
import { MAP_DATA_RECORDS, TIMELINE_DATA_RECORDS, SEQUENCE_DATA_RECORDS, IMAGE_DATA_RECORDS } from './interaction-data.js';

// Each row is: question | correct answer | short explanation | difficulty.
// Pack references are editorial starting points; production releases still need claim-level review.
const definitions = {
  general: { topic:'Everyday knowledge', source:'https://www.britannica.com/', facts:`
What is the largest ocean on Earth?|Pacific Ocean|The Pacific covers more area than any other ocean.|easy
Which language is primarily spoken in Brazil?|Portuguese|Brazil was colonized by Portugal, and Portuguese is its official language.|easy
What is the capital city of Japan?|Tokyo|Tokyo is Japan’s capital and largest metropolitan area.|easy
Which instrument measures temperature?|Thermometer|A thermometer measures how hot or cold something is.|easy
How many sides does a hexagon have?|Six|The prefix hexa means six, so a hexagon has six sides.|easy
What is the currency used in Japan?|Yen|The yen is Japan’s official currency.|easy
Which direction does the Sun rise from?|East|Earth’s rotation makes the Sun appear to rise in the east.|easy
What is the name for a word with the opposite meaning of another word?|Antonym|An antonym expresses the opposite meaning of a word.|medium
Which gas do humans need to breathe to live?|Oxygen|Human cells use oxygen during cellular respiration.|easy
What is the largest land animal alive today?|African elephant|The African bush elephant is the largest living land animal.|medium
Which metal is liquid at ordinary room temperature?|Mercury|Mercury remains liquid at typical indoor temperatures.|medium
What do bees collect from flowers to make honey?|Nectar|Worker bees collect nectar and transform it into honey.|easy
What is the name of the shape with eight sides?|Octagon|An octagon has eight sides and eight angles.|easy
Which planet is known as Earth’s twin by size?|Venus|Venus is similar to Earth in size, though very different in conditions.|easy
What is the main ingredient in traditional glass?|Silica|Most common glass is made primarily from silica sand.|medium
Which continent contains the Sahara Desert?|Africa|The Sahara stretches across northern Africa.|easy
What is the process of water changing from liquid to gas called?|Evaporation|Evaporation occurs when liquid water gains enough energy to become vapor.|medium
How many colors are traditionally named in a rainbow?|Seven|The traditional list names red, orange, yellow, green, blue, indigo, and violet.|easy
Which body part contains the smallest bones in the human body?|Middle ear|The malleus, incus, and stapes are tiny bones in the middle ear.|medium
What is the name for an animal that eats both plants and animals?|Omnivore|Omnivores consume food from both plant and animal sources.|easy` },
  science: { topic:'Foundational science', source:'https://www.nationalacademies.org/', facts:`
What is the basic unit of a chemical element?|Atom|An atom is the smallest unit that retains an element’s chemical identity.|easy
Which state of matter has a fixed volume but no fixed shape?|Liquid|A liquid keeps its volume while taking the shape of its container.|easy
What force pulls objects toward Earth?|Gravity|Earth’s gravitational attraction pulls objects toward its center.|easy
What do plants use to capture energy from sunlight?|Chlorophyll|Chlorophyll pigments absorb light that powers photosynthesis.|easy
What is the center of an atom called?|Nucleus|The nucleus contains protons and neutrons at the center of an atom.|easy
What is the change from solid directly to gas called?|Sublimation|Sublimation skips the liquid state as a solid becomes gas.|medium
Which particle has a negative electric charge?|Electron|Electrons carry a negative elementary electric charge.|easy
What is the SI unit of force?|Newton|The newton is the SI derived unit used to measure force.|medium
What type of energy is stored in a stretched spring?|Elastic potential energy|A deformed spring stores elastic potential energy.|medium
What is the term for an organism’s role in its ecosystem?|Niche|An ecological niche describes how a species lives and interacts with its environment.|medium
Which instrument is used to observe very small objects?|Microscope|A microscope magnifies details too small to see unaided.|easy
What is the SI unit of electric current?|Ampere|The ampere is the SI base unit for electric current.|medium
What do we call animals that maintain a stable internal body temperature?|Endotherms|Endotherms produce enough internal heat to regulate body temperature.|medium
Which part of the cell contains most genetic material in humans?|Nucleus|Most human-cell DNA is stored in the nucleus.|easy
What is the process by which a liquid turns into a solid?|Freezing|Freezing is the transition from liquid to solid as heat is removed.|easy
What type of rock forms when magma or lava cools?|Igneous rock|Igneous rocks form from cooled and solidified molten rock.|medium
What is the name for a testable explanation in science?|Hypothesis|A scientific hypothesis is a proposed explanation that can be tested.|easy
Which layer of Earth lies directly beneath the crust?|Mantle|Earth’s mantle lies below the crust and above the outer core.|medium
What is the bending of light as it changes medium called?|Refraction|Light changes direction when its speed changes between materials.|medium
What is the term for the variety of life in an area?|Biodiversity|Biodiversity describes variation among living organisms and ecosystems.|easy` },
  technology: { topic:'Computing and technology', source:'https://computerhistory.org/', facts:`
What does CPU stand for?|Central processing unit|The CPU executes instructions and coordinates many computer operations.|easy
Which two digits form the binary number system?|Zero and one|Binary represents values using only 0 and 1.|easy
What does URL stand for?|Uniform Resource Locator|A URL identifies the address of a resource on a network.|medium
Which company created the Windows operating system?|Microsoft|Microsoft developed the Windows family of operating systems.|easy
What does HTML describe?|Web page structure|HTML marks up the structure and meaning of web content.|easy
What does RAM provide to a computer?|Short-term working memory|RAM holds data and instructions that the processor is actively using.|easy
Which device converts digital signals into a printed page?|Printer|A printer produces a physical copy of digital text or images.|easy
What does USB stand for?|Universal Serial Bus|USB is a standard for connecting devices and transferring data or power.|medium
What is software with publicly available source code often called?|Open-source software|Open-source licenses let users inspect and modify the source under stated terms.|medium
Which part of a computer displays visual output?|Monitor|A monitor presents visual information from the computer.|easy
What does Wi-Fi allow devices to do?|Connect wirelessly to a network|Wi-Fi uses radio communication to connect devices to local networks.|easy
What is a small picture that represents an app or file called?|Icon|An icon is a compact visual symbol for an app, file, or action.|easy
What does the file extension .jpg usually indicate?|JPEG image|The extension commonly identifies an image encoded with JPEG compression.|easy
What is a program that helps a computer access websites?|Web browser|Browsers request, interpret, and display web pages.|easy
What is the name for a network of connected devices around the world?|Internet|The Internet is a global network of interconnected computer networks.|medium
What does GPS stand for?|Global Positioning System|GPS is a satellite-based system used to determine location and time.|easy
What is the main purpose of a computer backup?|Preserve a recoverable copy of data|Backups allow data to be restored after loss, damage, or mistakes.|medium
What does an algorithm provide to a computer?|A step-by-step procedure|An algorithm is a defined sequence of steps for solving a problem.|medium
Which storage device has no moving parts and uses flash memory?|Solid-state drive|An SSD stores data in flash memory rather than spinning disks.|medium
What does two-factor authentication add to a login?|A second verification step|Two-factor authentication requires another proof beyond a password.|medium` },
  ai: { topic:'Artificial intelligence', source:'https://ai.stanford.edu/', facts:`
What is machine learning?|A way for computers to learn patterns from data|Machine-learning systems improve task performance by learning from examples or data.|easy
What does AI stand for?|Artificial intelligence|AI refers broadly to computer systems performing tasks associated with intelligence.|easy
What is a neural network loosely inspired by?|Connections between biological neurons|Artificial neural networks use connected computational units inspired by brains.|easy
What is training data used for in machine learning?|Teaching a model patterns|Training data provides examples from which a model adjusts its parameters.|easy
What is an AI system’s output based on a prompt called?|A response|A prompt supplies input or instructions and the system produces a response.|easy
What does computer vision help a system interpret?|Images and video|Computer vision methods analyze visual information such as images and video.|easy
What is natural language processing concerned with?|Human language|NLP studies methods for computers to process and generate human language.|easy
What is overfitting in machine learning?|Learning training examples too specifically|An overfit model performs well on training data but poorly on new data.|medium
What is a chatbot designed to do?|Conduct a text or voice conversation|A chatbot interacts with people through conversational messages or speech.|easy
What is a model parameter?|A value learned or adjusted during training|Parameters are values a model changes during training to fit data.|medium
What is a hallucination in generative AI?|A plausible-sounding but unsupported output|The term describes generated content that is inaccurate or not grounded in evidence.|medium
What is a dataset?|A collection of related data|Datasets organize examples used for analysis, training, or evaluation.|easy
What does a classifier predict?|A category or label|A classifier maps an input to one or more categories.|medium
What is reinforcement learning based on?|Actions and reward signals|An agent learns a policy through interactions and feedback expressed as rewards.|medium
Why is a test dataset kept separate from training data?|To measure performance on unseen examples|A separate test set helps estimate how a model generalizes.|medium
What does generative AI aim to produce?|New content from learned patterns|Generative systems create outputs such as text, images, audio, or code.|easy
What is bias in an AI system?|A systematic skew in outcomes|Bias can arise from data, design choices, or deployment context.|medium
What is a large language model trained primarily to work with?|Text and language|LLMs learn statistical patterns in language and can generate or transform text.|easy
What does a recommendation system suggest?|Items a user may find relevant|Recommendation systems rank likely useful items based on data and signals.|medium
What is an AI evaluation benchmark?|A standardized way to compare system performance|Benchmarks use defined tasks and metrics to evaluate systems.|medium` },
  history: { topic:'World history', source:'https://www.britannica.com/topic/history', facts:`
Which ancient civilization built the pyramids at Giza?|Ancient Egyptians|The pyramids at Giza were built as royal tombs in ancient Egypt.|easy
Which city was the center of the Roman Empire?|Rome|Rome was the capital and political center of the Roman state for centuries.|easy
In which year did the Berlin Wall fall?|1989|The Berlin Wall opened in November 1989 during major political changes in Europe.|easy
Who was the first president of the United States?|George Washington|Washington served as the first U.S. president from 1789 to 1797.|easy
Which ship carried the Pilgrims to North America in 1620?|Mayflower|The Mayflower carried English separatists to the region later called New England.|easy
Which empire built the road network centered on Cusco?|Inca Empire|The Inca built an extensive road system across the Andes, centered on Cusco.|medium
Who was the first woman to fly solo across the Atlantic Ocean?|Amelia Earhart|Earhart completed her solo transatlantic flight in 1932.|medium
Which revolution began in France in 1789?|French Revolution|The French Revolution began in 1789 and transformed France’s political order.|easy
Which ancient writing system used wedge-shaped marks?|Cuneiform|Cuneiform was pressed into clay by scribes in ancient Mesopotamia.|medium
Who led India’s nonviolent independence movement widely known as satyagraha?|Mahatma Gandhi|Gandhi became a central leader of India’s independence movement.|medium
Which city was buried by the eruption of Mount Vesuvius in 79 CE?|Pompeii|The eruption buried Pompeii and neighboring settlements under ash and debris.|easy
Which explorer’s 1492 voyage reached the Caribbean?|Christopher Columbus|Columbus’s 1492 expedition reached islands in the Caribbean.|easy
What was the name of the trade route linking East Asia with the Mediterranean?|Silk Road|The Silk Road was a network of routes carrying goods and ideas across Eurasia.|medium
Which document limited the English king’s power in 1215?|Magna Carta|Magna Carta established that the king was subject to the law.|medium
Who was the first emperor of Rome?|Augustus|Augustus became Rome’s first emperor after the Republic’s civil wars.|medium
Which ancient Greek city is associated with the birthplace of democracy?|Athens|Athens developed an early form of direct democracy for its citizens.|easy
Which war ended with the armistice of November 11, 1918?|World War I|The armistice ended fighting on the Western Front of World War I.|medium
Who was the first person to reach the South Pole?|Roald Amundsen|Amundsen’s Norwegian expedition reached the South Pole in December 1911.|medium
Which civilization developed the hieroglyphic writing system along the Nile?|Ancient Egyptians|Egyptian hieroglyphs were used in monuments and documents for millennia.|easy
What was the name of the first artificial satellite launched in 1957?|Sputnik 1|The Soviet Union launched Sputnik 1, beginning the space age.|easy` },
  geography: { topic:'World geography', source:'https://education.nationalgeographic.org/', facts:`
What is the capital of Australia?|Canberra|Canberra is Australia’s capital city, located between Sydney and Melbourne.|easy
Which river flows through Egypt and into the Mediterranean Sea?|Nile|The Nile flows north through northeastern Africa to the Mediterranean.|easy
What is the world’s largest hot desert?|Sahara|The Sahara is the largest hot desert and spans much of North Africa.|easy
Which mountain range separates France and Spain?|Pyrenees|The Pyrenees form a natural border between France and Spain.|easy
Which continent contains the Amazon rainforest?|South America|Most of the Amazon rainforest lies in Brazil and neighboring South American countries.|easy
What is the capital of Kenya?|Nairobi|Nairobi is Kenya’s capital and largest city.|easy
Which sea lies between Europe and Africa?|Mediterranean Sea|The Mediterranean lies between southern Europe and northern Africa.|easy
What is the highest mountain above sea level?|Mount Everest|Mount Everest is the highest mountain above sea level, in the Himalaya.|easy
Which country occupies most of the island of Iceland?|Iceland|The island of Iceland is an independent country in the North Atlantic.|easy
What is the capital of Canada?|Ottawa|Ottawa is Canada’s capital, in the province of Ontario.|easy
Which ocean borders California to the west?|Pacific Ocean|California’s western coastline meets the Pacific Ocean.|easy
What is the largest island in the world, excluding continents?|Greenland|Greenland is generally recognized as the world’s largest island.|medium
Which river runs through London?|River Thames|The Thames flows through London and onward to the North Sea.|easy
Which country is home to the ancient city of Petra?|Jordan|Petra is an archaeological city in southern Jordan.|easy
What is the capital of Argentina?|Buenos Aires|Buenos Aires is Argentina’s capital and largest city.|easy
Which strait separates Spain from Morocco?|Strait of Gibraltar|The Strait of Gibraltar connects the Atlantic Ocean with the Mediterranean Sea.|medium
Which country contains the region of Transylvania?|Romania|Transylvania is a historic region in central Romania.|medium
What is the capital of New Zealand?|Wellington|Wellington is New Zealand’s capital, on the North Island.|easy
Which lake is the deepest in the world?|Lake Baikal|Lake Baikal in Siberia is the world’s deepest freshwater lake.|medium
Which U.S. state contains the Grand Canyon?|Arizona|The Grand Canyon is located in northern Arizona.|easy` },
  math: { topic:'Mathematics', source:'https://www.khanacademy.org/math', facts:`
What is the value of pi rounded to two decimal places?|3.14|Pi is approximately 3.14159, which rounds to 3.14.|easy
How many degrees are in a right angle?|90|A right angle measures exactly 90 degrees.|easy
What is the square root of 81?|9|Nine multiplied by nine equals 81.|easy
What is the smallest prime number?|2|Two is prime and is the only even prime number.|easy
What is the sum of the interior angles of a triangle?|180 degrees|A Euclidean triangle’s interior angles sum to 180 degrees.|easy
What is 12 squared?|144|Twelve multiplied by twelve equals 144.|easy
What is the next prime number after 7?|11|Eleven has no positive divisors other than 1 and itself.|easy
How many sides does a dodecagon have?|12|A dodecagon is a polygon with twelve sides.|easy
What is the median of 2, 5, and 9?|5|The median is the middle value after numbers are ordered.|easy
What is 15 percent of 200?|30|Fifteen hundredths of 200 is 30.|easy
What is the perimeter of a square with side length 4?|16|A square has four equal sides, so its perimeter is four times the side length.|easy
What is the probability of heads on a fair coin toss?|One half|A fair coin has two equally likely outcomes.|easy
What is the Roman numeral for 50?|L|In Roman numerals, L represents fifty.|medium
What is the name of a polygon with five sides?|Pentagon|A pentagon has five sides and five angles.|easy
What is the slope of a horizontal line?|Zero|A horizontal line has no vertical change as x changes.|medium
What is 7 factorial?|5040|Seven factorial is the product 7×6×5×4×3×2×1.|medium
How many faces does a cube have?|6|A cube has six square faces.|easy
What is the additive identity?|Zero|Adding zero leaves any number unchanged.|medium
What is the sum of the first five positive integers?|15|One plus two plus three plus four plus five equals fifteen.|easy
What is the name for a number divisible only by 1 and itself?|Prime number|A prime number has exactly two positive divisors.|easy` },
  physics: { topic:'Physics', source:'https://openstax.org/subjects/science', facts:`
What is the SI unit of energy?|Joule|The joule is the SI derived unit for energy and work.|easy
What is the approximate acceleration due to gravity near Earth’s surface?|9.8 meters per second squared|Near Earth’s surface, free-fall acceleration is about 9.8 m/s².|medium
Which law states that every action has an equal and opposite reaction?|Newton’s third law|Newton’s third law describes paired forces between interacting bodies.|easy
What is the SI unit of electric charge?|Coulomb|The coulomb is the SI unit for electric charge.|medium
What kind of wave is sound in air?|Longitudinal wave|Sound in air travels as compressions and rarefactions along its direction of travel.|medium
What is the SI unit of power?|Watt|One watt is one joule of energy transferred per second.|easy
What happens to the pitch of a sound as its frequency rises?|It becomes higher|Pitch is the perceptual quality that generally increases with sound frequency.|easy
Which particle in an atom has no electric charge?|Neutron|Neutrons are electrically neutral particles in the atomic nucleus.|easy
What is the resistance of a circuit measured in?|Ohms|The ohm is the SI derived unit of electrical resistance.|easy
What is the bending of a wave around an obstacle called?|Diffraction|Diffraction is the spreading of waves around obstacles or through openings.|medium
Which type of lens converges parallel rays of light?|Convex lens|A convex lens bends parallel rays toward a focal point.|medium
What is the SI unit of frequency?|Hertz|One hertz equals one cycle per second.|easy
What does inertia describe?|Resistance to a change in motion|Inertia is an object’s tendency to maintain its state of motion.|medium
What is the approximate speed of sound in room-temperature air?|343 meters per second|Sound travels at roughly 343 m/s in air near 20°C.|medium
Which electromagnetic waves have the longest wavelength?|Radio waves|Radio waves occupy the long-wavelength end of the electromagnetic spectrum.|medium
What is the energy of motion called?|Kinetic energy|An object’s kinetic energy is associated with its motion.|easy
What is the SI unit of pressure?|Pascal|The pascal is one newton per square meter.|medium
What happens to electrical resistance in a typical metal as temperature rises?|It increases|In most metals, increased lattice vibration raises resistance.|hard
What is the point where a lever pivots called?|Fulcrum|A lever rotates around its fulcrum.|easy
What kind of mirror forms an upright virtual image when the object is close?|Concave mirror|A concave mirror can produce an upright virtual image when the object lies inside its focal length.|hard` },
  chemistry: { topic:'Chemistry', source:'https://www.acs.org/education.html', facts:`
What is the chemical symbol for water?|H2O|A water molecule contains two hydrogen atoms and one oxygen atom.|easy
What is the pH of a neutral solution at room temperature?|7|At about 25°C, a neutral aqueous solution has a pH close to 7.|easy
Which gas makes up most of Earth’s atmosphere?|Nitrogen|Nitrogen accounts for about 78 percent of dry air by volume.|easy
What is the chemical symbol for gold?|Au|Au comes from the Latin name aurum for gold.|easy
What is the smallest unit of an element that keeps its identity?|Atom|Atoms retain the chemical identity of their element.|easy
Which subatomic particle carries a positive charge?|Proton|Protons have a positive elementary electric charge.|easy
What is the chemical formula of table salt?|NaCl|Sodium chloride is composed of sodium and chloride ions.|easy
What is the name for a substance that speeds a reaction without being consumed?|Catalyst|A catalyst increases reaction rate and is regenerated during the reaction.|medium
Which element has the symbol Fe?|Iron|Fe comes from the Latin name ferrum.|easy
What type of bond forms when atoms share electron pairs?|Covalent bond|Covalent bonding involves sharing electron pairs between atoms.|medium
What is the chemical symbol for silver?|Ag|Ag is derived from the Latin argentum.|easy
What is the name for a positively charged ion?|Cation|A cation has lost electrons and carries a net positive charge.|medium
Which gas is released when many acids react with carbonates?|Carbon dioxide|Acid-carbonate reactions commonly produce carbon dioxide gas.|medium
What is the common name for sodium bicarbonate?|Baking soda|Sodium bicarbonate is commonly sold as baking soda.|easy
Which element has atomic number 1?|Hydrogen|Hydrogen has one proton in its nucleus, giving it atomic number 1.|easy
What does an oxidation reaction involve in electron terms?|Loss of electrons|Oxidation is defined as the loss of electrons.|medium
Which noble gas is commonly used in bright advertising signs?|Neon|Neon emits a characteristic glow in gas-discharge tubes.|easy
What is the name of the vertical columns in the periodic table?|Groups|Elements in a group share patterns in their chemical properties.|medium
What is the chemical formula for ozone?|O3|An ozone molecule contains three oxygen atoms.|medium
What is a solution with pH below 7 classified as?|Acidic|At room temperature, aqueous solutions below pH 7 are acidic.|easy` },
  biology: { topic:'Biology', source:'https://openstax.org/subjects/science', facts:`
What molecule carries hereditary information in most living organisms?|DNA|DNA stores genetic instructions in most known forms of life.|easy
What is the process plants use to make sugars from light called?|Photosynthesis|Photosynthesis converts light energy into chemical energy stored in sugars.|easy
What is the basic structural unit of life?|Cell|Cells are the smallest units capable of carrying out life processes.|easy
Which cell organelle is often called the powerhouse of the cell?|Mitochondrion|Mitochondria produce much of a eukaryotic cell’s usable energy.|easy
What pigment gives many plants their green color?|Chlorophyll|Chlorophyll absorbs light and reflects green wavelengths.|easy
What is the name for animals with a backbone?|Vertebrates|Vertebrates are animals that possess a vertebral column.|easy
What is the term for an interaction where one species benefits and another is harmed?|Parasitism|Parasitism benefits one organism while harming its host.|medium
What molecule do red blood cells carry to tissues?|Oxygen|Hemoglobin in red blood cells binds and transports oxygen.|easy
What is the study of fungi called?|Mycology|Mycology is the branch of biology concerned with fungi.|medium
What is the transfer of pollen from anther to stigma called?|Pollination|Pollination moves pollen to the female part of a flower.|medium
What do we call an organism that makes its own food?|Autotroph|Autotrophs produce organic material from inorganic sources using energy.|medium
What is the process of cell division that makes two identical daughter cells?|Mitosis|Mitosis distributes duplicated chromosomes into two daughter nuclei.|medium
Which molecules are the building blocks of proteins?|Amino acids|Proteins are chains of amino acids linked by peptide bonds.|easy
What is the term for an animal active mainly at night?|Nocturnal|Nocturnal animals are most active during the night.|easy
Which blood cells help defend the body against infection?|White blood cells|White blood cells are immune cells that help recognize and fight pathogens.|easy
What is the name for a relationship where both species benefit?|Mutualism|In mutualism, both interacting species receive a benefit.|medium
What is the process by which organisms become better suited to environments over generations?|Evolution by natural selection|Natural selection can change inherited traits in populations over generations.|medium
What is a scientist who studies birds called?|Ornithologist|Ornithology is the scientific study of birds.|medium
What term describes an organism’s genetic makeup?|Genotype|A genotype is the genetic constitution of an organism.|medium
Which kingdom includes mushrooms and yeasts?|Fungi|Mushrooms and yeasts are members of the kingdom Fungi.|easy` },
  sports: { topic:'Sports', source:'https://olympics.com/en/sports', facts:`
How many players from one team are on a soccer field during regular play?|11|A soccer team fields eleven players, including the goalkeeper.|easy
In tennis, what word means a score of zero?|Love|Tennis uses the term love for a score of zero.|easy
How many rings appear in the Olympic symbol?|Five|The Olympic symbol has five interlaced rings.|easy
Which sport uses a shuttlecock?|Badminton|Players hit a shuttlecock over a net in badminton.|easy
How many points is a free throw worth in basketball?|One|A successful basketball free throw scores one point.|easy
Which country hosted the first modern Olympic Games in 1896?|Greece|Athens hosted the first modern Olympic Games in 1896.|easy
What surface is traditionally used for the Wimbledon tennis championships?|Grass|Wimbledon is played on grass courts.|medium
In baseball, how many strikes usually retire a batter?|Three|A batter is out after a third strike under standard baseball rules.|easy
What is the length of a marathon in kilometers, approximately?|42.195 kilometers|The official marathon distance is 42.195 kilometers.|medium
Which sport is played in the Tour de France?|Road cycling|The Tour de France is a multi-stage professional road cycling race.|easy
How many players from one team are on court in volleyball?|Six|Indoor volleyball teams have six players on court.|easy
What object is hit in ice hockey?|Puck|Ice hockey players use sticks to move and shoot a puck.|easy
Which sport awards a yellow jersey to the overall leader of the Tour de France?|Cycling|The yellow jersey identifies the Tour’s general classification leader.|medium
In golf, what is one stroke under par on a hole called?|Birdie|A birdie is a score of one under par on a golf hole.|medium
Which swimming stroke is named after an insect?|Butterfly|The butterfly stroke takes its name from the insect’s wing-like arm recovery.|easy
How many bases are on a standard baseball diamond?|Four|A baseball diamond has first, second, and third base plus home plate.|easy
Which combat sport is associated with the phrase “checkmate” on a board?|Chess boxing|Chess boxing alternates rounds of chess and boxing.|hard
How many players from one team are on court in standard basketball?|Five|A standard basketball team has five players on court at a time.|easy
Which race is run over one lap of a standard outdoor athletics track?|400-meter race|A standard outdoor track lap is 400 meters.|medium
What is the term for three goals scored by one player in a game?|Hat trick|A hat trick commonly means one player scores three times in a match.|easy` },
  movies: { topic:'Movies and entertainment', source:'https://www.afi.com/afis-100-years-100-movies/', facts:`
Which film features the character Dorothy and the land of Oz?|The Wizard of Oz|Dorothy travels to Oz in the 1939 film adaptation.|easy
What is the name of the award shaped like a golden statuette given by the Academy?|Oscar|The Academy Award statuette is commonly called an Oscar.|easy
Which film series features the fictional school Hogwarts?|Harry Potter|The Harry Potter films are set largely around Hogwarts School.|easy
What is the person who directs a film called?|Director|A film director guides the creative and dramatic work of a film.|easy
Which animated film features a clownfish named Nemo?|Finding Nemo|Pixar’s Finding Nemo follows Marlin’s search for his son Nemo.|easy
What is the name of the fictional archaeologist played by Harrison Ford?|Indiana Jones|Harrison Ford portrays the adventuring archaeologist Indiana Jones.|easy
Which movie studio created the character Mickey Mouse?|Disney|Walt Disney’s studio created Mickey Mouse, who debuted in 1928.|easy
What is the name of the award for achievement in American television?|Emmy|The Emmy Awards recognize excellence in television.|easy
Which film features the quote “May the Force be with you”?|Star Wars|The phrase is a recurring line in the Star Wars franchise.|easy
What is the term for a film’s written dialogue and action?|Screenplay|A screenplay describes a film’s dialogue, action, and scenes.|medium
Which 1997 film tells a fictional love story aboard an ocean liner?|Titanic|James Cameron’s Titanic centers on a fictional romance aboard the RMS Titanic.|easy
What is a short promotional preview of a film called?|Trailer|A trailer is a short preview used to promote a film.|easy
Which film features the character Elsa and the song “Let It Go”?|Frozen|Elsa sings “Let It Go” in Disney’s animated film Frozen.|easy
What is the name for a film made with animated drawings or models?|Animated film|Animated films create movement by showing a sequence of images.|easy
Which actor played T’Challa in the 2018 film Black Panther?|Chadwick Boseman|Boseman portrayed T’Challa in Marvel’s Black Panther.|medium
What is the fictional African nation in Black Panther called?|Wakanda|Wakanda is the fictional setting of Black Panther.|easy
What is the film technique of combining separate images into a scene called?|Compositing|Compositing combines visual elements from different sources into one image.|hard
Which film features a time-traveling DeLorean car?|Back to the Future|The DeLorean is the time machine in the Back to the Future trilogy.|easy
What is the name of the annual French film festival held in Cannes?|Cannes Film Festival|The Cannes Film Festival is held annually in Cannes, France.|easy
Which 1927 film is often cited as a landmark early feature with synchronized dialogue?|The Jazz Singer|The Jazz Singer helped popularize synchronized spoken dialogue in feature films.|medium` },
  music: { topic:'Music', source:'https://www.britannica.com/art/music', facts:`
How many strings does a standard violin have?|Four|A standard violin has four strings.|easy
Which clef is commonly used for higher-pitched notes?|Treble clef|The treble clef is used for many instruments and higher registers.|easy
What is the speed of music called?|Tempo|Tempo describes how fast or slow a piece of music is performed.|easy
Which instrument has black and white keys and is played with both hands?|Piano|A piano produces sound when keys trigger hammers that strike strings.|easy
What is a group of three musical notes played together called?|Triad|A triad is a three-note chord built from stacked thirds.|medium
Which family does the trumpet belong to?|Brass|The trumpet is a brass instrument sounded by buzzing the lips.|easy
What is the symbol that raises a note by a semitone called?|Sharp|A sharp sign raises a written pitch by one semitone.|medium
Which percussion instrument is shaped like a pair of small kettledrums?|Timpani|Timpani are large orchestral kettle drums tuned to specific pitches.|medium
What is a musical composition for a solo instrument called?|Solo|A solo features one performer or instrument prominently.|easy
Which composer wrote the Four Seasons violin concertos?|Antonio Vivaldi|Vivaldi composed the set of violin concertos known as The Four Seasons.|medium
How many notes are in a standard octave scale using letter names?|Seven|The letter names A through G repeat across octaves.|easy
Which instrument is associated with the Scottish Highlands and a bag of air?|Bagpipes|Bagpipes use an air reservoir and reeds to produce continuous sound.|easy
What is the gradual increase in loudness called?|Crescendo|A crescendo indicates that the music should grow louder gradually.|medium
Which singer is known as the “Queen of Soul”?|Aretha Franklin|Aretha Franklin is widely known by the title Queen of Soul.|easy
What is the lowest common adult male singing voice called?|Bass|Bass is the lowest standard adult male vocal range.|medium
Which instrument is played with a bow and is larger than a violin?|Cello|The cello is a bowed string instrument larger than a violin.|easy
What does the musical marking forte mean?|Loud|Forte instructs performers to play loudly.|easy
Which genre is strongly associated with improvisation and swing rhythms?|Jazz|Jazz often features improvisation and swing, among many styles.|medium
What is the distance between two pitches called?|Interval|A musical interval measures the distance between two pitches.|medium
Which percussion instrument consists of tuned metal bars struck with mallets?|Xylophone|A xylophone produces pitched sounds from wooden bars struck with mallets.|easy` },
  literature: { topic:'Literature and books', source:'https://www.bl.uk/collection-guides/literature', facts:`
Who wrote the play Hamlet?|William Shakespeare|Shakespeare wrote Hamlet, a tragedy about the Danish prince.|easy
Which author created the detective Sherlock Holmes?|Arthur Conan Doyle|Conan Doyle introduced Sherlock Holmes in A Study in Scarlet.|easy
Who wrote the novel Pride and Prejudice?|Jane Austen|Jane Austen published Pride and Prejudice in 1813.|easy
What is the name for a comparison using “like” or “as”?|Simile|A simile compares unlike things using words such as like or as.|easy
Who wrote the fantasy novel The Hobbit?|J. R. R. Tolkien|Tolkien published The Hobbit in 1937.|easy
Which poet wrote The Raven?|Edgar Allan Poe|Poe’s narrative poem The Raven was published in 1845.|easy
What is the main character in a story called?|Protagonist|The protagonist is the central character in a narrative.|easy
Who wrote the novel Frankenstein?|Mary Shelley|Mary Shelley’s Frankenstein was first published in 1818.|easy
Which author created the fictional detective Hercule Poirot?|Agatha Christie|Christie created Poirot, who appears in many of her mysteries.|easy
What is a story’s time and place called?|Setting|Setting describes when and where a story takes place.|easy
Who wrote the epic poem The Odyssey?|Homer|The Odyssey is an ancient Greek epic traditionally attributed to Homer.|medium
What is a fourteen-line poem often written in iambic pentameter called?|Sonnet|A sonnet traditionally has fourteen lines and follows a structured rhyme scheme.|medium
Which author wrote the dystopian novel 1984?|George Orwell|George Orwell published the novel Nineteen Eighty-Four in 1949.|easy
Who wrote the children’s book Charlotte’s Web?|E. B. White|E. B. White wrote Charlotte’s Web, illustrated by Garth Williams.|easy
What is the repetition of initial consonant sounds called?|Alliteration|Alliteration repeats consonant sounds at the beginnings of nearby words.|medium
Which author created the character Tom Sawyer?|Mark Twain|Tom Sawyer appears in novels by American author Mark Twain.|easy
What is a brief story that teaches a moral lesson called?|Fable|A fable is a short tale that often conveys a moral.|easy
Who wrote the novel One Hundred Years of Solitude?|Gabriel García Márquez|García Márquez’s novel follows generations of the Buendía family.|medium
What is a reference to another work or event called in literature?|Allusion|An allusion indirectly refers to another text, person, or event.|medium
Which author wrote The Lion, the Witch and the Wardrobe?|C. S. Lewis|C. S. Lewis wrote the first-published novel in The Chronicles of Narnia.|easy` },
  mythology: { topic:'Mythology', source:'https://www.metmuseum.org/learn/educators/curriculum-resources/art-of-the-ancient-world', facts:`
In Greek mythology, who is the king of the gods?|Zeus|Zeus rules the Olympian gods in Greek mythology.|easy
Which Greek goddess is associated with wisdom?|Athena|Athena is a Greek goddess associated with wisdom and strategic warfare.|easy
What is the name of the Norse realm of the gods?|Asgard|Asgard is the home of the Æsir gods in Norse mythology.|easy
Which Egyptian god is commonly shown with a jackal head?|Anubis|Anubis is associated with funerary rites and is often depicted with a jackal head.|easy
Who is the Greek god of the sea?|Poseidon|Poseidon rules the sea and is one of the major Olympian gods.|easy
Which hero completed twelve famous labors in Greek myth?|Heracles|Heracles, called Hercules in Roman tradition, is famed for the twelve labors.|medium
What is the name of the Norse world tree?|Yggdrasil|Yggdrasil is the immense tree that connects worlds in Norse cosmology.|medium
Which Greek figure flew too close to the Sun with waxen wings?|Icarus|Icarus fell after the wax in his wings melted from the Sun’s heat.|easy
Who is the Greek goddess of the harvest?|Demeter|Demeter is associated with agriculture and the harvest.|easy
What creature has the body of a lion and the head of a human in Egyptian art?|Sphinx|The Great Sphinx of Giza has a lion’s body and a human head.|easy
Which Norse god wields the hammer Mjölnir?|Thor|Thor is the Norse thunder god associated with the hammer Mjölnir.|easy
What is the name of the Greek underworld river associated with the dead?|Styx|The River Styx forms a boundary in Greek accounts of the underworld.|medium
Which Roman god is the counterpart of Greek Ares?|Mars|Mars is the Roman god of war, corresponding broadly to Greek Ares.|medium
Who opened the forbidden jar in a Greek myth, releasing troubles into the world?|Pandora|In a Greek myth, Pandora opens a container and releases many troubles.|medium
What is the name of the one-eyed giants in Greek mythology?|Cyclopes|Cyclopes are one-eyed giants in Greek myth and epic poetry.|easy
Which Egyptian goddess is associated with magic and motherhood?|Isis|Isis is a major Egyptian goddess associated with motherhood and magic.|medium
What is the name of the Greek winged horse?|Pegasus|Pegasus is the winged horse in Greek mythology.|easy
Which hero is famous for slaying the Minotaur?|Theseus|Theseus enters the Labyrinth and defeats the Minotaur in Greek myth.|medium
Which Hindu epic tells of Rama’s search for Sita?|Ramayana|The Ramayana recounts Rama’s quest to rescue Sita.|medium
What is the name of the Norse final battle of the gods?|Ragnarök|Ragnarök is the foretold series of events culminating in a great battle.|medium` },
  nature: { topic:'Nature and wildlife', source:'https://www.nationalgeographic.com/animals', facts:`
What is the largest species of shark?|Whale shark|The whale shark is the largest living fish species.|easy
Which mammal lays eggs and has a duck-like bill?|Platypus|The platypus is an egg-laying mammal native to Australia.|easy
What is a group of wolves commonly called?|Pack|Wolves commonly live and travel in social groups called packs.|easy
Which tree produces acorns?|Oak|Acorns are the fruit of oak trees.|easy
What is the fastest land animal over short distances?|Cheetah|Cheetahs are specialized for rapid acceleration and high running speed.|easy
Which bird is famous for its ability to mimic human speech?|Parrot|Some parrot species can imitate human speech and other sounds.|easy
What do caterpillars become after metamorphosis?|Butterflies or moths|Many caterpillars pupate and emerge as adult butterflies or moths.|easy
Which animal is known for building dams in rivers?|Beaver|Beavers build dams from branches and other materials.|easy
What is the natural home of an organism called?|Habitat|A habitat is the environment where an organism lives.|easy
Which flightless bird is native to Antarctica?|Penguin|Penguins are flightless seabirds, and several species live in Antarctica.|easy
What is the largest living animal on Earth?|Blue whale|The blue whale is the largest animal known to have lived.|easy
Which mammal uses echolocation to navigate and find prey?|Bat|Many bats use echolocation by listening to returning sound echoes.|easy
What is the name for a plant that lives for more than two years?|Perennial|Perennial plants live for multiple growing seasons.|medium
Which animal has black-and-white stripes and is native to Africa?|Zebra|Zebras are African equids known for their distinctive stripes.|easy
What type of animal is a Komodo dragon?|Lizard|The Komodo dragon is the largest living species of lizard.|easy
What do we call the seasonal movement of animals from one region to another?|Migration|Migration is recurring movement between regions, often linked to seasons.|medium
Which insect produces silk used in traditional textiles?|Silkworm|The silkworm caterpillar produces silk fibers to form its cocoon.|medium
What is the world’s largest living land mammal?|African bush elephant|The African bush elephant is the largest living land mammal.|easy
Which marine animal has eight arms and no internal skeleton?|Octopus|Octopuses are cephalopods with eight arms and soft bodies.|easy
What is the process by which plants lose water vapor through leaves called?|Transpiration|Transpiration is water vapor loss from plant surfaces, especially leaves.|medium` },
  flags: { topic:'Countries and flags', source:'https://www.cia.gov/the-world-factbook/', facts:`
What are the main colors on the flag of Japan?|White and red|Japan’s flag has a red disc on a white field.|easy
Which country’s flag features a red maple leaf?|Canada|Canada’s national flag displays a stylized red maple leaf.|easy
Which country has a green, white, and orange vertical tricolor?|Ireland|The Irish tricolor has green, white, and orange vertical bands.|easy
Which country’s flag has a red circle on a white background?|Japan|The red sun disc is the central feature of Japan’s national flag.|easy
Which country has a cedar tree on its flag?|Lebanon|A green cedar appears on the white band of Lebanon’s flag.|medium
Which country’s flag is commonly called the Union Jack?|United Kingdom|The Union Flag combines crosses associated with England, Scotland, and Ireland.|easy
Which country has a blue flag with a yellow Nordic cross?|Sweden|Sweden’s flag is blue with a yellow cross shifted toward the hoist.|easy
Which country’s flag features a white crescent and star on green?|Pakistan|Pakistan’s flag includes a white crescent and star on a dark green field.|easy
Which country has a red flag with five yellow stars?|China|China’s national flag has one large and four smaller yellow stars.|easy
Which country’s flag has a yellow cross on a blue field?|Sweden|The Scandinavian cross is the defining feature of Sweden’s flag.|easy
Which country has a red and white flag with a maple leaf?|Canada|The maple leaf flag was adopted by Canada in 1965.|easy
Which country’s flag includes a black double-headed eagle?|Albania|Albania’s red flag bears a black double-headed eagle.|medium
Which country has a flag with a yellow sun and eagle on blue?|Kazakhstan|Kazakhstan’s sky-blue flag features a golden sun above a steppe eagle.|medium
Which country’s flag has a white star and crescent on red?|Turkey|Turkey’s red flag features a white star and crescent.|easy
Which country’s flag is blue and yellow in two horizontal bands?|Ukraine|Ukraine’s flag has blue above yellow, often associated with sky and fields.|easy
Which country has a red disc centered on a blue and white flag?|Laos|Laos’s flag has red bands, a blue center band, and a white disc.|medium
Which country’s flag has a golden harp on a blue field?|Ireland|The harp is the heraldic symbol used on Ireland’s presidential standard and coat of arms.|medium
Which country has a flag with a red circle and green field?|Bangladesh|Bangladesh’s flag has a red disc on a green field.|easy
Which country’s flag shows a golden lion holding a sword?|Sri Lanka|Sri Lanka’s flag has a lion holding a kastane sword in a maroon panel.|medium
Which country has a flag with a red cross on white?|Switzerland|The Swiss flag is a white cross on a red square field.|easy` },
  food: { topic:'Food and cuisine', source:'https://www.britannica.com/topic/food', facts:`
What grain is traditionally used to make risotto?|Rice|Risotto is commonly made with short-grain rice such as arborio.|easy
Which spice gives many curries a bright yellow color?|Turmeric|Turmeric contains curcumin, a yellow pigment used in cooking.|easy
What is the main ingredient in guacamole?|Avocado|Guacamole is a dip made primarily from mashed avocado.|easy
Which country is associated with sushi as a traditional cuisine?|Japan|Sushi developed in Japan and commonly combines seasoned rice with other ingredients.|easy
What is tofu made from?|Soybeans|Tofu is made by coagulating soy milk and pressing the curds.|easy
Which herb is traditionally used to make pesto alla genovese green?|Basil|The classic Genoese pesto uses fresh basil, garlic, cheese, pine nuts, and olive oil.|easy
What is the main ingredient in hummus?|Chickpeas|Hummus is a chickpea-based dip, usually blended with tahini and other ingredients.|easy
Which fruit is dried to make a raisin?|Grape|Raisins are dried grapes.|easy
What is the name of the fermented cabbage dish associated with Korea?|Kimchi|Kimchi is a family of fermented vegetable dishes, often made with cabbage.|easy
Which pastry is used to make a traditional Greek spanakopita?|Phyllo|Spanakopita uses thin phyllo sheets around a savory spinach filling.|medium
Which nut is used to make marzipan?|Almond|Marzipan is a confection made chiefly from ground almonds and sugar.|easy
What is the primary ingredient in traditional miso?|Soybeans|Miso is a fermented paste commonly made from soybeans and koji.|medium
Which Italian cheese is commonly used on pizza?|Mozzarella|Mozzarella is a common cheese topping for pizza.|easy
What type of pasta is shaped like small rice grains?|Orzo|Orzo is a small pasta shaped like grains of rice.|easy
Which fruit is the base of traditional cider?|Apple|Traditional cider is fermented from apple juice.|easy
What is the main ingredient in polenta?|Cornmeal|Polenta is a dish made by cooking ground cornmeal in liquid.|easy
Which country is the origin of the dish paella?|Spain|Paella originated in Valencia, Spain.|easy
What is the liquid left after churning butter called?|Buttermilk|Traditional buttermilk is the liquid remaining after cream is churned into butter.|medium
Which seed is commonly used to make tahini?|Sesame|Tahini is a paste made from ground sesame seeds.|easy
What gives sourdough bread its characteristic fermentation?|Wild yeast and lactic acid bacteria|A sourdough starter contains yeasts and bacteria that ferment the dough.|medium` },
  logic: { topic:'Logical reasoning', source:'https://www.britannica.com/science/logic', facts:`
If all Bloops are Razzies and all Razzies are Lazzies, what must all Bloops be?|Lazzies|By transitivity, membership in Bloops implies membership in Razzies and then Lazzies.|easy
What comes next in the sequence 2, 4, 6, 8?|10|The sequence increases by two each time.|easy
If today is Monday, what day will it be in two days?|Wednesday|Two days after Monday is Wednesday.|easy
Which number is the odd one out: 2, 4, 6, 9?|9|Nine is odd while the other listed numbers are even.|easy
A box has only red and blue balls. If it is not red, what color is it?|Blue|With only two possible colors, not red means blue.|easy
What comes next: 1, 1, 2, 3, 5?|8|Each Fibonacci number is the sum of the two before it.|easy
If A is taller than B and B is taller than C, who is tallest?|A|The height relations place A above both B and C.|easy
Which word does not belong: triangle, square, circle, cube?|Cube|A cube is three-dimensional; the others are plane shapes.|easy
If some cats are black and all black things are dark, what follows?|Some cats are dark|The cats that are black are also dark under the stated rule.|medium
What comes next: 3, 6, 12, 24?|48|Each term is twice the previous term.|easy
If every glorp is a glim, can something be a glim without being a glorp?|Yes|The statement says all glorps are glims, but not that all glims are glorps.|medium
Which is heavier: one kilogram of feathers or one kilogram of iron?|They weigh the same|Both quantities have a mass of one kilogram.|easy
If a clock shows 3:00, what is the angle between its hands?|90 degrees|At three o’clock the minute hand is at 12 and the hour hand at 3.|easy
What comes next in the letter sequence A, C, E, G?|I|The sequence skips one letter each time.|easy
A farmer has 10 sheep and all but 3 wander away. How many remain?|3|“All but 3” means three sheep remain.|easy
If no birds are mammals and a robin is a bird, what must be true?|A robin is not a mammal|The robin belongs to the bird group, which the premise excludes from mammals.|medium
Which number completes 5, 10, 20, __, 80?|40|Each term doubles, so 20 is followed by 40.|easy
If you overtake the runner in second place, what place are you in?|Second|You take the position of the runner you pass.|medium
A is north of B; C is east of B. In which direction is A from B?|North|The stated relation directly places A north of B.|easy
What comes next: 1, 4, 9, 16?|25|These are squares of consecutive positive integers.|easy` },
  puzzles: { topic:'Puzzles and brain teasers', source:'https://www.britannica.com/topic/puzzle', facts:`
What has keys but cannot open a lock and can make music?|A piano|A piano has keyboard keys that produce musical notes.|easy
What has a face and two hands but no arms or legs?|A clock|A clock face has hour and minute hands.|easy
What gets wetter as it dries?|A towel|A towel absorbs water while drying another object.|easy
What has a neck but no head?|A bottle|A bottle has a neck connecting its body to its opening.|easy
What has many teeth but cannot bite?|A comb|A comb’s teeth separate and arrange hair.|easy
What can travel around the world while staying in one corner?|A postage stamp|A stamp stays in a corner of an envelope while the envelope travels.|easy
What has one eye but cannot see?|A needle|The eye of a needle is the hole through which thread passes.|easy
What has cities but no houses, forests but no trees, and rivers but no water?|A map|Maps depict these features with symbols rather than the physical objects.|easy
What begins with T, ends with T, and has T inside?|A teapot|The word teapot starts and ends with T and holds tea.|medium
What has hands but cannot clap?|A clock|A clock’s hands indicate time but cannot clap.|easy
What goes up but never comes down?|Your age|A person’s age increases over time.|easy
What has a ring but no finger?|A telephone|Older telephones can ring to signal an incoming call.|easy
What has four legs in the morning, two at noon, and three in the evening in a famous riddle?|A human|The riddle represents crawling as a baby, walking, and using a cane in old age.|medium
What can you catch but not throw?|A cold|The phrase “catch a cold” refers to becoming infected.|easy
What has a thumb and four fingers but is not alive?|A glove|A glove has spaces shaped for a thumb and four fingers.|easy
What has words but never speaks?|A book|A book contains written words but does not speak by itself.|easy
What has a bottom at the top?|Your legs|Your legs are below your body but your bottom sits above them.|medium
What has branches but no fruit, trunk, or leaves?|A bank|A bank can have branches in different locations.|medium
What can fill a room but takes up no space?|Light|Light can illuminate a room without occupying it like a solid object.|medium
What has a head and a tail but no body?|A coin|A coin’s two sides are commonly called heads and tails.|easy` },
  gaming: { topic:'Video games and gaming culture', source:'https://www.museumofplay.org/', facts:`
Which company created the Super Mario series?|Nintendo|Nintendo publishes the Super Mario video game series.|easy
What is the name of the yellow character in Pac-Man?|Pac-Man|The player character in the original game is named Pac-Man.|easy
Which game features building with blocks in a procedurally generated world?|Minecraft|Minecraft centers on exploring and building in a block-based world.|easy
Which company developed the Halo series originally?|Bungie|Bungie developed the first Halo games before the series moved to 343 Industries.|medium
What does “NPC” commonly stand for in games?|Non-player character|NPC is a character controlled by the game rather than a player.|easy
Which game series includes the region called Hyrule?|The Legend of Zelda|Many games in Nintendo’s Zelda series take place in Hyrule.|easy
What genre is a game focused on exploring and surviving against waves of enemies often called?|Survival game|Survival games emphasize managing resources and staying alive.|medium
Which company makes the PlayStation console family?|Sony|PlayStation is a video game brand from Sony Interactive Entertainment.|easy
Which company makes the Xbox console family?|Microsoft|Xbox is Microsoft’s video game console and services brand.|easy
What does “co-op” mean in a video game?|Players cooperate toward a shared goal|Cooperative play lets participants work together rather than compete.|easy
Which classic arcade game features defending Earth from descending aliens?|Space Invaders|Space Invaders is an arcade shooter released by Taito in 1978.|easy
What is a game’s frame rate measured in?|Frames per second|FPS counts how many individual images are displayed each second.|easy
Which game series features the fictional region of Johto and creatures called Pokémon?|Pokémon|Johto is a region appearing in Pokémon games and stories.|easy
What kind of game is chess when implemented as a digital game?|Strategy game|Chess is a turn-based strategy game about positioning and planning.|easy
What does “speedrun” mean?|Completing a game as quickly as possible|Speedrunners aim to finish games quickly, often under agreed rules.|easy
Which game series includes the character Lara Croft?|Tomb Raider|Lara Croft is the central protagonist of the Tomb Raider series.|easy
What does “DLC” commonly stand for?|Downloadable content|DLC adds optional digital content to a game after its initial release.|easy
Which company created the Sonic the Hedgehog character?|Sega|Sega introduced Sonic as its mascot in 1991.|easy
What is “multiplayer” in a game?|Play involving more than one player|Multiplayer games allow multiple participants to play in the same game session.|easy
Which game genre commonly features a player competing in a last-player-standing match?|Battle royale|Battle royale games typically shrink a play area until one player or team remains.|medium` },
  business: { topic:'Business and economics', source:'https://www.econlib.org/library/Topics/College/supplyanddemand.html', facts:`
What do economists call the amount of a good consumers are willing to buy at different prices?|Demand|Demand describes buyers’ willingness and ability to purchase goods at various prices.|easy
What is the term for the money left after costs are subtracted from revenue?|Profit|Profit is the financial gain remaining when expenses are deducted from revenue.|easy
What is a budget?|A plan for income and spending|A budget estimates income and organizes planned expenditures.|easy
What does a bank deposit account let a customer do?|Store money and make transactions|Deposit accounts hold funds and typically support withdrawals or payments.|easy
What is inflation?|A general rise in prices over time|Inflation is a sustained increase in the general price level of an economy.|easy
What is a company’s revenue?|Money earned from sales or services|Revenue is income generated by business activities before costs are deducted.|easy
What is a consumer?|A person or organization that buys or uses goods|Consumers purchase or use products and services.|easy
What does a loan require the borrower to do?|Repay borrowed money, often with interest|Loans are agreements to repay principal and commonly interest.|easy
What is a market in economics?|A setting where buyers and sellers exchange goods or services|Markets connect buyers and sellers through exchange.|easy
What happens to quantity demanded when price falls, all else equal?|It generally increases|The law of demand describes an inverse price and quantity relationship, all else equal.|medium
What is a scarce resource?|A resource limited relative to wants|Scarcity means available resources cannot satisfy every possible use or want.|easy
What is an entrepreneur?|A person who organizes a business venture and takes risks|Entrepreneurs create or organize ventures and bear business risks.|easy
What is a tax?|A required payment to government|Taxes are compulsory contributions used to fund public spending.|easy
What is a savings account mainly designed to do?|Hold money saved for future use|Savings accounts provide a place to keep funds and may pay interest.|easy
What is a trade-off?|Giving up one option to obtain another|Choosing one alternative can require sacrificing another.|easy
What does a company’s expense represent?|A cost incurred while operating|Expenses are costs a business pays or incurs in its operations.|easy
What is a supply chain?|The linked steps that move a product from inputs to customers|Supply chains coordinate production, transport, and delivery.|medium
What is a stock share?|A unit representing ownership in a company|A share represents a fraction of equity ownership in a corporation.|easy
What does “break-even” mean for a business?|Revenue equals total costs|At break-even, the business has neither profit nor loss for that period.|medium
What is the opportunity cost of a choice?|The value of the next-best alternative forgone|Opportunity cost measures the best alternative not chosen.|medium` },
  body: { topic:'Human body', source:'https://medlineplus.gov/anatomy.html', facts:`
Which organ pumps blood through the body?|Heart|The heart contracts to move blood through the circulatory system.|easy
Which organs primarily exchange oxygen and carbon dioxide?|Lungs|Gas exchange occurs in the lungs, especially across the alveoli.|easy
What is the largest organ of the human body?|Skin|Skin is the body’s largest organ by surface area and mass.|easy
Which bones protect the brain?|Skull|The bones of the skull enclose and protect the brain.|easy
What is the name of the body system that includes the brain and spinal cord?|Central nervous system|The central nervous system consists chiefly of the brain and spinal cord.|easy
Which blood cells help carry oxygen?|Red blood cells|Hemoglobin in red blood cells binds and transports oxygen.|easy
What is the main function of the stomach?|Begin digestion of food|The stomach churns food and mixes it with acid and enzymes.|easy
Which organ filters blood and produces urine?|Kidneys|The kidneys filter blood and produce urine as part of waste regulation.|easy
What connects muscles to bones?|Tendons|Tendons attach muscles to bones and transmit force.|easy
What connects one bone to another at a joint?|Ligament|Ligaments connect bones and help stabilize joints.|easy
Which part of the eye controls how much light enters?|Iris|The iris changes pupil size to regulate incoming light.|easy
What is the body’s largest internal organ?|Liver|The liver is the largest internal organ in the human body.|easy
Which body system includes the trachea and bronchi?|Respiratory system|The trachea and bronchi conduct air through the respiratory system.|easy
What is the basic functional unit of the nervous system?|Neuron|Neurons are cells that transmit information through electrical and chemical signals.|easy
Which organ produces insulin?|Pancreas|Insulin is produced by beta cells in the pancreas.|easy
What is the name of the kneecap bone?|Patella|The patella is the small bone at the front of the knee joint.|easy
What do red blood cells contain to bind oxygen?|Hemoglobin|Hemoglobin is the oxygen-carrying protein in red blood cells.|easy
Which body system helps defend against pathogens?|Immune system|The immune system recognizes and responds to infectious agents and other threats.|easy
What is the hard outer layer of a tooth called?|Enamel|Enamel is the hard mineralized outer covering of the tooth crown.|easy
Which organ is mainly responsible for pumping lymph through lymphatic vessels?|There is no single central pump|Lymph moves through vessels via muscle movement, breathing, and vessel contractions rather than a heart-like central pump.|hard` },
  inventions: { topic:'Inventions and discoveries', source:'https://www.britannica.com/technology/invention', facts:`
Who is commonly credited with developing the movable-type printing press in Europe?|Johannes Gutenberg|Gutenberg’s fifteenth-century printing system helped spread books in Europe.|easy
Which invention made long-distance voice conversations possible over wires?|Telephone|The telephone transmits speech as electrical signals over a communication network.|easy
Who is associated with the first successful powered airplane flight in 1903?|The Wright brothers|Orville and Wilbur Wright made a controlled powered flight at Kitty Hawk in 1903.|easy
Which invention uses a lens to make distant objects appear closer?|Telescope|A telescope gathers and magnifies light from distant objects.|easy
Which device converts sunlight directly into electricity?|Solar cell|Photovoltaic cells convert light into electrical energy.|easy
Who developed the first widely used smallpox vaccine?|Edward Jenner|Jenner’s 1796 work used cowpox material to protect against smallpox.|medium
Which invention is used to measure atmospheric pressure?|Barometer|A barometer measures air pressure.|easy
What did the ancient compass help travelers determine?|Direction|A magnetic compass aligns with Earth’s magnetic field to indicate direction.|easy
Which invention enabled mechanical printing from inked plates or type?|Printing press|The printing press applies inked type to paper to reproduce text.|easy
Who is widely credited with inventing the practical incandescent light bulb?|Thomas Edison|Edison’s laboratory developed a practical, commercially viable incandescent lighting system.|medium
Which medical imaging discovery uses high-frequency sound waves?|Ultrasound imaging|Ultrasound forms images from echoes of sound waves above human hearing.|easy
Which invention allows a camera to record moving images electronically?|Video camera|Video cameras capture a sequence of images and record them as moving pictures.|easy
Who discovered penicillin after observing a mold’s effect on bacteria?|Alexander Fleming|Fleming reported penicillin’s antibacterial effect in 1928.|easy
Which invention changed navigation by allowing ships to measure latitude using the Sun or stars?|Sextant|A sextant measures the angle between a celestial object and the horizon.|medium
What does a thermometer measure?|Temperature|A thermometer measures temperature.|easy
Which invention stores electrical energy chemically for later use?|Battery|A battery converts chemical energy into electrical energy when connected to a circuit.|easy
What technology lets computers send data using light through glass strands?|Fiber-optic communication|Optical fibers carry information as pulses of light.|medium
Who developed the World Wide Web while working at CERN?|Tim Berners-Lee|Berners-Lee proposed the World Wide Web at CERN in 1989.|easy
Which invention uses rotating blades to convert wind into electrical power?|Wind turbine|A wind turbine converts wind’s kinetic energy into electricity.|easy
Which device provides magnified images of tiny objects?|Microscope|A microscope makes small objects appear larger for observation.|easy` },
};

const refMap = Object.fromEntries(Object.entries(definitions).map(([id, def]) => [id, def.source]));

// Small editorially curated answer families. Question answers never feed this
// table; a stem is mapped to one family and all distractors come from that
// same semantic family.
export const QUESTION_TAXONOMIES = {
  general:['people and places','everyday objects','language','nature','arts and culture','inventions','world connections'], science:['chemistry','physics','biology','discoveries','experiments','instruments','environment'], technology:['computing','internet','networks','robotics','security','interfaces','technology history'], ai:['machine learning','neural networks','language models','computer vision','AI history','responsible AI','agents'], history:['ancient civilizations','classical world','trade routes','medieval history','exploration','revolutions','modern history'], geography:['countries','capital cities','rivers','mountains','deserts','islands','oceans','continents','landmarks'], space:['solar system','planets','moons','stars and galaxies','space missions','astronauts','black holes','cosmology','space technology'], math:['arithmetic','geometry','fractions','patterns','measurement','algebra','logic','proof'], physics:['motion','forces','energy','waves','heat','electricity','magnetism','quantum physics'], chemistry:['elements','atoms','bonding','reactions','acids and bases','carbon chemistry','materials'], biology:['cells','DNA','evolution','plants','microbes','animals','ecosystems','life history'], sports:['athletes','teams','rules','tournaments','track and field','court sports','water sports'], movies:['film history','directors','animation','genres','world cinema','television','awards'], music:['rhythm','instruments','classical music','jazz','world music','composers','recording'], literature:['authors','novels','poetry','classics','world literature','mystery','myth and folklore'], mythology:['Greek','Norse','Egyptian','Hindu','Celtic','East Asian','heroes and creatures'], nature:['rainforests','oceans','grasslands','deserts','mountains','wetlands','wildlife'], flags:['countries','flag colors','symbols','capitals','regional flags','island nations'], food:['ingredients','grains','spices','street food','desserts','regional cuisine','cooking science'], logic:['patterns','conditionals','sequences','deduction','word logic','ordering','truth tables'], puzzles:['riddles','visual clues','sequences','wordplay','shapes','hidden objects','brain teasers'], gaming:['arcades','game history','consoles','design','indie games','characters','esports'], business:['trade','money','supply and demand','markets','companies','work and wages','global exchange'], body:['organs','senses','bones','circulation','breathing','brain','digestion','immunity'], inventions:['ancient tools','printing','power','medicine','flight','digital technology','discoveries'],
};

export function curateQuestionOptions({ questionId, correctText }) {
  const authored = getEditorialOptionSet(questionId);
  if (!authored) throw new Error(`Missing question-specific answer set: ${questionId}`);
  if (!authored.answerFamily?.trim() || !Array.isArray(authored.distractors) || authored.distractors.length !== 3) {
    throw new Error(`Invalid editorial answer set shape: ${questionId}`);
  }
  const answer = authored.correctText || correctText;
  const texts = [answer, ...authored.distractors.map(option => option.text)];
  if (texts.some(text => !text?.trim()) || new Set(texts.map(text => text.trim().toLocaleLowerCase())).size !== 4) {
    throw new Error(`Editorial answer set must contain four distinct nonblank choices: ${questionId}`);
  }
  if (authored.distractors.some(option => !option.rationale?.trim())) {
    throw new Error(`Every editorial distractor needs an individual rationale: ${questionId}`);
  }
  return texts.map((text, index) => ({
    id:`${questionId}-option-${index + 1}`,
    text,
    semanticType:authored.answerFamily,
    answerFamily:authored.answerFamily,
    correct:index === 0,
    ...(index > 0 ? { distractorRationale:authored.distractors[index - 1].rationale } : {}),
  }));
}

function buildPack(worldId, definition) {
  const facts = definition.facts.trim().split('\n').map(line => line.trim()).filter(Boolean).map((line, index) => {
    const [q, correctText, why, difficulty] = line.split('|').map(part => part.trim());
    return { id:`${worldId}-${String(index+1).padStart(3,'0')}`, q, correctText, why, difficulty, topic:definition.topic, source:definition.source, index };
  });
  return facts.map(fact => {
    const editorial = getEditorialOptionSet(fact.id);
    if (!editorial?.topicId || !editorial?.subtopic || !Number.isInteger(editorial.chapterId) || editorial.chapterId < 1 || editorial.chapterId > 10) {
      throw new Error(`Missing question-specific curriculum metadata: ${fact.id}`);
    }
    const reviewedFact = editorial ? {
      ...fact,
      q:editorial.question || fact.q,
      correctText:editorial.correctText || fact.correctText,
      why:editorial.why || fact.why,
    } : fact;
    const options = curateQuestionOptions({questionId:fact.id,correctText:reviewedFact.correctText});
    const semanticType = options[0].semanticType;
    const texts = options.map(option=>option.text);
    const eligibleLevels = Array.from({length:100},(_,i)=>i+1);
    const taxonomy = QUESTION_TAXONOMIES[worldId];
    const topicId = editorial.topicId;
    return {
      ...reviewedFact,
      topic:editorial.subtopic,
      a:texts,
      options,
      correct:0,
      correctOptionId:options[0].id,
      correctAnswerId:options[0].id,
      categoryId:worldId,
      worldId,
      topicId,
      subtopic:editorial.subtopic,
      chapterId:editorial.chapterId,
      questionType:'multiple-choice',
      semanticType,
      levelEligibility:eligibleLevels,
      eligibleLevels,
      source:editorial?.source ? {
        ...editorial.source,
        claim:`${reviewedFact.q} — ${reviewedFact.correctText}`,
        lastVerified:editorial.verifiedAt,
      } : {title:`${definition.topic} reference starting point`,url:fact.source,claim:`${reviewedFact.q} — ${reviewedFact.correctText}`,status:'needs-review'},
      reviewStatus:['verified','reasoning-verified'].includes(editorial?.source?.status) ? editorial.source.status : 'needs-review',
      reviewDate:editorial?.verifiedAt || null,
      ...(editorial?.verifiedAt ? { verifiedAt:editorial.verifiedAt } : {}),
      answerSetProvenance:'question-specific-editorial',
      taxonomy,
    };
  });
}

export const QUESTION_PACKS = Object.fromEntries(Object.entries(definitions).map(([id, definition]) => [id, buildPack(id, definition)]));
const SPACE_CURRICULUM_CHAPTERS = [
  { chapterId:1, topicId:'planetary-science', subtopic:'Planets and orbital systems', ids:['s01','s02','s03','s04','s06','s07','s08','s10','s11','s16','s17','s26','s27','s29','s33','s40','s44','s61','s64','s72','s76','s79'] },
  { chapterId:2, topicId:'moons', subtopic:'Natural satellites and lunar science', ids:['s05','s21','s22','s35','s37','s38','s48','s73','s74'] },
  { chapterId:3, topicId:'human-spaceflight', subtopic:'Crews and early spaceflight', ids:['s14','s23','s24','s45','s75','s80'] },
  { chapterId:4, topicId:'robotic-exploration', subtopic:'Uncrewed spacecraft and robotic missions', ids:['s31','s32','s36','s39','s42','s47','s50','s53','s56','s60','s63','s66','s68','s71','s77'] },
  { chapterId:5, topicId:'small-bodies', subtopic:'Meteors, asteroids, comets and orbital limits', ids:['s12','s19','s34','s57','s78'] },
  { chapterId:6, topicId:'stars-and-observation', subtopic:'Stars, telescopes and stellar physics', ids:['s09','s18','s20','s25','s46','s55','s67'] },
  { chapterId:7, topicId:'galaxies-and-cosmology', subtopic:'Galaxies, distance and cosmology', ids:['s13','s28','s30','s51','s54','s59','s65'] },
  { chapterId:8, topicId:'space-environment', subtopic:'Life and conditions in space', ids:['s15','s49','s52','s58'] },
  { chapterId:9, topicId:'extreme-astronomy', subtopic:'Black holes, gravity and new observations', ids:['s43','s62','s69','s70'] },
  { chapterId:10, topicId:'exoplanets', subtopic:'Worlds beyond the Solar System', ids:['s41'] },
];
const SPACE_CURRICULUM = Object.fromEntries(SPACE_CURRICULUM_CHAPTERS.flatMap(chapter => chapter.ids.map(id => [id, chapter])));
if (Object.keys(SPACE_CURRICULUM).length !== SPACE_QUESTIONS.length || SPACE_QUESTIONS.some(question => !SPACE_CURRICULUM[question.id])) {
  throw new Error('Space curriculum must place every seed question exactly once.');
}
QUESTION_PACKS.space = SPACE_QUESTIONS.map(question => {
  const editorial = getEditorialOptionSet(question.id);
  const reviewedQuestion = {
    ...question,
    q:editorial?.question || question.q,
    correctText:editorial?.correctText || question.a[question.correct],
    why:editorial?.why || question.why,
  };
  const options = curateQuestionOptions({questionId:question.id,correctText:reviewedQuestion.correctText});
  const curriculum = SPACE_CURRICULUM[question.id];
  const eligibleLevels = Array.from({length:100},(_,i)=>i+1);
  return {
    ...reviewedQuestion,
    a:options.map(option=>option.text), options, correct:0,
    correctOptionId:options[0].id, correctAnswerId:options[0].id,
    categoryId:'space', topic:curriculum.subtopic, topicId:curriculum.topicId,
    worldId:'space',
    subtopic:curriculum.subtopic, chapterId:curriculum.chapterId,
    questionType:'multiple-choice', semanticType:options[0].semanticType,
    taxonomy:QUESTION_TAXONOMIES.space,
    source:{title:'NASA Solar System Exploration',url:'https://science.nasa.gov/solar-system/',claim:`${reviewedQuestion.q} — ${reviewedQuestion.correctText}`,status:'needs-review'},
    reviewStatus:'needs-review', reviewDate:null, answerSetProvenance:'question-specific-editorial',
    levelEligibility:eligibleLevels, eligibleLevels,
  };
});
function buildAdditionalQuestion(record, worldId = 'space') {
  const { id, q, correctText, why, difficulty, topicId, subtopic, chapterId, answerFamily, distractors, source, verifiedAt } = record;
  if (!id || !q?.trim() || !correctText?.trim() || !why?.trim() || !topicId?.trim() || !subtopic?.trim() ||
      !Number.isInteger(chapterId) || chapterId < 1 || chapterId > 10 || !answerFamily?.trim() ||
      !['easy','medium','hard','expert'].includes(difficulty) || !Array.isArray(distractors) || distractors.length !== 3 ||
      distractors.some(option => !option?.text?.trim() || !option.rationale?.trim()) ||
      !source?.title?.trim() || !source.url?.startsWith('https://') || !source.claim?.trim() ||
      !['verified','reasoning-verified','needs-review'].includes(source.status) ||
      (['verified','reasoning-verified'].includes(source.status) && (!verifiedAt || source.lastVerified !== verifiedAt))) {
    throw new Error(`Invalid additional question record: ${id || '(missing ID)'}`);
  }
  const options = [
    { id:`${id}-option-1`, text:correctText, correct:true, semanticType:answerFamily, answerFamily },
    ...distractors.map((option, index) => ({
      id:`${id}-option-${index + 2}`, text:option.text, correct:false,
      semanticType:answerFamily, answerFamily, distractorRationale:option.rationale,
    })),
  ];
  const reviewStatus = ['verified','reasoning-verified'].includes(source.status) ? source.status : 'needs-review';
  const isReviewed = ['verified','reasoning-verified'].includes(reviewStatus);
  const reviewDate = isReviewed ? (verifiedAt || source.lastVerified || null) : null;
  return {
    id, q, correctText, why, difficulty, topic:subtopic, subtopic, topicId, chapterId,
    categoryId:worldId, worldId, questionType:'multiple-choice', taxonomy:QUESTION_TAXONOMIES[worldId],
    options, a:options.map(option => option.text), correct:0,
    correctOptionId:options[0].id, correctAnswerId:options[0].id,
    semanticType:answerFamily, levelEligibility:Array.from({ length:100 },(_,index)=>index+1),
    eligibleLevels:Array.from({ length:100 },(_,index)=>index+1),
    answerSetProvenance:'question-specific-editorial',
    source:{ ...source, claim:`${q} Correct answer: ${correctText}. ${source.claim}`, status:reviewStatus, lastVerified:isReviewed ? reviewDate : undefined },
    reviewStatus, reviewDate, ...(reviewDate ? { verifiedAt:reviewDate } : {}),
  };
}
function appendAdditionalQuestions(worldId, records) {
  const additions = records.map(record => buildAdditionalQuestion(record, worldId));
  const ids = new Set(QUESTION_PACKS[worldId].map(question => question.id));
  for (const question of additions) {
    if (ids.has(question.id)) throw new Error(`Duplicate ${worldId} question ID: ${question.id}`);
    ids.add(question.id);
  }
  QUESTION_PACKS[worldId].push(...additions);
}
appendAdditionalQuestions('space', [...SPACE_QUESTION_ADDITIONS_A, ...SPACE_ADDITIONS_B]);
appendAdditionalQuestions('biology', BIOLOGY_QUESTION_ADDITIONS);
appendAdditionalQuestions('history', HISTORY_QUESTION_ADDITIONS);
appendAdditionalQuestions('geography', GEOGRAPHY_QUESTION_ADDITIONS);
appendAdditionalQuestions('science', SCIENCE_QUESTION_ADDITIONS);
for (const [worldId, additions] of Object.entries(GROUP_A_QUESTION_ADDITIONS)) {
  appendAdditionalQuestions(worldId, additions);
}
for (const [worldId, additions] of Object.entries(GROUP_B_QUESTION_ADDITIONS)) {
  appendAdditionalQuestions(worldId, additions);
}
for (const [worldId, additions] of Object.entries(GROUP_C_QUESTION_ADDITIONS)) {
  appendAdditionalQuestions(worldId, additions);
}
for (const [worldId, additions] of Object.entries(GROUP_D_QUESTION_ADDITIONS)) {
  appendAdditionalQuestions(worldId, additions);
}
for (const pack of Object.values(QUESTION_PACKS)) {
  const cumulativePoolsReady = Array.from({length:10},(_,index)=>index+1)
    .every(chapterId => pack.filter(question => question.chapterId <= chapterId).length >= 20);
  for (const question of pack) {
    if (MAP_DATA_RECORDS[question.id]) {
      const rec = MAP_DATA_RECORDS[question.id];
      const hotspots = rec.hotspots.map((h, i) => ({
        ...h,
        optionId: h.optionId || question.options?.[h.optionIndex ?? i]?.id || `${question.id}-option-${(h.optionIndex ?? i) + 1}`,
      }));
      question.mapData = { ...rec, hotspots };
    }
    if (TIMELINE_DATA_RECORDS[question.id]) question.timelineData = TIMELINE_DATA_RECORDS[question.id];
    if (SEQUENCE_DATA_RECORDS[question.id]) question.sequenceData = SEQUENCE_DATA_RECORDS[question.id];
    if (IMAGE_DATA_RECORDS[question.id]) question.imageData = IMAGE_DATA_RECORDS[question.id];

    const supported = ['multiple-choice', 'progressive-clue', 'matching-pairs'];
    if (question.mapData) supported.push('map-selection');
    if (question.timelineData) supported.push('timeline-ordering');
    if (question.sequenceData) supported.push('sequence-completion');
    if (question.imageData) supported.push('image-identification');
    question.supportedInteractionTypes = supported;

    const firstEligibleLevel = cumulativePoolsReady ? (question.chapterId - 1) * 10 + 1 : 1;
    const eligibleLevels = Array.from({length:101-firstEligibleLevel},(_,index)=>firstEligibleLevel+index);
    question.levelEligibility = eligibleLevels;
    question.eligibleLevels = eligibleLevels;
  }
}
export const QUESTION_SOURCES = refMap;

export function getQuestionPack(worldId) {
  return QUESTION_PACKS[worldId] || [];
}
