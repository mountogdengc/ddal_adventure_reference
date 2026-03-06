const DATA = {
  code: "CCC-YLRA01-01",
  title: "Her Dying Wish",
  levels: "5-10",
  apl: "8",
  duration: "~4 hrs",
  players: "3-7",
  location: "Ylraphon, Moonsea region, Forgotten Realms",
  reward: "Combat XP divided among party plus non-combat XP per character (500 for delivering letter to Aislyn, 1000 each for Orrin and Bresden). Downtime and renown per ALDMG.",

  background: "Lady Myrandah Marsh has died and her will requires her grandchildren Sir Bresden and Lord Orrin to quit adventuring or lose their inheritance. Arden Marsh hires the party to deliver this news, but Bresden and Orrin have ventured into ruins beneath the Flooded Forest seeking the Blood Metal Crown and have been captured by a morkoth using an ancient entity called the Tree of Doors to imprison creatures in eldritch amber. Meanwhile, Sunken Shadow water cultists led by Iselci Mondas seek to assassinate Bresden, mistaking him for his twin Arden who betrayed their cult.",

  keyFacts: "The morkoth in Area 8 controls the Tree of Doors and has been collecting creatures for millennia; defeating it frees all prisoners and collapses the dungeon. Bresden and Jotan Silverhammer are imprisoned in amber spheres in Area 8, while Orrin wanders Area 2 poisoned and Omidon sleeps magically in Area 6. The Selûne moon-phase puzzle in Area 7 requires inserting a crescent-moon silver sliver (adventure starts on crescent moon night) to open the portal to Area 8. If the morkoth is defeated, all amber prisons melt and hundreds of creatures are released into the Flooded Forest, including a red dragon.",

  scenes: [
    {
      name: "Part 1: Arrival in Ylraphon",
      time: "~60 min",
      goal: "Deliver Arden's letters and gather information on Bresden and Orrin's whereabouts",
      outcome: "Characters learn the Marsh cousins went to the Flooded Forest seeking the Blood Metal Crown, guided by Omidon, and are directed outside the Palisade"
    },
    {
      name: "Part 2: On the Borderlands",
      time: "~30 min",
      goal: "Find Omidon's tent or follow the Tyrantsworn to locate the dungeon entrance",
      outcome: "Characters obtain Omidon's journal and map leading to the pit entrance in the Flooded Forest, then face preserved defenders at Location G"
    },
    {
      name: "Part 3: The Dungeon (Areas 1-8)",
      time: "~120 min",
      goal: "Navigate traps and puzzles, defeat Iselci Mondas, solve the moon puzzle, and free Bresden and Jotan from the morkoth",
      outcome: "Defeating the morkoth frees all prisoners, collapses the dungeon, and releases creatures into the Flooded Forest"
    },
    {
      name: "Part 4: Conclusion",
      time: "~15 min",
      goal: "Return Bresden and Orrin to Ylraphon, deliver the Blood Metal Crown, receive rewards",
      outcome: "Bresden and Orrin swear to quit adventuring, Aislyn joins the Merchant Council, Tarn Stormbright becomes Captain of the Watch, characters receive gold medallions and story awards"
    }
  ],

  sceneNotes: [
    {
      name: "Part 1: Arrival in Ylraphon",
      time: "~60 min",
      setting: "The port town of Ylraphon — docks, Old Marsh House, Hostettler's House gambling den, town gates",
      trigger: "Characters disembark from The Blue Phantom with Arden's letters to deliver",
      creatures: "Arden Marsh (quest giver), Trell Bannon (Town Watch half-elf berserker), Aislyn Marsh (half-drow warlock), Ilasera (druid), Gwynora Ironheart (dwarf spy), Garm Stormbright (dwarf warlord/paladin), Karl Stormbright (dwarf swashbuckler), Patience Hostettler (tiefling warlock). Optional: Old Zhelad (water genasi), Clif and Gythen (wood elf drow elite warriors).",
      tactics: "No planned combat unless Old Zhelad encounter runs — Clif and Gythen attack Zhelad thinking he set them up; Zhelad tries to escape using tidal wave. Bar-fight at Hostettler's is optional expansion.",
      loot: "50 gp advance per character from Arden. Garm may bless a weapon (+1 for 24 hours) for Order of the Gauntlet members.",
      dmnote: "If time-limited, skip Hostettler's House (Location C) and go straight from Old Marsh House to the gates. Garm can be encountered anywhere. The Old Zhelad encounter should only run if 3+ hours remain. Limit Part 1 to 60 minutes."
    },
    {
      name: "Part 2: On the Borderlands",
      time: "~30 min",
      setting: "Old City refugee camp outside the Palisade, Omidon's tent, the Flooded Forest",
      trigger: "Characters exit town gates seeking Omidon or following Tyrantsworn",
      creatures: "Tyrantsworn Banites (3 knights, 7 guards), Krim Dragul (LN orc warlord), preserved defenders from Appendix 6, 4 orc blades of Ilneval at Location G",
      tactics: "Krim leads Banites on a circuitous route to the pit, plans to trigger a ward killing them. At Location G, preserved defenders and orc blades attack under morkoth control. Creatures try to reduce PCs to 0 hp so the Tree can claim them.",
      loot: "Omidon's tent: spellbook (chromatic orb, find familiar, ice knife, Tasha's hideous laughter, crown of madness, Maximilian's earthen grasp, erupting earth, tidal wave), scroll of glyph of warding. Location G: 140 gp total, potion of fire giant strength, ironfell items (45 gp each) if warlocks present.",
      dmnote: "Omidon's tent has a glyph of warding (DC 15 Investigation to spot, erupting earth DC 15 save). Characters should enter Area 1 with 2+ hours remaining. Skip Location G combat if low on time."
    },
    {
      name: "Part 3: The Dungeon (Areas 1-8)",
      time: "~120 min",
      setting: "Underground dwarven mortuary and Tree of Doors root tunnels beneath the Flooded Forest",
      trigger: "Characters descend through the pit into Area 2",
      creatures: "Lord Orrin Marsh (knight, 4 exhaustion levels, poisoned), Iselci Mondas (githzerai zerth stats, AC 19, spell save DC 16), 4 orc red fangs of Shargaas, Omidon Urnrayle (sleeping, Miraj Vizann stats), the morkoth (CR 11 with lair actions), 2 preserved defenders from Appendix 6",
      tactics: "Iselci ambushes from Area 4 with climbing speed, targeting Orrin. Morkoth stays at range, uses Hypnosis and spells, sends mind-controlled preserved defenders. On round 1, room floods with water. Round 3, portals open. Round 4, morkoth's allies break free of control. Hungry roots grab anyone at 0 hp.",
      loot: "Iselci: 70 gp, spell scroll of water breathing, ioun stone of reserve (Peacemaker's Coin). Area 6: tin box with 70 sp of moon-phase coins (puzzle items). Area 7 chest: 188 gp. Blood Metal Crown (quest item worth 1200 gp reward).",
      dmnote: "The moon puzzle in Area 7 requires a crescent-moon sliver coin. The brass doors in Area 2 only open for bloodied creatures. Resting underground risks hungry roots (50% per 2 hours) and deepdelve fever (DC 15 Con save with cumulative -1 per 24 hours). The morkoth fight difficulty can be tuned by adjusting when allies break free of mind control."
    },
    {
      name: "Part 4: Conclusion",
      time: "~15 min",
      setting: "Surface near the pit, then Ylraphon — Old Marsh House and docks",
      trigger: "Characters escape the collapsing dungeon through portals",
      creatures: "Krim Dragul and blood orcs (friendly), Sir Bresden, Jotan Silverhammer, Omidon, Corronorrco (bronze dragon wyrmling)",
      tactics: "No combat. Roleplay rewards, Merchant Council meeting, Bresden and Orrin swear oaths.",
      loot: "Gold medallion worth 50 gp per character. Remaining quest reward from Arden (great blue tourmaline gem). Blood Metal Crown reward of 1200 gp from Gwynora.",
      dmnote: "A copper-red comet appears in the sky as a hook for future adventures. Snowmelt and flooding affect the refugee camp. Record whether characters advised on catapult placement and whether Garm was convinced to help the Watch."
    }
  ],

  npcs: [
    {
      name: "Arden Marsh",
      statBlock: "Not given explicit combat stats / N/A",
      alignment: "LG",
      wants: "To deliver his grandmother's dying wish to his family without breaking his oath never to enter Ylraphon",
      knows: "Lady Myrandah's will requires Bresden and Orrin to quit adventuring; Bresden and Orrin left town seeking a relic; Aislyn is at Old Marsh House; Zhelad stands to inherit if they don't comply",
      voice: "Quiet, intense, burdened with guilt; speaks with careful precision and hard eyes",
      quote: "A crime has been committed, and I will not rest until justice is served."
    },
    {
      name: "Aislyn Marsh",
      statBlock: "Not specified (warlock) / N/A",
      alignment: "NG",
      wants: "To find her nephews before they lose their inheritance so she can take her seat on the Merchant Council",
      knows: "Bresden and Orrin went to ruins seeking a crown; Gwynora offered the reward; Ilasera referred them to Omidon the half-orc guide",
      voice: "Organized, direct, silences people with a hard look; tired of managing impulsive family members",
      quote: "The men in my family are all impulsive, impetuous, overgrown boys—Someone has to be the adult."
    },
    {
      name: "Ilasera",
      statBlock: "Not specified (druid) / N/A",
      alignment: "N",
      wants: "To restore the balance between the Flooded Forest swamp and civilization",
      knows: "Unusual creatures dripping with golden liquid have been appearing; she referred Bresden to Omidon; Omidon's tent is in the refugee camp; a mysterious force stocks the forest with monsters",
      voice: "Distant, aloof, more comfortable with beasts; Calishite accent; always redirects conversation to nature",
      quote: "I grew up with humans, but now I live in the Flooded Forest with beasts and monsters. They're easier to trust."
    },
    {
      name: "Gwynora Ironheart",
      statBlock: "Spy / CR 1",
      alignment: "NG",
      wants: "To recover the Blood Metal Crown of her ancestor Deep King Tuir and to recruit Garm as Captain of the Watch",
      knows: "Offered 1200 gp reward for the crown; sent Bresden to Omidon; Tyrantsworn seek Omidon; Merchant Council is deadlocked on refugee citizenship",
      voice: "Smooth as silk yet strong as steel; authoritative with an occasional mischievous smirk; probing green eyes",
      quote: "The only way to rise above our circumstances is to work together: one and all, native and refugee, merchant and adventurer."
    },
    {
      name: "Garm Stormbright",
      statBlock: "Warlord / CR 12 (with innate spellcasting)",
      alignment: "LG",
      wants: "To live in peace and never raise his hand in violence again; secretly atoning for killing Crispin Marsh",
      knows: "Bresden connected the crown to a dwarven mortuary in the Flooded Forest; orc Clan Dragul uses an abandoned dwarven mortuary; orc shamans change trap passwords to reference Gruumsh",
      voice: "Deep laugh, easy smile, but flinty eyes betray regret; firm and respectful but immovable once decided",
      quote: "For once in my life, I just want to live in peace."
    },
    {
      name: "Iselci Mondas",
      statBlock: "Githzerai Zerth (modified, Wis 20, AC 19, spell save DC 16) / CR 6",
      alignment: "LE",
      wants: "To assassinate Sir Bresden Marsh, believing he betrayed the Cult of the Crushing Wave (she has confused him with Arden)",
      knows: "The location of the dungeon; water cultist tactics; she carries an ioun stone of reserve with one stored spell",
      voice: "Cold, fanatical, driven by vengeance; a water genasi monk with psionic powers",
      quote: "Not specified in module."
    },
    {
      name: "Lord Orrin Marsh",
      statBlock: "Knight (Int 20) / CR 3",
      alignment: "LN",
      wants: "To claim the family legacy and shift focus to managing House Marsh's affairs",
      knows: "Same information as Clif and Gythen about the underground attacks; has 4 levels of exhaustion from deepdelve fever",
      voice: "Well-mannered but expects deference; thinks twenty moves ahead; finds it tedious to explain plans to others",
      quote: "I may be young, but I know we nobles have a moral obligation to help those in need, regardless of whether those in need are equal to or below us."
    },
    {
      name: "Sir Bresden Marsh",
      statBlock: "Champion / CR 9",
      alignment: "LG",
      wants: "To protect his family and the church of Selûne; desperately wants his brother Arden to return",
      knows: "Was captured by the Tree of Doors while on watch; was in telepathic contact with thousands of minds while imprisoned; the morkoth has been using the Tree for millennia",
      voice: "Proud posture, well-groomed; constantly checks with others to ensure he is on solid ethical ground",
      quote: "That's reasonable, isn't it?"
    },
    {
      name: "Krim Dragul",
      statBlock: "Warlord (modified, orc, LN, immune to deepdelve fever) / CR 12",
      alignment: "LN",
      wants: "To reclaim the blood orc ancestral legacy, protect his cousin Omidon, and change orcish society",
      knows: "All information on Omidon's journal and map; knows how to avoid the Ilneval ward (say 'Ilneval'); knows the orc tunnels intimately; plans to kill the Banite captors",
      voice: "Disciplined, stoic, prides himself on self-control; sings defiantly in Orcish; never smiles",
      quote: "Not specified in module."
    },
    {
      name: "\"Old\" Zhelad",
      statBlock: "Shoalar Quanderil / CR 4",
      alignment: "LE",
      wants: "To inherit the Marsh fortune if Bresden and Orrin fail to quit adventuring; to maintain his shrine to Umberlee",
      knows: "Told Jotan where Bresden and Orrin were headed in exchange for 200 gp; knows of Lady Myrandah's will; had nothing to do with the water cultist ambush",
      voice: "Dark humor, rugged good looks hiding ruthlessness; extremely patient and instinctively manipulative; quietly insane",
      quote: "Until Umberlee comes to flood the world with brine and blood, Ylraphon is my home, and anyone who threatens it will die with saltwater in their throat."
    },
    {
      name: "Jotan Silverhammer",
      statBlock: "Assassin / CR 8",
      alignment: "N",
      wants: "To preserve the wild freedom of Ylraphon; secretly leads the Shadowcloaks thieves' guild",
      knows: "Lieutenant Guildmaster of the Adventurers Guild; was captured by the Tree of Doors along with Bresden",
      voice: "Jovial, friendly, manipulative, absolutely ruthless when crossed; always dresses like it is winter",
      quote: "I'm here to save this town, whether they know it or not."
    },
    {
      name: "Trell Bannon of the Fens",
      statBlock: "Berserker / CR 2",
      alignment: "CG",
      wants: "To serve on the Town Watch and find an adventuring group",
      knows: "Town Watch is shorthanded due to crown hunters; Jotan is lieutenant guildmaster; directs people to Hostettler's House",
      voice: "Wild barbarian appearance but goes through official motions; half-elf with hulking build and feral gaze",
      quote: "Not specified in module."
    }
  ],

  skillChecks: [
    { location: "Part 1: Aboard The Blue Phantom", check: "Int (History)", dc: "11", success: "Know the Marshes are an old Moonsea noble family exiled from Vaasa" },
    { location: "Part 1: Aboard The Blue Phantom", check: "Int (History)", dc: "14", success: "Learn the Marshes have an old connection to the sea, one branch are water genasi" },
    { location: "Part 1: Aboard The Blue Phantom", check: "Int (History)", dc: "17", success: "Know about internal Marsh religious conflicts and rumored Cult of the Crushing Wave ties" },
    { location: "Location B: Old Marsh House", check: "Int (History or Nature)", dc: "14", success: "Know Ilasera is nearly revered in Ylraphon for reclaiming marshland" },
    { location: "Location C: Hostettler's House", check: "Int (History)", dc: "13", success: "Know Deep King Tuir's reign was brief and Roldilar's history measured in decades" },
    { location: "Location C: Hostettler's House", check: "Int (History)", dc: "14", success: "Recall blood metal was magical steel toxic to orcs, used to forge orcslayer weapons" },
    { location: "Location C: Garm Stormbright", check: "Wis (Insight)", dc: "15", success: "Reveal Garm is hiding something related to Bresden's father" },
    { location: "Location C: Convince Garm", check: "Cha (Persuasion)", dc: "15/17/19", success: "Convince Garm to support finding a new Captain of the Watch (DC varies by APL)" },
    { location: "Location D: Old Zhelad", check: "Wis (Insight)", dc: "12", success: "Realize Krim is not in distress, not drunk, and has no wish to be freed" },
    { location: "Part 2: Tyrantsworn", check: "Int (History or Religion)", dc: "12", success: "Identify Krim's song as the Dirge of Ilneval's Vengeance" },
    { location: "Part 2: Omidon's Tent", check: "Int (Investigation)", dc: "15", success: "Notice the glyph of warding on the tent flap" },
    { location: "Part 2: Omidon's Tent", check: "Int (Investigation)", dc: "11", success: "Find the two books hidden under the bear pelt" },
    { location: "Part 2: Omidon's Tent", check: "Int (Arcana or Religion)", dc: "12", success: "Determine the Selûne tome is excellent on lunar phases but bad astrology" },
    { location: "Part 2: Omidon's Tent", check: "Int (Investigation)", dc: "9", success: "Read Omidon's journal (requires 1 hour, reduced by 10 min per 5 over DC)" },
    { location: "Part 2: Omidon's Tent", check: "Int (History)", dc: "12", success: "Know Clan Dragul is a feared orc horde terrorizing the area for centuries" },
    { location: "Part 1/2: Deepdelve Fever", check: "Int (History or Medicine)", dc: "13", success: "Know deepdelve fever afflicts those underground too long, cured only by sleeping above ground" },
    { location: "Area 1: Pit Entrance", check: "Int (Investigation) or passive Perception", dc: "12/14", success: "Find the hidden tunnel entrance" },
    { location: "Area 1: Pit Entrance", check: "Int (Investigation)", dc: "15", success: "Notice the glyph of warding on the plywood cover" },
    { location: "Area 2: Antechamber", check: "Int (History)", dc: "10", success: "Determine dwarven stonework is 900+ years old from era of Roldilar" },
    { location: "Area 2: Antechamber", check: "Int (Medicine or Religion)", dc: "13", success: "Determine hanging slabs were used for dwarven funerary rites" },
    { location: "Area 2: Brass Doors", check: "Dex (Thieves' Tools)", dc: "22", success: "Pick the magically locked brass doors" },
    { location: "Area 2: Moving Slabs", check: "Str (Athletics) or Dex (Acrobatics)", dc: "12", success: "Mount or dismount a moving slab" },
    { location: "Area 2: Pool", check: "Int (Investigation)", dc: "15", success: "Find the hidden passage at the bottom of the 40-foot deep pool leading to Area 6" },
    { location: "Area 5: Stair Trap", check: "Wis (Perception)", dc: "22", success: "Detect the stair trap" },
    { location: "Area 5: Stair Trap", check: "Int (Investigation)", dc: "19", success: "Actively detect the stair trap" },
    { location: "Area 5: Stair Trap", check: "Dex (Thieves' Tools)", dc: "19", success: "Disable the stair trap (failure by 5+ triggers it)" },
    { location: "Area 5: Stair Trap", check: "Dex saving throw", dc: "16", success: "Avoid sliding down the ramp" },
    { location: "Area 5: Trapdoors", check: "Wis (Perception)", dc: "16", success: "Notice the trapdoors at normal approach speed" },
    { location: "Area 5: Trapdoors", check: "Dex saving throw", dc: "17", success: "Catch the edge of the pit instead of falling 50 feet" },
    { location: "Area 6: Swim upstream", check: "Str (Athletics)", dc: "N/A (disadvantage)", success: "Swim upstream through cramped passage to Area 2 pool" },
    { location: "Area 7: Warded Door Investigation", check: "Int (Investigation)", dc: "12", success: "Realize there is a magical trap on the door" },
    { location: "Area 7: Warded Door Arcana", check: "Int (Arcana)", dc: "12", success: "Detect transmutation aura on the door" },
    { location: "Area 7: Warded Door Religion", check: "Int (Religion)", dc: "12", success: "Identify the Selûne holy symbol above the hole" },
    { location: "Area 7: Warded Door Touch", check: "Con saving throw", dc: "15", success: "Take half damage (halved from 5d6 radiant) and pushed only 10 feet instead of 20" },
    { location: "Area 7: Moon Phase", check: "Int (Arcana, Nature, or Religion)", dc: "15", success: "Determine the current moon phase if players forgot (advantage with Selûne tome)" },
    { location: "Area 7: Statue", check: "Int (Investigation)", dc: "13", success: "Reveal astronomical markings on the statue's chart" },
    { location: "Area 8: Morkoth Hypnosis", check: "Wis saving throw", dc: "17", success: "Resist the morkoth's Hypnosis charm effect" },
    { location: "Area 8: Escape", check: "Dex saving throw", dc: "17", success: "Avoid 2d12 (increasing) bludgeoning damage from collapsing ceiling" },
    { location: "General: Hungry Roots", check: "Str (Athletics) or Dex (Acrobatics)", dc: "16", success: "Escape the grapple of hungry tree roots" },
    { location: "General: Call of the Tunnel", check: "Wis saving throw", dc: "15", success: "Resist the compulsion to move toward Area 8" },
    { location: "General: Amber Prison Mind Control", check: "Wis saving throw", dc: "17", success: "Shake off crown of madness effect when freed from amber prison" },
    { location: "Conclusion: Comet", check: "Int (Arcana)", dc: "14", success: "Know no almanac predicted this copper-red comet" }
  ],

  magicItems: [
    { name: "Spell Scroll of Glyph of Warding", rarity: "Uncommon", attunement: false, summary: "Single-use scroll containing the glyph of warding spell." },
    { name: "Spell Scroll of Water Breathing", rarity: "Uncommon", attunement: false, summary: "Single-use scroll containing the water breathing spell." },
    { name: "Ioun Stone of Reserve (Peacemaker's Coin)", rarity: "Rare", attunement: true, summary: "Purple gem cut like a coin; stores up to 3 levels of spells. Grants +1 bonus on Charisma (Persuasion) checks to resolve conflict or calm emotions." },
    { name: "A Treatise on Selûne's Phases and the Prediction of Future Events (Spellbook)", rarity: "N/A (spellbook)", attunement: false, summary: "Grants advantage on Int checks about the moon or Selûne religion, disadvantage on divination/astrology checks. Contains wizard spells: chromatic orb, find familiar, ice knife, Tasha's hideous laughter, crown of madness, Maximilian's earthen grasp, erupting earth, tidal wave." },
    { name: "Potion of Fire Giant Strength", rarity: "Rare", attunement: false, summary: "Drinking this potion sets the character's Strength score to 25 for 1 hour." }
  ],

  downtime: "Per ALDMG guidelines; Order of the Gauntlet members who convince Garm earn extra renown",
  renown: "+1 renown per ALDMG; Order of the Gauntlet characters who convince Garm to support the Town Watch earn +1 additional renown",

  statBlocks: [
    {
      name: "Archer",
      cr: "3",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "16 (studded leather)",
      hp: "75 (10d8 + 30)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "18 (+4)",
      con: "16 (+3)",
      int: "11 (+0)",
      wis: "13 (+1)",
      cha: "10 (+0)",
      saves: "",
      skills: "Acrobatics +6, Perception +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 15",
      traits: [
        { name: "Archer's Eye (3/Day)", text: "As a bonus action, the archer can add 1d10 to its next attack or damage roll with a longbow or shortbow." }
      ],
      actions: [
        { name: "Multiattack", text: "The archer makes two attacks with its longbow." },
        { name: "Shortsword", text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage." },
        { name: "Longbow", text: "Ranged Weapon Attack: +6 to hit, range 150/600 ft., one target. Hit: 8 (1d8 + 4) piercing damage." }
      ]
    },
    {
      name: "Assassin",
      cr: "8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-good alignment",
      ac: "15 (studded leather)",
      hp: "78 (12d8 + 24)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "16 (+3)",
      con: "14 (+2)",
      int: "13 (+1)",
      wis: "11 (+0)",
      cha: "10 (+0)",
      saves: "Dex +7, Int +5",
      skills: "Acrobatics +7, Deception +4, Perception +4, Stealth +11",
      resist: "poison",
      immune: "",
      condImmune: "",
      senses: "passive Perception 14",
      traits: [
        { name: "Assassinate", text: "During its first turn, the assassin has advantage on attack rolls against any creature that hasn't taken a turn. Any hit the assassin scores against a surprised creature is a critical hit." },
        { name: "Evasion", text: "If the assassin is subjected to an effect that allows it to make a Dexterity saving throw to take only half damage, the assassin instead takes no damage if it succeeds on the saving throw, and only half damage if it fails." },
        { name: "Sneak Attack (1/Turn)", text: "The assassin deals an extra 13 (4d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the assassin that isn't incapacitated and the assassin doesn't have disadvantage on the attack roll." }
      ],
      actions: [
        { name: "Multiattack", text: "The assassin makes two shortsword attacks." },
        { name: "Shortsword", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." },
        { name: "Light Crossbow", text: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 15 Constitution saving throw, taking 24 (7d6) poison damage on a failed save, or half as much damage on a successful one." }
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
      name: "Blackguard",
      cr: "8",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-good alignment",
      ac: "18 (plate)",
      hp: "153 (18d8 + 72)",
      speed: "30 ft.",
      str: "18 (+4)",
      dex: "11 (+0)",
      con: "18 (+4)",
      int: "11 (+0)",
      wis: "14 (+2)",
      cha: "15 (+2)",
      saves: "Wis +5, Cha +5",
      skills: "Athletics +7, Deception +5, Intimidation +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 12",
      traits: [
        { name: "Spellcasting", text: "The blackguard is a 10th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). It has the following paladin spells prepared: 1st level (4 slots): command, protection from evil and good, thunderous smite; 2nd level (3 slots): branding smite, find steed; 3rd level (2 slots): blinding smite, dispel magic." }
      ],
      actions: [
        { name: "Multiattack", text: "The blackguard makes three attacks with its glaive or its shortbow." },
        { name: "Glaive", text: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 9 (1d10 + 4) slashing damage." },
        { name: "Shortbow", text: "Ranged Weapon Attack: +3 to hit, range 80/320 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
        { name: "Dreadful Aspect (Recharges after a Short or Long Rest)", text: "The blackguard exudes magical menace. Each enemy within 30 feet of the blackguard must succeed on a DC 13 Wisdom saving throw or be frightened for 1 minute. If a frightened target ends its turn more than 30 feet away from the blackguard, the target can repeat the saving throw, ending the effect on itself on a success." }
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
        { name: "Indomitable (2/Day)", text: "The champion rerolls a failed saving throw." },
        { name: "Second Wind (Recharges after a Short or Long Rest)", text: "As a bonus action, the champion can regain 20 hit points." }
      ],
      actions: [
        { name: "Multiattack", text: "The champion makes three attacks with its greatsword or its light crossbow." },
        { name: "Greatsword", text: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage, plus 7 (2d6) slashing damage if the champion has more than half its total hit points remaining." },
        { name: "Light Crossbow", text: "Ranged Weapon Attack: +6 to hit, range 80/320 ft., one target. Hit: 6 (1d8 + 2) piercing damage, plus 7 (2d6) piercing damage if the champion has more than half its total hit points remaining." }
      ]
    },
    {
      name: "Drow Elite Warrior",
      cr: "5",
      size: "Medium",
      type: "humanoid (elf)",
      alignment: "neutral evil",
      ac: "18 (studded leather, shield)",
      hp: "71 (11d8 + 22)",
      speed: "30 ft.",
      str: "13 (+1)",
      dex: "18 (+4)",
      con: "14 (+2)",
      int: "11 (+0)",
      wis: "13 (+1)",
      cha: "12 (+1)",
      saves: "Dex +7, Con +5, Wis +4",
      skills: "Perception +4, Stealth +10",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "darkvision 120 ft., passive Perception 14",
      traits: [
        { name: "Fey Ancestry", text: "The drow has advantage on saving throws against being charmed, and magic can't put the drow to sleep." },
        { name: "Innate Spellcasting", text: "The drow's spellcasting ability is Charisma (spell save DC 12). It can innately cast the following spells, requiring no material components: At will: dancing lights; 1/day: darkness, faerie fire, levitate (self only)." },
        { name: "Sunlight Sensitivity", text: "While in sunlight, the drow has disadvantage on attack rolls, as well as on Wisdom (Perception) checks that rely on sight." }
      ],
      actions: [
        { name: "Multiattack", text: "The drow makes two shortsword attacks." },
        { name: "Shortsword", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 7 (1d6 + 4) piercing damage plus 10 (3d6) poison damage." },
        { name: "Hand Crossbow", text: "Ranged Weapon Attack: +7 to hit, range 30/120 ft., one target. Hit: 7 (1d6 + 4) piercing damage. The target must succeed on a DC 13 Constitution saving throw or be poisoned for 1 hour. If the saving throw fails by 5 or more, the target is also unconscious while poisoned in this way. The target wakes up if it takes damage or if another creature takes an action to shake it awake." },
        { name: "Parry", text: "The drow adds 3 to its AC against one melee attack that would hit it. To do so, the drow must see the attacker and be wielding a melee weapon." }
      ]
    },
    {
      name: "Githzerai Zerth (Iselci Mondas)",
      cr: "6",
      size: "Medium",
      type: "humanoid (githzerai)",
      alignment: "lawful neutral",
      ac: "17 (19 for Iselci with Wis 20)",
      hp: "84 (13d8 + 26)",
      speed: "30 ft.",
      str: "13 (+1)",
      dex: "18 (+4)",
      con: "15 (+2)",
      int: "16 (+3)",
      wis: "17 (+3)",
      cha: "12 (+1)",
      saves: "Str +4, Dex +7, Int +6, Wis +6",
      skills: "Arcana +6, Insight +6, Perception +6",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 16",
      traits: [
        { name: "Innate Spellcasting (Psionics)", text: "The githzerai's innate spellcasting ability is Wisdom (spell save DC 14, +6 to hit with spell attacks). At will: mage hand (the hand is invisible); 3/day each: feather fall, jump, see invisibility, shield; 1/day each: phantasmal killer, plane shift." },
        { name: "Psychic Defense", text: "While the githzerai is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." },
        { name: "Iselci Modifications", text: "Iselci has Wis 20 (AC 19, spell save DC 16, +8 to hit with spell attacks). She can breathe air and water. Added spells: At will: shape water; 1/day: create or destroy water." }
      ],
      actions: [
        { name: "Multiattack", text: "The githzerai makes two unarmed strikes." },
        { name: "Unarmed Strike", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage plus 13 (3d8) psychic damage. This is a magic weapon attack." }
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
        { name: "Spear", text: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d6 + 1) piercing damage." }
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
      saves: "Con +4, Wis +2",
      skills: "",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Brave", text: "The knight has advantage on saving throws against being frightened." }
      ],
      actions: [
        { name: "Multiattack", text: "The knight makes two melee attacks." },
        { name: "Greatsword", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage." },
        { name: "Heavy Crossbow", text: "Ranged Weapon Attack: +2 to hit, range 100/400 ft., one target. Hit: 5 (1d10) piercing damage." },
        { name: "Leadership (Recharges after a Short or Long Rest)", text: "For 1 minute, the knight can utter a special command or warning whenever a nonhostile creature that it can see within 30 feet of it makes an attack roll or a saving throw. The creature can add a d4 to its roll provided it can hear and understand the knight. A creature can benefit from only one Leadership die at a time. This effect ends if the knight is incapacitated." },
        { name: "Parry", text: "The knight adds 2 to its AC against one melee attack that would hit it. To do so, the knight must see the attacker and be wielding a melee weapon." }
      ]
    },
    {
      name: "Martial Arts Adept",
      cr: "3",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "16",
      hp: "60 (11d8 + 11)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "17 (+3)",
      con: "13 (+1)",
      int: "11 (+0)",
      wis: "16 (+3)",
      cha: "10 (+0)",
      saves: "",
      skills: "Acrobatics +5, Insight +5, Stealth +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 13",
      traits: [
        { name: "Unarmored Defense", text: "While the adept is wearing no armor and wielding no shield, its AC includes its Wisdom modifier." }
      ],
      actions: [
        { name: "Multiattack", text: "The adept makes three unarmed strikes or three dart attacks." },
        { name: "Unarmed Strike", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) bludgeoning damage. If the target is a creature, the adept can choose one of the following additional effects: The target must succeed on a DC 13 Strength saving throw or drop one item it is holding (adept's choice). The target must succeed on a DC 13 Dexterity saving throw or be knocked prone. The target must succeed on a DC 13 Constitution saving throw or be stunned until the end of the adept's next turn." },
        { name: "Dart", text: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 7 (1d8 + 3) piercing damage." },
        { name: "Deflect Missile", text: "In response to being hit by a ranged weapon attack, the adept deflects the missile. The damage it takes from the attack is reduced by 1d10 + 3. If the damage is reduced to 0, the adept catches the missile if it's small enough to hold in one hand and the adept has a hand free." }
      ]
    },
    {
      name: "Morkoth",
      cr: "11",
      size: "Medium",
      type: "aberration",
      alignment: "chaotic evil",
      ac: "17 (natural armor)",
      hp: "130 (20d8 + 40)",
      speed: "25 ft., swim 50 ft.",
      str: "14 (+2)",
      dex: "14 (+2)",
      con: "14 (+2)",
      int: "20 (+5)",
      wis: "15 (+2)",
      cha: "13 (+1)",
      saves: "Dex +6, Int +9, Wis +6",
      skills: "Arcana +9, History +9, Perception +10, Stealth +6",
      resist: "bludgeoning, piercing, and slashing from nonmagical attacks",
      immune: "",
      condImmune: "",
      senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 20",
      traits: [
        { name: "Amphibious", text: "The morkoth can breathe air and water." },
        { name: "Spellcasting", text: "The morkoth is an 11th-level spellcaster. Its spellcasting ability is Intelligence (spell save DC 17, +9 to hit with spell attacks). The morkoth has the following wizard spells prepared: Cantrips (at will): acid splash, mage hand, mending, ray of frost, shocking grasp; 1st level (4 slots): detect magic, identify, shield, witch bolt; 2nd level (3 slots): darkness, detect thoughts, shatter; 3rd level (3 slots): dispel magic, lightning bolt, sending; 4th level (3 slots): dimension door, Evard's black tentacles; 5th level (3 slots): geas, scrying; 6th level (1 slot): chain lightning." }
      ],
      actions: [
        { name: "Multiattack", text: "The morkoth makes three attacks: two with its bite and one with its tentacles or three with its bite." },
        { name: "Bite", text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage." },
        { name: "Tentacles", text: "Melee Weapon Attack: +6 to hit, reach 15 ft., one target. Hit: 15 (3d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14) if it is a Large or smaller creature. Until this grapple ends, the target is restrained, and takes 15 (3d8 + 2) bludgeoning damage at the start of each of the morkoth's turns and the morkoth can't use its tentacles on another target." },
        { name: "Hypnosis", text: "The morkoth projects a 30-foot cone of magical energy. Each creature in that area must make a DC 17 Wisdom saving throw. On a failed save, the creature is charmed by the morkoth for 1 minute. While charmed in this way, the target tries to get as close to the morkoth as possible, using its actions to dash until it is within 5 feet of the morkoth. A charmed creature can repeat the saving throw at the end of each of its turns and whenever it takes damage, ending the effect on itself with a success. If a creature's saving throw is successful or the effect ends for it, the creature has advantage on saving throws against the morkoth's hypnosis for 24 hours." },
        { name: "Spell Reflection", text: "If the morkoth makes a successful saving throw against a spell, or a spell attack misses it, the morkoth can choose another creature (including the spellcaster) it can see within 120 feet of it. The spell targets the chosen creature instead of the morkoth. If the spell forced a saving throw, the chosen creature makes its own save. If the spell was an attack, the attack roll is rerolled against that creature." },
        { name: "Lair Actions (Initiative Count 20)", text: "The morkoth uses its Hypnosis action, originating at a point within 120 feet of itself (doesn't need to see it). OR The morkoth casts darkness, dispel magic, or misty step using Intelligence as its spellcasting ability without expending a spell slot." }
      ]
    },
    {
      name: "Orc Blade of Ilneval",
      cr: "4",
      size: "Medium",
      type: "humanoid (orc)",
      alignment: "chaotic evil",
      ac: "18 (chain mail, shield)",
      hp: "60 (8d8 + 24)",
      speed: "30 ft.",
      str: "17 (+3)",
      dex: "11 (+0)",
      con: "17 (+3)",
      int: "10 (+0)",
      wis: "12 (+1)",
      cha: "14 (+2)",
      saves: "Wis +3",
      skills: "Insight +3, Intimidation +4, Perception +3",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "darkvision 60 ft., passive Perception 13",
      traits: [
        { name: "Aggressive", text: "As a bonus action, the orc can move up to its speed toward a hostile creature that it can see." },
        { name: "Foe Smiter of Ilneval", text: "The orc deals an extra die of damage when it hits with a longsword attack (included in the attack)." }
      ],
      actions: [
        { name: "Multiattack", text: "The orc makes two melee attacks with its longsword or two ranged attacks with its javelins. If Ilneval's Command is available to use, the orc can use it after these attacks." },
        { name: "Longsword", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 12 (2d8 + 3) slashing damage, or 14 (2d10 + 3) slashing damage when used with two hands." },
        { name: "Javelin", text: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 30/120 ft., one target. Hit: 6 (1d6 + 4) piercing damage." },
        { name: "Ilneval's Command (Recharge 4-6)", text: "Up to three allied orcs within 120 feet of this orc that can hear it can use their reactions to each make one melee attack." }
      ]
    },
    {
      name: "Orc Red Fang of Shargaas",
      cr: "3",
      size: "Medium",
      type: "humanoid (orc)",
      alignment: "chaotic evil",
      ac: "15 (studded leather)",
      hp: "52 (8d8 + 16)",
      speed: "30 ft.",
      str: "11 (+0)",
      dex: "16 (+3)",
      con: "15 (+2)",
      int: "9 (-1)",
      wis: "11 (+0)",
      cha: "9 (-1)",
      saves: "",
      skills: "Intimidation +1, Perception +2, Stealth +5",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "darkvision 60 ft., passive Perception 12",
      traits: [
        { name: "Cunning Action", text: "On each of its turns, the orc can use a bonus action to take the Dash, Disengage, or Hide action." },
        { name: "Hand of Shargaas", text: "The orc deals an extra 2 dice of damage when it hits a target with a weapon attack (included in its attacks)." },
        { name: "Shargaas's Sight", text: "Magical darkness doesn't impede the orc's darkvision." },
        { name: "Slayer", text: "In the first round of combat, the orc has advantage on attack rolls against any creature that hasn't taken a turn yet. If the orc hits a creature that round who was surprised, the hit is automatically a critical hit." }
      ],
      actions: [
        { name: "Multiattack", text: "The orc makes two scimitar or dart attacks." },
        { name: "Scimitar", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 13 (3d6 + 3) slashing damage." },
        { name: "Dart", text: "Ranged Weapon Attack: +5 to hit, range 20/60 ft., one target. Hit: 10 (3d4 + 3) piercing damage." },
        { name: "Veil of Shargaas (Recharges after a Short or Long Rest)", text: "The orc casts darkness without any components. Wisdom is its spellcasting ability." }
      ]
    },
    {
      name: "Warlock of the Great Old One",
      cr: "6",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "12 (15 with mage armor)",
      hp: "91 (14d8 + 28)",
      speed: "30 ft.",
      str: "9 (-1)",
      dex: "14 (+2)",
      con: "15 (+2)",
      int: "12 (+1)",
      wis: "12 (+1)",
      cha: "18 (+4)",
      saves: "Wis +4, Cha +7",
      skills: "Arcana +4, History +4",
      resist: "psychic",
      immune: "",
      condImmune: "",
      senses: "darkvision 60 ft., passive Perception 11",
      traits: [
        { name: "Innate Spellcasting", text: "The warlock's spellcasting ability is Charisma (spell save DC 15). At will: detect magic, jump, levitate, mage armor, speak with dead; 1/day each: arcane gate, true seeing." },
        { name: "Spellcasting", text: "The warlock is a 14th-level spellcaster. Its spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). It regains its expended spell slots when it finishes a short or long rest. It knows the following warlock spells: Cantrips (at will): chill touch, eldritch blast, guidance, mage hand, minor illusion, prestidigitation, shocking grasp; 1st-5th level (3 5th-level slots): armor of Agathys, arms of Hadar, crown of madness, clairvoyance, contact other plane, detect thoughts, dimension door, dissonant whispers, dominate beast, telekinesis, vampiric touch." },
        { name: "Whispering Aura", text: "At the start of each of the warlock's turns, each creature of its choice within 5 feet of it must succeed on a DC 15 Wisdom saving throw or take 10 (3d6) psychic damage, provided that the warlock isn't incapacitated." }
      ],
      actions: [
        { name: "Dagger", text: "Melee Weapon Attack: +5 to hit, reach 5 ft. or ranged 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
      ]
    },
    {
      name: "Warlord",
      cr: "12",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any alignment",
      ac: "18 (plate)",
      hp: "229 (22d8 + 4)",
      speed: "30 ft.",
      str: "20 (+5)",
      dex: "16 (+3)",
      con: "18 (+4)",
      int: "12 (+1)",
      wis: "12 (+1)",
      cha: "18 (+4)",
      saves: "Str +9, Dex +7, Con +8",
      skills: "Athletics +9, Intimidation +8, Perception +5, Persuasion +8",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 15",
      traits: [
        { name: "Indomitable (3/Day)", text: "The warlord can reroll a saving throw it fails. It must use the new roll." },
        { name: "Survivor", text: "The warlord regains 10 hit points at the start of its turn if it has at least 1 hit point but fewer hit points than half its hit point maximum." }
      ],
      actions: [
        { name: "Multiattack", text: "The warlord makes two weapon attacks." },
        { name: "Greatsword", text: "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage." },
        { name: "Shortbow", text: "Ranged Weapon Attack: +7 to hit, range 80/320 ft., one target. Hit: 6 (1d6 + 3) piercing damage." },
        { name: "Legendary Actions (3/turn)", text: "Weapon Attack: The warlord makes a weapon attack. Command Ally: The warlord targets one ally it can see within 30 feet of it. If the target can see and hear the warlord, the target can make one weapon attack as a reaction and gains advantage on the attack roll. Frighten Foe (Costs 2 Actions): The warlord targets one enemy it can see within 30 feet of it. If the target can see and hear the warlord, the target must succeed on a DC 16 Wisdom saving throw or be frightened until the end of the warlord's next turn." }
      ]
    },
    {
      name: "Shoalar Quanderil (Zhelad)",
      cr: "4",
      size: "Medium",
      type: "humanoid (water genasi)",
      alignment: "lawful evil",
      ac: "10 (13 with mage armor)",
      hp: "60 (8d8 + 24)",
      speed: "30 ft., swim 30 ft.",
      str: "11 (+0)",
      dex: "12 (+1)",
      con: "16 (+3)",
      int: "14 (+2)",
      wis: "10 (+0)",
      cha: "17 (+3)",
      saves: "",
      skills: "Arcana +4, Deception +5, Insight +2, Persuasion +5",
      resist: "acid",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Amphibious", text: "Shoalar can breathe air and water." },
        { name: "Innate Spellcasting", text: "Shoalar's innate spellcasting ability is Constitution (spell save DC 13, +5 to hit with spell attacks). At will: shape water; 1/day: create or destroy water." },
        { name: "Spellcasting", text: "Shoalar is a 5th-level spellcaster. His spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). Cantrips (at will): acid splash, chill touch, friends, prestidigitation, ray of frost; 1st level (4 slots): disguise self, mage armor, magic missile; 2nd level (3 slots): hold person, misty step; 3rd level (3 slots): tidal wave." }
      ],
      actions: [
        { name: "Dagger", text: "Melee or Ranged Weapon Attack: +3 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 3 (1d4 + 1) piercing damage." }
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
        { name: "Cunning Action", text: "On each of its turns, the spy can use a bonus action to take the Dash, Disengage, or Hide action." },
        { name: "Sneak Attack (1/Turn)", text: "The spy deals an extra 7 (2d6) damage when it hits a target with a weapon attack and has advantage on the attack roll, or when the target is within 5 feet of an ally of the spy that isn't incapacitated and the spy doesn't have disadvantage on the attack roll." }
      ],
      actions: [
        { name: "Multiattack", text: "The spy makes two melee attacks." },
        { name: "Shortsword", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage." },
        { name: "Hand Crossbow", text: "Ranged Weapon Attack: +4 to hit, range 30/120 ft., one target. Hit: 5 (1d6 + 2) piercing damage." }
      ]
    },
    {
      name: "Swashbuckler",
      cr: "3",
      size: "Medium",
      type: "humanoid (any race)",
      alignment: "any non-lawful alignment",
      ac: "17 (leather armor)",
      hp: "66 (12d8 + 12)",
      speed: "30 ft.",
      str: "12 (+1)",
      dex: "18 (+4)",
      con: "12 (+1)",
      int: "14 (+2)",
      wis: "11 (+0)",
      cha: "15 (+2)",
      saves: "",
      skills: "Acrobatics +8, Athletics +5, Persuasion +6",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Lightfooted", text: "The swashbuckler can take the Dash or Disengage action as a bonus action on each of its turns." },
        { name: "Suave Defense", text: "While the swashbuckler is wearing light or no armor and wielding no shield, its AC includes its Charisma modifier." }
      ],
      actions: [
        { name: "Multiattack", text: "The swashbuckler makes three attacks: one with a dagger and two with its rapier." },
        { name: "Dagger", text: "Melee or Ranged Weapon Attack: +6 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 6 (1d4 + 4) piercing damage." },
        { name: "Rapier", text: "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage." }
      ]
    },
    {
      name: "Miraj Vizann (Omidon Urnrayle)",
      cr: "6",
      size: "Medium",
      type: "humanoid (earth genasi)",
      alignment: "neutral evil",
      ac: "10 (13 with mage armor)",
      hp: "82 (11d8 + 33)",
      speed: "30 ft.",
      str: "12 (+1)",
      dex: "10 (+0)",
      con: "17 (+3)",
      int: "13 (+1)",
      wis: "11 (+0)",
      cha: "18 (+4)",
      saves: "",
      skills: "Arcana +4, Deception +7",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Earth Walk", text: "Moving through difficult terrain made of earth or stone costs Miraj no extra movement." },
        { name: "Innate Spellcasting", text: "Miraj's innate spellcasting ability is Constitution (spell save DC 14). 1/day: pass without trace." },
        { name: "Spellcasting", text: "Miraj is an 11th-level spellcaster. Spellcasting ability is Charisma (spell save DC 15, +7 to hit with spell attacks). Cantrips (at will): acid splash, blade ward, friends, light, message, mold earth; 1st level (4 slots): chromatic orb, mage armor, magic missile; 2nd level (3 slots): Maximilian's earthen grasp, shatter, suggestion; 3rd level (3 slots): counterspell, erupting earth; 4th level (3 slots): polymorph, stoneskin; 5th level (2 slots): wall of stone; 6th level (1 slot): move earth." }
      ],
      actions: [
        { name: "Staff", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, or 5 (1d8 + 1) bludgeoning when used with two hands." }
      ]
    },
    {
      name: "Eternal Flame Priest",
      cr: "3",
      size: "Medium",
      type: "humanoid (human)",
      alignment: "neutral evil",
      ac: "12 (15 with mage armor)",
      hp: "52 (8d8 + 16)",
      speed: "30 ft.",
      str: "12 (+1)",
      dex: "15 (+2)",
      con: "14 (+2)",
      int: "10 (+0)",
      wis: "11 (+0)",
      cha: "16 (+3)",
      saves: "",
      skills: "Deception +5, Intimidation +5, Religion +2",
      resist: "fire",
      immune: "",
      condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Spellcasting", text: "The priest is a 5th-level spellcaster. Spellcasting ability is Charisma (spell save DC 13, +5 to hit with spell attacks). Cantrips (at will): control flames, create bonfire, fire bolt, light, minor illusion; 1st level (4 slots): burning hands, expeditious retreat, mage armor; 2nd level (3 slots): blur, scorching ray; 3rd level (2 slots): fireball." }
      ],
      actions: [
        { name: "Dagger", text: "Melee or Ranged Weapon Attack: +4 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 4 (1d4 + 2) piercing damage." }
      ]
    },
    {
      name: "Githyanki Warrior",
      cr: "3",
      size: "Medium",
      type: "humanoid (githyanki)",
      alignment: "lawful evil",
      ac: "17 (half-plate)",
      hp: "49 (9d8 + 9)",
      speed: "30 ft.",
      str: "15 (+2)",
      dex: "14 (+2)",
      con: "12 (+1)",
      int: "13 (+1)",
      wis: "13 (+1)",
      cha: "10 (+0)",
      saves: "Con +3, Int +3, Wis +3",
      skills: "",
      resist: "",
      immune: "",
      condImmune: "",
      senses: "passive Perception 11",
      traits: [
        { name: "Innate Spellcasting (Psionics)", text: "The githyanki's innate spellcasting ability is Intelligence. At will: mage hand (the hand is invisible); 3/day each: jump, misty step, nondetection (self only)." }
      ],
      actions: [
        { name: "Multiattack", text: "The githyanki makes two greatsword attacks." },
        { name: "Greatsword", text: "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage plus 7 (2d6) psychic damage." }
      ]
    },
    {
      name: "Young Green Dragon (Smolderwrath variant)",
      cr: "8",
      size: "Large",
      type: "dragon",
      alignment: "lawful evil",
      ac: "18 (natural armor)",
      hp: "136 (16d10 + 48)",
      speed: "40 ft., fly 80 ft., swim 40 ft.",
      str: "19 (+4)",
      dex: "12 (+1)",
      con: "17 (+3)",
      int: "16 (+3)",
      wis: "13 (+1)",
      cha: "15 (+2)",
      saves: "Dex +4, Con +6, Wis +4, Cha +5",
      skills: "Deception +5, Perception +7, Stealth +4",
      resist: "",
      immune: "poison",
      condImmune: "poisoned",
      senses: "blindsight 30 ft., darkvision 120 ft., passive Perception 17",
      traits: [
        { name: "Amphibious", text: "The dragon can breathe air and water." },
        { name: "Smolderwrath Variant", text: "When used as Smolderwrath, damage immunity is fire instead of poison, and bite and breath weapon deal fire damage instead of poison damage." }
      ],
      actions: [
        { name: "Multiattack", text: "The dragon makes three attacks: one with its bite and two with its claws." },
        { name: "Bite", text: "Melee Weapon Attack: +7 to hit, reach 10 ft., one target. Hit: 15 (2d10 + 4) piercing damage plus 7 (2d6) poison damage." },
        { name: "Claw", text: "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage." },
        { name: "Poison Breath (Recharge 5-6)", text: "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that area must make a DC 14 Constitution saving throw, taking 42 (12d6) poison damage on a failed save, or half as much damage on a successful one." }
      ]
    },
    {
      name: "Bronze Dragon Wyrmling",
      cr: "2",
      size: "Medium",
      type: "dragon",
      alignment: "lawful good",
      ac: "17 (natural armor)",
      hp: "32 (5d8 + 10)",
      speed: "30 ft., fly 60 ft., swim 30 ft.",
      str: "17 (+3)",
      dex: "10 (+0)",
      con: "15 (+2)",
      int: "12 (+1)",
      wis: "11 (+0)",
      cha: "15 (+2)",
      saves: "Dex +2, Con +4, Wis +2, Cha +4",
      skills: "Perception +4, Stealth +2",
      resist: "",
      immune: "lightning",
      condImmune: "",
      senses: "blindsight 10 ft., darkvision 60 ft., passive Perception 14",
      traits: [
        { name: "Amphibious", text: "The dragon can breathe air and water." }
      ],
      actions: [
        { name: "Bite", text: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 2) piercing damage." },
        { name: "Breath Weapons (Recharge 5-6)", text: "Lightning Breath: The dragon exhales lightning in a 40-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity saving throw, taking 16 (3d10) lightning damage on a failed save, or half as much damage on a successful one. Repulsion Breath: The dragon exhales repulsion energy in a 30-foot cone. Each creature in that area must succeed on a DC 12 Strength saving throw. On a failed save, the creature is pushed 30 feet away from the dragon." }
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