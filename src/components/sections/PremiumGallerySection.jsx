import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeader from '../ui/SectionHeader'
import Lightbox from '../ui/Lightbox'
import { galleryImages } from '../../data/gallery'

export default function PremiumGallerySection({ brand }) {
  const items = useMemo(() => galleryImages, [])
  const [openIndex, setOpenIndex] = useState(-1)

  return (
    <section id="gallery" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="PREMIUM GALLERY"
          title="Luxury visuals—crafted like a lookbook"
          description="A Pinterest-style masonry preview with instant fullscreen lightbox."
        />

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((img, idx) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, transform: 'translateY(10px)' }}
              whileInView={{ opacity: 1, transform: 'translateY(0px)' }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: idx * 0.02 }}
              className="break-inside-avoid mb-4"
            >
              <button
                className="group block w-full"
                onClick={() => setOpenIndex(idx)}
                aria-label={`Open image ${idx + 1}`}
              >
                <div className="relative overflow-hidden rounded-3xl ring-1 ring-black/5 bg-white/50">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{ width: '100%', height: 'auto', display: 'block' }}
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <Lightbox
          openIndex={openIndex}
          images={items}
          onClose={() => setOpenIndex(-1)}
        />
      </div>
    </section>
  )
}

