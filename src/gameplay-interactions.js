// QUIZ UNIVERSE — Advanced Gameplay Interactions
// Map Selection, Timeline Ordering, Sequence Completion, and Image Identification

export const safeText = value => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

// ---------------------------------------------------------------------------
// 1. INTERACTIVE MAP SELECTION
// ---------------------------------------------------------------------------

export const GEOGRAPHY_COORDINATES = {
  'europe': { x: 210, y: 70, label: 'Europe' },
  'asia': { x: 295, y: 80, label: 'Asia' },
  'africa': { x: 215, y: 135, label: 'Africa' },
  'north america': { x: 95, y: 70, label: 'North America' },
  'south america': { x: 125, y: 160, label: 'South America' },
  'australia': { x: 335, y: 175, label: 'Australia' },
  'antarctica': { x: 200, y: 225, label: 'Antarctica' },
  'oceania': { x: 345, y: 175, label: 'Oceania' },

  'france': { x: 202, y: 72, label: 'France' },
  'paris': { x: 202, y: 72, label: 'Paris' },
  'germany': { x: 212, y: 65, label: 'Germany' },
  'berlin': { x: 212, y: 65, label: 'Berlin' },
  'italy': { x: 212, y: 80, label: 'Italy' },
  'rome': { x: 212, y: 80, label: 'Rome' },
  'spain': { x: 195, y: 82, label: 'Spain' },
  'madrid': { x: 195, y: 82, label: 'Madrid' },
  'portugal': { x: 188, y: 82, label: 'Portugal' },
  'united kingdom': { x: 196, y: 60, label: 'UK' },
  'uk': { x: 196, y: 60, label: 'UK' },
  'london': { x: 196, y: 60, label: 'London' },
  'ireland': { x: 190, y: 60, label: 'Ireland' },
  'russia': { x: 275, y: 55, label: 'Russia' },
  'moscow': { x: 235, y: 58, label: 'Moscow' },
  'china': { x: 300, y: 95, label: 'China' },
  'beijing': { x: 305, y: 90, label: 'Beijing' },
  'japan': { x: 345, y: 85, label: 'Japan' },
  'tokyo': { x: 345, y: 85, label: 'Tokyo' },
  'india': { x: 270, y: 115, label: 'India' },
  'new delhi': { x: 270, y: 115, label: 'New Delhi' },
  'egypt': { x: 228, y: 105, label: 'Egypt' },
  'cairo': { x: 228, y: 105, label: 'Cairo' },
  'brazil': { x: 130, y: 155, label: 'Brazil' },
  'brasilia': { x: 130, y: 155, label: 'Brasília' },
  'argentina': { x: 125, y: 190, label: 'Argentina' },
  'buenos aires': { x: 125, y: 190, label: 'Buenos Aires' },
  'chile': { x: 118, y: 185, label: 'Chile' },
  'canada': { x: 90, y: 48, label: 'Canada' },
  'ottawa': { x: 100, y: 60, label: 'Ottawa' },
  'united states': { x: 92, y: 80, label: 'USA' },
  'usa': { x: 92, y: 80, label: 'USA' },
  'washington': { x: 102, y: 78, label: 'Washington' },
  'mexico': { x: 80, y: 100, label: 'Mexico' },
  'mexico city': { x: 80, y: 100, label: 'Mexico City' },
  'south africa': { x: 220, y: 185, label: 'South Africa' },
  'cape town': { x: 218, y: 188, label: 'Cape Town' },
  'kenya': { x: 238, y: 138, label: 'Kenya' },
  'nairobi': { x: 238, y: 138, label: 'Nairobi' },
  'nigeria': { x: 200, y: 125, label: 'Nigeria' },
  'madagascar': { x: 245, y: 170, label: 'Madagascar' },
  'greece': { x: 222, y: 82, label: 'Greece' },
  'athens': { x: 222, y: 82, label: 'Athens' },
  'turkey': { x: 235, y: 80, label: 'Turkey' },
  'ankara': { x: 235, y: 80, label: 'Ankara' },
  'saudi arabia': { x: 242, y: 108, label: 'Saudi Arabia' },
  'iran': { x: 252, y: 92, label: 'Iran' },
  'indonesia': { x: 320, y: 138, label: 'Indonesia' },
  'thailand': { x: 298, y: 118, label: 'Thailand' },
  'vietnam': { x: 306, y: 118, label: 'Vietnam' },
  'south korea': { x: 334, y: 88, label: 'South Korea' },
  'seoul': { x: 334, y: 88, label: 'Seoul' },
  'norway': { x: 208, y: 48, label: 'Norway' },
  'oslo': { x: 208, y: 48, label: 'Oslo' },
  'sweden': { x: 215, y: 48, label: 'Sweden' },
  'stockholm': { x: 215, y: 48, label: 'Stockholm' },
  'finland': { x: 225, y: 46, label: 'Finland' },
  'iceland': { x: 178, y: 42, label: 'Iceland' },
  'reykjavik': { x: 178, y: 42, label: 'Reykjavík' },
  'new zealand': { x: 375, y: 198, label: 'New Zealand' },
  'philippines': { x: 330, y: 122, label: 'Philippines' },
  'singapore': { x: 310, y: 132, label: 'Singapore' },
  'malaysia': { x: 310, y: 130, label: 'Malaysia' },
  'colombia': { x: 110, y: 130, label: 'Colombia' },
  'peru': { x: 108, y: 150, label: 'Peru' },
  'lima': { x: 108, y: 150, label: 'Lima' },
  'cuba': { x: 96, y: 102, label: 'Cuba' },
  'havana': { x: 96, y: 102, label: 'Havana' },
  'switzerland': { x: 208, y: 72, label: 'Switzerland' },
  'netherlands': { x: 205, y: 64, label: 'Netherlands' },
  'amsterdam': { x: 205, y: 64, label: 'Amsterdam' },
  'belgium': { x: 203, y: 66, label: 'Belgium' },
  'brussels': { x: 203, y: 66, label: 'Brussels' },
  'austria': { x: 215, y: 72, label: 'Austria' },
  'vienna': { x: 215, y: 72, label: 'Vienna' },
  'poland': { x: 220, y: 64, label: 'Poland' },
  'warsaw': { x: 220, y: 64, label: 'Warsaw' },
  'morocco': { x: 190, y: 94, label: 'Morocco' },
  'algeria': { x: 205, y: 98, label: 'Algeria' },
  'ethiopia': { x: 240, y: 128, label: 'Ethiopia' },
  'ghana': { x: 195, y: 128, label: 'Ghana' },
  'tanzania': { x: 238, y: 148, label: 'Tanzania' },
  'canberra': { x: 342, y: 182, label: 'Canberra' },
  'sydney': { x: 348, y: 178, label: 'Sydney' },
  'melbourne': { x: 338, y: 186, label: 'Melbourne' },
  'perth': { x: 318, y: 176, label: 'Perth' },
  'pacific ocean': { x: 40, y: 120, label: 'Pacific Ocean' },
  'atlantic ocean': { x: 160, y: 115, label: 'Atlantic Ocean' },
  'indian ocean': { x: 270, y: 155, label: 'Indian Ocean' },
  'arctic ocean': { x: 200, y: 22, label: 'Arctic Ocean' },
  'southern ocean': { x: 200, y: 210, label: 'Southern Ocean' },
  'mediterranean sea': { x: 215, y: 88, label: 'Mediterranean' },
  'sahara desert': { x: 210, y: 108, label: 'Sahara' },
  'amazon rainforest': { x: 122, y: 148, label: 'Amazon' },
  'mount everest': { x: 278, y: 102, label: 'Mt Everest' },
  'himalayas': { x: 276, y: 100, label: 'Himalayas' },
  'nile river': { x: 230, y: 115, label: 'Nile' },
  'pyrenees': { x: 198, y: 78, label: 'Pyrenees' },
  'alps': { x: 210, y: 72, label: 'Alps' },
  'denmark': { x: 208, y: 56, label: 'Denmark' },
  'bangladesh': { x: 278, y: 114, label: 'Bangladesh' },
};

