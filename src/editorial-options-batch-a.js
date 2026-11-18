// Explicit editorial distractors for the remaining legacy seeds in six worlds.
// Rationales are review notes, not source citations or player-facing explanations.
const d = (text, rationale) => ({ text, rationale });
const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });

const BATCH_A_RAW_OPTION_SETS = {
  'general-001': set('Earth oceans', [
    d('Atlantic Ocean', 'The Atlantic is the second-largest ocean by area.'),
    d('Indian Ocean', 'The Indian Ocean is smaller than the Pacific.'),
    d('Arctic Ocean', 'The Arctic is the smallest of the major oceans.'),
  ]),
  'general-002': set('national languages', [
    d('Spanish', 'Spanish is the primary language in many neighboring countries, but Brazil’s official language is Portuguese.'),
    d('French', 'French is spoken in some countries in South America, but it is not Brazil’s primary language.'),
    d('Italian', 'Italian is a Romance language, but it is not the language primarily spoken in Brazil.'),
  ]),
  'general-003': set('national capitals', [
    d('Kyoto', 'Kyoto was Japan’s former imperial capital, not its current capital.'),
    d('Osaka', 'Osaka is a major Japanese city, but it is not the national capital.'),
    d('Nagoya', 'Nagoya is a major Japanese city, but Tokyo is the capital.'),
  ]),
  'general-004': set('weather instruments', [
    d('Thermometer', 'A thermometer measures temperature, not the amount of water vapor in the air.'),
    d('Barometer', 'A barometer measures atmospheric pressure rather than humidity.'),
    d('Anemometer', 'An anemometer measures wind speed rather than humidity.'),
  ], { question:'Which instrument measures the amount of water vapor in the air?', correctText:'Hygrometer', why:'A hygrometer measures humidity, the amount of water vapor in the air.' }),
  'general-005': set('polygon side counts', [
    d('Five', 'A five-sided polygon is a pentagon.'),
    d('Seven', 'A seven-sided polygon is a heptagon.'),
    d('Eight', 'An eight-sided polygon is an octagon.'),
  ]),
  'general-006': set('currencies', [
    d('Won', 'The won is used in Korea, not Japan.'),
    d('Yuan', 'The yuan is China’s currency.'),
    d('Baht', 'The baht is Thailand’s currency.'),
  ]),
  'general-007': set('compass directions', [
    d('West', 'The Sun appears to set in the west, opposite its apparent rising direction.'),
    d('North', 'North is a compass direction but not the direction of sunrise in the usual daily motion.'),
    d('South', 'South is a compass direction; sunrise is generally toward the east.'),
  ]),
  'general-008': set('word relationship terms', [
    d('Synonym', 'A synonym has a similar meaning rather than an opposite one.'),
    d('Homonym', 'A homonym shares a form or sound with another word but does not mean its opposite.'),
    d('Acronym', 'An acronym is formed from initial letters; it describes word formation, not opposite meaning.'),
  ]),
  'general-009': set('respiratory gases', [
    d('Carbon dioxide', 'Humans exhale carbon dioxide as a waste product of metabolism.'),
    d('Nitrogen', 'Nitrogen makes up most of the air but is not the gas human cells use for aerobic respiration.'),
    d('Helium', 'Helium is not a respiratory gas that supports human metabolism.'),
  ]),
  'general-010': set('largest living animals', [
    d('Fin whale', 'The fin whale is enormous, but the blue whale is the largest animal known to live today.'),
    d('African bush elephant', 'The African bush elephant is the largest living land animal, but the blue whale is larger overall.'),
    d('Whale shark', 'The whale shark is the largest fish, but it is not larger than the blue whale.'),
  ], { question:'What is the largest animal alive today?', correctText:'Blue whale', why:'The blue whale is the largest known living animal; the African bush elephant is the largest living land animal.' }),
  'general-011': set('elements liquid near room temperature', [
    d('Gallium', 'Gallium melts near ordinary warm-room temperatures but is solid at typical room temperature.'),
    d('Lead', 'Lead is a metal, but it is solid at ordinary room temperature.'),
    d('Cesium', 'Cesium melts just above ordinary room temperature and is generally solid indoors.'),
  ], { question:'At 20 °C, which metal is liquid?', source:{ title:'Royal Society of Chemistry · Mercury', url:'https://periodic-table.rsc.org/element/80/Mercury', status:'verified' }, verifiedAt:'2026-11-16' }),
  'general-012': set('materials bees gather from flowers', [
    d('Pollen', 'Bees gather pollen as food, but nectar is the sugary liquid used to make honey.'),
    d('Sap', 'Sap comes from plant tissues and is not the usual floral material bees collect to make honey.'),
    d('Dew', 'Dew is condensed water, not the flower-derived sugar source for honey.'),
  ]),
  'general-013': set('polygon names', [
    d('Hexagon', 'A hexagon has six sides.'),
    d('Heptagon', 'A heptagon has seven sides.'),
    d('Nonagon', 'A nonagon has nine sides.'),
  ]),
  'general-014': set('planetary features', [
    d('Venus', 'Venus has a dense carbon-dioxide atmosphere, but the Great Red Spot is a feature of Jupiter.'),
    d('Mars', 'Mars has large dust storms and Olympus Mons, but not Jupiter’s Great Red Spot.'),
    d('Saturn', 'Saturn has prominent rings and storms, but the Great Red Spot is on Jupiter.'),
  ], { question:'Which planet is known for the Great Red Spot, a long-lived storm in its atmosphere?', correctText:'Jupiter', why:'The Great Red Spot is a vast, long-lived storm in Jupiter’s atmosphere.' }),
  'general-016': set('continents', [
    d('Asia', 'Asia lies east of Africa and does not contain the Sahara.'),
    d('Europe', 'Europe is north of the Sahara, but the desert lies in Africa.'),
    d('South America', 'South America contains the Atacama and other deserts, not the Sahara.'),
  ]),
  'general-018': set('traditional rainbow color counts', [
    d('Five', 'Five omits colors from the traditional seven-color naming convention.'),
    d('Six', 'Six is a common simplified count, but the traditional named list has seven.'),
    d('Eight', 'Eight adds a color beyond the traditional seven-color list.'),
  ]),
  'general-019': set('human auditory ossicles', [
    d('Wrist', 'The wrist contains small carpal bones, but the body’s smallest bones are in the middle ear.'),
    d('Nose', 'The nose has cartilage and facial bones, not the smallest bones in the body.'),
    d('Spine', 'The spine contains vertebrae; the tiny auditory ossicles are smaller.'),
  ]),

  'science-001': set('chemical building blocks', [
    d('Molecule', 'A molecule can contain atoms from one or more elements; an atom retains an element’s identity.'),
    d('Proton', 'A proton is a subatomic particle and alone does not constitute the chemical unit of an element.'),
    d('Compound', 'A compound contains atoms of multiple elements chemically combined.'),
  ]),
  'science-002': set('states of matter by shape and volume', [
    d('Solid', 'A solid generally has a fixed shape as well as a fixed volume.'),
    d('Gas', 'A gas has neither a fixed shape nor a fixed volume.'),
    d('Plasma', 'Plasma expands to fill its container and does not keep a fixed volume.'),
  ]),
  'science-003': set('fundamental interactions near Earth', [
    d('Magnetism', 'Magnetism can attract or repel certain materials but is not the force that pulls ordinary objects toward Earth.'),
    d('Friction', 'Friction resists relative motion between surfaces in contact.'),
    d('Electrostatic force', 'Electrostatic force acts between electric charges, rather than explaining objects’ general attraction to Earth.'),
  ]),
  'science-004': set('photosynthetic pigments', [
    d('Hemoglobin', 'Hemoglobin binds oxygen in many animals; it is not the main plant pigment capturing light for photosynthesis.'),
    d('Melanin', 'Melanin absorbs light in many organisms but is not the plant photosynthetic pigment asked for.'),
    d('Keratin', 'Keratin is a structural protein, not a light-capturing plant pigment.'),
  ]),
  'science-005': set('atomic structures', [
    d('Electron cloud', 'The electron cloud surrounds the nucleus rather than forming the atom’s central region.'),
    d('Proton', 'A proton is a positively charged particle within the nucleus, not the name of the central structure.'),
    d('Electron', 'An electron is a negatively charged particle found outside the nucleus.'),
  ]),
  'science-007': set('subatomic particle charges', [
    d('Proton', 'A proton carries a positive charge.'),
    d('Neutron', 'A neutron has no net electric charge.'),
    d('Positron', 'A positron carries positive charge, the opposite of an electron.'),
  ]),
  'science-008': set('SI derived units', [
    d('Joule', 'A joule is the SI unit of energy and work.'),
    d('Watt', 'A watt is the SI unit of power.'),
    d('Pascal', 'A pascal is the SI unit of pressure.'),
  ]),
  'science-009': set('forms of stored mechanical energy', [
    d('Gravitational potential energy', 'This energy is associated with position in a gravitational field, not elastic deformation.'),
    d('Kinetic energy', 'Kinetic energy is energy of motion rather than energy stored by deformation.'),
    d('Chemical potential energy', 'Chemical potential energy is stored in chemical arrangements, not in a stretched spring.'),
  ]),
  'science-011': set('scientific magnifying instruments', [
    d('Telescope', 'A telescope is designed to observe distant objects, especially celestial ones.'),
    d('Binoculars', 'Binoculars magnify distant scenes for two eyes, not microscopic specimens.'),
    d('Periscope', 'A periscope uses mirrors or prisms to view around an obstruction.'),
  ]),
  'science-012': set('SI base units', [
    d('Volt', 'A volt measures electric potential difference.'),
    d('Ohm', 'An ohm measures electrical resistance.'),
    d('Coulomb', 'A coulomb measures electric charge.'),
  ]),
  'science-013': set('thermoregulatory animal groups', [
    d('Ectotherms', 'Ectotherms rely more on external heat sources and do not maintain a stable temperature primarily through internal heat production.'),
    d('Poikilotherms', 'Poikilotherm describes variable body temperature; it is not the term for internally maintaining a stable temperature.'),
    d('Invertebrates', 'Invertebrate refers to animals without backbones and does not specify temperature regulation.'),
  ]),
  'science-015': set('phase transitions', [
    d('Melting', 'Melting changes a solid into a liquid.'),
    d('Condensation', 'Condensation changes a gas into a liquid.'),
    d('Sublimation', 'Sublimation changes a solid directly into a gas.'),
  ]),
  'science-016': set('rock classes by formation', [
    d('Sedimentary rock', 'Sedimentary rock forms from accumulated and lithified sediment, not cooled magma or lava.'),
    d('Metamorphic rock', 'Metamorphic rock forms when existing rock is altered by heat, pressure, or fluids.'),
    d('Clastic rock', 'Clastic describes a sedimentary texture and does not name the rock class formed from molten material.'),
  ]),
  'science-017': set('scientific reasoning terms', [
    d('Theory', 'A scientific theory is a broad, well-supported explanatory framework, rather than a single proposed testable explanation.'),
    d('Law', 'A scientific law describes a consistent pattern or relationship and is not simply a testable proposed explanation.'),
    d('Observation', 'An observation records information; a hypothesis proposes an explanation that can be tested.'),
  ]),
  'science-018': set('Earth layers', [
    d('Outer core', 'The outer core lies below the mantle, not directly beneath the crust.'),
    d('Inner core', 'The inner core is Earth’s deepest major layer.'),
    d('Lithosphere', 'The lithosphere includes the crust and the uppermost mantle rather than being the layer directly beneath the crust.'),
  ]),
  'science-019': set('wave and light behaviors', [
    d('Diffraction', 'Diffraction is wave spreading around an obstacle or through an opening.'),
    d('Reflection', 'Reflection sends light back from a surface rather than describing its direction change between media.'),
    d('Dispersion', 'Dispersion separates components by wavelength, such as colors in a prism; refraction is the bending at a medium boundary.'),
  ]),
  'science-020': set('ecological diversity measures', [
    d('Population density', 'Population density counts individuals per area and does not measure the variety of life.'),
    d('Biomass', 'Biomass measures the mass of living material, not the variety of organisms.'),
    d('Species richness', 'Species richness counts species and is one component of biodiversity, but biodiversity is the broader term.'),
  ]),

  'technology-001': set('computer component abbreviations', [
    d('Computer processing unit', 'The standard expansion is Central processing unit; the term describes the processor, not a separate computer-processing unit.'),
    d('Central program utility', 'This is not the established expansion of CPU.'),
    d('Core processing user', 'This is not the standard name for the computer’s central processor.'),
  ]),
  'technology-003': set('web address abbreviations', [
    d('Universal Transfer Protocol', 'A protocol is a set of communication rules; URL names a resource locator.'),
    d('Uniform Transmission Link', 'This phrase is not the standard expansion of URL.'),
    d('United Resource Library', 'URL identifies a resource location, not a library.'),
  ]),
  'technology-004': set('software companies', [
    d('Apple', 'Apple makes operating systems such as macOS, but Microsoft created Windows.'),
    d('IBM', 'IBM developed several important operating systems, but Windows is Microsoft’s product family.'),
    d('Google', 'Google develops Android and ChromeOS, not the Windows operating system.'),
  ]),
  'technology-005': set('web markup purposes', [
    d('Database storage', 'HTML structures web documents; databases store organized records.'),
    d('Network routing', 'Routing directs network traffic, while HTML marks up web content.'),
    d('Image compression', 'Image formats compress or encode pictures; HTML describes page structure and content.'),
  ]),
  'technology-006': set('computer memory roles', [
    d('Permanent long-term archive', 'RAM is volatile working memory, not a permanent archive.'),
    d('Graphics output', 'A display or graphics system produces visual output; RAM temporarily holds data.'),
    d('Network connection', 'A network adapter provides connectivity, while RAM holds active data and instructions.'),
  ]),
  'technology-007': set('computer output devices', [
    d('Scanner', 'A scanner converts a physical page into digital data.'),
    d('Projector', 'A projector displays visual output on a surface rather than printing it on paper.'),
    d('Speaker', 'A speaker produces audio output, not a printed page.'),
  ]),
  'technology-008': set('peripheral connection standards', [
    d('Universal System Bus', 'USB expands to Universal Serial Bus; “system” is not the standard word.'),
    d('Unified Serial Board', 'This is not the standard expansion of USB.'),
    d('Universal Storage Bridge', 'USB is a bus standard for connections, not a storage bridge.'),
  ]),
  'technology-009': set('software licensing models', [
    d('Freeware', 'Freeware is distributed without a purchase price, but its source code need not be available.'),
    d('Shareware', 'Shareware is often trial or limited-use software; that term does not imply public source code.'),
    d('Proprietary software', 'Proprietary software generally keeps source code controlled by its owner.'),
  ]),
  'technology-010': set('computer display hardware', [
    d('Keyboard', 'A keyboard is an input device.'),
    d('Graphics card', 'A graphics card generates or processes visual output, but the monitor displays it.'),
    d('Printer', 'A printer creates hard-copy output rather than displaying it on a screen.'),
  ]),
  'technology-011': set('wireless networking capabilities', [
    d('Connect with a cable to a network', 'Wi-Fi provides wireless network connectivity.'),
    d('Store files permanently', 'Storage devices preserve files; Wi-Fi communicates over a wireless network.'),
    d('Charge a battery without contact', 'Wireless charging transfers power, while Wi-Fi carries network data.'),
  ]),
  'technology-012': set('software interface symbols', [
    d('Widget', 'A widget is an interactive or informational interface element, not simply a small representative picture.'),
    d('Cursor', 'A cursor marks a location or selection on screen.'),
    d('Thumbnail', 'A thumbnail is a reduced preview of an image or page, not the usual label for an app or file symbol.'),
  ]),
  'technology-013': set('digital image file formats', [
    d('PNG image', 'PNG is another common raster image format, but .jpg conventionally indicates JPEG.'),
    d('GIF animation', 'GIF can store images and simple animations, but .jpg usually signals JPEG encoding.'),
    d('TIFF document', 'TIFF is an image format often used for high-quality graphics and scans, not the usual meaning of .jpg.'),
  ]),
  'technology-014': set('internet access applications', [
    d('Search engine', 'A search engine finds pages, usually through a browser; it is not the program that accesses and displays websites.'),
    d('Web server', 'A web server hosts or serves website resources rather than acting as the user’s website-access program.'),
    d('Email client', 'An email client handles email rather than general web-page access.'),
  ]),
  'technology-015': set('global computer networks', [
    d('World Wide Web', 'The Web is a system of linked resources that operates over the Internet; it is not the underlying global network itself.'),
    d('Local area network', 'A LAN connects devices in a limited area rather than forming the worldwide network of networks.'),
    d('Intranet', 'An intranet is a private organization network, not the public global network.'),
  ], { question:'What is the global network of interconnected computer networks called?' }),
  'technology-016': set('satellite navigation acronyms', [
    d('Geographic Positioning Service', 'GPS expands to Global Positioning System; it is a system, not a positioning service.'),
    d('Global Pathfinding Service', 'This is not the standard expansion of GPS.'),
    d('Geospatial Positioning Satellite', 'GPS names a positioning system, not a single satellite.'),
  ]),
  'technology-017': set('data-protection practices', [
    d('Make a recoverable copy of data', 'This is the intended purpose of a backup, so it is not a valid distractor.'),
    d('Increase processor speed', 'A backup copies data and does not make the processor run faster.'),
    d('Prevent every security attack', 'Backups can aid recovery but cannot prevent all attacks or data loss.'),
  ], { distractors:[
    d('Increase processor speed', 'A backup copies data and does not make the processor run faster.'),
    d('Prevent every security attack', 'Backups can aid recovery but cannot prevent all attacks or data loss.'),
    d('Replace the operating system', 'A backup may include system data, but the main purpose is preserving a recoverable copy, not replacing the OS.'),
  ]}),
  'technology-018': set('computing procedure concepts', [
    d('A step-by-step procedure', 'This is what an algorithm provides, so it would duplicate the correct choice.'),
    d('A physical storage device', 'An algorithm is a procedure, not hardware that stores data.'),
    d('A programming language', 'A language expresses instructions; an algorithm is the procedure those instructions implement.'),
  ], { distractors:[
    d('A physical storage device', 'An algorithm is a procedure, not hardware that stores data.'),
    d('A programming language', 'A language expresses instructions; an algorithm is the procedure those instructions implement.'),
    d('A computer’s power supply', 'A power supply provides electrical energy, not a sequence of problem-solving steps.'),
  ]}),
  'technology-019': set('computer storage devices', [
    d('Hard disk drive', 'A conventional hard disk drive stores data on rotating magnetic platters.'),
    d('Optical disc drive', 'An optical drive uses a laser to read or write a disc and has moving parts.'),
    d('Magnetic tape drive', 'Tape drives use moving tape rather than solid-state flash memory.'),
  ]),
  'technology-020': set('account login security methods', [
    d('A second verification step', 'This is what two-factor authentication adds, so it cannot serve as a distractor.'),
    d('A longer password requirement', 'Password length can improve a single factor but does not itself add a second factor.'),
    d('Automatic public sharing', 'Sharing settings do not add another identity verification factor.'),
  ], { distractors:[
    d('A longer password requirement', 'Password length can improve a single factor but does not itself add a second factor.'),
    d('Automatic public sharing', 'Sharing settings do not add another identity verification factor.'),
    d('A faster network connection', 'Network speed does not verify a user’s identity.'),
  ]}),

  'ai-002': set('technical acronym expansions', [
    d('Automated interface', 'This describes a possible software feature, not the expansion of AI.'),
    d('Algorithmic integration', 'This phrase is not the established expansion of AI.'),
    d('Applied informatics', 'Applied informatics is a field phrase, not what the letters AI stand for here.'),
  ]),
  'ai-004': set('machine-learning data roles', [
    d('Testing a finished model on held-out examples', 'Test data evaluates a trained model; training data is used to fit it.'),
    d('Storing a model’s final predictions', 'Prediction logs can be stored, but training data supplies examples for learning.'),
    d('Encrypting the model’s files', 'Encryption protects data and is separate from using examples to teach model patterns.'),
  ]),
  'ai-005': set('prompt-response terminology', [
    d('A training label', 'A training label is an expected answer attached to an example, not generally a system output to a prompt.'),
    d('A parameter', 'A parameter is an internal model value, not the conversational output.'),
    d('A dataset', 'A dataset is a collection of examples, not the answer generated for one prompt.'),
  ]),
  'ai-006': set('AI perception fields', [
    d('Spoken audio', 'Audio processing concerns sound; computer vision focuses on visual inputs.'),
    d('Written legal rules', 'Rule interpretation is not the visual information computer vision is designed to analyze.'),
    d('Database tables', 'Database analysis handles structured records, not primarily image and video interpretation.'),
  ]),
  'ai-007': set('AI language fields', [
    d('Image recognition', 'Image recognition is a computer-vision task rather than the focus of natural language processing.'),
    d('Robot movement', 'Robotics studies sensing and action in physical systems, not language as its central subject.'),
    d('Database indexing', 'Indexing helps organize and retrieve records but does not define natural language processing.'),
  ]),
  'ai-009': set('conversational software', [
    d('Sort images into visual categories', 'Image classification is a computer-vision task, not the defining purpose of a chatbot.'),
    d('Route network packets', 'Packet routing is a networking function.'),
    d('Compress files for storage', 'File compression reduces data size and is unrelated to conversational interaction.'),
  ]),
  'ai-010': set('machine-learning model components', [
    d('A training example', 'A training example is data presented to the model, not one of its learned numerical values.'),
    d('A final prediction', 'A prediction is model output, not a parameter adjusted during learning.'),
    d('A user instruction', 'A prompt or instruction is input context, not an internal learned model value.'),
  ]),
  'ai-011': set('generative AI reliability terms', [
    d('A verified answer supported by reliable evidence', 'A hallucination describes unsupported or incorrect output, not verified information.'),
    d('A refusal to answer any prompt', 'A refusal is a response behavior and does not by itself mean the system hallucinated.'),
    d('A private training example revealed verbatim', 'That could be a privacy or memorization issue; hallucination refers to unsupported or inaccurate generated content.'),
  ]),
  'ai-012': set('data organization terms', [
    d('A single model parameter', 'A parameter is one learned value rather than a collection of related data.'),
    d('A computer program', 'A program contains instructions; a dataset contains organized data.'),
    d('A network connection', 'A network connection links systems and is not a collection of data examples.'),
  ]),
  'ai-013': set('machine-learning prediction types', [
    d('A continuous numeric value only', 'A regression model predicts numeric values; a classifier predicts categories or labels.'),
    d('A sequence of computer instructions', 'Instructions are code; a classifier assigns an input to a category.'),
    d('A hardware fault', 'Hardware diagnosis may be one application, but it is not the general output type of a classifier.'),
  ]),
  'ai-014': set('reinforcement-learning signals', [
    d('Labeled examples only, without interaction', 'That describes supervised learning more closely; reinforcement learning uses action and reward feedback.'),
    d('A fixed list of hand-written rules', 'Rules can be programmed directly, but reinforcement learning learns behavior through feedback.'),
    d('Unlabeled data with no feedback', 'Unsupervised learning may find structure in unlabeled data; reinforcement learning relies on rewards or penalties.'),
  ]),
  'ai-016': set('generative model outputs', [
    d('Only a class label from a fixed list', 'That is a typical discriminative classification output rather than newly generated content.'),
    d('A measurement of input size', 'Input size is a property of the data, not the new content a generative system aims to create.'),
    d('A hardware component', 'Generative AI produces digital outputs, not physical computer components.'),
  ]),
  'ai-017': set('algorithmic outcome patterns', [
    d('A random one-time error', 'A random isolated error is not necessarily a systematic pattern in outcomes.'),
    d('A perfectly equal result for every group', 'Bias often involves systematic skew; identical outcomes are not its definition.'),
    d('A model’s file size', 'File size describes storage requirements rather than fairness or skew in outcomes.'),
  ]),
  'ai-018': set('machine-learning model families', [
    d('Images and video only', 'Vision models focus on images and video; large language models are primarily trained to work with language.'),
    d('Sensor measurements only', 'Sensor models use numerical signals, but language models are centered on text and language.'),
    d('Geographic coordinates only', 'Coordinate models process spatial data rather than language as their primary domain.'),
  ]),
  'ai-019': set('personalized information systems', [
    d('Items that should be removed from storage', 'Deletion or cleanup systems identify data to remove, not content a user may find relevant.'),
    d('Network routes for data packets', 'Routers select network paths; recommendation systems rank content or products for users.'),
    d('Random items unrelated to user signals', 'Recommendations generally use relevance signals rather than deliberately unrelated choices.'),
  ]),
  'ai-020': set('AI evaluation methods', [
    d('A model training algorithm', 'A training algorithm fits model parameters; a benchmark is a defined comparison and evaluation setup.'),
    d('A collection of model parameters', 'Parameters are learned values, not a standardized way to compare performance.'),
    d('A user interface for writing prompts', 'A prompt interface lets users interact with a system but does not itself measure performance.'),
  ]),

  'physics-001': set('SI energy and work units', [
    d('Watt', 'A watt measures power, or energy transfer per unit time.'),
    d('Newton', 'A newton measures force.'),
    d('Pascal', 'A pascal measures pressure.'),
  ]),
  'physics-002': set('near-surface gravitational acceleration', [
    d('About 1.6 meters per second squared', 'This is close to the Moon’s surface gravity, not Earth’s.'),
    d('About 3.7 meters per second squared', 'This is close to the surface gravity of Mars.'),
    d('About 24.8 meters per second squared', 'This is close to Jupiter’s cloud-top gravity, not Earth’s.'),
  ], { question:'What is the standard acceleration of free fall, rounded to one decimal place?', source:{ title:'NIST Guide to the SI · Appendix B.9', url:'https://www.nist.gov/pml/special-publication-811/nist-guide-si-appendix-b-conversion-factors/nist-guide-si-appendix-b9', status:'verified' }, verifiedAt:'2026-11-16' }),
  'physics-003': set('Newtonian motion laws', [
    d('Newton’s first law', 'The first law describes inertia and motion absent a net external force.'),
    d('Newton’s second law', 'The second law relates net force, mass, and acceleration.'),
    d('The law of universal gravitation', 'Universal gravitation describes mutual attraction between masses, not the action-reaction law.'),
  ]),
  'physics-004': set('SI electrical units', [
    d('Ampere', 'An ampere measures electric current.'),
    d('Volt', 'A volt measures electric potential difference.'),
    d('Ohm', 'An ohm measures electrical resistance.'),
  ]),
  'physics-006': set('SI rate and energy units', [
    d('Joule', 'A joule measures energy or work; a watt measures energy transferred per second.'),
    d('Newton', 'A newton measures force.'),
    d('Coulomb', 'A coulomb measures electric charge.'),
  ]),
  'physics-008': set('atomic particle charge states', [
    d('Proton', 'A proton has a positive electric charge.'),
    d('Electron', 'An electron has a negative electric charge.'),
    d('Positron', 'A positron has positive charge and is the electron’s antiparticle.'),
  ]),
  'physics-009': set('electrical resistance units', [
    d('Volts', 'Volts measure potential difference.'),
    d('Amperes', 'Amperes measure electric current.'),
    d('Watts', 'Watts measure power.'),
  ]),
  'physics-010': set('wave behavior around barriers', [
    d('Refraction', 'Refraction is a direction change when a wave enters a medium where its speed differs.'),
    d('Reflection', 'Reflection sends a wave back from a boundary.'),
    d('Interference', 'Interference is the combination of overlapping waves.'),
  ]),
  'physics-012': set('SI frequency units', [
    d('Second', 'A second is the SI unit of time; frequency counts cycles per second.'),
    d('Meter', 'A meter measures length.'),
    d('Watt', 'A watt measures power.'),
  ]),
  'physics-013': set('classical mechanics concepts', [
    d('Momentum', 'Momentum is mass times velocity; inertia describes resistance to changing motion.'),
    d('Impulse', 'Impulse is force applied over time and changes momentum.'),
    d('Acceleration', 'Acceleration is the rate of change of velocity, not an object’s resistance to motion change.'),
  ]),
  'physics-014': set('sound propagation speeds', [
    d('About 150 meters per second', 'This is far below the speed of sound in room-temperature air.'),
    d('About 1,500 meters per second', 'This is closer to sound’s speed in water, not air.'),
    d('About 30,000 meters per second', 'This greatly exceeds sound’s speed in air and is not a room-temperature air value.'),
  ], { question:'At 20 °C, approximately how fast does sound travel through air?', source:{ title:'NASA/SP-2015-624 · Acoustics and Noise Control in Space Crew Compartments', url:'https://ntrs.nasa.gov/api/citations/20160000818/downloads/20160000818.pdf', status:'verified' }, verifiedAt:'2026-11-16' }),
  'physics-016': set('mechanical energy forms', [
    d('Potential energy', 'Potential energy is associated with position or configuration; kinetic energy is associated with motion.'),
    d('Thermal energy', 'Thermal energy is associated with microscopic motion and interactions in matter.'),
    d('Chemical energy', 'Chemical energy is stored in molecular arrangements rather than being the general name for motion energy.'),
  ]),
  'physics-017': set('SI pressure units', [
    d('Newton', 'A newton is the SI unit of force; pressure is force per unit area.'),
    d('Joule', 'A joule measures energy or work.'),
    d('Bar', 'A bar is a pressure unit, but it is not the SI unit; the pascal is.'),
  ]),
  'physics-019': set('simple-machine pivot terms', [
    d('Load', 'The load is the resistance or object being moved by a lever.'),
    d('Effort', 'The effort is the applied input force.'),
    d('Fulcrum point', 'This phrase is another way to describe the fulcrum, so it duplicates the answer.'),
  ], { distractors:[
    d('Load', 'The load is the resistance or object being moved by a lever.'),
    d('Effort', 'The effort is the applied input force.'),
    d('Lever arm', 'A lever arm is the distance from the pivot to a force’s line of action, not the pivot itself.'),
  ]}),
  'physics-020': set('spherical mirror image behavior', [
    d('Convex mirror', 'A convex mirror gives an upright virtual image, but it cannot produce the real, inverted image specified for distant objects.'),
    d('Plane mirror', 'A plane mirror forms an upright virtual image and is not a spherical mirror with a focal point.'),
    d('Concave lens', 'A concave lens can produce an upright virtual image, but it is a lens and cannot produce the mirror behavior in the question.'),
  ], { question:'Which spherical mirror can form a real, inverted image for distant objects and a magnified, upright virtual image when an object is inside its focal length?' }),

  'history-001': set('ancient societies of northeastern Africa', [
    d('Ancient Romans', 'The Romans later ruled Egypt, but the Giza pyramids were built by ancient Egyptians millennia earlier.'),
    d('Ancient Greeks', 'Greek communities later had strong ties with Egypt, but they did not build the Giza pyramids.'),
    d('Phoenicians', 'Phoenicians were a maritime trading civilization and were not the builders of the Giza pyramids.'),
  ]),
  'history-002': set('ancient imperial capitals', [
    d('Constantinople', 'Constantinople later became the capital of the Eastern Roman Empire, but Rome was the original imperial center.'),
    d('Alexandria', 'Alexandria was an important city in Roman Egypt, but it was not the empire’s central capital.'),
    d('Carthage', 'Carthage was a major rival and later Roman provincial center, not the empire’s capital.'),
  ]),
  'history-003': set('twentieth-century dates', [
    d('1979', 'The wall was built in 1961 and fell in 1989, not 1979.'),
    d('1987', 'The wall remained in place until political events in 1989.'),
    d('1991', 'The Soviet Union dissolved in 1991; the Berlin Wall opened and fell earlier, in 1989.'),
  ]),
  'history-004': set('early United States presidents', [
    d('John Adams', 'Adams was the second U.S. president, following Washington.'),
    d('Thomas Jefferson', 'Jefferson was the third U.S. president.'),
    d('James Madison', 'Madison was the fourth U.S. president.'),
  ]),
  'history-006': set('Andean states and empires', [
    d('Aztec Empire', 'The Aztec Empire was centered in Mesoamerica, not around Cusco in the Andes.'),
    d('Maya civilization', 'Maya polities developed in Mesoamerica rather than building the Cusco-centered Andean road network.'),
    d('Wari Empire', 'The Wari were an earlier Andean civilization, but the extensive imperial road network centered on Cusco is associated with the Inca.'),
  ]),
  'history-007': set('early female aviators', [
    d('Bessie Coleman', 'Coleman was a pioneering licensed Black woman pilot, but she did not make the first solo transatlantic flight by a woman.'),
    d('Harriet Quimby', 'Quimby was the first American woman to earn a pilot license, but died before Earhart’s 1932 solo crossing.'),
    d('Amy Johnson', 'Johnson was a pioneering long-distance aviator, but not the first woman to fly solo across the Atlantic.'),
  ], { source:{ title:'National Air and Space Museum · Amelia Earhart’s Lockheed Vega 5B', url:'https://airandspace.si.edu/collection-objects/lockheed-vega-5b-amelia-earhart/nasm_A19670093000', status:'verified' }, verifiedAt:'2026-11-16' }),
  'history-008': set('revolutions beginning in 1789 France', [
    d('Russian Revolution', 'The Russian Revolutions took place in 1917, not in France in 1789.'),
    d('American Revolution', 'The American Revolution began earlier in the late eighteenth century and was centered in Britain’s North American colonies.'),
    d('Haitian Revolution', 'The Haitian Revolution began in 1791 in Saint-Domingue, not in France in 1789.'),
  ]),
  'history-009': set('ancient writing systems', [
    d('Hieroglyphs', 'Egyptian hieroglyphs use pictorial signs; cuneiform is named for its wedge-shaped marks.'),
    d('Phoenician alphabet', 'The Phoenician alphabet used letter-like signs rather than wedge impressions in clay.'),
    d('Linear B', 'Linear B is a syllabic script used in the Aegean, not the wedge-mark script of Mesopotamia.'),
  ]),
  'history-010': set('Indian independence leaders', [
    d('Jawaharlal Nehru', 'Nehru was a leading independence figure and India’s first prime minister, while Gandhi is particularly associated with satyagraha.'),
    d('Subhas Chandra Bose', 'Bose led a more militant independence effort and is not the figure chiefly identified with nonviolent satyagraha.'),
    d('B. R. Ambedkar', 'Ambedkar was a major social reformer and constitutional leader, but not the central leader of the satyagraha movement.'),
  ]),
  'history-011': set('Roman cities affected by Vesuvius', [
    d('Herculaneum', 'Herculaneum was also buried in the 79 CE eruption, so it is an additional defensible answer to this broad stem.'),
    d('Stabiae', 'Stabiae was also affected by the eruption, making the broad wording ambiguous.'),
    d('Oplontis', 'Oplontis was another settlement buried or damaged by the 79 CE eruption.'),
  ], { question:'Which Vesuvius-buried Roman city is known for its surviving stone amphitheater?', correctText:'Pompeii', why:'Pompeii is known for its stone amphitheater; nearby settlements including Herculaneum were also devastated by the eruption.' }),
  'history-012': set('European Atlantic voyage leaders', [
    d('John Cabot', 'Cabot reached parts of North America on a later English-backed voyage, not the 1492 Caribbean expedition.'),
    d('Ferdinand Magellan', 'Magellan’s expedition began its circumnavigation in 1519, decades after the 1492 voyage.'),
    d('Vasco da Gama', 'Da Gama sailed to India around Africa in 1497–1499, not to the Caribbean in 1492.'),
  ]),
  'history-013': set('historical Eurasian trade networks', [
    d('Spice Route', 'The Spice Route is a broad name for maritime trade networks, not the land-linked network commonly called the Silk Road.'),
    d('Amber Road', 'The Amber Road connected northern and central Europe with Mediterranean markets, not East Asia with the Mediterranean.'),
    d('Royal Road', 'The Persian Royal Road connected regions of the Achaemenid Empire and is distinct from the trans-Eurasian Silk Road network.'),
  ]),
  'history-014': set('medieval English legal charters', [
    d('The Petition of Right', 'The Petition of Right was presented in 1628, centuries after Magna Carta.'),
    d('The Bill of Rights', 'The English Bill of Rights dates to 1689, not 1215.'),
    d('The Domesday Book', 'The Domesday Book was a survey ordered in 1085–1086, not a charter limiting royal power in 1215.'),
  ]),
  'history-015': set('Roman rulers', [
    d('Julius Caesar', 'Caesar was a dictator whose rule preceded the imperial system; Augustus is generally counted as Rome’s first emperor.'),
    d('Nero', 'Nero was an emperor of the Julio-Claudian dynasty, but ruled several decades after Augustus.'),
    d('Trajan', 'Trajan was a later emperor during the empire’s second century.'),
  ]),
  'history-016': set('ancient Greek city-states', [
    d('Sparta', 'Sparta was a major Greek city-state with a different political system from Athenian democracy.'),
    d('Corinth', 'Corinth was an important Greek city-state, but Athens is most associated with the early democracy cited here.'),
    d('Thebes', 'Thebes was a powerful Greek city-state, but it is not the usual answer for the birthplace of democracy.'),
  ]),
  'history-017': set('wars ending in 1918', [
    d('World War II', 'World War II ended in 1945, not with the 1918 armistice.'),
    d('Franco-Prussian War', 'The Franco-Prussian War ended in 1871.'),
    d('Crimean War', 'The Crimean War ended in 1856.'),
  ], { question:'Which war’s Western Front fighting ceased under the armistice signed on November 11, 1918?' }),
  'history-018': set('early Antarctic explorers', [
    d('Robert Falcon Scott', 'Scott’s expedition reached the South Pole after Amundsen and found the Norwegian team’s tent.'),
    d('Ernest Shackleton', 'Shackleton led major Antarctic expeditions but did not reach the South Pole.'),
    d('James Cook', 'Cook explored Antarctic waters in the eighteenth century but never reached the South Pole.'),
  ]),
  'history-019': set('ancient Nile Valley civilizations', [
    d('Nubians', 'Nubian societies developed south of Egypt and had their own scripts; Egyptian hieroglyphs were developed in ancient Egypt.'),
    d('Phoenicians', 'Phoenician writing was alphabetic and developed along the eastern Mediterranean coast.'),
    d('Sumerians', 'Sumerians developed cuneiform in Mesopotamia rather than hieroglyphs along the Nile.'),
  ]),
  'history-020': set('peace treaties', [
    d('Treaty of Tordesillas', 'The Treaty of Tordesillas divided overseas claims between Spain and Portugal in 1494, centuries earlier.'),
    d('Treaty of Utrecht', 'The Treaty of Utrecht ended major parts of the War of the Spanish Succession in 1713.'),
    d('Treaty of Paris', 'The 1783 Treaty of Paris recognized the independence of the United States after the American Revolutionary War.'),
  ], { question:'Which treaty formally ended the state of war between Germany and the Allied Powers after World War I?', correctText:'Treaty of Versailles', why:'The Treaty of Versailles, signed in 1919, formally ended the state of war between Germany and the Allied Powers.', topicId:'world-war-i-treaties', subtopic:'Treaties and the First World War', chapterId:8 }),
};

