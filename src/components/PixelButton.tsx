import type { CSSProperties, ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { theme } from '../theme'

type Variant = 'primary' | 'secondary' | 'ghost'

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: `linear-gradient(180deg, ${theme.color.grass} 0%, ${theme.color.grassDark} 100%)`,
    color: theme.color.cream,
    border: `3px solid ${theme.color.grassDarker}`,
  },
  secondary: {
    background: `linear-gradient(180deg, ${theme.color.parchment} 0%, ${theme.color.parchmentDark} 100%)`,
    color: theme.color.ink,
    border: `3px solid ${theme.color.woodDark}`,
  },
  ghost: {
    background: `linear-gradient(180deg, ${theme.color.cream} 0%, ${theme.color.parchmentSoft} 100%)`,
    color: theme.color.inkSoft,
    border: `3px solid ${theme.color.wood}`,
  },
}

function ApplyPress(el: HTMLElement, pressed: boolean) {
  el.style.transform = pressed ? 'translate(3px, 3px)' : 'translate(0, 0)'
  el.style.boxShadow = pressed ? `0 0 0 ${theme.color.woodDark}` : theme.pixelShadow(4)
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
    justifyContent: 'center',
    gap: 7,
    fontFamily: theme.font.pixel,
    fontSize: 14,
    fontWeight: 700,
    borderRadius: 0,
    padding: '10px 20px',
    boxShadow: theme.pixelShadow(4),
    textShadow: variant === 'primary' ? `1px 1px 0 ${theme.color.grassDarker}` : 'none',
    transition: 'transform 0.08s, box-shadow 0.08s, filter 0.12s',
    cursor: 'pointer',
    imageRendering: 'pixelated',
    ...variantStyles[variant],
    ...style,
  }

  const handlers = {
    onMouseDown: (e: MouseEvent<HTMLElement>) => ApplyPress(e.currentTarget, true),
    onMouseUp: (e: MouseEvent<HTMLElement>) => ApplyPress(e.currentTarget, false),
    onMouseLeave: (e: MouseEvent<HTMLElement>) => ApplyPress(e.currentTarget, false),
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
