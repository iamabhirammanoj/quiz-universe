/* Local, deterministic SVG scene art for Quiz Universe.
 * The module intentionally uses only SVG primitives and fixed catalog data:
 * no network requests, fonts, raster downloads, or runtime dependencies.
 */

const WORLDS = {
  general: { name:'Curiosity museum', accent:'#c6a5ff', dark:'#30244f', sites:['cabinet','gallery','workshop','garden','window','hall','pavilion','observatory','bridge','collection'] },
  science: { name:'Discovery laboratory', accent:'#79e4d5', dark:'#173d49', sites:['lab','energy','force','atom','sound','earth','instrument','archive','experiment','field'] },
  technology: { name:'Digital workshop', accent:'#7acaff', dark:'#1c3459', sites:['gear','binary','processor','network','signal','robot','security','interface','future','heritage'] },
  ai: { name:'Neural observatory', accent:'#dfa1ff', dark:'#3c244e', sites:['pattern','training','neural','language','perception','pioneer','ethics','agent','workplace','imitation'] },
  history: { name:'Living archaeological atlas', accent:'#ffc38b', dark:'#503421', sites:['ziggurat','temple','forum','caravan','castle','ship','torch','city','council','timeline'] },
  geography: { name:'Expedition relief map', accent:'#80e7bc', dark:'#183d35', sites:['mountain','river','dunes','islands','ocean','forest','ice','canyon','harbor','globe'] },
  space: { name:'Deep-space expedition', accent:'#a79aff', dark:'#242047', sites:['moon','canyon','rings','dish','asteroid','rover','horizon','nebula','launch','blackhole'] },
  math: { name:'Geometric number landscape', accent:'#ffdc78', dark:'#453719', sites:['numbers','polyhedron','fraction','pattern','logic','measure','algebra','geometry','sequence','proof'] },
  physics: { name:'Kinetic energy chamber', accent:'#82def1', dark:'#173a4c', sites:['motion','force','energy','wave','particle','thermal','current','magnet','quantum','cosmos'] },
  chemistry: { name:'Molecular glasshouse', accent:'#98e69e', dark:'#203c2e', sites:['atom','elements','bond','reaction','catalyst','acid','carbon','materials','molecule','periodic'] },
  biology: { name:'Cellular life observatory', accent:'#a4e888', dark:'#234027', sites:['cell','dna','evolution','botanical','microbe','microscope','animals','ecosystem','fossil','biosphere'] },
  sports: { name:'Championship arena', accent:'#ffad91', dark:'#482725', sites:['track','court','football','aquatic','podium','snow','racket','tactics','olympic','finals'] },
  movies: { name:'Cinematic backlot', accent:'#ff9fca', dark:'#48233d', sites:['silent','soundstage','animation','space-set','premiere','comedy','cinema','broadcast','awards','screen'] },
  music: { name:'Resonant concert hall', accent:'#d8adff', dark:'#332348', sites:['rhythm','strings','keyboard','drums','stage','classical','jazz','pop','studio','auditorium'] },
  literature: { name:'Enchanted library', accent:'#f0c095', dark:'#493425', sites:['storybook','poetry','library','fantasy','mystery','reading-room','detective','folklore','writers','chapter'] },
  mythology: { name:'Mythic temple realm', accent:'#ffd083', dark:'#49301e', sites:['island','fjord','pyramid','garden','stone-circle','hero','dragon','quest','cavern','oracle'] },
  nature: { name:'Wild habitat field station', accent:'#8be7a9', dark:'#183b2c', sites:['rainforest','kelp','savanna','oasis','wildlife','meadow','wetland','night-forest','reef','planet'] },
  flags: { name:'World atlas', accent:'#ffaaa2', dark:'#492b34', sites:['pennants','europe','asia','africa','colors','americas','island','symbols','capital','world'] },
  food: { name:'Open-air culinary market', accent:'#ffc07d', dark:'#493121', sites:['kitchen','grain','spice','street-food','tasting','dessert','table','orchard','flavor','banquet'] },
  logic: { name:'Deduction chamber', accent:'#b4c8ff', dark:'#263251', sites:['pattern','condition','sequence','deduction','logic','word','ordering','truth-table','lateral','mastermind'] },
  puzzles: { name:'Puzzle workshop', accent:'#ffeb8a', dark:'#453d1e', sites:['riddle','oddity','visual','sequence','puzzle','wordplay','shape','hidden-object','mechanism','brain-teaser'] },
  gaming: { name:'Arcade dimension', accent:'#b6a8ff', dark:'#29264f', sites:['arcade','pixel','console','design','boss','indie','character','esports','culture','final-boss'] },
  business: { name:'Global exchange district', accent:'#8de5d1', dark:'#193a35', sites:['trade','currency','supply','market','deal','founder','signals','workplace','port','summit'] },
  body: { name:'Anatomy pavilion', accent:'#ff9db5', dark:'#442333', sites:['cell','senses','skeleton','heart','anatomy','breath','brain','digestion','immune','body'] },
  inventions: { name:'Inventor’s workshop', accent:'#ffd092', dark:'#453321', sites:['ancient-tool','tools','printing','power','prototype','medicine','flight','digital','discovery','inventor'] },
};

