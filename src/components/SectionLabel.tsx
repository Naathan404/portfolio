export function SectionLabel({ icon, children }: { icon: string; children: React.ReactNode }) {
  return (
    <div style={{
      fontFamily: "'Pixelify Sans', monospace",
      fontSize: 14, color: '#5a7a3a',
      display: 'flex', alignItems: 'center', gap: 8,
      marginBottom: 20,
    }}>
      <span>{icon}</span>
      {children}
      <span style={{
        flex: 1, height: 2,
        background: 'repeating-linear-gradient(90deg, #c8a96e 0px, #c8a96e 4px, transparent 4px, transparent 8px)',
      }} />
    </div>
  )
}
