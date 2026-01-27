import { useEffect, useRef } from 'react'

const CursorGlow = () => {
  const canvasRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const lines = useRef([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Initialize lines
    const initLines = () => {
      lines.current = []
      for (let i = 0; i < 12; i++) {
        lines.current.push({
          angle: (i / 12) * Math.PI * 2,
          length: 0,
          targetLength: Math.random() * 150 + 100,
        })
      }
    }
    initLines()

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    const animate = () => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const { x, y } = mousePos.current

      // Draw 3D perspective lines
      lines.current.forEach((line, i) => {
        // Smooth length animation
        line.length += (line.targetLength - line.length) * 0.1

        // Calculate line endpoints
        const startX = x + Math.cos(line.angle) * 20
        const startY = y + Math.sin(line.angle) * 20
        const endX = x + Math.cos(line.angle) * (line.length + 20)
        const endY = y + Math.sin(line.angle) * (line.length + 20)

        // Gradient color based on depth
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY)
        gradient.addColorStop(0, 'rgba(255, 255, 255, 0.8)')
        gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.4)')
        gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

        // Draw line with varying thickness (3D perspective)
        ctx.strokeStyle = gradient
        ctx.lineWidth = 3 - (i % 3) * 0.5
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()

        // Draw glow effect
        ctx.shadowColor = 'rgba(255, 255, 255, 0.5)'
        ctx.shadowBlur = 20
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.3 - (i % 3) * 0.1})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
        ctx.shadowColor = 'transparent'

        // Randomize target length occasionally for dynamic effect
        if (Math.random() < 0.02) {
          line.targetLength = Math.random() * 150 + 80
        }
      })

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    const frame = requestAnimationFrame(animate)

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default CursorGlow
