import styles from './Articles.module.css'

const articles = [
  {
    title: 'Snowflake Cortex Code: From Strategy to Production, Faster',
    publication: 'Coastal Cloud',
    date: '2025',
    author: 'Ben Hardin',
    description: 'How Snowflake Cortex Code\'s native awareness of schemas and governance structures compressed a 150-table masking policy implementation from days to 45 minutes.',
    url: 'https://coastalcloud.us/resources/snowflake-cortex-code-from-strategy-to-production-faster/',
  },
  {
    title: 'Solving for Medical Device Data Relevancy with Cortex LLM Capabilities',
    publication: 'Hakkōda',
    date: 'Feb 2025',
    description: 'Using Snowflake Cortex LLMs and prompt engineering to classify FDA adverse event reports — replacing manual review of thousands of documents with AI-driven triage.',
    url: 'https://hakkoda.io/resources/cortex-llm-capabilities-medical-device-data/',
  },
  {
    title: 'Addressing Issues in Medical Device Data: A Four Step Guide',
    publication: 'Hakkōda',
    date: 'Dec 2024',
    description: 'A practical methodology for making medical device datasets actionable — from ingestion and standardization to data modeling and visualization.',
    url: 'https://hakkoda.io/resources/medical-device-data/',
  },
  {
    title: 'A Smarter Approach to Regulating Medical Devices',
    publication: 'Hakkōda',
    date: 'Sep 2024',
    description: 'An examination of the FDA\'s MAUDE database and how improving data accessibility, relevancy, and usability could accelerate post-market surveillance and patient safety.',
    url: 'https://hakkoda.io/resources/regulating-medical-devices/',
  },
]

export default function Articles() {
  return (
    <section id="articles" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Writing</span>
        <h2 className={styles.heading}>Articles & Insights</h2>
        <div className={styles.list}>
          {articles.map((a, i) => (
            <a key={i} href={a.url} target="_blank" rel="noreferrer" className={styles.item}>
              <div className={styles.meta}>
                <span className={styles.publication}>{a.publication}</span>
                <span className={styles.date}>{a.date}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{a.title}</h3>
                <p className={styles.description}>{a.description}</p>
                {a.author && <span className={styles.authorNote}>Written by {a.author}</span>}
              </div>
              <svg className={styles.arrow} viewBox="0 0 16 16" fill="none">
                <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
