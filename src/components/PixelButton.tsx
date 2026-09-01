import type { CSSProperties, ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../theme'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: theme.color.grass,
    color: '#fff',
    border: `2px solid ${theme.color.grassDark}`,
  },
  secondary: {
    background: theme.color.parchment,
    color: theme.color.ink,
    border: `2px solid ${theme.color.wood}`,
  },
  ghost: {
    background: 'transparent',
    color: theme.color.inkSoft,
    border: `2px solid ${theme.color.woodLight}`,
  },
}

function applyPress(el: HTMLElement, pressed: boolean) {
  el.style.transform = pressed ? 'translate(2px, 2px)' : 'translate(0, 0)'
  el.style.boxShadow = pressed ? '0px 0px 0px transparent' : theme.pixelShadow(3)
}

export default function PixelButton({
  children,
  to,
  href,
  variant = 'primary',
  style,
}: {
  children: ReactNode
  to?: string
  href?: string
  variant?: Variant
  style?: CSSProperties
}) {
  const shared: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontFamily: "'Pixelify Sans', monospace",
    fontSize: 13,
    fontWeight: 700,
    borderRadius: 6,
    padding: '10px 20px',
    boxShadow: theme.pixelShadow(3),
    transition: 'transform 0.08s, box-shadow 0.08s',
    cursor: 'pointer',
    ...variantStyles[variant],
    ...style,
  }

  const handlers = {
    onMouseDown: (e: MouseEvent<HTMLElement>) => applyPress(e.currentTarget, true),
    onMouseUp: (e: MouseEvent<HTMLElement>) => applyPress(e.currentTarget, false),
    onMouseLeave: (e: MouseEvent<HTMLElement>) => applyPress(e.currentTarget, false),
  }

  if (to) {
    return (
      <Link to={to} style={shared} {...handlers}>
        {children}
      </Link>
    )
  }

  const isInternalAnchor = href?.startsWith('#') || href?.startsWith('mailto')
  return (
    <a href={href} target={isInternalAnchor ? undefined : '_blank'} rel={isInternalAnchor ? undefined : 'noreferrer'} style={shared} {...handlers}>
      {children}
    </a>
  )
}
