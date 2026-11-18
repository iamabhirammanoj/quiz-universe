// Explicit distractors for the Chemistry and Human Body seed questions.
// Rationales are editorial notes for review and are not source citations.
const d = (text, rationale) => ({ text, rationale });
const set = (answerFamily, distractors, extra = {}) => ({ answerFamily, distractors, ...extra });

export const CHEM_BODY_OPTION_SETS = {
  'chemistry-001': set('molecular formulas', [
    d('CO2', 'CO2 is the formula for carbon dioxide, not water.'),
    d('NH3', 'NH3 is the formula for ammonia.'),
    d('H2S', 'H2S is the formula for hydrogen sulfide.'),
  ]),
  'chemistry-002': set('pH values', [
    d('6', 'At the stated reference temperature, pH 6 is below neutral and is acidic.'),
    d('8', 'At the stated reference temperature, pH 8 is above neutral and is basic.'),
    d('7.5', 'At the stated reference temperature, a neutral solution is near pH 7, not 7.5.'),
  ], { question:'At 25°C, what is the pH of a neutral aqueous solution?' }),
  'chemistry-003': set('atmospheric gases', [
    d('Oxygen', 'Oxygen is the second most abundant gas in dry air, behind nitrogen.'),
    d('Argon', 'Argon is present in air, but only as a small fraction compared with nitrogen.'),
    d('Carbon dioxide', 'Carbon dioxide is a trace gas in the atmosphere, not its largest component.'),
  ]),
  'chemistry-004': set('element symbols', [
    d('Ag', 'Ag is the chemical symbol for silver.'),
    d('Fe', 'Fe is the chemical symbol for iron.'),
    d('Pb', 'Pb is the chemical symbol for lead.'),
  ]),
  'chemistry-005': set('atomic structure quantities', [
    d('Mass number', 'Mass number counts protons and neutrons together, rather than protons alone.'),
    d('Atomic mass', 'Atomic mass describes an atom’s mass, not the proton count that defines its element.'),
    d('Number of neutrons', 'Neutron count can vary among isotopes and does not identify the element.'),
  ], { question:'Which quantity equals the number of protons in an atom’s nucleus and identifies the element?', correctText:'Atomic number', why:'An element’s atomic number is the number of protons in the nucleus.' }),
  'chemistry-006': set('subatomic particles', [
    d('Electron', 'An electron carries a negative electric charge.'),
    d('Neutron', 'A neutron has no net electric charge.'),
    d('Neutrino', 'A neutrino has no electric charge.'),
  ]),
  'chemistry-007': set('ionic compound formulas', [
    d('KCl', 'KCl is potassium chloride, a different ionic salt.'),
    d('NaF', 'NaF is sodium fluoride, not sodium chloride.'),
    d('MgCl2', 'MgCl2 is magnesium chloride and has a different cation and formula.'),
  ]),
  'chemistry-008': set('chemical reaction roles', [
    d('Reactant', 'A reactant is consumed or transformed as a reaction proceeds; it is not the rate-accelerating role described.'),
    d('Inhibitor', 'An inhibitor slows or suppresses a reaction rather than speeding it up.'),
    d('Product', 'A product is formed by a reaction rather than serving as the substance that speeds it.'),
  ]),
  'chemistry-009': set('element symbols', [
    d('Fluorine', 'Fluorine has the symbol F, not Fe.'),
    d('Iodine', 'Iodine has the symbol I, not Fe.'),
    d('Fermium', 'Fermium has the symbol Fm; Fe is the symbol for iron.'),
  ]),
  'chemistry-010': set('chemical bond types', [
    d('Ionic bond', 'Ionic bonding involves electrostatic attraction between ions formed after electron transfer, not shared electron pairs.'),
    d('Metallic bond', 'Metallic bonding involves metal atoms and delocalized electrons, not shared pairs between two atoms as described.'),
    d('Hydrogen bond', 'A hydrogen bond is an intermolecular attraction, not the shared-electron-pair bond described.'),
  ]),
  'chemistry-011': set('element symbols', [
    d('Au', 'Au is the symbol for gold.'),
    d('Al', 'Al is the symbol for aluminum.'),
    d('Ar', 'Ar is the symbol for argon.'),
  ]),
  'chemistry-012': set('ion and atom terms', [
    d('Anion', 'An anion has a net negative charge; a cation has a net positive charge.'),
    d('Neutral atom', 'A neutral atom has no net charge.'),
    d('Isotope', 'An isotope is defined by its neutron count; the term does not name a positive charge.'),
  ]),
  'chemistry-013': set('gases in common reaction products', [
    d('Hydrogen', 'Hydrogen gas is commonly produced when an acid reacts with certain metals, not carbonates.'),
    d('Sulfur dioxide', 'Sulfur dioxide is commonly released when acids react with sulfites, not carbonates.'),
    d('Oxygen', 'Oxygen is not the characteristic gas product of an acid–carbonate reaction.'),
  ]),
  'chemistry-014': set('common chemical names', [
    d('Washing soda', 'Washing soda is sodium carbonate, a different compound from sodium bicarbonate.'),
    d('Baking powder', 'Baking powder is a leavening mixture that includes bicarbonate and other ingredients; it is not the common name for sodium bicarbonate itself.'),
    d('Caustic soda', 'Caustic soda is sodium hydroxide, not sodium bicarbonate.'),
  ]),
  'chemistry-015': set('elements by atomic number', [
    d('Helium', 'Helium has atomic number 2.'),
    d('Lithium', 'Lithium has atomic number 3.'),
    d('Carbon', 'Carbon has atomic number 6.'),
  ]),
  'chemistry-016': set('electron-transfer descriptions', [
    d('Gain of electrons', 'Gain of electrons is reduction, the opposite electron change from oxidation.'),
    d('Sharing of electron pairs', 'Sharing electron pairs describes covalent bonding, not the electron change that defines oxidation.'),
    d('Transfer of protons', 'Proton transfer is associated with acid–base reactions, not the electron definition of oxidation.'),
  ]),
  'chemistry-017': set('noble gases', [
    d('Argon', 'Argon is used in some discharge lamps and specialty signs, but neon is the gas associated with classic bright “neon” advertising signs.'),
    d('Krypton', 'Krypton is used in some lighting applications, but it is not the gas commonly associated with classic advertising signs.'),
    d('Xenon', 'Xenon is used in high-intensity lamps, but it is not the gas commonly associated with classic advertising signs.'),
  ], { question:'Which noble gas gives the characteristic orange-red glow in classic neon advertising signs?' }),
  'chemistry-018': set('periodic-table organization', [
    d('Periods', 'Periods are the horizontal rows of the periodic table.'),
    d('Blocks', 'Blocks group elements by the subshell being filled, not by vertical columns.'),
    d('Series', 'A series is a named sequence of related elements, not the standard name for a vertical column.'),
  ]),
  'chemistry-019': set('molecular formulas', [
    d('O2', 'O2 is the formula for an oxygen molecule; ozone contains three oxygen atoms per molecule.'),
    d('CO2', 'CO2 is the formula for carbon dioxide.'),
    d('H2O', 'H2O is the formula for water.'),
  ]),
  'chemistry-020': set('acid and base classifications', [
    d('Basic', 'A solution with pH above 7 is basic at the stated reference conditions.'),
    d('Neutral', 'A neutral solution is near pH 7 at room temperature, rather than below 7.'),
    d('Amphoteric', 'Amphoteric describes a substance able to act as an acid or a base; a solution below pH 7 is classified as acidic.'),
  ], { question:'At 25 °C, how is an aqueous solution with a pH below 7 classified?' }),

  'body-001': set('major organs', [
    d('Liver', 'The liver performs many metabolic functions, but the heart pumps blood through the circulation.'),
    d('Lungs', 'The lungs exchange gases; they do not pump blood through the body.'),
    d('Kidneys', 'The kidneys filter blood and regulate fluid balance, but they do not drive blood circulation.'),
  ]),
  'body-002': set('organs involved in circulation and exchange', [
    d('Heart', 'The heart pumps blood; gas exchange with the air occurs primarily in the lungs.'),
    d('Liver', 'The liver processes nutrients and many chemicals, but it is not the primary site of oxygen–carbon dioxide exchange.'),
    d('Kidneys', 'The kidneys filter blood and form urine, rather than exchanging respiratory gases.'),
  ]),
  'body-003': set('human organs', [
    d('Liver', 'The liver is the largest internal organ, but the skin is the body’s largest organ overall.'),
    d('Lungs', 'The lungs are major organs in the chest, but they are smaller than the skin overall.'),
    d('Brain', 'The brain is a vital organ, but it is not the body’s largest organ.'),
  ]),
  'body-004': set('bones and skeletal structures', [
    d('Ribs', 'The ribs protect organs in the chest, not the brain.'),
    d('Vertebrae', 'The vertebrae surround and protect the spinal cord.'),
    d('Femur', 'The femur is the thigh bone and does not enclose the brain.'),
  ]),
  'body-005': set('body systems', [
    d('Peripheral nervous system', 'The peripheral nervous system consists of nerves outside the brain and spinal cord.'),
    d('Endocrine system', 'The endocrine system is made up of hormone-producing glands, not the brain and spinal cord.'),
    d('Musculoskeletal system', 'The musculoskeletal system includes bones and muscles rather than the brain and spinal cord.'),
  ]),
  'body-006': set('blood cell types', [
    d('Lymphocytes', 'Lymphocytes are white blood cells involved in immune defense, not oxygen transport.'),
    d('Neutrophils', 'Neutrophils are white blood cells that respond to infection, not oxygen carriers.'),
    d('Monocytes', 'Monocytes are white blood cells that can develop into tissue macrophages, not oxygen carriers.'),
  ]),
  'body-007': set('digestive organs', [
    d('Small intestine', 'The small intestine absorbs most digested nutrients; the stomach churns food and begins protein digestion.'),
    d('Liver', 'The liver produces bile, but the stomach is the organ that churns food with acid and enzymes.'),
    d('Kidneys', 'The kidneys filter blood to form urine; they do not churn or chemically digest food.'),
  ], { question:'Which organ churns food and mixes it with acid and enzymes?', correctText:'Stomach', why:'The stomach churns food and mixes it with acid and enzymes; digestion overall begins in the mouth.' }),
  'body-008': set('organs involved in waste processing', [
    d('Liver', 'The liver processes substances in blood, but it does not produce urine.'),
    d('Urinary bladder', 'The bladder stores urine; the kidneys filter blood and form it.'),
    d('Spleen', 'The spleen filters blood and supports immune functions, but it does not produce urine.'),
  ]),
  'body-009': set('connective tissues', [
    d('Ligaments', 'Ligaments connect bone to bone at joints; tendons connect muscle to bone.'),
    d('Cartilage', 'Cartilage cushions and supports joints, but it does not attach muscle to bone.'),
    d('Fascia', 'Fascia surrounds and separates muscles and other structures rather than serving as the usual muscle-to-bone attachment.'),
  ]),
  'body-010': set('connective tissues at joints', [
    d('Tendon', 'A tendon usually connects muscle to bone, rather than one bone to another.'),
    d('Cartilage', 'Cartilage cushions joint surfaces; it is not the connective band that joins bones.'),
    d('Fascia', 'Fascia surrounds and supports muscles and other structures; it is not the usual bone-to-bone joint connection.'),
  ]),
  'body-011': set('eye structures', [
    d('Cornea', 'The cornea helps bend and focus incoming light; the iris changes pupil size to regulate how much enters.'),
    d('Lens', 'The lens focuses light onto the retina but does not regulate its entry into the eye.'),
    d('Retina', 'The retina detects light at the back of the eye; it does not control how much light enters.'),
  ]),
  'body-012': set('internal organs', [
    d('Lungs', 'The lungs are large paired organs, but the liver is the largest internal organ.'),
    d('Brain', 'The brain is a major internal organ, but it is smaller than the liver.'),
    d('Kidneys', 'The kidneys are paired organs and are individually much smaller than the liver.'),
  ]),
  'body-013': set('body systems', [
    d('Digestive system', 'The digestive system processes food; the trachea and bronchi conduct air.'),
    d('Circulatory system', 'The circulatory system moves blood through the body; the trachea and bronchi are airways.'),
    d('Nervous system', 'The nervous system transmits signals; it does not contain the trachea and bronchi.'),
  ]),
  'body-014': set('nervous system structures', [
    d('Glial cell', 'Glial cells support and protect nervous tissue; neurons are the primary information-signaling cells.'),
    d('Synapse', 'A synapse is a junction where cells communicate, not a cell or the basic functional unit itself.'),
    d('Axon', 'An axon is one part of a neuron that carries signals away from its cell body.'),
  ]),
  'body-015': set('hormone-producing organs', [
    d('Liver', 'The liver helps regulate blood glucose but does not produce insulin.'),
    d('Kidney', 'The kidneys regulate fluid and blood chemistry; insulin is produced in the pancreas.'),
    d('Thyroid gland', 'The thyroid produces thyroid hormones, not insulin.'),
  ]),
  'body-016': set('bones around the knee', [
    d('Femur', 'The femur is the thigh bone above the knee; the patella is the kneecap.'),
    d('Tibia', 'The tibia is the larger lower-leg bone below the knee, not the kneecap.'),
    d('Fibula', 'The fibula is the smaller lower-leg bone beside the tibia, not the kneecap.'),
  ]),
  'body-017': set('blood and muscle proteins', [
    d('Myoglobin', 'Myoglobin binds oxygen in muscle cells; hemoglobin carries oxygen in red blood cells.'),
    d('Albumin', 'Albumin is a major blood plasma protein with transport and fluid-balance roles, not the red-cell oxygen-binding protein.'),
    d('Fibrinogen', 'Fibrinogen is a plasma protein used in blood clotting, not oxygen binding in red blood cells.'),
  ]),
  'body-018': set('body systems', [
    d('Digestive system', 'The digestive system breaks down food; it is not the body system primarily responsible for pathogen defense.'),
    d('Skeletal system', 'The skeletal system supports the body and protects organs; it is not the primary pathogen-defense system.'),
    d('Nervous system', 'The nervous system coordinates signals and responses, but it is not the primary system that defends against pathogens.'),
  ], { question:'Which body system is primarily responsible for coordinating immune defense against pathogens?' }),
  'body-019': set('tooth structures', [
    d('Dentin', 'Dentin lies beneath the enamel and forms much of the tooth, but it is not the hard outer covering.'),
    d('Cementum', 'Cementum covers the tooth root, not the outer layer of the crown.'),
    d('Pulp', 'Pulp is the soft inner tissue containing nerves and blood vessels.'),
  ]),
  'body-020': set('organs associated with circulation', [
    d('Heart', 'The heart pumps blood; lymph has no single central pump analogous to the heart.'),
    d('Spleen', 'The spleen filters blood and supports immune functions, but it does not pump lymph through vessels.'),
    d('Lymph node', 'A lymph node filters lymph and supports immune activity; it does not pump lymph through the network.'),
  ]),
};

