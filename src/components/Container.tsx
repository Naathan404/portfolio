import type { ReactNode, CSSProperties } from 'react'

export default function Container({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <div style={{ maxWidth: 980, margin: '0 auto', ...style }}>{children}</div>
}
