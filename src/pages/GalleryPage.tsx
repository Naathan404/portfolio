import Container from '../components/Container'
import { SectionLabel } from '../components/SectionLabel'
import { playedGames } from '../data/playedGames'
import { theme } from '../theme'

const marqueeGames = [...playedGames, ...playedGames]

export default function GalleryPage() {
  return (
    <Container style={{ paddingTop: 32, paddingBottom: 56 }}>
      <div className="pixel-panel" style={{ padding: '26px 28px 34px', overflow: 'hidden' }}>
        <SectionLabel icon="🖼️">Game Gallery</SectionLabel>

        <div style={{ maxWidth: 760, marginBottom: 24 }}>
          <h1
            style={{
              fontFamily: theme.font.pixel,
              fontSize: 'clamp(34px, 6vw, 52px)',
              color: theme.color.ink,
              lineHeight: 1,
              marginBottom: 12,
              textShadow: `3px 3px 0 ${theme.color.crop}`,
            }}
          >
            Games I Played
          </h1>
          <p style={{ color: theme.color.inkSoft, fontSize: 14, fontWeight: 800, lineHeight: 1.7 }}>
            A small shelf of games I have played, learned from, and used as references for game feel, progression, UX, and level design.
          </p>
        </div>

        <div className="game-banner-marquee" aria-label="Scrolling game banner gallery">
          <div className="game-banner-track">
            {marqueeGames.map((game, index) => (
              <div
                key={`${game.title}-${index}`}
                className="game-banner-card"
                style={{ color: game.palette.text }}
              >
                <img src={game.imageUrl} alt="" aria-hidden="true" />
                <span className="game-banner-shine" />
                <strong>{game.title}</strong>
                <small>{game.genre}</small>
              </div>
            ))}
          </div>
        </div>

        <div className="game-gallery-grid">
          {playedGames.map(game => (
            <article key={game.title} className="game-gallery-card">
              <div className="game-gallery-cover">
                <img src={game.imageUrl} alt={`${game.title} cover`} />
                <span className="game-gallery-cover-grid" />
                <span className="game-gallery-cover-title">{game.title}</span>
              </div>

              <div style={{ padding: '15px 16px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: 10, alignItems: 'start', marginBottom: 10 }}>
                  <div>
                    <h2 style={{ fontFamily: theme.font.pixel, color: theme.color.ink, fontSize: 20, lineHeight: 1.05 }}>{game.title}</h2>
                    <p style={{ color: theme.color.inkMuted, fontSize: 12, fontWeight: 800, marginTop: 4 }}>{game.genre}</p>
                  </div>
                  <span className="game-progress-chip">{game.progress}</span>
                </div>

                <div className="game-achievement-box">
                  <strong>Status / Achievement</strong>
                  <p>{game.achievement}</p>
                </div>

                <p style={{ color: theme.color.inkSoft, fontSize: 13, fontWeight: 700, lineHeight: 1.65, marginTop: 12 }}>
                  {game.highlight}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Container>
  )
}
