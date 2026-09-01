import { theme } from '../theme'

export function SectionLabel({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: theme.font.pixel,
        fontSize: 15,
        color: theme.color.woodDark,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20,
        textShadow: '1px 1px 0 rgba(255, 247, 220, 0.9)',
      }}
    >
      <span
        style={{
          width: 28,
          height: 28,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.color.crop,
          border: `2px solid ${theme.color.woodDark}`,
          boxShadow: `2px 2px 0 ${theme.color.wood}`,
        }}
      >
        {icon}
      </span>
      {children}
      <span
        style={{
          flex: 1,
          height: 6,
          background:
            'repeating-linear-gradient(90deg, #8b5728 0 8px, #c98a44 8px 16px, transparent 16px 22px)',
          borderBottom: `2px solid ${theme.color.woodDark}`,
        }}
      />
    </div>
  )
}
