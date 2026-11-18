// Question-specific answer sets authored for the remaining legacy seeds in
// selected worlds. Distractor rationales are editorial review metadata only.
// This batch contains no claim-level source verification.
const d = (text, rationale) => ({ text, rationale });
const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });

const AUTHORED_OPTION_SETS = {
  // Biology
  'biology-002': set('photosynthetic and cellular processes', [
    d('Cellular respiration', 'Cellular respiration releases usable energy from food molecules; it does not describe plants making sugars from light.'),
    d('Fermentation', 'Fermentation is an energy-releasing pathway that can occur without oxygen, not the light-driven sugar-making process.'),
    d('Transpiration', 'Transpiration is water-vapor loss from plant surfaces, not sugar production.'),
  ]),
  'biology-003': set('levels of biological organization', [
    d('Tissue', 'A tissue is a group of cells working together, so it is made from the more basic unit.'),
    d('Organ', 'An organ combines multiple tissues and is a higher level of organization than a cell.'),
    d('Organelle', 'An organelle is a structure within many cells, not an independently living structural unit.'),
  ]),
  'biology-004': set('cell organelles', [
    d('Ribosome', 'Ribosomes build proteins; they are not the organelles most associated with cellular energy production.'),
    d('Golgi apparatus', 'The Golgi apparatus modifies and sorts molecules for transport rather than producing most cellular ATP.'),
    d('Lysosome', 'Lysosomes break down materials inside cells; they are not the organelles called the cell’s powerhouse.'),
  ]),
  'biology-005': set('plant pigments', [
    d('Carotene', 'Carotene is an orange pigment found in many plants and can be masked by chlorophyll.'),
    d('Anthocyanin', 'Anthocyanins commonly contribute red, purple, or blue coloration rather than the familiar green.'),
    d('Melanin', 'Melanin is a pigment found in many animals and other organisms, but it is not the main green plant pigment.'),
  ]),
  'biology-006': set('animal classification by skeletal trait', [
    d('Invertebrates', 'Invertebrates are animals without a vertebral column, the opposite of the trait in the question.'),
    d('Arthropods', 'Arthropods are animals with jointed appendages and an exoskeleton; that group does not mean all animals with backbones.'),
    d('Mollusks', 'Mollusks are a broad invertebrate group, not animals defined by having a backbone.'),
  ]),
  'biology-007': set('species interactions', [
    d('Mutualism', 'Mutualism describes an interaction in which both partners benefit, unlike the harmed host in parasitism.'),
    d('Commensalism', 'In commensalism one partner benefits while the other is not significantly helped or harmed.'),
    d('Competition', 'Competition occurs when organisms use a shared limited resource; it is not the host-parasite relationship described.'),
  ], { question:'Which interaction describes a parasite benefiting while living on or in a host and harming it?' }),
  'biology-008': set('blood components and transported substances', [
    d('Carbon dioxide', 'Red blood cells can carry some carbon dioxide away from tissues, but the revised question asks about oxygen delivery from lungs to tissues.'),
    d('Glucose', 'Blood transports glucose to tissues, but glucose is a nutrient rather than the gas asked for.'),
    d('Antibodies', 'Antibodies circulate in blood as immune proteins; they are not the gas red cells carry to tissues.'),
  ], { question:'Which gas do red blood cells primarily deliver from the lungs to body tissues?' }),
  'biology-009': set('biological fields of study', [
    d('Botany', 'Botany is the study of plants rather than fungi.'),
    d('Zoology', 'Zoology focuses on animals, not fungi.'),
    d('Ecology', 'Ecology examines interactions among organisms and their environments; mycology is the fungi-focused field.'),
  ]),
  'biology-010': set('plant reproductive processes', [
    d('Fertilization', 'Fertilization is the joining of gametes; pollination is the earlier transfer of pollen to a flower’s stigma.'),
    d('Germination', 'Germination is a seed beginning to grow, not pollen moving from anther to stigma.'),
    d('Seed dispersal', 'Seed dispersal moves seeds away from a parent plant, which is a different stage from pollen transfer.'),
  ]),
  'biology-011': set('organisms classified by nutrition', [
    d('Heterotroph', 'A heterotroph obtains organic matter from other organisms rather than making its own food from basic sources.'),
    d('Decomposer', 'A decomposer obtains nutrients by breaking down dead material; the term does not mean it makes its own food.'),
    d('Parasite', 'A parasite gets resources from a host, so it does not fit the definition of making its own food.'),
  ]),
  'biology-012': set('eukaryotic cell division processes', [
    d('Meiosis', 'Meiosis reduces chromosome number to form reproductive cells; the question asks for ordinary nuclear division in body cells.'),
    d('Binary fission', 'Binary fission is a common division process in prokaryotes, which do not divide their nuclei by mitosis.'),
    d('Budding', 'Budding forms a new individual as an outgrowth and is not the eukaryotic somatic-cell process described.'),
  ], { question:'What process divides the nucleus of a eukaryotic somatic cell to produce two genetically matching daughter nuclei?' }),
  'biology-013': set('biological macromolecule building blocks', [
    d('Nucleotides', 'Nucleotides are the building blocks of nucleic acids such as DNA and RNA.'),
    d('Monosaccharides', 'Monosaccharides are simple sugars that can join to form carbohydrates.'),
    d('Fatty acids', 'Fatty acids are components of many lipids, not the units linked to build proteins.'),
  ]),
  'biology-014': set('animal activity patterns', [
    d('Diurnal', 'Diurnal animals are primarily active during daylight rather than at night.'),
    d('Crepuscular', 'Crepuscular animals are most active around dawn and dusk, not mainly through the night.'),
    d('Cathemeral', 'Cathemeral animals may be active at irregular times across both day and night.'),
  ]),
  'biology-015': set('blood cell types and functions', [
    d('Red blood cells', 'Red blood cells chiefly transport respiratory gases; white blood cells carry out many immune-defense roles.'),
    d('Platelets', 'Platelets help blood clot and limit bleeding rather than serving as the main infection-fighting cells.'),
    d('Reticulocytes', 'Reticulocytes are immature red blood cells on their way to maturation, not the broad infection-defense cell group.'),
  ]),
  'biology-016': set('species interactions', [
    d('Parasitism', 'Parasitism benefits one partner while harming its host, rather than benefiting both.'),
    d('Commensalism', 'Commensalism benefits one partner while the other is generally unaffected, not mutually benefited.'),
    d('Competition', 'Competition involves organisms contending for resources and does not mean both partners benefit.'),
  ]),
  'biology-017': set('evolutionary processes', [
    d('Genetic drift', 'Genetic drift changes allele frequencies by chance, rather than because a trait improves reproductive success.'),
    d('Gene flow', 'Gene flow moves alleles between populations; it is not the differential reproduction process described.'),
    d('Mutation', 'Mutation creates genetic variation, but the term alone does not describe a population becoming adapted through differential survival and reproduction.'),
  ], { question:'Which process can make inherited traits that improve reproductive success more common in a population over generations?' }),
  'biology-018': set('scientific fields and specialists', [
    d('Entomologist', 'An entomologist studies insects, not birds.'),
    d('Ichthyologist', 'An ichthyologist studies fish rather than birds.'),
    d('Herpetologist', 'A herpetologist studies reptiles and amphibians, not birds.'),
  ]),
  'biology-019': set('genetics terminology', [
    d('Phenotype', 'Phenotype describes observable characteristics, which result from genotype interacting with environment.'),
    d('Genome', 'A genome is an organism’s complete genetic material, while genotype refers to its genetic makeup or allele combination.'),
    d('Allele', 'An allele is one version of a gene, not the term for an organism’s overall genetic makeup.'),
  ]),
  'biology-020': set('biological kingdoms', [
    d('Plantae', 'Plantae includes plants; mushrooms and yeasts are classified in the fungal kingdom.'),
    d('Animalia', 'Animalia includes animals and does not include mushrooms or yeasts.'),
    d('Protista', 'Protista has historically grouped many eukaryotes, but mushrooms and yeasts belong to Fungi.'),
  ]),

  // Sports
  'sports-001': set('team player counts in field sports', [
    d('7', 'Seven players is a common side size in some soccer variants, but standard association football fields eleven per team.'),
    d('9', 'Nine is the usual number of defensive positions in baseball, not the full soccer side on the field.'),
    d('13', 'Thirteen is associated with some rugby formats and exceeds the standard soccer team size.'),
  ]),
  'sports-002': set('tennis scoring vocabulary', [
    d('Deuce', 'Deuce is a tied score at 40–40 in a game, not the tennis term for zero.'),
    d('Advantage', 'Advantage names the point lead after deuce, rather than a score of zero.'),
    d('Fault', 'A fault is an invalid serve attempt and is not the scoring term for zero.'),
  ]),
  'sports-003': set('Olympic symbol ring counts', [
    d('Four', 'Four leaves one of the five interlaced rings out of the Olympic symbol.'),
    d('Six', 'Six adds a ring beyond the five in the Olympic symbol.'),
    d('Seven', 'Seven is two more rings than the Olympic symbol contains.'),
  ]),
  'sports-005': set('basketball scoring values', [
    d('Two', 'Two points are awarded for many field goals, while a made free throw is worth one.'),
    d('Three', 'Three points are awarded for a successful shot from beyond the arc, not a free throw.'),
    d('Zero', 'A made free throw adds to the score; zero would describe a missed attempt.'),
  ]),
  'sports-006': set('countries associated with historic sporting events', [
    d('France', 'France hosted many later Olympic Games, but the first modern Summer Games were held in Athens.'),
    d('Italy', 'Italy has hosted modern Olympic Games, but it was not the host country in 1896.'),
    d('United Kingdom', 'The United Kingdom has hosted modern Olympic Games, but the inaugural 1896 edition was not held there.'),
  ]),
  'sports-008': set('baseball count and rule outcomes', [
    d('Two', 'Two strikes leave a batter alive in the count under standard baseball rules.'),
    d('Four', 'Four balls normally award the batter a walk; four strikes are not required for an out.'),
    d('Five', 'Five is not the standard strike count for retiring a batter.'),
  ]),
  'sports-011': set('indoor volleyball player counts', [
    d('Five', 'Five players is the on-court number for a standard basketball team, not indoor volleyball.'),
    d('Seven', 'Seven is one more player than an indoor volleyball side fields on court.'),
    d('Four', 'Four players would leave an indoor volleyball side short of its standard on-court count.'),
  ]),
  'sports-012': set('ice hockey playing equipment', [
    d('Ball', 'A ball is used in sports such as field hockey, while ice hockey players shoot a flat puck.'),
    d('Shuttlecock', 'A shuttlecock is struck in badminton and is not used as the main scoring object in ice hockey.'),
    d('Stone', 'A stone is slid in curling, not hit with a stick in ice hockey.'),
  ]),
  'sports-016': set('baseball field counts', [
    d('Three', 'A standard diamond has three named bases plus home plate, so three omits one of the four points.'),
    d('Five', 'Five counts one more point than a standard baseball diamond has.'),
    d('Six', 'Six is not the number of bases or home plate positions on a standard diamond.'),
  ]),
  'sports-017': set('multi-discipline sports', [
    d('Modern pentathlon', 'Modern pentathlon combines several athletic events, but it does not alternate chess and boxing rounds.'),
    d('Triathlon', 'A triathlon combines swimming, cycling, and running rather than chess and boxing.'),
    d('Biathlon', 'A biathlon combines cross-country skiing and rifle shooting rather than chess and boxing.'),
  ], { question:'Which hybrid sport alternates rounds of chess with rounds of boxing?' }),
  'sports-018': set('standard basketball player counts', [
    d('Four', 'Four players would leave a standard basketball team one player short on the court.'),
    d('Six', 'Six players is the standard indoor volleyball on-court count, not basketball’s.'),
    d('Seven', 'Seven is more than the five players a standard basketball side has on court.'),
  ]),

  // Movies and entertainment
  'movies-001': set('classic film titles', [
    d('Mary Poppins', 'Mary Poppins is a fantasy film, but it is not the 1939 film centered on Dorothy’s journey to Oz.'),
    d('Alice in Wonderland', 'Alice visits Wonderland rather than the land of Oz.'),
    d('Willy Wonka & the Chocolate Factory', 'Willy Wonka follows children visiting a chocolate factory, not Dorothy traveling to Oz.'),
  ], { question:'Which 1939 film features Dorothy and the land of Oz?' }),
  'movies-003': set('film franchises and fictional schools', [
    d('The Lord of the Rings', 'This fantasy film franchise centers on Middle-earth, not the school Hogwarts.'),
    d('The Chronicles of Narnia', 'The Narnia films take place in a separate fantasy world and do not feature Hogwarts.'),
    d('Pirates of the Caribbean', 'This fantasy-adventure film franchise does not feature the fictional school Hogwarts.'),
  ]),
  'movies-004': set('film production roles', [
    d('Screenwriter', 'A screenwriter writes the script; the director guides how the film is staged and shaped.'),
    d('Producer', 'A producer oversees financing and production logistics rather than being the role named in the question.'),
    d('Cinematographer', 'A cinematographer leads the camera and lighting approach, a distinct role from directing the film overall.'),
  ]),
  'movies-005': set('animated film titles', [
    d('Shark Tale', 'Shark Tale features ocean animals but does not follow the clownfish Nemo named in the question.'),
    d('The Little Mermaid', 'The Little Mermaid is an animated ocean story, but Nemo is not its central clownfish character.'),
    d('A Bug’s Life', 'A Bug’s Life follows insects rather than the clownfish character Nemo.'),
  ]),
  'movies-006': set('fictional film characters', [
    d('Han Solo', 'Han Solo is another character played by Harrison Ford, but he is not the archaeologist Indiana Jones.'),
    d('Rick Deckard', 'Rick Deckard is a character Ford played in Blade Runner, not the adventuring archaeologist.'),
    d('Jack Ryan', 'Jack Ryan is a different fictional role played by Ford in a film, not Indiana Jones.'),
  ]),
  'movies-007': set('entertainment companies and studio identity', [
    d('Warner Bros.', 'Warner Bros. is a major film studio but is not the company associated with Mickey Mouse.'),
    d('Universal Pictures', 'Universal Pictures is a major studio, but Mickey Mouse is associated with Disney.'),
    d('Paramount Pictures', 'Paramount is a film studio, but it is not the entertainment company associated with Mickey Mouse.'),
  ], { question:'Which entertainment company is the current home of Mickey Mouse?' }),
  'movies-008': set('American television awards', [
    d('Oscar', 'The Oscar is the common name for an Academy Award, associated primarily with film rather than American television.'),
    d('Grammy', 'The Grammy Awards recognize achievements in music, not American television.'),
    d('Tony', 'The Tony Awards honor Broadway theatre, not television achievement.'),
  ]),
  'movies-009': set('film franchise titles and quotations', [
    d('Star Trek', 'Star Trek is a science-fiction franchise, but the quoted phrase is associated with Star Wars.'),
    d('Dune', 'Dune is a science-fiction film and book series, but it does not feature this recurring Star Wars phrase.'),
    d('Guardians of the Galaxy', 'Guardians of the Galaxy is a space-adventure franchise, but the quotation is not its signature line.'),
  ]),
  'movies-010': set('film writing and production documents', [
    d('Storyboard', 'A storyboard plans scenes with sequential images; a screenplay contains the dialogue and written action.'),
    d('Shot list', 'A shot list records planned camera shots and is not the full written dialogue-and-action document.'),
    d('Call sheet', 'A call sheet gives a production schedule and crew information rather than the film’s dialogue and action.'),
  ]),
  'movies-011': set('feature film titles by story premise', [
    d('A Night to Remember', 'This film also dramatizes the Titanic disaster, but it is not the 1997 fictional romance named in the question.'),
    d('The Perfect Storm', 'The Perfect Storm concerns a fishing vessel caught in severe weather, not a romance aboard the Titanic.'),
    d('Pearl Harbor', 'Pearl Harbor is a historical war romance set around a different ship and event.'),
  ]),
  'movies-012': set('film promotion materials', [
    d('Teaser poster', 'A teaser poster is a promotional image rather than a short moving preview.'),
    d('Featurette', 'A featurette is a longer promotional or behind-the-scenes video, not the standard brief film preview term.'),
    d('Logline', 'A logline is a short written summary of a story, not a video preview.'),
  ]),
  'movies-013': set('animated film titles and songs', [
    d('Moana', 'Moana is a Disney animated musical, but Elsa and “Let It Go” belong to Frozen.'),
    d('Tangled', 'Tangled is another Disney animated musical, but it features Rapunzel rather than Elsa.'),
    d('The Princess and the Frog', 'This Disney film features Tiana and New Orleans, not Elsa and “Let It Go.”'),
  ]),
  'movies-014': set('film formats and production categories', [
    d('Live-action film', 'Live-action films primarily record performers or settings rather than creating motion from drawn or modeled images.'),
    d('Documentary film', 'A documentary is categorized by its nonfiction approach, not by whether it uses animated images.'),
    d('Silent film', 'A silent film is defined by its lack of synchronized spoken dialogue, not by creating motion from individually made images.'),
  ], { question:'What broad film category creates the illusion of movement from a sequence of individually created drawings, models, or digital images?' }),
  'movies-015': set('actors and film roles', [
    d('Michael B. Jordan', 'Michael B. Jordan played Erik Killmonger in Black Panther, not T’Challa.'),
    d('Daniel Kaluuya', 'Daniel Kaluuya played W’Kabi in Black Panther, not T’Challa.'),
    d('Don Cheadle', 'Don Cheadle appears as James Rhodes in the Marvel films, not as T’Challa in Black Panther.'),
  ]),
  'movies-016': set('fictional nations and film settings', [
    d('Genosha', 'Genosha is a fictional setting in Marvel stories, but it is not the African nation in Black Panther.'),
    d('Latveria', 'Latveria is a fictional European nation in Marvel stories, not the nation featured in Black Panther.'),
    d('Zamunda', 'Zamunda is the fictional African kingdom in Coming to America, not the setting named in Black Panther.'),
  ]),
  'movies-017': set('film visual-effects techniques', [
    d('Color grading', 'Color grading adjusts an image’s color and tone; it does not combine separate image elements into one scene.'),
    d('Motion capture', 'Motion capture records performers’ movement data rather than compositing separate visual elements.'),
    d('Rotoscoping', 'Rotoscoping traces or isolates moving subjects frame by frame; compositing combines visual elements into a final image.'),
  ]),
  'movies-018': set('feature film titles by iconic vehicle', [
    d('The Terminator', 'The Terminator features time travel, but its time machine is not the DeLorean from the question.'),
    d('Hot Tub Time Machine', 'This comedy uses a hot tub as its time-travel device rather than a DeLorean.'),
    d('Bill & Ted’s Excellent Adventure', 'Bill and Ted travel through time in a phone booth, not a DeLorean.'),
  ]),
  'movies-019': set('international film festivals', [
    d('Venice Film Festival', 'Venice hosts a major annual film festival in Italy, not in Cannes, France.'),
    d('Berlin International Film Festival', 'The Berlinale is held in Berlin, not Cannes.'),
    d('Toronto International Film Festival', 'The Toronto festival is held in Canada and is distinct from the annual Cannes event.'),
  ]),
  'movies-020': set('early sound-film titles', [
    d('The General', 'The General is a celebrated silent-era comedy released in 1926, not the 1927 synchronized-dialogue landmark.'),
    d('Metropolis', 'Metropolis is a 1927 silent science-fiction feature rather than the synchronized-dialogue film named in the question.'),
    d('Wings', 'Wings is a 1927 silent feature and does not fit the synchronized-dialogue clue.'),
  ]),

  // Music
  'music-001': set('standard orchestral string counts', [
    d('Three', 'Three strings is one fewer than the standard violin’s four.'),
    d('Five', 'Five strings are found on some specialized violins, but not the standard instrument described.'),
    d('Six', 'Six strings is typical of many guitars, not a standard violin.'),
  ]),
  'music-002': set('musical clefs', [
    d('Bass clef', 'The bass clef is commonly used for lower registers rather than the higher-pitched notes described.'),
    d('Alto clef', 'The alto clef is a C clef used in a middle register, not the common higher-register clef.'),
    d('Tenor clef', 'The tenor clef is used for some higher passages of low-register instruments, but it is not the general clef commonly used for higher-pitched notes.'),
  ]),
  'music-003': set('musical tempo and expression terms', [
    d('Rhythm', 'Rhythm describes patterns of durations and accents; tempo describes the overall speed.'),
    d('Meter', 'Meter organizes beats into recurring groups rather than naming how fast the music moves.'),
    d('Dynamics', 'Dynamics concern loudness and softness, not the speed of a performance.'),
  ]),
  'music-005': set('chord and interval structures', [
    d('Dyad', 'A dyad consists of two notes sounding together, while a triad contains three.'),
    d('Seventh chord', 'A seventh chord contains four distinct chord tones in its usual form, more than the three in a triad.'),
    d('Scale', 'A scale is an ordered series of pitches, not specifically a chord of three notes played together.'),
  ]),
  'music-006': set('musical instrument families', [
    d('Woodwind', 'Woodwinds include instruments such as flute and clarinet; the trumpet belongs to the brass family.'),
    d('String', 'String instruments produce sound from vibrating strings, unlike the trumpet’s lip-buzzed brass mouthpiece.'),
    d('Percussion', 'Percussion instruments are sounded by striking, shaking, or scraping, not the family classification of trumpet.'),
  ]),
  'music-007': set('music notation accidentals', [
    d('Flat', 'A flat lowers a written pitch by a semitone rather than raising it.'),
    d('Natural sign', 'A natural sign cancels a sharp or flat, returning the note to its unaltered pitch.'),
    d('Double sharp', 'A double sharp raises a note by two semitones, not one.'),
  ]),
  'music-009': set('music performance and composition terms', [
    d('Duet', 'A duet is written for or performed by two players or voices, rather than one solo performer.'),
    d('Concerto', 'A concerto typically sets a soloist against an ensemble or orchestra, not simply a composition for one instrument.'),
    d('Sonata', 'A sonata is a multi-movement instrumental form and is not defined simply as a solo composition.'),
  ], { question:'What is the musical term for a passage or performance featuring one instrument or performer?' }),
  'music-010': set('classical composers', [
    d('Johann Sebastian Bach', 'Bach was a Baroque composer and violinist, but he did not write the set of concertos known as The Four Seasons.'),
    d('George Frideric Handel', 'Handel was a contemporary of Vivaldi, but The Four Seasons is not his work.'),
    d('Arcangelo Corelli', 'Corelli was an Italian Baroque violinist and composer, distinct from the composer of The Four Seasons.'),
  ]),
  'music-011': set('note-letter counts in an octave', [
    d('Five', 'Five counts only some pitch classes and leaves out two of the seven letter names A through G.'),
    d('Twelve', 'Twelve counts the equal-tempered semitone positions in an octave, not the standard letter names.'),
    d('Eight', 'Eight can describe a scale degree repeating at the octave, but only seven distinct letter names are used before that repeat.'),
  ]),
  'music-013': set('musical dynamic markings', [
    d('Diminuendo', 'Diminuendo directs a gradual decrease in loudness, the opposite direction from a crescendo.'),
    d('Sforzando', 'Sforzando calls for a sudden strong accent rather than a gradual increase in volume.'),
    d('Forte', 'Forte means loud, but it is a level marking rather than the gradual increase described.'),
  ]),
  'music-014': set('singers and popular honorifics', [
    d('Ella Fitzgerald', 'Fitzgerald is widely known as a major jazz vocalist, but the “Queen of Soul” title is associated with Aretha Franklin.'),
    d('Diana Ross', 'Ross is a prominent singer and performer, but she is not the singer commonly called the “Queen of Soul.”'),
    d('Tina Turner', 'Turner is a celebrated rock and soul singer, but the honorific in the question is associated with Aretha Franklin.'),
  ]),
  'music-015': set('adult voice ranges', [
    d('Tenor', 'Tenor is a higher common adult male vocal range than bass.'),
    d('Baritone', 'Baritone is a middle adult male range, generally above bass.'),
    d('Countertenor', 'Countertenor is a high adult male voice type, not the lowest common range.'),
  ]),
  'music-016': set('bowed string instruments by size', [
    d('Viola', 'A viola is slightly larger than a violin, but it is not the much larger bowed instrument usually meant by this clue.'),
    d('Double bass', 'The double bass is larger than a violin, but it is much larger than a cello and is not the intended standard answer.'),
    d('Violin', 'The violin is the size reference in the question rather than the larger instrument.'),
  ], { question:'Which bowed string instrument is held between the player’s knees and is larger than a violin but smaller than a double bass?' }),
  'music-017': set('Italian musical dynamic markings', [
    d('Soft', 'Soft corresponds to piano, not forte.'),
    d('Very loud', 'Very loud is closer to fortissimo; forte means loud.'),
    d('Gradually louder', 'A gradual increase in loudness is crescendo, not the steady dynamic marking forte.'),
  ]),
  'music-018': set('music genres and style descriptors', [
    d('March', 'Marches often use a regular pulse suited to marching, but improvisation and swing are especially associated with jazz.'),
    d('Opera', 'Opera is a staged vocal form with orchestral accompaniment; it is not chiefly defined by swing improvisation.'),
    d('Electronic dance music', 'Electronic dance music covers many styles and may include improvisation, but swing and improvisation are classic jazz associations.'),
  ]),
  'music-019': set('music theory relationships between pitches', [
    d('Chord', 'A chord is a combination of pitches sounding together, not the measured distance between two pitches.'),
    d('Scale', 'A scale is an ordered collection of pitches rather than the distance separating a pair.'),
    d('Timbre', 'Timbre describes tone color or sound quality, not pitch distance.'),
  ]),

  // Nature and wildlife
  'nature-002': set('egg-laying mammals', [
    d('Echidna', 'Echidnas also lay eggs, but they have a narrow snout and spines rather than the duck-like bill in the question.'),
    d('Otter', 'Otters give birth to live young and do not have the platypus’s bill.'),
    d('Beaver', 'Beavers are live-bearing rodents and do not lay eggs.'),
  ]),
  'nature-003': set('animal group names', [
    d('Herd', 'A herd is a common group term for grazing mammals such as deer or cattle, not the usual term for wolves.'),
    d('Flock', 'A flock usually refers to a group of birds or sheep rather than wolves.'),
    d('School', 'A school is a group of fish or other aquatic animals, not the common wolf group term.'),
  ]),
  'nature-004': set('tree species and fruits', [
    d('Maple', 'Maple trees produce winged seeds called samaras, not acorns.'),
    d('Beech', 'Beech trees produce nuts called beechnuts rather than acorns.'),
    d('Pine', 'Pines produce cones containing seeds, not acorns.'),
  ]),
  'nature-005': set('fast-running land animals', [
    d('Pronghorn', 'Pronghorns are exceptionally fast and built for sustained running, but the cheetah is the fastest over short bursts.'),
    d('Springbok', 'Springboks are swift antelopes, but they do not match the cheetah’s top short-distance speed.'),
    d('Lion', 'Lions can sprint briefly, but they are slower than cheetahs over short distances.'),
  ]),
  'nature-006': set('bird groups', [
    d('Mynas', 'Mynas are known for vocal mimicry, but they are not the group that includes macaws, cockatoos, and budgerigars.'),
    d('Mockingbirds', 'Mockingbirds imitate sounds, but they are not the bird group that includes macaws, cockatoos, and budgerigars.'),
    d('Toucans', 'Toucans are tropical birds with large bills, but they are not the group that includes macaws, cockatoos, and budgerigars.'),
  ], { question:'Macaws, cockatoos, and budgerigars are members of which broad group of birds?', correctText:'Parrots' }),
  'nature-007': set('insect life-cycle stages and adult groups', [
    d('Beetles', 'Beetles are adult insects from a different insect order, not the adult forms of caterpillars.'),
    d('Dragonflies', 'Dragonflies are a separate insect group and do not develop from caterpillars.'),
    d('Flies', 'Flies develop through maggot-like larvae rather than the caterpillar stage described.'),
  ]),
  'nature-008': set('animals associated with dam building', [
    d('Muskrat', 'Muskrats use waterways and may occupy lodges, but they are not the mammals known for constructing river dams.'),
    d('Otter', 'Otters live in and around rivers but do not build the characteristic dams described.'),
    d('Capybara', 'Capybaras are semi-aquatic rodents, but they do not construct river dams.'),
  ]),
  'nature-009': set('ecology terms for places and roles', [
    d('Niche', 'A niche describes an organism’s ecological role and interactions, not simply the place where it lives.'),
    d('Biome', 'A biome is a large regional ecosystem defined by climate and characteristic life, not one organism’s home.'),
    d('Population', 'A population is a group of members of one species in an area, not the area or conditions in which an organism lives.'),
  ]),
  'nature-010': set('flightless birds and geographic ranges', [
    d('Ostrich', 'Ostriches are flightless birds native to Africa, not Antarctica.'),
    d('Emu', 'Emus are flightless birds native to Australia.'),
    d('Kiwi', 'Kiwis are flightless birds native to New Zealand.'),
  ]),
  'nature-011': set('largest animal groups by size', [
    d('Whale shark', 'The whale shark is the largest fish, but it is smaller than the blue whale.'),
    d('African bush elephant', 'The African bush elephant is the largest living land animal, not the largest animal overall.'),
    d('Fin whale', 'The fin whale is among the largest animals, but the blue whale is larger.'),
  ]),
  'nature-012': set('mammals and sensory navigation', [
    d('Gliding possum', 'Gliding possums are mammals that travel between trees, but they do not use bat-like echolocation.'),
    d('Flying squirrel', 'Flying squirrels glide between trees and do not use echolocation as bats do.'),
    d('Colugo', 'Colugos glide between trees but are not known for using echolocation to navigate.'),
  ], { question:'Which group of flying mammals commonly uses echolocation to navigate and find prey?' }),
  'nature-013': set('plant life-span categories', [
    d('Annual', 'An annual completes its life cycle in one growing season, less than the multi-year span described.'),
    d('Biennial', 'A biennial typically completes its life cycle over two growing seasons, while the question asks for more than two years.'),
    d('Ephemeral', 'An ephemeral plant has a short-lived growth period rather than persisting across multiple years.'),
  ]),
  'nature-014': set('African mammals with distinctive coats', [
    d('Giraffe', 'Giraffes are African mammals with patches rather than the characteristic black-and-white stripes in the clue.'),
    d('Okapi', 'Okapis have striped markings on their legs, but they are not the African striped equid described.'),
    d('African wild dog', 'African wild dogs have mottled coats rather than the familiar striped coat of a zebra.'),
  ]),
  'nature-015': set('reptile groups and animal classification', [
    d('Crocodile', 'A crocodile is a reptile, but it belongs to a different reptile group from the Komodo dragon.'),
    d('Snake', 'Snakes are reptiles, but they lack the limbs and body form that classify a Komodo dragon as a lizard.'),
    d('Amphibian', 'Amphibians are a separate vertebrate class; Komodo dragons are reptiles.'),
  ]),
  'nature-016': set('animal movement and seasonal behavior', [
    d('Hibernation', 'Hibernation is a period of reduced activity and metabolism, not seasonal travel between regions.'),
    d('Dispersal', 'Dispersal is movement away from a birthplace or population, and need not be a recurring seasonal journey.'),
    d('Estivation', 'Estivation is dormancy during hot or dry conditions rather than seasonal regional movement.'),
  ]),
  'nature-017': set('insects and useful natural materials', [
    d('Honeybee', 'Honeybees produce honey and wax; they do not produce the continuous silk filament used in traditional textiles.'),
    d('Cochineal insect', 'Cochineal insects have been used to make red dye, not silk fibers.'),
    d('Lac insect', 'Lac insects produce resin used as shellac, not textile silk.'),
  ]),
  'nature-018': set('largest living land mammals', [
    d('African forest elephant', 'The African forest elephant is a distinct, smaller African elephant species than the bush elephant.'),
    d('Asian elephant', 'Asian elephants are large land mammals, but they are smaller on average than African bush elephants.'),
    d('White rhinoceros', 'White rhinos are among the largest land mammals, but they are substantially smaller than African bush elephants.'),
  ]),
  'nature-019': set('cephalopods and marine animals', [
    d('Squid', 'Squid are cephalopods with eight arms plus two longer feeding tentacles, rather than only the eight arms described.'),
    d('Cuttlefish', 'Cuttlefish have eight arms and two tentacles and possess an internal cuttlebone, unlike the soft-bodied animal in the clue.'),
    d('Nautilus', 'Nautiluses are cephalopods, but they have an external shell and many tentacles rather than eight arms.'),
  ]),
  'nature-020': set('plant water-movement processes', [
    d('Guttation', 'Guttation releases liquid water droplets, often at leaf edges, rather than water vapor.'),
    d('Evaporation', 'Evaporation is water changing to vapor from a surface; transpiration specifically describes vapor loss from a plant.'),
    d('Condensation', 'Condensation changes water vapor into liquid water, the reverse phase change from vapor loss.'),
  ]),

  // Food and cuisine
  'food-002': set('culinary spices and pigments', [
    d('Saffron', 'Saffron can add a golden hue to dishes, but turmeric is the spice commonly associated with the bright yellow color in many curries.'),
    d('Paprika', 'Paprika is made from ground peppers and often lends red or orange color rather than the characteristic curry yellow.'),
    d('Cumin', 'Cumin is a common curry spice with a warm flavor, but it is not the main bright-yellow pigment source.'),
  ]),
  'food-003': set('ingredients used as dip bases', [
    d('Chickpeas', 'Chickpeas are central to hummus, but guacamole is primarily made from avocado.'),
    d('Eggplant', 'Eggplant is the base of dips such as baba ghanoush, not traditional guacamole.'),
    d('Green peas', 'Green peas can be blended into dips, but they are not the main ingredient in guacamole.'),
  ]),
  'food-004': set('countries and traditional cuisines', [
    d('China', 'China has many rice and seafood dishes, but sushi as the named traditional cuisine is associated with Japan.'),
    d('Korea', 'Korean cuisine has its own rice and fermented-food traditions; sushi is associated with Japan.'),
    d('Vietnam', 'Vietnamese cuisine includes rice-based dishes, but sushi is the traditional cuisine named in the question.'),
  ]),
  'food-005': set('plant-based protein ingredients', [
    d('Chickpeas', 'Chickpeas are used in foods such as hummus and falafel, but tofu is made from soybeans.'),
    d('Lentils', 'Lentils are legumes used in many dishes, but they are not the usual starting ingredient for tofu.'),
    d('Wheat gluten', 'Wheat gluten is used to make seitan; tofu is formed from coagulated soy milk.'),
  ]),
  'food-006': set('culinary herbs', [
    d('Parsley', 'Parsley is used in many herb sauces, but classic pesto alla genovese gets its green herb base from basil.'),
    d('Mint', 'Mint gives dishes a fresh flavor, but it is not the defining herb in traditional Genoese pesto.'),
    d('Oregano', 'Oregano is common in Italian cooking, but it is not the basil used in classic pesto alla genovese.'),
  ]),
  'food-007': set('legumes and ingredients in savory dips', [
    d('Fava beans', 'Fava beans are used in some regional dips, but chickpeas are the main ingredient in hummus.'),
    d('Lentils', 'Lentils can be blended into spreads, but they are not the standard base of hummus.'),
    d('Eggplant', 'Eggplant is used in other savory dips, while hummus is chickpea-based.'),
  ]),
  'food-008': set('fruits and dried fruit products', [
    d('Plum', 'Dried plums are called prunes; raisins are made by drying grapes.'),
    d('Apricot', 'Dried apricots are a separate dried-fruit product, not raisins.'),
    d('Date', 'Dates dry on the palm and are not the fruit called a raisin.'),
  ]),
  'food-009': set('fermented foods by cuisine', [
    d('Sauerkraut', 'Sauerkraut is fermented cabbage associated with Central European cuisines, not the Korean dish asked for.'),
    d('Tsukemono', 'Tsukemono is a broad Japanese term for pickled vegetables, not the Korean fermented cabbage family.'),
    d('Doenjang', 'Doenjang is a Korean fermented soybean paste, not the fermented cabbage dish.'),
  ]),
  'food-010': set('pastries and doughs used in regional dishes', [
    d('Puff pastry', 'Puff pastry is laminated and can make savory pies, but traditional spanakopita uses thin phyllo sheets.'),
    d('Shortcrust pastry', 'Shortcrust makes a firm pie shell rather than the many thin, crisp layers of spanakopita.'),
    d('Wonton wrappers', 'Wonton wrappers are small dough sheets for filled dumplings, not the traditional pastry for spanakopita.'),
  ]),
  'food-011': set('nuts and confectionery ingredients', [
    d('Pistachio', 'Pistachios are used in sweets and can make nut pastes, but almond is the traditional marzipan base.'),
    d('Hazelnut', 'Hazelnuts are used in pralines and spreads, but they are not the principal nut in marzipan.'),
    d('Cashew', 'Cashews can be ground into pastes, but traditional marzipan is chiefly almond-based.'),
  ]),
  'food-012': set('fermented paste ingredients', [
    d('Rice', 'Rice is often used with koji in rice-based miso, but it is not the principal legume ingredient named for traditional miso.'),
    d('Barley', 'Barley can be used in barley miso, but it does not replace soybeans as the common main ingredient.'),
    d('Chickpeas', 'Chickpeas can be fermented into other pastes, but they are not the typical base of Japanese miso.'),
  ], { question:'Which legume is the primary ingredient in the most common type of traditional miso paste?' }),
  'food-013': set('Italian cheeses used on pizza', [
    d('Provolone', 'Provolone is also used on some pizzas, but mozzarella is the cheese most commonly named in this general question.'),
    d('Parmesan', 'Parmesan is often grated over pizza, but mozzarella is the common primary cheese topping.'),
    d('Fontina', 'Fontina melts well and can be used on pizza, but mozzarella is the usual general answer.'),
  ], { question:'Which fresh, mild Italian cheese is the most common base topping on many pizzas?' }),
  'food-014': set('pasta shapes', [
    d('Farfalle', 'Farfalle are bow-tie shaped, not shaped like small rice grains.'),
    d('Fusilli', 'Fusilli have a spiral shape rather than the elongated rice-like shape of orzo.'),
    d('Penne', 'Penne are short tubes cut at an angle, not rice-shaped pasta.'),
  ]),
  'food-015': set('fruits used in fermented beverages', [
    d('Pear', 'Pears are used to make perry, a related fermented drink, while traditional cider is apple-based.'),
    d('Grape', 'Grapes are the usual fruit base for wine, not traditional cider.'),
    d('Quince', 'Quince can be fermented in some drinks, but it is not the fruit base for traditional cider.'),
  ]),
  'food-016': set('grains and ground cereal ingredients', [
    d('Rice flour', 'Rice flour is ground rice and can thicken dishes, but polenta is traditionally cooked from cornmeal.'),
    d('Wheat flour', 'Wheat flour is used in breads and pastries rather than being the grain base of polenta.'),
    d('Semolina', 'Semolina is coarse durum wheat, often used for pasta, not the cornmeal used in polenta.'),
  ]),
  'food-018': set('dairy products and churning byproducts', [
    d('Whey', 'Whey is the liquid separated from curds during cheese-making, rather than the traditional liquid remaining after butter is churned.'),
    d('Cream', 'Cream is the fat-rich dairy starting material that is churned to make butter, not the leftover liquid.'),
    d('Yogurt', 'Yogurt is fermented milk, not the traditional churning byproduct called buttermilk.'),
  ]),
  'food-019': set('seeds used for pastes and condiments', [
    d('Sunflower', 'Sunflower seeds can be ground into spreads, but tahini is made from sesame seeds.'),
    d('Pumpkin', 'Pumpkin seeds are used in some sauces and pastes, but they are not the traditional tahini seed.'),
    d('Poppy', 'Poppy seeds appear in baking and fillings, but tahini is sesame-based.'),
  ]),
  'food-020': set('microorganisms in fermented dough', [
    d('Commercial baker’s yeast alone', 'Commercial baker’s yeast can leaven bread, but it does not by itself describe the mixed starter community associated with sourdough.'),
    d('Mold and acetic acid bacteria', 'Molds are not the defining organisms of a healthy sourdough starter; yeasts and lactic acid bacteria are characteristic.'),
    d('Only baking soda', 'Baking soda is a chemical leavener and does not ferment dough with living microorganisms.'),
  ]),

  // Logic and reasoning
  'logic-002': set('arithmetic sequences', [
    d('9', 'Nine would break the constant increase of two shown by the listed terms.'),
    d('12', 'Twelve skips the next value if each term increases by two.'),
    d('16', 'Sixteen follows a doubling pattern from 2, not the observed addition of two.'),
  ]),
  'logic-003': set('weekday sequence reasoning', [
    d('Tuesday', 'Tuesday is one day after Monday, not two days after.'),
    d('Thursday', 'Thursday is three days after Monday.'),
    d('Friday', 'Friday is four days after Monday, so it is not the day two days later.'),
  ]),
  'logic-004': set('number properties and odd-one-out puzzles', [
    d('2', 'Two is even, so it shares the parity property of 4 and 6.'),
    d('4', 'Four is even, like 2 and 6.'),
    d('6', 'Six is even, while 9 is the only odd number in the list.'),
  ]),
  'logic-005': set('deduction from exhaustive alternatives', [
    d('Red', 'The premise says the ball is not red, which rules this color out.'),
    d('Green', 'Green is not one of the only two colors allowed by the premise.'),
    d('Yellow', 'Yellow is not among the box’s stated red-or-blue possibilities.'),
  ]),
  'logic-006': set('number sequences defined by prior terms', [
    d('7', 'Seven does not equal the sum of the two preceding terms, 2 and 3.'),
    d('9', 'Nine does not follow the stated add-the-previous-two pattern for this sequence.'),
    d('13', 'Thirteen is the next later value under the same pattern, after 8.'),
  ]),
  'logic-008': set('two-dimensional and three-dimensional shapes', [
    d('Triangle', 'A triangle is a plane figure, like the other listed two-dimensional shapes.'),
    d('Square', 'A square is two-dimensional and has no volume, unlike the cube.'),
    d('Circle', 'A circle is a plane figure, not a three-dimensional solid.'),
  ]),
  'logic-009': set('conclusions from categorical premises', [
    d('All cats are dark', 'The premise only says some cats are black; it does not establish a property of every cat.'),
    d('No cats are dark', 'The cats that are black are dark under the second premise, so this conclusion conflicts with what follows.'),
    d('Some cats are not dark', 'Nothing in the premises establishes that any cat is not dark.'),
  ]),
  'logic-010': set('multiplicative number sequences', [
    d('36', 'Thirty-six adds twelve to 24 rather than continuing the repeated doubling pattern.'),
    d('40', 'Forty does not double 24; it would fit a different rule.'),
    d('72', 'Seventy-two doubles 36, not the preceding term 24.'),
  ]),
  'logic-011': set('logical implications and converse errors', [
    d('No; every glim must be a glorp', 'This reverses the stated direction; the premise only places every glorp inside the glim group.'),
    d('Only if the groups are identical', 'The groups need not be identical: the premise allows glims that are not glorps.'),
    d('It cannot be determined because the names are unfamiliar', 'The group names are arbitrary, but the one-way inclusion still shows that a glim outside the glorp group is possible.'),
  ]),
  'logic-012': set('comparison of equal quantities', [
    d('The feathers weigh more', 'The two amounts have the same stated mass, so the bulk of the feathers does not make that quantity heavier.'),
    d('The iron weighs more', 'The iron is denser and takes less space, but the stated amount is still one kilogram.'),
    d('It depends on their volume', 'Volume differs, but equal one-kilogram quantities at the same location have the same weight.'),
  ], { question:'Which has greater mass: 1 kg of feathers or 1 kg of iron?' }),
  'logic-013': set('clock-face angles', [
    d('60 degrees', 'At 3:00 the hands point to 12 and 3, which are three hour marks apart rather than two.'),
    d('180 degrees', 'A 180-degree angle would place the hands opposite each other, as at 6:00.'),
    d('270 degrees', 'The smaller angle between the hands at 3:00 is a right angle, not a reflex angle.'),
  ]),
  'logic-015': set('quantity reasoning from language', [
    d('7', 'Seven would remain if three sheep left, but “all but 3 wander away” means the three are the ones that stay.'),
    d('10', 'Ten would mean none wandered away, contrary to the statement.'),
    d('0', 'Zero would mean all ten wandered away, which conflicts with “all but 3.”'),
  ]),
  'logic-017': set('multiplicative number sequences', [
    d('30', 'Thirty does not continue doubling from 20.'),
    d('35', 'Thirty-five does not fit the repeated doubling pattern.'),
    d('45', 'Forty-five would not double 20; the following term also would not reach 80 by doubling.'),
  ]),
  'logic-018': set('relative race positions', [
    d('First', 'Passing the runner in second place puts you in that runner’s position; the leader remains ahead.'),
    d('Third', 'You move ahead of the runner you pass, so you do not take the position behind them.'),
    d('Last', 'The premise gives your new place relative to the second-place runner, not last place.'),
  ]),
  'logic-019': set('cardinal directions and spatial relations', [
    d('South', 'South is the opposite of the stated direction from B to A.'),
    d('East', 'East describes C’s position relative to B, not A’s.'),
    d('West', 'West is opposite the stated northward position of A relative to B.'),
  ], { question:'A is north of B. In which direction is A from B?' }),
  'logic-020': set('square-number sequences', [
    d('20', 'Twenty is not the next square after 16; it would continue by adding four rather than using consecutive squares.'),
    d('24', 'Twenty-four is not a perfect square and does not match the listed square numbers.'),
    d('36', 'Thirty-six is a square, but it skips 25, the square of the next consecutive integer.'),
  ]),

  // Inventions and discoveries
  'inventions-001': set('historical inventors and innovators', [
    d('William Caxton', 'Caxton introduced printing to England later, but he is not commonly credited with developing Europe’s movable-type press.'),
    d('Bi Sheng', 'Bi Sheng developed an earlier movable-type printing method in China, not the European press named in this question.'),
    d('Aldus Manutius', 'Manutius was an influential later printer and publisher, not the person commonly credited with developing the European movable-type press.'),
  ]),
  'inventions-002': set('communication inventions', [
    d('Telegraph', 'The telegraph sent coded messages over wires, but it did not carry ordinary voice conversations.'),
    d('Radio', 'Radio carries voice without wires, so it does not match the wired long-distance clue.'),
    d('Phonograph', 'A phonograph records and plays sound locally rather than enabling a live conversation over wires.'),
  ]),
  'inventions-003': set('aviation pioneers and inventors', [
    d('Alberto Santos-Dumont', 'Santos-Dumont was an important aviation pioneer, but the clue refers to the brothers’ 1903 powered-flight achievement.'),
    d('Samuel Langley', 'Langley conducted early aviation experiments, but his full-size powered aircraft did not achieve the flight named in the question.'),
    d('Otto Lilienthal', 'Lilienthal pioneered gliding flight and died before the 1903 powered airplane flight.'),
  ], { question:'Which pair of brothers is associated with the first successful powered airplane flight in 1903?' }),
  'inventions-004': set('optical instruments', [
    d('Microscope', 'A microscope magnifies very small nearby objects rather than distant ones.'),
    d('Periscope', 'A periscope lets a viewer see around or over an obstruction; it is not the instrument designed for gathering light from celestial objects.'),
    d('Camera lens', 'A camera lens records or focuses a scene but is not the general astronomy instrument named in the stem.'),
  ], { question:'Which optical instrument is designed to gather light from distant celestial objects for closer observation?' }),
  'inventions-006': set('medical discoveries and historical figures', [
    d('Louis Pasteur', 'Pasteur made major contributions to vaccination, but the smallpox vaccine is associated with Edward Jenner.'),
    d('Jonas Salk', 'Salk developed a widely used polio vaccine, not the first widely used smallpox vaccine.'),
    d('Robert Koch', 'Koch established important principles in bacteriology but is not credited with developing the smallpox vaccine.'),
  ]),
  'inventions-007': set('scientific measuring instruments', [
    d('Thermometer', 'A thermometer measures temperature rather than atmospheric pressure.'),
    d('Hygrometer', 'A hygrometer measures humidity, not atmospheric pressure.'),
    d('Anemometer', 'An anemometer measures wind speed, not air pressure.'),
  ]),
  'inventions-008': set('navigation and measurement concepts', [
    d('Latitude', 'Latitude describes north–south position; a compass gives a traveler directional orientation.'),
    d('Temperature', 'Temperature is a physical measurement and is unrelated to the direction indicated by a compass.'),
    d('Time', 'A compass does not directly tell the time of day.'),
  ]),
  'inventions-009': set('mechanical printing technologies', [
    d('Typewriter', 'A typewriter makes text by striking characters onto a page, but it is not the press used to reproduce pages from inked type.'),
    d('Mimeograph', 'A mimeograph duplicates documents from a stencil, a different printing process from pressing inked type or plates.'),
    d('Screen-printing frame', 'A screen-printing frame transfers ink through a stencil mesh, not through the press mechanism described.'),
  ]),
  'inventions-010': set('inventors associated with electrical technologies', [
    d('Nikola Tesla', 'Tesla made major contributions to electrical systems, but he is not the figure widely credited in this practical incandescent-bulb question.'),
    d('Benjamin Franklin', 'Franklin studied electricity in the eighteenth century, long before practical incandescent lighting.'),
    d('Alexander Graham Bell', 'Bell is associated with telephone development rather than the practical incandescent bulb named here.'),
  ]),
  'inventions-011': set('medical imaging methods', [
    d('X-ray imaging', 'X-ray imaging uses ionizing electromagnetic radiation rather than high-frequency sound waves.'),
    d('Magnetic resonance imaging', 'MRI uses magnetic fields and radio-frequency signals, not ultrasound echoes.'),
    d('Computed tomography', 'CT uses multiple X-ray measurements to form images rather than high-frequency sound.'),
  ]),
  'inventions-012': set('image and video recording devices', [
    d('Still camera', 'A still camera records individual photographs rather than a sequence of moving images.'),
    d('Film projector', 'A projector displays recorded images but does not capture them.'),
    d('Audio recorder', 'An audio recorder captures sound rather than moving visual images.'),
  ]),
  'inventions-013': set('scientists and medical discoveries', [
    d('Howard Florey', 'Florey helped develop penicillin into a practical treatment, but Alexander Fleming first observed its antibacterial effect.'),
    d('Ernst Chain', 'Chain contributed to penicillin’s development as a medicine, rather than making the initial mold observation.'),
    d('Joseph Lister', 'Lister pioneered antiseptic surgery before the discovery of penicillin.'),
  ]),
  'inventions-014': set('navigation instruments and celestial measurement', [
    d('Magnetic compass', 'A compass indicates magnetic direction but does not measure the angle of a celestial object above the horizon.'),
    d('Marine chronometer', 'A chronometer keeps precise time for longitude calculations; it does not directly measure a celestial angle.'),
    d('Barometer', 'A barometer measures atmospheric pressure rather than celestial altitude.'),
  ]),
  'inventions-015': set('scientific measurement quantities', [
    d('Atmospheric pressure', 'Atmospheric pressure is measured by a barometer, not a thermometer.'),
    d('Humidity', 'Humidity is measured with a hygrometer.'),
    d('Wind speed', 'Wind speed is measured with an anemometer.'),
  ]),
  'inventions-016': set('electrical energy storage devices', [
    d('Capacitor', 'A capacitor stores energy in an electric field rather than through the chemical reactions of a battery.'),
    d('Generator', 'A generator converts mechanical energy into electrical energy; it is not primarily a chemical storage device.'),
    d('Solar cell', 'A solar cell converts incoming light to electricity rather than storing energy chemically.'),
  ]),
  'inventions-017': set('digital data transmission technologies', [
    d('Copper Ethernet cable', 'Ethernet cables commonly carry data as electrical signals over copper rather than light through glass fibers.'),
    d('Coaxial cable', 'Coaxial cable carries electrical or radio-frequency signals through a copper conductor, not light pulses in glass strands.'),
    d('Wi-Fi', 'Wi-Fi sends data over radio waves through the air rather than through glass fibers.'),
  ]),
  'inventions-018': set('computing pioneers and inventors', [
    d('Vint Cerf', 'Cerf helped develop Internet protocols, but the World Wide Web was developed by Tim Berners-Lee.'),
    d('Robert Kahn', 'Kahn co-developed core Internet protocols, a different contribution from developing the World Wide Web.'),
    d('Douglas Engelbart', 'Engelbart pioneered interactive computing and the mouse, but he did not develop the Web at CERN.'),
  ]),
  'inventions-019': set('renewable energy machinery', [
    d('Solar panel', 'A solar panel converts sunlight to electricity and does not use rotating blades driven by wind.'),
    d('Hydroelectric generator', 'A hydroelectric generator uses flowing water to turn machinery rather than wind.'),
    d('Windmill', 'A windmill uses wind to perform mechanical work, while the device described is designed to generate electrical power.'),
  ]),
  'inventions-020': set('optical magnification instruments', [
    d('Telescope', 'A telescope is designed to view distant objects, not primarily to magnify tiny nearby specimens.'),
    d('Binoculars', 'Binoculars magnify distant scenes but are not the instrument typically used to inspect tiny objects.'),
    d('Magnifying glass', 'A magnifying glass enlarges nearby objects, but the device with an instrumented viewing system in the question is a microscope.'),
  ]),
};