// Curated curriculum placement for these authored seed records. Chapter IDs
// follow the world chapter sequence; they are not assigned by array position.
const curriculum = {
  'chemistry-001':['molecular-formulas','Chemical formulas',1],
  'chemistry-002':['acids-and-bases','pH and neutral solutions',6],
  'chemistry-003':['atmospheric-chemistry','Gases in Earth’s atmosphere',1],
  'chemistry-004':['element-symbols','Chemical symbols',2],
  'chemistry-005':['atomic-number','Protons and atomic number',2],
  'chemistry-006':['subatomic-particles','Particle charges',1],
  'chemistry-007':['ionic-compounds','Ionic formulas',3],
  'chemistry-008':['reaction-catalysts','Reaction rates and catalysts',5],
  'chemistry-009':['element-symbols','Chemical symbols',2],
  'chemistry-010':['chemical-bonding','Covalent bonds',3],
  'chemistry-011':['element-symbols','Chemical symbols',2],
  'chemistry-012':['ions','Ions and charge',3],
  'chemistry-013':['reaction-products','Acid and carbonate reactions',4],
  'chemistry-014':['common-compounds','Everyday compounds',8],
  'chemistry-015':['atomic-number','Atomic number',2],
  'chemistry-016':['redox-reactions','Oxidation and electron transfer',4],
  'chemistry-017':['noble-gases','Noble gases and light',2],
  'chemistry-018':['periodic-table','Periodic table organization',10],
  'chemistry-019':['molecular-formulas','Molecular formulas',9],
  'chemistry-020':['acids-and-bases','Acidic solutions',6],
  'body-001':['circulation','Heart and circulation',4],
  'body-002':['respiration','Lung gas exchange',6],
  'body-003':['integumentary-system','Skin and body systems',10],
  'body-004':['skeletal-system','Skull and protection',3],
  'body-005':['nervous-system','Brain and spinal cord',7],
  'body-006':['blood','Blood cells and oxygen transport',4],
  'body-007':['digestion','Stomach and digestion',8],
  'body-008':['urinary-system','Kidneys and urine formation',10],
  'body-009':['musculoskeletal-system','Tendons and movement',3],
  'body-010':['musculoskeletal-system','Ligaments and joints',3],
  'body-011':['vision','Iris and light regulation',2],
  'body-012':['digestive-system','Liver and internal organs',10],
  'body-013':['respiration','Airways and breathing',6],
  'body-014':['nervous-system','Neurons and signaling',7],
  'body-015':['endocrine-system','Pancreas and insulin',1],
  'body-016':['skeletal-system','Knee bones',3],
  'body-017':['blood','Hemoglobin and oxygen',4],
  'body-018':['immune-system','Immune defense',9],
  'body-019':['teeth','Tooth structure',3],
  'body-020':['lymphatic-system','Lymphatic circulation',9],
};

for (const [id, [topicId, subtopic, chapterId]] of Object.entries(curriculum)) {
  CHEM_BODY_OPTION_SETS[id] = { ...CHEM_BODY_OPTION_SETS[id], topicId, subtopic, chapterId };
}
