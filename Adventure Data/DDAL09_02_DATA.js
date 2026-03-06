const DATA = {
  code: "DDAL09-02",
  title: "Stopped at the Gate",
  levels: "1-4",
  apl: "3",
  duration: "~2-4 hrs",
  players: "3-7",
  location: "Baldur's Gate (Outer City, Lower City, Blackgate)",
  reward: "Each character gains one level upon completing the adventure. Gold awarded at 20 gp per hour (Tier 1), max 80 gp per level.",

  background: "The angel Zariel's faithful have begun slaying descendants of the original Hellriders—paladins who abandoned her in the Nine Hells. In Baldur's Gate, the mysterious devil Gharizol has magically compelled a harmless dressmaker named Harwin Lamlin to murder fellow tradesman Markus Hallgate, a Hellrider descendant. The characters arrive escorting Elturgardian refugees seeking asylum and are drawn into investigating the murder as a condition for the refugees' entry.",

  keyFacts: "Gharizol is a devil in service to Zariel, orchestrating murders of Hellrider descendants in Baldur's Gate from afar—he is not physically present but speaks through Harwin. Harwin Lamlin was magically compelled to commit murder and genuinely believes his actions were normal until the compulsion fades. Another murder occurs during the adventure (potentially Dovis Tobergate) proving Harwin is not the only killer. This is Part One of the 'Betrayal is in the Blood' series, following DDAL09-01 Escape from Elturgard.",

  scenes: [
    {
      name: "Welcome to Baldur's Gate",
      time: "~10 min",
      goal: "Gain entry to Baldur's Gate for the refugee caravan",
      outcome: "Guards deny entry and direct the characters to speak with Flame Daryn Falburn at the Basilisk Gate"
    },
    {
      name: "Part 1A: Bright Flame",
      time: "~30 min",
      goal: "Negotiate with Flame Falburn to secure refugee entry (Story Objective A)",
      outcome: "Falburn gives a list of impossible bureaucratic requirements; next morning she offers a deal—find a murderer in exchange for refugee entry. She provides a letter found on the victim addressed to Segren Hall."
    },
    {
      name: "Part 1B: The Letter",
      time: "~10 min",
      goal: "Investigate the letter and speak with Vasha Hall about its contents",
      outcome: "Characters learn the Hallgate family connection to Elturel and the Halls, providing context for the murder investigation"
    },
    {
      name: "Part 2A: Unsubtle Signs (Crime Scene)",
      time: "~20 min",
      goal: "Investigate the murder scene of Markus Hallgate",
      outcome: "Characters find Infernal writing ('FOR THE FALLEN'), footprints of a Medium humanoid, and evidence of a slender stabbing weapon. Leads point to Markus's wife Bolnata and the Lower City."
    },
    {
      name: "Part 2B: All About the Hallgates",
      time: "~20 min",
      goal: "Interview Bolnata Hallgate at her home for clues",
      outcome: "Characters learn about Harwin Lamlin the dressmaker, the deaths of two other Elturgardians, Dovis Tobergate as a contact, and find the eyes of the eagle heirloom with Hellrider heraldry"
    },
    {
      name: "Part 2C: Watching the Watchman",
      time: "~15 min",
      goal: "Speak with Dovis Tobergate about the pattern of murders",
      outcome: "Dovis reveals two prior victims (Nagurt and Mirna) were also Elturgardians killed suspiciously, and confirms the Hellrider connection"
    },
    {
      name: "Part 2D: Harwin's Shop",
      time: "~15 min",
      goal: "Investigate Harwin's shop and speak with apprentice Zook",
      outcome: "Characters find a bloody wash basin with knitting needle polish cloth; learn Harwin left suspiciously for the countryside with a merchant caravan and can still be caught at Blackgate"
    },
    {
      name: "Part 2E: So Long, and Thanks for All the Hellriders",
      time: "~15 min",
      goal: "Intercept Harwin Lamlin before he leaves the city with a merchant caravan",
      outcome: "Characters confront Harwin, who initially speaks in Gharizol's voice before reverting to himself. He confesses to the murder, not understanding why it was wrong until the compulsion fades. Characters escort him to the Flaming Fist."
    },
    {
      name: "Wrap-Up",
      time: "~10 min",
      goal: "Report findings to Flame Falburn and secure refugee entry",
      outcome: "Falburn reveals another murder has occurred (proving a larger conspiracy). Refugees secure a warehouse near the docks. Characters are paid by the grateful refugees."
    }
  ],

  sceneNotes: [
    {
      name: "Welcome to Baldur's Gate",
      time: "~10 min",
      setting: "The Outer City outside the gates of Baldur's Gate, on the Great Trade Way. Overcast afternoon.",
      trigger: "The characters arrive with the refugee caravan and approach the city gates.",
      creatures: "Flaming Fist guards (veterans and guards, mostly LN and N). Dara, Ghorin, Clyde, and the refugees accompany the party.",
      tactics: "Guards are bureaucratic and firm—they won't allow a large group with carts and pack animals through without authorization. They suggest speaking with Flame Falburn.",
      loot: "None.",
      dmnote: "If characters played DDAL09-01 and captured Vollis Foote, guards take her into custody and are slightly more helpful. Establish that the Outer City is dangerous and unsavory to motivate seeking entry."
    },
    {
      name: "Part 1A: Bright Flame",
      time: "~30 min",
      setting: "Flame Daryn Falburn's office on the second floor of the Basilisk Gate. 30 ft. square room, brightly lit by afternoon sunlight.",
      trigger: "Characters are escorted to meet Flame Falburn after being turned away at the gate.",
      creatures: "Flame Daryn Falburn (LN human female veteran).",
      tactics: "Falburn is pragmatic and cynical. She presents an impossible bureaucratic checklist (refugee accounting, no carts, disease clearance, lodging arrangements, work arrangements). The next morning she offers the real deal: find the murderer in exchange for entry.",
      loot: "The letter found on the murder victim (Appendix 3).",
      dmnote: "Keep the bureaucracy section short—don't let players spend too long trying to satisfy impossible requirements. Let them bribe their way through if needed. The real hook is the murder investigation deal the next morning."
    },
    {
      name: "Part 1B: The Letter",
      time: "~10 min",
      setting: "With the refugee caravan in the Outer City.",
      trigger: "Characters receive the letter and wish to learn more about its context.",
      creatures: "Vasha Hall (LG female human noble), de facto leader of the refugees.",
      tactics: "Vasha is helpful and cooperative. She provides background on the Hallgate family's connection to Elturel.",
      loot: "None.",
      dmnote: "DC 12 Intelligence (Investigation) reveals the letter was written a couple of tendays ago, predating Elturel's disappearance."
    },
    {
      name: "Part 2A: Unsubtle Signs (Crime Scene)",
      time: "~20 min",
      setting: "A small alley off a busy street in the Lower City. Bright morning sunlight after fog clears.",
      trigger: "Characters are escorted by Watch guard Velnar to the crime scene after agreeing to investigate.",
      creatures: "Velnar (LN male dwarf guard) bars passersby and hurries the characters along.",
      tactics: "Velnar wants the body removed quickly. He provides Markus's home address but doesn't know where his shop is.",
      loot: "None at the scene directly.",
      dmnote: "Key clues: DC 11 Wis (Medicine) for time of death; DC 13 Wis (Medicine) for exit wounds (long stabbing weapon); Infernal writing reads 'FOR THE FALLEN'; DC 9 Wis (Survival) for footprints of a narrow-footed Medium humanoid. If none speak Infernal, a tiefling passerby can translate."
    },
    {
      name: "Part 2B: All About the Hallgates",
      time: "~20 min",
      setting: "The Hallgates' comfortable single-story home in the Lower City. Curtains drawn, daylight filtering in.",
      trigger: "Characters visit Bolnata Hallgate after investigating the crime scene.",
      creatures: "Bolnata Hallgate (NG female human commoner), Markus's wife. Composed but clearly has been crying.",
      tactics: "Bolnata is cooperative. She mentions Harwin Lamlin (dressmaker and friend), points to Dovis Tobergate for more info, and reveals two prior mysterious deaths of Markus's friends. She denies any cult involvement.",
      loot: "Eyes of the eagle (in a dark polished wooden box with Infernal inscription 'HELL AND BACK AGAIN' and Hellrider heraldry). DC 11 Int (History) to identify the Hellrider symbol.",
      dmnote: "The exquisite dress on the armchair is a key clue linking to Harwin. Bolnata has an alibi (out dancing with friends who can confirm). She refuses to believe Markus was in a cult."
    },
    {
      name: "Part 2C: Watching the Watchman",
      time: "~15 min",
      setting: "Near the Heap Gate in the Upper City, or en route to Harwin's shop.",
      trigger: "Characters seek out Dovis, or he finds them (having been given their description by Flame Falburn).",
      creatures: "Dovis Tobergate (LG male human veteran), Upper City Watch guard.",
      tactics: "Dovis is stern, helpful, and sad about Markus's death. He provides information about two prior victims and can identify the Hellrider emblem.",
      loot: "None.",
      dmnote: "Dovis reveals the pattern: Nagurt killed by a large animal 6 months ago, Mirna cut up and blood smeared on a wall 1 month ago—both Elturgardians with no local relatives. For Bonus Objective B, Dovis gets separated from the group later and is found murdered."
    },
    {
      name: "Part 2D: Harwin's Shop",
      time: "~15 min",
      setting: "Harwin's Garments & Knits, two doors from Markus's shop. Ground floor shop and workshop, second floor apartment.",
      trigger: "Characters visit the shop following leads from Bolnata and/or Dovis.",
      creatures: "Zook Pilwicken (N gnome commoner), Harwin's apprentice.",
      tactics: "Zook is oblivious, friendly, and helpful. He reveals Harwin left suspiciously for the countryside, his tea was still warm, he used expensive Theskian silk for Bolnata's dress, and his brass knitting needles are missing.",
      loot: "None.",
      dmnote: "Key evidence in the apartment: bloody wash basin (DC 10 Wis Medicine confirms blood is hours old), bloodied polishing cloth for knitting needles (DC 10 Int Investigation). DC 15 Dex check with thieves' tools to unlock apartment, or DC 10 Cha (Deception/Intimidation/Persuasion) to convince Zook to open it."
    },
    {
      name: "Part 2E: So Long, and Thanks for All the Hellriders",
      time: "~15 min",
      setting: "Blackgate neighborhood, edge of town. Busy street with run-down houses, bright sunlight.",
      trigger: "Characters race across the city to catch the merchant caravan before it leaves.",
      creatures: "Harwin Lamlin (N male human commoner), Thomar Belkis (N male dwarf guard, caravan leader), four hired guards, eight merchants (commoners).",
      tactics: "Belkis and guards protect the caravan if approached violently. Harwin does not resist or flee. He initially speaks in Gharizol's voice ('Thank you for bringing them to me') then reverts to confused, horrified self. He confesses openly, as he believed everything was normal.",
      loot: "None.",
      dmnote: "Let players be creative getting across the city—reward ability checks and background features. Harwin knows Gharizol's name but nothing else about him. The caravan guards don't care about the merchants' business."
    },
    {
      name: "Wrap-Up",
      time: "~10 min",
      setting: "Flaming Fist headquarters at the Basilisk Gate.",
      trigger: "Characters escort Harwin back and report to Flame Falburn.",
      creatures: "Flame Daryn Falburn, Flaming Fist soldiers, Vasha Hall.",
      tactics: "Falburn reveals another murder just occurred, proving Harwin isn't the only tool. Vasha reports the refugees secured a warehouse near the docks.",
      loot: "Gold, silver, and copper coins from grateful refugees.",
      dmnote: "The new murder victim is Dovis Tobergate if running Bonus Objective B. This sets up the continuing series plotline about Gharizol."
    }
  ],

  npcs: [
    {
      name: "Flame Daryn Falburn",
      statBlock: "Veteran / CR 3",
      alignment: "LN",
      wants: "Maintain order in Baldur's Gate and fulfill her duties to the Flaming Fist",
      knows: "A murder occurred with Infernal symbols; the victim had a letter addressed to Segren Hall; she suspects a connection to the Elturgardian refugees",
      voice: "Blunt, pragmatic, cynical. Wastes no time on pleasantries or emotional appeals.",
      quote: "Welcome to Baldur's Gate. Is it everything you've hoped for?"
    },
    {
      name: "Vasha Hall",
      statBlock: "Noble / CR 1/8",
      alignment: "LG",
      wants: "Ensure the safety of the refugees and secure them shelter in Baldur's Gate",
      knows: "The Hallgate family once resided in Elturel and were related to the Halls; they moved to Baldur's Gate 30 years ago and added '-gate' to their name",
      voice: "Perpetually busy and fussy, concerned and maternal toward the refugees.",
      quote: "Segren once took me to their old farmstead... mentioned their departure from Elturgard."
    },
    {
      name: "Bolnata Hallgate",
      statBlock: "Commoner / CR 0",
      alignment: "NG",
      wants: "Help with the investigation but also grieve in peace; relieved she won't have to leave Baldur's Gate",
      knows: "Harwin Lamlin is a harmless dressmaker and friend; two of Markus's friends died mysteriously in the last six months; Dovis Tobergate knows more; the family heirloom box with Hellrider insignia",
      voice: "Well-spoken, composed but clearly distraught. Proud of the life she and Markus built.",
      quote: "Harwin always says I should go dancing more, so he made me this beautiful thing."
    },
    {
      name: "Dovis Tobergate",
      statBlock: "Veteran / CR 3",
      alignment: "LG",
      wants: "Find the truth behind Markus's death; feels guilty he didn't do more to help",
      knows: "Two other Elturgardians (Nagurt and Mirna) were killed under suspicious circumstances in the past six months; recognizes the Hellrider heraldry",
      voice: "Stern, quiet, responsible. A soldier from a long line of soldiers. Few words but deeply devoted.",
      quote: "Seems like the Companion's light wanes a bit more every day that passes in Baldur's Gate."
    },
    {
      name: "Zook Pilwicken",
      statBlock: "Commoner / CR 0",
      alignment: "N",
      wants: "Keep the shop tidy and help with the investigation; would never suspect Harwin of wrongdoing",
      knows: "Harwin left unexpectedly for the countryside; his tea was still warm; he used the last Theskian silk for Bolnata's dress; his brass knitting needles are missing; the caravan can be caught at Blackgate",
      voice: "Friendly, outgoing, courteous. Wide-eyed and eager to help.",
      quote: "If you're quick out to Blackgate, you might still be able to catch them as they prepare to head out!"
    },
    {
      name: "Harwin Lamlin",
      statBlock: "Commoner / CR 0",
      alignment: "N",
      wants: "Under Gharizol's influence: believes killing Markus and leaving town is normal. Without influence: a simple man satisfied with his simple life, consumed by regret.",
      knows: "Gharizol's name (but not what he is); he stabbed Markus with his knitting needle and painted Infernal symbols in blood; the 'voice' told him to do everything",
      voice: "Mild-mannered and unassuming normally; initially speaks in an even, emotionless, distant voice (Gharizol). Then shifts to nervous, worried, confused.",
      quote: "Yes, yes, I am Harwin. What's this about?"
    },
    {
      name: "Gharizol",
      statBlock: "Not physically present (devil in service to Zariel)",
      alignment: "LE",
      wants: "Systematically hunt and kill descendants of Elturel's Hellriders on behalf of Zariel",
      knows: "The identities and locations of Hellrider descendants in Baldur's Gate; how to magically compel mortals to do his bidding",
      voice: "Megalomaniacal, utterly contemptuous of mortals. Cunning and merciless.",
      quote: "Welcome to Baldur's Gate. Thank you for bringing them to me. You can have him now."
    },
    {
      name: "Velnar",
      statBlock: "Guard / CR 1/8",
      alignment: "LN",
      wants: "Get the body removed as quickly as possible after the characters investigate",
      knows: "The body was discovered at around three bells by passersby; has Markus's home address; the murder occurred while Markus was heading home from his shop",
      voice: "Impatient, hurried, pragmatic.",
      quote: "Hurry it up, will you? We need this cleared."
    },
    {
      name: "Thomar Belkis",
      statBlock: "Guard / CR 1/8",
      alignment: "N",
      wants: "Do his job protecting the merchant caravan, get paid, and get home safely",
      knows: "Nothing about the merchants or Harwin specifically; not paid to be nosy",
      voice: "Experienced, calm, professional. Doesn't take foolish risks.",
      quote: "We're just doing our job here. Step aside."
    },
    {
      name: "Grant Yoreling",
      statBlock: "Cult Fanatic / CR 2",
      alignment: "LE",
      wants: "Exact revenge on the characters for Vollis Foote's arrest on behalf of the Cult of Zariel",
      knows: "His orders come from someone powerful named Gharizol; he is a devotee of Zariel; the other cultists don't know about the Zariel connection",
      voice: "Cunning, cowardly in direct confrontation, prefers to command from afar.",
      quote: "You'll pay for what you did to one of ours!"
    },
    {
      name: "Dara",
      statBlock: "No combat stat block (child NPC)",
      alignment: "LG",
      wants: "Safety for herself and the refugees; often speaks of Ilmater's teachings",
      knows: "Little of direct plot relevance, but travels with Ghorin and Clyde",
      voice: "Calm, wise beyond her years, gentle demeanor shaped by her upbringing with priests of Ilmater.",
      quote: "Ilmater teaches us that suffering shared is suffering halved."
    }
  ],

  skillChecks: [
    {
      location: "Part 1B: The Letter",
      check: "Int (Investigation)",
      dc: "12",
      success: "Reveals the letter was written a couple of tendays ago and predates Elturel's disappearance"
    },
    {
      location: "Part 2A: Crime Scene - Body",
      check: "Wis (Medicine)",
      dc: "11",
      success: "Determines the murder took place a couple of hours before midnight"
    },
    {
      location: "Part 2A: Crime Scene - Body",
      check: "Wis (Medicine)",
      dc: "13",
      success: "Finds exit wounds, revealing the murder weapon was long enough to pass through the body"
    },
    {
      location: "Part 2A: Crime Scene - Footprints",
      check: "Wis (Survival)",
      dc: "9",
      success: "Determines footprints are likely the murderer's, made by a narrow-footed Medium humanoid"
    },
    {
      location: "Part 2B: Hallgates' Home - Treasure",
      check: "Int (History)",
      dc: "11",
      success: "Identifies the horse-head-on-sunburst symbol as the heraldry of the Hellriders (advantage for Elturgardians or Soldiers)"
    },
    {
      location: "Part 2D: Harwin's Apartment - Basin",
      check: "Wis (Medicine)",
      dc: "10",
      success: "Confirms the blood in the wash basin is only a few hours old"
    },
    {
      location: "Part 2D: Harwin's Apartment - Basin",
      check: "Int (Investigation)",
      dc: "10",
      success: "Reveals the bloodied cloth is particularly fine and is a polishing tool for knitting needles"
    },
    {
      location: "Part 2D: Harwin's Apartment - Door",
      check: "Dex (Thieves' Tools)",
      dc: "15",
      success: "Unlocks the door to Harwin's second-floor apartment"
    },
    {
      location: "Part 2D: Harwin's Shop - Zook",
      check: "Cha (Deception, Intimidation, or Persuasion)",
      dc: "10",
      success: "Convinces Zook to let the characters into Harwin's apartment"
    },
    {
      location: "Bonus A: Cult Ambush",
      check: "Int (Religion)",
      dc: "13",
      success: "Identifies the symbol of the archdevil Zariel on Grant's amulet (advantage for tieflings and fiendish warlocks)"
    },
    {
      location: "Bonus A: Cult Ambush - Social",
      check: "Cha (Persuasion)",
      dc: "11",
      success: "Gets a random NPC bystander to assist (impeding enemy movement or aiding character movement)"
    },
    {
      location: "Bonus B: Crime Scene - Body",
      check: "Wis (Medicine)",
      dc: "9",
      success: "Identifies how Dovis was murdered; framed character has advantage to recognize the work of their usual weapon"
    },
    {
      location: "Bonus B: Crime Scene - Symbol",
      check: "Int (Religion)",
      dc: "13",
      success: "Identifies the symbol as that of the archdevil Zariel (advantage for tieflings and fiendish warlocks)"
    },
    {
      location: "Bonus B: Crime Scene - Ring",
      check: "Int (Investigation)",
      dc: "11",
      success: "Confirms Dovis's ring is older than him"
    },
    {
      location: "Bonus B: Crime Scene - Ring",
      check: "Int (History)",
      dc: "11",
      success: "Identifies the horse-on-sunburst symbol as the heraldry of the Hellriders (advantage for Elturgardians or Soldiers)"
    },
    {
      location: "Bonus B: Trial",
      check: "Cha (Deception)",
      dc: "15",
      success: "Successfully lies to the magistrate without being detected"
    }
  ],

  magicItems: [
    {
      name: "Eyes of the Eagle",
      rarity: "Uncommon",
      attunement: true,
      summary: "Crystal lenses granting advantage on Wisdom (Perception) checks relying on sight; can make out details of distant objects as small as 2 feet across in clear visibility. These have dark red crystal lenses with Hellrider heraldry and show illusory flames when within 120 ft. of a demon."
    },
    {
      name: "Potion of Healing",
      rarity: "Common",
      attunement: false,
      summary: "Regain 2d4 + 2 hit points when drunk."
    },
    {
      name: "Potion of Poison",
      rarity: "Uncommon",
      attunement: false,
      summary: "Looks, smells, and tastes like a potion of healing. Drinking it deals 3d6 poison damage and requires a DC 13 Con save or become poisoned, taking 3d6 poison damage at the start of each turn (decreasing by 1d6 on each successful end-of-turn save)."
    }
  ],

  downtime: "Not specified in module.",
  renown: "Not specified in module.",

  statBlocks: [
    {
      name: "Bandit",
      cr: "1/8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-lawful alignment",
      ac: "12 (leather armor)",
      hp: "11 (2d8 + 2)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "12 (+1)",
      con: "12 (+1)",
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
        { name: "Scimitar", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage." },
        { name: "Light Crossbow", text: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d8 + 1) piercing damage." }
      ]
    },
    {
      name: "Berserker",
      cr: "2",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any chaotic alignment",
      ac: "13 (hide armor)",
      hp: "67 (9d8 + 27)",
      speed: "30 ft.",
      str: "16 (+3)",
      dex: "12 (+1)",
      con: "17 (+3)",
      int: "9 (-1)",
      wis: "11 (+0)",
      cha: "9 (-1)",
      saves: "",
      skills: "",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Reckless", text: "At the start of its turn, the berserker can gain advantage on all melee weapon attack rolls during that turn, but attack rolls against it have advantage until the start of its next turn." }
      ],
      actions: [
        { name: "Greataxe", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 9 (1d12 + 3) slashing damage." }
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
        { name: "Club", text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage." }
      ]
    },
    {
      name: "Cultist",
      cr: "1/8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-good alignment",
      ac: "12 (leather armor)",
      hp: "9 (2d8)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "12 (+1)",
      con: "10 (+0)",
      int: "10 (+0)",
      wis: "11 (+0)",
      cha: "10 (+0)",
      saves: "",
      skills: "Deception +2, Religion +2",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Dark Devotion", text: "The cultist has advantage on saving throws against being charmed or frightened." },
        { name: "Ferocious Surge (Recharges after a Short or Long Rest)", text: "When this creature hits with an attack that isn't a critical hit, it can turn the hit into a critical hit." }
      ],
      actions: [
        { name: "Scimitar", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage." }
      ]
    },
    {
      name: "Cult Fanatic",
      cr: "2",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-good alignment",
      ac: "13 (leather armor)",
      hp: "33 (6d8 + 6)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "14 (+2)",
      con: "12 (+1)",
      int: "10 (+0)",
      wis: "13 (+1)",
      cha: "14 (+2)",
      saves: "",
      skills: "Deception +4, Persuasion +4, Religion +2",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 11",
      traits: [
        { name: "Dark Devotion", text: "The fanatic has advantage on saving throws against being charmed or frightened." },
        { name: "Spellcasting", text: "The fanatic is a 4th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 11, +3 to hit with spell attacks). The fanatic has the following cleric spells prepared: Cantrips (at will): light, sacred flame, thaumaturgy; 1st level (4 slots): command, inflict wounds, shield of faith; 2nd level (3 slots): hold person, spiritual weapon." },
        { name: "Infernal Tactics", text: "This creature has a keen eye for seizing a tactical advantage. Immediately after rolling initiative, it can choose itself and up to three allies it can see if it isn't incapacitated. It can swap the initiative results of the chosen creatures among them." },
        { name: "Ferocious Surge (Recharges after a Short or Long Rest)", text: "When this creature hits with an attack that isn't a critical hit, it can turn the hit into a critical hit." }
      ],
      actions: [
        { name: "Multiattack", text: "The fanatic makes two melee attacks." },
        { name: "Dagger", text: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one creature. Hit: 4 (1d4 + 2) piercing damage." }
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
        { name: "Spear", text: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage, or 5 (1d8 + 1) piercing damage if used with two hands to make a melee attack." }
      ]
    },
    {
      name: "Noble",
      cr: "1/8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "15 (breastplate)",
      hp: "9 (2d8)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "12 (+1)",
      con: "11 (+0)",
      int: "12 (+1)",
      wis: "14 (+2)",
      cha: "16 (+3)",
      saves: "",
      skills: "Deception +5, Insight +4, Persuasion +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 12",
      traits: [],
      actions: [
        { name: "Rapier", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d8 + 1) piercing damage." },
        { name: "Parry (Reaction)", text: "The noble adds 2 to its AC against one melee attack that would hit it. To do so, the noble must see the attacker and be wielding a melee weapon." }
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
        { name: "Multiattack", text: "The veteran makes two longsword attacks. If it has a shortsword drawn, it can also make a shortsword attack." },
        { name: "Longsword", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage, or 8 (1d10 + 3) slashing damage if used with two hands." },
        { name: "Shortsword", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
        { name: "Heavy Crossbow", text: "Ranged Weapon Attack: +3 to hit, range 100/400 ft., one target. Hit: 6 (1d10 + 1) piercing damage." }
      ]
    }
  ],

  bonusA: {
    title: "A Cult Following",
    timing: "After the characters leave Flame Falburn's offices (end of Part 1A), before the morning meeting",
    trigger: "The characters arrive in the Outer City and hand over Vollis Foote to the Flaming Fist; Grant Yoreling spots them and musters cultists for an ambush.",
    goal: "Survive the cultist ambush and capture Grant Yoreling during a chase through the Outer City",
    failEffect: "If Grant escapes (120 ft. away for 2 rounds or traverses 300+ ft.), he reaches a safehouse and gets away. The characters lose the bonus objective.",
    creatures: "Grant Yoreling (LE male human cult fanatic with Infernal Tactics and Ferocious Surge) and five cultists (each with Ferocious Surge). Adjustments: Very Weak—remove 3 cultists, no Ferocious Surge, Grant's 2nd-level slots spent; Weak—remove 2 cultists; Strong—replace 1 cultist with a cult fanatic and a berserker; Very Strong—replace 3 cultists with berserkers.",
    mechanics: "Combat encounter followed by a chase using DMG Chapter 8 chase rules. Grant starts 60 ft. away. Crowded Alleys give Grant total cover from anyone 30+ ft. away. Chase complications table (d20) includes obstacles like vegetable carts, farmers, poop, brawls, spooked horses, etc. Chase ends if Grant is caught, is 120+ ft. away for 2 consecutive rounds, or traverses 300+ ft.",
    loot: "Grant carries a coin purse, a potion of poison, and an amulet with the symbol of Zariel.",
    dmnote: "Passive Perception 13+ avoids surprise from the ambush. DC 13 Int (Religion) identifies Zariel's symbol on Grant's amulet (advantage for tieflings and fiendish warlocks). DC 11 Cha (Persuasion) can recruit bystander help. Grant surrenders if cornered. This attack provides additional motivation for gaining city entry quickly.",
    chaseComplications: [
      { d20: "1", complication: "Vegetable cart blocks the way. DC 15 Dex (Acrobatics) or take 2 (1d4) bludgeoning damage from a thrown beet." },
      { d20: "2", complication: "Dozen farmers with caged animals. DC 10 Str (Athletics) or crowd counts as 10 ft. difficult terrain." },
      { d20: "3", complication: "Tumble through a ramshackle house. DC 10 Str save or fall prone." },
      { d20: "4", complication: "Narrow labyrinthine alley. DC 10 Int check or maze counts as 10 ft. difficult terrain." },
      { d20: "5", complication: "Huge pile of ox poop. DC 10 Dex save or fall prone (fail by 5+: fall prone into the poop)." },
      { d20: "6", complication: "Spooked horse. DC 10 Wis (Animal Handling) or fall prone and take 1d4 bludgeoning damage." },
      { d20: "7", complication: "Brawl in progress. DC 10 Str (Athletics) or take 2d4 bludgeoning damage and brawlers count as 10 ft. difficult terrain." },
      { d20: "8", complication: "Beggar blocks the way. DC 10 Cha (Intimidation) or auto-succeed with a coin. Failure: beggar counts as 5 ft. difficult terrain." },
      { d20: "9", complication: "Gang member mistakes you for a debtor. If you move 20+ ft., she attacks with scimitar (+3, 1d6+1 slashing)." },
      { d20: "10", complication: "Open-air smithy with red-hot horseshoe. DC 10 Dex save or take 1d4 fire damage." },
      { d20: "11-20", complication: "No complication." }
    ]
  },

  bonusB: {
    title: "Courtside for Murder",
    timing: "After the Wrap-Up, when the characters report to Flame Falburn and learn of Dovis Tobergate's murder",
    trigger: "Gharizol's followers frame the characters for Dovis's murder using a weapon matching one character's fighting style. Multiple cultist witnesses accuse the characters at the crime scene.",
    goal: "Surrender to the Flaming Fist, stand trial before Magistrate Vitana Moore, and prove their innocence by accumulating 8 successes before 3 failures during questioning",
    failPenalty: "Found guilty: characters don't complete the bonus objective and must each pay a 50 gp fine. Those who can't pay serve 10 downtime days of hard labor or surrender a magic item.",
    creatures: "Six Flaming Fist guards (veterans) at the crime scene; two cultists hidden in the crowd as false witnesses; Flame Daryn Falburn; Magistrate Vitana Moore (LE female human noble); a dozen armed Flaming Fist guards in the courtroom; court clerk (commoner); turnip vendor Melva (cultist false witness).",
    mechanics: "Crime scene investigation followed by arrest and trial. Trial: 8 successes needed before 3 failures. Successes from truthful answers, presenting evidence, or calling witnesses. Failures from poor answers, caught lies (DC 15 Cha Deception to lie), rudeness, or contempt. Players get 10 minutes to prepare their defense (version of events, witness list, evidence list). Melva the hostile vendor can be caught in contradictory testimony if called.",
    loot: "If found innocent: potion of healing and silver ingots from the Flaming Fist stores.",
    failReward: "If found innocent, characters are released and met by Dara, Ghorin, and Clyde. If guilty, Dara and companions secure their release the next morning but characters pay the penalty.",
    dmnote: "Identify which character has a unique weapon or fighting style to frame before the scene begins. The Flaming Fist won't hear pleas at the scene—fighting them is deadly (6 veterans). The trial is a roleplaying opportunity; keep it paced and don't let it drag. Magistrate Moore is authoritarian but fair. Melva's contradictory testimony can be a dramatic turning point."
  }
};

module.exports = DATA;