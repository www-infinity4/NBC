// NBC-only Infinity channel catalog.
// Guide titles are literal about what the source actually contains. Full episodes
// say "Full Episode" or "Full Broadcast"; compilations, previews and performance
// blocks are labeled as such. An SNL compilation is retained as an available source
// but is NOT scheduled as Saturday Night Live because it is not a full episode.
window.NBC_PROGRAMS = {
  snlSketches: {id:"NBC-SNL-50",title:"SNL Sketch Compilation — Season 50 Most-Watched Sketches",year:2025,collection:"NBC Comedy · SNL sketch compilation",runtimeSeconds:1500,videoId:"o9vgXOH4ET0",contentClass:"Compilation",fullEpisode:false,cleared:true},
  officeKevin: {id:"NBC-OFFICE-KEVIN",title:"The Office Clip Block — The Best of Kevin",year:2017,collection:"NBC Comedy · The Office clips",runtimeSeconds:900,videoId:"w4jI97DiHF8",contentClass:"Compilation",fullEpisode:false,cleared:true},
  parksRon: {id:"NBC-PARKS-RON",title:"Parks and Recreation Clip Block — Ron Swanson's Best Moments",year:2015,collection:"NBC Comedy · Parks and Recreation clips",runtimeSeconds:900,videoId:"SrLZgP-OR6s",contentClass:"Compilation",fullEpisode:false,cleared:true},
  parksApril: {id:"NBC-PARKS-APRIL",title:"Parks and Recreation Clip Block — April Ludgate's Best Moments",year:2015,collection:"NBC Comedy · Parks and Recreation clips",runtimeSeconds:900,videoId:"eopL9kmMhvw",contentClass:"Compilation",fullEpisode:false,cleared:true},

  lawOrderTrue: {id:"NBC-LO-TRUE",title:"Law & Order Clip Block — Cases Based on a True Story",year:2024,collection:"NBC Drama · Law & Order clips",runtimeSeconds:900,videoId:"qYN-c3X4tUE",contentClass:"Compilation",fullEpisode:false,cleared:true},
  lawOrderTape: {id:"NBC-LO-TAPE",title:"Law & Order Clip Block — It's All On Tape",year:2024,collection:"NBC Drama · Law & Order clips",runtimeSeconds:900,videoId:"vvl9ww5bKlE",contentClass:"Compilation",fullEpisode:false,cleared:true},
  chicagoBest: {id:"NBC-CHICAGO-BEST",title:"Chicago P.D. Clip Block — Fan-Voted Chicago Moments",year:2019,collection:"NBC Drama · One Chicago clips",runtimeSeconds:600,videoId:"wuuAu6Abg9M",contentClass:"Compilation",fullEpisode:false,cleared:true},
  quantumFirst: {id:"NBC-QUANTUM-FIRST",title:"Quantum Leap Preview — First Look",year:2022,collection:"NBC Drama · Quantum Leap preview",runtimeSeconds:300,videoId:"CMbaiBexXwc",contentClass:"Preview",fullEpisode:false,cleared:true},
  quantumLeap: {id:"NBC-QUANTUM-LEAP",title:"Quantum Leap Clip — My Favorite Leap",year:2024,collection:"NBC Drama · Quantum Leap clip",runtimeSeconds:300,videoId:"cJnc8wv1NdE",contentClass:"Clip",fullEpisode:false,cleared:true},

  voiceTop8: {id:"NBC-VOICE-TOP8",title:"The Voice Performance Block — Best Performances from the Top 8",year:2024,collection:"NBC Entertainment · The Voice performances",runtimeSeconds:1200,videoId:"QKm6w00ANg4",contentClass:"Performance compilation",fullEpisode:false,cleared:true},
  voiceFinale: {id:"NBC-VOICE-FINALE",title:"The Voice Performance Block — Best Performances from the Live Finale",year:2025,collection:"NBC Entertainment · The Voice performances",runtimeSeconds:1200,videoId:"PHjtkyHKlug",contentClass:"Performance compilation",fullEpisode:false,cleared:true},

  meetPress: {id:"NBC-MTP-2026",title:"Meet the Press — Full Episode",year:2026,collection:"NBC News · Meet the Press",runtimeSeconds:2700,videoId:"4EusZcKt5fs",contentClass:"Full episode",fullEpisode:true,cleared:true},
  meetPressArchive: {id:"NBC-MTP-ARCHIVE",title:"Meet the Press — Full Broadcast",year:2024,collection:"NBC News · Meet the Press",runtimeSeconds:2700,videoId:"Hh4DO5WVxko",contentClass:"Full broadcast",fullEpisode:true,cleared:true},

  bttf40: {id:"NBCU-BTTF-40",title:"Back to the Future — 40th Anniversary Movie Spotlight",year:2025,collection:"NBCUniversal Movie Spotlight · Universal Pictures",runtimeSeconds:180,videoId:"ez6WQ7IX72U",contentClass:"Movie spotlight",fullEpisode:false,cleared:true}
};

