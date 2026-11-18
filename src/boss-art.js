// Illustrated Vector SVG Character Portraits for all 25 World Bosses
// Generated for QUIZ UNIVERSE Production Build

export const WORLD_BOSS_DETAILS = {
  space: {
    id: 'space',
    name: 'Cosmic Guardian',
    title: 'Warden of the Nebula',
    accent: '#6366f1',
    deep: '#0f172a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Cosmic Guardian portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <defs>
        <radialGradient id="space-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#818cf8" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#312e81" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="54" fill="#0f172a" stroke="#6366f1" stroke-width="2.5"/>
      <circle cx="60" cy="60" r="48" fill="url(#space-glow)"/>
      <ellipse cx="60" cy="62" rx="36" ry="12" fill="none" stroke="#a855f7" stroke-width="2" transform="rotate(-20 60 62)"/>
      <ellipse cx="60" cy="58" rx="26" ry="28" fill="#1e1b4b" stroke="#818cf8" stroke-width="2"/>
      <path d="M42 54 Q60 40 78 54 Q72 74 60 74 Q48 74 42 54 Z" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5"/>
      <path d="M46 52 Q60 44 74 52" stroke="#fff" stroke-width="2" stroke-linecap="round" fill="none" opacity="0.8"/>
      <circle cx="36" cy="32" r="2" fill="#fff"/>
      <circle cx="84" cy="34" r="1.5" fill="#fff"/>
      <circle cx="78" cy="88" r="2" fill="#818cf8"/>
      <polygon points="60,18 63,26 71,27 65,32 67,40 60,36 53,40 55,32 49,27 57,26" fill="#fbbf24"/>

      </svg>`;
    }
  },
  general: {
    id: 'general',
    name: 'Curiosity Keeper',
    title: 'Guardian of Knowledge',
    accent: '#f59e0b',
    deep: '#1e293b',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Curiosity Keeper portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#1e293b" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="60" cy="60" r="44" fill="#334155" opacity="0.6"/>
      <path d="M30 42 Q60 22 90 42 L82 82 Q60 92 38 82 Z" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
      <ellipse cx="48" cy="54" rx="9" ry="11" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <ellipse cx="72" cy="54" rx="9" ry="11" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <circle cx="48" cy="54" r="5" fill="#1e293b"/>
      <circle cx="72" cy="54" r="5" fill="#1e293b"/>
      <circle cx="46" cy="52" r="2" fill="#fff"/>
      <circle cx="70" cy="52" r="2" fill="#fff"/>
      <path d="M60 62 L55 72 L65 72 Z" fill="#f59e0b"/>
      <path d="M40 32 L48 20 L56 34" stroke="#fbbf24" stroke-width="2" fill="none"/>
      <path d="M80 32 L72 20 L64 34" stroke="#fbbf24" stroke-width="2" fill="none"/>
      <polygon points="60,24 64,30 70,31 66,35 67,41 60,38 53,41 54,35 50,31 56,30" fill="#fef08a"/>

      </svg>`;
    }
  },
  science: {
    id: 'science',
    name: 'Labyrinth Chemist',
    title: 'Master of Elements',
    accent: '#10b981',
    deep: '#064e3b',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Labyrinth Chemist portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
      <rect x="42" y="24" width="36" height="40" rx="18" fill="#047857" stroke="#34d399" stroke-width="2"/>
      <circle cx="48" cy="46" r="11" fill="#0f172a" stroke="#fbbf24" stroke-width="2.5"/>
      <circle cx="72" cy="46" r="11" fill="#0f172a" stroke="#fbbf24" stroke-width="2.5"/>
      <circle cx="48" cy="46" r="5" fill="#34d399"/>
      <circle cx="72" cy="46" r="5" fill="#34d399"/>
      <path d="M48 64 L72 64 L80 92 L40 92 Z" fill="#065f46" stroke="#10b981" stroke-width="2"/>
      <path d="M44 82 Q60 76 76 82 L79 90 L41 90 Z" fill="#a7f3d0" opacity="0.8"/>
      <circle cx="52" cy="84" r="2.5" fill="#fff" opacity="0.8"/>
      <circle cx="64" cy="80" r="3.5" fill="#fff" opacity="0.8"/>
      <circle cx="70" cy="86" r="2" fill="#fff" opacity="0.8"/>
      <path d="M60 16 L60 26" stroke="#fbbf24" stroke-width="3" stroke-linecap="round"/>
      <circle cx="60" cy="14" r="4" fill="#f59e0b"/>

      </svg>`;
    }
  },
  technology: {
    id: 'technology',
    name: 'Cyber Overlord',
    title: 'Core System Titan',
    accent: '#06b6d4',
    deep: '#082f49',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Cyber Overlord portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#082f49" stroke="#06b6d4" stroke-width="2.5"/>
      <polygon points="60,20 88,38 88,82 60,100 32,82 32,38" fill="#0e7490" stroke="#22d3ee" stroke-width="2"/>
      <rect x="38" y="46" width="44" height="14" rx="3" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <line x1="42" y1="53" x2="78" y2="53" stroke="#ef4444" stroke-width="3" stroke-linecap="round"/>
      <line x1="60" y1="20" x2="60" y2="38" stroke="#38bdf8" stroke-width="2"/>
      <line x1="32" y1="60" x2="38" y2="60" stroke="#38bdf8" stroke-width="2"/>
      <line x1="82" y1="60" x2="88" y2="60" stroke="#38bdf8" stroke-width="2"/>
      <path d="M46 72 L54 80 L66 80 L74 72" fill="none" stroke="#22d3ee" stroke-width="2"/>
      <circle cx="60" cy="80" r="3" fill="#38bdf8"/>

      </svg>`;
    }
  },
  ai: {
    id: 'ai',
    name: 'Pattern Warden',
    title: 'Neural Architect',
    accent: '#8b5cf6',
    deep: '#2e1065',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Pattern Warden portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#2e1065" stroke="#8b5cf6" stroke-width="2.5"/>
      <polygon points="60,22 92,60 60,98 28,60" fill="#4c1d95" stroke="#a78bfa" stroke-width="2"/>
      <circle cx="60" cy="60" r="16" fill="#1e1b4b" stroke="#c084fc" stroke-width="2"/>
      <circle cx="60" cy="60" r="7" fill="#f43f5e"/>
      <line x1="60" y1="22" x2="60" y2="44" stroke="#a78bfa" stroke-width="1.5"/>
      <line x1="60" y1="76" x2="60" y2="98" stroke="#a78bfa" stroke-width="1.5"/>
      <line x1="28" y1="60" x2="44" y2="60" stroke="#a78bfa" stroke-width="1.5"/>
      <line x1="76" y1="60" x2="92" y2="60" stroke="#a78bfa" stroke-width="1.5"/>
      <circle cx="38" cy="38" r="4" fill="#818cf8"/>
      <circle cx="82" cy="38" r="4" fill="#818cf8"/>
      <circle cx="38" cy="82" r="4" fill="#818cf8"/>
      <circle cx="82" cy="82" r="4" fill="#818cf8"/>
      <line x1="38" y1="38" x2="49" y2="49" stroke="#818cf8" stroke-width="1"/>
      <line x1="82" y1="38" x2="71" y2="49" stroke="#818cf8" stroke-width="1"/>
      <line x1="38" y1="82" x2="49" y2="71" stroke="#818cf8" stroke-width="1"/>
      <line x1="82" y1="82" x2="71" y2="71" stroke="#818cf8" stroke-width="1"/>

      </svg>`;
    }
  },
  history: {
    id: 'history',
    name: 'Pharaoh Guardian',
    title: 'Eternal Sovereign',
    accent: '#f59e0b',
    deep: '#451a03',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Pharaoh Guardian portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#451a03" stroke="#f59e0b" stroke-width="2.5"/>
      <path d="M30 46 Q60 18 90 46 L86 86 L34 86 Z" fill="#d97706" stroke="#fbbf24" stroke-width="2"/>
      <ellipse cx="60" cy="56" rx="20" ry="24" fill="#b45309" stroke="#f59e0b" stroke-width="2"/>
      <line x1="36" y1="48" x2="84" y2="48" stroke="#1e3a8a" stroke-width="3"/>
      <line x1="34" y1="60" x2="86" y2="60" stroke="#1e3a8a" stroke-width="3"/>
      <line x1="34" y1="72" x2="86" y2="72" stroke="#1e3a8a" stroke-width="3"/>
      <ellipse cx="50" cy="54" rx="4.5" ry="3" fill="#1e1b4b"/>
      <ellipse cx="70" cy="54" rx="4.5" ry="3" fill="#1e1b4b"/>
      <path d="M57 63 L63 63 L60 69 Z" fill="#78350f"/>
      <path d="M54 74 Q60 77 66 74" stroke="#78350f" stroke-width="1.5" fill="none"/>
      <rect x="56" y="80" width="8" height="18" fill="#1e3a8a" stroke="#fbbf24" stroke-width="1.5"/>
      <circle cx="60" cy="24" r="5" fill="#dc2626" stroke="#fbbf24" stroke-width="1.5"/>

      </svg>`;
    }
  },
  geography: {
    id: 'geography',
    name: 'World Guardian',
    title: 'Titan of Terrene',
    accent: '#0284c7',
    deep: '#0c4a6e',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$World Guardian portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#0c4a6e" stroke="#0284c7" stroke-width="2.5"/>
      <circle cx="60" cy="60" r="42" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
      <path d="M40 38 Q48 30 58 34 Q62 44 54 48 Q44 52 40 38 Z" fill="#22c55e"/>
      <path d="M68 46 Q80 40 84 52 Q78 64 66 60 Z" fill="#22c55e"/>
      <path d="M44 68 Q56 62 62 74 Q54 84 42 78 Z" fill="#22c55e"/>
      <ellipse cx="60" cy="60" rx="42" ry="16" fill="none" stroke="#bae6fd" stroke-width="1.5" stroke-dasharray="3 3"/>
      <ellipse cx="60" cy="60" rx="16" ry="42" fill="none" stroke="#bae6fd" stroke-width="1.5" stroke-dasharray="3 3"/>
      <line x1="60" y1="14" x2="60" y2="106" stroke="#f59e0b" stroke-width="2"/>
      <polygon points="60,8 65,16 55,16" fill="#f59e0b"/>

      </svg>`;
    }
  },
  math: {
    id: 'math',
    name: 'Theorem Titan',
    title: 'Master of Geometries',
    accent: '#ec4899',
    deep: '#831843',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Theorem Titan portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#831843" stroke="#ec4899" stroke-width="2.5"/>
      <polygon points="60,18 96,80 24,80" fill="#9d174d" stroke="#f472b6" stroke-width="2.5"/>
      <circle cx="60" cy="58" r="18" fill="none" stroke="#fbcfe8" stroke-width="2"/>
      <polygon points="60,40 76,68 44,68" fill="#be185d" stroke="#f472b6" stroke-width="1.5"/>
      <text x="60" y="65" font-family="serif" font-size="16" fill="#fff" text-anchor="middle" font-weight="bold">∑</text>
      <line x1="60" y1="18" x2="60" y2="30" stroke="#fbcfe8" stroke-width="2"/>
      <circle cx="60" cy="18" r="4" fill="#f472b6"/>
      <circle cx="24" cy="80" r="4" fill="#f472b6"/>
      <circle cx="96" cy="80" r="4" fill="#f472b6"/>
      <path d="M42 90 Q60 84 78 90" stroke="#f472b6" stroke-width="2" fill="none"/>

      </svg>`;
    }
  },
  physics: {
    id: 'physics',
    name: 'Force Sentinel',
    title: 'Warden of Dynamics',
    accent: '#3b82f6',
    deep: '#1e3a8a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Force Sentinel portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#1e3a8a" stroke="#3b82f6" stroke-width="2.5"/>
      <ellipse cx="60" cy="60" rx="42" ry="14" fill="none" stroke="#60a5fa" stroke-width="2" transform="rotate(30 60 60)"/>
      <ellipse cx="60" cy="60" rx="42" ry="14" fill="none" stroke="#60a5fa" stroke-width="2" transform="rotate(-30 60 60)"/>
      <ellipse cx="60" cy="60" rx="42" ry="14" fill="none" stroke="#60a5fa" stroke-width="2" transform="rotate(90 60 60)"/>
      <circle cx="60" cy="60" r="14" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="26" cy="40" r="4.5" fill="#38bdf8"/>
      <circle cx="94" cy="80" r="4.5" fill="#38bdf8"/>
      <circle cx="60" cy="18" r="4.5" fill="#38bdf8"/>
      <path d="M56 54 L64 66 M64 54 L56 66" stroke="#b45309" stroke-width="2.5"/>

      </svg>`;
    }
  },
  chemistry: {
    id: 'chemistry',
    name: 'Reaction Regent',
    title: 'Alchemical Sovereign',
    accent: '#14b8a6',
    deep: '#134e4a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Reaction Regent portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#134e4a" stroke="#14b8a6" stroke-width="2.5"/>
      <path d="M50 20 L70 20 L70 36 L86 78 Q88 86 80 92 L40 92 Q32 86 34 78 L50 36 Z" fill="#0f766e" stroke="#2dd4bf" stroke-width="2"/>
      <path d="M37 80 Q60 74 83 80 L80 90 L40 90 Z" fill="#a7f3d0"/>
      <circle cx="50" cy="82" r="3" fill="#fff" opacity="0.8"/>
      <circle cx="65" cy="76" r="4" fill="#fff" opacity="0.8"/>
      <circle cx="60" cy="62" r="2.5" fill="#fff" opacity="0.8"/>
      <polygon points="54,12 60,6 66,12 62,12 62,20 58,20 58,12" fill="#fbbf24"/>
      <circle cx="34" cy="42" r="6" fill="#f43f5e" stroke="#fff" stroke-width="1.5"/>
      <circle cx="86" cy="42" r="6" fill="#f59e0b" stroke="#fff" stroke-width="1.5"/>

      </svg>`;
    }
  },
  biology: {
    id: 'biology',
    name: 'Cellular Colossus',
    title: 'Primordial Organism',
    accent: '#22c55e',
    deep: '#14532d',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Cellular Colossus portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#14532d" stroke="#22c55e" stroke-width="2.5"/>
      <path d="M34 50 Q42 26 64 30 Q86 34 84 58 Q82 82 58 86 Q34 88 32 66 Z" fill="#15803d" stroke="#4ade80" stroke-width="2.5"/>
      <ellipse cx="58" cy="56" rx="14" ry="12" fill="#166534" stroke="#86efac" stroke-width="2"/>
      <circle cx="58" cy="56" r="6" fill="#bbf7d0"/>
      <ellipse cx="44" cy="44" rx="5" ry="3" fill="#facc15" transform="rotate(30 44 44)"/>
      <ellipse cx="72" cy="68" rx="6" ry="3.5" fill="#facc15" transform="rotate(-20 72 68)"/>
      <circle cx="42" cy="68" r="2.5" fill="#fff"/>
      <circle cx="70" cy="42" r="2" fill="#fff"/>
      <circle cx="50" cy="74" r="2" fill="#fff"/>

      </svg>`;
    }
  },
  sports: {
    id: 'sports',
    name: 'Arena Champion',
    title: 'Victor of the Colosseum',
    accent: '#ea580c',
    deep: '#7c2d12',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Arena Champion portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#7c2d12" stroke="#ea580c" stroke-width="2.5"/>
      <path d="M36 44 Q60 20 84 44 L80 84 Q60 96 40 84 Z" fill="#9a3412" stroke="#fb923c" stroke-width="2"/>
      <ellipse cx="60" cy="54" rx="18" ry="14" fill="#1e1b4b" stroke="#f59e0b" stroke-width="2"/>
      <line x1="42" y1="54" x2="78" y2="54" stroke="#f59e0b" stroke-width="3"/>
      <line x1="60" y1="40" x2="60" y2="68" stroke="#f59e0b" stroke-width="3"/>
      <path d="M48 24 Q60 14 72 24 L68 34 Q60 28 52 34 Z" fill="#eab308"/>
      <path d="M30 50 Q24 64 36 78" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M90 50 Q96 64 84 78" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/>

      </svg>`;
    }
  },
  movies: {
    id: 'movies',
    name: 'Silver Screen Specter',
    title: 'The Phantom Director',
    accent: '#e2e8f0',
    deep: '#0f172a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Silver Screen Specter portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#0f172a" stroke="#e2e8f0" stroke-width="2.5"/>
      <circle cx="44" cy="38" r="16" fill="#334155" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="76" cy="38" r="16" fill="#334155" stroke="#cbd5e1" stroke-width="2"/>
      <circle cx="44" cy="38" r="5" fill="#0f172a"/>
      <circle cx="76" cy="38" r="5" fill="#0f172a"/>
      <path d="M34 54 L86 54 L80 90 L40 90 Z" fill="#1e293b" stroke="#94a3b8" stroke-width="2"/>
      <polygon points="60,60 74,70 60,80" fill="#f59e0b"/>
      <line x1="34" y1="64" x2="86" y2="64" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 3"/>
      <polygon points="60,18 64,28 74,28 66,34 69,44 60,38 51,44 54,34 46,28 56,28" fill="#e2e8f0"/>

      </svg>`;
    }
  },
  music: {
    id: 'music',
    name: 'Maestro of the Deep',
    title: 'Sovereign of Resonance',
    accent: '#a855f7',
    deep: '#3b0764',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Maestro of the Deep portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#3b0764" stroke="#a855f7" stroke-width="2.5"/>
      <path d="M38 48 Q60 26 82 48 L78 86 Q60 92 42 86 Z" fill="#581c87" stroke="#c084fc" stroke-width="2"/>
      <ellipse cx="50" cy="56" rx="6" ry="8" fill="#1e1b4b" stroke="#e9d5ff" stroke-width="1.5"/>
      <ellipse cx="70" cy="56" rx="6" ry="8" fill="#1e1b4b" stroke="#e9d5ff" stroke-width="1.5"/>
      <path d="M60 40 L60 76 M60 76 Q54 74 52 78 Q50 82 56 84 Q62 84 62 76" stroke="#fbbf24" stroke-width="2.5" fill="none"/>
      <path d="M30 38 Q36 28 44 32" stroke="#c084fc" stroke-width="2" fill="none"/>
      <path d="M90 38 Q84 28 76 32" stroke="#c084fc" stroke-width="2" fill="none"/>
      <path d="M26 62 Q32 60 36 66" stroke="#e9d5ff" stroke-width="1.5" fill="none"/>
      <path d="M94 62 Q88 60 84 66" stroke="#e9d5ff" stroke-width="1.5" fill="none"/>

      </svg>`;
    }
  },
  literature: {
    id: 'literature',
    name: 'Keeper of the Last Page',
    title: 'Archivist of Eternities',
    accent: '#ca8a04',
    deep: '#422006',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Keeper of the Last Page portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#422006" stroke="#ca8a04" stroke-width="2.5"/>
      <path d="M32 40 Q60 30 88 40 L88 82 Q60 72 32 82 Z" fill="#713f12" stroke="#eab308" stroke-width="2"/>
      <line x1="60" y1="35" x2="60" y2="77" stroke="#ca8a04" stroke-width="2"/>
      <line x1="38" y1="48" x2="54" y2="46" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="38" y1="56" x2="54" y2="54" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="38" y1="64" x2="54" y2="62" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="66" y1="46" x2="82" y2="48" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="66" y1="54" x2="82" y2="56" stroke="#fef08a" stroke-width="1.5"/>
      <line x1="66" y1="62" x2="82" y2="64" stroke="#fef08a" stroke-width="1.5"/>
      <polygon points="60,18 68,34 52,34" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>

      </svg>`;
    }
  },
  mythology: {
    id: 'mythology',
    name: 'Legendary Dragon',
    title: 'Wyrm of Ancient Lore',
    accent: '#dc2626',
    deep: '#450a0a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Legendary Dragon portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#450a0a" stroke="#dc2626" stroke-width="2.5"/>
      <path d="M30 30 Q46 16 54 36 L66 36 Q74 16 90 30 Q80 50 82 72 Q60 88 38 72 Q40 50 30 30 Z" fill="#991b1b" stroke="#f87171" stroke-width="2"/>
      <polygon points="46,50 56,54 48,58" fill="#facc15"/>
      <polygon points="74,50 64,54 72,58" fill="#facc15"/>
      <path d="M50 72 L60 82 L70 72 Z" fill="#f97316"/>
      <path d="M46 76 L50 82 M74 76 L70 82" stroke="#fff" stroke-width="2"/>
      <polygon points="60,28 64,36 60,44 56,36" fill="#fbbf24"/>

      </svg>`;
    }
  },
  nature: {
    id: 'nature',
    name: 'Forest Guardian',
    title: 'Spirit of the Canopy',
    accent: '#15803d',
    deep: '#052e16',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Forest Guardian portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#052e16" stroke="#15803d" stroke-width="2.5"/>
      <path d="M42 46 Q60 30 78 46 L74 86 Q60 92 46 86 Z" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
      <ellipse cx="52" cy="56" rx="5" ry="6" fill="#bbf7d0"/>
      <ellipse cx="68" cy="56" rx="5" ry="6" fill="#bbf7d0"/>
      <path d="M34 38 Q24 22 36 16 Q38 28 44 32" stroke="#86efac" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M86 38 Q96 22 84 16 Q82 28 76 32" stroke="#86efac" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <polygon points="60,64 56,72 64,72" fill="#86efac"/>
      <path d="M52 78 Q60 82 68 78" stroke="#4ade80" stroke-width="2" fill="none"/>

      </svg>`;
    }
  },
  flags: {
    id: 'flags',
    name: 'Atlas Sentinel',
    title: 'Standard-Bearer of Nations',
    accent: '#38bdf8',
    deep: '#082f49',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Atlas Sentinel portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#082f49" stroke="#38bdf8" stroke-width="2.5"/>
      <rect x="36" y="32" width="48" height="32" rx="4" fill="#0284c7" stroke="#bae6fd" stroke-width="2"/>
      <line x1="36" y1="48" x2="84" y2="48" stroke="#f43f5e" stroke-width="4"/>
      <line x1="60" y1="32" x2="60" y2="64" stroke="#f43f5e" stroke-width="4"/>
      <line x1="32" y1="24" x2="32" y2="92" stroke="#facc15" stroke-width="3" stroke-linecap="round"/>
      <circle cx="32" cy="22" r="4" fill="#facc15"/>
      <path d="M46 74 Q60 86 74 74 L78 88 Q60 96 42 88 Z" fill="#0369a1" stroke="#38bdf8" stroke-width="1.5"/>

      </svg>`;
    }
  },
  food: {
    id: 'food',
    name: 'The Spice Sovereign',
    title: 'Master of the Flame',
    accent: '#f97316',
    deep: '#7c2d12',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$The Spice Sovereign portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#7c2d12" stroke="#f97316" stroke-width="2.5"/>
      <path d="M38 46 Q60 30 82 46 L80 84 Q60 92 40 84 Z" fill="#9a3412" stroke="#fdba74" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="5" ry="6" fill="#fef08a"/>
      <ellipse cx="70" cy="54" rx="5" ry="6" fill="#fef08a"/>
      <path d="M36 34 Q60 14 84 34 L80 44 Q60 36 40 44 Z" fill="#fff" stroke="#fdba74" stroke-width="2"/>
      <path d="M52 68 Q60 76 68 68" stroke="#fdba74" stroke-width="2" fill="none"/>
      <path d="M56 22 Q60 14 64 22" stroke="#ea580c" stroke-width="2.5" fill="none"/>

      </svg>`;
    }
  },
  logic: {
    id: 'logic',
    name: 'The Deduction Master',
    title: 'Architect of Reason',
    accent: '#8b5cf6',
    deep: '#2e1065',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$The Deduction Master portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#2e1065" stroke="#8b5cf6" stroke-width="2.5"/>
      <ellipse cx="48" cy="56" rx="20" ry="20" fill="none" stroke="#a78bfa" stroke-width="2"/>
      <ellipse cx="72" cy="56" rx="20" ry="20" fill="none" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="60" cy="56" r="6" fill="#f43f5e"/>
      <polygon points="60,20 74,40 46,40" fill="#6d28d9" stroke="#c084fc" stroke-width="2"/>
      <line x1="60" y1="62" x2="60" y2="92" stroke="#a78bfa" stroke-width="2"/>
      <circle cx="60" cy="94" r="4" fill="#facc15"/>

      </svg>`;
    }
  },
  puzzles: {
    id: 'puzzles',
    name: 'Riddle Keeper',
    title: 'Weaver of Enigmas',
    accent: '#ec4899',
    deep: '#500724',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Riddle Keeper portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#500724" stroke="#ec4899" stroke-width="2.5"/>
      <rect x="36" y="36" width="48" height="48" rx="8" fill="#831843" stroke="#f472b6" stroke-width="2"/>
      <circle cx="60" cy="36" r="6" fill="#ec4899"/>
      <circle cx="84" cy="60" r="6" fill="#ec4899"/>
      <circle cx="60" cy="84" r="6" fill="#ec4899"/>
      <circle cx="36" cy="60" r="6" fill="#ec4899"/>
      <text x="60" y="66" font-family="sans-serif" font-size="24" fill="#fdf2f8" text-anchor="middle" font-weight="bold">?</text>
      <polygon points="60,14 64,22 72,24 66,29 68,36 60,32 52,36 54,29 48,24 56,22" fill="#facc15"/>

      </svg>`;
    }
  },
  gaming: {
    id: 'gaming',
    name: 'Final Boss',
    title: '8-Bit Cataclysm',
    accent: '#ef4444',
    deep: '#450a0a',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Final Boss portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#450a0a" stroke="#ef4444" stroke-width="2.5"/>
      <rect x="32" y="36" width="56" height="42" fill="#991b1b" stroke="#f87171" stroke-width="2"/>
      <rect x="40" y="44" width="10" height="10" fill="#fef08a"/>
      <rect x="70" y="44" width="10" height="10" fill="#fef08a"/>
      <rect x="44" y="48" width="4" height="4" fill="#0f172a"/>
      <rect x="72" y="48" width="4" height="4" fill="#0f172a"/>
      <rect x="44" y="64" width="32" height="6" fill="#0f172a"/>
      <rect x="48" y="64" width="6" height="6" fill="#fff"/>
      <rect x="66" y="64" width="6" height="6" fill="#fff"/>
      <polygon points="32,36 24,24 38,30" fill="#ef4444"/>
      <polygon points="88,36 96,24 82,30" fill="#ef4444"/>

      </svg>`;
    }
  },
  business: {
    id: 'business',
    name: 'Market Mogul',
    title: 'Titan of Trade',
    accent: '#10b981',
    deep: '#064e3b',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Market Mogul portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#064e3b" stroke="#10b981" stroke-width="2.5"/>
      <path d="M34 46 Q60 26 86 46 L82 86 Q60 92 38 86 Z" fill="#047857" stroke="#34d399" stroke-width="2"/>
      <ellipse cx="50" cy="54" rx="5" ry="6" fill="#ecfdf5"/>
      <ellipse cx="70" cy="54" rx="5" ry="6" fill="#ecfdf5"/>
      <path d="M40 76 L52 64 L64 70 L80 50" stroke="#facc15" stroke-width="3" fill="none" stroke-linecap="round"/>
      <polygon points="76,48 84,48 84,56" fill="#facc15"/>
      <polygon points="60,20 66,32 54,32" fill="#fbbf24"/>

      </svg>`;
    }
  },
  body: {
    id: 'body',
    name: 'Anatomy Guardian',
    title: 'Sentinel of Vitality',
    accent: '#f43f5e',
    deep: '#4c0519',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Anatomy Guardian portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#4c0519" stroke="#f43f5e" stroke-width="2.5"/>
      <path d="M60 40 Q45 25 35 38 Q25 54 60 84 Q95 54 85 38 Q75 25 60 40 Z" fill="#be123c" stroke="#fda4af" stroke-width="2"/>
      <circle cx="60" cy="54" r="8" fill="#ffe4e6"/>
      <line x1="60" y1="28" x2="60" y2="38" stroke="#fda4af" stroke-width="2"/>
      <line x1="48" y1="58" x2="38" y2="68" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>
      <line x1="72" y1="58" x2="82" y2="68" stroke="#f43f5e" stroke-width="2" stroke-linecap="round"/>

      </svg>`;
    }
  },
  inventions: {
    id: 'inventions',
    name: 'Clockwork Inventor',
    title: 'Architect of the Machine Age',
    accent: '#f59e0b',
    deep: '#451a03',
    renderSvg(state = 'idle') {
      return `<svg class="boss-svg boss-state-${state}" viewBox="0 0 120 120" role="img" aria-label="$Clockwork Inventor portrait" xmlns="http://www.w3.org/2000/svg">
        <style>
          .boss-svg { width: 100%; height: 100%; filter: drop-shadow(0 4px 12px rgba(0,0,0,0.5)); transition: transform 0.3s ease, filter 0.3s ease; }
          .boss-state-idle { animation: bossFloat 4s ease-in-out infinite; }
          .boss-state-damaged { animation: bossDamage 0.5s ease-in-out; filter: brightness(1.6) drop-shadow(0 0 16px #ef4444); }
          .boss-state-reacting { animation: bossReact 0.6s ease-in-out; filter: drop-shadow(0 0 20px #f59e0b); }
          .boss-state-defeated { animation: bossDefeated 1.2s forwards; filter: grayscale(0.8) opacity(0.6); }
          @keyframes bossFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }
          @keyframes bossDamage { 0%, 100% { transform: translateX(0); } 20% { transform: translateX(-6px) rotate(-3deg); } 40% { transform: translateX(6px) rotate(3deg); } 60% { transform: translateX(-4px); } 80% { transform: translateX(4px); } }
          @keyframes bossReact { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.12); } }
          @keyframes bossDefeated { 0% { transform: scale(1); } 50% { transform: scale(0.9) rotate(5deg); } 100% { transform: scale(0.8) translateY(10px); opacity: 0.5; } }
        </style>

      <circle cx="60" cy="60" r="54" fill="#451a03" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="60" cy="60" r="38" fill="#78350f" stroke="#fbbf24" stroke-width="2.5"/>
      <circle cx="60" cy="60" r="14" fill="#451a03" stroke="#f59e0b" stroke-width="2"/>
      <line x1="60" y1="18" x2="60" y2="28" stroke="#fbbf24" stroke-width="4"/>
      <line x1="60" y1="92" x2="60" y2="102" stroke="#fbbf24" stroke-width="4"/>
      <line x1="18" y1="60" x2="28" y2="60" stroke="#fbbf24" stroke-width="4"/>
      <line x1="92" y1="60" x2="102" y2="60" stroke="#fbbf24" stroke-width="4"/>
      <line x1="60" y1="60" x2="60" y2="44" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round"/>
      <line x1="60" y1="60" x2="72" y2="60" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>

      </svg>`;
    }
  },
};

export function renderBossPortrait(worldId, state = 'idle') {
  const boss = WORLD_BOSS_DETAILS[worldId] || WORLD_BOSS_DETAILS['space'];
  return boss.renderSvg(state);
}
