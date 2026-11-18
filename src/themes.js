import { WORLD_BY_ID, WORLDS } from './catalog.js';

// These are art-direction ingredients, not externally loaded artwork. The scene
// composer combines them into compact, deterministic local illustrations.
const ART = {
  general: ['Curiosity museum at twilight', '🧭 🪞 🗝️ 📚 🕰️ 🧩 🪄', 'gallery plinths, curious artifacts, gilded labels'],
  science: ['Modern discovery laboratory', '🔬 🧪 ⚗️ 🧬 💡 🧫 🧲', 'glass apparatus, illuminated benches, floating formulae'],
  technology: ['Digital workshop and server city', '🖥️ 🗄️ 🤖 🔌 📡 ⌨️ 💾', 'circuit traces, server towers, data panels'],
  ai: ['Neural data observatory', '🧠 🔗 ✨ 🤖 ◉ 📈 💬', 'connected nodes, branching data paths, learning signals'],
  history: ['Living archaeological atlas', '🏛️ 🏺 🗿 🏰 📜 🛡️ 🧱', 'layered ruins, weathered stone, archival map lines'],
  geography: ['Expedition relief map', '🏔️ 🌊 🏝️ 🏜️ 🌋 🧭 🗺️', 'raised terrain, contour lines, winding rivers'],
  space: ['Deep-space expedition', '🪐 🚀 🌙 ☄️ 🛰️ 🌌 👩‍🚀', 'star fields, planetary horizons, orbital paths'],
  math: ['Geometric number landscape', '🔺 🔷 🧮 📐 ∞ 🔢 🟡', 'faceted forms, number trails, precise grid lines'],
  physics: ['Kinetic energy test chamber', '⚛️ 🧲 💡 🔋 🌊 🌀 📡', 'wavefronts, magnetic arcs, suspended experiment rigs'],
  chemistry: ['Molecular glasshouse', '⚗️ 🧪 🧬 🟢 🟣 💧 🔥', 'bond diagrams, colored glass, reaction bubbles'],
  biology: ['Cellular life observatory', '🧬 🦠 🧫 🌱 🐚 🪸 🐾', 'membrane forms, DNA ribbons, living micro-patterns'],
  sports: ['Floodlit championship arena', '🏟️ ⚽ 🏀 🏆 🏃 🎾 🏈', 'stadium tiers, field markings, suspended score lights'],
  movies: ['Cinematic backlot after dark', '🎬 🎥 🎞️ 🎭 🍿 💡 🎟️', 'film frames, theatre curtains, dramatic spotlights'],
  music: ['Resonant concert hall', '🎹 🎸 🎻 🥁 🎺 🎤 🎼', 'sound ribbons, instrument silhouettes, stage beams'],
  literature: ['Enchanted library and story path', '📚 📜 🪶 🕯️ 🏰 🌳 🗝️', 'towering shelves, manuscript trails, storybook portals'],
  mythology: ['Mythic temple realm', '⚡ 🐉 🏛️ 🐍 🪽 🔱 🏺', 'temple columns, carved constellations, legendary footprints'],
  nature: ['Wild habitat field station', '🌳 🦋 🐘 🐋 🪷 🪺 🌿', 'layered canopy, habitat silhouettes, drifting pollen'],
  flags: ['World atlas of colors', '🚩 🗺️ 🧭 🌐 🏳️ 🏝️ 🏙️', 'floating pennants, atlas grids, regional map panels'],
  food: ['Colorful open-air culinary market', '🍋 🌶️ 🍞 🍜 🥭 🥘 🧄', 'market awnings, ingredient baskets, fragrant spice trails'],
  logic: ['Deduction chamber', '🔐 🧩 ∴ 🔎 ⚖️ 🔢 🗝️', 'linked clues, branching paths, balanced logic gates'],
  puzzles: ['Interactive puzzle workshop', '🧩 🧊 🔍 🪞 🌀 🗝️ 🔺', 'sliding tiles, hidden compartments, shifting silhouettes'],
  gaming: ['Arcade dimension', '🎮 🕹️ 👾 🟪 🪙 🏁 🛡️', 'pixel horizons, cabinet lights, power-up trails'],
  business: ['Global exchange district', '📈 🏦 🪙 🏙️ 📊 🚢 🤝', 'market boards, trade routes, rising chart towers'],
  body: ['Anatomy learning pavilion', '🫀 🧠 🦴 🫁 🩸 🦠 🧬', 'anatomical plate layers, organ diagrams, cellular signals'],
  inventions: ['Inventor’s workshop through time', '⚙️ 💡 ✈️ 🔭 🧰 🚂 🔋', 'mechanical sketches, prototypes, evolving machine silhouettes'],
};

