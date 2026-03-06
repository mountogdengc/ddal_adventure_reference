// ══════════════════════════════════════════════════════════════════════════════
//  AL DM REFERENCE — CONFIG-DRIVEN GENERATOR
//
//  Option A — external data file (recommended):
//    node build_al_ref_CONFIG.js "Adventure Data/mymod_DATA.js"
//    (data file must end with:  module.exports = DATA;)
//
//  Option B — inline data (edit the DATA block below, then run):
//    node build_al_ref_CONFIG.js
//
//  Output: Adventure References/al_dm_reference_[CODE].docx
// ══════════════════════════════════════════════════════════════════════════════

const path = require('path');

// ── Load data: external file takes priority over the inline block ─────────────
let DATA;
const dataArg = process.argv[2];
if (dataArg) {
  DATA = require(path.resolve(dataArg));
  console.log('Using data file:', path.resolve(dataArg));
}

// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  STEP 1 — FILL IN YOUR MODULE DATA HERE  (ignored when a file is given) ║
// ╚══════════════════════════════════════════════════════════════════════════╝
if (!DATA) DATA = {

  // ── Module header ──────────────────────────────────────────────────────────
  code:       "DDAL##-##",          // e.g. "DDAL09-04"
  title:      "Module Title",       // e.g. "Day of the Devil"
  levels:     "1–4",                // e.g. "1–4"
  apl:        "3",                  // Average Party Level
  duration:   "~2 hrs",
  players:    "3–7",
  location:   "Baldur's Gate",
  reward:     "+1 level (milestone)",

  // ── Background callout (1–3 sentences) ────────────────────────────────────
  background:
    "Villain NAME (creature type) is doing THING because MOTIVATION. " +
    "The targets/stakes are THING. " +
    "The players are drawn in because HOOK.",

  // ── Key facts callout ──────────────────────────────────────────────────────
  keyFacts:
    "Key fact 1. Key fact 2. Any timer mechanics or series continuity notes.",

  // ── Scene flow ─────────────────────────────────────────────────────────────
  // Each entry: { name, time, goal, outcome }
  scenes: [
    { name: "Scene 1 Name", time: "~10 min", goal: "Goal of scene 1",           outcome: "What changes / triggers next" },
    { name: "Scene 2 Name", time: "~20 min", goal: "Goal of scene 2",           outcome: "What changes / triggers next" },
    { name: "Scene 3 Name", time: "~20 min", goal: "Goal of scene 3",           outcome: "What changes / triggers next" },
    { name: "Scene 4 Name", time: "~30 min", goal: "Goal of scene 4",           outcome: "What changes / triggers next" },
    { name: "Scene 5 Name", time: "~40 min", goal: "Goal of scene 5",           outcome: "What changes / triggers next" },
    { name: "Wrap-Up",      time: "~10 min", goal: "Deliver rewards / closure", outcome: "Bridge to next adventure if applicable" },
  ],

  // ── Scene notes ────────────────────────────────────────────────────────────
  // Each entry: { name, time, setting, trigger, creatures, tactics, loot, dmnote }
  sceneNotes: [
    {
      name: "Scene 1 Name", time: "~10 min",
      setting:   "Where does this take place?",
      trigger:   "What kicks off the scene? (read-aloud cue, NPC action, etc.)",
      creatures: "Who is present? List enemy/NPC names and brief roles.",
      tactics:   "How do enemies behave? Any triggered actions or special behaviors?",
      loot:      "What do players find on completion?",
      dmnote:    "Pacing tip, common player detour, anything to watch for.",
    },
    {
      name: "Scene 2 Name", time: "~20 min",
      setting:   "Where does this take place?",
      trigger:   "What kicks off the scene?",
      creatures: "Who is present?",
      tactics:   "Enemy tactics / NPC behavior.",
      loot:      "Loot / reward.",
      dmnote:    "DM note.",
    },
    {
      name: "Scene 3 Name", time: "~20 min",
      setting:   "Where does this take place?",
      trigger:   "What kicks off the scene?",
      creatures: "Who is present?",
      tactics:   "Enemy tactics / NPC behavior.",
      loot:      "Loot / reward.",
      dmnote:    "DM note.",
    },
    {
      name: "Wrap-Up", time: "~10 min",
      setting:   "Post-adventure resolution location.",
      trigger:   "What closes the adventure?",
      creatures: "Any final NPCs or reveals?",
      tactics:   "N/A",
      loot:      "Final reward distribution.",
      dmnote:    "Series continuity: what do players take forward?",
    },
  ],

  // ── NPCs ───────────────────────────────────────────────────────────────────
  // Each entry: { name, statBlock, alignment, wants, knows, voice, quote }
  npcs: [
    {
      name:       "NPC Name",
      statBlock:  "Stat Block / CR",
      alignment:  "LN",
      wants:      "Primary motivation — what are they trying to achieve in this adventure?",
      knows:      "Key information they hold that is relevant to the plot.",
      voice:      "How do they speak? Mannerisms, accent, emotional baseline, one tell.",
      quote:      "\"An opening line that captures their personality immediately.\"",
    },
    {
      name:       "NPC Name",
      statBlock:  "Stat Block / CR",
      alignment:  "NG",
      wants:      "Primary motivation.",
      knows:      "Key knowledge.",
      voice:      "Voice and manner.",
      quote:      "\"Opening quote.\"",
    },
    {
      name:       "NPC Name",
      statBlock:  "Villain / CR",
      alignment:  "LE",
      wants:      "What does the antagonist ultimately want?",
      knows:      "What gives them their advantage?",
      voice:      "Contemptuous, grandiose, cold — pick one and commit.",
      quote:      "\"Villain's signature line.\"",
    },
    {
      name:       "NPC Name",
      statBlock:  "Stat Block / CR",
      alignment:  "CN",
      wants:      "Motivation.",
      knows:      "Knowledge.",
      voice:      "Voice.",
      quote:      "\"Quote.\"",
    },
  ],

  // ── Skill checks ───────────────────────────────────────────────────────────
  // Each entry: { location, check, dc, success }
  skillChecks: [
    { location: "Scene 1 area",   check: "Wis (Perception)",          dc: "12", success: "Notice the hidden door / item / threat." },
    { location: "Scene 1 area",   check: "Int (Investigation)",        dc: "14", success: "Piece together the clue." },
    { location: "Scene 2 area",   check: "Cha (Persuasion)",           dc: "13", success: "NPC agrees to help." },
    { location: "Scene 2 area",   check: "Cha (Intimidation)",         dc: "15", success: "NPC backs down." },
    { location: "Scene 3 area",   check: "Dex (Thieves' Tools)",       dc: "10", success: "Lock opens without alerting guards." },
    { location: "Scene 3 area",   check: "Str (Athletics)",            dc: "12", success: "Scale the wall without falling." },
    { location: "Scene 3 area",   check: "Int (Religion/History)",     dc: "13", success: "Identify the symbol / faction / creature type." },
    { location: "Bonus A area",   check: "Ability (Skill)",            dc: "##", success: "Chase / challenge outcome." },
    { location: "Bonus B area",   check: "Ability (Skill)",            dc: "##", success: "Trial / social outcome." },
  ],

  // ── Magic items ────────────────────────────────────────────────────────────
  // Each entry: { name, rarity, attunement, summary }
  magicItems: [
    { name: "Item Name", rarity: "uncommon", attunement: false, summary: "One-line mechanical summary." },
    { name: "Item Name", rarity: "uncommon", attunement: true,  summary: "One-line mechanical summary." },
    { name: "Potion of Healing", rarity: "common", attunement: false, summary: "Regain 2d4+2 HP." },
  ],

  // ── Downtime / renown ──────────────────────────────────────────────────────
  downtime: "5 downtime days",
  renown:   "none (or: +1 [Faction Name] renown)",

  // ── Stat blocks ────────────────────────────────────────────────────────────
  // Each entry: { name, cr, size, type, alignment, ac, hp, speed, str, dex, con, int, wis, cha,
  //              saves, skills, resist, immune, condImmune, senses, traits, actions }
  // Leave any field blank ("") to omit it.
  statBlocks: [
    {
      name: "VILLAIN NAME", cr: "3", size: "Medium", type: "fiend (devil)", alignment: "lawful evil",
      ac: "13 (natural armor)", hp: "52 (8d8+16)", speed: "30 ft.",
      str: "16 (+3)", dex: "15 (+2)", con: "15 (+2)", int: "9 (−1)", wis: "11 (+0)", cha: "11 (+0)",
      saves: "Str +5, Con +4, Wis +2",
      skills: "",
      resist: "cold; bludgeoning, piercing, and slashing from nonmagical/non-silvered weapons",
      immune: "fire, poison",
      condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 10",
      traits: [
        { name: "Trait Name",    text: "Description of the trait." },
        { name: "Magic Resistance", text: "Advantage on saves against spells and magical effects." },
      ],
      actions: [
        { name: "Multiattack",  text: "Makes two attacks." },
        { name: "Attack Name",  text: "+5 to hit, reach 5 ft., 8 (1d10+3) damage type. Additional effect on hit." },
      ],
    },
    {
      name: "MINION NAME", cr: "1/2", size: "Medium", type: "humanoid (human)", alignment: "neutral evil",
      ac: "12 (leather armor)", hp: "9 (2d8)", speed: "30 ft.",
      str: "11 (+0)", dex: "12 (+1)", con: "10 (+0)", int: "10 (+0)", wis: "11 (+0)", cha: "10 (+0)",
      saves: "",
      skills: "Deception +2, Religion +2",
      resist: "", immune: "", condImmune: "",
      senses: "passive Perception 10",
      traits: [
        { name: "Dark Devotion", text: "Advantage on saves against the charmed and frightened conditions." },
      ],
      actions: [
        { name: "Scimitar", text: "+3 to hit, reach 5 ft., 4 (1d6+1) slashing damage." },
      ],
    },
    {
      name: "CREATURE NAME", cr: "1", size: "Tiny", type: "fiend (devil)", alignment: "lawful evil",
      ac: "13", hp: "10 (3d4+3)", speed: "20 ft., fly 40 ft.",
      str: "6 (−2)", dex: "17 (+3)", con: "13 (+1)", int: "11 (+0)", wis: "12 (+1)", cha: "14 (+2)",
      saves: "",
      skills: "Deception +4, Stealth +5",
      resist: "cold; nonmagical/non-silvered weapons",
      immune: "fire, poison", condImmune: "poisoned",
      senses: "darkvision 120 ft., passive Perception 11",
      traits: [
        { name: "Devil's Sight", text: "Magical darkness doesn't impede darkvision." },
        { name: "Magic Resistance", text: "Advantage on saves vs. spells and magical effects." },
      ],
      actions: [
        { name: "Sting",        text: "+5, 5 ft., 5 (1d4+3) piercing. DC 11 Con save or 10 (3d6) poison damage." },
        { name: "Invisibility", text: "Until it attacks or concentration ends." },
      ],
    },
    {
      name: "CREATURE NAME", cr: "##", size: "Size", type: "type (subtype)", alignment: "alignment",
      ac: "## (armor type)", hp: "## (XdY+Z)", speed: "## ft.",
      str: "## (+#)", dex: "## (+#)", con: "## (+#)", int: "## (+#)", wis: "## (+#)", cha: "## (+#)",
      saves: "",
      skills: "",
      resist: "", immune: "", condImmune: "",
      senses: "darkvision ## ft., passive Perception ##",
      traits: [
        { name: "Trait Name", text: "Trait description." },
      ],
      actions: [
        { name: "Multiattack", text: "Makes ## attacks." },
        { name: "Attack Name", text: "+# to hit, reach # ft., # (#dY+#) damage type." },
      ],
    },
  ],

  // ── Bonus objectives ────────────────────────────────────────────────────────
  bonusA: {
    title:   "Bonus A Title",
    timing:  "When does this slot in relative to the core adventure?",
    trigger: "What kicks it off?",
    goal:    "What counts as success?",
    failEffect: "What changes in the core adventure if this fails?",
    creatures: "Who is involved and what do they want?",
    mechanics: "Chase rules? Skill challenge DCs? Adjustments (Very Weak / Weak / Strong / Very Strong)?",
    loot:      "Reward on success.",
    dmnote:    "Pacing tip, failure mode, off-script recovery.",
    // Optional: chase complication table rows { d20, text }
    chaseComplications: [
      { d20: "1",    text: "Complication 1 — DC ## [Skill] or [consequence]." },
      { d20: "2",    text: "Complication 2 — DC ## [Skill] or [consequence]." },
      { d20: "3",    text: "Complication 3." },
      { d20: "4",    text: "Complication 4." },
      { d20: "5",    text: "Complication 5." },
      { d20: "6",    text: "Complication 6." },
      { d20: "7",    text: "Complication 7." },
      { d20: "8",    text: "Complication 8." },
      { d20: "9",    text: "Complication 9." },
      { d20: "10",   text: "Complication 10." },
      { d20: "11–20","text": "No complication." },
    ],
  },

  bonusB: {
    title:        "Bonus B Title",
    timing:       "When does this slot in?",
    trigger:      "What triggers it?",
    goal:         "What counts as success?",
    failPenalty:  "Fine amount / downtime days / magic item loss?",
    creatures:    "Who is involved?",
    mechanics:    "8 successes before 3 failures? Combat? Exploration?",
    loot:         "Reward on success.",
    failReward:   "What (if anything) do they still get on failure?",
    dmnote:       "Key DM note.",
  },

}; // end inline DATA
// ╔══════════════════════════════════════════════════════════════════════════╗
// ║  STEP 2 — NOTHING BELOW THIS LINE NEEDS TO BE EDITED                   ║
// ╚══════════════════════════════════════════════════════════════════════════╝

