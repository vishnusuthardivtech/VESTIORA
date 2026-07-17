import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { whyChooseUs } from '../../data/whyChooseUs'

export default function WhyChooseUsSection({ brand }) {
  return (
    <section id="why" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="WHY CHOOSE US"
          title="Premium fabrics, built for confidence"
          description="Luxury quality, latest designs, trusted wholesale supply and customization-focused finishing."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((i, idx) => (
            <motion.div
              key={i.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: 'easeOut', delay: idx * 0.05 }}
              className="group rounded-[28px] bg-white/60 p-6 ring-1 ring-black/5 backdrop-blur shadow-luxury hover:shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20 text-vestiora-royalBlue">
                  <i.icon />

                </div>
                <div className="text-sm font-semibold text-slate-900">{i.title}</div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{i.desc}</p>
              <div className="mt-5 h-[2px] w-10 rounded-full bg-vestiora-royalBlue opacity-60 transition-all group-hover:w-16" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

