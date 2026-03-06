const DATA = {
  "code": "PS-DC-SV-A2",
  "title": "Escape From the Severed Vault",
  "levels": "5-10",
  "apl": "8",
  "duration": "~2 hrs",
  "players": "3-7",
  "location": "Vault 17, a planetoid in Minethys (third layer of the Tartarean Depths of Carceri)",
  "reward": "One level advancement, up to 2,500 gp, plus magic items found during the adventure.",

  "background": "Javier Mallowmire was once fused with Spooler Bloodbit, a Severed entity, to form a Gestalt One. The Shrouded Vaults forcibly separated them, wiped Javier's memories, and abandoned Vault 17 in Carceri. Javier recovered his memories and hired adventurers to open a portal into the vault; now the party must reunite him with Bloodbit and escape the prison plane before Warden Shax and the plane's own properties trap them forever.",

  "keyFacts": "The vault is in Carceri where teleportation, summoning, and interplanar travel/communication are blocked. Gravity is inverted underground so the surface exit is at the bottom of the facility. The party must build a Cosmic Broadcaster on the surface to contact the Boatman (a Gestalt One mimic-riverboat) for extraction. Warden Shax (a Shator Demodand) continuously summons Kelubar Demodands during the broadcast encounter and cannot be directly fought. This is Part 2 of the Severed Vault series following FR-DC-SV-A1.",

  "scenes": [
    {
      "name": "Call to Action: In the Chains of Carceri",
      "time": "~15 min",
      "goal": "Wake up, break free of anomalous coral, and get oriented in Vault 17.",
      "outcome": "Javier is pulled apart into ribbons and drawn toward the Gestalt Complex, urging the party to find him there."
    },
    {
      "name": "Part 1: Left to Rot",
      "time": "~40 min",
      "goal": "Explore Vault 17 to reunite with the Spooler, find Egox a skull, obtain the control board, and optionally find food/water and books.",
      "outcome": "The party has the Spooler, Egox in a skull, the control board, and optionally food, water, and books. They proceed to the surface."
    },
    {
      "name": "Part 2: The Cosmic Switchboard",
      "time": "~60 min",
      "goal": "Assemble and operate the Cosmic Broadcaster on the planetoid surface to contact the Boatman while fending off Warden Shax's demodand minions.",
      "outcome": "The broadcast reaches the Boatman's target square, he arrives via the River Styx, and the party can escape Carceri."
    },
    {
      "name": "Conclusion: From Distant Shores",
      "time": "~5 min",
      "goal": "Board the Boatman's riverboat and leave Carceri.",
      "outcome": "Characters are returned to any destination on Toril or the Outer Planes. They receive payment and the Severed Village story award."
    },
    {
      "name": "Epilogue: The Cryptohistorian (Optional)",
      "time": "~10 min",
      "goal": "Optionally question the Boatman for extended lore about the Severed, the Gestalt Ones, and the Shrouded Vaults.",
      "outcome": "Players receive deep lore about the setting's history; no mechanical reward."
    }
  ],

  "sceneNotes": [
    {
      "name": "Call to Action: In the Chains of Carceri",
      "time": "~15 min",
      "setting": "Area A — Receiving Room, underground vault lit by a flickering Continual Flame.",
      "trigger": "Javier wakes the party; they are restrained under anomalous coral.",
      "creatures": "Javier Mallowmire (CG halfling patron, no combat statblock).",
      "tactics": "No combat. Players break free with DC 15 Strength (Athletics) checks. DC 12 Wisdom (Medicine) to learn coral is harmless.",
      "loot": "None.",
      "dmnote": "Characters start with 2 levels of Exhaustion (1 from hunger, 1 from thirst) which are removed instantly upon consuming food/water. All nonmagical food and water is spoiled. If characters haven't played Part 1, Javier recaps the story. Once they enter the Central Stairwell, Javier's scars reopen, he unravels into ribbons and is pulled toward the Gestalt Complex."
    },
    {
      "name": "Part 1: Left to Rot",
      "time": "~40 min",
      "setting": "Multiple areas of Vault 17 — Central Stairwell (B), Gestalt Complex (C), Offices (D), General Labs (E), Minor Item Storage (F).",
      "trigger": "The party enters the Central Stairwell and Javier is pulled away as ribbons toward the Spooler.",
      "creatures": "Egox (sentient thoughtform, uses Flameskull statblock once in skull, immune to damage), Spooler Javier Bloodbit (CG Gestalt One, no combat statblock), Astral Thresher (Tail Sweep +11, 19 (3d12) slashing, in Area E if triggered).",
      "tactics": "No standard combat encounters. Area E imaging lab has a transplanar light trap. Area F has a gravity distortion (DC 20 Athletics/Acrobatics or fall 100 ft for 35 (10d6) damage). The Gestalt Complex vault doors require DC 18 Str (Athletics) to open; failure deals 14 (4d6) bludgeoning damage.",
      "loot": "Beads of Nourishment and Refreshment (Area D vending machine), Potion of Climbing (Area E1), Power of Six Gratitude Journal / Enduring Spellbook with Unbreakable property (Area F gravity distortion), Books: Applied Psivoltaics Vol. 3 (Area E2), Matter Undermined x2 (Area D), Perils of Positive Thinking (Area F1), Alchemist's Supplies and Tinker's Tools (Area E1), Control Board (Area E2).",
      "dmnote": "This is a pointcrawl — players can tackle objectives in any order. If players are slow deciders, guide them linearly: follow ribbon trail to C, Spooler directs to B for Egox, Egox directs to F for skull, then to D for food and E for control board. Egox's handout has a hidden trap: attempting to comprehend their knowledge forces a DC 20 Int save or max-HP psychic damage. The Spooler can 'spool' characters through sealed doors as ribbons."
    },
    {
      "name": "Part 2: The Cosmic Switchboard",
      "time": "~60 min",
      "setting": "Surface of the Carcerian planetoid — dry red wasteland with a small zinc shelter, constant dust storm, brightly lit by glowing soil.",
      "trigger": "All three crystal antennas are erected on the surface.",
      "creatures": "Kelubar Demodand (CR 13, continuously resummoned by Shax), Psychic Ghosts: Flameskulls (CR 4), Bulette Pups (CR 2), Aarakocra Aeromancers (CR 4). Warden Shax hovers above and cannot be targeted.",
      "tactics": "Shax summons a new Kelubar Demodand whenever one dies (2 turns later at the most inconvenient position). Demodands focus on subduing weak-looking party members, not antennas, but will include antennas in Spit Acid line attacks. Psychic Ghosts spawn from hostile minds on the switchboard and target Focused creatures but are vulnerable to damage from them. The Spooler uses Respool Life (transfer HP via necrotic damage) and Respool Order (reset initiative) at initiative count 20.",
      "loot": "None additional beyond Part 1 items.",
      "dmnote": "The switchboard grid is 10x10 (squares 1-100). Target square is 75 (or 56 for Weak/Very Weak). DM can fudge unrevealed square contents to control pacing. Mix in Rancid Demodands (Black Pudding) for granular difficulty. Strong/Very Strong parties face Winds of Minethys (+5 DC to Concentration saves). Friendly minds on the grid provide powerful buffs (Bardic Inspiration, temp HP, Mass Heal, etc.). Hostile minds spawn enemies or trigger remote spell attacks from powerful entities (including Orcus's Finger of Death DC 23)."
    },
    {
      "name": "Conclusion: From Distant Shores",
      "time": "~5 min",
      "setting": "Surface of the planetoid, then aboard the Boatman's riverboat on the River Styx.",
      "trigger": "The broadcast reaches the target mind on the switchboard.",
      "creatures": "The Boatman (LG Gestalt One mimic-riverboat, no combat statblock given).",
      "tactics": "No combat. The Boatman arrives via a vertical torrent of Styx-water that incapacitates Shax.",
      "loot": "Egoxopædia (Mimir with Guardian property), 2,500 gp payment from Javier's solicitors, Severed Village story award.",
      "dmnote": "If the entire party died or was knocked unconscious, they fail — Shax imprisons them, Vaults agents eventually negotiate their release with memories wiped. They still receive gold but lose magic items."
    },
    {
      "name": "Epilogue: The Cryptohistorian (Optional)",
      "time": "~10 min",
      "setting": "Captain's Quarters aboard the Boatman's riverboat on the River Styx.",
      "trigger": "The party chooses to question the Boatman during the voyage.",
      "creatures": "The Boatman (provides lore only).",
      "tactics": "No combat. Pure roleplay/lore dump.",
      "loot": "None.",
      "dmnote": "This is entirely optional flavor content covering the Severed's dying universe, the Obyriths, the Beggar's Blood incident, and the current state of the Shattered Vaults' 18+ splinter factions."
    }
  ],

  "npcs": [
    {
      "name": "Javier Mallowmire",
      "statBlock": "No combat statblock / N/A",
      "alignment": "CG",
      "wants": "To reunite with Spooler Bloodbit and reform their Gestalt One identity.",
      "knows": "The layout of Vault 17, the history of the Shrouded Vaults' containment of the Gestalt Ones, and the existence of an entity (Egox) that can help with communications.",
      "voice": "Quiet determination tinged with desperation; speaks simply and directly. Apologetic about putting others at risk.",
      "quote": "\"Hey! Wake up! Don't know how long we've been out, but I'm parched. Get me out, will you?\""
    },
    {
      "name": "Spooler Javier Bloodbit",
      "statBlock": "No combat statblock / N/A",
      "alignment": "CG",
      "wants": "To escape Carceri and rejoin the Gestalt Ones' community with the party's help.",
      "knows": "The nature of the Gestalt Ones, the Beggar's Blood, the existence of the Boatman who can provide interplanar transport, and the existence of Egox.",
      "voice": "Confident and filled with zest for life; speaks with manic energy and warmth. Switches between Javier's tenderness and Bloodbit's boldness.",
      "quote": "\"It's me, sort of. I'm Javier, and I'm Bloodbit, and I'm a third thing: a Gestalt One, greater than the sum of my parts.\""
    },
    {
      "name": "Egox",
      "statBlock": "Flameskull / CR 4 (immune to damage)",
      "alignment": "CN",
      "wants": "To escape Carceri and find a new place to exist; demands a skull vessel immediately.",
      "knows": "Encyclopedic knowledge of the multiverse and outer planes; knows how to build and operate a Cosmic Broadcaster.",
      "voice": "Hyperactive, sassy, and self-important. Speaks in ALL CAPS emphasis. Assumes they're in charge.",
      "quote": "\"GURL! Have we ever! Listen up!!\""
    },
    {
      "name": "Warden Shax",
      "statBlock": "Shator Demodand (does not participate directly in combat) / CR N/A",
      "alignment": "NE",
      "wants": "To keep every creature on his planetoid imprisoned; collects prisoners like stamps.",
      "knows": "That the party is trying to escape; has a seemingly endless supply of bottled demodand minions.",
      "voice": "Imperious, petulant, and bureaucratic. Complains about bereavement costs.",
      "quote": "\"Haven't you heard? This prison belongs to me now. Escaping isn't allowed in my prisons.\""
    },
    {
      "name": "The Boatman",
      "statBlock": "No combat statblock given / N/A",
      "alignment": "LG",
      "wants": "To preserve the Severed's culture as penance for his role in their doom; plies the Styx trading rides for coin, secrets, or favors.",
      "knows": "Extensive history of the Severed, the Obyriths, the Beggar's Blood incident, the Shrouded Vaults' splintering, and the location of the Severed Village (which he will not reveal).",
      "voice": "Cultivates the air of a mysterious sage; speaks in questions. Calm and cryptic.",
      "quote": "\"We are grateful for your service to our people. Far too many choose violence instead. But you must have questions, surely?\""
    }
  ],

  "skillChecks": [
    {
      "location": "Area A — Receiving Room",
      "check": "Str (Athletics)",
      "dc": "15",
      "success": "Break the anomalous coral restraining a creature."
    },
    {
      "location": "Area A — Receiving Room",
      "check": "Wis (Medicine)",
      "dc": "12",
      "success": "Learn the coral grows from the semethereal plane and has no lingering side effects."
    },
    {
      "location": "Area A — Taking Stock",
      "check": "Various (Religion, Arcana, Perception, Medicine/Nature, Medicine/Survival, Nature/Survival, Arcana/Investigation)",
      "dc": "10",
      "success": "Learn key information about the prison plane, inverted gravity, spoiled food, etc."
    },
    {
      "location": "Area B — Central Stairwell",
      "check": "Wis (Saving Throw)",
      "dc": "16",
      "success": "Resist Egox entering the character's mind (character may choose to fail)."
    },
    {
      "location": "Area C — Gestalt Complex Vault Doors",
      "check": "Str (Athletics)",
      "dc": "18",
      "success": "Wrench open the warped vault door. +2 for each additional character. Failure still opens the door but deals 14 (4d6) bludgeoning damage to each participant."
    },
    {
      "location": "Area D — Offices",
      "check": "Wis (Perception)",
      "dc": "18",
      "success": "Find two copies of Matter Undermined."
    },
    {
      "location": "Area D — Offices",
      "check": "Int (check)",
      "dc": "18",
      "success": "Remember not to leave the copies of Matter Undermined behind."
    },
    {
      "location": "Area E2 — Imaging Lab",
      "check": "Wis (Perception)",
      "dc": "13",
      "success": "Find Applied Psivoltaics Vol. 3 and the Control Board. Blinded creatures have disadvantage; creatures that perceived transplanar light auto-succeed."
    },
    {
      "location": "Area F — Minor Item Storage",
      "check": "Str (Athletics) or Dex (Acrobatics)",
      "dc": "20",
      "success": "Grab the rope or vault ledge to avoid falling 100 feet (35 (10d6) damage). DC lowered by up to 10 based on precautions."
    },
    {
      "location": "Area F — Minor Item Storage (Gravity Distortion)",
      "check": "Wis (Perception)",
      "dc": "10",
      "success": "Notice pages from a book in the floating trash ball."
    },
    {
      "location": "Area F — Minor Item Storage (Gravity Distortion)",
      "check": "Str (Athletics)",
      "dc": "15",
      "success": "Pull pages from the trash, which magically repair into the Power of Six Gratitude Journal."
    },
    {
      "location": "Part 2 — Preparation (Interference Effects)",
      "check": "Int (History)",
      "dc": "18",
      "success": "Learn the Grolz Effect interference rule (DC 22 for Strong/Very Strong)."
    },
    {
      "location": "Part 2 — Preparation (Interference Effects)",
      "check": "Int (Arcana)",
      "dc": "18",
      "success": "Learn the Electrojitters interference rule (DC 22 for Strong/Very Strong)."
    },
    {
      "location": "Part 2 — Preparation (Interference Effects)",
      "check": "Int (Religion)",
      "dc": "18",
      "success": "Learn the Sixth Sense interference rule (DC 22 for Strong/Very Strong)."
    },
    {
      "location": "Part 2 — Preparation (Interference Effects)",
      "check": "Int (Nature)",
      "dc": "18",
      "success": "Learn the Biofeedback interference rule (DC 22 for Strong/Very Strong)."
    },
    {
      "location": "Part 2 — Surface (Scan Switchboard)",
      "check": "Wis (Perception)",
      "dc": "10",
      "success": "Reveal the mind at the next square from the current broadcast position; reveal an additional square for every 3 points over the DC."
    },
    {
      "location": "Part 2 — Surface (Operate Control Board)",
      "check": "Spellcasting ability or Int (Arcana)",
      "dc": "0/10/15/20/25",
      "success": "Perform the chosen broadcast operation (Nudge/Flick/Return/Tab/Climb respectively)."
    },
    {
      "location": "Part 2 — Surface (Practical Learning during ritual)",
      "check": "Various Int checks (History, Arcana, Religion, Nature)",
      "dc": "10",
      "success": "Learn an interference effect that was previously unknown or failed during preparation."
    },
    {
      "location": "Handout 1 — Egox Information Overload",
      "check": "Int (Saving Throw)",
      "dc": "20",
      "success": "Take half of max HP as psychic damage instead of full. Gain +10 to Int/Wis checks but take psychic damage equal to amount succeeded by on each success."
    }
  ],

  "magicItems": [
    {
      "name": "Egoxopædia (Guardian Mimir)",
      "rarity": "Rare",
      "attunement": true,
      "summary": "Floating skull device; cast Legend Lore 1/day, answers planar knowledge questions, grants +2 to Initiative rolls (Guardian property)."
    },
    {
      "name": "Power of Six Gratitude Journal (Unbreakable Enduring Spellbook)",
      "rarity": "Common",
      "attunement": false,
      "summary": "Spellbook immune to fire, water, age, and all other destruction until all 1296 spaces are filled; Unbreakable property."
    },
    {
      "name": "Bead of Nourishment",
      "rarity": "Common",
      "attunement": false,
      "summary": "Flavorless gelatinous bead that provides as much nourishment as 1 day of rations when consumed."
    },
    {
      "name": "Bead of Refreshment",
      "rarity": "Common",
      "attunement": false,
      "summary": "Flavorless gelatinous bead that transforms up to a pint of liquid into fresh, cold drinking water."
    },
    {
      "name": "Potion of Climbing",
      "rarity": "Common",
      "attunement": false,
      "summary": "Gain a Climb Speed equal to your Speed for 1 hour with Advantage on Strength (Athletics) checks to climb."
    }
  ],

  "downtime": "Not specified in module.",
  "renown": "Not specified in module.",

  "statBlocks": [
    {
      "name": "Aarakocra Aeromancer",
      "cr": "4",
      "size": "Medium",
      "type": "Elemental",
      "alignment": "Neutral",
      "ac": "16",
      "hp": "66 (12d8 + 12)",
      "speed": "20 ft., Fly 50 ft.",
      "str": "10 (+0)",
      "dex": "16 (+3)",
      "con": "12 (+1)",
      "int": "13 (+1)",
      "wis": "17 (+3)",
      "cha": "12 (+1)",
      "saves": "Dex +5, Wis +5",
      "skills": "Arcana +3, Nature +5, Perception +7",
      "resist": "",
      "immune": "",
      "condImmune": "",
      "senses": "Passive Perception 17",
      "traits": [],
      "actions": [
        {
          "name": "Multiattack",
          "text": "The aarakocra makes two Wind Staff attacks, and it can use Spellcasting to cast Gust of Wind."
        },
        {
          "name": "Spellcasting",
          "text": "The aarakocra casts one of the following spells, requiring no Material components and using Wisdom as the spellcasting ability (spell save DC 13): At will: Elementalism, Gust of Wind, Mage Hand, Message. 1/day: Lightning Bolt."
        },
        {
          "name": "Wind Staff",
          "text": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 120 ft. Hit: 7 (1d8 + 3) Bludgeoning damage plus 11 (2d10) Lightning damage."
        },
        {
          "name": "Feather Fall (Reaction, 1/Day)",
          "text": "The aarakocra casts Feather Fall in response to that spell's trigger, using the same spellcasting ability as Spellcasting."
        }
      ]
    },
    {
      "name": "Bulette Pup",
      "cr": "2",
      "size": "Medium",
      "type": "Monstrosity",
      "alignment": "Unaligned",
      "ac": "16",
      "hp": "45 (6d8 + 18)",
      "speed": "30 ft., Burrow 20 ft.",
      "str": "10 (+0)",
      "dex": "16 (+3)",
      "con": "12 (+1)",
      "int": "13 (+1)",
      "wis": "17 (+3)",
      "cha": "12 (+1)",
      "saves": "Dex +5, Wis +5",
      "skills": "Perception +4",
      "resist": "",
      "immune": "",
      "condImmune": "",
      "senses": "Darkvision 30 ft., Tremorsense 60 ft., Passive Perception 14",
      "traits": [],
      "actions": [
        {
          "name": "Bite",
          "text": "Melee Attack Roll: +5, reach 5 ft. Hit: 14 (2d10 + 3) Piercing damage."
        },
        {
          "name": "Leap (Reaction)",
          "text": "The bulette jumps up to 30 feet by spending 10 feet of movement."
        }
      ]
    },
    {
      "name": "Flameskull",
      "cr": "4",
      "size": "Tiny",
      "type": "Undead",
      "alignment": "Neutral Evil",
      "ac": "13",
      "hp": "40 (9d4 + 18)",
      "speed": "5 ft., Fly 40 ft. (hover)",
      "str": "1 (-5)",
      "dex": "17 (+3)",
      "con": "14 (+2)",
      "int": "16 (+3)",
      "wis": "10 (+0)",
      "cha": "11 (+0)",
      "saves": "",
      "skills": "Arcana +5, Perception +2",
      "resist": "",
      "immune": "Fire, Necrotic, Poison",
      "condImmune": "Charmed, Exhaustion, Frightened, Paralyzed, Poisoned, Prone",
      "senses": "Darkvision 60 ft., Passive Perception 12",
      "traits": [
        {
          "name": "Illumination",
          "text": "The flameskull sheds Bright Light in a 15-foot radius and Dim Light for an additional 15 feet."
        },
        {
          "name": "Magic Resistance",
          "text": "The flameskull has Advantage on saving throws against spells and other magical effects."
        },
        {
          "name": "Undead Restoration",
          "text": "If the flameskull is destroyed, it regains all its Hit Points in 1 hour unless Holy Water is sprinkled on its remains or the Dispel Evil and Good spell is cast on them."
        }
      ],
      "actions": [
        {
          "name": "Multiattack",
          "text": "The flameskull makes two Fire Ray attacks."
        },
        {
          "name": "Fire Ray",
          "text": "Melee or Ranged Attack Roll: +5, reach 5 ft. or range 60 ft. Hit: 13 (3d6 + 3) Fire damage."
        },
        {
          "name": "Spellcasting",
          "text": "The flameskull casts one of the following spells, requiring no Somatic or Material components and using Intelligence as the spellcasting ability (spell save DC 13): At will: Mage Hand. 2/day: Magic Missile (level 2 version). 1/day: Fireball."
        }
      ]
    },
    {
      "name": "Kelubar Demodand",
      "cr": "13",
      "size": "Medium",
      "type": "Fiend",
      "alignment": "Neutral Evil",
      "ac": "18 (natural armor)",
      "hp": "187 (22d8 + 88)",
      "speed": "30 ft., Fly 60 ft.",
      "str": "22 (+6)",
      "dex": "13 (+1)",
      "con": "18 (+4)",
      "int": "14 (+2)",
      "wis": "15 (+2)",
      "cha": "18 (+4)",
      "saves": "Dex +6, Wis +7",
      "skills": "Insight +7",
      "resist": "Cold, Fire",
      "immune": "Acid, Poison",
      "condImmune": "Paralyzed, Poisoned, Restrained",
      "senses": "Darkvision 120 ft., Passive Perception 12",
      "traits": [
        {
          "name": "Acidic Secretions",
          "text": "A creature that touches the kelubar or hits it with a melee attack while within 5 feet of it takes 5 (2d4) acid damage."
        },
        {
          "name": "Boundless Movement",
          "text": "The kelubar ignores difficult terrain, and magical effects can't reduce its speed. It can spend 5 feet of movement to automatically remove the grappled condition from itself."
        },
        {
          "name": "Magic Resistance",
          "text": "The kelubar has advantage on saving throws against spells and other magical effects."
        }
      ],
      "actions": [
        {
          "name": "Multiattack",
          "text": "The kelubar makes two Bite attacks."
        },
        {
          "name": "Bite",
          "text": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 11 (1d10 + 6) piercing damage plus 18 (4d8) acid damage."
        },
        {
          "name": "Spellcasting",
          "text": "The kelubar casts one of the following spells, requiring no material components and using Charisma as the spellcasting ability (spell save DC 17): At Will: Invisibility (self only). 1/day Each: Dispel Magic, Scrying (as an action)."
        },
        {
          "name": "Spit Acid",
          "text": "The kelubar spits acid in a line 60 feet long and 5 feet wide. Each creature in that area must make a DC 17 Dexterity saving throw, taking 27 (6d8) acid damage on a failed save, or half as much damage on a successful one."
        },
        {
          "name": "Summon Demodand (1/Day)",
          "text": "The kelubar has a 40 percent chance of summoning its choice of 1d2 farastu demodands or 1 kelubar demodand. A summoned demodand appears in an unoccupied space within 60 feet of the kelubar, acts as an ally of the kelubar, and can't summon other demodands. It remains for 1 minute, until it or the kelubar dies, or until the kelubar dismisses it as an action."
        },
        {
          "name": "Nauseating Fog (Bonus Action, Recharge 6)",
          "text": "The kelubar magically creates a cloud of greenish fog that fills a 20-foot-radius sphere centered on a point within 120 feet of itself. The cloud remains for 1 minute or until the kelubar uses this bonus action again. The cloud is heavily obscured and difficult terrain. Any creature that starts its turn in the cloud or enters the cloud for the first time on a turn must succeed on a DC 17 Constitution saving throw or have the poisoned condition until the end of its next turn."
        }
      ]
    },
    {
      "name": "Rancid Demodand (Black Pudding)",
      "cr": "4",
      "size": "Large",
      "type": "Ooze",
      "alignment": "Unaligned",
      "ac": "7",
      "hp": "68 (8d10 + 24)",
      "speed": "20 ft., Climb 20 ft.",
      "str": "16 (+3)",
      "dex": "5 (-3)",
      "con": "16 (+3)",
      "int": "1 (-5)",
      "wis": "6 (-2)",
      "cha": "1 (-5)",
      "saves": "",
      "skills": "",
      "resist": "",
      "immune": "Acid, Cold, Lightning, Slashing",
      "condImmune": "Charmed, Deafened, Exhaustion, Frightened, Grappled, Prone, Restrained",
      "senses": "Blindsight 60 ft., Passive Perception 8",
      "traits": [
        {
          "name": "Amorphous",
          "text": "The pudding can move through a space as narrow as 1 inch without expending extra movement to do so."
        },
        {
          "name": "Corrosive Form",
          "text": "A creature that hits the pudding with a melee attack roll takes 4 (1d8) Acid damage. Nonmagical ammunition is destroyed immediately after hitting the pudding and dealing any damage. Any nonmagical weapon takes a cumulative -1 penalty to attack rolls immediately after dealing damage to the pudding and coming into contact with it. The weapon is destroyed if the penalty reaches -5. The penalty can be removed by casting the Mending spell on the weapon."
        },
        {
          "name": "Spider Climb",
          "text": "The pudding can climb difficult surfaces, including along ceilings, without needing to make an ability check."
        }
      ],
      "actions": [
        {
          "name": "Dissolving Pseudopod",
          "text": "Melee Attack Roll: +5, reach 10 ft. Hit: 17 (4d6 + 3) Acid damage. Nonmagical armor worn by the target takes a -1 penalty to the AC it offers. The armor is destroyed if the penalty reduces its AC to 10. The penalty can be removed by casting the Mending spell on the armor."
        },
        {
          "name": "Split (Reaction)",
          "text": "Trigger: While the pudding is Large or Medium and has 10+ Hit Points, it becomes Bloodied or is subjected to Lightning or Slashing damage. Response: The pudding splits into two new Black Puddings. Each new pudding is one size smaller than the original pudding and acts on its Initiative. The original pudding's Hit Points are divided evenly between the new puddings (round down)."
        }
      ]
    }
  ],

  "bonusA": {
    "title": "Not Used",
    "timing": "N/A",
    "trigger": "N/A",
    "goal": "N/A",
    "failEffect": "N/A",
    "creatures": "None.",
    "mechanics": "N/A",
    "loot": "None.",
    "dmnote": "N/A",
    "chaseComplications": []
  },

  "bonusB": {
    "title": "Not Used",
    "timing": "N/A",
    "trigger": "N/A",
    "goal": "N/A",
    "failPenalty": "None.",
    "creatures": "None.",
    "mechanics": "N/A",
    "loot": "None.",
    "failReward": "None.",
    "dmnote": "N/A"
  }
};

module.exports = DATA;