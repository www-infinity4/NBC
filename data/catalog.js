// NBC-only Infinity channel catalog.
// Every playable entry below points at an official NBC, NBC News, SNL, Law & Order,
// One Chicago, The Voice, The Office, Parks and Recreation or Universal Pictures upload.
// The player automatically skips a source if YouTube reports that it cannot be embedded.
window.NBC_PROGRAMS = {
  snl50: {id:"NBC-SNL-50",title:"Saturday Night Live — Season 50 Most-Watched Live Sketches",year:2025,collection:"NBC Comedy · SNL",runtimeSeconds:1500,videoId:"o9vgXOH4ET0",cleared:true},
  officeKevin: {id:"NBC-OFFICE-KEVIN",title:"The Office — The Best of Kevin",year:2017,collection:"NBC Comedy · The Office",runtimeSeconds:900,videoId:"w4jI97DiHF8",cleared:true},
  parksRon: {id:"NBC-PARKS-RON",title:"Parks and Recreation — Ron Swanson's Best Moments",year:2015,collection:"NBC Comedy · Parks and Recreation",runtimeSeconds:900,videoId:"SrLZgP-OR6s",cleared:true},
  parksApril: {id:"NBC-PARKS-APRIL",title:"Parks and Recreation — April Ludgate's Best Moments",year:2015,collection:"NBC Comedy · Parks and Recreation",runtimeSeconds:900,videoId:"eopL9kmMhvw",cleared:true},

  lawOrderTrue: {id:"NBC-LO-TRUE",title:"Law & Order — Cases Based on a True Story",year:2024,collection:"NBC Drama · Law & Order",runtimeSeconds:900,videoId:"qYN-c3X4tUE",cleared:true},
  lawOrderTape: {id:"NBC-LO-TAPE",title:"Law & Order — It's All On Tape",year:2024,collection:"NBC Drama · Law & Order",runtimeSeconds:900,videoId:"vvl9ww5bKlE",cleared:true},
  chicagoBest: {id:"NBC-CHICAGO-BEST",title:"Chicago P.D. — Fan-Voted Best Chicago Moments",year:2019,collection:"NBC Drama · One Chicago",runtimeSeconds:600,videoId:"wuuAu6Abg9M",cleared:true},
  quantumFirst: {id:"NBC-QUANTUM-FIRST",title:"Quantum Leap — First Look",year:2022,collection:"NBC Drama · Quantum Leap",runtimeSeconds:300,videoId:"CMbaiBexXwc",cleared:true},
  quantumLeap: {id:"NBC-QUANTUM-LEAP",title:"Quantum Leap — My Favorite Leap",year:2024,collection:"NBC Drama · Quantum Leap",runtimeSeconds:300,videoId:"cJnc8wv1NdE",cleared:true},

  voiceTop8: {id:"NBC-VOICE-TOP8",title:"The Voice — Best Performances from the Top 8",year:2024,collection:"NBC Entertainment · The Voice",runtimeSeconds:1200,videoId:"QKm6w00ANg4",cleared:true},
  voiceFinale: {id:"NBC-VOICE-FINALE",title:"The Voice — Best Performances from the Live Finale",year:2025,collection:"NBC Entertainment · The Voice",runtimeSeconds:1200,videoId:"PHjtkyHKlug",cleared:true},

  meetPress: {id:"NBC-MTP-2026",title:"Meet the Press — Full Episode",year:2026,collection:"NBC News · Meet the Press",runtimeSeconds:2700,videoId:"4EusZcKt5fs",cleared:true},
  meetPressArchive: {id:"NBC-MTP-ARCHIVE",title:"Meet the Press — Full Broadcast",year:2024,collection:"NBC News · Meet the Press",runtimeSeconds:2700,videoId:"Hh4DO5WVxko",cleared:true},

  bttf40: {id:"NBCU-BTTF-40",title:"Back to the Future — 40th Anniversary Movie Spotlight",year:2025,collection:"NBCUniversal Movie Spotlight · Universal Pictures",runtimeSeconds:180,videoId:"ez6WQ7IX72U",cleared:true}
};

const NBC_DAY_TEMPLATE=[];
function nbcSlot(minute,duration,choices){NBC_DAY_TEMPLATE.push({minute,duration,choices});}
function nbcRange(start,end,duration,choices){for(let minute=start;minute<end;minute+=duration) nbcSlot(minute,Math.min(duration,end-minute),choices);}

// 12 AM–6 AM: late-night comedy and classic NBC sitcom blocks.
nbcRange(0,360,15,["snl50","officeKevin","parksRon","parksApril"]);
// 6 AM–9 AM: NBC News / public-affairs block.
nbcRange(360,540,60,["meetPress","meetPressArchive"]);
// 9 AM–12 PM: NBC comedy.
nbcRange(540,720,15,["officeKevin","parksRon","parksApril","snl50"]);
// 12 PM–3 PM: NBC drama.
nbcRange(720,900,15,["lawOrderTrue","lawOrderTape","chicagoBest","quantumLeap","quantumFirst"]);
// 3 PM–6 PM: NBC entertainment.
nbcRange(900,1080,30,["voiceTop8","voiceFinale","snl50"]);
// 6 PM–8 PM: comedy lead-in.
nbcRange(1080,1200,15,["officeKevin","parksRon","parksApril","snl50"]);
// 8 PM–10 PM: NBC prime-time drama plus an NBCUniversal movie spotlight.
nbcSlot(1200,30,["lawOrderTrue","lawOrderTape","chicagoBest"]);
nbcSlot(1230,15,["bttf40"]);
nbcSlot(1245,15,["quantumLeap","quantumFirst"]);
nbcSlot(1260,30,["voiceTop8","voiceFinale"]);
nbcSlot(1290,30,["lawOrderTrue","lawOrderTape","chicagoBest"]);
// 10 PM–11 PM: NBC News.
nbcSlot(1320,60,["meetPress","meetPressArchive"]);
// 11 PM–midnight: late night NBC comedy.
nbcRange(1380,1440,15,["snl50","officeKevin","parksRon","parksApril"]);

window.NBC_DAY_TEMPLATE=NBC_DAY_TEMPLATE;
window.NBC_COMMERCIALS=[
  {id:"NBC-ID-1",title:"NBC station break",durationSeconds:60,videoId:"",cleared:true},
  {id:"NBC-ID-2",title:"Tonight on NBC",durationSeconds:60,videoId:"",cleared:true}
];
window.INFINITY_CHANNEL={
  id:"NBC",
  era:"NBC-only comedy, drama, entertainment, news and NBCUniversal movie spotlights",
  reset:"12:00 AM viewer local time",
  sourcePolicy:"Official NBC/NBCUniversal-family uploads only"
};
