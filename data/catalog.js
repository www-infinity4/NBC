// NBC Infinity Channel — full-program-only catalog.
// Rule: if a source is not a genuine full episode, full broadcast, or full movie,
// it does not enter the automatic live schedule. No previews, highlights,
// behind-the-scenes pieces, compilations, or short clips are allowed to stand in
// for a scheduled program.
window.NBC_PROGRAMS = {
  bonanzaShowdown: {
    id:"NBC-BONANZA-S2E1",
    title:"Bonanza — Showdown (Full Episode)",
    year:1960,
    collection:"NBC Classic TV · Bonanza · Full episode",
    runtimeSeconds:2940,
    videoId:"bFeTu9aJNww",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  bonanzaBadge: {
    id:"NBC-BONANZA-S2E3",
    title:"Bonanza — Badge Without Honor (Full Episode)",
    year:1960,
    collection:"NBC Classic TV · Bonanza · Full episode",
    runtimeSeconds:2960,
    videoId:"tMXhbsyxCXY",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  bonanzaMill: {
    id:"NBC-BONANZA-S2E4",
    title:"Bonanza — The Mill (Full Episode)",
    year:1960,
    collection:"NBC Classic TV · Bonanza · Full episode",
    runtimeSeconds:2960,
    videoId:"Lf5HzudcdBA",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  bonanzaHopefuls: {
    id:"NBC-BONANZA-S2E5",
    title:"Bonanza — The Hopefuls (Full Episode)",
    year:1960,
    collection:"NBC Classic TV · Bonanza · Full episode",
    runtimeSeconds:2960,
    videoId:"PYYMLDQEWUs",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  bonanzaReckoning: {
    id:"NBC-BONANZA-S2E7",
    title:"Bonanza — Day of Reckoning (Full Episode)",
    year:1960,
    collection:"NBC Classic TV · Bonanza · Full episode",
    runtimeSeconds:2960,
    videoId:"4QEaQHRVQOw",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  meetPress: {
    id:"NBC-MTP-2026",
    title:"Meet the Press — Full Episode",
    year:2026,
    collection:"NBC News · Meet the Press · Full episode",
    runtimeSeconds:2700,
    videoId:"4EusZcKt5fs",
    contentClass:"Full episode",
    fullEpisode:true,
    cleared:true
  },
  meetPressArchive: {
    id:"NBC-MTP-ARCHIVE",
    title:"Meet the Press — Full Broadcast",
    year:2024,
    collection:"NBC News · Meet the Press · Full broadcast",
    runtimeSeconds:2700,
    videoId:"Hh4DO5WVxko",
    contentClass:"Full broadcast",
    fullEpisode:true,
    cleared:true
  }
};

const NBC_DAY_TEMPLATE=[];
function nbcSlot(minute,duration,choices,type="show") {
  NBC_DAY_TEMPLATE.push({minute,duration,choices,type});
}
function nbcRange(start,end,duration,choices,type="show") {
  for(let minute=start;minute<end;minute+=duration) {
    nbcSlot(minute,Math.min(duration,end-minute),choices,type);
  }
}

const CLASSIC_FULL=["bonanzaShowdown","bonanzaBadge","bonanzaMill","bonanzaHopefuls","bonanzaReckoning"];
const NEWS_FULL=["meetPress","meetPressArchive"];

// A real network-style clock. Regular programs occupy complete 60-minute slots.
// The actual episode may finish before the top of the hour; the remainder is a
// station break instead of starting another program early.
nbcRange(0,360,60,CLASSIC_FULL);        // 12 AM–6 AM classic NBC
nbcRange(360,540,60,NEWS_FULL);         // 6 AM–9 AM full NBC news/public affairs
nbcRange(540,720,60,CLASSIC_FULL);      // 9 AM–12 PM classic NBC
nbcRange(720,1080,60,CLASSIC_FULL);     // 12 PM–6 PM classic NBC
nbcRange(1080,1200,60,CLASSIC_FULL);    // 6 PM–8 PM classic lead-in
nbcRange(1200,1320,60,CLASSIC_FULL);    // 8 PM–10 PM prime-time full episodes
nbcRange(1320,1380,60,NEWS_FULL);       // 10 PM–11 PM full broadcast
nbcRange(1380,1440,60,CLASSIC_FULL);    // 11 PM–midnight classic NBC

window.NBC_DAY_TEMPLATE=NBC_DAY_TEMPLATE;
window.NBC_COMMERCIALS=[
  {id:"NBC-ID-1",title:"NBC station break",durationSeconds:60,videoId:"",cleared:true},
  {id:"NBC-ID-2",title:"Next program starts at the top of the hour",durationSeconds:60,videoId:"",cleared:true}
];
window.INFINITY_CHANNEL={
  id:"NBC",
  era:"Classic NBC full episodes and full NBC broadcasts",
  reset:"12:00 AM Central broadcast time",
  broadcastTimeZone:"America/Chicago",
  sourcePolicy:"Only genuine full episodes, full broadcasts, and full movies may be scheduled. Clips, previews, highlights, compilations, and behind-the-scenes pieces are excluded from the automatic live schedule.",
  slotPolicy:"Regular shows use 60-minute slots. Full movies, when a verified full embeddable source is available, use 120-minute slots.",
  quantumLeapPolicy:"Do not schedule Quantum Leap unless the source is a genuine full episode.",
  backToFuturePolicy:"Do not schedule Back to the Future unless the source is the genuine full movie and is legally embeddable."
};
