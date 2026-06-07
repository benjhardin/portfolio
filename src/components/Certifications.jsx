import { useState } from 'react'
import styles from './Certifications.module.css'
import CertModal from './CertModal'

const certs = [
  {
    name: 'SnowPro Specialty: Gen AI',
    issuer: 'Snowflake',
    status: 'earned',
    dates: 'Jan 2026 — Jan 2028',
    description: 'Validates expertise in building and deploying generative AI solutions natively within Snowflake using Cortex AI and related tooling.',
    url: 'https://achieve.snowflake.com/9ca7d802-e16e-456b-8893-3ea42812de81',
  },
  {
    name: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    status: 'earned',
    dates: 'Feb 2024 — Feb 2026',
    description: 'Demonstrates core competency in Snowflake data platform architecture, data loading, performance optimization, and security.',
    url: 'https://achieve.snowflake.com/568f9192-36ba-4544-b768-9738e24aeeaf',
  },
  {
    name: 'Sigma Delivery Partner',
    issuer: 'Sigma Computing',
    status: 'earned',
    dates: 'Apr 2024 — Apr 2025',
    description: 'Covers delivering production-grade analytics and data applications in Sigma, including embedding, data modeling, and governance.',
    url: 'https://www.credly.com/earner/earned/badge/1264f0d1-4adc-402b-a455-1144464ee592',
  },
  {
    name: 'dbt Certification',
    issuer: 'dbt Labs',
    status: 'in-progress',
    description: 'Validates proficiency in building, testing, and deploying analytics engineering workflows using dbt Core and dbt Cloud.',
    url: null,
  },
]

export default function Certifications() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="certifications" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Credentials</span>
        <h2 className={styles.heading}>Certifications</h2>
        <div className={styles.grid}>
          {certs.map((c, i) => (
            <button key={i} className={`${styles.card} ${c.status === 'in-progress' ? styles.inProgress : ''}`} onClick={() => setSelected(c)}>
              <div className={styles.cardTop}>
                <span className={styles.issuer}>{c.issuer}</span>
                {c.status === 'in-progress'
                  ? <span className={styles.badgeProgress}>In Progress</span>
                  : <span className={styles.badgeEarned}>Earned</span>
                }
              </div>
              <h3 className={styles.name}>{c.name}</h3>
              <p className={styles.description}>{c.description}</p>
            </button>
          ))}
        </div>
      </div>

      {selected && <CertModal cert={selected} onClose={() => setSelected(null)} />}
    </section>
  )
}
