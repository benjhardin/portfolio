import { useState } from 'react'
import styles from './Certifications.module.css'
import CertModal from './CertModal'

const certs = [
  {
    name: 'SnowPro Specialty: Gen AI',
    issuer: 'Snowflake',
    status: 'earned',
    dates: 'Jan 2026 — Jan 2028',
    badgeImage: '/badge-snowpro-genai.png',
    description: 'Validates expertise in building and deploying generative AI solutions natively within Snowflake using Cortex AI and related tooling.',
    url: 'https://achieve.snowflake.com/9ca7d802-e16e-456b-8893-3ea42812de81',
  },
  {
    name: 'SnowPro Core Certification',
    issuer: 'Snowflake',
    status: 'earned',
    dates: 'Feb 2024 — Feb 2026',
    badgeImage: '/badge-snowpro-core.webp',
    description: 'Demonstrates core competency in Snowflake data platform architecture, data loading, performance optimization, and security.',
    url: 'https://achieve.snowflake.com/568f9192-36ba-4544-b768-9738e24aeeaf',
  },
  {
    name: 'Sigma Delivery Partner Certified',
    issuer: 'Sigma Computing',
    status: 'earned',
    dates: 'Apr 2024 — Apr 2025',
    badgeImage: '/badge-sigma.png',
    description: 'Demonstrates completion of hands-on Sigma training and building an end-to-end Sigma solution. Covers Sigma Architecture, Data Modeling, Data Visualization, Metrics, Governance, and architecting scalable solutions.',
    url: 'https://www.credly.com/earner/earned/badge/1264f0d1-4adc-402b-a455-1144464ee592',
  },
  {
    name: 'Sigma Architecture Certified Specialist',
    issuer: 'Sigma Computing',
    status: 'in-progress',
    badgeImage: '/badge-sigma-architect.png',
    description: 'Awarded for completing the Sigma Architecture 2-Day Workshop. Certifies expertise in designing, managing, and embedding Sigma solutions — including cloud data warehouse integration, security, performance optimization, and DevOps workflows.',
    url: null,
  },
  {
    name: 'dbt Developer Certification',
    issuer: 'dbt Labs',
    status: 'in-progress',
    badgeImage: '/badge-dbt-developer.webp',
    description: 'Validates proficiency in building, testing, and deploying analytics engineering workflows using dbt Core and dbt Cloud.',
    url: null,
  },
  {
    name: 'dbt Architect Certification',
    issuer: 'dbt Labs',
    status: 'in-progress',
    badgeImage: '/badge-dbt-architect.webp',
    description: 'Validates advanced expertise in designing scalable dbt project architecture, performance optimization, and enterprise data modeling.',
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
                {c.badgeImage && <img src={c.badgeImage} alt={c.name} className={styles.badgeThumb} />}
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
