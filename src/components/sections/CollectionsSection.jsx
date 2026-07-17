import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { collections } from '../../data/collections'

function CollectionCard({ item, index }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 16, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.03 }}
      className="group relative overflow-hidden rounded-[28px] ring-1 ring-black/5 bg-white/55 backdrop-blur"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_20%_0%,rgba(29,78,216,0.35),transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(420px_220px_at_80%_20%,rgba(209,213,219,0.35),transparent_55%)]" />
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs font-semibold tracking-[0.24em] text-white/85">{item.tag}</div>
              <div className="mt-2 text-lg font-semibold text-white">{item.name}</div>
              <div className="mt-2 text-sm leading-7 text-white/80">{item.desc}</div>
            </div>
            <div className="hidden sm:block">
              <div className="rounded-2xl bg-white/15 px-3 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/20">
                Explore
              </div>
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={false}
          whileHover={{
            opacity: 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute -left-20 top-6 h-32 w-32 rounded-full bg-vestiora-royalBlue/20 blur-2xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-slate-200/30 blur-2xl" />
          </div>
        </motion.div>

        <div className="absolute inset-x-0 top-0 h-[2px] opacity-0 bg-gradient-to-r from-transparent via-vestiora-royalBlue to-transparent transition-opacity duration-500 group-hover:opacity-100" />
      </div>
    </motion.a>
  )
}

export default function CollectionsSection({ brand }) {
  return (
    <section id="collections" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="FABRIC COLLECTIONS"
          title="Luxury categories, beautifully curated"
          description="Browse premium fabric collections—designer fabrics, embroidery textures, sequins brilliance and more."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((c, idx) => (
            <CollectionCard key={c.name} item={c} index={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

