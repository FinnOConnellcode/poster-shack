import { categoryImages } from "@/data/categoryImages";

export type Category = {
  id: string;
  name: string;
  group: "sports" | "screen";
  blurb: string;
};

export const categories: Category[] = [
  { id: "skateboarding", name: "Skateboarding", group: "sports", blurb: "Decks, pools, street gnar" },
  { id: "surfing", name: "Surfing", group: "sports", blurb: "Barrels, longboards, dawn patrol" },
  { id: "snowboarding", name: "Snowboarding", group: "sports", blurb: "Park laps + backcountry" },
  { id: "bmx", name: "BMX", group: "sports", blurb: "Dirt jumps and street" },
  { id: "motocross", name: "Motocross", group: "sports", blurb: "Whips, holeshots, roost" },
  { id: "basketball", name: "Basketball", group: "sports", blurb: "Dunks, courts, legends" },
  { id: "soccer", name: "Soccer", group: "sports", blurb: "Kits, stadiums, GOATs" },
  { id: "baseball", name: "Baseball", group: "sports", blurb: "Diamonds and dingers" },
  { id: "football", name: "Football", group: "sports", blurb: "Friday nights to Sundays" },
  { id: "hockey", name: "Hockey", group: "sports", blurb: "Ice, sticks, chirps" },
  { id: "boxing", name: "Boxing", group: "sports", blurb: "Fight nights + gym walls" },
  { id: "mma", name: "MMA", group: "sports", blurb: "Cage classics" },
  { id: "f1", name: "F1 & Racing", group: "sports", blurb: "Liveries and lap records" },
  { id: "tennis", name: "Tennis", group: "sports", blurb: "Clay, grass, aces" },
  { id: "golf", name: "Golf", group: "sports", blurb: "Fairway minimalism" },
  { id: "track", name: "Track & Field", group: "sports", blurb: "Sprints and spikes" },
  { id: "cycling", name: "Cycling", group: "sports", blurb: "Grand tours + fixies" },
  { id: "climbing", name: "Climbing", group: "sports", blurb: "Big walls, chalk dust" },
  { id: "movies", name: "Movies", group: "screen", blurb: "Cult classics to blockbusters" },
  { id: "tv", name: "TV Shows", group: "screen", blurb: "Binge-worthy wall art" },
  { id: "anime", name: "Anime", group: "screen", blurb: "Shonen + retro cels" },
  { id: "music", name: "Music & Bands", group: "screen", blurb: "Tour prints and album art" },
  { id: "gaming", name: "Gaming", group: "screen", blurb: "Pixels to open worlds" },
];

