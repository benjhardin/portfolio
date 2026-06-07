import styles from './Hero.module.css'
import SnowCanvas from './SnowCanvas'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <SnowCanvas />
      <div className={styles.glow} />
      <div className={styles.content}>
        <p className={styles.eyebrow}>Snowflake GenAI Certified · Data Architecture · Enterprise AI</p>
        <h1 className={styles.name}>Ben Hardin</h1>
        <p className={styles.tagline}>
          Building the data foundations that make<br />
          enterprise AI actually work.
        </p>
        <div className={styles.actions}>
          <a href="#projects" className={styles.btnPrimary}>View Projects</a>
          <a href="#contact" className={styles.btnSecondary}>Get in Touch</a>
        </div>
      </div>
    </section>
  )
}
