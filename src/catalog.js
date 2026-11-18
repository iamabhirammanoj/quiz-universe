export const LEVELS_PER_WORLD = 100;
export const CHAPTERS_PER_WORLD = 10;

const rows = [
  ['general','General Knowledge','✦','A little of everything, from everyday wonders to big ideas.','#a98cff','#29234f',['Everyday Wonders','People & Places','Things We Use','Words Around Us','Nature Close By','Ideas That Changed Us','Arts & Culture','The Wider World','Curious Connections','The Grand Mix']],
  ['science','Science','⚗','Explore the rules and discoveries that shape our world.','#65dfd2','#173e49',['Matter & Motion','Energy Everywhere','Forces at Work','Tiny Building Blocks','Light & Sound','Earth Systems','Scientific Tools','Big Discoveries','Living Experiments','Science in Action']],
  ['technology','Technology & Computers','⌘','From the first machines to the networks we use every day.','#71c6ff','#1d365e',['Early Machines','Bits & Bytes','Inside a Computer','The Internet','Networks & Signals','Robotics','Digital Security','Human Interfaces','Future Systems','Tech Through Time']],
  ['ai','Artificial Intelligence','✧','Meet the ideas, people, and tools behind intelligent machines.','#d28fff','#40234f',['Pattern Seekers','Machine Learning','Neural Networks','Language Models','Vision & Sound','AI Pioneers','Responsible AI','Robots & Agents','AI at Work','The Turing Trail']],
  ['history','History','♜','Travel through eras, civilizations, and turning points.','#ffb77d','#503020',['First Cities','Ancient Worlds','Classical Age','Silk Roads','Medieval Lives','Age of Exploration','Revolutions','Modern Times','People & Power','Threads of Time']],
  ['geography','Geography','⌖','Cross continents, oceans, landscapes, and landmarks.','#70dfb2','#173d35',['Mountain Paths','Great Rivers','Desert Trails','Island Chains','Deep Oceans','Forest Belts','Polar Worlds','Natural Wonders','People & Places','Around the Globe']],
  ['space','Space & Astronomy','☄','From our solar system to the edge of the universe.','#8e86ff','#252149',['Moonlit Orbit','Red Planet Trail','Ringworld Drift','Deep Space Signals','Mini Challenge','Rover Rendezvous','Moon & Beyond','Starlight Stories','Frontier of Flight','The Final Frontier']],
  ['math','Mathematics','π','Find patterns, solve puzzles, and make numbers come alive.','#f5ce6b','#4a3b1d',['Number Garden','Shape Studio','Fraction Falls','Pattern Bridge','Mini Challenge','Measure Mountain','Algebra Arcade','Geometry Galaxy','Logic Ladder','Theorem Tower']],
  ['physics','Physics','⚛','Discover the forces, energy, and matter behind motion.','#73d9ef','#183d50',['Motion Lab','Force Field','Energy Works','Waves & Sound','Mini Challenge','Heat & Matter','Electric Current','Magnetic Paths','Quantum Clues','Cosmic Physics']],
  ['chemistry','Chemistry','◉','Mix atoms, molecules, reactions, and the periodic table.','#80db9b','#213e30',['Atom Garden','Element Valley','Bonding Bay','Reaction Run','Mini Challenge','Acid & Base','Carbon Trails','Materials Lab','Molecule Maze','Periodic Summit']],
  ['biology','Biology','❀','Explore cells, ecosystems, evolution, and living things.','#8ada83','#244128',['Cell City','DNA Grove','Evolution Trail','Plant Kingdom','Mini Challenge','Microbe World','Animal Kingdom','Ecosystem Bay','Life Through Time','Biosphere Peak']],
  ['sports','Sports','⚽','Celebrate the games, athletes, rules, and records of sport.','#ff977d','#4b2928',['Track & Field','Court Games','World Football','Water Sports','Mini Challenge','Winter Events','Racket Rally','Team Tactics','Olympic Stories','Champions Arena']],
  ['movies','Movies & Entertainment','✦','Step onto the set for film, television, and performance.','#f27caa','#4a2340',['Silent Stories','Studio Lights','Animation Alley','Sci-Fi Screen','Mini Challenge','Comedy Club','World Cinema','TV Time','Awards Night','The Grand Premiere']],
  ['music','Music','♫','Travel across instruments, styles, songs, and sound.','#c59aff','#35244b',['Rhythm Road','String Garden','Keys & Chords','World Beats','Mini Challenge','Classical Hall','Jazz Junction','Pop Planet','Sound Studio','Grand Finale']],
  ['literature','Literature & Books','▤','Wander through authors, stories, poems, and literary worlds.','#e4b38a','#4b3528',['Storybook Start','Poetry Path','Classic Library','Fantasy Forest','Mini Challenge','World Literature','Mystery Shelf','Myth & Folklore','Modern Voices','The Last Chapter']],
  ['mythology','Mythology','⚡','Meet legendary heroes, gods, creatures, and ancient tales.','#ffbd70','#4c321e',['Greek Isles','Norse North','Egyptian Sands','Hindu Epics','Celtic Crossroads','Mini Challenge','East Asian Lore','Heroic Quests','Creatures & Clues','Temple of Tales']],
  ['nature','Nature & Wildlife','❋','Journey through habitats and meet the life within them.','#79dda0','#193d30',['Rainforest Canopy','Ocean Blue','Grassland Herds','Desert Bloom','Mini Challenge','Mountain Wildlife','Wetland Wonders','Night Creatures','Coral Kingdom','Wild Planet']],
  ['flags','Countries & Flags','⚑','Learn the colors, symbols, and places on the world map.','#f19a91','#492d35',['Flag Basics','Europe in Color','Asia in Color','Africa in Color','Mini Challenge','The Americas','Island Nations','Symbols & Stories','Capital Connections','World Flag Rally']],
  ['food','Food & Cuisine','♨','Taste the ingredients, dishes, and traditions of world cuisine.','#f3a362','#4b3225',['Kitchen Basics','Bread & Grains','Spice Route','Street Food','Mini Challenge','Sweet Discoveries','Regional Tables','Fruits & Flavors','Cooking Science','World Feast']],
  ['logic','Logical Reasoning','∴','Use deduction, sequences, and careful thinking to find the answer.','#9eb7ff','#273358',['Spot the Pattern','If & Then','Number Sequences','Deduction Hall','Mini Challenge','Word Logic','Ordering Rules','Truth Tables','Lateral Thinking','Mastermind']],
  ['puzzles','Puzzles & Brain Teasers','◇','Unravel riddles, visual clues, and brain-bending challenges.','#f1dc79','#494020',['Riddle Garden','Odd One Out','Visual Clues','Sequence Steps','Mini Challenge','Wordplay Woods','Shape Shifter','Hidden Objects','Puzzle Box','Brain Teaser Boss']],
  ['gaming','Gaming & Pop Culture','🎮','Explore games, characters, and the culture around play.','#9d93ff','#2c2856',['Arcade Start','Pixel Worlds','Console Generations','Game Design','Mini Challenge','Indie Quest','Characters & Lore','Esports Arena','Pop Culture Mix','Final Boss']],
  ['business','Business & Economics','▥','See how markets, money, and organizations work.','#76d8c7','#1d3f3a',['Trade Routes','Money Basics','Supply & Demand','Market Makers','Mini Challenge','Business Builders','Economic Signals','Work & Wages','Global Exchange','Market Summit']],
  ['body','Human Body','♡','Tour the systems, senses, and remarkable parts of the body.','#ff8eaa','#482638',['Cell to System','Senses at Work','Bones & Motion','Heart & Blood','Mini Challenge','Breath of Life','Brain Signals','Digestion Trail','Defense System','Body Atlas']],
  ['inventions','Inventions & Discoveries','⚙','Meet the breakthroughs that changed how people live.','#f6b778','#483322',['Ancient Ingenuity','Tools & Time','Printing Press','Power & Light','Mini Challenge','Medicine Makers','Flight & Motion','Digital Age','Great Discoveries','Inventor’s Summit']],
];

