import { useMemo } from 'react'
import SectionHeader from '../ui/SectionHeader'
import { featured } from '../../data/featured'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import { motion } from 'framer-motion'

export default function FeaturedCollectionsSection({ brand }) {
  const items = useMemo(() => featured, [])


  return (
    <section id="featured" className="relative bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <SectionHeader
          kicker="FEATURED COLLECTIONS"
          title="Signature picks for premium styling"
          description="A luxury carousel with smooth autoplay—curated for quick browsing."
        />

        <div className="mt-10">
          <Swiper
            modules={[Autoplay]}

            spaceBetween={18}
            slidesPerView={1.1}
            centeredSlides
            loop
            autoplay={{ delay: 2600, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-6"
          >
            {items.map((it, idx) => (
              <SwiperSlide key={it.name}>
                <motion.a
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.25 }}
                  href="#"
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-[30px] ring-1 ring-black/5 bg-white/55 backdrop-blur">
                    <img
                      src={it.image}
                      alt={it.name}
                      className="h-72 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <div className="text-xs font-semibold tracking-[0.22em] text-white/85">FEATURED</div>
                      <div className="mt-2 text-lg font-semibold text-white">{it.name}</div>
                      <div className="mt-2 text-sm leading-7 text-white/80">{it.desc}</div>
                    </div>
                    <div className="absolute inset-x-0 top-0 h-[2px] opacity-0 bg-gradient-to-r from-transparent via-vestiora-royalBlue to-transparent transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                </motion.a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