const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, BorderStyle, WidthType, ShadingType, LevelFormat, PageBreak,
} = require('docx');
const fs = require('fs');

const C = {
  darkRed:"3E0000", red:"7B1C1C", midRed:"5C1010",
  lightRed:"FAF0F0", gold:"C4962A", lightGold:"FFF8E0",
  blue:"1F4E79", lightBlue:"EAF2FF",
  gray:"555555", lightGray:"F3F3F3", white:"FFFFFF", black:"1A1A1A",
};
const BD  = { style: BorderStyle.SINGLE, size: 4, color: "CCCCCC" };
const BDR = { style: BorderStyle.SINGLE, size: 6, color: "7B1C1C" };
const BDN = { style: BorderStyle.NONE,   size: 0, color: "FFFFFF" };
const borders   = { top:BD,  bottom:BD,  left:BD,  right:BD  };
const redBorders= { top:BDR, bottom:BDR, left:BDR, right:BDR };
const noBorders = { top:BDN, bottom:BDN, left:BDN, right:BDN };

function run(opts)     { return new TextRun({ font:"Arial", size:20, ...opts }); }
function spacer(n=80)  { return new Paragraph({ children:[], spacing:{before:0, after:n} }); }
function pb()          { return new Paragraph({ children:[new PageBreak()] }); }

