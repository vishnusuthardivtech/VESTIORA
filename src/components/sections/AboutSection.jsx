import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'

const timeline = [
  { year: 'Craft', title: 'Quality at the core', desc: 'Premium threads, refined finishing, luxury textures.' },
  { year: 'Designers', title: 'Designer Collection', desc: 'Modern patterns with fashion-level styling.' },
  { year: 'Embroidery', title: 'Hand-finished Embroidery', desc: 'Dense detailing for statement silhouettes.' },
  { year: 'Sequins', title: 'Luminous & Evening-ready', desc: 'Glow-ready surfaces for party wear.' },
]

export default function AboutSection({ brand }) {
  return (
    <section id="about" className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-vestiora-royalBlue/10 blur-3xl" />
          <div className="overflow-hidden rounded-[32px] border border-black/5 bg-white/60 shadow-2xl">
            <img
              src="/images/about/about-1.jpg"
              alt="Luxury fabric"
              className="h-[520px] w-full object-cover"
              loading="lazy"
            />
            <div className="-mt-20 grid gap-3 px-5 pb-5 sm:grid-cols-2">
              {[{ k: 'Premium Manufacturing', v: 'Precision finishing' }, { k: 'Designer Collection', v: 'Fashion-inspired patterns' }].map(
                (b, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                    className="rounded-2xl bg-white/80 p-4 ring-1 ring-black/5 backdrop-blur"
                  >
                    <div className="text-xs font-semibold tracking-[0.2em] text-vestiora-royalBlue">{b.k}</div>
                    <div className="mt-1 text-sm font-semibold text-slate-900">{b.v}</div>
                  </motion.div>
                ),
              )}
            </div>
          </div>
        </div>

        <div>
          <SectionHeader
            kicker="ABOUT BRAND"
            title="Luxury craftsmanship, curated for every occasion"
            description="VESTIORA brings together designer fabrics, embroidery finesse, sequins brilliance and ethnic heritage—presented as a premium digital catalogue."
          />

          <div className="mt-10 space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="text-sm leading-8 text-slate-600"
            >
              We focus on fabric feel, finishing detail and aesthetic consistency. Every collection is designed to elevate party wear, wedding looks and everyday ethnic styling.
            </motion.p>

            <div className="relative">
              <div className="absolute left-2 top-2 bottom-2 w-px bg-slate-200" />
              <div className="space-y-4">
                {timeline.map((t, idx) => (
                  <motion.div
                    key={t.year}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.08 }}
                    className="relative flex gap-4 rounded-3xl bg-white/60 p-5 ring-1 ring-black/5 backdrop-blur"
                  >
                    <div className="relative mt-1 h-9 w-9 rounded-2xl bg-vestiora-royalBlue/10 ring-1 ring-vestiora-royalBlue/20">
                      <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-vestiora-royalBlue">
                        {t.year}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{t.title}</div>
                      <div className="mt-1 text-sm leading-7 text-slate-600">{t.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

