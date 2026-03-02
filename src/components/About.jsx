import { useReveal } from '../hooks/useReveal'
import './About.css'

export default function About() {
  const { ref: imgRef, revealed: imgRevealed } = useReveal()
  const { ref: textRef, revealed: textRevealed } = useReveal({ rootMargin: '0px 0px -60px 0px' })

  return (
    <section className="about section" id="about">
      <h2 className="section-title">Sobre</h2>
      <div className="about__container">
        <div
          ref={imgRef}
          className={`about__img reveal ${imgRevealed ? 'revealed' : ''}`}
        >
          <img src="/img/serpa.JPEG" alt="Lucas Serpa" />
        </div>
        <div
          ref={textRef}
          className={`about__content reveal ${textRevealed ? 'revealed' : ''}`}
        >
          <h2 className="about__subtitle">Eu sou o Lucas!</h2>
          <p className="about__text">
            Olá, meu nome é Lucas. Me considero um entusiasta de tecnologia e um grande
            amante da computação. Hoje atuo como Tech Lead, guiando minha equipe na busca
            pelos melhores caminhos e compartilhando, sempre que possível, meu conhecimento.
          </p>
        </div>
      </div>
    </section>
  )
}