const CHAPTER_LANDMARKS = {
  general: ['wonder cabinet','memory gallery','everyday workshop','word garden','nature window','invention hall','culture pavilion','world observatory','connection bridge','grand collection'],
  science: ['matter vault','energy chamber','force platform','atomarium','sound tunnel','earth observatory','instrument bench','discovery archive','living lab','field station'],
  technology: ['gear foundry','binary arcade','processor chamber','network tunnel','signal tower','robotics bay','security vault','interface studio','future lab','heritage gallery'],
  ai: ['pattern garden','training studio','neural canopy','language archive','perception dome','pioneer hall','ethics forum','agent arena','workplace lab','imitation chamber'],
  history: ['river-valley dig','ancient avenue','classical forum','caravanserai','castle keep','navigation port','revolution square','modern archive','council chamber','timeline hall'],
  geography: ['alpine pass','river delta','dune basin','volcanic isle','ocean trench','forest canopy','ice shelf','canyon overlook','harbor city','atlas summit'],
  space: ['orbital moonbase','red-rock canyon','ringed-planet vista','radio telescope field','meteor arena','rover landing site','lunar horizon','nebula observatory','launch coast','deep-space gate'],
  math: ['number grove','polyhedron studio','fraction cascade','pattern span','logic arena','measurement ridge','algebra arcade','geometry dome','deduction stair','proof tower'],
  physics: ['motion runway','force chamber','energy foundry','wave tunnel','particle arena','thermal observatory','current bridge','magnetic maze','quantum room','cosmic station'],
  chemistry: ['atomic garden','element cliffs','bonding inlet','reaction corridor','catalyst arena','acid-base lagoon','carbon forest','materials forge','molecular maze','periodic overlook'],
  biology: ['cellular district','DNA grove','evolution ridge','botanical conservatory','microbe arena','microscope sea','animal reserve','ecosystem delta','fossil gallery','biosphere dome'],
  sports: ['track stadium','indoor court','football ground','aquatic arena','champion’s ring','snow park','racket court','tactics board','Olympic plaza','finals arena'],
  movies: ['silent-film street','studio soundstage','animation workshop','space set','premiere arena','comedy club','world-cinema hall','broadcast studio','awards theatre','grand screen'],
  music: ['rhythm plaza','string workshop','keyboard hall','global drum circle','battle stage','concert gallery','jazz club','pop arena','recording booth','grand auditorium'],
  literature: ['storybook clearing','poetry bridge','classic stacks','enchanted grove','mystery arena','global reading room','detective archive','folklore crossing','writers’ studio','final chapter'],
  mythology: ['marble island','northern fjord','desert temple','epic garden','stone circle','heroic arena','dragon gate','questing road','creature cavern','oracle sanctuary'],
  nature: ['rainforest canopy','kelp forest','open savanna','desert oasis','wildlife arena','alpine meadow','wetland boardwalk','moonlit forest','coral reef','planetary preserve'],
  flags: ['flag atelier','European square','Asian boulevard','African market','color arena','American avenue','island harbor','symbol gallery','capital skyline','world pavilion'],
  food: ['chef’s counter','grain terrace','spice bazaar','street-food lane','tasting arena','dessert kitchen','regional table','orchard market','flavor lab','world banquet'],
  logic: ['pattern garden','condition corridor','sequence bridge','deduction chamber','logic arena','word maze','ordering hall','truth-table room','lateral passage','mastermind vault'],
  puzzles: ['riddle garden','oddity gallery','visual maze','sequence steps','puzzle arena','wordplay woods','shape studio','hidden-object house','mechanism vault','brain-teaser tower'],
  gaming: ['arcade hall','pixel valley','console museum','design studio','boss arena','indie district','character gallery','esports stadium','culture crossroads','final-boss chamber'],
  business: ['trade harbor','currency exchange','supply chain','market square','deal-making arena','founder’s garage','signal observatory','workplace district','global port','market summit'],
  body: ['cell-to-system hall','sensory garden','skeleton gallery','circulation station','anatomy arena','breathing pavilion','neural observatory','digestive passage','immune citadel','body atlas'],
  inventions: ['ancient workshop','tool gallery','printing house','power station','prototype arena','medical laboratory','flight field','digital workshop','discovery archive','inventor’s summit'],
};

