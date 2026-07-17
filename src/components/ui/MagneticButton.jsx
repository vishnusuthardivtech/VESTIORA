import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function MagneticButton({ className = '', children, onClick, href }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = e.clientX - rect.left
    const py = e.clientY - rect.top
    const dx = (px - rect.width / 2) / rect.width
    const dy = (py - rect.height / 2) / rect.height
    x.set(dx * 10)
    y.set(dy * 10)
  }

  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  const Comp = href ? 'a' : motion.button

  const props = href
    ? {
        href,
        className,
      }
    : {
        type: 'button',
        onClick,
        className,
      }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
    >
      {href ? (
        <a {...props}>{children}</a>
      ) : (
        <motion.button {...props} whileTap={{ scale: 0.98 }}>
          {children}
        </motion.button>
      )}
    </motion.div>
  )
}

