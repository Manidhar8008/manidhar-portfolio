import { CONFIG } from './config'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
}

export class IntentEngine {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D
  private width = 0
  private height = 0
  private particles: Particle[] = []
  private trail: Array<{ x: number; y: number; life: number }> = []
  private rafId = 0
  private mouse = { x: 0, y: 0, active: false }

  constructor() {
    this.canvas = document.createElement('canvas')
    const maybeCtx = this.canvas.getContext('2d')
    if (!maybeCtx) {
      throw new Error('Cannot create canvas context')
    }
    this.ctx = maybeCtx

    this.handleResize = this.handleResize.bind(this)
    this.handlePointerMove = this.handlePointerMove.bind(this)
    this.loop = this.loop.bind(this)

    this.setupCanvas()
    this.handleResize()
    this.setupParticles()

    window.addEventListener('resize', this.handleResize)
    window.addEventListener('pointermove', this.handlePointerMove, { passive: true })

    this.loop()
  }

  destroy() {
    cancelAnimationFrame(this.rafId)
    window.removeEventListener('resize', this.handleResize)
    window.removeEventListener('pointermove', this.handlePointerMove)
    this.canvas.remove()
  }

  private setupCanvas() {
    this.canvas.style.position = 'fixed'
    this.canvas.style.top = '0'
    this.canvas.style.left = '0'
    this.canvas.style.width = '100vw'
    this.canvas.style.height = '100vh'
    this.canvas.style.pointerEvents = 'none'
    this.canvas.style.zIndex = '0'
    document.body.appendChild(this.canvas)
  }

  private setupParticles() {
    this.particles = Array.from({ length: CONFIG.particleCount }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * CONFIG.floatSpeed,
      vy: (Math.random() - 0.5) * CONFIG.floatSpeed,
      size: CONFIG.minSize + Math.random() * (CONFIG.maxSize - CONFIG.minSize),
      opacity: 0.35 + Math.random() * 0.25,
    }))
  }

  private handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.setupParticles()
  }

  private handlePointerMove(event: PointerEvent) {
    this.mouse = { x: event.clientX, y: event.clientY, active: true }
    this.trail.push({ x: event.clientX, y: event.clientY, life: 1 })
    if (this.trail.length > 24) this.trail.shift()
  }

  private drawTrail() {
    for (const t of this.trail) {
      const grd = this.ctx.createRadialGradient(t.x, t.y, 0, t.x, t.y, 140)
      grd.addColorStop(0, 'rgba(34, 211, 178, 0.16)')
      grd.addColorStop(1, 'rgba(34, 211, 178, 0)')
      this.ctx.fillStyle = grd
      this.ctx.fillRect(t.x - 150, t.y - 150, 300, 300)
      t.life -= CONFIG.trailFade
    }
    this.trail = this.trail.filter((t) => t.life > 0)
  }

  private updateParticles() {
    for (const p of this.particles) {
      // subtle drift
      p.vx += (Math.random() - 0.5) * CONFIG.floatSpeed * 0.15
      p.vy += (Math.random() - 0.5) * CONFIG.floatSpeed * 0.15

      // magnetic attraction
      if (this.mouse.active) {
        const dx = this.mouse.x - p.x
        const dy = this.mouse.y - p.y
        const dist = Math.hypot(dx, dy) || 1
        if (dist < CONFIG.attractionRadius) {
          const force = ((CONFIG.attractionRadius - dist) / CONFIG.attractionRadius) * CONFIG.attractionStrength
          p.vx += (dx / dist) * force
          p.vy += (dy / dist) * force
        }
      }

      // limit velocity
      p.vx *= 0.96
      p.vy *= 0.96

      p.x += p.vx
      p.y += p.vy

      // wrap edges softly
      if (p.x < -50) p.x = this.width + 50
      if (p.x > this.width + 50) p.x = -50
      if (p.y < -50) p.y = this.height + 50
      if (p.y > this.height + 50) p.y = -50
    }
  }

  private drawParticles() {
    for (const p of this.particles) {
      const opacity = p.opacity
      const color = CONFIG.color.replace('OPACITY', opacity.toString())
      const glow = CONFIG.color.replace('OPACITY', (opacity * 0.45).toString())

      this.ctx.fillStyle = glow
      this.ctx.beginPath()
      this.ctx.ellipse(p.x, p.y, p.size * 1.6, p.size * 1.2, 0, 0, Math.PI * 2)
      this.ctx.fill()

      this.ctx.fillStyle = color
      this.ctx.beginPath()
      this.ctx.ellipse(p.x, p.y, p.size, p.size * 0.9, 0, 0, Math.PI * 2)
      this.ctx.fill()
    }
  }

  private loop() {
    this.ctx.clearRect(0, 0, this.width, this.height)
    this.drawTrail()
    this.updateParticles()
    this.drawParticles()
    this.rafId = requestAnimationFrame(this.loop)
  }
}
