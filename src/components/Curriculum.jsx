import { useReveal } from '../hooks/useReveal'
import './Curriculum.css'

const CURRICULUM_URL = 'https://docs.google.com/document/d/1gNvItvPJzkgt3jpDHrPQoo4Yq9LDuR2oIZzPU1-Wv4A/edit?usp=sharing'

export default function Curriculum() {
  const { ref, revealed } = useReveal()

  return (
    <section className="curriculum section" id="curriculum">
      <h2 className="section-title">Currículo</h2>
      <div ref={ref} className={'curriculum__container reveal ' + (revealed ? 'revealed' : '')}>
        <div className="curriculum__action">
          <a href={CURRICULUM_URL} target="_blank" rel="noopener noreferrer" className="button">
            Ver / Baixar currículo
          </a>
        </div>
        <div className="curriculum__content">
          <h2 className="curriculum__subtitle">Acesse meu currículo</h2>
          <p className="curriculum__text">
            Se quiser conhecer mais sobre minha trajetória e experiência, acesse ou baixe
            meu currículo pelo link ao lado.
          </p>
        </div>
      </div>
    </section>
  )
}