// Placement follows the named world-chapter curriculum in src/catalog.js.
// Each row explicitly assigns seed IDs to a topic, subtopic, and chapter.
const topicMetadata = {};
const assign = (ids, topicId, subtopic, chapterId) => {
  for (const id of ids) topicMetadata[id] = { topicId, subtopic, chapterId };
};

assign(['general-001','general-002','general-016'], 'world-geography', 'Oceans, countries, and continents', 8);
assign(['general-014'], 'solar-system', 'Planetary atmospheres', 9);
assign(['general-003','general-006'], 'places-and-culture', 'Japanese capital and currency', 2);
assign(['general-004'], 'humidity-and-weather-measurement', 'Humidity and weather instruments', 3);
assign(['general-011'], 'element-properties', 'Elements and phase behavior', 6);
assign(['general-005','general-013'], 'shapes', 'Polygon names and side counts', 1);
assign(['general-007','general-009','general-010','general-012','general-018'], 'nature-observations', 'Sunlight, animals, and natural phenomena', 5);
assign(['general-008'], 'word-meanings', 'Vocabulary and antonyms', 4);
assign(['general-019'], 'human-anatomy', 'The smallest bones of the ear', 9);

assign(['science-001','science-005','science-007'], 'atomic-structure', 'Atoms and subatomic particles', 4);
assign(['science-002','science-015'], 'states-and-phase-changes', 'States of matter and transitions', 1);
assign(['science-003','science-008'], 'forces-and-units', 'Gravity and force measurement', 3);
assign(['science-004','science-009'], 'energy-concepts', 'Photosynthesis and stored energy', 2);
assign(['science-011'], 'scientific-instruments', 'Microscopic observation', 7);
assign(['science-012'], 'electric-current', 'Current and its SI unit', 2);
assign(['science-013','science-020'], 'organisms-and-diversity', 'Animal physiology and biodiversity', 9);
assign(['science-016','science-018'], 'earth-structure', 'Rocks and the layers of Earth', 6);
assign(['science-017'], 'scientific-method', 'Testable explanations', 8);
assign(['science-019'], 'light-behavior', 'Refraction across media', 5);

