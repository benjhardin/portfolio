import styles from './Experience.module.css'

const jobs = [
  {
    company: 'Coastal Cloud',
    role: 'Data Platform Architect',
    period: '2025 — Present',
    bullets: [
      'Architect and deliver multimillion-dollar Snowflake data platform solutions for enterprise clients, focused on security, scalability, and AI-readiness.',
      'Design end-to-end data pipelines, governance frameworks, and Cortex AI integrations that enable clients to move from raw data to business intelligence.',
      'Promoted from Senior Data Platform Engineer to Architect within 6 months.',
    ],
  },
  {
    company: 'Hakkōda',
    role: 'Data Consultant',
    period: '2024 — 2025',
    bullets: [
      'Engineered a fuzzy-matching and geospatial resolution pipeline that increased client system match accuracy from 5% to 95%, eliminating $4M in annual regulatory fines.',
      'Applied LLMs to classify FDA MAUDE reports by device and error type, increasing triage speed by 300×.',
      'Delivered LLM and AI workshops to 95+ employees, accelerating internal adoption of AI classification workflows.',
      'Worked remotely across the US and lived in Lisbon, Portugal for 6 months — bringing an international perspective to every engagement.',
    ],
  },
  {
    company: 'Lovely AI',
    role: 'Founding Engineer',
    period: '2024 — 2025',
    bullets: [
      'Built an end-to-end system to ingest multimodal, time-series behavioral data from in-home IoT devices and deliver structured insights via a mobile app.',
      'Achieved 95% interrater reliability (kappa) in a behavioral classification model — outperforming human coders (~80%) and existing algorithms (~79%).',
      'Developed a real-time transcription and speaker diarization pipeline reaching 86% accuracy; scaled product from POC to beta with 60+ real-world participants.',
    ],
  },
  {
    company: 'Siebel Center for Design — UIUC',
    role: 'Fellow',
    period: '2023 — 2024',
    bullets: [
      'Selected as a Fellow to research and prototype human-centered technology solutions, applying design thinking to complex engineering problems.',
    ],
  },
  {
    company: 'Health Care Engineering Systems Center — UIUC',
    role: 'Graduate Research Assistant',
    period: '2022 — 2023',
    bullets: [
      'Led implementation of a Mixed Reality training scenario using Microsoft HoloLens 2, giving clinicians real-time procedural feedback during medical device training.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Experience</span>
        <h2 className={styles.heading}>Where I&apos;ve Worked</h2>
        <div className={styles.timeline}>
          {jobs.map((job, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.period}>{job.period}</span>
              </div>
              <div className={styles.body}>
                <p className={styles.company}>{job.company}</p>
                <h3 className={styles.role}>{job.role}</h3>
                <ul className={styles.bullets}>
                  {job.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