export const SPACE_COORDINATES = {
  'sun': { x: 200, y: 120, r: 24, label: 'Sun', orbit: 0 },
  'mercury': { x: 226, y: 120, r: 7, label: 'Mercury', orbit: 26 },
  'venus': { x: 248, y: 110, r: 10, label: 'Venus', orbit: 50 },
  'earth': { x: 272, y: 100, r: 11, label: 'Earth', orbit: 75 },
  'moon': { x: 284, y: 94, r: 5, label: 'Moon', orbit: 75 },
  'mars': { x: 300, y: 88, r: 9, label: 'Mars', orbit: 105 },
  'jupiter': { x: 338, y: 75, r: 18, label: 'Jupiter', orbit: 145 },
  'saturn': { x: 375, y: 65, r: 15, label: 'Saturn', orbit: 180 },
  'uranus': { x: 120, y: 65, r: 12, label: 'Uranus', orbit: 100 },
  'neptune': { x: 75, y: 60, r: 12, label: 'Neptune', orbit: 140 },
  'pluto': { x: 45, y: 55, r: 6, label: 'Pluto', orbit: 175 },
  'asteroid belt': { x: 315, y: 82, r: 8, label: 'Asteroid Belt', orbit: 125 },
  'kuiper belt': { x: 50, y: 55, r: 8, label: 'Kuiper Belt', orbit: 175 },
  'milky way': { x: 200, y: 35, r: 12, label: 'Milky Way', orbit: 0 },
  'andromeda': { x: 340, y: 35, r: 12, label: 'Andromeda', orbit: 0 },
  'iss': { x: 270, y: 95, r: 6, label: 'ISS', orbit: 75 },
  'hubble': { x: 274, y: 92, r: 6, label: 'Hubble', orbit: 75 },
  'james webb': { x: 278, y: 88, r: 6, label: 'JWST', orbit: 80 },
  'voyager': { x: 30, y: 35, r: 6, label: 'Voyager', orbit: 210 },
  'proxima centauri': { x: 365, y: 195, r: 10, label: 'Proxima Centauri', orbit: 0 },
};

export function resolveOptionCoordinates(worldId, options) {
  const isSpace = worldId === 'space';
  const table = isSpace ? SPACE_COORDINATES : GEOGRAPHY_COORDINATES;

  return options.map((option, index) => {
    const text = String(option?.text || '').trim().toLowerCase();
    let match = null;
    for (const [key, coords] of Object.entries(table)) {
      if (text.includes(key) || key.includes(text)) {
        match = coords;
        break;
      }
    }
    // Explicit known locations only; no arbitrary quadrant defaults
    const base = match ? { x: match.x, y: match.y } : (isSpace ? { x: 200 + (index * 35), y: 100 + (index * 15) } : { x: 180 + (index * 40), y: 80 + (index * 25) });
    const x = Math.max(30, Math.min(370, base.x));
    const y = Math.max(35, Math.min(205, base.y));
    return {
      x,
      y,
      label: option?.text || `Sector ${String.fromCharCode(65 + index)}`,
      markerLabel: `Sector ${String.fromCharCode(65 + index)}`,
    };
  });
}

