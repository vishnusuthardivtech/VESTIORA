import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { categories } from '../../data/categories'

export default function CategoriesSection({ brand }) {
  return (
    <section id="categories" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="FABRIC CATEGORIES"
          title="Browse by collection mood"
          description="An elegant category chip UI—no filtering logic."
        />

        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          {categories.map((c, idx) => (
            <motion.button
              key={c}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.015 }}
              whileHover={{ scale: 1.02 }}
              className="rounded-full bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-black/5 backdrop-blur hover:bg-white"
            >
              {c}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

