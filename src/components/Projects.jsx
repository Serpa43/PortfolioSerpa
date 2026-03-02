import { useReveal } from '../hooks/useReveal'
import { FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const GITHUB_BASE = 'https://github.com/Serpa43'

const PROJECTS_LIST = [
  {
    name: 'user-registration',
    description: 'Projeto baseado em Clean Architecture e DDD',
    language: 'C#',
    url: `${GITHUB_BASE}/user-registration`,
  },
  {
    name: 'NLW-Mobile',
    description: 'Parte mobile da aplicação Ecoleta',
    language: 'TypeScript',
    url: `${GITHUB_BASE}/NLW-Mobile`,
  },
  {
    name: 'NLW-Server',
    description: 'Back end of Next Level Week Challenge',
    language: 'TypeScript',
    url: `${GITHUB_BASE}/NLW-Server`,
  },
  {
    name: 'NLW-Web',
    description: 'Front-end Web - Next Level Week - Rocket Seat',
    language: 'TypeScript',
    url: `${GITHUB_BASE}/NLW-Web`,
  },
  {
    name: 'Sales-control-user-itens',
    description: 'CRUD utilizando DAO em Java',
    language: 'Java',
    url: `${GITHUB_BASE}/Sales-control-user-itens`,
  },
  {
    name: 'Water-Count',
    description: 'Cálculos referentes ao consumo de água',
    language: 'Java',
    url: `${GITHUB_BASE}/Water-Count`,
  },
]

export default function Projects() {
  const { ref: introRef, revealed: introRevealed } = useReveal()
  const { ref: gridRef, revealed: gridRevealed } = useReveal({ rootMargin: '0px 0px -40px 0px' })

  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Projetos</h2>
      <div className="projects__container">
        <div
          ref={introRef}
          className={'projects__intro reveal ' + (introRevealed ? 'revealed' : '')}
        >
          <h2 className="projects__subtitle">Principais projetos no GitHub</h2>
          <p className="projects__text">
            Alguns dos repositórios que desenvolvi. Acesse{' '}
            <a
              href={GITHUB_BASE}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__link"
            >
              meu perfil no GitHub
            </a>{' '}
            para ver todos.
          </p>
        </div>
        <div
          ref={gridRef}
          className={'projects__grid reveal ' + (gridRevealed ? 'revealed' : '')}
        >
          {PROJECTS_LIST.map((project) => (
            <a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__card"
            >
              <div className="projects__card-header">
                <h3 className="projects__card-title">{project.name}</h3>
                <FaExternalLinkAlt size={14} className="projects__card-icon" aria-hidden />
              </div>
              <p className="projects__card-desc">{project.description}</p>
              <span className="projects__card-lang">{project.language}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
