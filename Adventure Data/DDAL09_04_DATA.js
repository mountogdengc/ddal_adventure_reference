const DATA = {
  code: "DDAL09-04",
  title: "Day of the Devil",
  levels: "1-4",
  apl: "3",
  duration: "~2-4 hrs",
  players: "3-7",
  location: "Baldur's Gate, Sword Coast",
  reward: "1 level (milestone advancement)",

  background: "The archdevil Zariel pulled the city of Elturel into Avernus, and now a devil named Gharizol, in Zariel's service, is systematically hunting and killing the descendants of the Hellriders who betrayed her before her fall from grace. Refugees from Elturel have fled to Baldur's Gate, but the city offers no safety as Gharizol's cultists close in. The characters are drawn in when Duke Dillard Portyr is spectacularly assassinated during a public address, and they must protect the targeted refugees.",

  keyFacts: "Gharizol is a bearded devil (or barbed devil at Very Strong) who bursts from the ground inside the refugee warehouse during Part 2, Round 3. The assassin's list names Duke Portyr (already dead), Segren Hall, and Wellum Smith as targets—all descendants of original Hellriders. Dara, a ten-year-old cleric of Ilmater, is secretly searching for warriors to accompany her to Avernus; her guardians Ghorin and Clyde are actually a planetar (Rinzel) and a deva (Ausuriel). This is Part Three of the Betrayal Is in the Blood trilogy and leads directly into a journey to Avernus via Fai Chen's cart.",

  scenes: [
    {
      name: "A Bloody Spectacle (Call to Action)",
      time: "~10 min",
      goal: "Witness Duke Portyr's speech and the assassination that kicks off the adventure",
      outcome: "The Duke explodes in a shower of gore; devils emerge from his remains; combat begins in Part 1"
    },
    {
      name: "Market Massacre (Part 1A - Devils)",
      time: "~20 min",
      goal: "Defeat the imps and nupperibo that emerged from the Duke's body",
      outcome: "Devils are destroyed; characters can investigate the Duke's body and find the iron arrow"
    },
    {
      name: "The Assassin (Part 1B)",
      time: "~20 min",
      goal: "Locate the assassin and learn about Gharizol's targets",
      outcome: "Characters meet Chesserie, find the hit list naming Segren and Wellum, and learn the refugees are in danger at the warehouse"
    },
    {
      name: "Preparing for the Assault (Part 2A)",
      time: "~20 min",
      goal: "Explore the warehouse and set up defenses before the cultists attack",
      outcome: "Players have up to 20 minutes of real time (5 if Bonus A failed) to fortify the warehouse before the assault begins"
    },
    {
      name: "The Assault (Part 2B)",
      time: "~50 min",
      goal: "Defend Segren and Wellum from three waves of cultists and Gharizol",
      outcome: "Gharizol and cultists are defeated; Chesserie gives the party a periapt of health; Gharizol drops a soul coin"
    },
    {
      name: "Wrap Up: Need a Lift?",
      time: "~10 min",
      goal: "Meet Dara and her revealed angelic guardians; accept the mission to Avernus",
      outcome: "Fai Chen arrives with a cart and offers transport to the Nine Hells, setting up the next adventure"
    }
  ],

  sceneNotes: [
    {
      name: "A Bloody Spectacle (Call to Action)",
      time: "~10 min",
      setting: "The Wide, an open-air triangular marketplace (~600 ft per side) in the Upper City of Baldur's Gate. A temporary 6-ft-high stage is on the northeast side; a bronze statue called the Beloved Ranger is the only permanent fixture.",
      trigger: "Duke Portyr begins his speech about the Gharizol murders; a blood-red infernal arrow strikes him and he explodes.",
      creatures: "Duke Dillard Portyr (noble, LN), 4 personal guards, 12 Watch guards scattered around perimeter, thousands of commoners and nobles.",
      tactics: "This is a narrative scene; the Duke's guards and Watch are overwhelmed and flee. The crowd panics.",
      loot: "None in this scene.",
      dmnote: "This scene is pure narrative setup. Keep it brisk and dramatic. The explosion should be shocking. Transition immediately to initiative for Part 1."
    },
    {
      name: "Market Massacre (Part 1A - Devils)",
      time: "~20 min",
      setting: "The Wide marketplace. Characters start near the Beloved Ranger statue, 150 ft from the stage.",
      trigger: "Devils emerge from the Duke's exploded remains; roll initiative.",
      creatures: "2 imps, 4 nupperibo. Elendra and Ravek (LN human guards) stand near statue and can be convinced to help. Adjust: Very Weak remove imps and 2 nupperibo; Weak remove 1 imp and 2 nupperibo; Strong add 1 imp; Very Strong add 1 imp and 2 nupperibo.",
      tactics: "Devils want to kill as many as possible. For first 2 rounds, the screaming crowd creates difficult terrain and half cover beyond 10 ft. Roll d10 each round for combat complications (child falls, rain, grappling old man, centipede swarm, weapon damage, pothole). Climbing the statue gives line of sight and immunity to complications.",
      loot: "Potion of healing and a few gold coins found on the 11 dead guards/bystanders. The iron arrow deals 1d4 fire damage to touch; formerly magical (conjuration), now drained.",
      dmnote: "The crowd and complications make this more chaotic than the CR would suggest. Encourage creative use of the statue and environment. Elendra and Ravek leave after combat to report in."
    },
    {
      name: "The Assassin (Part 1B)",
      time: "~20 min",
      setting: "The Wide, near the assassin's body.",
      trigger: "After defeating the devils, Chesserie Warden waves the party over to the dead assassin's body.",
      creatures: "Chesserie Warden (LN human scout, Flaming Fist). Dead assassin (commoner).",
      tactics: "Social encounter. Chesserie shares information freely. She won't suggest requesting Watch/Fist backup since neither will help—the city is in chaos.",
      loot: "Assassin has gold, an iron disk inscribed 'Gharizol' in Infernal, an iron bow, and a hit list (Appendix 3) with Duke Portyr checked off, plus Segren Hall and Wellum Smith.",
      dmnote: "If players haven't done the previous adventures, Chesserie can supply the Hellrider descendant connection. This scene should create urgency to get to the warehouse on Stormshore Street. Insert Bonus Objective A here if using it."
    },
    {
      name: "Preparing for the Assault (Part 2A)",
      time: "~20 min",
      setting: "A 50x60-ft granite wool warehouse on Stormshore Street near the docks. Earthen floor, 20-ft gabled slate roof, four crossbeams at 15 ft with iron hooks, 20-ft rope, two 10-ft rotting wooden doors (south, no lock), one 3x3-ft window (north, 8 ft up, no panes). Office in NE corner (10x20 ft, 8 ft high, locked DC 10 thieves' tools). Carpenter tools, ladder, planks, 200 ft of rope, flammable wool scraps (10x10 ft pile, burns 6 rounds, 2d4 fire damage).",
      trigger: "Characters arrive at the warehouse and have real-time 20 minutes (5 minutes if Bonus A failed) to explore and fortify.",
      creatures: "24 refugees (mostly commoners—sick, old, young). Segren Hall (CG male commoner), Wellum Smith (NG male guard/soldier), Hastrine Leaftender (NG nonbinary elf scout). Chesserie Warden is also present.",
      tactics: "Refugees follow orders from anyone acting with authority. Hastrine has a potion of growth they may share. Dara is noted as missing. If characters peek outside during prep, they see cultists assembling in a narrow alley across the street.",
      loot: "DC 15 Wisdom (Perception) check on the desk finds a secret drawer with semi-precious gemstones.",
      dmnote: "Enforce the real-time limit strictly. Encourage tactical planning—boarding the window, nailing doors, positioning the flammable wool, using rope and hooks. Chesserie can give hints if players are unsure. A good defense plan significantly impacts the assault."
    },
    {
      name: "The Assault (Part 2B)",
      time: "~50 min",
      setting: "Inside the warehouse.",
      trigger: "Time limit expires; cultists attack in three waves.",
      creatures: "Wave 1 (Round 1): 8 cultists charge through front doors. Wave 2 (Round 2): 4 cultists climb through window (or come through doors Round 3 if boarded). Wave 3 (Round 3): Gharizol (bearded devil) bursts from ground in middle of warehouse. Adjust: Very Weak remove 3 cultists per wave, replace bearded devil with spined devil; Weak remove 3 cultists per wave; Strong add 2 cultists per wave; Very Strong add 2 cultists per wave, replace bearded devil with barbed devil.",
      tactics: "Gharizol and cultists target Segren and Wellum specifically, also attacking nearby refugees. Cultists use crowbar to force nailed doors in 1d4 rounds. Cultists retreat if they suffer heavy losses in Round 1 until backup arrives. Chesserie fights alongside party. If party is overwhelmed, Wellum joins the fight; Hastrine tosses a potion of growth to a character. If too easy, an invisible imp flies in and attacks from above.",
      loot: "Each cultist has an iron disk and silver/gold coins. Gharizol has a soul coin in a pouch. Chesserie gives the party a periapt of health as thanks.",
      dmnote: "If running Bonus Objective B, isolate Wellum late in the fight so cultists can carry him off. The bearded devil's infernal wound and poison effects are very dangerous at this tier—track them carefully. The soul coin is a significant story item for the series."
    },
    {
      name: "Wrap Up: Need a Lift?",
      time: "~10 min",
      setting: "The warehouse.",
      trigger: "After all combat and bonus objectives are resolved, Dara arrives with her guardians.",
      creatures: "Dara (10-year-old cleric of Ilmater), Ghorin/Rinzel (planetar), Clyde/Ausuriel (deva), Fai Chen (Shou man with pseudodragon).",
      tactics: "Narrative scene. Dara asks the characters to accompany her to Avernus. Fai Chen crashes through the back wall with a cart and mule, offering a ride to Hell.",
      loot: "No additional loot.",
      dmnote: "This is the series hook into the Avernus storyline. Dara recoils from the soul coin; the angels recognize it with disgust. Play up the dramatic reveal of the angels and Fai Chen's irreverent entrance."
    }
  ],

  npcs: [
    {
      name: "Chesserie Warden",
      statBlock: "Scout / CR 1/2",
      alignment: "LN",
      wants: "To fulfill her duty to the Flaming Fist and protect the Elturgardian refugees she was ordered to watch over.",
      knows: "She saw the assassin fire the arrow and killed him. She knows Segren and Wellum are Hellrider descendants, and that the refugees are in a warehouse on Stormshore Street. She correctly believes the Watch and Flaming Fist won't provide backup.",
      voice: "Direct, no-nonsense military bearing. Fearless to the point of recklessness. Scarred face, red hair.",
      quote: "You've earned this, and I think you will need it more than I will."
    },
    {
      name: "Dara",
      statBlock: "Not specified (cleric of Ilmater, non-combatant)",
      alignment: "NG",
      wants: "To find holy warriors willing to accompany her into the Nine Hells on a mission from Ilmater to reclaim the souls of the slain.",
      knows: "She has read the Book of Exalted Deeds and possesses the powers of a full-fledged cleric. She has been undergoing a rite of anointing at a shrine of Ilmater.",
      voice: "Calm, wise beyond her ten years, often speaks of Ilmater's teachings. Single-minded about her mission.",
      quote: "I need brave adventurers to accompany me to Avernus—will you accept the challenge?"
    },
    {
      name: "Duke Dillard Portyr",
      statBlock: "Noble / CR 1/8",
      alignment: "LN",
      wants: "To avoid conflict and reassure the public, even though he hates responsibility.",
      knows: "The ruling council is aware of the murders and has identified the perpetrator as Gharizol. The Watch is on edge about devilish activity.",
      voice: "Loud but occasionally hoarse, pauses often to catch his breath. Short, portly, wears a shabby black wig. Easily led.",
      quote: "Citizens of Baldur's Gate, your council is aware of these grisly murders and I assure you, all possible steps are being taken..."
    },
    {
      name: "Gharizol",
      statBlock: "Bearded Devil / CR 3",
      alignment: "LE",
      wants: "To systematically hunt and kill the descendants of Elturel's Hellriders as Zariel's revenge.",
      knows: "He knows the identities of the Hellrider descendants and has been dispatched by Zariel to exact her final revenge upon Elturel.",
      voice: "Megalomaniacal, utterly contemptuous of mortals. Boastful in combat.",
      quote: "Tremble, mortals, for I am Gharizol!"
    },
    {
      name: "Ghorin (Rinzel)",
      statBlock: "Planetar (true form) / appears as elderly commoner",
      alignment: "LG",
      wants: "To protect Dara from all harm, no matter the cost.",
      knows: "He knows what a soul coin is and regards it with disgust. He knows Dara's true mission and her divine empowerment.",
      voice: "Sharp as a tack despite apparent age. Grim stoicism, brooks no nonsense, has a story about everything. Keen eyes that miss nothing.",
      quote: "Fai Chen..."
    },
    {
      name: "Hastrine Leaftender",
      statBlock: "Scout / CR 1/2",
      alignment: "NG",
      wants: "To discover how they can best aid all those affected by the events at Elturel.",
      knows: "That Dara has gone missing along with Ghorin. They possess a potion of growth they may share if the situation is desperate.",
      voice: "Speaks in cryptic rhymes due to lingering effects of a long stint in the Feywild. Nonbinary elf, furrier and herbalist.",
      quote: "The child has wandered, shadow-trailed, where mending hands and hope prevailed."
    },
    {
      name: "Segren Hall",
      statBlock: "Commoner / CR 0",
      alignment: "CG",
      wants: "To protect his wife Vasha; follows her lead unquestioningly.",
      knows: "He is a descendant of the original Hellriders, which is common knowledge among the refugees.",
      voice: "Very strong but easily confused due to a horse kick to the head. Fiercely protective.",
      quote: "Vasha says we stay, so we stay."
    },
    {
      name: "Wellum Smith",
      statBlock: "Guard / CR 1/8",
      alignment: "NG",
      wants: "He is in love with the mysterious Hastrine.",
      knows: "He is a descendant of the original Hellriders and a smith by trade who knows how to use a sword.",
      voice: "A bit too fond of drink; the lack of booze has him on edge. Has secretly stashed a bottle of wine.",
      quote: "Hand me a blade and point me at 'em. I've had worse days than this—though not many, mind."
    },
    {
      name: "Fai Chen",
      statBlock: "Not specified (non-combatant)",
      alignment: "Not specified in module.",
      wants: "To offer the characters transport to the Nine Hells.",
      knows: "He has heard the characters are heading to Hell and has arrived with a cart and mule.",
      voice: "Cheerful Shou man, irreverent, dramatic entrance. Accompanied by a blue pseudodragon.",
      quote: "Well met! I heard you're heading to Hell. Need a lift?"
    }
  ],

  skillChecks: [
    {
      location: "Part 1A - Market Massacre",
      check: "Cha (Persuasion)",
      dc: "12",
      success: "Convince Elendra and Ravek (Watch guards) to help fight the devils."
    },
    {
      location: "Part 1A - Market Massacre",
      check: "Cha (Intimidation)",
      dc: "14",
      success: "Steer the crowd away from the area, removing the difficult terrain and half cover penalties."
    },
    {
      location: "Part 2A - Warehouse Preparation",
      check: "Dex (Thieves' Tools)",
      dc: "10",
      success: "Pick or re-lock the office door in the warehouse."
    },
    {
      location: "Part 2A - Warehouse Preparation",
      check: "Wis (Perception)",
      dc: "15",
      success: "Find a secret drawer in the office desk containing semi-precious gemstones."
    },
    {
      location: "Bonus A - Stormshore Street",
      check: "Con (Athletics)",
      dc: "15",
      success: "Characters who run immediately after the cultists reach the bend in time to see them disappear down Chalk Alley."
    },
    {
      location: "Bonus A - Stormshore Street",
      check: "Cha (Intimidation)",
      dc: "15",
      success: "Convince Agathe Appledown to share where the cultists went without paying 3d6 gold."
    },
    {
      location: "Bonus B - Chalk Alley",
      check: "Wis (Survival)",
      dc: "12",
      success: "Notice many fresh tracks leading to the dead end of the alley."
    },
    {
      location: "Bonus B - Chalk Alley",
      check: "Wis (Perception)",
      dc: "12",
      success: "Find a loose piece of masonry hiding a door handle that opens the secret door."
    },
    {
      location: "Bonus B - Chalk Alley",
      check: "Int (Investigation)",
      dc: "15",
      success: "Find the glyph of warding (infernal 'G') below the door handle before triggering it."
    },
    {
      location: "Bonus B - Cultists' Cave",
      check: "Wis (Perception)",
      dc: "15",
      success: "Hear fluttering and scampering sounds from invisible imps lurking on the ceiling in area C1."
    },
    {
      location: "Bonus B - Cultists' Cave",
      check: "Wis (Perception)",
      dc: "18",
      success: "Locate a small iron strongbox buried in the sand in area C1."
    },
    {
      location: "Bonus B - Cultists' Cave",
      check: "Dex (Thieves' Tools)",
      dc: "15",
      success: "Pick the lock on the iron strongbox to access silver, gold coins, and semi-precious stones."
    },
    {
      location: "Bonus A - Chase Complication 1",
      check: "Dex (Acrobatics)",
      dc: "15",
      success: "Avoid a column of Flaming Fist soldiers; failure means the crowd counts as 10 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 2",
      check: "Int (Check)",
      dc: "10",
      success: "Navigate a maze of handcarts; failure means 10 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 3",
      check: "Con (Saving Throw)",
      dc: "10",
      success: "Avoid being blinded by smoke from a cooking fire until end of turn (speed halved while blinded)."
    },
    {
      location: "Bonus A - Chase Complication 4",
      check: "Dex (Acrobatics)",
      dc: "10",
      success: "Slip past an artist blocking the street; failure means 5 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 5",
      check: "Dex (Saving Throw)",
      dc: "10",
      success: "Avoid slipping on rain-slicked street and falling prone."
    },
    {
      location: "Bonus A - Chase Complication 6",
      check: "Dex (Acrobatics)",
      dc: "15",
      success: "Get past a marriage procession; failure means 10 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 7",
      check: "Dex (Acrobatics)",
      dc: "10",
      success: "Navigate a road under repair; failure means 10 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 9",
      check: "Dex (Acrobatics)",
      dc: "10",
      success: "Get through a pack of fighting cats; failure means 1d4 slashing damage and 5 ft of difficult terrain."
    },
    {
      location: "Bonus A - Chase Complication 10",
      check: "Dex (Acrobatics)",
      dc: "10",
      success: "Avoid a vegetable merchant's cart; failure means the merchant throws a beet dealing 1d4 bludgeoning damage."
    }
  ],

  magicItems: [
    {
      name: "Periapt of Health",
      rarity: "Uncommon",
      attunement: false,
      summary: "While wearing this pendant, you are immune to contracting any disease. If already infected, the disease's effects are suppressed while wearing it."
    },
    {
      name: "Potion of Healing",
      rarity: "Common",
      attunement: false,
      summary: "Regain 2d4 + 2 hit points when you drink this potion."
    },
    {
      name: "Potion of Growth",
      rarity: "Uncommon",
      attunement: false,
      summary: "Gain the 'enlarge' effect of enlarge/reduce for 1d4 hours (no concentration required)."
    },
    {
      name: "Soul Coin",
      rarity: "Uncommon",
      attunement: false,
      summary: "A 5-inch iron disc with 3 charges; expend 1 charge to gain 1d10 temporary HP (Drain Life) or telepathically ask the trapped soul a question (Query). Non-evil creatures carrying more soul coins than their Con modifier have disadvantage on attacks, checks, and saves."
    }
  ],

  downtime: "Not specified in module.",
  renown: "Not specified in module.",

  statBlocks: [
    {
      name: "Barbed Devil",
      cr: "5",
      size: "Medium",
      type: "fiend (devil)",
      alignment: "lawful evil",
      ac: "15 (natural armor)",
      hp: "110 (13d8 + 52)",
      speed: "30 ft.",
      str: "16 (+3)",
      dex: "17 (+3)",
      con: "18 (+4)",
      int: "12 (+1)",
      wis: "14 (+2)",
      cha: "14 (+2)",
      saves: "Str +6, Con +7, Wis +5, Cha +5",
      skills: "Deception +5, Insight +5, Perception +8",
      resist: "cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
      immune: "fire, poison",
      condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 18",
      traits: [
        { name: "Barbed Hide", text: "At the start of each of its turns, the barbed devil deals 5 (1d10) piercing damage to any creature grappling it." },
        { name: "Devil's Sight", text: "Magical darkness doesn't impede the devil's darkvision." },
        { name: "Magic Resistance", text: "The devil has advantage on saving throws against spells and other magical effects." }
      ],
      actions: [
        { name: "Multiattack", text: "The devil makes three melee attacks: one with its tail and two with its claws. Alternatively, it can use Hurl Flame twice." },
        { name: "Claw", text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
        { name: "Tail", text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage." },
        { name: "Hurl Flame", text: "Ranged Spell Attack: +5 to hit, range 150 ft., one target. Hit: 10 (3d6) fire damage. If the target is a flammable object that isn't being worn or carried, it also catches fire." }
      ]
    },
    {
      name: "Bearded Devil",
      cr: "3",
      size: "Medium",
      type: "fiend (devil)",
      alignment: "lawful evil",
      ac: "13 (natural armor)",
      hp: "52 (8d8 + 16)",
      speed: "30 ft.",
      str: "16 (+3)",
      dex: "15 (+2)",
      con: "15 (+2)",
      int: "9 (-1)",
      wis: "11 (+0)",
      cha: "11 (+0)",
      saves: "Str +5, Con +4, Wis +2",
      skills: "",
      resist: "cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
      immune: "fire, poison",
      condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 10",
      traits: [
        { name: "Devil's Sight", text: "Magical darkness doesn't impede the devil's darkvision." },
        { name: "Magic Resistance", text: "The devil has advantage on saving throws against spells and other magical effects." },
        { name: "Steadfast", text: "The devil can't be frightened while it can see an allied creature within 30 feet of it." }
      ],
      actions: [
        { name: "Multiattack", text: "The devil makes two attacks: one with its beard and one with its glaive." },
        { name: "Beard", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) piercing damage, and the target must succeed on a DC 12 Constitution saving throw or be poisoned for 1 minute. While poisoned in this way, the target can't regain hit points. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
        { name: "Glaive", text: "Melee Weapon Attack: +5 to hit, reach 10 ft., one target. Hit: 8 (1d10 + 3) slashing damage. If the target is a creature other than an undead or a construct, it must succeed on a DC 12 Constitution saving throw or lose 5 (1d10) hit points at the start of each of its turns due to an infernal wound. Each time the devil hits the wounded target with this attack, the damage dealt by the wound increases by 5 (1d10). Any creature can take an action to stanch the wound with a successful DC 12 Wisdom (Medicine) check. The wound also closes if the target receives magical healing." }
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
        { name: "Dark Devotion", text: "The cultist has advantage on saving throws against being charmed or frightened." }
      ],
      actions: [
        { name: "Scimitar", text: "Melee Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) slashing damage." }
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
      name: "Imp",
      cr: "1",
      size: "Tiny",
      type: "fiend (devil, shapechanger)",
      alignment: "lawful evil",
      ac: "13",
      hp: "10 (3d4 + 3)",
      speed: "20 ft., fly 40 ft.",
      str: "6 (-2)",
      dex: "17 (+3)",
      con: "13 (+1)",
      int: "11 (+0)",
      wis: "12 (+1)",
      cha: "14 (+2)",
      saves: "",
      skills: "Deception +4, Insight +3, Persuasion +4, Stealth +5",
      resist: "cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
      immune: "fire, poison",
      condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 11",
      traits: [
        { name: "Shapechanger", text: "The imp can use its action to polymorph into a beast form that resembles a rat (speed 20 ft.), a raven (20 ft., fly 60 ft.), or a spider (20 ft., climb 20 ft.), or back into its true form. Its statistics are the same in each form, except for the speed changes noted. Any equipment it is wearing or carrying isn't transformed. It reverts to its true form if it dies." },
        { name: "Devil's Sight", text: "Magical darkness doesn't impede the imp's darkvision." },
        { name: "Magic Resistance", text: "The imp has advantage on saving throws against spells and other magical effects." }
      ],
      actions: [
        { name: "Sting (Bite in Beast Form)", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one." },
        { name: "Invisibility", text: "The imp magically turns invisible until it attacks or until its concentration ends (as if concentrating on a spell). Any equipment the imp wears or carries is invisible with it." }
      ]
    },
    {
      name: "Nupperibo",
      cr: "1/2",
      size: "Medium",
      type: "fiend (devil)",
      alignment: "lawful evil",
      ac: "13 (natural armor)",
      hp: "11 (2d8 + 2)",
      speed: "20 ft.",
      str: "16 (+3)",
      dex: "11 (+0)",
      con: "13 (+1)",
      int: "3 (-4)",
      wis: "8 (-1)",
      cha: "1 (-5)",
      saves: "",
      skills: "Perception +1",
      resist: "acid, cold; bludgeoning, piercing, and slashing from nonmagical attacks that aren't silvered",
      immune: "fire, poison",
      condImmune: "blinded, charmed, frightened, poisoned",
      senses: "blindsight 10 ft. (blind beyond this radius), passive Perception 11",
      traits: [
        { name: "Cloud of Vermin", text: "Any creature, other than a devil, that starts its turn within 20 feet of the nupperibo must make a DC 11 Constitution saving throw. A creature within the areas of two or more nupperibos makes the saving throw with disadvantage. On a failure, the creature takes 2 (1d4) piercing damage." },
        { name: "Hunger-Driven", text: "In the Nine Hells, the nupperibos can flawlessly track any creature that has taken damage from any nupperibo's Cloud of Vermin within the previous 24 hours." }
      ],
      actions: [
        { name: "Bite", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage." }
      ]
    },
    {
      name: "Swarm of Insects (Centipedes)",
      cr: "1/2",
      size: "Medium",
      type: "swarm of Tiny beasts",
      alignment: "unaligned",
      ac: "12 (natural armor)",
      hp: "22 (5d8)",
      speed: "20 ft., climb 20 ft.",
      str: "3 (-4)",
      dex: "13 (+1)",
      con: "10 (+0)",
      int: "1 (-5)",
      wis: "7 (-2)",
      cha: "1 (-5)",
      saves: "",
      skills: "",
      resist: "bludgeoning, piercing, slashing",
      immune: "",
      condImmune: "charmed, frightened, grappled, paralyzed, petrified, prone, restrained, stunned",
      senses: "blindsight 10 ft., passive Perception 8",
      traits: [
        { name: "Swarm", text: "The swarm can occupy another creature's space and vice versa, and the swarm can move through any opening large enough for a Tiny insect. The swarm can't regain hit points or gain temporary hit points." },
        { name: "Swarm of Centipedes", text: "A creature reduced to 0 hit points by a swarm of centipedes is stable but poisoned for 1 hour, even after regaining hit points, and paralyzed while poisoned in this way." }
      ],
      actions: [
        { name: "Bites", text: "Melee Weapon Attack: +3 to hit, reach 0 ft., one target in the swarm's space. Hit: 10 (4d4) piercing damage, or 5 (2d4) piercing damage if the swarm has half of its hit points or fewer." }
      ]
    },
    {
      name: "Spined Devil",
      cr: "2",
      size: "Small",
      type: "fiend (devil)",
      alignment: "lawful evil",
      ac: "13 (natural armor)",
      hp: "22 (5d6 + 5)",
      speed: "20 ft., fly 40 ft.",
      str: "10 (+0)",
      dex: "15 (+2)",
      con: "12 (+1)",
      int: "11 (+0)",
      wis: "14 (+2)",
      cha: "8 (-1)",
      saves: "",
      skills: "",
      resist: "cold; bludgeoning, piercing, and slashing from nonmagical attacks not made with silvered weapons",
      immune: "fire, poison",
      condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 12",
      traits: [
        { name: "Devil's Sight", text: "Magical darkness doesn't impede the devil's darkvision." },
        { name: "Flyby", text: "The devil doesn't provoke an opportunity attack when it flies out of an enemy's reach." },
        { name: "Limited Spines", text: "The devil has twelve tail spines. Used spines regrow by the time the devil finishes a long rest." },
        { name: "Magic Resistance", text: "The devil has advantage on saving throws against spells and other magical effects." }
      ],
      actions: [
        { name: "Multiattack", text: "The devil makes two attacks: one with its bite and one with its fork or two with its tail spines." },
        { name: "Bite", text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 5 (2d4) slashing damage." },
        { name: "Fork", text: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage." },
        { name: "Tail Spine", text: "Ranged Weapon Attack: +4 to hit, range 20/80 ft., one target. Hit: 4 (1d4 + 2) piercing damage plus 3 (1d6) fire damage." }
      ]
    }
  ],

  bonusA: {
    title: "Escape the Cultists (Bonus Objective A)",
    timing: "After completing Part 1 (The Assassin) but before Part 2 (Infernal Assault)",
    trigger: "Twelve scarlet-robed cultists appear at an alley 100 feet away, point at the characters, and shout 'Stop them!' More cultists and perhaps devils are heard in the alley behind them.",
    goal: "Flee from the cultists across Baldur's Gate (from the Wide to Stormshore Street warehouse) using the DMG Chase rules. Cultists start 100 feet behind.",
    failEffect: "If the cultists catch up or the characters pass all landmarks with cultists still in pursuit, Bonus Objective A is failed. The preparation time in Part 2A is reduced from 20 minutes to just 5 minutes of real time.",
    creatures: "12 cultists (CR 1/8 each). If characters stay and fight, more cultists and imps are visible in the distance—standing to fight means automatic failure of the bonus objective.",
    mechanics: "Use DMG Chase rules (chapter 8). Roll d20 each turn for chase complications including Flaming Fist column (DC 15 Dex Acrobatics), handcart maze (DC 10 Int), cooking smoke (DC 10 Con save or blinded), chalk artist (DC 10 Dex Acrobatics or 1 gp), slippery street (DC 10 Dex save or prone), marriage procession (DC 15 Dex Acrobatics), road repair (DC 10 Dex Acrobatics), guard orders halt (opportunity attack +3, 1d6+1), fighting cats (DC 10 Dex Acrobatics or 1d4 slashing), beet cart (DC 10 Dex Acrobatics or 1d4 bludgeoning). Rolls of 19-20 pass a landmark.",
    loot: "None.",
    dmnote: "Chesserie insists on running to the warehouse. If characters refuse, she leaves them to face the cultists alone. Landmarks passed on 19-20 rolls: Heap Gate, The Blushing Mermaid, The Splurging Sturgeon, Baldur's Mouth, Harbormaster's Office, Warehouse (chase ends). Reward creativity in overcoming complications.",
    chaseComplications: [
      { d20: "1", complication: "Flaming Fist column forces everyone aside. DC 15 Dex (Acrobatics) or crowd = 10 ft difficult terrain." },
      { d20: "2", complication: "Maze of handcarts. DC 10 Intelligence check or maze = 10 ft difficult terrain." },
      { d20: "3", complication: "Cooking fire belches smoke. DC 10 Con save or blinded until end of turn; speed halved while blinded." },
      { d20: "4", complication: "Chalk artist blocks the way. DC 10 Dex (Acrobatics) or toss 1 gp; failure = 5 ft difficult terrain." },
      { d20: "5", complication: "Slippery street. DC 10 Dex save or fall prone." },
      { d20: "6", complication: "Marriage procession blocks way. DC 15 Dex (Acrobatics) or procession = 10 ft difficult terrain." },
      { d20: "7", complication: "Road under repair. DC 10 Dex (Acrobatics) or area = 10 ft difficult terrain." },
      { d20: "8", complication: "Guard orders halt. If you move 20+ ft, guard makes opportunity attack: spear +3, 1d6+1 piercing. Guard doesn't chase." },
      { d20: "9", complication: "Dozens of cats fighting over food. DC 10 Dex (Acrobatics) or 1d4 slashing and cats = 5 ft difficult terrain." },
      { d20: "10", complication: "Vegetable merchant with beet cart. DC 10 Dex (Acrobatics) or merchant throws beet: 1d4 bludgeoning." },
      { d20: "11-18", complication: "No complication." },
      { d20: "19-20", complication: "Pass a landmark (in order: Heap Gate, Blushing Mermaid, Splurging Sturgeon, Baldur's Mouth, Harbormaster's Office, Warehouse)." }
    ]
  },

  bonusB: {
    title: "Refugee Rescue (Bonus Objective B)",
    timing: "After completing Part 2B (The Assault) but before the Wrap Up scene",
    trigger: "A surviving refugee tells the characters that Wellum Smith was carried off by cultists during the battle.",
    goal: "Track the cultists through Stormshore Street and Chalk Alley to a hidden cave, then rescue Wellum Smith before the cultists kill him.",
    failPenalty: "Wellum dies after 4 rounds in the pit with the centipede swarm (unconscious after 1 round, dead after 4).",
    creatures: "Stormshore Street: Agathe Appledown (idler, wants 3d6 gp for info). Chalk Alley: Margritte (CN female commoner, drunk, swings clumsy punches). Cave: 10 cultists chanting around pentagram, 2 invisible imps on ceiling in C1, 1 cultist with swarm of insects (centipedes) in C2 above Wellum's pit. Adjust: Very Weak remove 3 cultists and both imps; Weak remove 3 cultists and 1 imp; Strong add 1 imp; Very Strong add 2 imps.",
    mechanics: "Secret door in alley (DC 12 Perception to find). Glyph of warding triggers if opened without saying 'Praise Gharizol' — DC 15 Dex save, 2d10 fire damage (half on save), 20-ft-radius sphere. Glyph found with DC 15 Int (Investigation). Wellum in 3-ft-wide, 7-ft-deep pit. Centipedes attack him: unconscious after 1 round, dead after 4. Imps stay invisible until characters pass C1, then attack from rear.",
    loot: "Wooden trunk with clothing and 3 sets of cultist robes. Iron strongbox (DC 18 Perception to find, DC 15 thieves' tools to pick): silver, gold coins, semi-precious stones. Margritte has coppers and half a skin of terrible wine.",
    failReward: "If Wellum dies, characters can recover his body. Proceed to Wrap Up either way.",
    dmnote: "The 4-round death timer on Wellum creates real urgency. The glyph of warding can deal significant damage to a low-level party—reward Investigation checks. Margritte's 'Gammer-goal' is a drunk mispronunciation of 'Gharizol' and can serve as a clue about the password. The imps ambushing from behind once characters enter C2 can split the party's attention between saving Wellum and fighting."
  }
};

module.exports = DATA;