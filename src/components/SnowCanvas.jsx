import { useEffect, useRef } from 'react'
import styles from './SnowCanvas.module.css'

const PARTICLE_COUNT = 80
const MOUSE_RADIUS = 120
const MOUSE_STRENGTH = 0.04

function randomBetween(a, b) {
  return a + Math.random() * (b - a)
}

export default function SnowCanvas() {
  const canvasRef = useRef(null)
  const mouse = useRef({ x: -9999, y: -9999 })
  const particles = useRef([])
  const rafId = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Init particles
    particles.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: randomBetween(0, canvas.width),
      y: randomBetween(0, canvas.height),
      vx: randomBetween(-0.15, 0.15),
      vy: randomBetween(0.1, 0.35),
      radius: randomBetween(1, 2.5),
      opacity: randomBetween(0.2, 0.7),
    }))

    const container = canvas.parentElement
    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onMouseLeave = () => {
      mouse.current = { x: -9999, y: -9999 }
    }
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const p of particles.current) {
        // Mouse repulsion
        const dx = p.x - mouse.current.x
        const dy = p.y - mouse.current.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < MOUSE_RADIUS) {
          const force = (1 - dist / MOUSE_RADIUS) * MOUSE_STRENGTH
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }

        // Dampen velocity drift
        p.vx *= 0.995
        p.vy = p.vy * 0.995 + randomBetween(0.08, 0.15) * 0.005

        p.x += p.vx
        p.y += p.vy

        // Wrap around edges
        if (p.y > canvas.height + 5) p.y = -5
        if (p.x < -5) p.x = canvas.width + 5
        if (p.x > canvas.width + 5) p.x = -5

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(125, 216, 245, ${p.opacity})`
        ctx.fill()
      }

      rafId.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(rafId.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={styles.canvas} />
}
