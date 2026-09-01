export type PlayedGame = {
  title: string
  genre: string
  achievement: string
  progress: string
  highlight: string
  imageUrl: string
  palette: {
    bg: string
    accent: string
    text: string
  }
}

export const playedGames: PlayedGame[] = [
  {
    title: 'Stardew Valley',
    genre: 'Cozy Farming RPG',
    achievement: 'Built a long-term farm routine and explored late-game systems.',
    progress: '200+ hours',
    highlight: 'Favorite study case for cozy loop, economy pacing, relationship systems, and player expression.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/413150/header.jpg',
    palette: { bg: '#6fa83f', accent: '#f0c45a', text: '#ffffff' },
  },
  {
    title: 'Hollow Knight',
    genre: 'Metroidvania',
    achievement: 'Cleared major bosses and studied movement, combat feel, and world exploration.',
    progress: 'Currently playing',
    highlight: 'Great reference for responsive control, enemy readability, atmosphere, and non-linear level flow.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg',
    palette: { bg: '#27384d', accent: '#8bd3e8', text: '#ffffff' },
  },
  {
    title: 'Celeste',
    genre: 'Precision Platformer',
    achievement: 'Completed the story and practiced advanced platforming fundamentals.',
    progress: 'Story completed',
    highlight: 'Key reference for coyote time, input buffering, readable hazards, and fair difficulty curves.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg',
    palette: { bg: '#5f4f8f', accent: '#f08ca8', text: '#ffffff' },
  },
  {
    title: 'Terraria',
    genre: 'Sandbox Adventure',
    achievement: 'Progressed through bosses, crafting tiers, exploration, and gear builds.',
    progress: 'Completed',
    highlight: 'Strong example of item progression, build variety, combat pacing, and discovery-driven play.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/105600/header.jpg',
    palette: { bg: '#3f7f5f', accent: '#d9ad57', text: '#ffffff' },
  },
  {
    title: 'Ori and the Will of the Wisps',
    genre: 'Action Platformer',
    achievement: 'Experienced expressive movement, cinematic pacing, and emotional world presentation.',
    progress: 'Currently playing',
    highlight: 'Useful reference for animation polish, traversal flow, environmental storytelling, and visual feedback.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1057090/header.jpg',
    palette: { bg: '#244b6a', accent: '#7fd6e8', text: '#ffffff' },
  },
  {
    title: 'Oxygen Not Included',
    genre: 'Colony Simulation',
    achievement: 'Currently experimenting with colony layouts, resource loops, and survival systems.',
    progress: 'Currently playing',
    highlight: 'Great reference for systemic design, resource chains, readable simulation UI, and planning pressure.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/457140/header.jpg',
    palette: { bg: '#5f3f7f', accent: '#f0a85a', text: '#ffffff' },
  },
  {
    title: 'Pokemon Emerald',
    genre: 'Monster-Collecting RPG',
    achievement: 'Explored the Hoenn region, team-building, type matchups, and classic RPG progression.',
    progress: 'Completed',
    highlight: 'Reference for compact world design, collectible progression, battle readability, and replayable team choices.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/en/f/f7/PokemonEmeraldBox.jpg',
    palette: { bg: '#1f8f6a', accent: '#f0c45a', text: '#ffffff' },
  },
  {
    title: 'Pokemon Omega Ruby',
    genre: 'Monster-Collecting RPG',
    achievement: 'Revisited Hoenn with modern presentation, streamlined progression, and stronger spectacle.',
    progress: 'Completed',
    highlight: 'Good reference for remake design, onboarding improvements, collection loops, and world polish.',
    imageUrl: 'https://archives.bulbagarden.net/media/upload/5/5b/Omega_Ruby_EN_boxart.png',
    palette: { bg: '#b84232', accent: '#f0c45a', text: '#ffffff' },
  },
  {
    title: 'Pokemon Ultra Sun',
    genre: 'Monster-Collecting RPG',
    achievement: 'Played through Alola systems and studied creature collection with region-specific mechanics.',
    progress: 'Completed',
    highlight: 'Reference for approachable RPG systems, encounter variety, collection goals, and turn-based clarity.',
    imageUrl: 'https://archives.bulbagarden.net/media/upload/d/de/Ultra_Sun_EN_boxart.png',
    palette: { bg: '#e07a2d', accent: '#f7d75f', text: '#ffffff' },
  },
  {
    title: 'Yu-Gi-Oh! Master Duel',
    genre: 'Digital Card Game',
    achievement: 'Built decks, climbed ranked matches, and learned modern card-game pacing.',
    progress: 'Currently playing',
    highlight: 'Reference for deck-building depth, competitive UX, readable card interactions, and live-service progression.',
    imageUrl: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1449850/header.jpg',
    palette: { bg: '#26366f', accent: '#d9ad57', text: '#ffffff' },
  },
]
