import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>Contact</span>
        <h2 className={styles.heading}>Let&apos;s Build Something Together</h2>
        <p className={styles.sub}>
          Whether you have a project in mind, a role to fill, or just want to talk data —
          my inbox is open.
        </p>
        <a href="mailto:ben.hardin13@gmail.com" className={styles.btn}>
          Say Hello →
        </a>
        <div className={styles.socials}>
          <a href="https://www.linkedin.com/in/benhardin13/" target="_blank" rel="noreferrer" className={styles.social}>
            LinkedIn
          </a>
          <a href="https://github.com/" target="_blank" rel="noreferrer" className={styles.social}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