function para(children, paraOpts={}) {
  const runs = Array.isArray(children)
    ? children.map(c => typeof c==="string" ? run({text:c}) : run(c))
    : [typeof children==="string" ? run({text:children}) : run(children)];
  return new Paragraph({ children:runs, spacing:{before:60,after:60}, ...paraOpts });
}

function h1(text) { return new Paragraph({ children:[run({text,bold:true,size:30,color:C.white})], shading:{fill:C.darkRed,type:ShadingType.CLEAR}, spacing:{before:0,after:160}, indent:{left:160,right:160} }); }
function h2(text) { return new Paragraph({ children:[run({text,bold:true,size:24,color:C.white})], shading:{fill:C.midRed,type:ShadingType.CLEAR}, spacing:{before:200,after:80}, indent:{left:120,right:120} }); }
function h3(text) { return new Paragraph({ children:[run({text,bold:true,size:21,color:C.red})], border:{bottom:{style:BorderStyle.SINGLE,size:4,color:C.red}}, spacing:{before:160,after:60} }); }

function bullet(label, text) {
  const children = label
    ? [run({text:label+": ",bold:true,color:C.red}), run({text})]
    : [run({text: text||label})];
  return new Paragraph({ numbering:{reference:"bullets",level:0}, children, spacing:{before:40,after:40} });
}

