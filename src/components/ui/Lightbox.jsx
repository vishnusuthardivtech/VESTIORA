import { useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes } from 'react-icons/fa'

export default function Lightbox({ openIndex, images, onClose }) {
  const active = openIndex >= 0 ? images[openIndex] : null

  useEffect(() => {
    if (openIndex < 0) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIndex, onClose])

  const idx = openIndex

  const go = (dir) => {
    if (idx < 0) return
    const next = (idx + dir + images.length) % images.length
    window.dispatchEvent(new CustomEvent('vestiora-lightbox-go', { detail: next }))
  }

  const controls = useMemo(() => (active ? [idx, active] : [idx, null]), [active, idx])
  void controls

  useEffect(() => {
    if (openIndex < 0) return
    const handler = (e) => onClose() // placeholder; parent manages openIndex
    window.addEventListener('vestiora-lightbox-next-close', handler)
    return () => window.removeEventListener('vestiora-lightbox-next-close', handler)
  }, [openIndex, onClose])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/75 p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) onClose()
          }}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-[28px] bg-white/10 ring-1 ring-white/10 backdrop-blur"
            initial={{ scale: 0.98, y: 8 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.98, y: 8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <div className="text-xs font-semibold tracking-[0.22em] text-white/80">PREMIUM GALLERY</div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => go(-1)}
                  className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15"
                  aria-label="Previous"
                >
                  Prev
                </button>
                <button
                  onClick={() => go(1)}
                  className="rounded-2xl bg-white/10 px-3 py-2 text-xs font-semibold text-white/90 ring-1 ring-white/10 hover:bg-white/15"
                  aria-label="Next"
                >
                  Next
                </button>
                <button
                  onClick={onClose}
                  className="rounded-2xl bg-white/10 p-2 text-white hover:bg-white/15 ring-1 ring-white/10"
                  aria-label="Close"
                >
                  <FaTimes />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={active.src}
                alt={active.alt}
                className="h-[70vh] w-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-sm font-semibold text-white/95">{active.title ?? active.alt}</div>
                <div className="mt-1 text-xs text-white/70">Tap outside to close • Premium catalogue preview</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