const esc = value => String(value)
  .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uFFFE\uFFFF]/g, '')
  .replace(/[&<>"']/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[char]);
const clamp = (value, min, max, fallback) => Math.max(min, Math.min(max, Number.isFinite(Number(value)) ? Math.trunc(Number(value)) : fallback));
const hash = value => [...String(value)].reduce((sum, ch) => (sum * 33 + ch.charCodeAt(0)) >>> 0, 5381);
const p = (x, y) => `${x.toFixed(1)} ${y.toFixed(1)}`;

function renderHero(worldId, levelSeed) {
  const shift = (levelSeed % 7) - 3;
  const tilt = (levelSeed % 5) - 2;
  const g = (body, extra='') => `<g transform="translate(${shift} ${tilt})" ${extra}>${body}</g>`;
  const line = '#f9f6ff';
  switch (worldId) {
    case 'general': return g(`<path d="M-48 42V-19L0-48 48-19V42Z" fill="#7a5c9d" stroke="${line}" stroke-width="3"/><path d="M-39-18H39M-35 39V-8H-16V39M-8 39V-8H11V39M19 39V-8H34V39" fill="none" stroke="#ead7ff" stroke-width="4"/><circle cy="-20" r="8" fill="#ffd985"/>`);
    case 'science': return g(`<path d="M-22-43H22M-11-43V-11L-42 32Q-48 43-33 43H34Q49 43 42 31L11-11V-43" fill="#378d8b" stroke="${line}" stroke-width="4" stroke-linejoin="round"/><path d="M-31 20Q-12 10 0 20T31 20L41 38H-41Z" fill="#8ff2d8"/><circle cx="-6" cy="10" r="4" fill="#fff"/><circle cx="14" cy="3" r="3" fill="#fff"/>`);
    case 'technology': return g(`<path d="M-46-28H46V29H-46Z" rx="7" fill="#233d68" stroke="${line}" stroke-width="3"/><path d="M-29-14H-13V2H-29ZM-4-14H12V2H-4ZM21-14H37V2H21Z" fill="#80dfff"/><path d="M-30 14H31M-30 22H13M0 29V39M-17 39H17" stroke="#b7efff" stroke-width="3"/>`);
    case 'ai': return g(`<path d="M0-47 35-27V14L0 43-35 14V-27Z" fill="#614681" stroke="${line}" stroke-width="3"/><g stroke="#f2d3ff" stroke-width="2"><path d="M-24-20 0-5 24-20M-25 13 0-5 25 13M0-5V31"/><path d="M-24-20V13M24-20V13"/></g><g fill="#fff"><circle cx="-24" cy="-20" r="5"/><circle cx="24" cy="-20" r="5"/><circle cx="-25" cy="13" r="5"/><circle cx="25" cy="13" r="5"/><circle cy="-5" r="7"/><circle cy="31" r="5"/></g>`);
    case 'history': return g(`<path d="M-45 42V-20L0-46 45-20V42Z" fill="#96633b" stroke="${line}" stroke-width="3"/><path d="M-31 41V-7L0-26 31-7V41M-12 41V8Q0-8 12 8V41M-38-20 0-41 38-20" fill="none" stroke="#f5d29b" stroke-width="4"/><path d="M-50 43H50" stroke="#f5d29b" stroke-width="5"/>`);
    case 'geography': return g(`<path d="M-48 42  -16-30 -1-5 14-37 48 42Z" fill="#49846f" stroke="${line}" stroke-width="3"/><path d="m-25 42 18-30 8 14 13-25 24 41" fill="none" stroke="#c3f1d1" stroke-width="3"/><path d="M-45 27Q-26 16-10 26T22 25 49 20" fill="none" stroke="#70d4eb" stroke-width="5"/>`);
    case 'space': return g(`<path d="M-16 22Q-29 2-19-22L0-48 19-22Q29 2 16 22L0 39Z" fill="#ddd8ff" stroke="${line}" stroke-width="3"/><path d="M-18 8-39 25-35 3M18 8 39 25 35 3M-9 23-15 39M9 23 15 39" fill="#8e82db" stroke="${line}" stroke-width="3" stroke-linejoin="round"/><circle cy="-10" r="8" fill="#63c9e9" stroke="#fff" stroke-width="2"/><path d="M-8-47 0-59 8-47" fill="#ffb96c"/>`);
    case 'math': return g(`<path d="M0-48 42-24 42 24 0 48-42 24-42-24Z" fill="#a47d39" stroke="${line}" stroke-width="3"/><path d="M0-48V0L42-24M0 0 42 24M0 0-42 24M0 0-42-24M0 0V48" fill="none" stroke="#ffebaa" stroke-width="3"/><circle r="8" fill="#fff0b6"/>`);
    case 'physics': return g(`<path d="M-44 32H44M-32 31V-34M32 31V-34M-32-34H32" fill="none" stroke="${line}" stroke-width="3"/><circle cx="-20" cy="-25" r="6" fill="#9be8ff"/><path d="M-20-19 13 8" stroke="#c8f5ff" stroke-width="3"/><circle cx="16" cy="13" r="13" fill="#53bad2" stroke="#eaffff" stroke-width="3"/><path d="M-34 38Q-20 18-6 38T22 38 40 38" fill="none" stroke="#80e6f4" stroke-width="3"/>`);
    case 'chemistry': return g(`<path d="M-15-44H15M-8-44V-10L-39 31Q-47 43-31 43H31Q47 43 39 31L8-10V-44" fill="#5a9568" stroke="${line}" stroke-width="3"/><path d="M-31 22Q-15 12 0 22T31 22L40 38H-40Z" fill="#d0f08a"/><circle cx="-17" cy="15" r="4" fill="#fff"/><circle cx="14" cy="5" r="5" fill="#b4fcff"/>`);
    case 'biology': return g(`<path d="M-30-42Q0-55 30-42Q44-20 30 0Q0 18-30 0Q-44-20-30-42ZM-30 0Q0 18 30 0Q44 20 30 42Q0 55-30 42Q-44 20-30 0Z" fill="none" stroke="#f7ffe7" stroke-width="4"/><path d="M-29-37 29 37M29-37-29 37M-38-20H38M-38 20H38" stroke="#9bebad" stroke-width="3"/><circle r="7" fill="#e4a9de"/>`);
    case 'sports': return g(`<path d="M-43 42V-21Q0-56 43-21V42" fill="#8e473c" stroke="${line}" stroke-width="3"/><path d="M-32 40V-14Q0-39 32-14V40M-20 40V-6Q0-22 20-6V40" fill="none" stroke="#ffc184" stroke-width="4"/><circle cx="22" cy="18" r="16" fill="#e9894c" stroke="#fff0d6" stroke-width="3"/><path d="M7 18H37M22 3V33" stroke="#fff0d6" stroke-width="2"/>`);
    case 'movies': return g(`<path d="M-45-27H45V39H-45Z" fill="#613852" stroke="${line}" stroke-width="3"/><path d="M-45-27H45L34-43H-34Z" fill="#d07caa" stroke="${line}" stroke-width="3"/><path d="M-28-27-18-43M-7-27 3-43M14-27 24-43M-27 39V-27M27 39V-27" stroke="#f8c0da" stroke-width="4"/><path d="m-6-8 21 12-21 12Z" fill="#fff0aa"/>`);
    case 'music': return g(`<path d="M-29-40V17Q-29 31-43 31Q-57 31-53 17Q-50 4-29 7M-29-40 31-51V10Q31 24 17 24Q3 24 7 10Q10-3 31 0" fill="none" stroke="#fff3ff" stroke-width="6" stroke-linecap="round"/><path d="M-29-38 31-49" stroke="#cfa8ff" stroke-width="5"/><path d="M-42 40Q-25 28-8 40T26 40 48 37" fill="none" stroke="#e6caff" stroke-width="3"/>`);
    case 'literature': return g(`<path d="M-2-35Q-26-49-48-37V35Q-24 25-2 40ZM2-35Q26-49 48-37V35Q24 25 2 40Z" fill="#8b5d3f" stroke="${line}" stroke-width="3"/><path d="M-36-23Q-20-28-9-20M-36-9Q-20-14-9-6M11-20Q24-28 37-23M11-6Q24-14 37-9" stroke="#f3d6ad" stroke-width="3"/><path d="M0-36V39" stroke="#f8e9cf" stroke-width="3"/>`);
    case 'mythology': return g(`<path d="M-42 41V-18Q-25-10-14-26Q0-45 14-26Q25-10 42-18V41Z" fill="#925f37" stroke="${line}" stroke-width="3"/><path d="M-30 40V-6M-10 40V-11M10 40V-11M30 40V-6M-47 42H47" stroke="#f4d29c" stroke-width="4"/><path d="M-15-29Q-36-47-42-36M15-29Q36-47 42-36M-5-3 0 4 5-3" fill="none" stroke="#ffbe74" stroke-width="4" stroke-linecap="round"/>`);
    case 'nature': return g(`<path d="M0 42V-13M0 5Q-28 2-36-22Q-10-26 0-8Q8-32 35-36Q35-10 7 2Q32 3 39 22Q14 28 0 12" fill="#558e52" stroke="#e7ffe0" stroke-width="3"/><path d="M-8 42H8" stroke="#f5d18a" stroke-width="5"/><circle cx="-19" cy="-10" r="3" fill="#f5edb1"/><circle cx="21" cy="-23" r="3" fill="#f5edb1"/>`);
    case 'flags': return g(`<path d="M-34 42V-45" stroke="#fff" stroke-width="5"/><path d="M-30-41Q-6-51 15-40T40-41V-2Q16 7-3-2T-30-2Z" fill="#de645d" stroke="#fff3ee" stroke-width="3"/><path d="M-30-22H39V-2Q16 7-3-2T-30-2Z" fill="#f4dc91"/><circle cx="4" cy="-22" r="6" fill="#6a86bf"/>`);
    case 'food': return g(`<path d="M-41-14Q0-2 41-14L30 27Q0 46-30 27Z" fill="#c88142" stroke="${line}" stroke-width="3"/><path d="M-35-14Q-24-34-11-15Q0-41 12-15Q24-36 36-14" fill="#e87650" stroke="#ffe0a9" stroke-width="3"/><path d="M-17 0Q0-8 17 0" stroke="#f3d789" stroke-width="5"/><path d="M0-27V-43" stroke="#7fbd61" stroke-width="4"/>`);
    case 'logic': return g(`<path d="M-45-28H-9Q10-28 10-9V9Q10 28 29 28H45M-45 28H-27Q-9 28-9 9V-9Q-9-28 9-28H45" fill="none" stroke="#c5d5ff" stroke-width="4"/><circle cx="-42" cy="-28" r="8" fill="#ffe68b"/><circle cx="-42" cy="28" r="8" fill="#8ee4d7"/><circle cx="43" cy="-28" r="8" fill="#ff9aab"/><circle cx="43" cy="28" r="8" fill="#c89eff"/><path d="M-11 0H11" stroke="#fff" stroke-width="5"/>`);
    case 'puzzles': return g(`<path d="M-42-40H-7Q-11-25 0-25T7-40H42V-5Q27-10 27 0T42 7V42H7Q12 26 0 26T-7 42H-42V7Q-26 12-26 0T-42-7Z" fill="#997c3c" stroke="${line}" stroke-width="3"/><path d="M0-24V-5M-25 0H-7M7 0H27M0 7V26" stroke="#f5e6a9" stroke-width="3"/>`);
    case 'gaming': return g(`<path d="M-44-27Q-41-40-28-40H28Q41-40 44-27L51 22Q53 37 40 37Q32 37 25 25L15 12H-15L-25 25Q-32 37-40 37Q-53 37-51 22Z" fill="#6452a0" stroke="${line}" stroke-width="3"/><path d="M-29-15V7M-40-4H-18" stroke="#e4d8ff" stroke-width="5" stroke-linecap="round"/><circle cx="26" cy="-13" r="5" fill="#ffbd79"/><circle cx="38" cy="0" r="5" fill="#7ce2d4"/>`);
    case 'business': return g(`<path d="M-46 42V7H-20V42M-12 42V-9H14V42M22 42V-34H47V42Z" fill="#347d75" stroke="${line}" stroke-width="3"/><path d="M-39-7-18-23 0-16 26-42 42-34" fill="none" stroke="#ffdc78" stroke-width="4"/><path d="M22-34H47V-9" fill="none" stroke="#ffdc78" stroke-width="4"/>`);
    case 'body': return g(`<path d="M0-43Q-25-60-39-38Q-54-13-26 7Q-6 23 0 40Q6 23 26 7Q54-13 39-38Q25-60 0-43Z" fill="#c85f75" stroke="${line}" stroke-width="3"/><path d="M0-39V24M-20-18Q-6-9 0-1Q6-9 20-18M-23 5Q-9 9 0 21Q9 9 23 5" fill="none" stroke="#ffd4db" stroke-width="3"/>`);
    case 'inventions': return g(`<circle r="27" fill="#956e3c" stroke="${line}" stroke-width="3"/><circle r="10" fill="#28334a" stroke="#ffe1a0" stroke-width="3"/><path d="M-5-43V-29M5-43V-29M-5 29V43M5 29V43M-43-5H-29M-43 5H-29M29-5H43M29 5H43M-32-32-22-22M22 22 32 32M-32 32-22 22M22-22 32-32" stroke="#f4c878" stroke-width="6"/>`);
    default: return g(`<circle r="37" fill="#7063a5" stroke="${line}" stroke-width="3"/><path d="M-25 0H25M0-25V25" stroke="#fff" stroke-width="4"/>`);
  }
}

function renderLandmark(kind, accent, shadow, seed) {
  const n = seed % 9;
  const offset = (n - 4) * 3;
  const stroke = '#d8e8f0';
  const ground = `<path d="M0 188Q78 ${166 + n} 155 183T315 ${174 - n}T480 184V220H0Z" fill="${shadow}" opacity=".92"/>`;
  const mountain = `<path d="M0 190 69 112 108 151 181 65 256 154 310 95 402 173 454 120 480 149V220H0Z" fill="${shadow}"/><path d="m181 65 25 47-25-10-26 17ZM310 95l22 38-22-12-18 11ZM454 120l12 22-12-7-13 9Z" fill="#f8f5e9" opacity=".75"/>`;
  const arches = `<path d="M18 191V111Q18 76 55 76T92 111V191M114 191V89Q114 48 155 48T196 89V191M216 191V111Q216 76 253 76T290 111V191M314 191V89Q314 48 355 48T396 89V191" fill="none" stroke="${accent}" stroke-width="13"/><path d="M0 194H430" stroke="${stroke}" stroke-width="3" opacity=".7"/>`;
  const city = `<g fill="${shadow}" stroke="${accent}" stroke-width="2"><path d="M25 192V122H87V192ZM105 192V83H157V192ZM174 192V135H236V192ZM250 192V65H316V192ZM331 192V112H390V192Z"/><path d="M115 83 131 54 147 83M259 65 283 31 307 65"/></g><g fill="#ffe5a0"><path d="M40 139h9v12h-9zm25 0h9v12h-9zm-25 25h9v12h-9zm25 0h9v12h-9zM120 101h9v12h-9zm20 0h9v12h-9zm-20 25h9v12h-9zm20 0h9v12h-9zM270 83h10v12h-10zm22 0h10v12h-10zm-22 25h10v12h-10zm22 0h10v12h-10z"/></g>`;
  const water = `<path d="M0 154Q35 136 70 154T140 154 210 154 280 154 350 154 420 154 490 154V220H0Z" fill="${shadow}"/><path d="M0 163Q35 145 70 163T140 163 210 163 280 163 350 163 420 163 490 163M-20 185Q15 167 50 185T120 185 190 185 260 185 330 185 400 185 470 185" fill="none" stroke="${accent}" stroke-width="4" opacity=".8"/>`;
  const grove = `<path d="M0 192Q80 177 164 190T320 184T480 191V220H0Z" fill="${shadow}"/><g fill="${accent}" stroke="${stroke}" stroke-width="2"><path d="M58 188V108M22 131Q58 62 94 131Q96 162 58 168Q20 162 22 131ZM168 190V78M125 117Q168 37 211 117Q213 154 168 161Q123 154 125 117ZM302 189V113M268 137Q302 78 336 137Q338 165 302 171Q266 165 268 137ZM406 190V82M366 122Q406 38 446 122Q448 158 406 165Q364 158 366 122Z"/></g>`;
  const dunes = `<path d="M0 168Q65 113 141 160T275 150Q361 93 480 160V220H0Z" fill="${shadow}"/><path d="M0 175Q74 128 145 171M275 160Q365 107 480 168" fill="none" stroke="${accent}" stroke-width="3" opacity=".7"/>`;
  const rings = `<ellipse cx="246" cy="147" rx="147" ry="35" fill="none" stroke="${accent}" stroke-width="8" transform="rotate(-12 246 147)"/><ellipse cx="246" cy="147" rx="112" ry="25" fill="${shadow}" stroke="#dce5ff" stroke-width="2" transform="rotate(-12 246 147)"/><circle cx="247" cy="145" r="51" fill="${accent}" opacity=".75"/><path d="M211 112Q247 93 281 115M212 173Q248 193 280 171" fill="none" stroke="#fff1c3" stroke-width="4"/>`;
  const steps = `<path d="M35 192V166H95V141H155V116H215V91H275V66H335V41H395V192Z" fill="${shadow}" stroke="${accent}" stroke-width="3"/><path d="M36 166H95M96 141H155M156 116H215M216 91H275M276 66H335M336 41H395" stroke="${stroke}" stroke-width="2" opacity=".65"/>`;
  const dish = `<path d="M100 180Q150 76 245 70Q208 151 100 180Z" fill="${shadow}" stroke="${accent}" stroke-width="4"/><path d="M108 176 224 84M177 137 192 201M142 200H227M245 69 272 42" stroke="${stroke}" stroke-width="4"/><circle cx="272" cy="42" r="6" fill="#fff4be"/>`;
  const tower = `<path d="M100 192 130 71H241L272 192ZM116 77 155 39H216L254 77Z" fill="${shadow}" stroke="${accent}" stroke-width="4"/><path d="M152 190V121Q185 84 219 121V190M147 91H224" fill="none" stroke="${stroke}" stroke-width="4"/>`;
  const island = `<path d="M44 175Q118 157 172 169T294 165 435 174" fill="none" stroke="${accent}" stroke-width="5"/><path d="M120 166Q160 121 192 162ZM260 166Q291 132 320 165ZM345 165Q376 141 400 167Z" fill="${shadow}" stroke="${stroke}" stroke-width="2"/><path d="M160 157V124M286 160V131" stroke="${accent}" stroke-width="5"/><circle cx="164" cy="120" r="17" fill="${accent}"/><circle cx="288" cy="128" r="14" fill="${accent}"/>`;
  const laboratory = `<path d="M40 190H440M76 190V100H145V190M166 190V57H235V190M258 190V122H324V190M348 190V85H416V190" fill="${shadow}" stroke="${accent}" stroke-width="3"/><g fill="none" stroke="${stroke}" stroke-width="3"><path d="M95 120H126M185 79H216M276 144H306M368 106H397"/><circle cx="112" cy="153" r="14"/><path d="M190 122h20l12 18-12 18h-20l-12-18z"/></g>`;
  const bridge = `<path d="M25 183Q96 52 169 183M169 183Q242 52 315 183M315 183Q377 88 450 183" fill="none" stroke="${accent}" stroke-width="8"/><path d="M30 184H450M85 141V184M132 119V184M208 141V184M255 119V184M355 149V184M402 128V184" stroke="${stroke}" stroke-width="3"/><path d="M0 190H480" stroke="${shadow}" stroke-width="14"/>`;
  const blackhole = `<circle cx="245" cy="133" r="54" fill="#101324"/><ellipse cx="245" cy="133" rx="132" ry="42" fill="none" stroke="${accent}" stroke-width="12" transform="rotate(-17 245 133)"/><ellipse cx="245" cy="133" rx="102" ry="29" fill="none" stroke="#fff1c3" stroke-width="3" transform="rotate(-17 245 133)"/><circle cx="245" cy="133" r="18" fill="#05060a"/>`;
  const canyon = `<path d="M0 68 75 91 104 151 148 155 184 97 223 92 259 161 304 167 346 78 389 72 425 143 480 153V220H0Z" fill="${shadow}" stroke="${accent}" stroke-width="3"/><path d="M76 91 101 152M223 92 259 161M346 78 389 72 425 143" fill="none" stroke="${stroke}" stroke-width="3" opacity=".62"/>`;
  const dome = `<path d="M43 191A197 132 0 0 1 437 191Z" fill="${shadow}" stroke="${accent}" stroke-width="4"/><path d="M112 190A128 86 0 0 1 368 190M182 190A58 40 0 0 1 298 190M240 59V190M52 150H428" fill="none" stroke="${stroke}" stroke-width="3" opacity=".72"/>`;
  const grid = `<path d="M40 44H440V190H40Z" fill="${shadow}" stroke="${accent}" stroke-width="3"/>${Array.from({length:6},(_,i)=>`<path d="M${90+i*60} 44V190M40 ${74+i*23}H440" stroke="${stroke}" stroke-opacity=".28" stroke-width="2"/>`).join('')}<path d="M74 160 140 137 200 148 267 92 330 108 402 66" fill="none" stroke="#ffdc78" stroke-width="5"/>`;
  const globe = `<circle cx="240" cy="132" r="74" fill="${shadow}" stroke="${accent}" stroke-width="4"/><ellipse cx="240" cy="132" rx="34" ry="74" fill="none" stroke="${stroke}" stroke-width="3"/><path d="M169 132H311M183 96Q240 117 297 96M183 168Q240 147 297 168" fill="none" stroke="${stroke}" stroke-width="3"/><path d="M221 91Q239 77 250 96L244 115 262 127 249 146 232 141 218 159 198 149 204 127 188 114 198 99Z" fill="${accent}" opacity=".85"/>`;
  const cabinet = `<path d="M135 52H345V195H135Z" fill="${shadow}" stroke="${accent}" stroke-width="4"/><path d="M135 99H345M135 146H345M239 52V195" stroke="${stroke}" stroke-width="3"/><g fill="${accent}" stroke="${stroke}" stroke-width="2"><circle cx="183" cy="77" r="12"/><path d="M274 87V62H302V87ZM161 135 179 111 197 135Z"/><circle cx="281" cy="169" r="13"/><path d="M310 184V156L326 169V184Z"/></g>`;
  const collection = `<path d="M58 191H422M76 189V68H404V189" fill="none" stroke="${accent}" stroke-width="5"/><path d="M76 108H404M76 149H404" stroke="${stroke}" stroke-width="4"/><g fill="${shadow}" stroke="${accent}" stroke-width="2"><path d="M99 105V78H132V105ZM144 105V70H173V105ZM184 105V82H218V105ZM235 146V118H266V146ZM277 146V113H310V146ZM323 146V122H368V146ZM100 187V159H142V187ZM155 187V155H187V187ZM198 187V164H232V187ZM278 187V157H315V187ZM326 187V160H369V187Z"/></g>`;
  const forms = { mountain, arches, city, water, grove, dunes, rings, steps, dish, tower, island, laboratory, bridge, blackhole, canyon, dome, grid, globe, cabinet, collection };
  return `${ground}${(forms[kind] || forms[(['mountain','arches','city','water','grove','dunes','tower','bridge','island','laboratory'][seed % 10])])}`;
}

const SCENE_FAMILY = {
  general:['cabinet','arches','city','grove','island','tower','city','dome','bridge','collection'],
  science:['laboratory','tower','bridge','dome','arches','island','laboratory','city','grove','tower'],
  technology:['city','grid','tower','bridge','tower','city','dome','arches','city','tower'],
  ai:['grove','laboratory','bridge','dome','dish','tower','arches','city','laboratory','dome'],
  history:['tower','arches','arches','city','tower','island','tower','city','arches','steps'],
  geography:['mountain','water','dunes','island','water','grove','mountain','canyon','city','globe'],
  space:['rings','canyon','rings','dish','mountain','mountain','rings','blackhole','tower','blackhole'],
  math:['steps','tower','water','bridge','arches','mountain','city','dome','steps','tower'],
  physics:['bridge','tower','dome','water','rings','dunes','bridge','tower','blackhole','rings'],
  chemistry:['grove','mountain','bridge','laboratory','tower','water','grove','laboratory','bridge','tower'],
  biology:['dome','bridge','mountain','grove','laboratory','dome','grove','water','tower','dome'],
  sports:['steps','arches','city','water','tower','mountain','bridge','city','arches','steps'],
  movies:['city','laboratory','city','blackhole','arches','city','arches','tower','tower','arches'],
  music:['bridge','grove','tower','city','arches','arches','city','city','laboratory','arches'],
  literature:['grove','bridge','tower','grove','tower','arches','tower','grove','city','steps'],
  mythology:['island','mountain','tower','grove','tower','steps','tower','bridge','canyon','tower'],
  nature:['grove','water','grove','dunes','island','mountain','water','grove','water','mountain'],
  flags:['tower','city','city','city','arches','city','island','tower','city','globe'],
  food:['city','grove','dunes','city','arches','laboratory','city','grove','laboratory','arches'],
  logic:['bridge','tower','steps','arches','tower','grove','bridge','grid','steps','tower'],
  puzzles:['grove','tower','bridge','steps','arches','grove','tower','city','laboratory','tower'],
  gaming:['city','city','tower','laboratory','tower','city','arches','steps','city','tower'],
  business:['island','city','bridge','city','arches','laboratory','tower','city','island','city'],
  body:['dome','grove','tower','bridge','laboratory','dome','tower','bridge','tower','dome'],
  inventions:['tower','city','tower','laboratory','city','laboratory','bridge','city','tower','steps'],
};

function renderParticles(seed, accent) {
  let out = '';
  for (let i = 0; i < 16; i++) {
    const x = (seed * (i + 17) + i * 71 + 31) % 480;
    const y = 15 + ((seed * (i + 7) + i * 43 + 19) % 112);
    const r = i % 5 === 0 ? 2.4 : 1.3;
    const opacity = (0.25 + ((seed + i * 3) % 5) * 0.11).toFixed(2);
    out += `<circle cx="${x}" cy="${y}" r="${r}" fill="${accent}" opacity="${opacity}"/>`;
  }
  return out;
}

/**
 * Render a local, accessible, inline SVG illustration for one scene.
 * The scene is deterministic for a world/chapter/level tuple. `label` is
 * treated as untrusted text and escaped before it enters the SVG document.
 */
export function renderSceneArt(worldId, chapterId, levelId, label='Quiz Universe scene') {
  const id = Object.hasOwn(WORLDS, worldId) ? worldId : 'general';
  const world = WORLDS[id];
  const chapter = clamp(chapterId, 1, 10, 1);
  const level = clamp(levelId, 1, 100, 1);
  const seed = hash(`${id}:${chapter}:${level}`);
  const motif = world.sites[chapter - 1];
  const family = SCENE_FAMILY[id][chapter - 1];
  const title = `${String(label || world.name).trim() || world.name} · Chapter ${chapter} · Level ${level}`;
  const offset = ((level - 1) % 10) * 2.2;
  const zoom = (0.96 + (level % 5) * 0.018).toFixed(3);
  const hero = renderHero(id, seed % 100);
  const shift = ((level * 13 + chapter * 5) % 17) - 8;
  const softLight = (level % 3 === 0) ? '#ffdf9a' : world.accent;

  return `<svg class="scene-art" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 220" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${esc(title)}" style="position:absolute;inset:0;width:100%;height:100%;pointer-events:none">
  <title>${esc(title)}</title>
  <desc>An original vector scene for the ${esc(world.name)} world: ${esc(motif)} setting with a distinctive ${esc(id)} illustration.</desc>
  <rect width="480" height="220" fill="${world.dark}"/>
  <path d="M0 0H480V220H0Z" fill="#111528" opacity=".28"/>
  <ellipse cx="${315 + shift}" cy="78" rx="142" ry="115" fill="${softLight}" opacity=".12"/>
  <g opacity=".7">${renderParticles(seed, world.accent)}</g>
  <g aria-hidden="true">${renderLandmark(family, world.accent, world.dark, seed)}</g>
  <g transform="translate(${(310 + offset).toFixed(1)} 116) scale(${zoom})" aria-hidden="true">${hero}</g>
  <path d="M0 204Q105 189 208 203T480 198V220H0Z" fill="#0b1120" opacity=".55"/>
  <path d="M0 203Q95 195 202 205T480 200" fill="none" stroke="${world.accent}" stroke-opacity=".42" stroke-width="2"/>
  <circle cx="${(235 + (seed % 85)).toFixed(1)}" cy="${(175 + (level % 7)).toFixed(1)}" r="${(2 + level % 3)}" fill="${world.accent}" opacity=".85"/>
</svg>`;
}

export const SCENE_ART_WORLD_IDS = Object.freeze(Object.keys(WORLDS));
