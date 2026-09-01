// Stardew Valley-inspired palette & reusable pixel-UI style helpers.
// Pulled toward the game's actual look: warm wood browns, parchment cream,
// farm green, and hard (non-blurred) pixel shadows instead of soft CSS shadows.

export const theme = {
  color: {
    parchment: '#fdf1d6',      // menu/card interior background
    parchmentDark: '#f0dfb4',  // secondary panel background
    wood: '#8b5a2b',           // mid wood border
    woodDark: '#4a2f18',       // darkest wood / body text
    woodLight: '#c9a06a',      // light wood highlight edge
    grass: '#6ba33a',          // primary green accent (buttons, links)
    grassDark: '#3f5c26',      // deep forest green (nav, footer)
    grassLight: '#e3f0c8',     // pale green chip background
    gold: '#e8a83c',           // highlight / badge accent
    sky: '#6bb3d6',            // secondary accent
    ink: '#3d2e1a',            // headings
    inkSoft: '#7a6040',        // body text
  },
  // Hard-edged "pixel" shadow: no blur, offset only — reads as chunky game UI
  // rather than a soft modern web shadow.
  pixelShadow: (size = 4, color = '#4a2f18') => `${size}px ${size}px 0px ${color}`,
  // Double-border "wood plank frame": a light inner line + a dark thick outer
  // line, mimicking beveled wood UI panels from the game.
  woodFrame: {
    border: '3px solid #4a2f18',
    outline: '2px solid #c9a06a',
    outlineOffset: '-6px',
  },
}
