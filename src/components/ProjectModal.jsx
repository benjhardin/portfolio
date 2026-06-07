import { useEffect } from 'react'
import styles from './ProjectModal.module.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>

        <div className={styles.modalHeader}>
          <button className={styles.close} onClick={onClose} aria-label="Close">
            <svg viewBox="0 0 16 16" fill="none" width="16" height="16">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Close
          </button>
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            {project.badge && <span className={styles.badge}>{project.badge}</span>}
            <h2 className={styles.title}>{project.title}</h2>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <div className={styles.tags}>
              {project.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>

          <div className={styles.highlights}>
            {project.highlights.map((h, i) => (
              <div key={i} className={styles.highlight}>
                <span className={styles.dot} />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <div className={styles.sections}>
            <Section title="Overview" body={project.overview} />
            <Section title="The Challenge" body={project.challenge} />
            <Section title="The Solution" body={project.solution} />
            <Section title="Outcomes" body={project.outcome} />
          </div>

          <div className={styles.stackWrap}>
            <p className={styles.stackLabel}>Tech Stack</p>
            <div className={styles.stack}>
              {project.stack.map(s => <span key={s} className={styles.stackItem}>{s}</span>)}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

function Section({ title, body }) {
  return (
    <div className={styles.section}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <p className={styles.sectionBody}>{body}</p>
    </div>
  )
}