const PALETTES = [
  ['#9c8cff','#241e49','#5de0d2'], ['#ffbd76','#38241d','#ff897e'],
  ['#6dd9ff','#172a45','#a68cff'], ['#7de0a2','#18372e','#f3d778'],
  ['#f09ac0','#35213d','#ffd184'],
];
const hash = value => [...String(value)].reduce((result, char) => (result * 31 + char.charCodeAt(0)) >>> 0, 7);
const entries = value => value.split(' ').filter(Boolean);

export function resolveLevelTheme(worldId, chapterId, levelId) {
  const world = WORLD_BY_ID[worldId];
  if (!world) throw new Error(`Unknown world: ${worldId}`);
  const chapter = Math.max(1, Math.min(10, Number(chapterId) || 1));
  const level = Math.max(1, Math.min(100, Number(levelId) || 1));
  const art = ART[worldId];
  const landmarks = CHAPTER_LANDMARKS[worldId];
  const seed = hash(`${worldId}:${chapter}:${level}`);
  const palette = PALETTES[(Math.floor((level - 1) / 20) + world.index) % PALETTES.length];
  const props = entries(art[1]);
  const chapterName = landmarks[chapter - 1];
  const objectA = props[(seed + chapter * 3) % props.length];
  const objectB = props[(seed >>> 3) % props.length];
  const objectC = props[(level * 7 + chapter + world.index) % props.length];
  const scene = {
    id: `${worldId}-chapter-${chapter}-level-${String(level).padStart(3, '0')}`,
    sceneId: `${worldId}:${chapterName}:${(seed % 997).toString(36)}`,
    worldId,
    chapterId: chapter,
    levelId: level,
    artDirection: art[0],
    artDescription: art[2],
    environment: chapterName,
    chapterTitle: world.chapters[chapter - 1].title,
    palette: { accent:palette[0], deep:palette[1], highlight:palette[2], base:world.deep },
    backgroundLayers: [`${worldId}-far-${(seed % 7) + 1}`, `${worldId}-mid-${(seed % 11) + 1}`, `${worldId}-near-${(seed % 13) + 1}`],
    foreground: [objectC, props[(seed + 5) % props.length]],
    decorativeObjects: [objectA, objectB, objectC],
    lighting: ['dawn','soft glow','golden hour','moonlight','spotlight'][(level + chapter + world.index) % 5],
    ambientParticles: ['dust','pollen','sparks','snow','starlight'][(seed + level) % 5],
    animationPreset: ['drift','orbit','ripple','float','flicker'][(level * 3 + chapter) % 5],
    layout: seed % 6,
    interaction: level % 10 === 0 ? 'boss-gate' : level % 5 === 0 ? 'challenge-beacon' : 'route-discovery',
    levelThemeId: `${worldId}-c${String(chapter).padStart(2,'0')}-l${String(level).padStart(3,'0')}`,
  };
  return scene;
}

export function validateThemes(worlds = WORLDS) {
  const errors = [];
  const ids = new Set();
  for (const world of worlds) {
    if (!ART[world.id] || !CHAPTER_LANDMARKS[world.id]) errors.push(`${world.id}: missing art direction`);
    for (const chapter of world.chapters) {
      for (const level of world.levels.filter(item => item.chapter === chapter.id)) {
        const scene = resolveLevelTheme(world.id, chapter.id, level.id);
        if (!scene.levelThemeId || !scene.environment || !scene.artDirection || scene.decorativeObjects.length < 2) errors.push(`${world.id} ${level.id}: incomplete scene`);
        if (ids.has(scene.levelThemeId)) errors.push(`Duplicate level theme: ${scene.levelThemeId}`);
        ids.add(scene.levelThemeId);
      }
    }
  }
  if (ids.size !== 2500) errors.push(`Expected 2500 level themes, found ${ids.size}`);
  return errors;
}

export const WORLD_ART_DIRECTIONS = Object.fromEntries(Object.entries(ART).map(([id, [artDirection, props, artDescription]]) => [id, { artDirection, motifs:entries(props), artDescription }]));
