import { useState } from 'react'
import { projects } from '../data/projects'
import ProjectModal from './ProjectModal'
import styles from './Projects.module.css'

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Projects</span>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <button
              key={i}
              className={`${styles.card} ${p.badge ? styles.featured : ''}`}
              onClick={() => setSelected(p)}
            >
              <div className={styles.cardTop}>
                <span className={styles.num}>{String(i + 1).padStart(2, '0')}</span>
                <div className={styles.cardTopRight}>
                  {p.badge && <span className={styles.badge}>{p.badge}</span>}
                  <svg className={styles.arrow} viewBox="0 0 16 16" fill="none">
                    <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
              <p className={styles.cardDesc}>{p.summary}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </button>
          ))}
        </div>
      </div>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
