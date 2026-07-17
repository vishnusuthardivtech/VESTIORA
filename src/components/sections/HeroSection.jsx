import { motion } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { useEffect, useMemo } from 'react'
import MagneticButton from '../ui/MagneticButton'
import { FaArrowDown } from 'react-icons/fa'

export default function HeroSection({ brand }) {
  const navTarget = useMemo(() => 'collections', [])

  useEffect(() => {
    // Smooth scroll using Lenis (if available)
    try {
      const lenis = new Lenis({ smoothWheel: true, smoothTouch: false })
      const raf = (time) => {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    } catch {
      // ignore
    }
  }, [])

  return (
    <section id="top" className="relative overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
poster={`${import.meta.env.BASE_URL}images/hero/hero-poster.jpg`}
        >
          <source
            src={`${import.meta.env.BASE_URL}videos/hero-1.mp4`}
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white">
          <div className="absolute inset-0 bg-[radial-gradient(1000px_500px_at_20%_10%,rgba(29,78,216,0.25),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_80%_0%,rgba(209,213,219,0.35),transparent_55%)]" />
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-14 pt-10 sm:px-6 lg:grid-cols-2 lg:pb-18">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 ring-1 ring-black/5 backdrop-blur"
          >
            <span className="h-2 w-2 rounded-full bg-vestiora-royalBlue" />
            <span className="text-xs font-semibold tracking-[0.24em] text-slate-700">PREMIUM DIGITAL FABRIC CATALOGUE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: 'easeOut', delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            <span className="text-vestiora-royalBlue">{brand}</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-900 to-vestiora-royalBlue">
              Premium Fabric Collection
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base"
          >
            Browse designer fabrics, embroidery, sequins, fancy textures and ethnic wear—curated like a luxury fashion lookbook.
          </motion.p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <MagneticButton
              href={`#${navTarget}`}
              className="inline-flex items-center justify-center rounded-2xl bg-vestiora-royalBlue px-6 py-3 text-sm font-semibold text-white shadow-xl ring-1 ring-vestiora-royalBlue/25 hover:brightness-105"
            >
              Explore Collections
            </MagneticButton>

            <a
              href="#gallery"
              className="inline-flex items-center justify-center rounded-2xl bg-white/70 px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-black/5 backdrop-blur hover:bg-white"
            >
              View Premium Gallery
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.18 }}
            className="mt-10 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-slate-600"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/70 ring-1 ring-black/5">
              <FaArrowDown className="text-vestiora-royalBlue" />
            </span>
            <span>SCROLL TO DISCOVER</span>
          </motion.div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-72 w-72 rounded-full bg-vestiora-royalBlue/10 blur-3xl" />
          <div className="absolute -right-10 top-24 h-64 w-64 rounded-full bg-slate-300/20 blur-3xl" />

          <div className="relative rounded-[32px] border border-black/5 bg-white/50 p-4 shadow-2xl backdrop-blur">
            <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-b from-vestiora-royalBlue/10 to-white">
              <img
                src={`${import.meta.env.BASE_URL}images/hero/hero-1.jpg`}
                alt="VESTIORA fabric"
                className="h-[420px] w-full object-cover sm:h-[470px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/85 via-white/15 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid gap-3 sm:grid-cols-2">
                  {[{ t: 'Embroidery', v: 'Handcrafted Detail' }, { t: 'Sequins', v: 'Luminous Finish' }, { t: 'Designer', v: 'Curated Patterns' }, { t: 'Ethnic', v: 'Heritage Texture' }].map(
                    (c, i) => (
                      <div key={i} className="rounded-2xl bg-white/70 px-4 py-3 ring-1 ring-black/5 backdrop-blur">
                        <div className="text-xs font-semibold tracking-[0.2em] text-vestiora-royalBlue">{c.t}</div>
                        <div className="mt-1 text-sm font-semibold text-slate-900">{c.v}</div>
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-8 h-1 w-1 -translate-x-1/2 rounded-full bg-vestiora-royalBlue shadow-[0_0_25px_rgba(29,78,216,0.6)]" />
            <div className="absolute left-1/4 top-24 h-1 w-1 rounded-full bg-slate-300 shadow-[0_0_25px_rgba(209,213,219,0.7)]" />
            <div className="absolute right-1/4 top-36 h-1 w-1 rounded-full bg-slate-200 shadow-[0_0_25px_rgba(229,231,235,0.8)]" />
          </div>
        </div>
      </div>
    </section>
  )
}

