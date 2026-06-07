import { useEffect } from 'react'
import styles from './CertModal.module.css'

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const isEarned = cert.status === 'earned'

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">✕</button>

        <div className={styles.badge}>
          <BadgeIcon issuer={cert.issuer} />
        </div>

        <div className={styles.body}>
          <span className={isEarned ? styles.badgeEarned : styles.badgeProgress}>
            {isEarned ? 'Earned' : 'In Progress'}
          </span>
          <p className={styles.issuer}>{cert.issuer}</p>
          <h2 className={styles.name}>{cert.name}</h2>
          <p className={styles.description}>{cert.description}</p>

          {cert.dates && (
            <p className={styles.dates}>{cert.dates}</p>
          )}

          {cert.url && isEarned && (
            <a href={cert.url} target="_blank" rel="noreferrer" className={styles.verifyBtn}>
              Verify Credential →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function BadgeIcon({ issuer }) {
  if (issuer === 'Snowflake') return <SnowflakeIcon />
  if (issuer === 'Sigma Computing') return <SigmaIcon />
  if (issuer === 'dbt Labs') return <DbtIcon />
  return <DefaultIcon />
}

function SnowflakeIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="rgba(41,181,232,0.12)" />
      <g stroke="#29b5e8" strokeWidth="3" strokeLinecap="round">
        <line x1="40" y1="14" x2="40" y2="66" />
        <line x1="17.4" y1="27" x2="62.6" y2="53" />
        <line x1="17.4" y1="53" x2="62.6" y2="27" />
        <line x1="40" y1="14" x2="33" y2="21" />
        <line x1="40" y1="14" x2="47" y2="21" />
        <line x1="40" y1="66" x2="33" y2="59" />
        <line x1="40" y1="66" x2="47" y2="59" />
        <line x1="17.4" y1="27" x2="17.4" y2="35" />
        <line x1="17.4" y1="27" x2="24.4" y2="31" />
        <line x1="62.6" y1="53" x2="62.6" y2="45" />
        <line x1="62.6" y1="53" x2="55.6" y2="49" />
        <line x1="17.4" y1="53" x2="24.4" y2="49" />
        <line x1="17.4" y1="53" x2="17.4" y2="45" />
        <line x1="62.6" y1="27" x2="55.6" y2="31" />
        <line x1="62.6" y1="27" x2="62.6" y2="35" />
      </g>
    </svg>
  )
}

function SigmaIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="rgba(41,181,232,0.12)" />
      <text x="40" y="53" textAnchor="middle" fontSize="36" fontWeight="bold" fill="#29b5e8" fontFamily="serif">Σ</text>
    </svg>
  )
}

function DbtIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="rgba(41,181,232,0.12)" />
      <text x="40" y="50" textAnchor="middle" fontSize="20" fontWeight="900" fill="#29b5e8" fontFamily="monospace">dbt</text>
    </svg>
  )
}

function DefaultIcon() {
  return (
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="40" cy="40" r="40" fill="rgba(41,181,232,0.12)" />
      <circle cx="40" cy="40" r="18" stroke="#29b5e8" strokeWidth="3" />
      <path d="M40 28v12l8 8" stroke="#29b5e8" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}
