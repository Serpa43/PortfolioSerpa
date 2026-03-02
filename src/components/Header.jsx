import { useState, useEffect } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Sobre' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projetos' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const { isDark, toggleTheme } = useTheme()

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const onScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects']
      const scrollY = window.scrollY
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop - 100 <= scrollY) {
          setActiveSection(sections[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo" onClick={closeMenu}>
          Lucas Serpa
        </a>

        <div className={`nav__menu ${menuOpen ? 'show' : ''}`} id="nav-menu">
          <ul className="nav__list">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className="nav__item">
                <a
                  href={href}
                  className={'nav__link ' + (activeSection === href.slice(1) ? 'active' : '')}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
            title={isDark ? 'Modo claro' : 'Modo escuro'}
          >
            {isDark ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <button
          type="button"
          className="nav__toggle"
          id="nav-toggle"
          aria-label="Abrir menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav__toggle-icon">{menuOpen ? '✕' : '☰'}</span>
        </button>
      </nav>
    </header>
  )
}