function callout(text, color=C.gold, bg=C.lightGold, label="NOTE") {
  return new Paragraph({ children:[run({text:label+": ",bold:true,color}), run({text,color:C.black})], shading:{fill:bg,type:ShadingType.CLEAR}, border:{left:{style:BorderStyle.SINGLE,size:12,color}}, spacing:{before:80,after:80}, indent:{left:240,right:200} });
}
function dmnote(text)  { return callout(text, C.blue, C.lightBlue, "DM"); }

function hcell(text, width) {
  return new TableCell({ borders, width:{size:width,type:WidthType.DXA}, shading:{fill:C.darkRed,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:120,right:120}, children:[para({text,bold:true,size:18,color:C.white})] });
}
function dcell(content, width, fill=C.white) {
  const children = typeof content==="string" ? [para({text:content,size:18})] : [content];
  return new TableCell({ borders, width:{size:width,type:WidthType.DXA}, shading:{fill,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:120,right:120}, children });
}

// ── Quick stats bar ───────────────────────────────────────────────────────────
function quickStatsBar() {
  const fields = [
    ["LEVELS", DATA.levels], ["APL", DATA.apl], ["DURATION", DATA.duration],
    ["PLAYERS", DATA.players], ["LOCATION", DATA.location],
  ];
  const w = 1872;
  return new Table({
    width:{size:9360,type:WidthType.DXA}, columnWidths:fields.map(()=>w),
    rows:[new TableRow({ children: fields.map(([label,val]) =>
      new TableCell({ borders, width:{size:w,type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:120,right:120}, children:[
        para({text:label,bold:true,size:17,color:C.red}),
        para({text:val,  size:19,bold:true,color:C.black}),
      ]})
    )})]
  });
}

