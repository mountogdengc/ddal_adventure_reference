const DATA = {
  code: "CCC-SKULL01-01",
  title: "A Murder Most Foul",
  levels: "5-10",
  apl: "7",
  duration: "~4 hrs",
  players: "3-7",
  location: "Mulmaster",
  reward: "4 advancement checkpoints and 4 treasure checkpoints",

  background: "In the devastated city of Mulmaster, the nephew of Zor Doran Hightower has been found brutally murdered in the sewers. The noble houses of the Blades are at each other's throats with accusations while a mysterious new criminal organization called the Silver Skulls operates in the shadows, and Thayan Red Wizards have increased their presence in the city. The party is hired by Zor Hightower at the Wave and Wink tavern to investigate the murder scene and uncover the truth.",

  keyFacts: "The Silver Skulls are a new crime network operating in Mulmaster; their leader can induce a sensation of paranoia in a several-mile radius. A Thayan conjurer named Ravek Tillancer was hired by the Silver Skulls to recover a haversack lost in the sewers. The Silver Skulls' leader is named Arturo (a master thief) and operates from an abandoned warehouse marked with a silver circle crossed by an 'X'. This is the first module in the Silver Skulls Legacy series, continuing in SKULL01-02.",

  scenes: [
    {
      name: "Part 1: The Wave and Wink",
      time: "~20 min",
      goal: "Meet Zor Doran Hightower and learn about the murder of his nephew",
      outcome: "Party receives directions to the sewer cistern where the body was found and agrees to investigate and report back by midnight"
    },
    {
      name: "Part 2 Section 1: The Cistern - Froghemoth",
      time: "~25 min",
      goal: "Investigate the cistern where the body was found and recover evidence",
      outcome: "Party defeats the froghemoth and recovers a Heward's Handy Haversack containing silver skull tokens and a potion of healing"
    },
    {
      name: "Part 2a: Fancy Meeting You Here - Thayan Encounter",
      time: "~25 min",
      goal: "Deal with Ravek Tillancer and his veterans who are also searching the sewers",
      outcome: "Party defeats or drives off the Thayans and recovers a fake Brotherhood of the Cloak token and a scroll with directions to a warehouse"
    },
    {
      name: "Part 2b: Waylaid Again - Refugee Encounter",
      time: "~25 min",
      goal: "Interact with sewer refugees led by Zavian Hauhtaon and gather intelligence",
      outcome: "Party learns about increased Thayan and Silver Skull activity in the sewers; may earn Friend of the Fallen story award"
    },
    {
      name: "Part 3 Section 1: Trust the Guards?",
      time: "~25 min",
      goal: "Navigate past the City Guard near the Silver Skulls warehouse",
      outcome: "Party either sneaks past, talks their way through, bribes, or fights the City Guard patrol"
    },
    {
      name: "Part 3 Section 2: Agents of the Skull",
      time: "~25 min",
      goal: "Infiltrate the Silver Skulls warehouse and confront their agents",
      outcome: "Party encounters Arturo and Silver Skull spies; Arturo flees and promises to contact them later"
    },
    {
      name: "Conclusion",
      time: "~10 min",
      goal: "Report findings to Zor Hightower at the Wave and Wink",
      outcome: "Party shares what they learned; the mystery continues in SKULL01-02"
    }
  ],

  sceneNotes: [
    {
      name: "Part 1: The Wave and Wink",
      time: "~20 min",
      setting: "The Wave and Wink, a bawdy dance hall near the Tower of the Blades in northern Mulmaster",
      trigger: "Party arrives at the tavern and approaches Zor Hightower",
      creatures: "Zor Doran Hightower (noble, quest giver)",
      tactics: "Hightower is trying to be covert but fails at blending in. He is prideful but caring and driven by devotion to his family.",
      loot: "Directions to the sewer cistern where the body was found",
      dmnote: "Hightower is frustrated with the incompetent City Guard who lost his nephew's body. He asks the party to return by midnight."
    },
    {
      name: "Part 2 Section 1: The Cistern - Froghemoth",
      time: "~25 min",
      setting: "A large cylindrical cistern in the sewers beneath Mulmaster, crisscrossed by walkways above murky 2-foot-deep water",
      trigger: "A character enters the water or the last party member reaches the center of the cistern walkway",
      creatures: "1 froghemoth (CR 10) lurking submerged near the western wall",
      tactics: "The froghemoth attacks while submerged, uses tentacle attacks to drag victims underwater to drown them. Reference underwater combat rules in PHB.",
      loot: "Heward's Handy Haversack containing two dozen silver skull tokens and a potion of healing, found in a rucksack 20 ft below the water surface near the eastern wall",
      dmnote: "Passive Perception DC 15 to spot the coins and rucksack underwater. The middle 5 feet of tunnels approaching the cistern is difficult terrain due to 2-foot-deep water."
    },
    {
      name: "Part 2a: Fancy Meeting You Here - Thayan Encounter",
      time: "~25 min",
      setting: "A sewer tunnel intersection deeper in the sewers or on the way back to the surface",
      trigger: "Party hears splashing and low voices (passive Perception DC 20 to hear early); encountering the Thayan search party",
      creatures: "Ravek Tillancer (conjurer, CR 6) and 5 veterans (CR 3 each)",
      tactics: "Ravek begins with mage armor active. If party is clustered, opens with fireball. Uses veterans as cover for ranged spell attacks. Veterans form defensive line focusing on 1-2 party members. Ravek flees below half HP using benign transportation and misty step.",
      loot: "Fake Brotherhood of the Cloak membership token (DC 15 Intelligence/Investigation to identify as fake); scroll with directions and crude map to Silver Skulls warehouse",
      dmnote: "DC 17 Intelligence (History or Arcana) to identify the conjuration school tattoo. DC 12 Wisdom (Insight) reveals Ravek's lie about being sent by the City Guard. DC 17 Charisma (Intimidation or Persuasion) to convince him to back down."
    },
    {
      name: "Part 2b: Waylaid Again - Refugee Encounter",
      time: "~25 min",
      setting: "A tunnel juncture where smaller 5-ft tunnels join the larger main tunnel, in the shallower sections",
      trigger: "Refugees approach cautiously from a branching tunnel as the party passes",
      creatures: "Zavian Hauhtaon (disgraced noble) and 12 commoners (refugees)",
      tactics: "Not meant to be combat. If attacked, most flee; Zavian stands and fights to protect his friends. Use commoner stats.",
      loot: "Information about Thayan and Silver Skull activity in the sewers",
      dmnote: "DC 13 Charisma (Persuasion) to convince Zavian to share information. Befriending Zavian earns the Friend of the Fallen story award. Encourage roleplay about events in Phlan and Hillsfar."
    },
    {
      name: "Part 3 Section 1: Trust the Guards?",
      time: "~25 min",
      setting: "Outer edge of Mulmaster near the city walls, near a watch tower and the Silver Skulls warehouse, at night",
      trigger: "Party approaches either the warehouse or the tower, causing 8 guards and 1 knight to exit the tower",
      creatures: "8 guards (CR 1/8 each) and 1 knight (CR 3) - City Guard patrol",
      tactics: "The knight inspires his guardsmen with Leadership. All attempt to flee for reinforcements if reduced below half health.",
      loot: "None.",
      dmnote: "DC 18 group Dexterity (Stealth) to avoid detection. DC 16 Charisma (Persuasion) if truthful, DC 20 Charisma (Deception or Intimidation) otherwise, or a 20 gp bribe to avoid combat. Use paranoia effects: false passive perception checks, phantom sounds and sights from the Silver Skulls leader's ability."
    },
    {
      name: "Part 3 Section 2: Agents of the Skull",
      time: "~25 min",
      setting: "An abandoned warehouse on the outskirts of Mulmaster with a silver circle 'X' sign",
      trigger: "Party enters the warehouse; a Silver Skull agent approaches through the opposite door",
      creatures: "Arturo (master thief, CR 5) and 5 spies (CR 1 each) - Silver Skull agents",
      tactics: "Not meant to be a challenging fight. Agents fight to half HP then flee. Arturo tries to bargain after losing 20 HP. He flees below half HP using cunning action disengage/dash and a spell scroll of teleport as last resort.",
      loot: "None specified.",
      dmnote: "DC 17 Wisdom (Perception) to notice cobwebs on rafters and movement in the adjoining room. Arturo reappears outside afterward to introduce himself and promise future contact."
    },
    {
      name: "Conclusion",
      time: "~10 min",
      setting: "Back at the Wave and Wink tavern",
      trigger: "Party returns to meet Zor Hightower at midnight as agreed",
      creatures: "Zor Doran Hightower",
      tactics: "N/A",
      loot: "None.",
      dmnote: "The mystery continues in SKULL01-02. Allow the party to share all they have learned."
    }
  ],

  npcs: [
    {
      name: "Zor Doran Hightower",
      statBlock: "Noble (not specified) / CR N/A",
      alignment: "LN",
      wants: "To find out who murdered his nephew and bring justice for his family",
      knows: "The location where his nephew's body was found in the sewers; the City Guard lost the body; there's increased Thayan presence in Mulmaster; the Blade houses are vying for power post-devastation",
      voice: "Deep baritone, prideful and regal, tries to be covert but can't help his noble bearing. Caring about family above all.",
      quote: "My name is Zor Doran Hightower. I presume you are here to help me?"
    },
    {
      name: "Ravek Tillancer",
      statBlock: "Conjurer / CR 6",
      alignment: "NE",
      wants: "To recover the haversack from the sewers for the Silver Skulls who hired him",
      knows: "He was hired by the Silver Skulls; the haversack's location in the sewers; he carries a fake Brotherhood of the Cloak token",
      voice: "Guarded, deceptive, claims to be working for the greater good but is lying. Willing to fight rather than reveal his true purpose.",
      quote: "The City Guard asked me to look into this murder. I am here for the greater good."
    },
    {
      name: "Zavian Hauhtaon",
      statBlock: "Commoner / CR 0",
      alignment: "NG",
      wants: "To protect the refugees sheltering in the sewers and survive",
      knows: "Red-robed Thayans have been prowling the sewers; shadowy figures with silver skull armbands have been seen; many Blades have been hiring assassins to alter power dynamics in Mulmaster",
      voice: "Haggard and worn but noble in bearing. Speaks cautiously and protectively of his people. Disappointed by the state of the Blades.",
      quote: "Pardon me. How many Blades are left now?"
    },
    {
      name: "Arturo",
      statBlock: "Master Thief / CR 5",
      alignment: "NE",
      wants: "To lead the Silver Skulls and establish a new criminal network in Mulmaster",
      knows: "The truth behind the murder; the Silver Skulls' operations; has answers the party seeks but won't reveal them yet",
      voice: "Confident, calculating, speaks from the shadows. Admires persistence and is willing to negotiate.",
      quote: "I admire your persistence. You may call me Arturo; I believe I have the answers that you seek."
    }
  ],

  skillChecks: [
    {
      location: "Part 2 - Cistern",
      check: "Wis (Perception)",
      dc: "15",
      success: "Spot the light reflecting off coins and a rucksack 20 ft below the water surface"
    },
    {
      location: "Part 2a - Thayan Encounter",
      check: "Wis (Perception) [passive]",
      dc: "20",
      success: "Hear splashing and low voices early enough to alert the party to proceed quietly"
    },
    {
      location: "Part 2a - Thayan Encounter",
      check: "Int (History) or Int (Arcana)",
      dc: "17",
      success: "Identify the wizard's forehead tattoo as pertaining to the school of conjuration"
    },
    {
      location: "Part 2a - Thayan Encounter",
      check: "Dex (Stealth) [group]",
      dc: "15",
      success: "Approach without alerting the veterans, who remain split rather than forming ranks"
    },
    {
      location: "Part 2a - Thayan Encounter",
      check: "Wis (Insight)",
      dc: "12",
      success: "Confirm that Ravek's claim about being sent by the City Guard is a lie"
    },
    {
      location: "Part 2a - Thayan Encounter",
      check: "Cha (Intimidation) or Cha (Persuasion)",
      dc: "17",
      success: "Convince Ravek to back down and allow the party to also search the area"
    },
    {
      location: "Part 2a - Thayan Encounter (Treasure)",
      check: "Int (Investigation)",
      dc: "15",
      success: "Identify the Brotherhood of the Cloak membership token as a fake"
    },
    {
      location: "Part 2b - Refugee Encounter",
      check: "Cha (Persuasion)",
      dc: "13",
      success: "Convince Zavian to share what little news he has with the party"
    },
    {
      location: "Part 3 - City Guard",
      check: "Dex (Stealth) [group]",
      dc: "18",
      success: "Shield the party from view of the guardsmen in the shadows"
    },
    {
      location: "Part 3 - City Guard",
      check: "Cha (Persuasion)",
      dc: "16",
      success: "Talk past the City Guard if being truthful about reasons for being in the area"
    },
    {
      location: "Part 3 - City Guard",
      check: "Cha (Deception) or Cha (Intimidation)",
      dc: "20",
      success: "Convince the guards to leave the party alone if not being truthful"
    },
    {
      location: "Part 3 - Warehouse",
      check: "Wis (Perception)",
      dc: "17",
      success: "Notice cobwebs on rafters and movement in the adjoining room of the warehouse"
    }
  ],

  magicItems: [
    {
      name: "Heward's Handy Haversack",
      rarity: "Rare",
      attunement: false,
      summary: "Backpack with a central pouch (8 cu ft/80 lbs) and two side pouches (2 cu ft/20 lbs each); always weighs 5 lbs; retrieving an item requires an action but the desired item is always on top."
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
          text: "The conjurer is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The conjurer has the following wizard spells prepared: Cantrips (at will): acid splash, mage hand, poison spray, prestidigitation. 1st level (4 slots): mage armor, magic missile, unseen servant*. 2nd level (3 slots): cloud of daggers*, misty step*, web*. 3rd level (3 slots): fireball, stinking cloud*. 4th level (3 slots): Evard's black tentacles*, stoneskin. 5th level (2 slots): cloudkill*, conjure elemental*. *Conjuration spell of 1st level or higher."
        },
        {
          name: "Benign Transportation",
          text: "Recharges after the Conjurer Casts a Conjuration Spell of 1st Level or Higher. As a bonus action, the conjurer teleports up to 30 feet to an unoccupied space that it can see. If it instead chooses a space within range that is occupied by a willing Small or Medium creature, they both teleport, swapping places."
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
          text: "The evoker is a 9th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 14, +6 to hit with spell attacks). The evoker has the following wizard spells prepared: Cantrips (at will): fire bolt*, light*, prestidigitation, ray of frost*. 1st level (4 slots): burning hands*, mage armor, magic missile*. 2nd level (3 slots): mirror image, misty step, shatter*. 3rd level (3 slots): counterspell, fireball*, lightning bolt*. 4th level (3 slots): ice storm*, stoneskin. 5th level (2 slots): Bigby's hand*, cone of cold*. 6th level (1 slot): chain lightning*, wall of ice*. *Evocation spell."
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
      saves: "",
      skills: "Perception +2",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 12",
      traits: [],
      actions: [
        {
          name: "Spear",
          text: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage."
        }
      ]
    },
    {
      name: "Spy",
      cr: "1",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "12",
      hp: "27 (6d8)",
      speed: "30 ft.",
      str: "10 (+0)",
      dex: "15 (+2)",
      con: "10 (+0)",
      int: "12 (+1)",
      wis: "14 (+2)",
      cha: "16 (+3)",
      saves: "",
      skills: "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of Hand +4, Stealth +4",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 16",
      traits: [
        {
          name: "Cunning Action",
          text: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action."
        },
        {
          name: "Sneak Attack",
          text: "The spy deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The spy makes two melee attacks."
        },
        {
          name: "Shortsword",
          text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) bludgeoning damage."
        },
        {
          name: "Hand Crossbow",
          text: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage."
        }
      ]
    },
    {
      name: "Master Thief",
      cr: "5",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "16 (studded leather)",
      hp: "84 (13d8 + 26)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "18 (+4)",
      con: "14 (+2)",
      int: "11 (+0)",
      wis: "10 (+0)",
      cha: "12 (+1)",
      saves: "Dex +7, Int +3",
      skills: "Acrobatics +7, Athletics +3, Perception +3, Sleight of Hand +7, Stealth +7",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 13",
      traits: [
        {
          name: "Cunning Action",
          text: "On each of its turns, the thief can use a bonus action to take the Dash, Disengage, or Hide action."
        },
        {
          name: "Evasion",
          text: "If the thief is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the thief instead takes no damage if it succeeds on the saving throw, and only half if it fails."
        },
        {
          name: "Sneak Attack",
          text: "The thief deals an extra 14 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the thief that isn't incapacitated and the thief doesn't have disadvantage on the attack roll."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The thief makes three attacks with its shortsword."
        },
        {
          name: "Shortsword",
          text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 7 (1d6 + 4) bludgeoning damage."
        },
        {
          name: "Light Crossbow",
          text: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 8 (1d8 + 4) piercing damage."
        }
      ]
    },
    {
      name: "Gladiator",
      cr: "5",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "16 (studded leather, shield)",
      hp: "112 (15d8 + 45)",
      speed: "30 ft.",
      str: "18 (+4)",
      dex: "15 (+2)",
      con: "16 (+3)",
      int: "10 (+0)",
      wis: "12 (+1)",
      cha: "15 (+2)",
      saves: "Str +7, Dex +5, Con +6",
      skills: "Athletics +10, Intimidation +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 11",
      traits: [
        {
          name: "Brave",
          text: "The gladiator has advantage on saving throws against being frightened."
        },
        {
          name: "Brute",
          text: "A melee weapon deals one extra die of its damage when the gladiator hits with it (included in the attack)."
        }
      ],
      actions: [
        {
          name: "Multiattack",
          text: "The gladiator makes three melee attacks or two ranged attacks."
        },
        {
          name: "Spear",
          text: "Melee or Ranged Weapon Attack: +7 to hit, reach 5 ft. and range 20/60 ft., one target. Hit: 11 (2d6 + 4) piercing damage, or 13 (2d8 + 4) piercing damage if used with two hands to make a melee attack."
        },
        {
          name: "Shield Bash",
          text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one creature. Hit: 9 (2d4 + 4) bludgeoning damage. If the target is a Medium or smaller creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
        },
        {
          name: "Parry (Reaction)",
          text: "The gladiator adds 3 to its AC against one melee attack that would hit it. To do so, the gladiator must see the attacker and be wielding a melee weapon."
        }
      ]
    },
    {
      name: "Commoner",
      cr: "0",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "10",
      hp: "4 (1d8)",
      speed: "30 ft.",
      str: "10 (+0)",
      dex: "10 (+0)",
      con: "10 (+0)",
      int: "10 (+0)",
      wis: "10 (+0)",
      cha: "10 (+0)",
      saves: "",
      skills: "",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [],
      actions: [
        {
          name: "Club",
          text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage."
        }
      ]
    }
  ],

  bonusA: {
    title: "Not Used",
    timing: "N/A",
    trigger: "N/A",
    goal: "N/A",
    failEffect: "N/A",
    creatures: "None.",
    mechanics: "N/A",
    loot: "None.",
    dmnote: "N/A",
    chaseComplications: []
  },

  bonusB: {
    title: "Not Used",
    timing: "N/A",
    trigger: "N/A",
    goal: "N/A",
    failPenalty: "None.",
    creatures: "None.",
    mechanics: "N/A",
    loot: "None.",
    failReward: "None.",
    dmnote: "N/A"
  }
};

module.exports = DATA;