export const WORLD_EXTRA_INTERACTIONS = {
  space: ['map-selection'],
  geography: ['map-selection'],
  flags: ['map-selection', 'image-identification'],
  history: ['timeline-ordering', 'image-identification'],
  inventions: ['timeline-ordering'],
  literature: ['timeline-ordering'],
  math: ['sequence-completion'],
  logic: ['sequence-completion'],
  puzzles: ['sequence-completion'],
  science: ['sequence-completion', 'image-identification'],
  nature: ['image-identification'],
  sports: ['image-identification'],
  food: ['image-identification'],
};

export const WORLDS = rows.map(([id,name,icon,description,accent,deep,chapters], index) => ({
  id, name, icon, description, accent, deep, index,
  supportedInteractionTypes:['multiple-choice','progressive-clue','matching-pairs'],
  allSupportedInteractionTypes:['multiple-choice','progressive-clue','matching-pairs', ...(WORLD_EXTRA_INTERACTIONS[id] || [])],
  unlockStars: index < 2 ? 0 : (index - 1) * 3,
  chapters: chapters.map((title, chapterIndex) => ({
    id: chapterIndex + 1,
    title,
    startLevel: chapterIndex * 10 + 1,
    endLevel: chapterIndex * 10 + 10,
  })),
  levels: Array.from({ length: LEVELS_PER_WORLD }, (_, levelIndex) => ({
    id: levelIndex + 1,
    chapter: Math.floor(levelIndex / 10) + 1,
    kind: (levelIndex + 1) % 10 === 0 ? 'boss' : (levelIndex + 1) % 5 === 0 ? 'mini-boss' : 'standard',
    questionCount: (levelIndex + 1) % 5 === 0 ? 20 : 10,
  })),
}));

export const WORLD_BY_ID = Object.fromEntries(WORLDS.map(world => [world.id, world]));

export function validateCatalog(worlds = WORLDS) {
  const errors = [];
  const ids = new Set();
  for (const world of worlds) {
    if (ids.has(world.id)) errors.push(`Duplicate world id: ${world.id}`);
    ids.add(world.id);
    if (world.levels.length !== 100) errors.push(`${world.id}: expected exactly 100 levels`);
    if (world.chapters.length !== 10) errors.push(`${world.id}: expected exactly 10 chapters`);
    world.levels.forEach((level, index) => {
      if (level.id !== index + 1) errors.push(`${world.id}: level sequence is not contiguous`);
      if (level.questionCount !== (level.id % 5 === 0 ? 20 : 10)) errors.push(`${world.id}: invalid question count at level ${level.id}`);
    });
  }
  if (worlds.length !== 25) errors.push(`Expected 25 worlds, found ${worlds.length}`);
  return errors;
}