const subjects: Record<string, string[]> = {
  skateboarding: [
    "Tony Hawk 900",
    "Rodney Mullen Flatground",
    "Bones Brigade",
    "Venice Beach Bowl",
    "Powell Peralta Ripper",
    "Thrasher Burnout",
    "Kickflip Silhouette",
    "Empty Pool Session",
    "Half Pipe Sunset",
    "Grip Tape Grid",
    "Handrail Nosegrind",
    "Vert Ramp Air",
    "Vans Sole Study",
    "Curb Wax Sunset",
    "Downhill Bomb",
  ],
  surfing: [
    "Pipeline Barrel",
    "Kelly Slater Cutback",
    "Malibu Longboard",
    "Teahupoo Slab",
    "Dawn Patrol Lineup",
    "Woody Wagon Wax",
    "Point Break Left",
    "Duck Dive Blue",
    "Endless Summer Silhouette",
    "Big Wave Nazare",
    "Reef Break Aerial",
    "Board Wall Quiver",
  ],
  snowboarding: [
    "Backcountry Powder Line",
    "Park Rail Slide",
    "Halfpipe Method Air",
    "Whiteout Ridge",
    "Chairlift Fog",
    "Night Session Floodlights",
    "Split Board Sunrise",
  ],
  bmx: [
    "Dirt Jump Tabletop",
    "Street Peg Grind",
    "Backyard Trails",
    "Flatland Session",
    "Skatepark Wall Ride",
    "Chrome Frame Study",
  ],
  motocross: [
    "Supercross Holeshot",
    "Desert Whip",
    "Freestyle Backflip",
    "Mud Race Roost",
    "Two Stroke Smoke",
    "Track Under Lights",
  ],
  basketball: [
    "Jordan Free Throw Line Dunk",
    "Kobe Fadeaway",
    "LeBron Chalk Toss",
    "Curry Deep Three",
    "Iverson Crossover",
    "Rucker Park Court",
    "Streetball Chain Net",
    "Shaq Backboard",
    "Slam Dunk Contest",
    "Hardwood Geometry",
    "Wilt 100 Points",
    "Buzzer Beater Silhouette",
  ],
  soccer: [
    "Messi Left Foot",
    "Ronaldo Free Kick",
    "Maradona Hand of God",
    "Pele Bicycle Kick",
    "Zidane Volley",
    "Camp Nou Night",
    "Anfield Kop Wall",
    "World Cup Trophy",
    "Cage Pitch Concrete",
    "Classic Kit Grid",
    "Goalkeeper Dive",
  ],
  baseball: [
    "Babe Ruth Called Shot",
    "Jackie Robinson Steal",
    "Fenway Green Monster",
    "Wrigley Ivy",
    "Curveball Grip Study",
    "Sandlot Dust",
    "Home Run Trajectory",
    "Vintage Glove Still Life",
  ],
  football: [
    "Hail Mary Silhouette",
    "Friday Night Lights",
    "Helmet Collision",
    "Super Bowl Confetti",
    "Sideline Snow Game",
    "Chalkboard Playbook",
  ],
  hockey: [
    "Slapshot Ice Spray",
    "Original Six Rink",
    "Overtime Winner",
    "Goalie Mask Study",
    "Frozen Pond Game",
    "Stanley Cup Lift",
  ],
  boxing: [
    "Ali vs Frazier",
    "Tyson Prime",
    "Rocky Steps",
    "Gym Heavy Bag",
    "Corner Stool Rest",
    "Championship Belt Study",
  ],
  mma: [
    "Octagon Walkout",
    "Flying Knee",
    "Ground Game Chess",
    "Fight Night Poster",
    "Glove Tap Respect",
  ],
  f1: [
    "Senna Monaco",
    "Schumacher Ferrari",
    "Hamilton Silverstone",
    "Le Mans Night Stint",
    "Pit Stop Choreography",
    "Circuit Map Minimal",
    "Livery Blueprint",
    "Rally Gravel Slide",
  ],
  tennis: ["Federer Backhand", "Nadal Clay Slide", "Serena Serve", "Wimbledon Grass", "Racket Grid"],
  golf: ["Augusta 12th", "Links Coast Wind", "Tiger Fist Pump", "Sand Trap Blast"],
  track: ["Bolt Finish Line", "Starting Blocks", "Hurdle Rhythm", "Pole Vault Arc", "Marathon Mile 26"],
  cycling: ["Alpe d'Huez Climb", "Track Velodrome", "Fixie City Night", "Peloton Blur", "Downhill MTB Line"],
  climbing: ["El Capitan Dawn Wall", "Boulder Problem Chalk", "Alpine Ridge Rope", "Crack Climb Hands"],
  movies: [
    "Pulp Fiction",
    "Fight Club",
    "The Dark Knight",
    "Scarface",
    "Goodfellas",
    "Blade Runner 2049",
    "Interstellar",
    "The Matrix",
    "Inception",
    "Mad Max Fury Road",
    "Star Wars Trilogy",
    "Jaws",
    "Back to the Future",
    "Terminator 2",
    "Jurassic Park",
    "The Big Lebowski",
    "Lord of the Rings",
    "Gladiator",
    "Django Unchained",
    "American Psycho",
    "Point Break 1991",
    "Lords of Dogtown",
    "Dogtown and Z-Boys",
    "Endless Summer",
    "Top Gun",
    "The Shining",
    "Alien",
    "Tron Legacy",
    "Spider-Man Into the Spider-Verse",
    "Kill Bill",
  ],
  tv: [
    "Breaking Bad",
    "Better Call Saul",
    "The Sopranos",
    "The Wire",
    "Stranger Things",
    "Peaky Blinders",
    "Game of Thrones",
    "Rick and Morty",
    "The Office",
    "Prison Break",
    "Narcos",
    "The Last of Us",
    "Squid Game",
    "Money Heist",
    "Dexter",
    "Sons of Anarchy",
    "Jackass",
    "The Mandalorian",
    "Arcane",
    "Cowboy Bebop",
  ],
  anime: [
    "Akira Neo Tokyo",
    "Dragon Ball Z",
    "Naruto Shippuden",
    "One Piece",
    "Attack on Titan",
    "Jujutsu Kaisen",
    "Demon Slayer",
    "Ghost in the Shell",
    "Neon Genesis Evangelion",
    "My Hero Academia",
    "Bleach",
    "Death Note",
    "Samurai Champloo",
    "Studio Ghibli Skies",
  ],
  music: [
    "Nirvana Nevermind Era",
    "Blink-182 Tour",
    "Tupac Silhouette",
    "Biggie Crown",
    "Pink Floyd Prism",
    "Metallica Black Album",
    "Red Hot Chili Peppers",
    "Daft Punk Helmets",
    "Kanye Graduation Era",
    "Bob Marley Smoke",
    "Warped Tour Lineup",
    "Rage Against the Machine",
  ],
  gaming: [
    "Tony Hawk Pro Skater 2",
    "GTA Vice City",
    "Halo Combat Evolved",
    "Skate 3",
    "Call of Duty Modern Warfare",
    "Elden Ring",
    "Zelda Breath of the Wild",
    "Minecraft Landscape",
    "Cyberpunk 2077",
    "Red Dead Redemption 2",
    "Super Mario Retro",
    "Sonic Speed Lines",
  ],
};