export function renderMapSvg(worldId, options, correctIndex, mapData) {
  const isSpace = worldId === 'space' || mapData?.mapType === 'space';
  const hotspots = mapData?.hotspots || resolveOptionCoordinates(worldId, options);

  if (isSpace) {
    return `
      <svg class="interactive-map-svg" viewBox="0 0 400 240" role="img" aria-label="Celestial Navigation Chart" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sun-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="1"/>
            <stop offset="50%" stop-color="#f59e0b" stop-opacity="0.8"/>
            <stop offset="100%" stop-color="#090d16" stop-opacity="0"/>
          </radialGradient>
          <radialGradient id="celestial-pin-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9"/>
            <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
          </radialGradient>
        </defs>
        <rect width="400" height="240" fill="#060913" rx="12"/>
        
        <!-- Star Field Background -->
        <g opacity="0.5" fill="#ffffff">
          <circle cx="25" cy="30" r="1"/> <circle cx="80" cy="20" r="1.5"/> <circle cx="150" cy="40" r="1"/>
          <circle cx="340" cy="30" r="1.5"/> <circle cx="380" cy="90" r="1"/> <circle cx="50" cy="180" r="1.5"/>
          <circle cx="120" cy="220" r="1"/> <circle cx="290" cy="210" r="1.5"/> <circle cx="370" cy="180" r="1"/>
        </g>
        
        <!-- Planetary Orbital Paths -->
        <ellipse cx="200" cy="120" rx="30" ry="22" fill="none" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="3 3"/>
        <ellipse cx="200" cy="120" rx="55" ry="40" fill="none" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="3 3"/>
        <ellipse cx="200" cy="120" rx="85" ry="60" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 4"/>
        <ellipse cx="200" cy="120" rx="120" ry="85" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 4"/>
        <ellipse cx="200" cy="120" rx="160" ry="105" fill="none" stroke="#1e293b" stroke-width="1.2" stroke-dasharray="4 4"/>
        
        <!-- Central Star (Sun) -->
        <circle cx="200" cy="120" r="26" fill="url(#sun-glow)"/>
        <circle cx="200" cy="120" r="12" fill="#fef08a" stroke="#f59e0b" stroke-width="2"/>
        <text x="200" y="124" font-size="9" fill="#78350f" text-anchor="middle" font-weight="bold">SOL</text>

        <!-- Coordinate Hotspots for each option with neutral markers -->
        ${hotspots.map((c, i) => {
          const displayedIndex = c.optionId ? options?.findIndex(opt => opt?.id === c.optionId) : -1;
          const answerIndex = (displayedIndex !== undefined && displayedIndex !== -1) ? displayedIndex : (c.optionIndex ?? i);
          const optText = safeText(options?.[answerIndex]?.text || c.locationName || '');
          const markerBadge = safeText(c.markerLabel || `Sector ${String.fromCharCode(65 + i)}`);
          return `
          <g class="map-hotspot" data-map-answer="${answerIndex}" data-option-id="${safeText(c.optionId || options?.[answerIndex]?.id || '')}" tabindex="0" role="button" aria-label="Sector ${String.fromCharCode(65 + i)}: ${optText}">
            <circle cx="${c.x}" cy="${c.y}" r="22" fill="url(#celestial-pin-glow)" opacity="0.7"/>
            <circle cx="${c.x}" cy="${c.y}" r="15" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
            <circle cx="${c.x}" cy="${c.y}" r="5" fill="#facc15"/>
            <text x="${c.x}" y="${c.y + 4}" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">${String.fromCharCode(65 + i)}</text>
            <rect x="${c.x - 38}" y="${c.y + 18}" width="76" height="16" rx="4" fill="#020617" stroke="#38bdf8" stroke-width="0.8" opacity="0.95"/>
            <text x="${c.x}" y="${c.y + 29}" font-size="8.5" fill="#e0f2fe" text-anchor="middle" font-weight="600">${markerBadge}</text>
          </g>
        `;
        }).join('')}
      </svg>
    `;
  }

  // Geographic World Atlas Map
  return `
    <svg class="interactive-map-svg" viewBox="0 0 400 240" role="img" aria-label="Interactive World Map" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="geo-pin-pulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="400" height="240" fill="#0c4a6e" rx="12"/>
      
      <!-- Coordinate Graticules -->
      <line x1="0" y1="120" x2="400" y2="120" stroke="#0284c7" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
      <line x1="0" y1="60" x2="400" y2="60" stroke="#0284c7" stroke-width="0.7" stroke-dasharray="2 4" opacity="0.3"/>
      <line x1="0" y1="180" x2="400" y2="180" stroke="#0284c7" stroke-width="0.7" stroke-dasharray="2 4" opacity="0.3"/>
      <line x1="200" y1="0" x2="200" y2="240" stroke="#0284c7" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
      
      <!-- Vector Continents -->
      <!-- North America -->
      <path d="M45 40 L115 35 L145 65 L110 100 L75 95 L65 75 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- South America -->
      <path d="M105 125 L145 135 L140 185 L120 205 L105 165 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- Europe -->
      <path d="M190 45 L235 45 L240 75 L215 85 L190 75 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- Africa -->
      <path d="M190 95 L245 95 L250 155 L225 190 L195 155 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- Asia -->
      <path d="M245 40 L355 45 L350 115 L295 130 L260 95 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- Australia -->
      <path d="M315 155 L365 155 L360 195 L315 190 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.2" opacity="0.8"/>
      <!-- Antarctica -->
      <path d="M100 228 L300 228 L280 238 L120 238 Z" fill="#0284c7" stroke="#7dd3fc" stroke-width="1" opacity="0.6"/>

      <!-- Compass Rose Indicator -->
      <g transform="translate(365, 30)">
        <circle cx="0" cy="0" r="14" fill="#082f49" stroke="#38bdf8" stroke-width="1" opacity="0.8"/>
        <polygon points="0,-12 3,-3 0,0 -3,-3" fill="#f43f5e"/>
        <polygon points="0,12 3,3 0,0 -3,3" fill="#94a3b8"/>
        <polygon points="12,0 3,3 0,0 3,-3" fill="#94a3b8"/>
        <polygon points="-12,0 -3,3 0,0 -3,-3" fill="#94a3b8"/>
        <text x="0" y="-14" font-size="8" fill="#f43f5e" text-anchor="middle" font-weight="bold">N</text>
      </g>

      <!-- Interactive Hotspots for each option with neutral markers -->
      ${hotspots.map((c, i) => {
        const displayedIndex = c.optionId ? options?.findIndex(opt => opt?.id === c.optionId) : -1;
        const answerIndex = (displayedIndex !== undefined && displayedIndex !== -1) ? displayedIndex : (c.optionIndex ?? i);
        const optText = safeText(options?.[answerIndex]?.text || c.locationName || '');
        const markerBadge = safeText(c.markerLabel || `Site ${String.fromCharCode(65 + i)}`);
        return `
        <g class="map-hotspot" data-map-answer="${answerIndex}" data-option-id="${safeText(c.optionId || options?.[answerIndex]?.id || '')}" tabindex="0" role="button" aria-label="Region ${String.fromCharCode(65 + i)}: ${optText}">
          <circle cx="${c.x}" cy="${c.y}" r="22" fill="url(#geo-pin-pulse)"/>
          <circle cx="${c.x}" cy="${c.y}" r="14" fill="#082f49" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="${c.x}" cy="${c.y}" r="5" fill="#facc15"/>
          <text x="${c.x}" y="${c.y + 4}" font-size="11" fill="#ffffff" text-anchor="middle" font-weight="bold">${String.fromCharCode(65 + i)}</text>
          <rect x="${c.x - 38}" y="${c.y + 16}" width="76" height="16" rx="4" fill="#082f49" stroke="#38bdf8" stroke-width="0.8" opacity="0.95"/>
          <text x="${c.x}" y="${c.y + 27}" font-size="8.5" fill="#e0f2fe" text-anchor="middle" font-weight="600">${markerBadge}</text>
        </g>
      `;
      }).join('')}
    </svg>
  `;
}

// ---------------------------------------------------------------------------
// 2. TIMELINE ORDERING BOARD
// ---------------------------------------------------------------------------

export const HISTORICAL_CHRONOLOGY = {
  // Ancient & Classical
  'egypt': -2500, 'pyramids': -2500, 'giza': -2500, 'hieroglyphs': -3000, 'cuneiform': -3200,
  'hammurabi': -1750, 'babylon': -1750, 'tutankhamun': -1323, 'trojan war': -1200,
  'phoenician': -1200, 'greece': -750, 'homer': -750, 'olympics': -776,
  'rome': -509, 'roman republic': -509, 'parthenon': -447, 'pericles': -450,
  'socrates': -399, 'alexander': -330, 'cusco': 1400, 'inca': 1400, 'aztec': 1325, 'maya': 250,
  'julius caesar': -44, 'augustus': -27, 'roman empire': -27, 'colosseum': 80,
  'pompeii': 79, 'vesuvius': 79, 'constantine': 313, 'constantinople': 330,
  'fall of rome': 476,

  // Medieval & Early Modern
  'mohammed': 622, 'charlemagne': 800, 'viking': 793, 'domesday': 1086,
  'magna carta': 1215, 'black death': 1347, 'printing press': 1440, 'gutenberg': 1440,
  'columbus': 1492, 'cabot': 1497, 'da gama': 1498, 'magellan': 1519,
  'reformation': 1517, 'luther': 1517, 'copernicus': 1543, 'spanish armada': 1588,
  'mayflower': 1620, 'pilgrims': 1620, 'galileo': 1610, 'petition of right': 1628,
  'newton': 1687, 'principia': 1687, 'bill of rights': 1689,

  // Modern & Contemporary
  'steam engine': 1769, 'watt': 1769, 'american revolution': 1775, 'declaration of independence': 1776,
  'george washington': 1789, 'french revolution': 1789, 'haitian revolution': 1791,
  'john adams': 1797, 'thomas jefferson': 1801, 'james madison': 1809,
  'napoleon': 1804, 'waterloo': 1815, 'telegraph': 1837, 'morse': 1837,
  'communist manifesto': 1848, 'american civil war': 1861, 'telephone': 1876, 'bell': 1876,
  'light bulb': 1879, 'edison': 1879, 'automobile': 1886, 'benz': 1886,
  'wright brothers': 1903, 'world war i': 1914, 'russian revolution': 1917, 'gandhi': 1920,
  'penicillin': 1928, 'fleming': 1928, 'amelia earhart': 1932, 'world war ii': 1939,
  'atomic bomb': 1945, 'united nations': 1945, 'transistor': 1947, 'sputnik': 1957,
  'dna structure': 1953, 'moon landing': 1969, 'apollo 11': 1969, 'armstrong': 1969,
  'internet': 1969, 'berlin wall': 1989, 'world wide web': 1991, 'hubble telescope': 1990,
  'smartphones': 2007,
};