// ── Scene flow table ──────────────────────────────────────────────────────────
function sceneFlowTable() {
  const W=[1100,700,3000,4560];
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:W, rows:[
    new TableRow({ tableHeader:true, children:["SCENE","TIME","GOAL / OBJECTIVE","KEY OUTCOME / TRIGGER"].map((t,i)=>hcell(t,W[i])) }),
    ...DATA.scenes.map(({name,time,goal,outcome},idx) => {
      const bg = idx%2===0 ? C.white : C.lightGray;
      return new TableRow({ children:[
        new TableCell({ borders, width:{size:W[0],type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:120,right:120}, children:[para({text:name,bold:true,size:18})] }),
        dcell(time, W[1], bg), dcell(goal, W[2], bg), dcell(outcome, W[3], bg),
      ]});
    })
  ]});
}

// ── NPC card ──────────────────────────────────────────────────────────────────
function npcCard(npc) {
  const LW=1320, VW=8040;
  const row = (label, text) => new TableRow({ children:[
    new TableCell({ borders, width:{size:LW,type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:100,right:100}, children:[para({text:label,bold:true,size:18,color:C.red})] }),
    new TableCell({ borders, width:{size:VW,type:WidthType.DXA}, margins:{top:80,bottom:80,left:120,right:120}, children:[para({text,size:18})] }),
  ]});
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:[LW,VW], rows:[
    new TableRow({ children:[new TableCell({ borders:redBorders, columnSpan:2, shading:{fill:C.darkRed,type:ShadingType.CLEAR}, margins:{top:100,bottom:100,left:180,right:180}, children:[
      new Paragraph({ children:[run({text:npc.name+"  ",bold:true,size:24,color:C.white}), run({text:`(${npc.statBlock}, ${npc.alignment})`,size:17,color:"BBBBBB"})] })
    ]})] }),
    row("WANTS",  npc.wants),
    row("KNOWS",  npc.knows),
    row("VOICE",  npc.voice),
    new TableRow({ children:[new TableCell({ borders:redBorders, columnSpan:2, shading:{fill:"FFF8F0",type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:400,right:200}, children:[
      para({text:npc.quote, italics:true, size:18, color:C.gray})
    ]})] }),
  ]});
}

