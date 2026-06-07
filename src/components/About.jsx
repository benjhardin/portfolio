import styles from './About.module.css'

const skills = [
  'Snowflake', 'Snowpark', 'Cortex AI', 'Snowflake Native Apps',
  'Python', 'SQL', 'dbt', 'Data Modeling',
  'LLMs', 'RAG', 'ML Classifiers', 'Prompt Engineering',
  'Data Architecture', 'Pipeline Design', 'Enterprise Integration', 'Cloud Strategy',
]

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>About</span>
        <div className={styles.grid}>
          <div className={styles.left}>
            <img src="/headshot.jpg" alt="Ben Hardin" className={styles.headshot} />
            <h2 className={styles.heading}>
              Snowflake GenAI Certified architect building enterprise data platforms that power real AI.
            </h2>
          </div>
          <div className={styles.right}>
            <p className={styles.bio}>
              I'm a Platform Data Architect at Coastal Cloud and a certified Snowflake GenAI Engineer,
              focused on designing and implementing multimillion-dollar Snowflake solutions that
              transform how enterprises store, govern, and derive intelligence from their data. I
              specialize in building secure, scalable data foundations — the kind that make production
              AI actually possible.
            </p>
            <p className={styles.bio}>
              My background spans end-to-end data platform design, production LLM systems, and
              hands-on AI engineering. I bring a founder's mindset to every engagement: I care deeply
              about whether the thing actually works in the real world, not just in a demo.
            </p>
            <div className={styles.skillsWrap}>
              <p className={styles.skillsLabel}>Technologies</p>
              <ul className={styles.skills}>
                {skills.map(s => (
                  <li key={s} className={styles.skill}>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