assign(['technology-001','technology-006','technology-007','technology-010','technology-019'], 'computer-hardware', 'Processors, memory, storage, and peripherals', 3);
assign(['technology-003','technology-014','technology-015'], 'internet-basics', 'Addresses, browsers, and the Internet', 4);
assign(['technology-004'], 'operating-systems', 'The Windows operating-system family', 10);
assign(['technology-005','technology-012','technology-013'], 'web-and-interface-content', 'HTML, icons, and image formats', 8);
assign(['technology-008','technology-011','technology-016'], 'networking-and-signals', 'Device connections, Wi-Fi, and GPS', 5);
assign(['technology-009','technology-017','technology-020'], 'digital-security-and-trust', 'Software access, recovery, and account security', 7);
assign(['technology-018'], 'algorithms', 'Step-by-step computing procedures', 2);

assign(['ai-002','ai-012'], 'ai-foundations', 'Artificial intelligence and datasets', 1);
assign(['ai-004','ai-010','ai-013'], 'machine-learning', 'Training data, parameters, and classification', 2);
assign(['ai-005','ai-007','ai-009','ai-016','ai-018'], 'language-models', 'Language processing and generative systems', 4);
assign(['ai-006'], 'computer-vision', 'Visual input and perception', 5);
assign(['ai-011','ai-017','ai-020'], 'responsible-ai', 'Reliability, bias, and evaluation', 7);
assign(['ai-014'], 'agents-and-reinforcement-learning', 'Actions, agents, and reward feedback', 8);
assign(['ai-019'], 'ai-in-practice', 'Personalized recommendations', 9);

