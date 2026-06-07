import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './Nav.module.css'
import Logo from './Logo'

const links = ['About', 'Projects', 'Experience', 'Speaking', 'Articles', 'Certifications', 'Contact']

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const href = (section) => isHome ? `#${section}` : `/#${section}`

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
        <a href={isHome ? '#hero' : '/'} className={styles.logo}><Logo size={38} /></a>

        {/* Desktop links */}
        <ul className={styles.links}>
          {links.map(l => (
            <li key={l}>
              <a href={href(l.toLowerCase())}>{l}</a>
            </li>
          ))}
        </ul>

        {/* Hamburger button */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerLinks}>
          {links.map(l => (
            <li key={l}>
              <a href={href(l.toLowerCase())} onClick={close}>{l}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {open && <div className={styles.backdrop} onClick={close} />}
    </>
  )
}
