'use client'

import { useState } from 'react'
import type { Content, Lang } from './content'

export default function Header({ lang, c }: { lang: Lang; c: Content }) {
  const [open, setOpen] = useState(false)

  const toggleTheme = () => {
    const root = document.documentElement
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
    root.setAttribute('data-theme', next)
    try {
      localStorage.setItem('mondi-theme', next)
    } catch {}
  }

  const links = [
    { href: '#services', label: c.nav.services },
    { href: '#cases', label: c.nav.cases },
    { href: '#process', label: c.nav.process },
    { href: '#contact', label: c.nav.contact },
  ]

  return (
    <>
      <header className="header" data-header>
        <a href="#top" className="header__logo" aria-label="Mondi Studio">
          <span className="header__mark" aria-hidden="true">
            M
          </span>
          <span>Mondi Studio</span>
        </a>
        <nav className="header__nav" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header__tools">
          <div className="lang" role="group" aria-label={c.ui.language}>
            <a href="/" hrefLang="es" lang="es" aria-current={lang === 'es'}>
              ES
            </a>
            <a href="/en/" hrefLang="en" lang="en" aria-current={lang === 'en'}>
              EN
            </a>
          </div>
          <button type="button" className="icon-btn theme-toggle" onClick={toggleTheme} aria-label={c.ui.theme}>
            <svg className="icon-moon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
            </svg>
            <svg className="icon-sun" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          </button>
          <a href="#contact" className="btn btn--solid header__cta">
            {c.nav.talk}
          </a>
          <button
            type="button"
            className="icon-btn menu-btn"
            aria-expanded={open}
            aria-controls="menu"
            aria-label={open ? c.ui.close : c.ui.menu}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 8h18M3 16h18" />}
            </svg>
          </button>
        </div>
      </header>
      <div id="menu" className={`menu${open ? ' is-open' : ''}`} onClick={() => setOpen(false)}>
        {links.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