// ── Skill DC table ────────────────────────────────────────────────────────────
function skillDCTable() {
  const W=[1800,2600,520,4440];
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:W, rows:[
    new TableRow({ tableHeader:true, children:["LOCATION","SKILL CHECK","DC","SUCCESS = ?"].map((t,i)=>hcell(t,W[i])) }),
    ...DATA.skillChecks.map(({location,check,dc,success},idx) => {
      const bg = idx%2===0 ? C.white : C.lightGray;
      return new TableRow({ children:[
        new TableCell({ borders, width:{size:W[0],type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:80,bottom:80,left:120,right:120}, children:[para({text:location,bold:true,size:18})] }),
        dcell(check,W[1],bg), dcell(dc,W[2],bg), dcell(success,W[3],bg),
      ]});
    })
  ]});
}

// ── Stat block ────────────────────────────────────────────────────────────────
function statBlock(sb) {
  const CW=[2220,2220];
  const fullRow = (content, fill=C.white) => new TableRow({ children:[
    new TableCell({ borders, columnSpan:2, shading:{fill,type:ShadingType.CLEAR}, margins:{top:60,bottom:60,left:120,right:120}, children:[content] })
  ]});
  const traitRows = items => items.map(({name,text}) => fullRow(
    new Paragraph({ children:[run({text:name+". ",bold:true,italics:true,size:17,color:C.red}),run({text,size:17})], spacing:{before:0,after:0} })
  ));
  const lines = [];
  if (sb.saves)     lines.push("Saves: "+sb.saves);
  if (sb.skills)    lines.push("Skills: "+sb.skills);
  if (sb.resist)    lines.push("Resistance: "+sb.resist);
  if (sb.immune)    lines.push("Immunity: "+sb.immune);
  if (sb.condImmune)lines.push("Cond. Immunity: "+sb.condImmune);
  if (sb.senses)    lines.push("Senses: "+sb.senses);

  return new Table({ width:{size:4440,type:WidthType.DXA}, columnWidths:CW, rows:[
    new TableRow({ children:[new TableCell({ borders:redBorders, columnSpan:2, shading:{fill:C.darkRed,type:ShadingType.CLEAR}, margins:{top:90,bottom:90,left:160,right:160}, children:[
      new Paragraph({ children:[run({text:sb.name,bold:true,size:22,color:C.white})] }),
      new Paragraph({ children:[run({text:`${sb.size} ${sb.type}, ${sb.alignment}  |  CR ${sb.cr}`,size:17,color:"CCCCCC"})] }),
    ]})] }),
    fullRow(para({text:`AC ${sb.ac}   HP ${sb.hp}   Speed ${sb.speed}`,size:18})),
    fullRow(new Paragraph({ children:[run({text:`STR ${sb.str}   DEX ${sb.dex}   CON ${sb.con}`,bold:true,size:17})], spacing:{before:0,after:0} }), C.lightRed),
    fullRow(new Paragraph({ children:[run({text:`INT ${sb.int}   WIS ${sb.wis}   CHA ${sb.cha}`,bold:true,size:17})], spacing:{before:0,after:0} }), C.lightRed),
    ...lines.map(l=>fullRow(para({text:l,size:17}))),
    ...traitRows(sb.traits),
    new TableRow({ children:[new TableCell({ borders:redBorders, columnSpan:2, shading:{fill:C.midRed,type:ShadingType.CLEAR}, margins:{top:60,bottom:60,left:120,right:120}, children:[para({text:"ACTIONS",bold:true,size:17,color:C.white})] })] }),
    ...traitRows(sb.actions),
  ]});
}

