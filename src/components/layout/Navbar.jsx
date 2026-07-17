import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'collections', label: 'Collections' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'videos', label: 'Videos' },
  { id: 'featured', label: 'Featured' },
  { id: 'why', label: 'Why Choose Us' },
  { id: 'categories', label: 'Categories' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ brand }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const els = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean)

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target?.id) setActiveId(visible.target.id)
      },
      { threshold: [0.15, 0.3, 0.5, 0.7] },
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  const logo = useMemo(() => ({ __html: `${brand}` }), [brand])

  return (
    <motion.header
      initial={false}
      animate={{ backdropFilter: scrolled ? 'blur(14px)' : 'blur(10px)' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/70 shadow-md' : 'bg-white/55'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a
          href="#top"
          className="group relative flex items-center gap-2"
          aria-label={`${brand} Home`}
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-vestiora-very-light-blue/80 ring-1 ring-black/5 shadow-sm">
            <span className="text-sm font-semibold tracking-wide text-vestiora-royalBlue">V</span>
          </span>
          <span className="hidden sm:block">
            <span
              className="text-base font-semibold tracking-wide text-slate-900"
              dangerouslySetInnerHTML={logo}
            />
            <span className="ml-1 text-[11px] font-medium tracking-[0.18em] text-slate-500">
              PREMIUM FABRIC
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {navItems.map((item) => {
            const active = activeId === item.id
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                  active ? 'text-slate-900' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {active && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-x-2 bottom-1 h-[2px] rounded-full bg-vestiora-royalBlue"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+910000000000"
            className="hidden rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-800 ring-1 ring-black/5 hover:bg-vestiora-very-light-blue/80 lg:inline-flex"
          >
            <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-vestiora-very-light-blue/70">
              <FaPhoneAlt className="text-vestiora-royalBlue" />
            </span>
            Call
          </a>

          <a
            href="https://wa.me/910000000000"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-vestiora-royalBlue text-white shadow-md ring-1 ring-vestiora-royalBlue/20 hover:brightness-105"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      <div className="lg:hidden">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 pb-3 pt-0">
          <div className="flex flex-wrap gap-2">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-full bg-white/60 px-3 py-2 text-xs font-semibold text-slate-700 ring-1 ring-black/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.header>
  )
}

