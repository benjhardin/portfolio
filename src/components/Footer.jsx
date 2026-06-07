import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Ben Hardin</span>
      <span className={styles.muted}>Built with React + Vite</span>
    </footer>
  )
}
