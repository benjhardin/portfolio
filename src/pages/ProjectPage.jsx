import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import styles from './ProjectPage.module.css'

export default function ProjectPage() {
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if (!project) {
    return (
      <div className={styles.notFound}>
        <p>Project not found.</p>
        <Link to="/" className={styles.back}>← Back home</Link>
      </div>
    )
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>

        {/* Back link */}
        <Link to="/#projects" className={styles.back}>← All Projects</Link>

        {/* Header */}
        <header className={styles.header}>
          {project.badge && <span className={styles.badge}>{project.badge}</span>}
          <h1 className={styles.title}>{project.title}</h1>
          <p className={styles.subtitle}>{project.subtitle}</p>
          <div className={styles.tags}>
            {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
          </div>
        </header>

        {/* Highlights */}
        <div className={styles.highlights}>
          {project.highlights.map((h, i) => (
            <div key={i} className={styles.highlight}>
              <span className={styles.highlightDot} />
              <span>{h}</span>
            </div>
          ))}
        </div>

        {/* Body sections */}
        <div className={styles.sections}>
          <Section title="Overview" body={project.overview} />
          <Section title="The Challenge" body={project.challenge} />
          <Section title="The Solution" body={project.solution} />
          <Section title="Outcomes" body={project.outcome} />
        </div>

        {/* Stack */}
        <div className={styles.stackWrap}>
          <p className={styles.stackLabel}>Tech Stack</p>
          <div className={styles.stack}>
            {project.stack.map(s => <span key={s} className={styles.stackItem}>{s}</span>)}
          </div>
        </div>

      </div>
    </div>
  )
}

function Section({ title, body }) {
  return (
    <div className={styles.section}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <p className={styles.sectionBody}>{body}</p>
    </div>
  )
}