export function resolveChronologicalOrder(question, options) {
  // 1. Try explicit 4-digit years in options
  const years = options.map((opt, index) => {
    const text = String(opt?.text || '');
    const match = text.match(/\b(\d{3,4})\s*(BCE|BC|CE|AD)?\b/i);
    if (match) {
      let year = parseInt(match[1], 10);
      if (match[2] && /^(BCE|BC)$/i.test(match[2])) year = -year;
      return { index, year, detected: true };
    }

    // 2. Try historical table match
    const lower = text.toLowerCase();
    for (const [key, date] of Object.entries(HISTORICAL_CHRONOLOGY)) {
      if (lower.includes(key)) {
        return { index, year: date, detected: true };
      }
    }

    // 3. Try checking question stem for additional context
    const stemLower = (question?.q || '').toLowerCase();
    for (const [key, date] of Object.entries(HISTORICAL_CHRONOLOGY)) {
      if (stemLower.includes(key) && lower.includes(key)) {
        return { index, year: date, detected: true };
      }
    }

    // Preserve index
    return { index, year: index * 100, detected: false };
  });

  // Sort indices from earliest to latest
  const sorted = [...years].sort((a, b) => a.year - b.year);
  return sorted.map(item => item.index);
}

export function renderTimelineBoardMarkup(optionsOrTimelineData, order) {
  const isStructured = Boolean(optionsOrTimelineData && Array.isArray(optionsOrTimelineData.events));
  const events = isStructured ? optionsOrTimelineData.events : optionsOrTimelineData;
  const theme = isStructured ? (optionsOrTimelineData.theme || 'Chronological Timeline') : 'Timeline Ordering';

  return `
    <section class="timeline-board" aria-label="Chronological Timeline Ordering Challenge">
      <div class="timeline-instructions">
        <small>TIMELINE ORDERING · ${safeText(theme.toUpperCase())}</small>
        <strong>Tap a milestone card to select it, then tap another card to swap positions into chronological order (Earliest → Latest):</strong>
      </div>
      <div class="timeline-track">
        <div class="timeline-line"></div>
        ${order.map((itemIdx, slotIdx) => {
          const item = events[itemIdx];
          const title = isStructured ? item.title : (item?.text || '');
          const desc = isStructured ? item.description : '';
          const eraLabel = slotIdx === 0 ? 'Earliest' : slotIdx === 3 ? 'Latest' : `Milestone #${slotIdx + 1}`;
          return `
            <div class="timeline-slot" data-slot-index="${slotIdx}">
              <div class="timeline-marker">${slotIdx + 1}</div>
              <button type="button" class="timeline-card" data-timeline-card="${slotIdx}" aria-label="Position ${slotIdx + 1} (${eraLabel}): ${safeText(title)}">
                <span class="timeline-order-badge">#${slotIdx + 1} · ${eraLabel}</span>
                <strong class="timeline-card-title">${safeText(title)}</strong>
                ${desc ? `<p class="timeline-card-desc">${safeText(desc)}</p>` : ''}
              </button>
            </div>
          `;
        }).join('')}
      </div>
      <div class="timeline-actions">
        <button type="button" class="primary-button" id="confirm-timeline">Confirm Chronological Order ✦</button>
      </div>
    </section>
  `;
}

// ---------------------------------------------------------------------------
// 3. SEQUENCE COMPLETION BOARD
// ---------------------------------------------------------------------------

export function extractSequenceTerms(question) {
  const stem = String(question?.q || '').trim();
  
  // Match "sequence: 2, 4, 8, 16, 32, …" or "pattern: A, C, E, G, I, …"
  const colonMatch = stem.match(/(?:sequence|pattern|series|numbers?|progression|terms?):\s*([^?]+)/i);
  let rawList = colonMatch ? colonMatch[1] : '';
  
  if (!rawList) {
    // Look for comma-separated numbers or letter patterns in the stem
    const listMatch = stem.match(/([0-9A-Za-z/²³–-]+(?:\s*,\s*[0-9A-Za-z/²³–-]+){2,})/);
    if (listMatch) rawList = listMatch[1];
  }

  let terms = [];
  if (rawList) {
    terms = rawList
      .replace(/[….]/g, '')
      .split(/,\s*/)
      .map(t => t.trim())
      .filter(t => t && t !== '?');
  }

  // Fails closed if fewer than 3 terms are found (NO generic Term 1..4 placeholders)
  return terms.length >= 3 ? terms : [];
}

export function renderSequenceBoardMarkup(question, options, sequenceData) {
  const terms = sequenceData?.terms || extractSequenceTerms(question);
  const rule = sequenceData?.rule || 'Analyze the sequence pattern';
  const typeLabel = (sequenceData?.sequenceType || 'Progression').toUpperCase();
  
  return `
    <section class="sequence-board" aria-label="Sequence Completion Challenge">
      <div class="sequence-instructions">
        <small>${safeText(typeLabel)} SEQUENCE · RULE: ${safeText(rule)}</small>
        <strong>Analyze the sequence progression rail and select the term that correctly fills the target:</strong>
      </div>
      <div class="sequence-rail">
        ${terms.map((term, index) => `
          <div class="sequence-step">
            <small>STEP ${index + 1}</small>
            <strong>${safeText(term)}</strong>
          </div>
          <div class="sequence-arrow">→</div>
        `).join('')}
        <div class="sequence-step sequence-target" id="sequence-slot">
          <small>TARGET</small>
          <strong class="sequence-slot-text">?</strong>
        </div>
      </div>
      <p class="sequence-hint">Choose the option that correctly completes this sequence:</p>
      <div class="sequence-options">
        ${options.map((option, i) => `
          <button type="button" class="sequence-option-card" data-sequence-choice="${i}" aria-label="Option ${String.fromCharCode(65 + i)}: ${safeText(option.text)}">
            <span class="sequence-key">${String.fromCharCode(65 + i)}</span>
            <span>${safeText(option.text)}</span>
          </button>
        `).join('')}
      </div>
    </section>
  `;
}

// ---------------------------------------------------------------------------
// 4. IMAGE IDENTIFICATION BOARD
// ---------------------------------------------------------------------------

export const SUBJECT_SPECIMEN_SVGS = {
  // Science & Biology
  dna_helix: `
    <g stroke="#38bdf8" stroke-width="2.5" fill="none">
      <path d="M70 30 Q115 80 160 30 T250 30"/>
      <path d="M70 130 Q115 80 160 130 T250 130"/>
      <!-- Base Pair Rungs -->
      <line x1="85" y1="45" x2="85" y2="115" stroke="#f43f5e" stroke-width="2"/>
      <line x1="115" y1="78" x2="115" y2="82" stroke="#facc15" stroke-width="2"/>
      <line x1="145" y1="45" x2="145" y2="115" stroke="#10b981" stroke-width="2"/>
      <line x1="175" y1="78" x2="175" y2="82" stroke="#f43f5e" stroke-width="2"/>
      <line x1="205" y1="45" x2="205" y2="115" stroke="#facc15" stroke-width="2"/>
      <line x1="235" y1="78" x2="235" y2="82" stroke="#10b981" stroke-width="2"/>
    </g>
    <text x="160" y="148" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">SPECIMEN: DNA DOUBLE HELIX</text>
  `,
  cell_mitochondria: `
    <ellipse cx="160" cy="80" rx="90" ry="50" fill="#1e1b4b" stroke="#818cf8" stroke-width="3"/>
    <!-- Folded Cristae Inner Membrane -->
    <path d="M90 80 Q110 50 130 80 T170 80 T210 80 T230 80" fill="none" stroke="#f43f5e" stroke-width="3"/>
    <path d="M100 90 Q120 110 140 90 T180 90 T220 90" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
    <circle cx="160" cy="80" r="14" fill="#6366f1" opacity="0.6"/>
    <text x="160" y="148" font-size="10" fill="#a5b4fc" text-anchor="middle" font-weight="bold">SPECIMEN: CELLULAR ORGANELLE</text>
  `,
  microscope: `
    <!-- Base -->
    <rect x="110" y="130" width="100" height="14" rx="4" fill="#334155" stroke="#64748b" stroke-width="2"/>
    <!-- Arm -->
    <path d="M190 130 Q215 100 200 60 L170 50" fill="none" stroke="#475569" stroke-width="12" stroke-linecap="round"/>
    <!-- Body Tube -->
    <rect x="135" y="30" width="22" height="60" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2" transform="rotate(-20 146 60)"/>
    <!-- Eyepiece -->
    <rect x="125" y="15" width="26" height="16" rx="2" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5" transform="rotate(-20 138 23)"/>
    <!-- Stage -->
    <rect x="120" y="95" width="60" height="6" rx="2" fill="#94a3b8"/>
    <text x="160" y="152" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">SPECIMEN: OPTICAL MICROSCOPE</text>
  `,
  benzene_molecule: `
    <!-- Hexagonal Ring -->
    <polygon points="160,35 210,65 210,115 160,145 110,115 110,65" fill="#0f172a" stroke="#10b981" stroke-width="3"/>
    <!-- Inner Pi Delocalization Circle -->
    <circle cx="160" cy="90" r="32" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="8 6"/>
    <text x="160" y="94" font-size="12" fill="#6ee7b7" text-anchor="middle" font-weight="bold">C₆H₆</text>
    <text x="160" y="152" font-size="10" fill="#6ee7b7" text-anchor="middle" font-weight="bold">SPECIMEN: AROMATIC BENZENE RING</text>
  `,
  atom_bohr: `
    <!-- Central Nucleus -->
    <circle cx="160" cy="80" r="14" fill="#ef4444" stroke="#dc2626" stroke-width="1.5"/>
    <circle cx="156" cy="76" r="6" fill="#3b82f6"/>
    <circle cx="164" cy="82" r="6" fill="#f59e0b"/>
    <circle cx="159" cy="84" r="5" fill="#ef4444"/>
    <!-- Electron Orbital Rings -->
    <ellipse cx="160" cy="80" rx="75" ry="24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2" transform="rotate(-30 160 80)"/>
    <ellipse cx="160" cy="80" rx="75" ry="24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2" transform="rotate(30 160 80)"/>
    <ellipse cx="160" cy="80" rx="75" ry="24" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="4 2" transform="rotate(90 160 80)"/>
    <!-- Orbiting Electrons -->
    <circle cx="100" cy="50" r="4.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1"/>
    <circle cx="220" cy="110" r="4.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1"/>
    <circle cx="160" cy="20" r="4.5" fill="#38bdf8" stroke="#e0f2fe" stroke-width="1"/>
    <text x="160" y="148" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">SPECIMEN: BOHR ATOMIC MODEL</text>
  `,
  liquid_matter: `
    <!-- Laboratory Beaker Outline -->
    <path d="M110 35 L110 120 Q110 135 125 135 L195 135 Q210 135 210 120 L210 35 L218 30 L106 30 Z" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-linejoin="round"/>
    <!-- Liquid Fluid Filling Beaker Bottom -->
    <path d="M112 65 Q160 72 208 65 L208 120 Q208 133 195 133 L125 133 Q112 133 112 120 Z" fill="#0284c7" opacity="0.8"/>
    <!-- Liquid Meniscus Surface Highlight -->
    <path d="M112 65 Q160 73 208 65" fill="none" stroke="#7dd3fc" stroke-width="2.5"/>
    <!-- Graduation Tick Marks -->
    <line x1="112" y1="50" x2="128" y2="50" stroke="#94a3b8" stroke-width="1.5"/>
    <line x1="112" y1="70" x2="124" y2="70" stroke="#e0f2fe" stroke-width="1.5"/>
    <line x1="112" y1="90" x2="128" y2="90" stroke="#e0f2fe" stroke-width="1.5"/>
    <line x1="112" y1="110" x2="124" y2="110" stroke="#e0f2fe" stroke-width="1.5"/>
    <text x="134" y="53" font-size="7.5" fill="#94a3b8">200ml</text>
    <text x="134" y="93" font-size="7.5" fill="#e0f2fe">100ml</text>
    <!-- Fluid Droplets Floating / Pouring -->
    <circle cx="155" cy="42" r="3.5" fill="#38bdf8"/>
    <circle cx="165" cy="52" r="2.5" fill="#7dd3fc"/>
    <text x="160" y="152" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">SPECIMEN: LIQUID (FIXED VOLUME, FLUID FORM)</text>
  `,
  pyramid_sphinx: `
    <!-- Desert Dunes -->
    <path d="M20 140 Q160 110 300 140 Z" fill="#b45309" opacity="0.6"/>
    <!-- Great Pyramid -->
    <polygon points="160,35 70,135 250,135" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
    <polygon points="160,35 250,135 275,130 200,45" fill="#d97706" opacity="0.8"/>
    <!-- Golden Capstone -->
    <polygon points="160,35 150,50 170,50" fill="#fef08a"/>
    <text x="160" y="152" font-size="10" fill="#fde68a" text-anchor="middle" font-weight="bold">LANDMARK: GREAT PYRAMID OF GIZA</text>
  `,
  roman_temple: `
    <!-- Pediment -->
    <polygon points="160,35 80,65 240,65" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
    <!-- Architrave -->
    <rect x="80" y="65" width="160" height="12" fill="#475569" stroke="#94a3b8" stroke-width="1.5"/>
    <!-- Fluted Columns -->
    <rect x="95" y="77" width="14" height="55" fill="#64748b"/>
    <rect x="130" y="77" width="14" height="55" fill="#64748b"/>
    <rect x="175" y="77" width="14" height="55" fill="#64748b"/>
    <rect x="210" y="77" width="14" height="55" fill="#64748b"/>
    <!-- Base Stylobate -->
    <rect x="70" y="132" width="180" height="10" fill="#334155"/>
    <text x="160" y="152" font-size="10" fill="#cbd5e1" text-anchor="middle" font-weight="bold">LANDMARK: CLASSICAL MONUMENT</text>
  `,
  tiger_fauna: `
    <!-- Tiger Silhouette / Face -->
    <circle cx="160" cy="80" r="48" fill="#d97706" stroke="#b45309" stroke-width="2"/>
    <!-- Stripes -->
    <path d="M125 50 Q145 65 130 80" stroke="#18181b" stroke-width="3" fill="none"/>
    <path d="M195 50 Q175 65 190 80" stroke="#18181b" stroke-width="3" fill="none"/>
    <path d="M160 40 L160 60" stroke="#18181b" stroke-width="3" fill="none"/>
    <!-- Eyes -->
    <circle cx="145" cy="75" r="5" fill="#facc15"/> <circle cx="145" cy="75" r="2.5" fill="#000"/>
    <circle cx="175" cy="75" r="5" fill="#facc15"/> <circle cx="175" cy="75" r="2.5" fill="#000"/>
    <!-- Snout & Nose -->
    <polygon points="160,90 152,82 168,82" fill="#f43f5e"/>
    <text x="160" y="150" font-size="10" fill="#fed7aa" text-anchor="middle" font-weight="bold">WILDLIFE: BENGAL TIGER (PANTHERA TIGRIS)</text>
  `,
  jaguar_fauna: `
    <!-- Big Cat Face / Head -->
    <circle cx="160" cy="80" r="48" fill="#d97706" stroke="#b45309" stroke-width="2"/>
    <!-- Characteristic Rosettes -->
    <circle cx="135" cy="55" r="7" fill="none" stroke="#18181b" stroke-width="2.5" stroke-dasharray="4 2"/>
    <circle cx="185" cy="55" r="7" fill="none" stroke="#18181b" stroke-width="2.5" stroke-dasharray="4 2"/>
    <circle cx="130" cy="80" r="7" fill="none" stroke="#18181b" stroke-width="2.5" stroke-dasharray="4 2"/>
    <circle cx="190" cy="80" r="7" fill="none" stroke="#18181b" stroke-width="2.5" stroke-dasharray="4 2"/>
    <circle cx="160" cy="45" r="6" fill="none" stroke="#18181b" stroke-width="2.5" stroke-dasharray="3 2"/>
    <!-- Golden Eyes -->
    <circle cx="145" cy="75" r="5" fill="#facc15"/> <circle cx="145" cy="75" r="2.5" fill="#000"/>
    <circle cx="175" cy="75" r="5" fill="#facc15"/> <circle cx="175" cy="75" r="2.5" fill="#000"/>
    <!-- Muzzle & Whiskers -->
    <polygon points="160,90 152,82 168,82" fill="#f43f5e"/>
    <text x="160" y="150" font-size="10" fill="#fed7aa" text-anchor="middle" font-weight="bold">FAUNA: AMAZONIAN JAGUAR (PANTHERA ONCA)</text>
  `,
  flag_germany: `
    <!-- Flagpole -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Horizontal Tricolour Bands: Black, Red, Gold -->
    <rect x="75" y="32" width="170" height="31.6" fill="#0f172a"/>
    <rect x="75" y="63.6" width="170" height="31.6" fill="#dc2626"/>
    <rect x="75" y="95.2" width="170" height="31.6" fill="#facc15"/>
    <text x="160" y="150" font-size="10" fill="#fde68a" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF GERMANY</text>
  `,
  flag_france: `
    <!-- Flagpole -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Vertical Tricolour Bands: Blue, White, Red -->
    <rect x="75" y="32" width="170" height="95" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="2"/>
    <rect x="75" y="32" width="56.6" height="95" fill="#1d4ed8"/>
    <rect x="188.4" y="32" width="56.6" height="95" fill="#dc2626"/>
    <text x="160" y="150" font-size="10" fill="#93c5fd" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF FRANCE (TRICOLORE)</text>
  `,
  whale_shark: `
    <!-- Whale Shark Hydrodynamic Silhouette -->
    <path d="M70 85 Q110 55 180 65 Q230 75 260 60 L250 85 L265 110 Q230 95 180 95 Q110 105 70 85 Z" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <!-- Broad Rostrum Head -->
    <path d="M70 85 Q60 85 55 80 Q60 75 70 75 Z" fill="#334155"/>
    <!-- Dorsal Fin -->
    <polygon points="175,65 190,45 195,65" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Pectoral Fin -->
    <polygon points="120,95 130,125 150,100" fill="#0f172a" stroke="#38bdf8" stroke-width="1.5"/>
    <!-- Starry White Spots -->
    <g fill="#ffffff" opacity="0.85">
      <circle cx="100" cy="78" r="1.8"/> <circle cx="115" cy="82" r="1.8"/> <circle cx="130" cy="78" r="2"/>
      <circle cx="145" cy="84" r="2"/> <circle cx="160" cy="79" r="2"/> <circle cx="175" cy="83" r="2"/>
      <circle cx="190" cy="78" r="1.8"/> <circle cx="205" cy="81" r="1.8"/> <circle cx="220" cy="76" r="1.5"/>
      <circle cx="110" cy="73" r="1.5"/> <circle cx="125" cy="74" r="1.8"/> <circle cx="140" cy="72" r="1.8"/>
      <circle cx="155" cy="73" r="1.8"/> <circle cx="170" cy="72" r="1.8"/> <circle cx="185" cy="73" r="1.5"/>
      <!-- Gill Slits -->
      <line x1="95" y1="80" x2="95" y2="88" stroke="#64748b" stroke-width="1.2"/>
      <line x1="98" y1="79" x2="98" y2="87" stroke="#64748b" stroke-width="1.2"/>
      <line x1="101" y1="79" x2="101" y2="87" stroke="#64748b" stroke-width="1.2"/>
    </g>
    <text x="160" y="150" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">FAUNA: WHALE SHARK (RHINCODON TYPUS)</text>
  `,
  platypus_fauna: `
    <!-- Semi-Aquatic Body -->
    <ellipse cx="160" cy="85" rx="55" ry="28" fill="#78350f" stroke="#92400e" stroke-width="2"/>
    <!-- Broad Beaver-like Tail -->
    <ellipse cx="230" cy="90" rx="30" ry="14" fill="#451a03" stroke="#78350f" stroke-width="2"/>
    <!-- Distinctive Duck Bill -->
    <path d="M95 80 Q70 80 65 85 Q70 90 95 90 Z" fill="#18181b" stroke="#27272a" stroke-width="1.5"/>
    <circle cx="108" cy="78" r="3" fill="#facc15"/> <circle cx="108" cy="78" r="1.5" fill="#000"/>
    <!-- Webbed Feet -->
    <polygon points="135,108 125,122 145,120" fill="#292524"/>
    <polygon points="185,108 180,122 198,120" fill="#292524"/>
    <text x="160" y="150" font-size="10" fill="#fed7aa" text-anchor="middle" font-weight="bold">FAUNA: DUCK-BILLED PLATYPUS (ORNITHORHYNCHUS ANATINUS)</text>
  `,
  soccer_sports: `
    <!-- Pitch Ground -->
    <rect x="40" y="125" width="240" height="20" fill="#15803d" rx="4"/>
    <!-- Soccer Ball -->
    <circle cx="160" cy="78" r="42" fill="#f8fafc" stroke="#1e293b" stroke-width="2.5"/>
    <!-- Classic Pentagons -->
    <polygon points="160,65 172,74 167,88 153,88 148,74" fill="#0f172a"/>
    <line x1="160" y1="65" x2="160" y2="40" stroke="#1e293b" stroke-width="2"/>
    <line x1="172" y1="74" x2="195" y2="65" stroke="#1e293b" stroke-width="2"/>
    <line x1="167" y1="88" x2="185" y2="108" stroke="#1e293b" stroke-width="2"/>
    <line x1="153" y1="88" x2="135" y2="108" stroke="#1e293b" stroke-width="2"/>
    <line x1="148" y1="74" x2="125" y2="65" stroke="#1e293b" stroke-width="2"/>
    <text x="160" y="150" font-size="10" fill="#bbf7d0" text-anchor="middle" font-weight="bold">SPORTS EXHIBIT: REGULATION MATCH BALL</text>
  `,
  olympic_rings: `
    <g fill="none" stroke-width="4.5">
      <circle cx="100" cy="70" r="26" stroke="#0284c7"/>
      <circle cx="160" cy="70" r="26" stroke="#0f172a"/>
      <circle cx="220" cy="70" r="26" stroke="#ef4444"/>
      <circle cx="130" cy="95" r="26" stroke="#f59e0b"/>
      <circle cx="190" cy="95" r="26" stroke="#10b981"/>
    </g>
    <text x="160" y="150" font-size="10" fill="#fde68a" text-anchor="middle" font-weight="bold">SYMBOL: THE FIVE INTERLOCKING OLYMPIC RINGS</text>
  `,
  saffron_food: `
    <!-- Crocus Petals -->
    <path d="M160 120 Q130 70 145 40 Q160 70 160 120 Z" fill="#7c3aed" stroke="#6d28d9" stroke-width="1.5"/>
    <path d="M160 120 Q190 70 175 40 Q160 70 160 120 Z" fill="#8b5cf6" stroke="#6d28d9" stroke-width="1.5"/>
    <path d="M160 120 Q160 50 160 30 Q160 60 160 120 Z" fill="#a78bfa"/>
    <!-- Saffron Stigmas -->
    <path d="M160 80 Q145 60 135 50" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M160 80 Q160 55 160 45" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path d="M160 80 Q175 60 185 50" stroke="#dc2626" stroke-width="3" fill="none" stroke-linecap="round"/>
    <text x="160" y="150" font-size="10" fill="#fca5a5" text-anchor="middle" font-weight="bold">CULINARY BOTANY: SAFFRON CROCUS STIGMAS</text>
  `,
  turmeric_food: `
    <!-- Knobby Curcuma Rhizome Body -->
    <path d="M100 85 Q120 60 160 70 Q190 65 215 80 Q225 105 195 110 Q150 115 120 105 Z" fill="#d97706" stroke="#b45309" stroke-width="2"/>
    <!-- Rhizome Growth Rings -->
    <path d="M125 74 Q135 90 128 102" stroke="#92400e" stroke-width="2" fill="none"/>
    <path d="M150 68 Q162 88 152 112" stroke="#92400e" stroke-width="2" fill="none"/>
    <path d="M180 69 Q192 88 184 108" stroke="#92400e" stroke-width="2" fill="none"/>
    <!-- Cut Surface Showing Deep Golden Interior -->
    <ellipse cx="215" cy="80" rx="16" ry="12" fill="#f59e0b" stroke="#d97706" stroke-width="2"/>
    <ellipse cx="215" cy="80" rx="11" ry="8" fill="#fbbf24"/>
    <text x="160" y="150" font-size="10" fill="#fde68a" text-anchor="middle" font-weight="bold">CULINARY BOTANY: TURMERIC RHIZOME (CURCUMA LONGA)</text>
  `,
  avocado_food: `
    <!-- Avocado Outer Pear Form -->
    <path d="M160 30 C130 30 115 65 115 95 C115 125 135 140 160 140 C185 140 205 125 205 95 C205 65 190 30 160 30 Z" fill="#14532d" stroke="#166534" stroke-width="2.5"/>
    <!-- Creamy Light Green Flesh -->
    <path d="M160 38 C136 38 124 68 124 95 C124 120 140 132 160 132 C180 132 196 120 196 95 C196 68 184 38 160 38 Z" fill="#bbf7d0"/>
    <ellipse cx="160" cy="98" rx="30" ry="30" fill="#dcfce7"/>
    <!-- Central Circular Seed Pit -->
    <circle cx="160" cy="100" r="19" fill="#78350f" stroke="#451a03" stroke-width="2"/>
    <ellipse cx="155" cy="95" rx="7" ry="5" fill="#92400e" opacity="0.6"/>
    <text x="160" y="152" font-size="10" fill="#86efac" text-anchor="middle" font-weight="bold">GASTRONOMY: HALVED HASS AVOCADO (PERSEA AMERICANA)</text>
  `,
  croissant_pastry: `
    <!-- Crescent Pastry -->
    <path d="M90 100 Q160 40 230 100 Q190 85 160 85 Q130 85 90 100 Z" fill="#d97706" stroke="#b45309" stroke-width="2"/>
    <!-- Laminated Flakes -->
    <path d="M130 70 Q160 60 190 70" stroke="#fef3c7" stroke-width="2" fill="none" opacity="0.8"/>
    <path d="M140 80 Q160 72 180 80" stroke="#fde68a" stroke-width="1.5" fill="none" opacity="0.8"/>
    <text x="160" y="150" font-size="10" fill="#fde68a" text-anchor="middle" font-weight="bold">GASTRONOMY: ARTISAN LAMINATED CROISSANT</text>
  `,
  saturn_rings: `
    <!-- Planetary Body -->
    <circle cx="160" cy="80" r="36" fill="#eab308" stroke="#ca8a04" stroke-width="2"/>
    <!-- Ring System -->
    <ellipse cx="160" cy="80" rx="80" ry="24" fill="none" stroke="#fef08a" stroke-width="6" stroke-opacity="0.8" transform="rotate(-18 160 80)"/>
    <ellipse cx="160" cy="80" rx="66" ry="19" fill="none" stroke="#ca8a04" stroke-width="2" transform="rotate(-18 160 80)"/>
    <text x="160" y="150" font-size="10" fill="#fef08a" text-anchor="middle" font-weight="bold">ASTRONOMICAL BODY: RINGED GAS GIANT</text>
  `,
  flag_japan: `
    <!-- Flagpole and Finial -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Pure White Rectangular Field -->
    <rect x="75" y="32" width="170" height="95" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="2"/>
    <!-- Crimson Sun Disc (Hinomaru) -->
    <circle cx="160" cy="79.5" r="28" fill="#dc2626"/>
    <text x="160" y="150" font-size="10" fill="#fca5a5" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF JAPAN (NISSHŌKI)</text>
  `,
  flag_canada: `
    <!-- Flagpole -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Red Outer Bands and Central White Square -->
    <rect x="75" y="32" width="170" height="95" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="2"/>
    <rect x="75" y="32" width="42.5" height="95" fill="#dc2626"/>
    <rect x="202.5" y="32" width="42.5" height="95" fill="#dc2626"/>
    <!-- Central 11-pointed Stylized Maple Leaf -->
    <path d="M160 55 L163 67 L173 64 L169 72 L180 77 L173 82 L176 90 L166 87 L163 94 L161 94 L161 102 L159 102 L159 94 L157 94 L154 87 L144 90 L147 82 L140 77 L151 72 L147 64 L157 67 Z" fill="#dc2626"/>
    <text x="160" y="150" font-size="10" fill="#fca5a5" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF CANADA (MAPLE LEAF)</text>
  `,
  flag_ireland: `
    <!-- Flagpole -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Tricolour Bands: Green, White, Orange -->
    <rect x="75" y="32" width="170" height="95" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5" rx="2"/>
    <rect x="75" y="32" width="56.6" height="95" fill="#16a34a"/>
    <rect x="188.4" y="32" width="56.6" height="95" fill="#f97316"/>
    <text x="160" y="150" font-size="10" fill="#86efac" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF IRELAND (TRICOLOUR)</text>
  `,
  flag_sweden: `
    <!-- Flagpole -->
    <rect x="70" y="25" width="5" height="115" fill="#94a3b8" rx="2"/>
    <circle cx="72.5" cy="25" r="5" fill="#facc15"/>
    <!-- Blue Field -->
    <rect x="75" y="32" width="170" height="95" fill="#0284c7" stroke="#cbd5e1" stroke-width="1.5" rx="2"/>
    <!-- Golden Yellow Scandinavian Cross -->
    <rect x="75" y="69.5" width="170" height="20" fill="#facc15"/>
    <rect x="125" y="32" width="20" height="95" fill="#facc15"/>
    <text x="160" y="150" font-size="10" fill="#7dd3fc" text-anchor="middle" font-weight="bold">VEXILLOLOGY: NATIONAL FLAG OF SWEDEN</text>
  `,
  generic_specimen: `
    <!-- Central Specimen Focal Icon -->
    <circle cx="160" cy="80" r="44" fill="#1e293b" stroke="#818cf8" stroke-width="2"/>
    <circle cx="160" cy="80" r="32" fill="#312e81" opacity="0.6"/>
    <polygon points="160,55 178,70 171,92 149,92 142,70" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
    <circle cx="160" cy="80" r="6" fill="#ffffff"/>
    <text x="160" y="148" font-size="10" fill="#c7d2fe" text-anchor="middle" font-weight="bold">SPECIMEN INSPECTION EXHIBIT</text>
  `
};

export function selectSpecimenSvgKey(worldId, question) {
  const text = `${question?.id || ''} ${question?.q || ''} ${question?.correctText || ''}`.toLowerCase();
  
  if (text.includes('bohr') || text.includes('atom') || text.includes('electron')) return 'atom_bohr';
  if (text.includes('dna') || text.includes('helix') || text.includes('gene')) return 'dna_helix';
  if (text.includes('mitochondria') || text.includes('organelle') || text.includes('cell')) return 'cell_mitochondria';
  if (text.includes('microscope') || text.includes('lens') || text.includes('magnif')) return 'microscope';
  if (text.includes('benzene') || text.includes('molecule') || text.includes('chemical')) return 'benzene_molecule';
  if (text.includes('pyramid') || text.includes('giza') || text.includes('pharaoh') || text.includes('egypt')) return 'pyramid_sphinx';
  if (text.includes('roman') || text.includes('temple') || text.includes('colosseum') || text.includes('athens') || text.includes('parthenon')) return 'roman_temple';
  if (text.includes('whale shark') || text.includes('shark')) return 'whale_shark';
  if (text.includes('platypus') || text.includes('duck-billed') || text.includes('monotreme')) return 'platypus_fauna';
  if (text.includes('tiger') || text.includes('feline') || text.includes('predator') || text.includes('mammal')) return 'tiger_fauna';
  if (text.includes('olympic') || text.includes('rings')) return 'olympic_rings';
  if (text.includes('soccer') || text.includes('ball') || text.includes('goal') || text.includes('fifa')) return 'soccer_sports';
  if (text.includes('turmeric') || text.includes('curry')) return 'turmeric_food';
  if (text.includes('avocado') || text.includes('guacamole')) return 'avocado_food';
  if (text.includes('saffron') || text.includes('spice') || text.includes('crocus')) return 'saffron_food';
  if (text.includes('croissant') || text.includes('pastry') || text.includes('bread')) return 'croissant_pastry';
  if (text.includes('japan') && (text.includes('flag') || text.includes('circle') || text.includes('sun'))) return 'flag_japan';
  if (text.includes('canada') && (text.includes('flag') || text.includes('maple') || text.includes('leaf'))) return 'flag_canada';
  if (text.includes('ireland') && text.includes('flag')) return 'flag_ireland';
  if (text.includes('sweden') && text.includes('flag')) return 'flag_sweden';
  if (text.includes('saturn') || text.includes('ring') || text.includes('planet') || worldId === 'space') return 'saturn_rings';
  
  // World-based defaults
  if (worldId === 'science' || worldId === 'biology') return 'dna_helix';
  if (worldId === 'history') return 'pyramid_sphinx';
  if (worldId === 'nature') return 'tiger_fauna';
  if (worldId === 'sports') return 'soccer_sports';
  if (worldId === 'food') return 'saffron_food';
  
  return 'generic_specimen';
}

export function renderImageIdentificationSvg(worldId, question, imageData) {
  const key = imageData?.assetId || selectSpecimenSvgKey(worldId, question);
  const specimenMarkup = SUBJECT_SPECIMEN_SVGS[key] || SUBJECT_SPECIMEN_SVGS.generic_specimen;
  const badgeTitle = imageData?.subject || key.replace(/_/g, ' ').toUpperCase();

  return `
    <div class="specimen-frame" aria-label="Specimen visual inspection">
      <div class="specimen-badge">✦ SPECIMEN EXHIBIT · ${safeText(badgeTitle)}</div>
      <svg class="specimen-svg" viewBox="0 0 320 160" role="img" aria-label="Specimen Illustration: ${safeText(badgeTitle)}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="specimen-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stop-color="#0f172a"/>
            <stop offset="100%" stop-color="#020617"/>
          </linearGradient>
        </defs>
        <rect width="320" height="160" fill="url(#specimen-grad)" rx="10" stroke="#38bdf8" stroke-width="1.8"/>
        
        <!-- Reticle Grid Lines -->
        <line x1="40" y1="15" x2="40" y2="145" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 4"/>
        <line x1="160" y1="15" x2="160" y2="145" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 4"/>
        <line x1="280" y1="15" x2="280" y2="145" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 4"/>
        <line x1="20" y1="80" x2="300" y2="80" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 4"/>
        
        <!-- Subject Vector SVG Artwork -->
        ${specimenMarkup}
        
        <!-- Precision Reticle Corners -->
        <path d="M22 32 L22 22 L32 22" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
        <path d="M298 32 L298 22 L288 22" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
        <path d="M22 128 L22 138 L32 138" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
        <path d="M298 128 L298 138 L288 138" stroke="#38bdf8" stroke-width="1.8" fill="none"/>
      </svg>
    </div>
  `;
}
