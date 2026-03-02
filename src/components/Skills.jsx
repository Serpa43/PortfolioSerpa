import { useReveal } from '../hooks/useReveal'
import { SiSharp, SiVuedotjs, SiJavascript, SiHtml5, SiCss3 } from 'react-icons/si'
import { FaDatabase } from 'react-icons/fa'
import './Skills.css'

const SKILLS_LIST = [
  { name: 'C#', Icon: SiSharp },
  { name: 'Vue.js', Icon: SiVuedotjs },
  { name: 'JavaScript', Icon: SiJavascript },
  { name: 'SQL Server', Icon: FaDatabase },
  { name: 'HTML5', Icon: SiHtml5 },
  { name: 'CSS3', Icon: SiCss3 },
]

export default function Skills() {
  const { ref: textRef, revealed: textRevealed } = useReveal()
  const { ref: cardsRef, revealed: cardsRevealed } = useReveal({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills__container">
        <div
          ref={textRef}
          className={'skills__content reveal ' + (textRevealed ? 'revealed' : '')}
        >
          <h2 className="skills__subtitle">Skills profissionais</h2>
          <p className="skills__text">
            Aqui estão algumas das minhas principais habilidades no universo da programação.
          </p>
          <div
            ref={cardsRef}
            className={'skills__grid reveal ' + (cardsRevealed ? 'revealed' : '')}
          >
            {SKILLS_LIST.map(({ name, Icon }) => (
              <div key={name} className="skills__card">
                <div className="skills__card-icon">
                  <Icon size={40} aria-hidden /> 
                </div>
                <span className="skills__card-name">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