// These per-question placements follow the chapter themes in src/themes.js.
// Each tuple is [topicId, subtopic, chapterId].
const CURRICULUM = {
  'biology-002':['photosynthesis','Light-driven sugar production',4],
  'biology-003':['cell-theory','Cells as the basic unit of life',1],
  'biology-004':['cell-organelles','Organelles and cellular energy',1],
  'biology-005':['plant-pigments','Plant pigments and photosynthesis',4],
  'biology-006':['vertebrates','Animals with backbones',7],
  'biology-007':['parasitism','Species interactions and parasitism',8],
  'biology-008':['blood-transport','Gas transport by red blood cells',6],
  'biology-009':['mycology','Fungi and their study',5],
  'biology-010':['pollination','Pollen transfer in flowering plants',4],
  'biology-011':['autotrophy','Organisms that make their own food',4],
  'biology-012':['mitosis','Cell division and mitosis',1],
  'biology-013':['protein-structure','Amino acids and proteins',1],
  'biology-014':['animal-behavior','Nocturnal activity patterns',7],
  'biology-015':['immune-cells','White blood cells and defense',6],
  'biology-016':['mutualism','Mutualistic species interactions',8],
  'biology-017':['natural-selection','Adaptation by natural selection',3],
  'biology-018':['ornithology','Bird study and classification',7],
  'biology-019':['genotype','Genetic makeup and heredity',2],
  'biology-020':['fungal-kingdom','Mushrooms, yeasts, and fungi',5],

  'sports-001':['soccer-roster','Players on a standard soccer side',3],
  'sports-002':['tennis-scoring','Zero and other tennis score terms',7],
  'sports-003':['olympic-symbol','The Olympic rings',9],
  'sports-005':['basketball-scoring','Free throws and point values',2],
  'sports-006':['olympic-history','The first modern Olympic Games',9],
  'sports-008':['baseball-rules','Strike counts and batter outcomes',8],
  'sports-011':['volleyball-roster','Indoor volleyball on-court players',2],
  'sports-012':['ice-hockey-equipment','Puck and playing equipment',6],
  'sports-016':['baseball-field','Bases and home plate',8],
  'sports-017':['chessboxing','Chess and boxing as a hybrid sport',5],
  'sports-018':['basketball-roster','Standard basketball on-court players',2],

  'movies-001':['classic-fantasy-film','The Wizard of Oz and classic fantasy',10],
  'movies-003':['fantasy-franchises','Hogwarts and the Harry Potter films',4],
  'movies-004':['film-direction','Creative direction and film production roles',2],
  'movies-005':['animated-films','Finding Nemo and animated features',3],
  'movies-006':['adventure-franchises','Indiana Jones and adventure films',4],
  'movies-007':['studio-history','Studios and iconic characters',2],
  'movies-008':['television-awards','Awards for American television',8],
  'movies-009':['science-fiction-film','Star Wars and space-fantasy films',4],
  'movies-010':['screenwriting','Screenplays and written film action',2],
  'movies-011':['feature-film-history','The 1997 Titanic film',10],
  'movies-012':['film-promotion','Trailers and promotional previews',5],
  'movies-013':['animated-musicals','Frozen and animated songs',3],
  'movies-014':['animation','Animated film categories and techniques',3],
  'movies-015':['world-cinema-actors','Actors and Black Panther roles',7],
  'movies-016':['fictional-worlds','Wakanda and imagined film settings',4],
  'movies-017':['visual-effects','Compositing and film image techniques',2],
  'movies-018':['time-travel-films','Back to the Future and time travel',4],
  'movies-019':['film-festivals','Cannes and international festivals',7],
  'movies-020':['early-sound-film','Synchronized dialogue in early features',1],

  'music-001':['violin-family','Violin strings and bowed instruments',2],
  'music-002':['musical-notation','Clefs and pitch registers',3],
  'music-003':['tempo','Speed and tempo in music',1],
  'music-005':['chords','Triads and chord structures',1],
  'music-006':['brass-instruments','The trumpet and brass family',6],
  'music-007':['accidentals','Sharps and semitone changes',3],
  'music-009':['solo-performance','Soloists and instrumental performances',6],
  'music-010':['baroque-composers','Vivaldi and The Four Seasons',6],
  'music-011':['note-names','Letter names across an octave',3],
  'music-013':['dynamics','Crescendo and changing loudness',1],
  'music-014':['soul-singers','Aretha Franklin and soul music',8],
  'music-015':['voice-ranges','Bass and adult vocal ranges',6],
  'music-016':['cello-family','Cello and bowed string sizes',2],
  'music-017':['dynamics','Forte and volume markings',1],
  'music-018':['jazz','Improvisation and swing',7],
  'music-019':['intervals','Distance between pitches',3],

  'nature-002':['monotremes','Platypus and egg-laying mammals',5],
  'nature-003':['wolf-behavior','Wolf group behavior',5],
  'nature-004':['oak-trees','Acorns and tree species',1],
  'nature-005':['animal-speed','Fast-running land animals',5],
  'nature-006':['bird-vocalization','Bird groups and vocal mimicry',5],
  'nature-007':['insect-life-cycles','Caterpillars and adult butterflies or moths',5],
  'nature-008':['beavers','Dam-building animals and rivers',7],
  'nature-009':['habitats','Organisms and their natural homes',10],
  'nature-010':['antarctic-wildlife','Penguins and Antarctic birds',2],
  'nature-011':['marine-mammals','Blue whales and animal size',2],
  'nature-012':['bats','Echolocation in flying mammals',8],
  'nature-013':['plant-life-cycles','Perennial plant life spans',6],
  'nature-014':['savanna-mammals','Zebras and African wildlife',3],
  'nature-015':['reptiles','Komodo dragon classification',5],
  'nature-016':['migration','Seasonal animal movement',5],
  'nature-017':['silkworms','Silk-producing insects',5],
  'nature-018':['elephants','African bush elephants',3],
  'nature-019':['cephalopods','Octopuses and other cephalopods',2],
  'nature-020':['transpiration','Water vapor loss from plants',1],

  'food-002':['spices','Turmeric and culinary color',3],
  'food-003':['guacamole','Avocado and Mexican dips',7],
  'food-004':['sushi','Japanese sushi traditions',7],
  'food-005':['tofu','Soybeans and tofu',7],
  'food-006':['pesto','Basil in Genoese pesto',7],
  'food-007':['hummus','Chickpeas and hummus',7],
  'food-008':['dried-fruit','Grapes and raisins',8],
  'food-009':['kimchi','Korean fermented cabbage dishes',7],
  'food-010':['spanakopita','Phyllo pastry in Greek cooking',7],
  'food-011':['marzipan','Almonds and confectionery',6],
  'food-012':['miso','Soybeans in miso paste',7],
  'food-013':['pizza-cheese','Mozzarella and pizza',7],
  'food-014':['pasta-shapes','Orzo and rice-shaped pasta',2],
  'food-015':['cider','Apples and fermented cider',8],
  'food-016':['polenta','Cornmeal and grain dishes',2],
  'food-018':['dairy-byproducts','Buttermilk from churning',9],
  'food-019':['tahini','Sesame seeds and tahini',2],
  'food-020':['sourdough','Yeasts and bacteria in fermentation',9],

  'logic-002':['arithmetic-patterns','Constant-difference sequences',3],
  'logic-003':['weekday-reasoning','Counting forward through weekdays',2],
  'logic-004':['number-properties','Odd and even classification',1],
  'logic-005':['conditional-deduction','Exhaustive color alternatives',2],
  'logic-006':['fibonacci-sequence','Sequences built from prior terms',3],
  'logic-008':['shape-classification','Plane figures and solid shapes',1],
  'logic-009':['categorical-deduction','Conclusions from group premises',4],
  'logic-010':['doubling-sequences','Repeated multiplication patterns',3],
  'logic-011':['logical-implication','One-way inclusion and converse errors',2],
  'logic-012':['lateral-reasoning','Comparing equal quantities',9],
  'logic-013':['clock-angles','Clock hands and angle measures',7],
  'logic-015':['word-problems','Reading “all but” quantity statements',6],
  'logic-017':['doubling-sequences','Missing terms in doubling patterns',3],
  'logic-018':['ordering','Relative positions in a race',7],
  'logic-019':['directional-reasoning','North and south relations',2],
  'logic-020':['square-numbers','Sequences of perfect squares',3],

  'inventions-001':['movable-type-printing','European movable-type printing',3],
  'inventions-002':['telephony','Wired voice communication',8],
  'inventions-003':['powered-flight','The Wright brothers and 1903 flight',7],
  'inventions-004':['telescopes','Lenses for viewing distant objects',2],
  'inventions-006':['smallpox-vaccine','Edward Jenner and vaccination',6],
  'inventions-007':['barometers','Measuring atmospheric pressure',9],
  'inventions-008':['compass-navigation','Direction-finding with a compass',2],
  'inventions-009':['printing-press','Mechanical reproduction with inked type',3],
  'inventions-010':['incandescent-lighting','Practical incandescent light bulbs',4],
  'inventions-011':['ultrasound','Sound waves in medical imaging',6],
  'inventions-012':['video-recording','Electronic moving-image recording',8],
  'inventions-013':['penicillin','Fleming and antibiotic discovery',6],
  'inventions-014':['sextant-navigation','Celestial angles and latitude',2],
  'inventions-015':['thermometers','Measuring temperature',6],
  'inventions-016':['batteries','Chemical storage of electrical energy',4],
  'inventions-017':['fiber-optics','Light-based data transmission',8],
  'inventions-018':['world-wide-web','The Web and its development',8],
  'inventions-019':['wind-turbines','Wind power generation',4],
  'inventions-020':['microscopes','Magnification of tiny objects',2],
};

export const BATCH_B_OPTION_SETS = Object.fromEntries(
  Object.entries(AUTHORED_OPTION_SETS).map(([id, optionSet]) => {
    const [topicId, subtopic, chapterId] = CURRICULUM[id];
    return [id, { ...optionSet, topicId, subtopic, chapterId }];
  }),
);
