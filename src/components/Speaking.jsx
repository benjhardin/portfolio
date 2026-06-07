import styles from './Speaking.module.css'

const talks = [
  {
    event: 'Snowflake Summit 2026',
    session: 'AD208',
    title: 'Your Data Platform Is Now Your App Platform: 300% ROI with Snowflake, Sigma, and dbt',
    coSpeaker: 'Jesse King, COO — Lumelight',
    description: 'A live case study on how Lumelight bypassed traditional software development to transform their claims data into two high-margin revenue products — moving from a 48-hour manual process to an automated, enterprise-grade platform built entirely on Snowflake, Sigma, and dbt.',
    highlights: [
      '300% ROI from data platform rebuild',
      '48-hour process eliminated with Cortex Code AI',
      'White-labeled POC delivered in 3 months, GA in 5',
      '500+ schema variations handled by automated pipeline',
    ],
    location: 'San Francisco, CA',
    year: '2026',
  },
  {
    event: 'IMSH 2024',
    session: null,
    title: 'CPoRt: A Low-Cost Real-Time Feedback CPR Assistive Device',
    coSpeaker: null,
    description: 'Presented CPoRt at the International Meeting on Simulation in Healthcare — the premier conference for simulation-based medical education. The debut generated significant interest from attendees, with orders coming in on the spot and momentum building toward final design and manufacturing.',
    highlights: [
      'First public conference presentation',
      'Live product demo at premier healthcare sim conference',
      'Generated immediate order interest from attendees',
      'Built momentum toward manufacturing milestone',
    ],
    location: 'San Diego, CA',
    year: '2024',
  },
]

export default function Speaking() {
  return (
    <section id="speaking" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>On Stage</span>
        <h2 className={styles.heading}>Speaking</h2>
        <div className={styles.talks}>
          {talks.map((talk, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.left}>
                <div className={styles.eventWrap}>
                  <span className={styles.event}>{talk.event}</span>
                  {talk.session && <span className={styles.session}>Session {talk.session}</span>}
                </div>
                <p className={styles.location}>{talk.location} · {talk.year}</p>
                {talk.coSpeaker && <p className={styles.coSpeaker}>w/ {talk.coSpeaker}</p>}
              </div>
              <div className={styles.right}>
                <h3 className={styles.title}>{talk.title}</h3>
                <p className={styles.description}>{talk.description}</p>
                <ul className={styles.highlights}>
                  {talk.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
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