function twoStatBlocks(sb1, sb2) {
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:[4440,480,4440], rows:[new TableRow({ children:[
    new TableCell({ borders:noBorders, width:{size:4440,type:WidthType.DXA}, children:[sb1] }),
    new TableCell({ borders:noBorders, width:{size:480, type:WidthType.DXA}, children:[spacer()] }),
    new TableCell({ borders:noBorders, width:{size:4440,type:WidthType.DXA}, children:[sb2] }),
  ]})]});
}

// ── AL Rewards table ──────────────────────────────────────────────────────────
function alRewardsTable() {
  const W=[1440,2480,2480,2960];
  const tiers = [
    ["1 (Lvl 1–4)",  "20 gp",  "80 gp"],
    ["2 (Lvl 5–10)", "30 gp",  "240 gp"],
    ["3 (Lvl 11–16)","200 gp", "1,600 gp"],
    ["4 (Lvl 17–20)","750 gp", "6,000 gp"],
  ];
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:W, rows:[
    new TableRow({ tableHeader:true, children:["TIER","HOURLY GP","GP LIMIT / LEVEL","NOTES"].map((t,i)=>hcell(t,W[i])) }),
    ...tiers.map(([tier,hourly,limit],idx) => {
      const bg=idx%2===0?C.white:C.lightGray;
      return new TableRow({ children:[
        new TableCell({ borders, width:{size:W[0],type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:60,bottom:60,left:120,right:120}, children:[para({text:tier,bold:true,size:18})] }),
        dcell(hourly,W[1],bg), dcell(limit,W[2],bg), dcell("",W[3],bg),
      ]});
    })
  ]});
}

// ── Chase complications table ─────────────────────────────────────────────────
function chaseTable(complications) {
  const W=[500,8860];
  return new Table({ width:{size:9360,type:WidthType.DXA}, columnWidths:W, rows:[
    new TableRow({ tableHeader:true, children:["d20","COMPLICATION"].map((t,i)=>hcell(t,W[i])) }),
    ...complications.map(({d20,text},idx) => new TableRow({ children:[
      new TableCell({ borders, width:{size:W[0],type:WidthType.DXA}, shading:{fill:C.lightRed,type:ShadingType.CLEAR}, margins:{top:60,bottom:60,left:100,right:100}, children:[para({text:d20,bold:true,size:18})] }),
      dcell(text,W[1],idx%2===0?C.white:C.lightGray),
    ]}))
  ]});
}

// ══════════════════════════════════════════════════════════════════════════════
//  DOCUMENT ASSEMBLY
// ══════════════════════════════════════════════════════════════════════════════
const children = [];

// PAGE 1 — CHEAT SHEET
children.push(
  h1(`${DATA.code} — ${DATA.title}   DM Master Reference`),
  quickStatsBar(),
  spacer(60),
  callout(DATA.background, C.red, C.lightRed, "BACKGROUND"),
  spacer(60),
  h2("SCENE FLOW"),
  spacer(40),
  sceneFlowTable(),
  spacer(60),
  callout(DATA.keyFacts, C.gold, C.lightGold, "KEY FACTS"),
  pb(),
);

// PAGE 2+ — SCENE NOTES
children.push(h1("SCENE-BY-SCENE DM NOTES"));
DATA.sceneNotes.forEach(s => {
  children.push(
    h2(`${s.name}   (${s.time})`),
    bullet("Setting",  s.setting),
    bullet("Trigger",  s.trigger),
    spacer(40),
    h3("Encounter / Exploration / Social"),
    bullet("Creatures", s.creatures),
    bullet("Tactics",   s.tactics),
    bullet("Loot",      s.loot),
    dmnote(s.dmnote),
    spacer(),
  );
});
children.push(pb());

