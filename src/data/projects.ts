export type Project = {
  slug: string
  badge: string
  type: 'SOLO' | 'TEAM'
  wip?: boolean
  title: string
  description: string
  tech: string[]
  github: string | null
  demo: string | null
  video: string | null
  images: string[]
  role?: string
}

export const unityProjects: Project[] = [
    {
    slug: 'the-mirror',
    badge: 'UNITY 2D',
    type: 'TEAM',
    wip: true,
    title: 'The Mirror',
    description:
      'A horror puzzle escape room game.',
    tech: ['C#', 'Event Bus', 'Data-driven', 'ScriptableObjects', 'Post processing'],
    github: 'https://github.com/Naathan404/the-mirror-gamjam26.git',
    demo: 'https://indiegamesvn.com/games/the-mirror-5a63bf',
    video: 'https://youtu.be/ejgTzqjcs2Y?si=n1mYgnYFHFVsd-zP',
    images: [
      '/images/the-mirror-avatar.png',
      '/images/the-mirror-1.png',
      '/images/the-mirror-2.png',
      '/images/the-mirror-3.png',
      '/images/the-mirror-4.png',
      '/images/the-mirror-5.png',
    ],
    role:
      '\n🕹️ lead',
  },
  {
    slug: 'high-tail',
    badge: 'UNITY 2D',
    type: 'TEAM',
    wip: true,
    title: 'High Tail',
    description:
      'A challenging 2D platformer set in an ancient world where movement is your greatest weapon.',
    tech: ['C#', 'FSM', 'Shader', 'Post processing', 'ScriptableObjects'],
    github: null,
    demo: null,
    video: null,
    images: [
      '/images/high-tail-1.png',
      '/images/high-tail-1.png',
      '/images/high-tail-10.png',
      '/images/high-tail-8.png',
      '/images/high-tail-3.png',
      '/images/high-tail-17.png',
      '/images/high-tail-4.png',
      '/images/high-tail-5.png',
      '/images/high-tail-6.png',
      '/images/high-tail-7.png',
      '/images/high-tail-9.png',
      '/images/high-tail-2.png',
      '/images/high-tail-11.png',
      '/images/high-tail-12.png',
      '/images/high-tail-13.png',
      '/images/high-tail-14.png',
      '/images/high-tail-15.png',
      '/images/high-tail-16.png',
      '/images/high-tail-18.png',
      '/images/high-tail-19.png',
    ],
    role:
      '\n🕹️ Built player movement with advanced game-feel techniques: buffer jump, coyote time, and corner correction.\n🍃 Developed custom shaders: Wind Shader for foliage animation and a camera distortion wave shader.\n✨ Implemented particle effects for visual polish.\n📺 Explored post-processing pipeline for visual effects.',
  },
  {
    slug: 'tile-trip-puzzle',
    badge: 'UNITY 2D',
    type: 'SOLO',
    wip: false,
    title: 'Tile Trip Puzzle',
    description:
      'Puzzle game where players pick tiles from a level layout and match 3 identical ones in a tray to clear the board. Built a tile generation algorithm that guarantees a winnable solution, and a custom in-editor level design tool — draw the layout visually, save to JSON, load at runtime.',
    tech: ['C#', 'Custom Editor Tool', 'JSON', 'ScriptableObjects', 'DOTween'],
    github: 'https://github.com/Naathan404/TileTripPuzzle',
    demo: 'https://naathan404.itch.io/tile-trip-puzzle',
    video: 'https://youtube.com/shorts/f0luBTxtHh0?feature=share',
    images: [
      '/images/tile-trip-avatar.png',
      '/images/tile-trip-3.png',
      '/images/tile-trip-0.png',
      '/images/tile-trip-2.png',
      '/images/tile-trip-5.png',
      '/images/tile-trip-4.png',
      '/images/tile-trip-6.png',
      '/images/tile-trip-7.png',
    ],
    role:
      '\n🛠️ Built a custom Unity Editor Tool for visual level layout design with JSON-based save/load.\n🧩 Implemented a backward-generation algorithm guaranteeing at least one valid winning path per level.\n✨ Enhanced game feel using DOTween animations and Unity Particle System for match feedback.',
  },
  {
    slug: 'toast-escape',
    badge: 'UNITY 2D',
    type: 'SOLO',
    title: 'Toast Escape',
    description:
      'My first Unity project. This is an endless runner inspired by Zombie Tsunami. Full gameplay loop with object pooling for map generation. First shipped game.',
    tech: ['C#', 'Object Pooling', 'Aseprite', 'ScriptableObjects'],
    github: 'https://github.com/Naathan404/Toast-Escape',
    demo: 'https://naathan404.itch.io/toast-escape',
    video: 'https://youtu.be/udyNIv3OPvA?si=y1iEBOrNYk1IY2gl',
    images: [
      '/images/toast-escape-avatar.png',
      '/images/toast-escape-1.jpg',
      '/images/toast-escape-2.png',
      '/images/toast-escape-3.jpg',
      '/images/toast-escape-4.jpg',
      '/images/toast-escape-5.jpg',
    ],
    role:
      "\n🏔️ Designed a dynamic difficulty system: pre-authored map segments of varying difficulty are selected at runtime based on the player's current speed.\n⚙️ Managed continuous map streaming using Object Pooling on map segments, enabling seamless level flow without runtime instantiation overhead.",
  },
]

export const otherProjects: Project[] = [
  {
    slug: 'swap-masks',
    badge: 'GODOT 4',
    type: 'TEAM',
    title: 'Swap Masks',
    description:
      '2D puzzle platformer built in Godot. Player swaps between masked states to interact with the world differently. Designed with a full state machine and hand-crafted level design.',
    role:
      '\n🎮 Designed core gameplay and overall game concept.\n🕹️ Built player systems: state machine, movement, and animation.\n🧩 Designed 7/8 levels.\n⚙️ Implemented level mechanics: Ghost Tile, Laser, and Saw.',
    tech: ['GDScript', 'State Machine', 'Level Design', 'Godot 4'],
    github: 'https://github.com/Naathan404/UITxVNG-Group08-Swap-Masks',
    demo: 'https://naathan404.itch.io/swap-masks',
    video: 'https://youtu.be/YAY58Vo1z_0?si=bj7HfBGspmTQk-tf',
    images: [
      '/images/swap-masks-avatar.png',
      '/images/swap-masks-1.png',
      '/images/swap-masks-2.png',
      '/images/swap-masks-3.png',
      '/images/swap-masks-4.png',
    ],
  },
  {
    slug: 'super-mario-bros-3',
    badge: 'DIRECT X',
    type: 'TEAM',
    wip: true,
    title: 'Super Mario Bros. 3',
    description:
      'Work-in-progress remake of SMB3 in C++ with DirectX 10. Implemented rendering pipeline, sprite animation, collision system, and player movement from scratch — no game engine.',
    role:
      "\n🕹️ Owned player systems end-to-end: state machine, movement, and animation.\n🚩 Implemented '?' blocks, power-ups, goal box, and note block mechanics.\n🏔️ Built slope physics and slide behavior for World 2, designed World 2 layout.\n🎵 Integrated audio via irrKlang.",
    tech: ['C++', 'DirectX 10', 'Sprite Animation', 'AABB Collision', 'Game Loop'],
    github: null,
    demo: null,
    video: null,
    images: [
      '/images/smb3-1.png',
      '/images/smb3-2.png',
      '/images/smb3-5.png',
      '/images/smb3-4.png',
      '/images/smb3-3.png',
    ],
  },
]

export const allProjects: Project[] = [...unityProjects, ...otherProjects]

export function getProjectBySlug(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug)
}
