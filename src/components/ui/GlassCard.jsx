import { motion } from 'framer-motion'

export default function GlassCard({ className = '', children, hover = true }) {
  return (
    <motion.div
      className={`rounded-3xl bg-white/60 ring-1 ring-black/5 backdrop-blur shadow-luxury ${className}`}
      whileHover={hover ? { y: -3, boxShadow: '0 25px 70px rgba(29,78,216,0.10)' } : undefined}
      transition={{ type: 'spring', stiffness: 350, damping: 26 }}
    >
      {children}
    </motion.div>
  )
}

