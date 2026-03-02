import { useReveal } from '../hooks/useReveal'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import './Home.css'

const SOCIAL = [
  { href: 'https://www.linkedin.com/in/lucas-serpa-b2503a163/', Icon: FaLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/Serpa43', Icon: FaGithub, label: 'GitHub' },
  { href: 'https://www.instagram.com/lucas_serpa8/', Icon: FaInstagram, label: 'Instagram' },
  { href: 'https://web.whatsapp.com/send?phone=5512996663458', Icon: FaWhatsapp, label: 'WhatsApp' },
]

export default function Home() {
  const dataReveal = useReveal()
  const imgReveal = useReveal({ rootMargin: '0px 0px -80px 0px' })
  const socialReveal = useReveal()

  return (
    <section className="home section" id="home">
      <div className="home__grid">
        <div
          ref={dataReveal.ref}
          className={'home__data reveal ' + (dataReveal.revealed ? 'revealed' : '')}
        >
          <h1 className="home__title">
            Olá,<br />
            eu sou <span className="home__title-color">Lucas Serpa</span>
            <br />
            Tech Lead & Full Stack Developer
          </h1>
          <a href="mailto:lucaoserpa@gmail.com" className="button">
            Contato
          </a>
        </div>

        <div
          ref={socialReveal.ref}
          className={'home__social reveal ' + (socialReveal.revealed ? 'revealed' : '')}
        >
          {SOCIAL.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="home__social-icon"
              aria-label={label}
            >
              <Icon size={24} />
            </a>
          ))}
        </div>

        <div
          ref={imgReveal.ref}
          className={'home__img reveal ' + (imgReveal.revealed ? 'revealed' : '')}
        >
          <img
            src="/img/serpa1img.jpeg"
            alt="Lucas Serpa"
            className="home__blob-img"
          />
        </div>
      </div>
    </section>
  )
}