assign(['physics-001','physics-006','physics-016'], 'energy-and-work', 'Energy, power, and motion', 3);
assign(['physics-002','physics-013'], 'motion-and-gravity', 'Acceleration and inertia', 1);
assign(['physics-003','physics-017','physics-019'], 'forces-and-machines', 'Newton’s laws, pressure, and levers', 2);
assign(['physics-004','physics-009'], 'electricity', 'Charge and resistance units', 7);
assign(['physics-008'], 'atomic-particles', 'Neutral particles in the atom', 4);
assign(['physics-010','physics-012','physics-014','physics-020'], 'waves-sound-and-light', 'Wave behavior, frequency, sound, and mirrors', 4);

assign(['history-001','history-009','history-019'], 'early-civilizations', 'Writing and monuments of the ancient world', 2);
assign(['history-002','history-011','history-015','history-016'], 'classical-world', 'Rome and ancient Greece', 3);
assign(['history-003','history-017'], 'modern-history', 'Twentieth-century turning points', 8);
assign(['history-020'], 'world-war-i-treaties', 'Treaties and the First World War', 8);
assign(['history-004','history-010'], 'people-and-power', 'Political leadership and independence', 9);
assign(['history-006','history-013'], 'historic-routes', 'Road and trade networks', 4);
assign(['history-007','history-012','history-018'], 'exploration-and-voyages', 'Explorers across ocean and polar frontiers', 6);
assign(['history-008'], 'revolutions', 'The French Revolution', 7);
assign(['history-014'], 'medieval-charters', 'Limits on royal authority', 5);

export const BATCH_A_OPTION_SETS = Object.fromEntries(
  Object.entries(BATCH_A_RAW_OPTION_SETS).map(([id, optionSet]) => [
    id,
    { ...optionSet, ...topicMetadata[id] },
  ]),
);
