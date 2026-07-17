import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import { videos } from '../../data/videos'


function VideoCard({ item, index, onOpen }) {
  return (
    <motion.button
      initial={{ opacity: 0, y: 14, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: 'easeOut', delay: index * 0.03 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      onClick={onOpen}
      className="group text-left"
    >
      <div className="relative overflow-hidden rounded-[28px] ring-1 ring-black/5 bg-white/55 backdrop-blur">
        <video
          src={item.url}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="rounded-3xl bg-white/15 px-6 py-4 text-white ring-1 ring-white/20 backdrop-blur">
            <div className="text-xs font-semibold tracking-[0.22em]">PLAY</div>
            <div className="mt-2 text-lg font-semibold">{item.title}</div>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export function VideoModal({ video, onClose }) {
  useEffect(() => {
    if (!video) return undefined

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [video, onClose])

  return createPortal(
    <AnimatePresence>
      {video && (
        <motion.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'rgba(0,0,0,.85)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose()
          }}
        >
          <div
              className="video-modal-box"
              style={{
              width: 'min(420px, 90vw)',   // portrait videos ke liye perfect
              maxHeight: '88vh',
              background: '#000',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              }}
            >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close video"
              style={{
                position: 'absolute',
                zIndex: 1,
                top: '12px',
                right: '12px',
                border: 0,
                borderRadius: '999px',
                padding: '8px 12px',
                background: 'rgba(0,0,0,.7)',
                color: 'white',
                cursor: 'pointer',
              }}
            >
              Close
            </button>
            <video
                  src={video.url}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  style={{
                    width: '100%',
                    maxHeight: '88vh',
                    objectFit: 'contain',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

export default function VideoCollectionSection() {
  const items = videos
  const [active, setActive] = useState(null)

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setActive(null)
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <section id="videos" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="VIDEO COLLECTION"
          title="Motion fabric previews"
          description="Tap a card to open the premium fabric video preview. (No downloads—catalog viewing only.)"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((v, idx) => (
            <VideoCard key={v.url} item={v} index={idx} onOpen={() => setActive(v)} />
          ))}
        </div>

        <VideoModal video={active} onClose={() => setActive(null)} />
      </div>
    </section>
  )
}

