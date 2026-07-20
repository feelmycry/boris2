import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#home',     label: 'Главная' },
  { href: '#about',    label: 'О компании' },
  { href: '#services', label: 'Услуги' },
  { href: '#works',    label: 'Наши работы' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <>
      <nav
        id="navbar"
        className={scrolled ? 'scrolled' : ''}
        role="navigation"
        aria-label="Основная навигация"
      >
        <div className="nav-inner">
          <a href="#home" className="nav-logo" aria-label="Private Auto Brokerage — Главная" onClick={close}>
            <span className="script">Private</span>
            <span className="stamp">insured by</span>
          </a>

          <ul className="nav-links" role="list">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
            <li><a href="#contacts" className="nav-btn">Контакты</a></li>
          </ul>

          <button
            className={`burger${open ? ' open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-nav"
            aria-label="Мобильная навигация"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map(l => (
              <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
            ))}
            <a href="#contacts" onClick={close}>Контакты</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
