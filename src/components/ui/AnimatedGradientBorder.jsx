import { motion } from 'framer-motion'

export default function AnimatedGradientBorder({ className = '', children }) {
  return (
    <div className={`relative p-[1px] rounded-3xl bg-gradient-to-r from-vestiora-royalBlue/80 via-slate-200/50 to-vestiora-royalBlue/80 ${className}`}>
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/30 via-white/10 to-white/30 opacity-0" />
      <div className="relative rounded-3xl bg-white/70 backdrop-blur">{children}</div>

      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-70"
        initial={false}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%'],
        }}
        transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(29,78,216,0) 0%, rgba(29,78,216,0.35) 30%, rgba(209,213,219,0.45) 50%, rgba(29,78,216,0.35) 70%, rgba(29,78,216,0) 100%)',
          backgroundSize: '200% 100%',
          maskImage: 'linear-gradient(#000, #000)',
        }}
      />
    </div>
  )
}

