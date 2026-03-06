const DATA = {
  code:       "CCC-GHC-BK1-08",
  title:      "The Hunt for Cutter Jack",
  levels:     "1–4",
  apl:        "3",
  duration:   "~2 hrs",
  players:    "3–7",
  location:   "Border Kingdoms (Irl / Arnglar / Broke Pick)",
  reward:     "+1 level (milestone)",

  background:
    "Three days ago, a caravan bearing a shipment of uncut diamonds was robbed outside Irl by highwaymen led by Cutter Jack. " +
    "The stolen stones belonged to the Fendoun clan and the loss threatens the solvency of their jewelry business. " +
    "Brini Fendoun tracked several of Jack’s hired thugs to the Swollen Goat tavern, where the characters arrive just as accusations turn into violence.",

  keyFacts:
    "Cutter Jack is hiding at the ruined fort called Broke Pick outside Arnglar while waiting for a fence. " +
    "His crew has been trapped by ghouls that tunneled into the basement and killed several brigands. " +
    "The main objective is recovering the Fendoun diamonds; bringing Cutter Jack to justice is optional but encouraged.",

  scenes: [
    {
      name: "Chaos in a Small Town",
      time: "~30 min",
      goal: "Meet Brini Fendoun, learn about the stolen diamonds, and establish the hook.",
      outcome: "The party is drawn into Brini’s confrontation with four alleged brigands."
    },
    {
      name: "The Brawl",
      time: "~30 min",
      goal: "Intervene in the tavern fight and learn Cutter Jack’s whereabouts.",
      outcome: "The brigands or bystanders reveal that Cutter Jack is hiding at Broke Pick outside Arnglar."
    },
    {
      name: "Subterranean Blues",
      time: "~45 min",
      goal: "Reach Broke Pick, recover the diamonds, and deal with Cutter Jack and/or the undead infestation.",
      outcome: "The party secures the diamonds, bargains or battles with the brigands, and survives the ghouls."
    },
    {
      name: "Wrap-Up",
      time: "~15 min",
      goal: "Resolve the aftermath and distribute rewards.",
      outcome: "If Brini and the diamonds return to Irl, the party earns the best reward outcome."
    },
  ],

  sceneNotes: [
    {
      name: "Chaos in a Small Town", time: "~30 min",
      setting:   "The Swollen Goat tavern and trading post south of Irl; busy, relatively clean, and filled with merchants, teamsters, and workers.",
      trigger:   "The party enters as Brini Fendoun—standing on a stool and flanked by two hired guards—accuses four rough-looking humans of brigandage and demands they submit to a magistrate.",
      creatures: "Brini Fendoun, Boris Brokebranch, Liam Tallstag, and four suspected brigands seated at a table.",
      tactics:   "This is setup rather than a full combat scene. Brini is indignant and excited; the brigands are hostile and on the verge of violence.",
      loot:      "No immediate loot. The reward is the hook, Brini’s offer, and information about Cutter Jack.",
      dmnote:    "Play Brini as earnest, clever, and a bit overconfident. This scene should move quickly into the brawl."
    },
    {
      name: "The Brawl", time: "~30 min",
      setting:   "Inside the lively Swollen Goat tavern. Tables and benches provide cover and improvised weapons. Patrons and staff stay out of the fight.",
      trigger:   "As Brini finishes accusing them, the brigands rise and move to beat him and his hirelings unconscious.",
      creatures: "Grimma, Shae, Nortun, and Brillia (bandits); Brini; Boris Brokebranch; Liam Tallstag; assorted noncombatant patrons.",
      tactics:   "The brigands start with a tavern brawl but escalate if pressed. Boris and Liam stick around for fistfights but surrender and flee once steel is drawn. The brigands can be intimidated into revealing Cutter Jack’s location.",
      loot:      "The party learns Cutter Jack is hiding at Broke Pick near Arnglar, and that his core crew includes a priest of Bane, a crossbow-wielding woman, a maul-user, and a squirrely pinfinger player.",
      dmnote:    "This is not meant to be a deadly fight. If all obvious sources of information are lost, a helpful bar patron can still point the party toward Cutter Jack, Broke Pick, and Arnglar."
    },
    {
      name: "Subterranean Blues", time: "~45 min",
      setting:   "Broke Pick, a ruined fort on a windswept knoll outside Arnglar. The upper level is dim and overcast; the lower level is dark, foul, and infested with ghouls.",
      trigger:   "After roughly a day and a half of travel from the Swollen Goat, the party reaches the abandoned-looking fort.",
      creatures: "Cutter Jack (bandit captain), Brother Burt (priest), Evil-Eye Osha (spy), Torval Three-Thumbs (thug), two wolves named Misha and Pavel, four ghouls, and one ghast.",
      tactics:   "The wolves howl and delay intruders. Ghouls investigate noise and fight to eat the living. Cutter Jack prefers parley if the party looks strong and treachery if they look weak. Brother Burt honors reasonable bargains only as long as they favor his survival.",
      loot:      "The Fendoun diamonds, plus a periapt of wound closure if Brini returns alive with the party and the diamonds are recovered for the clan.",
      dmnote:    "This scene can become very dangerous if the party fights both undead and brigands at once. Lean into the brigands’ opportunism and the basement’s grotesque atmosphere."
    },
    {
      name: "Wrap-Up", time: "~15 min",
      setting:   "Irl, if the party returns with Brini and the diamonds; otherwise wherever the survivors limp away with the loot.",
      trigger:   "The party secures the diamonds and decides whether to return them, turn in survivors, or betray Brini.",
      creatures: "Brini Fendoun, surviving brigands if captured, and the Fendoun clan.",
      tactics:   "N/A",
      loot:      "If Brini and the diamonds return to Irl: periapt of wound closure and 150 gp each in diamonds usable as spell components. If Brini dies or does not return: the party gets the diamonds but no magic item. If they betray or never ally with Brini: 300 gp in diamonds suitable for spell components.",
      dmnote:    "If Cutter Jack or his crew survive and Brini lives, Brini insists they be returned to Irl for judgment. Success also unlocks the downtime activity It’s a Princess Cut."
    },
  ],

  npcs: [
    {
      name:       "Brini Fendoun",
      statBlock:  "Brini Fendoun / CR 2",
      alignment:  "NG",
      wants:      "Recover the Fendoun diamonds as quickly and efficiently as possible and preserve his family’s legacy and reputation.",
      knows:      "The diamonds were stolen three days ago from a caravan headed to Irl. His contacts tracked four of Cutter Jack’s hired thugs to the Swollen Goat. He knows Cutter Jack is a violent criminal and offers a generous reward for recovering the diamonds and bringing Jack to justice.",
      voice:      "Jovial, quick-witted, excitable, and eloquent. He gestures dramatically and assumes people can be reasoned with if approached the right way.",
      quote:      "\"Those diamonds are my family’s legacy, and I mean to see them returned.\"",
    },
    {
      name:       "Cutter Jack",
      statBlock:  "Bandit Captain / CR 2",
      alignment:  "NE",
      wants:      "Stay alive long enough to sell the uncut diamonds to his fence and turn a fortune from the heist.",
      knows:      "He is trapped in Broke Pick with his remaining crew while undead infest the basement. He carries the diamonds and may bargain them away if it keeps him alive.",
      voice:      "Sarcastic, self-interested, and threateningly casual. He treats every conversation like a negotiation he intends to win.",
      quote:      "\"Help me get out alive and maybe we can all walk away richer.\"",
    },
    {
      name:       "Brother Burt",
      statBlock:  "Priest / CR 2",
      alignment:  "LE",
      wants:      "Escape Broke Pick alive and preserve himself above all else.",
      knows:      "The basement is overrun by flesh-eating undead; Cutter Jack’s crew is cornered and desperate. He will honor a reasonable bargain unless he feels betrayed first.",
      voice:      "Stocky, foul-mouthed, ill-tempered, and bullying. He spits contempt, especially toward anyone he identifies as a follower of Sune.",
      quote:      "\"I’ll keep my word—right up until you give me cause not to.\"",
    },
    {
      name:       "Evil-Eye Osha",
      statBlock:  "Spy / CR 1",
      alignment:  "NE",
      wants:      "Survive the hideout disaster and come out ahead if possible.",
      knows:      "She understands the party, Cutter Jack, and the undead are all threats to be exploited. She knows the crew is trapped and that the diamonds may be the price of survival.",
      voice:      "Dry, darkly humorous, and coldly observant. She reacts with calculated fury to any mockery about her eyes.",
      quote:      "\"Laugh at my eyes again and I’ll put a bolt through yours.\"",
    },
    {
      name:       "Torval Three-Thumbs",
      statBlock:  "Thug / CR 1/2",
      alignment:  "NE",
      wants:      "Stay alive with minimal effort and, if possible, save his wolves Misha and Pavel.",
      knows:      "He knows the wolves guard the approach, the crew is boxed in, and the undead are the immediate problem.",
      voice:      "Lazy, fidgety, and opportunistic. He speaks like a man already looking for the easiest exit.",
      quote:      "\"There’s got to be an easier way through this.\"",
    },
  ],

  skillChecks: [
    { location: "Chaos in a Small Town", check: "Int (History)", dc: "12", success: "Recognize Cutter Jack as a violent criminal who preys upon merchants in the Border Kingdoms." },
    { location: "The Brawl",            check: "Cha (Intimidation)", dc: "14", success: "The brigands reveal that Cutter Jack is holed up at Broke Pick outside Arnglar." },
    { location: "Broke Pick (general)", check: "Str (Athletics)", dc: "10", success: "Force open badly rotted interior doors." },
    { location: "Area B. East Wall",    check: "Int (Investigation)", dc: "15", success: "Notice the secret door/hatch in the floor." },
    { location: "Area B. East Wall",    check: "Wis (Perception)", dc: "15", success: "Notice the secret door/hatch in the floor." },
    { location: "Excavation shaft",     check: "Con save", dc: "12", success: "Avoid gaining a level of exhaustion while excavating for an hour in terrible weather." },
    { location: "Area C. Cutter’s Camp",check: "Con (Athletics)", dc: "10", success: "Avoid becoming nauseated by the horrid smell." },
    { location: "Area C. Cutter’s Camp",check: "Int (Nature)", dc: "10", success: "Determine that the ghouls most likely made the grisly markings and mess in the chamber." },
    { location: "Area C. Cutter’s Camp",check: "Int (Investigation)", dc: "10", success: "Determine that the ghouls most likely made the grisly markings and mess in the chamber." },
    { location: "Area D. Cistern",      check: "Str (Athletics)", dc: "20 x2", success: "Break through the barricaded oak door with two non-consecutive successful checks." },
    { location: "Area F. The Tunnel",   check: "Str (Athletics)", dc: "15", success: "Break through the battered barricade blocking the north exit to area E." },
  ],

  magicItems: [
    {
      name: "Ilmater’s Bleeding Heart (Periapt of Wound Closure)",
      rarity: "uncommon",
      attunement: true,
      summary: "Stabilize automatically at the start of your turn while dying; when you roll a Hit Die to regain hit points, double the number restored."
    },
  ],

  downtime: "5 downtime days; unlocks the downtime activity “It’s a Princess Cut” if the diamonds are returned to Irl with Brini Fendoun.",
  renown:   "none",

  statBlocks: [
    {
      name: "CUTTER JACK", cr: "2", size: "Medium", type: "humanoid (human)", alignment: "neutral evil",
      ac: "15 (studded leather)", hp: "65 (10d8+20)", speed: "30 ft.",
      str: "15 (+2)", dex: "16 (+3)", con: "14 (+2)", int: "14 (+2)", wis: "11 (+0)", cha: "14 (+2)",
      saves: "Str +4, Dex +5, Wis +2",
      skills: "Athletics +4, Deception +4",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 10",
      traits: [],
      actions: [
        { name: "Multiattack", text: "The captain makes three melee attacks: two with its scimitar and one with its dagger. Or the captain makes two ranged attacks with its daggers." },
        { name: "Scimitar", text: "+5 to hit, reach 5 ft., one target. Hit: 6 (1d6+3) slashing damage." },
        { name: "Dagger", text: "+5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4+3) piercing damage." },
        { name: "Parry (Reaction)", text: "The captain adds 2 to its AC against one melee attack that would hit it. To do so, the captain must see the attacker and be wielding a melee weapon." },
      ],
    },
    {
      name: "BROTHER BURT", cr: "2", size: "Medium", type: "humanoid (human)", alignment: "lawful evil",
      ac: "13 (chain shirt)", hp: "27 (5d8+5)", speed: "25 ft.",
      str: "10 (+0)", dex: "10 (+0)", con: "12 (+1)", int: "13 (+1)", wis: "16 (+3)", cha: "13 (+1)",
      saves: "",
      skills: "Medicine +7, Persuasion +3, Religion +4",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 13",
      traits: [
        { name: "Divine Eminence", text: "As a bonus action, the priest can expend a spell slot to cause its melee weapon attacks to magically deal an extra 10 (3d6) radiant damage to a target on a hit until the end of the turn. If the priest expends a spell slot of 2nd level or higher, the extra damage increases by 1d6 for each level above 1st." },
        { name: "Spellcasting", text: "The priest is a 5th-level spellcaster. Its spellcasting ability is Wisdom (spell save DC 13, +5 to hit with spell attacks). Prepared spells: cantrips (at will): light, sacred flame, thaumaturgy; 1st level (4 slots): bless, guiding bolt, inflict wounds; 2nd level (3 slots): lesser restoration, spiritual weapon; 3rd level (2 slots): dispel magic, spirit guardians." },
      ],
      actions: [
        { name: "Mace", text: "+2 to hit, reach 5 ft., one target. Hit: 3 (1d6) bludgeoning damage." },
      ],
    },
    {
      name: "EVIL-EYE OSHA", cr: "1", size: "Medium", type: "humanoid (any race)", alignment: "any alignment",
      ac: "12", hp: "27 (6d8)", speed: "30 ft.",
      str: "10 (+0)", dex: "15 (+2)", con: "10 (+0)", int: "12 (+1)", wis: "14 (+2)", cha: "16 (+3)",
      saves: "",
      skills: "Deception +5, Insight +4, Investigation +5, Perception +6, Persuasion +5, Sleight of Hand +4, Stealth +4",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 16",
      traits: [
        { name: "Cunning Action", text: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
        { name: "Sneak Attack (1/Turn)", text: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn’t incapacitated and the spy doesn’t have disadvantage on the attack roll." },
      ],
      actions: [
        { name: "Multiattack", text: "The spy makes two melee attacks." },
        { name: "Shortsword", text: "+4 to hit, reach 5 ft., one target. Hit: 5 (1d6+2) piercing damage." },
        { name: "Hand Crossbow", text: "+4 to hit, range 30/120 ft., one target. Hit: 5 (1d6+2) piercing damage." },
      ],
    },
    {
      name: "TORVAL THREE-THUMBS", cr: "1/2", size: "Medium", type: "humanoid (any race)", alignment: "any non-good alignment",
      ac: "11 (leather armor)", hp: "32 (5d8+10)", speed: "30 ft.",
      str: "15 (+2)", dex: "11 (+0)", con: "14 (+2)", int: "10 (+0)", wis: "10 (+0)", cha: "11 (+0)",
      saves: "",
      skills: "Intimidation +2",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Pack Tactics", text: "The thug has advantage on an attack roll against a creature if at least one of the thug’s allies is within 5 feet of the creature and the ally isn’t incapacitated." },
      ],
      actions: [
        { name: "Multiattack", text: "The thug makes two melee attacks." },
        { name: "Mace", text: "+4 to hit, reach 5 ft., one creature. Hit: 5 (1d6+2) bludgeoning damage." },
        { name: "Heavy Crossbow", text: "+2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
      ],
    },
    {
      name: "GHOUL", cr: "1", size: "Medium", type: "undead", alignment: "chaotic evil",
      ac: "12", hp: "22 (5d8)", speed: "30 ft.",
      str: "13 (+1)", dex: "15 (+2)", con: "10 (+0)", int: "7 (−2)", wis: "10 (+0)", cha: "6 (−2)",
      saves: "",
      skills: "",
      resist: "", immune: "poison", condImmune: "charmed, exhaustion, poisoned",
      senses: "darkvision 60 ft., passive Perception 10",
      traits: [],
      actions: [
        { name: "Bite", text: "+2 to hit, reach 5 ft., one creature. Hit: 9 (2d6+2) piercing damage." },
        { name: "Claws", text: "+4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) slashing damage. If the target is a creature other than an elf or undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
      ],
    },
    {
      name: "GHAST", cr: "2", size: "Medium", type: "undead", alignment: "chaotic evil",
      ac: "13", hp: "36 (8d8)", speed: "30 ft.",
      str: "16 (+3)", dex: "17 (+3)", con: "10 (+0)", int: "11 (+0)", wis: "10 (+0)", cha: "8 (−1)",
      saves: "",
      skills: "",
      resist: "necrotic", immune: "poison", condImmune: "charmed, exhaustion, poisoned",
      senses: "darkvision 60 ft., passive Perception 10",
      traits: [
        { name: "Stench", text: "Any creature that starts its turn within 5 feet of the ghast must succeed on a DC 10 Constitution saving throw or be poisoned until the start of its next turn. On a successful saving throw, the creature is immune to the ghast’s Stench for 24 hours." },
        { name: "Turning Defiance", text: "The ghast and any ghouls within 30 feet of it have advantage on saving throws against effects that turn undead." },
      ],
      actions: [
        { name: "Bite", text: "+3 to hit, reach 5 ft., one creature. Hit: 12 (2d8+3) piercing damage." },
        { name: "Claws", text: "+5 to hit, reach 5 ft., one target. Hit: 10 (2d6+3) slashing damage. If the target is a creature other than an undead, it must succeed on a DC 10 Constitution saving throw or be paralyzed for 1 minute. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success." },
      ],
    },
    {
      name: "WOLF", cr: "1/4", size: "Medium", type: "beast", alignment: "unaligned",
      ac: "13 (natural armor)", hp: "11 (2d8+2)", speed: "40 ft.",
      str: "12 (+1)", dex: "15 (+2)", con: "12 (+1)", int: "3 (−4)", wis: "12 (+1)", cha: "6 (−2)",
      saves: "",
      skills: "Perception +3, Stealth +4",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 13",
      traits: [
        { name: "Keen Hearing and Smell", text: "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell." },
        { name: "Pack Tactics", text: "The wolf has advantage on an attack roll against a creature if at least one of the wolf’s allies is within 5 feet of the creature and the ally isn’t incapacitated." },
      ],
      actions: [
        { name: "Bite", text: "+4 to hit, reach 5 ft., one target. Hit: 7 (2d4+2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone." },
      ],
    },
    {
      name: "BANDIT", cr: "1/8", size: "Medium", type: "humanoid (any)", alignment: "any non-lawful alignment",
      ac: "12 (leather armor)", hp: "11 (2d8+2)", speed: "30 ft.",
      str: "11 (+0)", dex: "12 (+1)", con: "12 (+1)", int: "10 (+0)", wis: "10 (+0)", cha: "10 (+0)",
      saves: "",
      skills: "",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 10",
      traits: [],
      actions: [
        { name: "Scimitar", text: "+3 to hit, reach 5 ft., one target. Hit: 4 (1d6+1) slashing damage." },
        { name: "Light Crossbow", text: "+3 to hit, range 80/320 ft., one target. Hit: 5 (1d8+1) piercing damage." },
      ],
    },
  ],

  bonusA: {
    title:   "Not Used",
    timing:  "This adventure has no bonus objectives or side quests.",
    trigger: "N/A",
    goal:    "N/A",
    failEffect: "No effect; continue the main adventure.",
    creatures: "None.",
    mechanics: "Not used in this adventure.",
    loot:      "None.",
    dmnote:    "Leave this section in the output or delete it manually after generation if you want a cleaner final handout.",
    chaseComplications: [],
  },

  bonusB: {
    title:        "Not Used",
    timing:       "This adventure has no bonus objectives or side quests.",
    trigger:      "N/A",
    goal:         "N/A",
    failPenalty:  "None.",
    creatures:    "None.",
    mechanics:    "Not used in this adventure.",
    loot:         "None.",
    failReward:   "None.",
    dmnote:       "Safe placeholder so the script still builds successfully.",
  },
};

module.exports = DATA;