const styles = [
  { key: "Retro Grunge Print", size: '18" x 24"', mult: 1 },
  { key: "Vintage Halftone", size: '24" x 36"', mult: 1.35 },
  { key: "Minimal Line Art", size: '12" x 18"', mult: 0.8 },
  { key: "Neon Blacklight", size: '24" x 36"', mult: 1.4 },
  { key: "Photo Print", size: '18" x 24"', mult: 1.1 },
  { key: "Collage Zine Cut", size: '16" x 20"', mult: 0.95 },
  { key: "Canvas Wrap", size: '20" x 30"', mult: 1.9 },
];

const stores = [
  { name: "eBay", url: (q: string) => `https://www.ebay.com/sch/i.html?_nkw=${q}+poster&_sop=15` },
  { name: "Etsy", url: (q: string) => `https://www.etsy.com/search?q=${q}%20poster&order=price_asc` },
  {
    name: "Amazon",
    url: (q: string) => `https://www.amazon.com/s?k=${q}+poster&s=price-asc-rank`,
  },
  { name: "Redbubble", url: (q: string) => `https://www.redbubble.com/shop/?query=${q}+poster` },
  { name: "AllPosters", url: (q: string) => `https://www.allposters.com/-search?Ntt=${q}` },
  { name: "Displate", url: (q: string) => `https://displate.com/search?q=${q}` },
];

export type Poster = {
  id: string;
  title: string;
  subject: string;
  style: string;
  size: string;
  category: string;
  price: number;
  wasPrice: number;
  store: string;
  url: string;
  hue: number;
  rating: number;
  shipsFree: boolean;
  thumbnail: string; // new thumbnail URL for preview images
};

// deterministic pseudo-random so server + client render identically
function hash(str: string) {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return (h >>> 0) / 4294967295;
}

function build(): Poster[] {
  const out: Poster[] = [];
  for (const cat of categories) {
    const list = subjects[cat.id] ?? [];
    list.forEach((subject, si) => {
      styles.forEach((style, sti) => {
        const seed = hash(`${cat.id}|${subject}|${style.key}`);
        const base = 6 + seed * 16;
        const price = Math.round(base * style.mult * 100) / 100;
        const wasPrice = Math.round(price * (1.6 + seed * 1.4) * 100) / 100;
        const store = stores[(si + sti + Math.floor(seed * 6)) % stores.length]!;
        const id = `${cat.id}-${si}-${sti}`;
        // real poster artwork per category
        const thumbnail = categoryImages[cat.id] ?? "";
        out.push({
          id,
          title: `${subject} — ${style.key}`,
          subject,
          style: style.key,
          size: style.size,
          category: cat.id,
          price,
          wasPrice,
          store: store.name,
          url: store.url(encodeURIComponent(subject)),
          hue: Math.floor(seed * 360),
          rating: Math.round((4 + seed) * 10) / 10,
          shipsFree: seed > 0.55,
          thumbnail,
        });
      });
    });
  }
  return out;
}

export const posters: Poster[] = build();

export const categoryById = new Map(categories.map((c) => [c.id, c]));