// NPC PAGES
const npcsPerPage = 3;
for (let i = 0; i < DATA.npcs.length; i += npcsPerPage) {
  const slice = DATA.npcs.slice(i, i + npcsPerPage);
  const pageNum = Math.floor(i / npcsPerPage) + 1;
  const title = pageNum === 1 ? "NPC QUICK REFERENCE" : "NPC QUICK REFERENCE (CONTINUED)";
  children.push(h1(title));
  slice.forEach(npc => { children.push(npcCard(npc), spacer()); });
  children.push(pb());
}

// SKILL DCs + REWARDS
children.push(
  h1("SKILL CHECK DC REFERENCE"),
  spacer(40),
  skillDCTable(),
  spacer(),
);
if (DATA.magicItems.length) {
  children.push(
    h3("MAGIC ITEMS"),
    ...DATA.magicItems.map(item =>
      bullet(item.name, `(${item.rarity}${item.attunement?" — attunement":""}) ${item.summary}`)
    ),
    spacer(),
  );
}
children.push(
  h2("AL REWARDS"),
  spacer(40),
  alRewardsTable(),
  spacer(),
  bullet("Milestone", DATA.reward),
  bullet("Downtime",  DATA.downtime),
  bullet("Renown",    DATA.renown),
  pb(),
);

// STAT BLOCKS
children.push(h1("STAT BLOCKS"), spacer(40));
for (let i = 0; i < DATA.statBlocks.length; i += 2) {
  const a = statBlock(DATA.statBlocks[i]);
  const b = DATA.statBlocks[i+1] ? statBlock(DATA.statBlocks[i+1]) : statBlock(DATA.statBlocks[i]);
  children.push(twoStatBlocks(a, b), spacer());
}
children.push(pb());

// BONUS OBJECTIVES
const A = DATA.bonusA, B = DATA.bonusB;
children.push(
  h1("BONUS OBJECTIVES   (Insert if running ahead of time)"),
  callout(`Bonus A: ${A.timing}   |   Bonus B: ${B.timing}`, C.gold, C.lightGold, "TIMING"),
  spacer(),
  h2(`BONUS A: ${A.title}   (~1 hr)`),
  bullet("Trigger",      A.trigger),
  bullet("Goal",         A.goal),
  bullet("Fail effect",  A.failEffect),
  spacer(40),
  h3("Encounter / Chase / Skill Challenge"),
  bullet("Creatures",  A.creatures),
  bullet("Mechanics",  A.mechanics),
  bullet("Loot",       A.loot),
  dmnote(A.dmnote),
  spacer(40),
);
if (A.chaseComplications && A.chaseComplications.length) {
  children.push(
    h3("Chase Complications (d20)"),
    chaseTable(A.chaseComplications),
    spacer(),
  );
}
children.push(
  pb(),
  h1(`BONUS B: ${B.title}   (~1 hr)`),
  bullet("Trigger",       B.trigger),
  bullet("Goal",          B.goal),
  bullet("Fail penalty",  B.failPenalty),
  spacer(40),
  h3("Encounter / Social / Exploration"),
  bullet("Creatures / NPCs", B.creatures),
  bullet("Mechanics",        B.mechanics),
  bullet("Reward",           B.loot),
  bullet("Failure",          B.failReward),
  dmnote(B.dmnote),
);

// ── Build doc ─────────────────────────────────────────────────────────────────
const doc = new Document({
  numbering: { config:[{ reference:"bullets", levels:[{ level:0, format:LevelFormat.BULLET, text:"\u2022", alignment:AlignmentType.LEFT, style:{paragraph:{indent:{left:540,hanging:360}}} }] }] },
  styles: { default:{ document:{ run:{ font:"Arial", size:20 } } } },
  sections:[{
    properties:{ page:{ size:{width:12240,height:15840}, margin:{top:720,right:900,bottom:720,left:900} } },
    children,
  }],
});

const outFile = path.join(__dirname, 'Adventure References', `al_dm_reference_${DATA.code.replace(/[^a-z0-9]/gi,"_")}.docx`);
Packer.toBuffer(doc)
  .then(buf => { fs.writeFileSync(outFile, buf); console.log("SUCCESS: "+outFile); })
  .catch(err => { console.error("ERROR:", err.message); process.exit(1); });
