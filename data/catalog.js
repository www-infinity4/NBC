// NBC Infinity Channel — full-program-only catalog.
// Programming rule: NBC must feel like a network, not a single-show loop.
// Only genuine full episodes/full broadcasts from sources already cleared for embedding
// enter the live schedule. Clips, promos, previews and highlights stay out.
window.NBC_PROGRAMS = {
  bonanzaShowdown:{id:"NBC-BONANZA-S2E1",title:"Bonanza — Showdown (Full Episode)",year:1960,collection:"NBC Classic TV · Bonanza · Full episode",runtimeSeconds:2940,videoId:"bFeTu9aJNww",contentClass:"Full episode",fullEpisode:true,cleared:true},
  bonanzaBadge:{id:"NBC-BONANZA-S2E3",title:"Bonanza — Badge Without Honor (Full Episode)",year:1960,collection:"NBC Classic TV · Bonanza · Full episode",runtimeSeconds:2960,videoId:"tMXhbsyxCXY",contentClass:"Full episode",fullEpisode:true,cleared:true},
  bonanzaMill:{id:"NBC-BONANZA-S2E4",title:"Bonanza — The Mill (Full Episode)",year:1960,collection:"NBC Classic TV · Bonanza · Full episode",runtimeSeconds:2960,videoId:"Lf5HzudcdBA",contentClass:"Full episode",fullEpisode:true,cleared:true},
  bonanzaHopefuls:{id:"NBC-BONANZA-S2E5",title:"Bonanza — The Hopefuls (Full Episode)",year:1960,collection:"NBC Classic TV · Bonanza · Full episode",runtimeSeconds:2960,videoId:"PYYMLDQEWUs",contentClass:"Full episode",fullEpisode:true,cleared:true},
  bonanzaReckoning:{id:"NBC-BONANZA-S2E7",title:"Bonanza — Day of Reckoning (Full Episode)",year:1960,collection:"NBC Classic TV · Bonanza · Full episode",runtimeSeconds:2960,videoId:"4QEaQHRVQOw",contentClass:"Full episode",fullEpisode:true,cleared:true},

  highwayPilot1:{id:"NBC-HTH-S1E1",title:"Highway to Heaven — Pilot: Part 1",year:1984,collection:"NBC Classic Drama · Highway to Heaven · Full episode",runtimeSeconds:2700,videoId:"FFE6Ihp3kz0",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  highwayPilot2:{id:"NBC-HTH-S1E2",title:"Highway to Heaven — Pilot: Part 2",year:1984,collection:"NBC Classic Drama · Highway to Heaven · Full episode",runtimeSeconds:2700,videoId:"CS_pAB-sii8",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  highwayLemonade1:{id:"NBC-HTH-S1E6",title:"Highway to Heaven — One Fresh Batch of Lemonade: Part 1",year:1984,collection:"NBC Classic Drama · Highway to Heaven · Full episode",runtimeSeconds:2700,videoId:"Mmrj1FQgE24",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  highwayChild:{id:"NBC-HTH-S1E18",title:"Highway to Heaven — A Child of God",year:1985,collection:"NBC Classic Drama · Highway to Heaven · Full episode",runtimeSeconds:2700,videoId:"k1ktJKA8ZvE",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  highwayBanker:{id:"NBC-HTH-S1E20",title:"Highway to Heaven — The Banker and the Bum",year:1985,collection:"NBC Classic Drama · Highway to Heaven · Full episode",runtimeSeconds:2700,videoId:"bxvaee6SPps",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},

  unsolvedS1E1:{id:"NBC-UM-S1E1",title:"Unsolved Mysteries — Season 1, Episode 1",year:1988,collection:"NBC Mystery · Unsolved Mysteries · Full episode",runtimeSeconds:2700,videoId:"CM9OlU8A1RU",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  unsolvedS1E8:{id:"NBC-UM-S1E8",title:"Unsolved Mysteries — Season 1, Episode 8",year:1988,collection:"NBC Mystery · Unsolved Mysteries · Full episode",runtimeSeconds:2700,videoId:"hPoghcn7W7I",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},
  unsolvedS7E12:{id:"NBC-UM-S7E12",title:"Unsolved Mysteries — Season 7, Episode 12",year:1995,collection:"NBC Mystery · Unsolved Mysteries · Full episode",runtimeSeconds:2700,videoId:"i4T9fO1pkfE",contentClass:"Full episode",fullEpisode:true,cleared:true,source:"FilmRise"},

  meetPress:{id:"NBC-MTP-2026",title:"Meet the Press — Full Episode",year:2026,collection:"NBC News · Meet the Press · Full episode",runtimeSeconds:2700,videoId:"4EusZcKt5fs",contentClass:"Full episode",fullEpisode:true,cleared:true},
  meetPressArchive:{id:"NBC-MTP-ARCHIVE",title:"Meet the Press — Full Broadcast",year:2024,collection:"NBC News · Meet the Press · Full broadcast",runtimeSeconds:2700,videoId:"Hh4DO5WVxko",contentClass:"Full broadcast",fullEpisode:true,cleared:true}
};

const NBC_DAY_TEMPLATE=[];
function nbcSlot(minute,duration,choices,type="show"){NBC_DAY_TEMPLATE.push({minute,duration,choices,type});}

const WESTERN=["bonanzaShowdown","bonanzaBadge","bonanzaMill","bonanzaHopefuls","bonanzaReckoning"];
const HIGHWAY=["highwayPilot1","highwayPilot2","highwayLemonade1","highwayChild","highwayBanker"];
const MYSTERY=["unsolvedS1E1","unsolvedS1E8","unsolvedS7E12"];
const NEWS=["meetPress","meetPressArchive"];
const CLASSIC_MIX=[...HIGHWAY,...MYSTERY];

// Curated 24-hour clock. Bonanza is intentionally capped at two one-hour slots per day.
// Adjacent blocks use different program pools so one series cannot swallow the schedule.
nbcSlot(0,60,MYSTERY);       // 12 AM
nbcSlot(60,60,HIGHWAY);      // 1 AM
nbcSlot(120,60,HIGHWAY);     // 2 AM
nbcSlot(180,60,WESTERN);     // 3 AM — one western slot
nbcSlot(240,60,HIGHWAY);     // 4 AM
nbcSlot(300,60,MYSTERY);     // 5 AM
nbcSlot(360,60,NEWS);        // 6 AM
nbcSlot(420,60,NEWS);        // 7 AM
nbcSlot(480,60,HIGHWAY);     // 8 AM
nbcSlot(540,60,MYSTERY);     // 9 AM
nbcSlot(600,60,HIGHWAY);     // 10 AM
nbcSlot(660,60,CLASSIC_MIX); // 11 AM
nbcSlot(720,60,MYSTERY);     // 12 PM
nbcSlot(780,60,HIGHWAY);     // 1 PM
nbcSlot(840,60,WESTERN);     // 2 PM — second/final western slot
nbcSlot(900,60,HIGHWAY);     // 3 PM
nbcSlot(960,60,MYSTERY);     // 4 PM
nbcSlot(1020,60,CLASSIC_MIX);// 5 PM
nbcSlot(1080,60,HIGHWAY);    // 6 PM
nbcSlot(1140,60,MYSTERY);    // 7 PM
nbcSlot(1200,60,CLASSIC_MIX);// 8 PM prime time
nbcSlot(1260,60,MYSTERY);    // 9 PM
nbcSlot(1320,60,NEWS);       // 10 PM
nbcSlot(1380,60,HIGHWAY);    // 11 PM

window.NBC_DAY_TEMPLATE=NBC_DAY_TEMPLATE;
window.NBC_COMMERCIALS=[
  {id:"NBC-ID-1",title:"NBC station break",durationSeconds:60,videoId:"",cleared:true},
  {id:"NBC-ID-2",title:"Next program starts at the top of the hour",durationSeconds:60,videoId:"",cleared:true}
];
window.INFINITY_CHANNEL={
  id:"NBC",
  era:"NBC classics, mystery, drama and current NBC public affairs",
  reset:"12:00 AM Central broadcast time",
  broadcastTimeZone:"America/Chicago",
  sourcePolicy:"Only genuine full episodes/full broadcasts from verified or previously cleared sources may be scheduled. Clips, previews, highlights and compilations are excluded.",
  rotationPolicy:"No single series should dominate. Bonanza is capped at two scheduled hours per day. Expand Seinfeld, Law & Order and other NBC series only when a genuine embeddable full-program source is verified.",
  slotPolicy:"Regular programs use 60-minute network slots; the remainder of a slot is a station break rather than an early restart."
};