const NBC_DAY_TEMPLATE=[];
function nbcSlot(minute,duration,choices){NBC_DAY_TEMPLATE.push({minute,duration,choices});}
function nbcRange(start,end,duration,choices){for(let minute=start;minute<end;minute+=duration) nbcSlot(minute,Math.min(duration,end-minute),choices);}

// SNL is intentionally NOT in the automatic schedule until a genuine full-episode
// source is available. The channel will not call a sketch compilation a full show.
// 12 AM–6 AM: clearly labeled NBC comedy clip blocks.
nbcRange(0,360,15,["officeKevin","parksRon","parksApril"]);
// 6 AM–9 AM: full NBC News / public-affairs broadcasts.
nbcRange(360,540,60,["meetPress","meetPressArchive"]);
// 9 AM–12 PM: NBC comedy clip blocks.
nbcRange(540,720,15,["officeKevin","parksRon","parksApril"]);
// 12 PM–3 PM: NBC drama clip/preview blocks.
nbcRange(720,900,15,["lawOrderTrue","lawOrderTape","chicagoBest","quantumLeap","quantumFirst"]);
// 3 PM–6 PM: NBC entertainment performance blocks.
nbcRange(900,1080,30,["voiceTop8","voiceFinale"]);
// 6 PM–8 PM: comedy lead-in.
nbcRange(1080,1200,15,["officeKevin","parksRon","parksApril"]);
// 8 PM–10 PM: drama, entertainment and an NBCUniversal movie spotlight.
nbcSlot(1200,30,["lawOrderTrue","lawOrderTape","chicagoBest"]);
nbcSlot(1230,15,["bttf40"]);
nbcSlot(1245,15,["quantumLeap","quantumFirst"]);
nbcSlot(1260,30,["voiceTop8","voiceFinale"]);
nbcSlot(1290,30,["lawOrderTrue","lawOrderTape","chicagoBest"]);
// 10 PM–11 PM: full NBC News / public-affairs broadcast.
nbcSlot(1320,60,["meetPress","meetPressArchive"]);
// 11 PM–midnight: clearly labeled NBC comedy clip blocks.
nbcRange(1380,1440,15,["officeKevin","parksRon","parksApril"]);

window.NBC_DAY_TEMPLATE=NBC_DAY_TEMPLATE;
window.NBC_COMMERCIALS=[
  {id:"NBC-ID-1",title:"NBC station break",durationSeconds:60,videoId:"",cleared:true},
  {id:"NBC-ID-2",title:"Tonight on NBC",durationSeconds:60,videoId:"",cleared:true}
];
window.INFINITY_CHANNEL={
  id:"NBC",
  era:"NBC-only comedy, drama, entertainment, news and NBCUniversal movie spotlights",
  reset:"12:00 AM viewer local time",
  sourcePolicy:"Official NBC/NBCUniversal-family uploads only. Full episodes are explicitly labeled; clips and compilations are never presented as full shows.",
  snlPolicy:"Do not schedule Saturday Night Live unless the source is a genuine full episode."
};
