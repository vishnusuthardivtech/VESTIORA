import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { stats } from '../../data/stats'

function useCountUp(target, startWhen) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!startWhen) return
    const duration = 1100
    const start = performance.now()
    const from = 0
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration)
      const next = Math.round(from + (target - from) * (1 - Math.pow(1 - p, 3)))
      setVal(next)
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [startWhen, target])

  return val
}

function StatCard({ kicker, label, value, suffix, delay, inView }) {
  const count = useCountUp(value, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.65, ease: 'easeOut', delay }}
      className="rounded-[30px] bg-white/60 p-7 ring-1 ring-black/5 backdrop-blur shadow-luxury"
    >
      <div className="text-xs font-semibold tracking-[0.22em] text-vestiora-royalBlue">{kicker}</div>
      <div className="mt-3 text-4xl font-semibold text-slate-900">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm font-semibold text-slate-700">{label}</div>
      <div className="mt-5 h-[2px] w-14 rounded-full bg-gradient-to-r from-vestiora-royalBlue via-slate-200 to-vestiora-royalBlue opacity-70" />
    </motion.div>
  )
}

export default function CustomerExperienceSection({ brand }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)


  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) setInView(true)
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section id="experience" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="CUSTOMER EXPERIENCE"
          title="Trusted by fashion-makers and wholesalers"
          description="Luxury textures, consistent quality and reliable supply—presented in one premium catalogue."
        />

        <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, idx) => (
            <StatCard key={s.label} {...s} delay={idx * 0.05} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

