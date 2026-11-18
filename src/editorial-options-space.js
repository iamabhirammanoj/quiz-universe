// Editorially authored, question-specific options for every seeded Space item.
// Distractor notes are internal review metadata and are not displayed in play.
// No entry in this file is source-verified; broad pack URLs do not establish
// claim-level sourcing.
const d = (text, rationale) => ({ text, rationale });
const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });

export const SPACE_EDITORIAL_OPTION_SETS = {
  s01: set('solar-system planet identity', [
    d('Venus', 'Venus is often called Earth’s twin by size, but its clouds give it a pale appearance rather than Mars’s red one.'),
    d('Mercury', 'Mercury is the smallest planet and has a heavily cratered surface, not the familiar red color.'),
    d('Neptune', 'Neptune appears blue because of its atmosphere and is far beyond the inner rocky planets.'),
  ]),
  s02: set('solar-system planet by diameter', [
    d('Saturn', 'Saturn is the second-largest planet, but Jupiter is substantially larger.'),
    d('Earth', 'Earth is much smaller than the gas giants Jupiter and Saturn.'),
    d('Uranus', 'Uranus is an ice giant and is smaller than both Jupiter and Saturn.'),
  ]),
  s03: set('planet ordered by solar distance', [
    d('Venus', 'Venus is the second planet from the Sun, one orbit farther out than Mercury.'),
    d('Earth', 'Earth is third from the Sun, beyond Mercury and Venus.'),
    d('Mars', 'Mars is fourth from the Sun, beyond the two innermost planets.'),
  ]),
  s04: set('planetary ring system', [
    d('Mars', 'Mars has two small moons but no bright, broad ring system.'),
    d('Mercury', 'Mercury is a rocky inner planet and has no prominent planetary rings.'),
    d('Earth', 'Earth has no natural ring system; its Moon is a separate satellite.'),
  ]),
  s05: set('Earth satellite identity', [
    d('Phobos', 'Phobos is one of Mars’s two small moons, not an Earth satellite.'),
    d('Titan', 'Titan is Saturn’s largest moon and orbits Saturn.'),
    d('Europa', 'Europa is an icy moon of Jupiter, not Earth.'),
  ]),
  s06: set('planet with greatest mean surface temperature', [
    d('Mercury', 'Mercury is closest to the Sun, but its lack of a thick heat-trapping atmosphere gives it a lower average surface temperature than Venus.'),
    d('Mars', 'Mars is farther from the Sun and has a thin atmosphere, so its average surface is much colder than Venus.'),
    d('Jupiter', 'Jupiter is a gas giant with cold upper clouds and no solid surface whose average temperature exceeds Venus’s.'),
  ]),
  s07: set('recognized planet count', [
    d('Seven', 'Seven leaves out one of the eight planets recognized by the International Astronomical Union.'),
    d('Nine', 'Nine reflects an older count that included Pluto as a planet; Pluto is now classified as a dwarf planet.'),
    d('Ten', 'Ten counts two more planets than the current recognized set.'),
  ]),
  s08: set('planetary axial tilt', [
    d('Jupiter', 'Jupiter rotates with a relatively modest axial tilt, not nearly sideways.'),
    d('Venus', 'Venus rotates retrograde, but it is not the planet famous for an extreme near-sideways axial tilt.'),
    d('Mercury', 'Mercury’s rotation is not tipped nearly 90 degrees relative to its orbit.'),
  ]),
  s09: set('astronomical object class', [
    d('A planet', 'A planet orbits a star and does not produce its own sustained starlight through fusion.'),
    d('A moon', 'A moon is a natural satellite orbiting a planet or other body, not the Sun’s classification.'),
    d('A comet', 'A comet is a small icy body orbiting the Sun, not a self-luminous star.'),
  ]),
  s10: set('planetary atmospheric feature', [
    d('Neptune', 'Neptune has had dark atmospheric storms, but the Great Red Spot is a storm on Jupiter.'),
    d('Saturn', 'Saturn has storms and a polar hexagon, but not Jupiter’s Great Red Spot.'),
    d('Mars', 'Mars has surface dust storms; the Great Red Spot is an atmospheric storm on Jupiter.'),
  ]),
  s11: set('orbital force', [
    d('Magnetism', 'Magnetic forces affect some objects, but gravity is the force governing the planets’ solar orbits.'),
    d('Friction', 'Friction dissipates motion through contact and does not hold planets in their orbits.'),
    d('Static electricity', 'Static electric attraction is not the large-scale force binding the solar system.'),
  ]),
  s12: set('atmospheric-entry phenomenon', [
    d('Asteroid', 'An asteroid is the solid small body in space; the visible streak produced as an object enters the atmosphere is called a meteor.'),
    d('Comet', 'A comet is an icy body that can develop a coma and tail near the Sun; it is not the atmospheric streak itself.'),
    d('Satellite', 'A satellite is an object orbiting a larger body and is not the name for the atmospheric light streak.'),
  ], {
    question:'What is the streak of light produced when a meteoroid burns through Earth’s atmosphere called?',
    stemOverrideReason:'Separates the atmospheric light phenomenon (meteor) from the rocky object in space (meteoroid).',
  }),
  s13: set('host galaxy identity', [
    d('Andromeda', 'Andromeda is a neighboring large galaxy, separate from the galaxy containing our solar system.'),
    d('Whirlpool', 'The Whirlpool is a distant spiral galaxy, not our home galaxy.'),
    d('Sombrero', 'The Sombrero is another external galaxy and does not contain the solar system.'),
  ]),
  s14: set('first lunar surface walker', [
    d('Yuri Gagarin', 'Gagarin was the first human in space and in Earth orbit, but he did not travel to the Moon.'),
    d('Buzz Aldrin', 'Aldrin walked on the Moon during Apollo 11 after Neil Armstrong stepped onto the surface.'),
    d('John Glenn', 'Glenn was an early U.S. orbital astronaut, not a Moon walker.'),
  ]),
  s15: set('extravehicular life-support garment', [
    d('A flight suit', 'A flight suit can protect a pilot in an aircraft but does not by itself supply life support for vacuum.'),
    d('A diving suit', 'A diving suit is designed for underwater pressure and conditions, not space vacuum.'),
    d('A thermal blanket', 'A thermal blanket can reduce heat loss but does not provide an astronaut’s oxygen or mobility.'),
  ]),
  s16: set('human home planet', [
    d('Mars', 'Mars is a nearby rocky planet studied for past habitability, but humans live on Earth.'),
    d('Venus', 'Venus is close to Earth in size but has an extremely hot, high-pressure surface.'),
    d('Saturn', 'Saturn is a gas giant without a solid surface suitable as the planet humans inhabit.'),
  ]),
  s17: set('orbital geometry', [
    d('A perfect square', 'A square has straight sides and corners, unlike a gravitationally bound planetary orbit.'),
    d('A triangle', 'A triangle is a polygon rather than the smooth conic path of a planet around the Sun.'),
    d('A straight line', 'A straight path would not describe a planet repeatedly bound to orbit the Sun.'),
  ]),
  s18: set('recognizable star pattern term', [
    d('An orbit', 'An orbit is a path around another body, not a named pattern of stars in the sky.'),
    d('A nebula', 'A nebula is a cloud of gas and dust, rather than a visual grouping of stars.'),
    d('A crater', 'A crater is an impact or volcanic depression on a solid body, not a star pattern.'),
  ]),
  s19: set('small body with solar tail', [
    d('Moon', 'A moon is a natural satellite and does not ordinarily form a solar-heated gas-and-dust tail.'),
    d('Exoplanet', 'An exoplanet is a planet orbiting another star; it is not the icy solar-system object described.'),
    d('Pulsar', 'A pulsar is a rapidly rotating neutron star and does not develop a comet-like tail near the Sun.'),
  ]),
  s20: set('nearest star to Earth', [
    d('Sirius', 'Sirius is one of the brightest stars in Earth’s night sky, but it is far beyond the solar system.'),
    d('Proxima Centauri', 'Proxima Centauri is the nearest known star beyond the Sun, not nearer than the Sun itself.'),
    d('Vega', 'Vega is a nearby bright star but remains much farther from Earth than the Sun.'),
  ]),
  s21: set('lunar orbital period', [
    d('One day', 'The Moon takes many days to orbit Earth; one day is far too short.'),
    d('One year', 'A year is approximately Earth’s solar orbital period, not the Moon’s orbit around Earth.'),
    d('Ten years', 'Ten years is far longer than the Moon’s roughly month-long orbit.'),
  ]),
  s22: set('lunar phase mechanism', [
    d('Earth’s shadow every night', 'Earth’s shadow causes a lunar eclipse only when the alignment is right; it does not cause the regular phases.'),
    d('Clouds on the Moon', 'The Moon has no weather clouds that periodically cover it to create phases.'),
    d('The Moon changing shape', 'The Moon’s shape stays essentially the same; our viewing angle changes how much of its lit half we see.'),
  ]),
  s23: set('Apollo 11 national program', [
    d('Soviet Union', 'The Soviet Union led early spaceflight milestones, but Apollo 11 was a United States NASA mission.'),
    d('China', 'China has conducted later crewed lunar missions, but it did not conduct Apollo 11.'),
    d('India', 'India’s space program did not conduct the 1969 Apollo 11 landing.'),
  ]),
  s24: set('crewed orbital facility', [
    d('A telescope on the Moon', 'The ISS is in Earth orbit and is not a lunar telescope.'),
    d('A probe near Jupiter', 'The ISS carries crews in low Earth orbit rather than exploring Jupiter.'),
    d('A launch site', 'Launch sites are facilities on Earth; the ISS is an orbiting research complex.'),
  ]),
  s25: set('telescope function', [
    d('Measure ocean tides', 'Tides can be measured with ocean and geodetic instruments; observing celestial signals is a telescope’s role.'),
    d('Change a planet’s orbit', 'A telescope gathers observations and cannot exert the force needed to alter a planet’s orbit.'),
    d('Make stars brighter', 'A telescope collects or focuses incoming light to make observations clearer; it does not change a star’s luminosity.'),
  ]),
  s26: set('outermost recognized planet', [
    d('Uranus', 'Uranus is the seventh planet from the Sun; Neptune is farther out.'),
    d('Saturn', 'Saturn is the sixth planet from the Sun and lies well inside Neptune’s orbit.'),
    d('Jupiter', 'Jupiter is the fifth planet from the Sun, not the most distant recognized planet.'),
  ]),
  s27: set('planet with sulfuric-acid cloud deck', [
    d('Mars', 'Mars has a thin carbon-dioxide atmosphere and dust clouds, not Venus’s dense sulfuric-acid cloud deck.'),
    d('Mercury', 'Mercury has only an extremely tenuous exosphere and no thick cloud-covered atmosphere.'),
    d('Neptune', 'Neptune has a deep atmosphere with methane clouds, not Venus’s sulfuric-acid clouds.'),
  ]),
  s28: set('astronomical distance unit', [
    d('Time', 'The name includes “year,” but a light-year measures distance traveled by light in that time.'),
    d('Brightness', 'Brightness describes received or emitted light, not the distance light travels in a year.'),
    d('Temperature', 'Temperature measures thermal state and is unrelated to the definition of a light-year.'),
  ]),
  s29: set('dwarf-planet classification', [
    d('Europa', 'Europa is a moon orbiting Jupiter, not a dwarf planet orbiting the Sun.'),
    d('Titan', 'Titan is Saturn’s largest moon, not a dwarf planet.'),
    d('Phobos', 'Phobos is a small moon of Mars, not a dwarf planet.'),
  ]),
  s30: set('interstellar gas-and-dust cloud', [
    d('Crater', 'A crater is a depression on a solid surface, not an interstellar cloud.'),
    d('Orbit', 'An orbit is a path followed around a body, not a collection of gas and dust.'),
    d('Quasar', 'A quasar is an extremely luminous active galactic nucleus, not a gas-and-dust cloud.'),
  ]),
  s31: set('Mars rover mission', [
    d('Curiosity', 'Curiosity is another NASA Mars rover, but it landed in Gale Crater rather than Jezero.'),
    d('Opportunity', 'Opportunity was a NASA Mars rover that landed in 2004, years before the Jezero landing.'),
    d('Spirit', 'Spirit was a NASA Mars rover sent to Gusev Crater, not Jezero.'),
  ]),
  s32: set('first Pluto flyby spacecraft', [
    d('Voyager 1', 'Voyager 1 explored the outer planets and interstellar space but did not fly past Pluto.'),
    d('Cassini', 'Cassini studied Saturn and its moons; it did not visit Pluto.'),
    d('Juno', 'Juno is a Jupiter mission and did not fly past Pluto.'),
  ]),
  s33: set('planetary rotation period', [
    d('Earth', 'Earth’s day is about 24 hours, substantially longer than Jupiter’s roughly 10-hour rotation.'),
    d('Mars', 'Mars rotates in a little over 24 hours, not about 10 hours.'),
    d('Mercury', 'Mercury rotates very slowly, taking about 59 Earth days for one rotation.'),
  ]),
  s34: set('main asteroid-belt location', [
    d('Earth and Mars', 'This region is inside Mars’s orbit and is not where the main asteroid belt lies.'),
    d('Jupiter and Saturn', 'This interval is beyond the main belt, which is inside Jupiter’s orbit.'),
    d('Uranus and Neptune', 'These distant orbits are far beyond the main asteroid belt.'),
  ]),
  s35: set('lunar day-night boundary', [
    d('Equator', 'The lunar equator is an imaginary latitude line, not the moving boundary between day and night.'),
    d('Ecliptic', 'The ecliptic is the apparent path of the Sun across the sky, not a lunar illumination boundary.'),
    d('Lunar terminus', '“Terminus” is not the standard astronomical name for the line separating lunar day from night.'),
  ]),
  s36: set('infrared space telescope', [
    d('Hubble', 'Hubble observes mainly ultraviolet, visible, and near-infrared light and launched in 1990, not 2021.'),
    d('Kepler', 'Kepler searched for exoplanets using visible-light brightness measurements and launched in 2009.'),
    d('Chandra', 'Chandra is an X-ray observatory launched in 1999, not the 2021 infrared telescope.'),
  ]),
  s37: set('Saturn moon with hydrocarbon lakes', [
    d('Enceladus', 'Enceladus is known for water-rich plumes and a subsurface ocean, not surface methane-and-ethane lakes.'),
    d('Mimas', 'Mimas is a small icy Saturn moon without Titan’s surface hydrocarbon lakes.'),
    d('Rhea', 'Rhea is an icy Saturn moon but is not known for lakes of liquid methane and ethane.'),
  ]),
  s38: set('Jupiter moon with strongest global-ocean evidence', [
    d('Io', 'Io is dominated by intense volcanism and is not the icy-crusted ocean world described.'),
    d('Ganymede', 'Ganymede may also contain a deep subsurface ocean, but Europa is the Galilean moon especially identified with strong evidence for a global ocean beneath a comparatively thin icy crust.'),
    d('Callisto', 'Callisto may have a subsurface ocean, but it is not the Galilean moon especially identified with strong evidence for a global ocean beneath a comparatively thin icy crust.'),
  ], {
    question:'Which Galilean moon is especially known for strong evidence of a global ocean beneath a comparatively thin icy crust?',
    stemOverrideReason:'Distinguishes Europa from Ganymede and Callisto, which also have evidence consistent with subsurface oceans.',
  }),
  s39: set('first artificial Earth satellite', [
    d('Explorer 1', 'Explorer 1 was the first U.S. satellite, launched after the Soviet Union’s Sputnik 1.'),
    d('Vostok 1', 'Vostok 1 carried the first human into space; it was not the first artificial satellite.'),
    d('Luna 2', 'Luna 2 was a later Soviet lunar impact mission, not the first Earth-orbiting artificial satellite.'),
  ]),
  s40: set('planetary atmospheric pattern', [
    d('Neptune’s Great Dark Spot', 'The Great Dark Spot was a storm observed on Neptune, not Saturn’s north-polar hexagon.'),
    d('Saturn’s south-polar vortex', 'Saturn has a south-polar vortex, but the question asks for the six-sided north-polar jet pattern.'),
    d('Jupiter’s Great Red Spot', 'The Great Red Spot is a storm on Jupiter rather than Saturn’s north-polar feature.'),
  ]),
  s41: set('planet beyond the Solar System', [
    d('Minor moon', 'A moon orbits a planet or other body; it is not the planet orbiting another star described here.'),
    d('Asteroid', 'An asteroid is a small rocky body and is not classified as a planet orbiting another star.'),
    d('Pulsar', 'A pulsar is a rotating neutron star, not a planet.'),
  ]),
  s42: set('first successful lunar soft landing', [
    d('Apollo 8', 'Apollo 8 carried astronauts around the Moon but did not land on its surface.'),
    d('Surveyor 1', 'Surveyor 1 was the first U.S. lunar soft landing, but the earlier Soviet Luna 9 landed first overall.'),
    d('Luna 2', 'Luna 2 reached the Moon before Luna 9 but impacted the surface rather than making a soft landing.'),
  ]),
  s43: set('black-hole causal boundary', [
    d('Photosphere', 'A photosphere is the visible outer layer of a star, not the boundary of a black hole.'),
    d('Magnetopause', 'A magnetopause separates a magnetosphere from surrounding plasma, not the region around a black hole.'),
    d('Roche limit', 'The Roche limit concerns tidal disruption of an orbiting body and does not define light’s escape boundary.'),
  ]),
  s44: set('planetary atmospheric wind record', [
    d('Venus', 'Venus has strong atmospheric circulation, but measured solar-system wind speeds are greater on Neptune.'),
    d('Earth', 'Earth has powerful storms, but its measured winds are far below Neptune’s fastest atmospheric winds.'),
    d('Mercury', 'Mercury has almost no atmosphere to sustain the planet-scale winds described.'),
  ]),
  s45: set('NASA early crewed spaceflight program', [
    d('Apollo', 'Apollo later sent astronauts to the Moon; John Glenn’s 1962 orbital flight was part of Mercury.'),
    d('Gemini', 'Gemini followed Mercury and began crewed flights in 1965, after Glenn’s 1962 flight.'),
    d('Soyuz', 'Soyuz is a Soviet/Russian spacecraft program, not the NASA program that flew Glenn.'),
  ]),
  s46: set('main-sequence stellar fusion process', [
    d('Iron into gold', 'Ordinary main-sequence stars do not make gold by fusing iron; iron fusion also does not release energy as a normal fuel.'),
    d('Oxygen into carbon', 'Main-sequence energy production is dominated by hydrogen fusion, not oxygen turning into carbon.'),
    d('Helium into uranium', 'Helium fusion can build heavier elements in later stellar stages, but it does not produce uranium in a main-sequence core.'),
  ]),
  s47: set('Saturn orbiter mission', [
    d('Juno', 'Juno entered orbit around Jupiter, not Saturn.'),
    d('Galileo', 'Galileo studied Jupiter and its moons rather than orbiting Saturn.'),
    d('Dawn', 'Dawn orbited Vesta and Ceres, not Saturn.'),
  ]),
  s48: set('largest natural satellite', [
    d('Titan', 'Titan is the second-largest moon; Ganymede is larger.'),
    d('Earth’s Moon', 'Earth’s Moon is large relative to Earth but is smaller than Ganymede.'),
    d('Triton', 'Triton is Neptune’s largest moon but is smaller than Ganymede.'),
  ]),
  s49: set('lunar sky appearance mechanism', [
    d('The Moon blocks all sunlight', 'The Moon receives direct sunlight in daytime; its dark-looking sky is explained by the lack of atmospheric scattering.'),
    d('The Sun is too far away', 'Sunlight reaches and illuminates the lunar surface; distance does not explain the black sky.'),
    d('The Moon has no daylight', 'The Moon has long periods of daylight, even though its airless sky remains dark.'),
  ]),
  s50: set('space telescope by launch era and imaging', [
    d('Spitzer Space Telescope', 'Spitzer launched in 2003 and observed primarily infrared light, not the 1990 visible-light mission.'),
    d('Kepler', 'Kepler launched in 2009 to detect exoplanets through brightness changes, not to make Hubble-style deep visible images.'),
    d('Planck', 'Planck mapped the cosmic microwave background and launched in 2009, rather than producing the stated visible-light images.'),
  ]),
  s51: set('vacuum light speed magnitude', [
    d('30,000 km/s', 'This is one tenth of light’s speed in vacuum.'),
    d('150,000 km/s', 'This is about half of light’s speed in vacuum.'),
    d('1,000,000 km/s', 'This is more than three times light’s speed in vacuum.'),
  ]),
  s52: set('outer heliosphere boundary', [
    d('Magnetotail', 'A magnetotail is an elongated part of a magnetosphere shaped by the solar wind, not the heliosphere’s outer boundary.'),
    d('Photosphere', 'The photosphere is the Sun’s visible surface and lies far inside the heliosphere.'),
    d('Termination shock', 'The termination shock is where the solar wind slows abruptly, inside the heliopause where it meets the interstellar medium.'),
  ]),
  s53: set('first spacecraft across heliopause', [
    d('Pioneer 10', 'Pioneer 10 traveled outward from the Sun but did not cross the heliopause before contact was lost.'),
    d('New Horizons', 'New Horizons explored Pluto and the Kuiper Belt but has not preceded Voyager 1 across the heliopause.'),
    d('Voyager 2', 'Voyager 2 also crossed the heliopause, but it did so after Voyager 1.'),
  ]),
  s54: set('cosmic age estimate', [
    d('1.4 billion years', 'This estimate is far younger than the age inferred from modern measurements of cosmic expansion and the background radiation.'),
    d('4.6 billion years', 'About 4.6 billion years is the age of the Solar System, not the universe.'),
    d('46 billion years', 'This is not the universe’s age; it is closer to a rough distance scale sometimes discussed for the observable universe.'),
  ]),
  s55: set('compact stellar remnant', [
    d('A young planet', 'A planet is not a neutron-star remnant and does not produce pulsar beams through rapid stellar rotation.'),
    d('A type of comet', 'Comets are small icy bodies orbiting stars, not compact neutron stars.'),
    d('A black hole with rings', 'A pulsar is a neutron star; a black hole with rings is not the object defined here.'),
  ]),
  s56: set('first far-side lunar sample return', [
    d('Chang’e 4', 'Chang’e 4 made the first soft landing on the Moon’s far side, but it did not return samples to Earth.'),
    d('Chang’e 5', 'Chang’e 5 returned lunar samples earlier, but its collection site was on the near side.'),
    d('Luna 16', 'Luna 16 returned the first robotic lunar samples, decades earlier, from a near-side site.'),
  ]),
  s57: set('tidal-disruption distance', [
    d('A star’s outer atmosphere', 'A stellar atmosphere is a physical layer and is not a distance defined by tidal forces.'),
    d('The edge of the observable universe', 'The observable-universe boundary is a cosmological horizon, not a satellite-disruption distance.'),
    d('A spacecraft’s safe re-entry altitude', 'Re-entry altitude is an operational flight concept and is unrelated to tidal disruption.'),
  ]),
  s58: set('sunward magnetosphere boundary', [
    d('Heliopause', 'The heliopause bounds the Sun’s heliosphere at interstellar space, not Earth’s magnetosphere.'),
    d('Ionosphere', 'The ionosphere is an ionized region of Earth’s upper atmosphere, not the outer magnetospheric boundary.'),
    d('Bow shock only', 'Earth’s bow shock is upstream of the magnetopause; it is a separate shock boundary, not the magnetosphere boundary itself.'),
  ]),
  s59: set('Milky Way morphology', [
    d('Elliptical', 'An elliptical galaxy lacks the Milky Way’s disk and spiral arms.'),
    d('Irregular', 'An irregular galaxy has no well-defined spiral structure; the Milky Way has a barred spiral form.'),
    d('Ring galaxy', 'A ring galaxy has a distinctive ring structure rather than the Milky Way’s barred disk and spiral arms.'),
  ]),
  s60: set('first asteroid orbiter', [
    d('Dawn', 'Dawn later orbited Vesta and Ceres, but NEAR Shoemaker had already orbited Eros.'),
    d('OSIRIS-REx', 'OSIRIS-REx later orbited Bennu, after NEAR Shoemaker’s earlier asteroid orbit.'),
    d('Hayabusa2', 'Hayabusa2 visited and sampled asteroid Ryugu later; it was not the first asteroid orbiter.'),
  ]),
  s61: set('Juno destination planet', [
    d('Saturn', 'Saturn was studied by Cassini; Juno’s destination was Jupiter.'),
    d('Mars', 'Mars has hosted several orbiters, but Juno was sent to the outer planet Jupiter.'),
    d('Neptune', 'Neptune has not been orbited by Juno; the mission entered orbit around Jupiter.'),
  ]),
  s62: set('cosmological future-signal horizon', [
    d('Cosmic particle horizon', 'The particle horizon marks how far signals from the past have had time to reach us, not the future reachability of signals sent now.'),
    d('Hubble radius', 'The Hubble radius is defined by the expansion rate and is not generally the boundary for signals that can ever reach us.'),
    d('Black-hole event horizon', 'A black-hole event horizon is a local boundary around a black hole, not the universe-scale horizon in this question.'),
  ]),
  s63: set('first Mercury orbiter', [
    d('Mariner 10', 'Mariner 10 flew past Mercury several times but did not enter orbit.'),
    d('BepiColombo', 'BepiColombo is a later Mercury mission that was still on its transfer journey when MESSENGER became the first orbiter.'),
    d('Pioneer Venus', 'Pioneer Venus studied Venus, not Mercury.'),
  ]),
  s64: set('retrograde moon host planet', [
    d('Uranus', 'Uranus has unusual axial rotation, but Triton is a moon of Neptune.'),
    d('Saturn', 'Saturn’s major moons orbit it; Triton belongs to Neptune.'),
    d('Jupiter', 'Jupiter has many moons, but Triton is not among them.'),
  ]),
  s65: set('relic radiation field', [
    d('Radio noise from the Sun', 'Solar radio emissions vary with solar activity and are not the nearly uniform relic glow from the early universe.'),
    d('Signals from pulsars', 'Pulsar signals come from individual rotating neutron stars, not the early universe’s background radiation.'),
    d('Heat from Earth’s atmosphere', 'Atmospheric thermal emission is local to Earth and does not represent the cosmic relic radiation.'),
  ]),
  s66: set('first comet lander', [
    d('Deep Impact', 'Deep Impact released an impactor into a comet; it did not land a spacecraft on the comet’s surface.'),
    d('Stardust', 'Stardust collected comet dust during a flyby and returned it to Earth, but did not land on a comet.'),
    d('Hayabusa', 'Hayabusa sampled asteroid Itokawa rather than landing on a comet.'),
  ]),
  s67: set('solar visible-emission layer', [
    d('Chromosphere', 'The chromosphere lies above the photosphere and is most readily seen around the solar limb or during an eclipse.'),
    d('Corona', 'The corona is the extended outer solar atmosphere, not the visible surface layer.'),
    d('Core', 'The core is the Sun’s deep fusion region and cannot be seen directly at its surface.'),
  ]),
  s68: set('first Uranus visitor', [
    d('Pioneer 11', 'Pioneer 11 explored Jupiter and Saturn but did not visit Uranus.'),
    d('Cassini', 'Cassini explored Saturn and its moons, not Uranus.'),
    d('New Horizons', 'New Horizons visited Pluto and the Kuiper Belt; Voyager 2 was the first spacecraft to visit Uranus.'),
  ]),
  s69: set('Milky Way central black hole', [
    d('Cygnus X-1', 'Cygnus X-1 is a black-hole system in the Milky Way but is not at the galaxy’s center.'),
    d('M87*', 'M87* is the supermassive black hole at the center of a different galaxy, Messier 87.'),
    d('Kepler-22b', 'Kepler-22b is an exoplanet candidate, not a black hole.'),
  ]),
  s70: set('first gravitational-wave observatory', [
    d('ALMA', 'ALMA is a radio interferometer used for astronomical observations, not the detector of the first gravitational-wave signal.'),
    d('Hubble', 'Hubble is a space telescope that observes electromagnetic light, not the ground-based gravitational-wave detector.'),
    d('Chandra', 'Chandra is an X-ray space telescope and did not detect the first gravitational-wave event.'),
  ]),
  s71: set('first U.S. artificial satellite', [
    d('Vanguard 1', 'Vanguard 1 was the second U.S. satellite to reach orbit, after Explorer 1.'),
    d('Telstar 1', 'Telstar 1 was a communications satellite launched years later, not the first U.S. satellite.'),
    d('Skylab', 'Skylab was a crewed space station launched in 1973, not the first U.S. artificial satellite.'),
  ]),
  s72: set('planetary size comparison', [
    d('Mars', 'Mars is smaller than Earth by diameter and is not the closest size match among these planets.'),
    d('Jupiter', 'Jupiter is a gas giant many times wider than Earth, not a size twin.'),
    d('Neptune', 'Neptune is an ice giant substantially larger than Earth.'),
  ]),
  s73: set('eclipse alignment type', [
    d('Lunar eclipse', 'A lunar eclipse occurs when Earth passes between the Sun and Moon, the opposite alignment.'),
    d('Transit of Venus', 'A Venus transit occurs when Venus crosses the Sun’s apparent disk as viewed from Earth.'),
    d('Occultation of Mars', 'A Mars occultation occurs when another body blocks Mars from view, not when the Moon passes in front of the Sun.'),
  ]),
  s74: set('largest Saturn satellite', [
    d('Enceladus', 'Enceladus is a small icy moon famous for water-rich plumes, but Titan is much larger.'),
    d('Mimas', 'Mimas is a small Saturn moon, far smaller than Titan.'),
    d('Rhea', 'Rhea is Saturn’s second-largest moon, smaller than Titan.'),
  ]),
  s75: set('Sputnik 2 orbital animal', [
    d('Ham the chimpanzee', 'Ham flew on a U.S. suborbital Mercury test flight, not aboard the Soviet Sputnik 2.'),
    d('A cat named Félicette', 'Félicette was a French spaceflight cat sent on a suborbital flight years later.'),
    d('A tortoise', 'Soviet tortoises flew on later circumlunar missions, not Sputnik 2.'),
  ]),
  s76: set('smallest recognized planet', [
    d('Mars', 'Mars is the second-smallest planet; Mercury is smaller.'),
    d('Venus', 'Venus is close to Earth in size and is much larger than Mercury.'),
    d('Earth', 'Earth is larger than both Venus and Mercury.'),
  ]),
  s77: set('first operational Mars landing', [
    d('Mars Pathfinder', 'Pathfinder landed successfully in 1997, after Viking 1’s operational landing in 1976.'),
    d('Mars 3', 'Mars 3 made the first soft landing on Mars but stopped transmitting shortly after touchdown, before returning a usable operating mission.'),
    d('Sojourner', 'Sojourner was the rover carried by Mars Pathfinder, not the earlier lander that first operated successfully.'),
  ], {
    question:'Which mission was the first to achieve a successful operational landing on Mars?',
    why:'Viking 1 landed in 1976 and returned data from the Martian surface; the earlier Mars 3 lander lost contact shortly after touchdown.',
    stemOverrideReason:'Clarifies that “successful” means an operational surface mission, distinguishing Viking 1 from Mars 3’s earlier brief post-landing transmission.',
  }),
  s78: set('trans-Neptunian small-body region', [
    d('A ring around Saturn', 'Saturn’s rings orbit Saturn; the Kuiper Belt lies far beyond Neptune.'),
    d('A layer of the Sun', 'The Kuiper Belt is a distant Solar System region and not a solar atmospheric layer.'),
    d('A group of nearby stars', 'The Kuiper Belt contains small Solar System bodies, not a cluster of stars.'),
  ]),
  s79: set('central Solar System star', [
    d('Polaris', 'Polaris is a distant star that marks the north celestial pole, not the star at the Solar System’s center.'),
    d('Sirius', 'Sirius is a nearby bright star, but Earth and the planets orbit the Sun.'),
    d('Betelgeuse', 'Betelgeuse is a red supergiant in Orion, far outside our Solar System.'),
  ]),
  s80: set('first crewed lunar-vicinity mission', [
    d('Apollo 11', 'Apollo 11 was the first crewed lunar landing mission; Apollo 8 carried people around the Moon earlier without landing.'),
    d('Gemini 8', 'Gemini 8 performed an Earth-orbit rendezvous and docking, not a lunar-vicinity flight.'),
    d('Artemis I', 'Artemis I traveled around the Moon but was uncrewed, so it did not carry humans.'),
  ]),
};
