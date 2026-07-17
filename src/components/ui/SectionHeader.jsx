import { motion } from 'framer-motion'

export default function SectionHeader({ kicker, title, description }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-xs font-semibold tracking-[0.26em] text-vestiora-royalBlue"
        >
          {kicker}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-4 text-sm leading-7 text-slate-600"
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}

