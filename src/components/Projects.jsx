import styles from './Projects.module.css'

const projects = [
  {
    title: 'Lumelight: Data Platform to App Platform',
    description: 'Architected a full Snowflake + Sigma + dbt platform for Lumelight that delivered 300% ROI — eliminating a 48-hour manual process, automating 500+ schema variations, and shipping a white-labeled product in 3 months. Featured at Snowflake Summit 2026.',
    tags: ['Snowflake', 'Sigma', 'dbt', 'Cortex AI'],
    link: '#speaking',
    badge: 'Snowflake Summit 2026',
  },
  {
    title: 'Enterprise Snowflake Data Platform',
    description: 'Designed and implemented multimillion-dollar Snowflake data architectures at Coastal Cloud — building the secure, scalable foundations enterprise organizations need to power real AI.',
    tags: ['Snowflake', 'Snowpark', 'SQL', 'Data Architecture'],
    link: '#',
  },
  {
    title: 'Behavioral AI Classification System',
    description: 'Built end-to-end multimodal data ingestion and LLM-driven behavioral classifiers achieving 95% interrater reliability — outperforming human coders. Scaled from POC to beta with 60+ real-world participants.',
    tags: ['LLMs', 'VAD', 'Python', 'Docker'],
    link: '#',
  },
  {
    title: 'CPoRt — Patented CPR Trainer',
    description: 'Founded and engineered a patented low-cost CPR assistive device providing real-time feedback. An example of applying engineering rigor to problems that matter outside the data center.',
    tags: ['Hardware', 'IoT', 'Embedded Systems', 'Patent'],
    link: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Projects</span>
        <h2 className={styles.heading}>Selected Work</h2>
        <div className={styles.grid}>
          {projects.map((p, i) => (
            <a key={i} href={p.link} className={`${styles.card} ${p.badge ? styles.featured : ''}`}>
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
              <p className={styles.cardDesc}>{p.description}</p>
              <div className={styles.tags}>
                {p.tags.map(t => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
