const DATA = {
  code: "CCC-SKULL01-01",
  title: "A Murder Most Foul",
  levels: "5-10",
  apl: "7",
  duration: "~4 hrs",
  players: "3-7",
  location: "Mulmaster",
  reward: "4 advancement checkpoints and 4 treasure checkpoints",

  background: "In the devastated city of Mulmaster, the nephew of Zor Doran Hightower has been found brutally murdered in the sewers beneath the city. The noble houses of the Blades are pointing fingers at one another while a shadowy new crime network called the Silver Skulls has emerged, employing Thayan wizards to further their agenda. The party is hired by Zor Hightower to investigate the murder scene in the sewers and follow clues to uncover the truth.",

  keyFacts: "The Silver Skulls are a new crime network operating in Mulmaster; their leader possesses an ability that induces paranoia in a several-mile radius within the city walls. Ravek Tillancer, the Thayan wizard encountered in the sewers, was hired by the Silver Skulls to recover a lost satchel (the Heward's Handy Haversack in the cistern). The adventure is the first in a series, with the mystery continuing in SKULL01-02. The Silver Skulls' leader Arturo appears at the conclusion and promises to contact the party later.",

  scenes: [
    {
      name: "Part 1: The Wave and Wink",
      time: "~20 min",
      goal: "Meet Zor Doran Hightower and learn about the murder of his nephew",
      outcome: "Party receives directions to the sewer cistern where the body was found and is asked to investigate and report back by midnight"
    },
    {
      name: "Part 2, Section 1: The Cistern (Froghemoth)",
      time: "~25 min",
      goal: "Investigate the cistern where the body was found and recover any clues",
      outcome: "Party fights a froghemoth lurking in the cistern and recovers a Heward's Handy Haversack containing silver skull tokens and a potion of healing"
    },
    {
      name: "Part 2a: Fancy Meeting You Here (Thayan Encounter)",
      time: "~25 min",
      goal: "Confront or evade Ravek Tillancer and his veteran escort who are also searching the sewers",
      outcome: "Party defeats or drives off the Thayan group and recovers a fake Brotherhood of the Cloak token and a scroll with directions to the Silver Skulls warehouse"
    },
    {
      name: "Part 2b: Waylaid Again (Refugee Encounter)",
      time: "~25 min",
      goal: "Interact with the sewer refugees and learn additional information about suspicious activity",
      outcome: "Party learns about red-robed figures, shadowy figures with silver skull armbands, and increased assassin activity; may earn the Friend of the Fallen story award"
    },
    {
      name: "Part 3, Section 1: Trust the Guards?",
      time: "~25 min",
      goal: "Navigate past or deal with the City Guard patrol near the Silver Skulls warehouse",
      outcome: "Party either sneaks past, talks their way through, bribes, or fights the City Guard to reach the warehouse"
    },
    {
      name: "Part 3, Section 2: Agents of the Skull",
      time: "~25 min",
      goal: "Infiltrate the Silver Skulls warehouse and confront their agents",
      outcome: "Party encounters Arturo the master thief and his spies; combat or negotiation ensues before Arturo escapes"
    },
    {
      name: "Conclusion",
      time: "~10 min",
      goal: "Report findings to Zor Hightower at the Wave and Wink",
      outcome: "Arturo contacts the party promising a future meeting; the mystery continues in SKULL01-02"
    }
  ],

  sceneNotes: [
    {
      name: "Part 1: The Wave and Wink",
      time: "~20 min",
      setting: "The Wave and Wink dance hall, a bawdy tavern near the Tower of the Blades in northern Mulmaster",
      trigger: "The party arrives at the tavern following their adventure hook",
      creatures: "Zor Doran Hightower (quest giver, noble contact)",
      tactics: "Hightower is forthcoming with information but is prideful and agitated. He provides directions to the sewer cistern.",
      loot: "None",
      dmnote: "Hightower asks the party to report back at midnight. Emphasize his frustration with the City Guard's incompetence and his suspicion of the Thayans and other Blade houses."
    },
    {
      name: "Part 2, Section 1: The Cistern (Froghemoth)",
      time: "~25 min",
      setting: "A large cylindrical cistern deep in the sewers, crisscrossed by walkways above murky 2-foot-deep water; light filters from a rusted grate above",
      trigger: "A character enters the water or the last party member reaches the center of the cistern walkway",
      creatures: "1 Froghemoth (CR 10), lurking submerged near the western wall",
      tactics: "The froghemoth attacks from underwater, using tentacles to drag victims under and drown them. Reference underwater combat rules from the Player's Handbook.",
      loot: "Heward's Handy Haversack containing two dozen silver skull tokens and a potion of healing, found in a rucksack 20 ft underwater near the eastern wall",
      dmnote: "Passive Perception DC 15 to spot the coins and rucksack underwater. The middle 5 feet of the deeper tunnels is difficult terrain at 2 feet of water depth."
    },
    {
      name: "Part 2a: Fancy Meeting You Here (Thayan Encounter)",
      time: "~25 min",
      setting: "A tunnel intersection deeper in the sewers, lit by a torch wedged into the wall",
      trigger: "Party hears splashing and low voices (passive Perception DC 20 to hear early); encounter begins when the party rounds the curve",
      creatures: "Ravek Tillancer (Conjurer, CR 6) and 5 Veterans (CR 3 each)",
      tactics: "Ravek begins with mage armor active. He uses fireball on clustered parties, otherwise uses veterans as cover for ranged spell attacks. Veterans form a defensive line focusing on 1-2 party members. Ravek flees below half HP using benign transportation and misty step. Veterans fight to the death.",
      loot: "Fake Brotherhood of the Cloak token (DC 15 Intelligence/Investigation to identify as fake); scroll with directions and crude map to the Silver Skulls warehouse marked with a silver circle and X",
      dmnote: "DC 17 Intelligence (History/Arcana) to identify the Thayan conjuration tattoo. DC 12 Wisdom (Insight) to detect Ravek's lie about being sent by the City Guard. DC 17 Charisma (Intimidation/Persuasion) to make him back down. Can be set before or after the cistern encounter."
    },
    {
      name: "Part 2b: Waylaid Again (Refugee Encounter)",
      time: "~25 min",
      setting: "A junction where smaller 5-foot tunnels meet the larger main tunnel, in shallower water sections on the way back to the surface",
      trigger: "Refugees approach cautiously from a branching tunnel as the party backtracks",
      creatures: "Zavian Hauhtaon (noble refugee, leader) and 12 commoners (refugees, non-combatant)",
      tactics: "This is NOT a combat encounter. If attacked, most refugees flee; Zavian stands to fight. Use commoner stats if combat occurs.",
      loot: "None (information only)",
      dmnote: "DC 13 Charisma (Persuasion) to convince Zavian to share news. Befriending Zavian earns the Friend of the Fallen story award. Encourage roleplay about Phlan and Hillsfar if applicable."
    },
    {
      name: "Part 3, Section 1: Trust the Guards?",
      time: "~25 min",
      setting: "Near the southwestern city wall of Mulmaster at night, near a watch tower overlooking an abandoned warehouse district; elemental flames provide ambient light",
      trigger: "As the party approaches the warehouse or tower, 8 guards and 1 knight exit the tower",
      creatures: "8 Guards (CR 1/8) and 1 Knight (CR 3, captain)",
      tactics: "The knight inspires his guardsmen via Leadership. All attempt to flee for reinforcements if reduced below half health.",
      loot: "None",
      dmnote: "DC 18 group Dexterity (Stealth) check to avoid detection. DC 16 Charisma (Persuasion) if truthful, DC 20 Charisma (Deception/Intimidation) otherwise, or a 20 gp bribe to avoid combat. Use false positive passive Perception checks to build paranoia from the Silver Skulls leader's supernatural ability."
    },
    {
      name: "Part 3, Section 2: Agents of the Skull",
      time: "~25 min",
      setting: "A decrepit warehouse with broken windows and an overgrown yard, marked with a dirty silver circle with an X on the sign",
      trigger: "Party enters the warehouse; a Silver Skull agent approaches through the opposite doorway",
      creatures: "Arturo (Master Thief, CR 5) and 5 Spies (CR 1 each)",
      tactics: "Agents do not want to fight. All fight until half HP then attempt to flee. Arturo tries to bargain after losing 20 HP. He uses cunning action disengage/dash and a spell scroll of teleport as a last resort. Encourage players to listen to Arturo.",
      loot: "None specified",
      dmnote: "DC 17 Wisdom (Perception) to notice cobwebs on rafters and movement in the adjoining room. This is not meant to be a challenging fight; the agents prefer negotiation."
    },
    {
      name: "Conclusion",
      time: "~10 min",
      setting: "The street outside the Wave and Wink, then inside the tavern",
      trigger: "Party heads back for their midnight meeting with Zor Hightower",
      creatures: "Arturo (briefly, from shadows) and Zor Doran Hightower",
      tactics: "Arturo reveals himself from the shadows, introduces himself, and promises future contact before slipping away.",
      loot: "None",
      dmnote: "This sets up the sequel SKULL01-02. Let the party relay all their findings to Hightower."
    }
  ],

  npcs: [
    {
      name: "Zor Doran Hightower",
      statBlock: "Noble (non-combat NPC) / CR N/A",
      alignment: "LN",
      wants: "To find the truth behind his nephew's murder and bring justice to those responsible",
      knows: "The location in the sewers where his nephew's body was found; that the City Guard lost the body; that Thayan presence has increased in Mulmaster; that the noble houses are jockeying for power",
      voice: "Deep baritone, prideful and regal, struggles to blend in with common folk, passionate about family honor",
      quote: "My name is Zor Doran Hightower. I presume you are here to help me?"
    },
    {
      name: "Ravek Tillancer",
      statBlock: "Conjurer / CR 6",
      alignment: "NE",
      wants: "To recover the lost satchel (Heward's Handy Haversack) from the sewers for the Silver Skulls",
      knows: "He was hired by the Silver Skulls; the haversack was lost in the sewers; he carries a fake Brotherhood of the Cloak token",
      voice: "Guarded and evasive, claims to work for the greater good, willing to be intimidated into backing down",
      quote: "I am here for the greater good. The City Guard asked me to look into this murder."
    },
    {
      name: "Zavian Hauhtaon",
      statBlock: "Commoner / CR 0",
      alignment: "NG",
      wants: "To protect his fellow refugees and survive in the sewers after the fall of his noble house",
      knows: "Red-robed Thayans have been prowling the sewers; shadowy figures wear silver skull armbands; many Blades have been hiring assassins; increased traffic by unsavory groups",
      voice: "Haggard and worn but dignified, speaks softly and cautiously, protective of his people",
      quote: "Pardon me... How many Blades are left now?"
    },
    {
      name: "Arturo",
      statBlock: "Master Thief / CR 5",
      alignment: "NE",
      wants: "To lead the Silver Skulls and establish a new crime network in Mulmaster; to assess the party as potential assets",
      knows: "The answers the party seeks about the murder; the operations of the Silver Skulls",
      voice: "Confident, calculating, speaks from the shadows, admires persistence",
      quote: "I admire your persistence. You may call me Arturo; I believe I have the answers that you seek."
    }
  ],

  skillChecks: [
    {
      location: "Part 2, Section 1: The Cistern",
      check: "Wis (Perception)",
      dc: "15",
      success: "Spot the light reflecting off coins and a rucksack 20 ft underwater near the eastern wall"
    },
    {
      location: "Part 2a: Thayan Encounter",
      check: "Wis (Perception) (passive)",
      dc: "20",
      success: "Hear splashing and low voices far enough away to alert the party to proceed quietly"
    },
    {
      location: "Part 2a: Thayan Encounter",
      check: "Int (History) or Int (Arcana)",
      dc: "17",
      success: "Identify the Thayan wizard's tattoo as pertaining to the school of conjuration"
    },
    {
      location: "Part 2a: Thayan Encounter",
      check: "Dex (Stealth) (group)",
      dc: "15",
      success: "Approach the Thayan group without alerting the veterans to form ranks"
    },
    {
      location: "Part 2a: Thayan Encounter",
      check: "Wis (Insight)",
      dc: "12",
      success: "Confirm that Ravek's claim the City Guard sent him is a lie"
    },
    {
      location: "Part 2a: Thayan Encounter",
      check: "Cha (Intimidation) or Cha (Persuasion)",
      dc: "17",
      success: "Convince Ravek to back down and allow the party to also search the area"
    },
    {
      location: "Part 2a: Thayan Encounter (Loot)",
      check: "Int (Investigation)",
      dc: "15",
      success: "Identify the Brotherhood of the Cloak membership token as a fake"
    },
    {
      location: "Part 2b: Refugee Encounter",
      check: "Cha (Persuasion)",
      dc: "13",
      success: "Convince Zavian to share what little news he has with the party"
    },
    {
      location: "Part 3: City Guard Encounter",
      check: "Dex (Stealth) (group)",
      dc: "18",
      success: "Shield the party from view of the guardsmen in the shadows"
    },
    {
      location: "Part 3: City Guard Encounter",
      check: "Cha (Persuasion)",
      dc: "16",
      success: "Talk past the guards if being truthful about reasons for being in the area"
    },
    {
      location: "Part 3: City Guard Encounter",
      check: "Cha (Deception) or Cha (Intimidation)",
      dc: "20",
      success: "Convince the guards to leave the party be if not being truthful"
    },
    {
      location: "Part 3: Agents of the Skull (Warehouse)",
      check: "Wis (Perception)",
      dc: "17",
      success: "Notice cobwebs on the rafters and movement in the adjoining room"
    }
  ],

  magicItems: [
    {
      name: "Heward's Handy Haversack",
      rarity: "Rare",
      attunement: false,
      summary: "Backpack with a central pouch (8 cubic ft / 80 lbs) and two side pouches (2 cubic ft / 20 lbs each); always weighs 5 lbs; retrieving an item requires an action and the desired item is always on top."
    }
  ],

  downtime: "Not specified in module.",
  renown: "Not specified in module.",

  statBlocks: [
    {
      name: "Froghemoth",
      cr: "10",
      size: "Huge",
      type: "monstrosity",
      alignment: "unaligned",
      ac: "14 (Natural Armor)",
      hp: "184 (16d12 + 80)",
      speed: "30 ft., swim 30 ft.",
      str: "23 (+6)",
      dex: "13 (+1)",
      con: "20 (+5)",
      int: "2 (-4)",
      wis: "12 (+1)",
      cha: "5 (-3)",
      saves: "Con +9, Wis +5",
      skills: "Perception +9, Stealth +5",
      resist: "fire, lightning",
      immune: "",
      condImmune: "",
      senses: "darkvision 60 ft., passive Perception 19",
      traits: [
        {
          name: "Amphibious",
          text: "The froghemoth can breathe air and water."
        },
        {
          name: "Shock Susceptibility",
          text: "If the froghemoth takes lightning damage, it suffers several effects until the end of its next turn: its speed is halved, it takes a -2 penalty to AC and Dexterity saving throws, it can't use reactions or Multiattack, and on its turn, it can use either an action or a bonus action, not both."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The froghemoth makes two attacks with its tentacles. It can also use its tongue or bite."
        },
        {
          name: "Tentacle",
          text: "Melee Weapon Attack: +10 to hit, reach 20 ft., one target. Hit: 19 (3d8 + 6) bludgeoning damage, and the target is grappled (escape DC 16) if it is a Huge or smaller creature. Until the grapple ends, the froghemoth can't use this tentacle on another target. The froghemoth has four tentacles."
        },
        {
          name: "Bite",
          text: "Melee Weapon Attack: +10 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage, and the target is swallowed if it is a Medium or smaller creature. A swallowed creature is blinded and restrained, has total cover against attacks and other effects outside the froghemoth, and takes 10 (3d6) acid damage at the start of each of the froghemoth's turns. The froghemoth's gullet can hold up to two creatures at a time. If the froghemoth takes 20 damage or more on a single turn from a creature inside it, the froghemoth must succeed on a DC 20 Constitution saving throw at the end of that turn or regurgitate all swallowed creatures, each of which falls prone in a space within 10 feet of the froghemoth. If the froghemoth dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 10 feet of movement, exiting prone."
        },
        {
          name: "Tongue",
          text: "The froghemoth targets one Medium or smaller creature that it can see within 20 feet of it. The target must make a DC 18 Strength saving throw. On a failed save, the target is pulled into an unoccupied space within 5 feet of the froghemoth, and the froghemoth can make a bite attack against it as a bonus action."
        }
      ]
    },
    {
      name: "Conjurer",
      cr: "6",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "12 (15 with mage armor)",
      hp: "40 (9d8)",
      speed: "30 ft.",
      str: "9 (-1)",
      dex: "14 (+2)",
      con: "11 (+0)",
      int: "17 (+3)",
      wis: "12 (+1)",
      cha: "11 (+0)",
      saves: "Int +6, Wis +4",
      skills: "Arcana +6, History +6",
      resist: "",
      immune: "",
      condImmune: "blinded",
      senses: "passive Perception 11",
      traits: [
        {
          name: "Spellcasting",
          text: "The conjurer is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The conjurer has the following wizard spells prepared: Cantrips (at will): acid splash, mage hand, poison spray, prestidigitation; 1st level (4 slots): mage armor, magic missile, unseen servant*; 2nd level (3 slots): cloud of daggers*, misty step*, web*; 3rd level (3 slots): fireball, stinking cloud*; 4th level (3 slots): Evard's black tentacles*, stoneskin; 5th level (2 slots): cloudkill*, conjure elemental*. *Conjuration spell of 1st level or higher."
        },
        {
          name: "Benign Transportation (Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher)",
          text: "As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
        }
      ],
      actions: [
        {
          name: "Dagger",
          text: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage."
        }
      ]
    },
    {
      name: "Evoker",
      cr: "6",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "12 (15 with mage armor)",
      hp: "66 (12d8 + 12)",
      speed: "30 ft.",
      str: "9 (-1)",
      dex: "14 (+2)",
      con: "12 (+1)",
      int: "17 (+3)",
      wis: "12 (+1)",
      cha: "11 (+0)",
      saves: "Int +7, Wis +5",
      skills: "Arcana +7, History +7",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 11",
      traits: [
        {
          name: "Spellcasting",
          text: "The evoker is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The evoker has the following wizard spells prepared: Cantrips (at will): fire bolt*, light*, prestidigitation, ray of frost*; 1st level (4 slots): burning hands*, mage armor, magic missile*; 2nd level (3 slots): mirror image, misty step, shatter*; 3rd level (3 slots): counterspell, fireball*, lightning bolt*; 4th level (3 slots): ice storm*, stoneskin; 5th level (2 slots): Bigby's hand*, cone of cold*; 6th level (1 slot): chain lightning*, wall of ice*. *Evocation spell."
        },
        {
          name: "Sculpt Spells",
          text: "When the evoker casts an evocation spell that forces other creatures it can see to make a saving throw, it can choose a number of them equal to 1 + the spell's level. These creatures automatically succeed on their saving throws against the spell. If a successful save means a chosen creature would take half damage from the spell, it instead takes no damage from it."
        }
      ],
      actions: [
        {
          name: "Quarterstaff",
          text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) bludgeoning damage, or 3 (1d8 - 1) bludgeoning damage if used with two hands."
        }
      ]
    },
    {
      name: "Veteran",
      cr: "3",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "17 (splint)",
      hp: "58 (9d8 + 18)",
      speed: "30 ft.",
      str: "16 (+3)",
      dex: "13 (+1)",
      con: "14 (+2)",
      int: "10 (+0)",
      wis: "11 (+0)",
      cha: "10 (+0)",
      saves: "",
      skills: "Athletics +5, Perception +2",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 12",
      traits: [],
      actions: [
        {
          name: "Multiattack",
          text: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack."
        },
        {
          name: "Longsword",
          text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands."
        },
        {
          name: "Shortsword",
          text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage."
        },
        {
          name: "Heavy Crossbow",
          text: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage."
        }
      ]
    },
    {
      name: "Champion",
      cr: "9",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "18 (plate)",
      hp: "143 (22d8 + 44)",
      speed: "30 ft.",
      str: "20 (+5)",
      dex: "15 (+2)",
      con: "14 (+2)",
      int: "10 (+0)",
      wis: "14 (+2)",
      cha: "12 (+1)",
      saves: "Str +9, Con +6",
      skills: "Athletics +9, Intimidation +5, Perception +6",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 16",
      traits: [
        {
          name: "Brave",
          text: "The champion has advantage on saving throws against being frightened."
        },
        {
          name: "Indomitable (2/Day)",
          text: "The champion rerolls a failed saving throw."
        },
        {
          name: "Second Wind (Recharges after a Short or Long Rest)",
          text: "As a bonus action, the champion can regain 20 hit points."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The champion makes three attacks with its greatsword or its shortbow."
        },
        {
          name: "Greatsword",
          text: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more than half of its total hit points remaining."
        },
        {
          name: "Shortbow",
          text: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage, plus 7 (2d6) piercing damage if the champion has more than half of its total hit points remaining."
        }
      ]
    },
    {
      name: "Knight",
      cr: "3",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "18 (plate)",
      hp: "52 (8d8 + 16)",
      speed: "30 ft.",
      str: "16 (+3)",
      dex: "11 (+0)",
      con: "14 (+2)",
      int: "11 (+0)",
      wis: "11 (+0)",
      cha: "15 (+2)",
      saves: "Con +6, Wis +2",
      skills: "",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        {
          name: "Brave",
          text: "The knight has advantage on saving throws against being frightened."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The knight makes two melee attacks."
        },
        {
          name: "Greatsword",
          text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage."
        },
        {
          name: "Heavy Crossbow",
          text: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage."
        },
        {
          name: "Leadership (Recharges after a Short or Long Rest)",
          text: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated."
        },
        {
          name: "Parry (Reaction)",
          text: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon."
        }
      ]
    },
    {
      name: "Guard",
      cr: "1/8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "16 (chain shirt, shield)",
      hp: "11 (2d8 + 2)",
      speed: "30 ft.",
      str: "13 (+1)",
      dex: "12 (+1)",
      con: "12 (+1)",
      int: "10 (+0)",
      wis: "11 (+0)",
      cha: "10 (+0)",

module.exports = DATA;