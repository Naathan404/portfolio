import type { ReactNode, CSSProperties } from 'react'

export default function Container({ children, style }: { children: ReactNode; style?: CSSProperties }) {
  return <main style={{ maxWidth: 1020, margin: '0 auto', padding: '0 18px', ...style }}>{children}</main>
}
